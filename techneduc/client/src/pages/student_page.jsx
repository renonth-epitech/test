import Form from "../components/form";

function StudentPage() {
    const config = {
        "title": "Ajouter un élève",
        "displayKey": "Nom",
        "sections": [
            {
                "technicalName": "identity",
                "localizedName": "Identité",
                "fields": [
                    {
                        "technicalName": "name",
                        "localizedName": "Nom",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            {
                "technicalName": "informations",
                "localizedName": "Informations",
                "fields": [
                    {
                        "technicalName": "address",
                        "localizedName": "Adresse",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "technicalName": "birthday",
                        "localizedName": "Date de naissance",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "technicalName": "phone",
                        "localizedName": "Téléphone",
                        "type": "text",
                        "mandatory": false
                    }
                ]
            },
            {
                "technicalName": "school",
                "localizedName": "Scolaire",
                "fields": [
                    {
                        "technicalName": "class",
                        "localizedName": "Classe",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            }
        ]
    }
    return <Form config={config} />
}

export default StudentPage;