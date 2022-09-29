import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";

export default function SchoolPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Ajouter un établissement",
        "displayKey": "name",
        "sections": [
            {

                "name": "Intitulé",
                "key": "title",
                "fields": [
                    {
                        "name": "Nom",
                        "key": "name",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            {
                "name": "Informations",
                "key": "informations",
                "fields": [
                    {
                        "name": "Adresse",
                        "key": "address",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "name": "Téléphone",
                        "key": "phone",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "name": "Adresse mail",
                        "key": "mail",
                        "type": "text",
                        "mandatory": false
                    },
                    {
                        "name": "Code UIA",
                        "key": "uia",
                        "type": "text",
                        "mandatory": false
                    },
                    {
                        "name": "Mail",
                        "key": "mail",
                        "type": "text",
                        "mandatory": false
                    }
                ]
            }
        ]
    }

    async function handleSubmit(values) {
        return await axios.post(`http://localhost:8080/add?key=school`, values)
    }

    function getInitialValues() {
        return axios.get(`http://localhost:8080/entity?key=school&id=` + searchParams.get("id"))
    }

    return <Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} />
}