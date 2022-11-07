import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";
import Header from "../components/header";
import { SERVER_URL } from "../global/endpoint";

export default function ClassPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Modifier une classe",
        "displayKey": "field_title",
        "sections": [
            {
                "name": "Informations",
                "key": "section_informations",
                "fields": [
                    // {
                    //     "name": "Niveau",
                    //     "key": "field_level",
                    //     "type": "dropdown",
                    //     "choices": [
                    //         { "key": "dropdown_level_6e", "name": "6e" },
                    //         { "key": "dropdown_level_5e", "name": "5e" },
                    //         { "key": "dropdown_level_4e", "name": "4e" },
                    //         { "key": "dropdown_level_3e", "name": "3e" }
                    //     ],
                    //     "mandatory": true
                    // },
                    {
                        "name": "Intitulé",
                        "key": "name",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            // {
            //     "name": "Emploie du temps",
            //     "key": "section_timetable",
            //     "fields": []
            // }
        ]
    }
    async function handleSubmit(values) {
        if (searchParams.get("id") == null)
            return await axios.post(`${SERVER_URL}/classes`, values)
        else
            return await axios.put(`${SERVER_URL}/classes/${searchParams.get("id")}`, values)
    }

    function getInitialValues() {
        return axios.get(`${SERVER_URL}/classes/${searchParams.get("id")}`)
    }

    return <><Header /> <Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} /></>
}