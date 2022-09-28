import React, { useContext, useState, useEffect } from "react"
import axiosInstance from "../../AxiosConfig"

const AuthContext = React.createContext()

export function UseAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (currentUser === undefined) localStorage.setItem("user", null)
  }, [])

  async function Signup(username, email, password) {
    let r = 0
    await axiosInstance({
      method: "GET",
      url: `http://localhost:8080/register`,
      params: {
        username: username,
        email: email,
        password: password
      }
    })
      .then((response) => {
        console.log(response)
        r = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    {
      setCurrentUser(r)
      localStorage.setItem("user", r)
    }
    return r
  }

  async function Login(email, password) {
    let r = 0
    await axiosInstance({
      method: "GET",
      url: `http://localhost:8080/login`,
      params: {
        email: email,
        password: password
      }
    })
      .then((response) => {
        console.log(response)
        r = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setCurrentUser(r)
    localStorage.setItem("user", r)
    return r
  }

  async function Logout() {
    let r = currentUser
    await axiosInstance({
      method: "GET",
      url: `http://localhost:8080/logout`,
      params: {
        logout: true
      }
    }).catch((error) => {
      console.log(error)
    })
    setCurrentUser(0)
    localStorage.setItem("user", null)
    return r
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  const value = {
    currentUser,
    Signup,
    Login,
    Logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
