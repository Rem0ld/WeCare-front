import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Home = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  return <div>Hello World!</div>;
};

export default Home;
