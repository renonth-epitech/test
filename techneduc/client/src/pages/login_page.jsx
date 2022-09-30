import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/style";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
  }, []);


  return (
    <div style={style({ column: {}, paddingSymmetric: { horizontal: 100 }, align: "left" })}>
      <input name='email' value={email ?? ""}
        onChange={e => { setEmail(e.target.value) }} />
      <input name='password' type='password' value={password ?? ""}
        onChange={e => { setPassword(e.target.value) }} />
      <button >Login</ button >
    </div >
  )
}