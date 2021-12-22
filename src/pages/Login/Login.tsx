import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../services/Auth";
import { useAppDispatch } from '../../redux/hooks';
import { login } from "../../redux/slices/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");

  // TODO: need to implement some sort of validation
  const onSubmit = async () => {
    const result = await Auth.login(email, password, role);
    console.log({ result });
    if(result === 'success'){
      dispatch(login({ user: { email: email }, isLogged: true}))
    }
  };

  return (
    <div className="flex justify-center p-10">
      <Form className="w-96">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <div style={{ display: "flex", flexDirection: "column-reverse", gap: "25px" }}>
          <Link to={"/register"}>Not registered yet ?</Link>
          <Button variant="primary" type="button" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
