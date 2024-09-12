  
import React, { useEffect, useState } from 'react';  

const Converter = () => {  
  const [amount, setAmount] = useState(1);  
  const [convertedAmount, setConvertedAmount] = useState(0);  
  const [exchangeRate, setExchangeRate] = useState(0);  

  const fetchExchangeRate = async () => {  
    try {  
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');  
      const data = await response.json();  
      setExchangeRate(data.rates.PKR);  
    } catch (error) {  
      console.error('Error fetching exchange rate:', error);  
    }  
  };  

  useEffect(() => {  
    fetchExchangeRate();  
  }, []);  

  const handleConvert = () => {  
    setConvertedAmount(amount * exchangeRate);  
  };  

  const handleRefresh = () => {  
    setAmount(0);   
    setConvertedAmount(0); 
  };  

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">  
      <h1 className="text-4xl font-extrabold text-white mb-6 shadow-lg">USD to PKR Converter</h1>  
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md transition-transform transform hover:scale-105">  
        <div className="mb-5">  
          <input  
            type="number"  
            value={amount}  
            onChange={(e) => setAmount(e.target.value)}  
            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition duration-300"  
            placeholder="Enter amount in USD"  
            min="0"  
          />  
        </div>  
        <div className="text-xl font-bold text-gray-700 mb-4">  
          Converted Amount  
        </div>  
        <div className="text-2xl font-semibold text-blue-500 mb-4">  
          {amount} USD = {convertedAmount.toFixed(2)} PKR  
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