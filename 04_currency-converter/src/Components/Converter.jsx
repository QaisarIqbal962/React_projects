import React, { useEffect, useState } from 'react';  

const Converter = () => {  
  const [amount, setAmount] = useState(1); // Amount in selected currency  
  const [amountConverted, setAmountConverted] = useState(0); // Converted amount  
  const [exchangeRates, setExchangeRates] = useState({}); // Exchange rates  
  const [selectedCurrency, setSelectedCurrency] = useState('EUR'); // Default currency to convert from  
  const [reverseCurrency, setReverseCurrency] = useState('USD'); // Currency to convert to  
  const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY', 'PKR', 'AED', 'QAR', 'SAR'];  

  const fetchExchangeRates = async () => {  
    try {  
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');  
      const data = await response.json();  
      setExchangeRates(data.rates);  
    } catch (error) {  
      console.error('Error fetching exchange rates:', error);  
    }  
  };  

  useEffect(() => {  
    fetchExchangeRates(); // Fetch exchange rates on component mount  
  }, []);  

  const handleConvert = () => {  
    const rate = exchangeRates[reverseCurrency] || 0;  
    if (rate) {  
      setAmountConverted(amount * rate); // Convert the selected currency amount to the reverse currency  
    } else {  
      setAmountConverted(0); // Handle case where exchange rate is not found  
    }  
  };  

  const handleSwap = () => {  
    setSelectedCurrency(reverseCurrency);  
    setReverseCurrency(selectedCurrency);  
  };  

  const handleRefresh = () => {  
    setAmount(1); // Reset to default amount (1)  
    setAmountConverted(0);  
  };  

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">  
      <h1 className="text-4xl font-extrabold text-white mb-6 shadow-lg">Currency Converter</h1>  
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md transition-transform transform hover:scale-105">  
        
        <div className="mb-5">  
          <input  
            type="number"  
            value={amount}  
            onChange={(e) => setAmount(e.target.value)}  
            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-300"  
            placeholder={`Enter amount in ${selectedCurrency}`}  
            min="0"  
          />  
        </div>  
        
        <div className="flex items-center mb-5">  
          <select  
            value={selectedCurrency}  
            onChange={(e) => setSelectedCurrency(e.target.value)}  
            className="border border-gray-300 p-4 rounded-lg w-full mr-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-300"  
          >  
            {currencies.map((currency) => (  
              <option key={currency} value={currency}>  
                {currency}  
              </option>  
            ))}  
          </select>  
          
          <button   
            onClick={handleSwap}  
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105"  
          >  
            Swap  
          </button>  
          
          <select  
            value={reverseCurrency}  
            onChange={(e) => setReverseCurrency(e.target.value)}  
            className="border border-gray-300 p-4 rounded-lg w-full ml-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-300"  
          >  
            {currencies.map((currency) => (  
              <option key={currency} value={currency}>  
                {currency}  
              </option>  
            ))}  
          </select>  
        </div>  
        
        <div className="text-xl font-bold text-gray-700 mb-4">Converted Amount</div>  
        <div className="text-2xl font-semibold text-blue-500 mb-4">  
          {amount} {selectedCurrency} = {amountConverted.toFixed(2)} {reverseCurrency}  
        </div>  
        
        <div className="mt-6 flex space-x-4">  
          <button  
            onClick={handleConvert}  
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"  
          >  
            Convert  
          </button>  
          <button  
            onClick={handleRefresh}  
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"  
          >  
            Refresh  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Converter;