import React from 'react'
import style from "../style/style"
import '../style/header.scss'
import { FaBook, FaPen, FaCalendarAlt } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai'

export default function Header() {
    function onLogout() {
        localStorage.setItem("loggedIn", false)
        localStorage.removeItem('role')
        navigate('/login')
    }

    function role() {
        const r = localStorage.getItem('role')
        if (r === 'admin')
            return "Administration"

    }

    const navigate = useNavigate()
    return (
        <div className='header' style={style({ paddingSymmetric: { horizontal: 20, vertical: 10 }, row: {} })}>
            <div style={style({ column: { mainAxisAlignment: "center" } })}>
                <h1><a href={localStorage.getItem('loggedIn') === "true" ? "/dashboard" : "/login"}> Techneduc </a></h1>
                {localStorage.getItem('role') === 'admin' && "Administration"}
            </div>
            {
                localStorage.getItem('loggedIn') === "true" && <>
                    <div style={style({ row: { mainAxisAlignment: "center" } })}>
                        {localStorage.getItem('role') === "admin" &&
                            <button onClick={() => navigate('/admin')}><AiFillSetting size={30} /></button>}
                        <button onClick={() => navigate('/lectures')}> <FaBook size={30} /> </button>
                        <button> <FaPen size={30} /> </button>
                        <button> <FaCalendarAlt size={30} /> </button>
                        <button> <MdEmail size={30} /> </button>
                    </div>

                    <div style={style({ row: {} })}>
                        <div style={style({ column: { mainAxisAlignment: "center", crossAxisAlignment: "end" }, paddingSymmetric: { horizontal: 20 } })}>
                            <div> <b>{localStorage.getItem('role')}</b></div>
                            <button onClick={onLogout}> <div style={style("red")}>Déconnexion </div> </button>
                        </div>
                        <button onClick={() => navigate('/profile')}> <BsFillPersonFill size={50} /> </button>
                    </div></>
            }
        </div >
    )
}