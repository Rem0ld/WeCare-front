import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Auth from "../../services/Auth";
import { User } from "../../types/user.types";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [numSs, setNumSs] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const user: User = {
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    numSs: numSs,
    role: role,
  };

  // TODO: need to implement some sort of validation
  const onSubmit = async () => {
    const result = await Auth.register(user);
    console.log({ result });
  };

  return (
    <div className="flex justify-center p-10">
      <Form className="w-96">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Firstname"
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lastname"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSocialnumber">
          <Form.Label>Social number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Social number"
            onChange={(event) => {
              setNumSs(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
