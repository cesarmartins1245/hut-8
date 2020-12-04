import React from 'react'
import './dashboard.css'
import { mdiCarDefrostFront, mdiSchool } from '@mdi/js';
import Rectangle from '../Rectangle'


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


function Dashboard(props){
    return(
        <div className="Dashboard">
            <div id="resume">Resume</div>
            <div className="cards-list">{cardsList}</div>
        </div>
    )
}
export default Dashboard;