import React from 'react'
import * as style from "../style/style"
import '../style/header.scss'
import Book from '@mui/icons-material/Book'
import Edit from '@mui/icons-material/Edit'
import AccessTime from '@mui/icons-material/AccessTime'
import Person from '@mui/icons-material/Person'


export default function Header() {
    return (
        <div className='header' style={{ ...style.paddingSymmetric({ horizontal: 20, vertical: 10 }), ...style.row({ crossAxisAlignment: "center" }) }}>
            <div style={{ flex: 1 }}>
                <h1 >
                    <a href="/lecture">
                        Techneduc
                    </a>
                </h1>
                <div >
                    <a href="/admin">
                        Administration
                    </a>
                </div>
            </div>
            <div style={{ flex: 1, ...style.alignCenter }}>
                <button>
                    <div style={{ flex: 1, ...style.column({ crossAxisAlignment: "center" }) }}>
                        <Book />
                        Cours
                    </div>
                </button>
                <button>
                    <div style={{ flex: 1, ...style.column({ crossAxisAlignment: "center" }) }}>
                        <Edit />
                        Exercices
                    </div>
                </button>
                <button>
                    <div style={{ flex: 1, ...style.column({ crossAxisAlignment: "center" }) }}>
                        <AccessTime />
                        Agenda
                    </div>
                </button>

                <button></button>
            </div>
            <div style={{ flex: 1, ...style.alignRight, ...style.row({ crossAxisAlignment: 'center' }) }}>
                <div style={{ flex: 10 }}> Thomas Renon </div>
                <div style={{ flex: 1 }}> <Person fontSize="large" /> </div>
            </div>
        </div >
    )
}