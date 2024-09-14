import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/QaisarIqbal962")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data)
      });
  }, []);

  return (
    <div className="bg-gray-600 text-white text-2xl rounded-sm text-center">  
    Github followers: {data.followers}  
    <img   
      src={data.avatar_url}   
      alt="Git picture"   
      className="w-24 h-24 rounded-full mx-auto mb-4" // Added classes  
    />  
  </div>
  );
};

export default Github;
