import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";

function ClassPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Ajouter une classe",
        "displayKey": "field_title",
        "sections": [
            {

                "name": "Informations",
                "key": "section_informations",
                "fields": [
                    {
                        "name": "Niveau",
                        "key": "field_level",
                        "type": "dropdown",
                        "choices": [
                            { "key": "dropdown_level_6e", "name": "6e" },
                            { "key": "dropdown_level_5e", "name": "5e" },
                            { "key": "dropdown_level_4e", "name": "4e" },
                            { "key": "dropdown_level_3e", "name": "3e" }
                        ],
                        "mandatory": true
                    },
                    {
                        "name": "Intitulé",
                        "key": "field_title",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            {
                "name": "Emploie du temps",
                "key": "section_timetable",
                "fields": []
            }
        ]
    }
    async function handleSubmit(values) {
        return await axios.post(`http://localhost:8080/add?key=class`, values)
    }

    function getInitialValues() {
        return axios.get(`http://localhost:8080/entity?key=class&id=` + searchParams.get("id"))
    }

    return <Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} />
}

export default ClassPage;