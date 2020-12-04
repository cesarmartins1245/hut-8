import React from 'react'
import './dashboard.css'
import {mdiSchool } from '@mdi/js';
import Rectangle from '../Rectangle'
import CardsList from '../CardsList/cardsList';

const cards = [
    {name: "Ciência da computação", amount:"02", icon:mdiSchool},
    {name: "Atividades Próximas", amount:"02", icon:mdiSchool},
    {name: "Alunos online", amount:"785", icon:mdiSchool},
]

const cardsList = cards.map((card, index) => (
    <Rectangle
        string={card.name}
        enrolledCourses={card.amount}
        key={index}
    />
))

const activities = [
    {
        image: "https://i.imgur.com/aadwyfC.jpg",
        name: "Algoritmos e Programação",
        title: "Enviar arquivos Peter Smokes",
        extra: "10/10/2020"
    },
    {
        image: "https://i.imgur.com/RgQrlAS.jpg",
        name: "Projeto de Banco de Dados",
        title: "Enviar o esquema MySQL",
        extra: "10/10/2020"
    }
]

function Dashboard(props){
    return(
        <div className="Dashboard">
            <div className="list-title">Resume</div>
            <div className="cards-list">{cardsList}</div>
            <div style={{marginTop: "34px"}}>
                <CardsList title="Próximas atividades" cards={activities}></CardsList>
            </div>
        </div>
    )
}


export default Dashboard;