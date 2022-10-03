import React from 'react'
import style from "../style/style"
import '../style/header.scss'
import { FaBook, FaPen, FaCalendarAlt } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md';

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className='header' style={style({ paddingSymmetric: { horizontal: 20, vertical: 10 }, row: {} })}>
            <div style={style({ column: { mainAxisAlignment: "center" } })}>
                <h1><a href="/admin"> Techneduc </a></h1>
            </div>
            <div style={style({ row: { mainAxisAlignment: "center" } })}>
                <button onClick={() => navigate('/lectures')}> <FaBook size={30} /> </button>
                <button> <FaPen size={30} /> </button>
                <button> <FaCalendarAlt size={30} /> </button>
                <button> <MdEmail size={30} /> </button>
            </div>
            <div style={style({ row: {} })}>
                <div style={style({ column: { mainAxisAlignment: "center", crossAxisAlignment: "end" }, paddingSymmetric: { horizontal: 20 } })}>
                    {localStorage.getItem("loggedIn") && <div> <b>Thomas RENON </b></div>}
                    {localStorage.getItem("loggedIn") ? <a href='/login'> <div style={style("red")}>Déconnexion </div> </a>
                        : <a href='/login'> <div style={style("white")}>Connexion </div> </a>}
                </div>
                {localStorage.getItem("loggedIn") && <button onClick={() => navigate('/profile')}> <BsFillPersonFill size={50} /> </button>}


            </div>
        </div>
    )
}