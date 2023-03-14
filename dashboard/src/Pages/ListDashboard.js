import react, { useState, useEffect } from 'react';
import axios from "axios";

export default function ListDashboard() {
  const usersUrl = "http://localhost:8080";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  var dd;
  const getAllUsers =async () => {
     const data=await axios.get(`${usersUrl}`)
    console.log(data)
    setUsers(data);
}

//   const getDetails = async () => {
//     const dd = await axios.get(`${usersUrl}/`);
//     console.log(dd);
//   };
//   getDetails();
  return (
    <div>
      
       
      
      </div>
  );
}
