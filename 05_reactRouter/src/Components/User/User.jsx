import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return <div className="bg-gray-600 text-white text-2xl rounded-sm  text-center">user: {userId}</div>;
};

export default User;
