import Form from "./form";

function SchoolPage() {
    const config = {
        "title": "Ajouter un établissement",
        "displayKey": "name",
        "sections": [
            {

                "localizedName": "Intitulé",
                "technicalName": "title",
                "fields": [
                    {
                        "localizedName": "Nom",
                        "technicalName": "name",
                        "type": "text",
                        "mandatory": true
                    }
                ]
            },
            {
                "localizedName": "Informations",
                "technicalName": "informations",
                "fields": [
                    {
                        "localizedName": "Adresse",
                        "technicalName": "address",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "localizedName": "Téléphone",
                        "technicalName": "phone",
                        "type": "text",
                        "mandatory": true
                    },
                    {
                        "localizedName": "Adresse mail",
                        "technicalName": "mail",
                        "type": "text",
                        "mandatory": false
                    },
                    {
                        "localizedName": "Code UIA",
                        "technicalName": "uia",
                        "type": "text",
                        "mandatory": false
                    }
                ]
            }
        ]
    }
    return <Form config={config} />
}

export default SchoolPage;