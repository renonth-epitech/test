import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

import School from '../components/school';
import Student from '../components/student';

import '../style/admin.scss'
import Class from "../components/class";
import Header from "../components/header";
import style from "../style/style";
import { SERVER_URL } from "../global/endpoint";

import { AiFillSetting } from 'react-icons/ai'

export default function AdminPage() {
    const navigate = useNavigate()
    const [school, setSchool] = useState()
    const [students, setStudents] = useState()
    const [classes, setClasses] = useState()

    async function fetchData() {

        let res = await axios.get(`${SERVER_URL}/schools`)
        if (res.status === 200)
            setSchool(res.data[0])
        res = await axios.get(`${SERVER_URL}/classes`)
        if (res.status === 200)
            setClasses(res.data)
        res = await axios.get(`${SERVER_URL}/users`)
        if (res.status === 200)
            setStudents(res.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (<><Header />
        <div className='admin' style={style({ column: { crossAxisAlignment: "center" } })}>
            <div style={style({ row: {} })}>
                <h2>{school?.o.name + ', ' + school?.o.city}</h2>
                <button className="add_button" onClick={() => navigate('/school?id=' + school._id, { state: { dto: school } })}><AiFillSetting /></button>
            </div>
            <h2>Élèves</h2>
            <div className='section' style={style({ row: { crossAxisAlignment: "center" } })}>
                {students?.filter((s) => s.o.name != "admin").map((s) => <Student dto={s} key={uuidv4()} />)}
                {/* <button className="add_button" onClick={() => navigate('/student')}>Ajouter un élève</button> */}
            </div>
            <h2>Classes</h2>
            <div className='section' style={style({ row: { crossAxisAlignment: "center" } })}>
                {classes?.map((s) => <Class dto={s} key={uuidv4()} />)}
                {/* <button className="add_button" onClick={() => navigate('/class')}>Ajouter une classe</button> */}
            </div>
        </div >
    </>
    )
}