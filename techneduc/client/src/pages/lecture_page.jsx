import '../style/lecture.scss'
import ReactTooltip from 'react-tooltip'

export default function LecturePage() {
    const config = {
        "chapter": "Manipuler les nombres entiers",
        "title": "Division",
        "definitions": [
            {
                "name": "Division",
                "content": "Une Division consiste à répartir un nombre en plusieurs parties égales. Elle est composée du Dividende et du Diviseur"
            },
            {
                "name": "Dividende",
                "content": "Le Dividende correspond à ce que vous cherchez à répartir"
            },
            {
                "name": "Diviseur",
                "content": "Le Diviseur correspond au nombre de parts que vous souhaitez créer"
            },
            {
                "name": "Quotient",
                "content": "Le Quotient est le résultat de la division. Il s'agit forcément d'un nombre entier"
            },
            {
                "name": "Reste",
                "content": "Le Reste est la somme ou le chiffre qu'il 'reste' à la fin de la division. On parle alors de division décimale"
            },
            {
                "name": "Division entière",
                "content": "Une division est dite Entière si le Dividende est un multiple du Diviseur. Une division entière ne comporte pas de reste"
            },
            {
                "name": "Division décimale",
                "content": "Une division est dite Décimale si le Dividende n'est pas un multiple du Diviseur. Une division entière comporte un reste"
            }
        ],
        "tips": [
            "Le reste doit toujours être plus petit que le Diviseur",
            "Le Quotient doit toujours être plus petit que le Dividende",
            "Si le Dividende est un multiple du Diviseur, le Reste est nul et la division est dite 'entière'"
        ],
        "examples": [
            {
                "name": "Example_Division_Entière_1",
                "content": "32 / 2 = 16\n\nDans cette division, 32 est le 'Dividende', 2 est le 'Diviseur', 16 est le 'Quotient'\n\nEtant donné que la division ne contient pas de 'Reste', c'est une division 'entière'"
            },
            {
                "name": "Example_Division_Décimale_1",
                "content": "16 / 5 = 3 avec 1 en reste.\n\nDans cette division, 16 est le 'Dividende', 5 est le 'Diviseur', 3 est le 'Quotient'\n\nCette division comporte un reste, il s'agit donc d'une division 'décimale'"
            }
        ],
        "keywords": [
            {
                "word": "dividende",
                "color": "blue",
                "bold": true,
                "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
                "popup": "dividende"
            },
            {
                "word": "diviseur",
                "color": "green",
                "italic": true
            },
            {
                "word": "quotient",
                "color": "purple",
                "underlined": true,
                "popup": "quotient"
            },
            {
                "word": "reste",
                "color": "orange",
                "underlined": true,
                "bold": true,
                "italic": true,
            }
        ]
    }

    function keyword(word) {
        word = word
        if (config.keywords.some(w => w.word.toLowerCase() === word.toLowerCase())) {
            var format = config.keywords.find(w => w.word.toLowerCase() === word.toLowerCase())
            word = word + ' '
            if (format.bold)
                word = <b>{word}</b>
            if (format.italic)
                word = <i>{word}</i>
            if (format.underlined)
                word = <u>{word}</u>
            if (format.link != null)
                word = <a href={format.link}>{word}</a >
            if (format.color != null)
                word = <span style={{ "color": format.color }}> {word}</span >
            if (format.popup != null)
                word = <span data-tip={config.definitions.find(e => e.name.toLowerCase()
                    === format.popup.toLocaleLowerCase()).content}> {word}</span >

        }
        else word = word + ' '
        return word
    }

    return (
        <>
            <ReactTooltip />
            <div className="lecture">
                <h1>{config.title}</h1>
                {config.definitions.map((definition) =>
                    <div className="definition" >
                        <div className="title">
                            <h2>{definition.name}</h2>
                        </div>
                        <p>{definition.content.split(' ').map(word => {
                            return keyword(word)
                        })}</p>
                    </div>
                )}
            </div>
        </>
    )
}