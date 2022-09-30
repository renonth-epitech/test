import React from 'react'
import style from "../style/style"
import '../style/header.scss'
import { FaBook, FaPen, FaCalendarAlt } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

export default function Header() {
    return (
        <div className='header' style={style({
            paddingSymmetric: { horizontal: 20, vertical: 10 },
            row: { mainAxisAlignment: "space-between" }
        })}>
            <div >
                <h1><a href="/lecture"> Techneduc </a></h1>
                <a href="/admin"> Administration </a>
            </div>
            <div style={style({
                row: { mainAxisAlignment: "space-between" }
            })}>
                <button> <FaBook size={30} /> </button>
                <button> <FaPen size={30} /> </button>
                <button> <FaCalendarAlt size={30} /> </button>
            </div>
            <div style={{
                ...style({
                    row: { crossAxisAlignment: "center" }
                })
            }}>
                <div style={style({ column: { crossAxisAlignment: "end" }, paddingSymmetric: { horizontal: 20 } })}>
                    <div> Thomas Renon </div>
                    <a href='/login'> <div style={style({ color: "red" })}> Logout </div> </a>
                </div>
                <BsFillPersonFill size={50} />
            </div>
        </div >
    )
}