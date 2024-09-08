import React, { useState } from "react";  
import './Counter.css';  

const Counter = () => {  
    const [count, setCount] = useState(0);  

    const increment = () => {  
        if (count < 20) {  
            setCount(count + 1);  
        }  
    };  

    const decrement = () => {  
        if (count > 0) {  
            setCount(count - 1);  
        }  
    };  

    const reset = () => {  
        setCount(0);  
    };  

    return (  
        <div className="container">  
            <div className="card">  
                <h1 className="title">Counter: {count}</h1>  
                <div className="button-container">  
                    <button onClick={increment} className="button increment">  
                        Plus  
                    </button>  
                    <button onClick={decrement} className="button decrement">  
                        Minus  
                    </button>  
                    <button onClick={reset} className="button reset">  
                        Reset  
                    </button>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Counter;  