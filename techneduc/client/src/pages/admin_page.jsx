import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

import Header from '../components/header';
import School from '../components/school';
import Student from '../components/student';

import '../style/admin.scss'

function AdminPage() {
    const navigate = useNavigate();
    const [schools, setSchools] = useState()
    const [students, setStudents] = useState()

    async function fetchData() {
        let res = await axios.get(`http://localhost:8080/entity?key=school`)
        if (res.status === 200)
            setSchools(res.data)
        res = await axios.get(`http://localhost:8080/entity?key=student`)
        if (res.status === 200)
            setStudents(res.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return <>
        <Header />
        <div className='admin'>
            <h1>Établissements</h1>
            <div className='section'>
                {schools?.map((s) => <School dto={s} key={uuidv4()} />)}
                <button className="add_button" onClick={() => navigate('/school')} >Ajouter un établissement</button>
            </div >
            <h1>Élèves</h1>
            <div className='section'>
                {students?.map((s) => <Student dto={s} key={uuidv4()} />)}
                <button className="add_button" onClick={() => navigate('/student')}>Ajouter un élève</button>
            </div>
        </div>
    </>;
};

export default AdminPage;