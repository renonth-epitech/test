import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form";
import Header from "../components/header";
import { SERVER_URL } from "../global/endpoint";

export default function SchoolPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const config = {
        "title": "Modifier un établissement",
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
                        "name": "Ville",
                        "key": "city",
                        "type": "text",
                        "mandatory": true
                    },
                    // {
                    //     "name": "Téléphone",
                    //     "key": "phone",
                    //     "type": "text",
                    //     "mandatory": true
                    // },
                    // {
                    //     "name": "Adresse mail",
                    //     "key": "mail",
                    //     "type": "text",
                    //     "mandatory": false
                    // },
                    // {
                    //     "name": "Code UIA",
                    //     "key": "uia",
                    //     "type": "text",
                    //     "mandatory": false
                    // }
                ]
            }
        ]
    }

    async function handleSubmit(values) {
        if (searchParams.get("id") == null)
            return await axios.post(`${SERVER_URL}/schools`, values)
        else
            return await axios.put(`${SERVER_URL}/schools/${searchParams.get("id")}`, values)
    }

    function getInitialValues() {
        return axios.get(`${SERVER_URL}/schools/${searchParams.get("id")}`)
    }

    return <><Header /><Form config={config} onSubmit={handleSubmit} initialValues={getInitialValues} /></>
}