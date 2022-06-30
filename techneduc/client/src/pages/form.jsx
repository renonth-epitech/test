import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import axios from 'axios'

import Header from "../components/header"

import '../style/form.scss'

function Form({ type }) {
    const [config, setConfig] = useState()
    const [values, setValues] = useState({})
    const [didSubmit, setDidSubmit] = useState(false)
    const { state } = useLocation();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        let filled = true
        config.sections?.forEach((s) => s.fields.forEach((f) => {
            if (f.mandatory && values[f.name] == null)
                filled = false
        }))
        if (!filled) {
            setDidSubmit(true)
            return
        }

        await axios.post(`http://localhost:8080/add?key=${type}`, values)

        navigate('/admin')
    }

    async function fetchData() {
        const res = await axios.get(`http://localhost:8080/form?key=${type}`)
        if (res.status === 200) {
            setConfig(res.data)
            if (state?.dto != null)
                setValues(state.dto)
        }
    }

    function getFieldState(field) {
        return didSubmit && field.mandatory && (values[field.name] == null || values[field.name] === '') ? 'field_error' : "field"
    }

    function handleChange(e) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <>
        <Header />
        <form className="form" onSubmit={handleSubmit}>
            <h1>{config?.title}</h1>
            {config?.sections.map((section) =>
                <div className="section" key={section.name} >
                    <div className="title">
                        <h2>{section.name}</h2>
                    </div>
                    {section.fields.map((field) =>
                        <div className={getFieldState(field)} key={field.name}>
                            <b>{field.name}{field.mandatory ? "*" : ""}</b>
                            <input name={field.name} type={field.type} value={values[field.name] ?? ""}
                                onChange={handleChange} />
                        </div>
                    )}
                </div>
            )}
            <input className='submit' type="submit" value="Enregistrer" />
        </form>
    </>

}

export default Form;