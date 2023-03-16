import react, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function ListDashboard() {
  const usersUrl = "http://localhost:8080";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const data = await axios.get(`${usersUrl}`);
    console.log(data.data);
    setUsers(data.data);
  };

  const renderListOfUserNames = (names) => {
    return names.map((name,idx) => (
      <tr>
        
        <td>{idx}</td>
        <td>{name.ID}</td>
        <td>{name.Status}</td>
        <td>{name.Repository}</td>
        <td>{name.createdAt}</td>
        <td>{name.updatedAt}</td>
        <td>{name._id}</td>
      </tr>
    ));
  };

  return (
    <table class="ui celled table Container1" >
      <thead>
        <tr>
          <th>S.No</th>
          <th>ID</th>
          <th>Status</th>
          <th>Repository Name</th>
          <th>Queued At</th>
          <th>Finished At</th>
          <th>Database Id</th>
        </tr>
      </thead>
      <tbody>{renderListOfUserNames(users)}</tbody>
    </table>
  );
}
