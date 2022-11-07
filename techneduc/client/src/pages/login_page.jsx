import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "../style/style"
import '../style/card.scss'
import Header from "../components/header";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("role", email)
    localStorage.setItem("loggedIn", true)
    navigate("/dashboard")
  }

  useEffect(() => {
  }, []);

  return (<>
    <Header />
    <div style={{ display: "grid" }}>
      <div style={{ gridColumn: "1/3", gridRow: "1", backgroundImage: 'url(https://wallpaper.dog/large/20526621.jpg)' }} />
      <div style={{ gridColumn: "1/1", gridRow: "1", ...style({ padding: { left: 150, right: 950, top: 100, bottom: 200 } }) }}>
        <div className="card" style={style({ column: {}, padding: { left: 50, right: 50, top: 100, bottom: 185 } })}>
          <div style={style({ alignText: "center", padding: { bottom: 20 } })}><h2>Connexion</h2></div>
          <input name='email' value={email ?? ""} placeholder="Adresse email"
            onChange={e => { setEmail(e.target.value) }} />
          <div style={{ ...style({ paddingSymmetric: { "vertical": 5 } }) }} />
          <input name='password' type='password' value={password ?? ""} placeholder="Mot de passe"
            onChange={e => { setPassword(e.target.value) }} />
          <div style={{ ...style({ paddingSymmetric: { "vertical": 20 } }) }} />
          <button onClick={handleSubmit}>Se connecter</button>
          <div style={style({ alignText: "center", padding: { top: 20 } })}>
            Mot de passe oublie?
          </div>
        </div>
      </div>
    </div >
  </>)
}