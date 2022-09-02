import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Header from "../components/header"

import '../style/form.scss'

function Form({ config }) {
    const [values, setValues] = useState({})
    const [didSubmit, setDidSubmit] = useState(false)
    const navigate = useNavigate();

    function validate() {
        let filled = true
        config.sections?.forEach((s) => s.fields.forEach((f) => {
            if (f.mandatory && values[f.technicalName] == null)
                filled = false
        }))
        return filled
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (!validate()) {
            setDidSubmit(true)
            return
        }
        console.log('aaa')
        navigate('/admin')
    }

    function getFieldState(field) {
        return didSubmit && field.mandatory && (values[field.technicalName] == null || values[field.technicalName] === '') ? 'field_error' : "field"
    }

    function handleChange(e) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return <>
        <Header />
        <form className="form" onSubmit={handleSubmit}>
            <h1>{config.title}</h1>
            {config.sections.map((section) =>
                <div className="section" key={section.technicalName} >
                    <div className="title">
                        <h2>{section.localizedName}</h2>
                    </div>
                    {section.fields.map((field) =>
                        <div className={getFieldState(field)} key={field.technicalName}>
                            <b>{field.localizedName}{field.mandatory ? "*" : ""}</b>
                            <input name={field.technicalName} type={field.type} value={values[field.technicalName] ?? ""}
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
