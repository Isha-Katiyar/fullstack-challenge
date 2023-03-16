import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const initialValue = {
  ID: "",
  Status: "",
  Repository: "",
  // Finding: [
  //   {
  //     type: "sast",
  //     ruleId: "G402",
  //     location: {
  //       path: "connectors/apigateway.go",
  //       positions: {
  //         begin: {
  //           line: 60,
  //         },
  //       },
  //     },

  //   },
  //   {
  //     type: "sast",
  //     ruleId: "G404",
  //     location: {
  //       path: "util/util.go",
  //       positions: {
  //         begin: {
  //           line: 32,
  //         },
  //       },
  //     },
  //   },
  // ],
};

export default function DetailForm() {
  const [user, setUser] = useState(initialValue);
  const { ID, Status, Repository } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const usersUrl = "http://localhost:8080";

  const reset = () => {
    setUser(initialValue);
  };
  const addUserDetails = async () => {
    const dd = await axios.post(`${usersUrl}/add`, user);
    reset();
    navigate("/dashboard");

    return dd;
  };

  return (
    <div className="Container">
      <Form>
        <h1>Enter Your Details</h1>
        <Form.Field>
          <label>ID</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="ID"
            value={ID}
            placeholder="Ex:123456"
          />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <select onChange={(e) => onValueChange(e)} name="Status">
            <option value="">Select</option>
            <option value="Queued">Queued</option>
            <option value="In Progress">In Progress</option>
            <option value="Success">Success</option>
            <option value="Failure">Failure</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Repository</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="Repository"
            value={Repository}
            placeholder="Repository Name"
          />
        </Form.Field>

        <Button type="submit" onClick={addUserDetails}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
