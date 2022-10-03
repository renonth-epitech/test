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

export default function AdminPage() {
    const navigate = useNavigate()
    const [schools, setSchools] = useState()
    const [students, setStudents] = useState()
    const [classes, setClasses] = useState()

    async function fetchData() {
        let res = await axios.get(`http://localhost:8080/entity?key=school`)
        if (res.status === 200)
            setSchools(res.data)
        res = await axios.get(`http://localhost:8080/entity?key=student`)
        if (res.status === 200)
            setStudents(res.data)
        res = await axios.get(`http://localhost:8080/entity?key=class`)
        if (res.status === 200)
            setClasses(res.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='admin' style={style({ column: { crossAxisAlignment: "center" } })}>
            <h2>Établissements</h2>
            <div className='section' style={style({ row: { crossAxisAlignment: "center" } })}>
                {schools?.map((s) => <School dto={s} key={uuidv4()} />)}
                <button className="add_button" onClick={() => navigate('/school')}>Ajouter un établissement</button>
            </div>
            <h2>Élèves</h2>
            <div className='section' style={style({ row: { crossAxisAlignment: "center" } })}>
                {students?.map((s) => <Student dto={s} key={uuidv4()} />)}
                <button className="add_button" onClick={() => navigate('/student')}>Ajouter un élève</button>
            </div>
            <h2>Classes</h2>
            <div className='section' style={style({ row: { crossAxisAlignment: "center" } })}>
                {classes?.map((s) => <Class dto={s} key={uuidv4()} />)}
                <button className="add_button" onClick={() => navigate('/class')}>Ajouter une classe</button>
            </div>
        </div >
    )
}