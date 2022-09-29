import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import '../style/form.scss'

function Form({ config, onSubmit, initialValues }) {
    const [values, setValues] = useState({})
    const [didSubmit, setDidSubmit] = useState(false)
    const navigate = useNavigate();

    function validate() {
        let filled = true
        config.sections?.forEach((s) => s.fields.forEach((f) => {
            if (f.mandatory && values[f.key] == null)
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
        var res = await onSubmit(values)
        if (res.status === 200)
            navigate('/admin')
    }

    function getFieldState(field) {
        return didSubmit && field.mandatory &&
            (values[field.key] == null ||
                values[field.key].isEmpty ||
                values[field.key] === '')
            ? 'field_error' : "field"
    }

    function handleChange(e) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    async function fetchData() {
        let res = await initialValues()
        if (res.status === 200) {
            setValues({ ...res.data, ['displayKey']: config.displayKey })
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    function getField(field) {
        switch (field.type) {
            case "text": return (
                <input name={field.key} type={field.type} value={values[field.key] ?? ""}
                    onChange={handleChange} />)
            case "dropdown": return (
                <select name={field.key} onChange={handleChange} value={values[field.key] ?? ""}>
                    <option >{ }</option>
                    {field.choices.map((choice) => <option value={choice.name} key={choice.key} >{choice.name}</option>)}
                </select>)
            default: return <div>other</div>
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>{config.title}</h1>
            {config.sections.map((section) =>
                <div className="section" key={section.key} >
                    <div className="title">
                        <h2>{section.name}</h2>
                    </div>
                    {section.fields.map((field) =>
                        <div className={getFieldState(field)} key={field.key}>
                            <b>{field.name}{field.mandatory ? "*" : ""}</b>
                            {getField(field)}
                        </div>
                    )}
                </div>
            )}
            <input className='submit' type="submit" value="Enregistrer" />
        </form>
    )
}

export default Form;
