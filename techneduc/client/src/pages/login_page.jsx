import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

function LoginPage() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const container = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();


  }

  useEffect(() => {
  }, []);

  return (<>
    <Header />
  </>
  );
}


export default LoginPage;
