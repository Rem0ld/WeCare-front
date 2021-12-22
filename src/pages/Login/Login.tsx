import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Auth from "../../services/Auth";

const Login = () => {
  const navigate = useNavigate();
  const location: any = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");

  // TODO: need to implement some sort of validation
  const onSubmit = async () => {
    const result = await Auth.login(email, password, role);
    // TODO: check with back if synchronized
    if (result === "success") {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="flex justify-center p-10">
      <Form className="w-96">
        {from && <div className="mb-10">You should be connected to go on {from}</div>}
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
