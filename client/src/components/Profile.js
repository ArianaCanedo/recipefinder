
   
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function Profile () {
  const axios = useAxios();

  const [data, setData] = useState("");

  const requestData = async () => {
    try {
      const { data } = await axios("/users/profile");
      setData(data.message);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    requestData();
  });

  return (
    <div className="container">
      <h1>My Profile</h1>
      <p>My favourite recipes here</p>
    </div>
  );
}