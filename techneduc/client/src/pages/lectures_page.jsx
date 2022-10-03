import React from 'react'
import style from '../style/style'
import '../style/lectures.scss'

export default function LecturesPage(props) {
    return (
        <div className='lectures' style={style({ column: {}, paddingSymmetric: { horizontal: 400, vertical: 50 } })}>
            <div style={style({ alignSelf: "center" })}><h1>Cours</h1></div>
            <div style={style({ paddingAll: 20, alignText: "center" })}>
                <h3>Mathématiques</h3>
            </div>
            <div style={style({ alignSelf: "center", column: { crossAxisAlignment: "center" } })}>
                <h4> <a href='/lecture'>Division</a> </h4>
                <h4> <a >Additions</a> </h4>
                <h4> <a >Soustractions</a> </h4>
                <h4> <a >Géometrie</a> </h4>
            </div>
            <div style={style({ paddingAll: 20, alignText: "center" })}>
                <h3>Français</h3>
            </div>
            <div style={style({ alignSelf: "center", column: { crossAxisAlignment: "center" } })}>
                <h4> <a >Poésie</a> </h4>
                <h4> <a >Complément d'objet direct</a> </h4>
                <h4> <a >Passé composé</a> </h4>
            </div>
        </div>
    )
}

