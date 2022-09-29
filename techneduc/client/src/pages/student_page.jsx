import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";

export default function StudentPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Ajouter un élève",
        "displayKey": "name",
        "sections": [
            {
                "key": "identity",
                "name": "Identité",
                "fields": [
                    {
                        "key": "name",
                        "name": "Nom",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            {
                "key": "informations",
                "name": "Informations",
                "fields": [
                    {
                        "key": "address",
                        "name": "Adresse",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "key": "birthday",
                        "name": "Date de naissance",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "key": "phone",
                        "name": "Téléphone",
                        "type": "text",
                        "mandatory": false
                    }
                ]
            },
            {
                "key": "school",
                "name": "Scolaire",
                "fields": [
                    {
                        "key": "class",
                        "name": "Classe",
                        "type": "text",
                        "mandatory": false
                    }
                ]
            }
        ]
    }

    async function handleSubmit(values) {
        return await axios.post(`http://localhost:8080/add?key=student`, values)
    }

    function getInitialValues() {
        return axios.get(`http://localhost:8080/entity?key=student&id=` + searchParams.get("id"))
    }

    return <Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} />
}