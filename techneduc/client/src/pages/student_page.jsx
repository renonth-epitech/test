import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";
import Header from "../components/header";
import { SERVER_URL } from "../global/endpoint";

export default function StudentPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Modifier un élève",
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
                        "key": "mail",
                        "name": "Adresse email",
                        "type": "text",
                        "mandatory": true
                    },
                    // {
                    //     "key": "address",
                    //     "name": "Adresse",
                    //     "type": "text",
                    //     "mandatory": true
                    // },
                    // {
                    //     "key": "birthday",
                    //     "name": "Date de naissance",
                    //     "type": "text",
                    //     "mandatory": true
                    // },
                    // {
                    //     "key": "phone",
                    //     "name": "Téléphone",
                    //     "type": "text",
                    //     "mandatory": false
                    // }
                ]
            },
            // {
            //     "key": "school",
            //     "name": "Scolaire",
            //     "fields": [
            //         {
            //             "key": "class",
            //             "name": "Classe",
            //             "type": "text",
            //             "mandatory": false
            //         }
            //     ]
            // }
        ]
    }

    async function handleSubmit(values, isNew) {
        if (searchParams.get("id") == null)
            return await axios.post(`${SERVER_URL}/users`, values)
        else
            return await axios.put(`${SERVER_URL}/users/${searchParams.get("id")}`, values)
    }

    function getInitialValues() {
        return axios.get(`${SERVER_URL}/users/${searchParams.get("id")}`)
    }

    return <><Header /><Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} /></>
}