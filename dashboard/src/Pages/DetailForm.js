import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const initialValue = {
    ID: '',
    Status: '',
    Repository: '',
    Finding:'',
    QueuedAt:'',
    FinishedAt:''
};

export default function DetailForm() {
  const [user, setUser] = useState(initialValue);
  const { ID,
  Status,
  Repository,
  Finding,
  QueuedAt,
  FinishedAt } = user;

//   let navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e)
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const usersUrl = "http://localhost:8080";

  const reset=()=>{
    setUser(initialValue);
  }
  const addUserDetails = async () => {
    const dd = await axios.post(`${usersUrl}/add`, user)
    reset();
    console.log(dd);

    return dd;
  };

  return (
    <>
      <Form>
        <Form.Field>
          <label>ID</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="ID"
            value={ID}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='Status'
            value={Status}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Repository</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="Repository"
            value={Repository}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Findings</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="Finding"
            value={Finding}
            placeholder="Finding"
          />
        </Form.Field>
        <Form.Field>
          <label>QueuedAt</label>
          <input
            onChange={(e) => onValueChange(e)}
            name="QueuedAt"
            value={QueuedAt}
            placeholder="QueuedAt"
          />
        </Form.Field>
        <Form.Field>
          <label>FinishedAt</label>
          <input type={TimeRanges} value={FinishedAt} placeholder="FinishedAt" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={addUserDetails}>Submit</Button>
      </Form>
    </>
  );
}
