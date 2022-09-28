import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")


  async function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
  }, []);

  return (<>
    <Header />
    <input name='email' value={email ?? ""}
      onChange={e => { setEmail(e.target.value) }} />
    <input name='password' type='password' value={email ?? ""}
      onChange={e => { setEmail(e.target.value) }} />
  </>
  );
}


export default LoginPage;
