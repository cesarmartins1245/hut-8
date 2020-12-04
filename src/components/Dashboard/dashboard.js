import React from 'react'
import './dashboard.css'
import {mdiSchool } from '@mdi/js';
import Rectangle from '../Rectangle'
import CardsList from '../CardsList/cardsList';
import { getData } from '../../services/requests';

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

class Dashboard extends React.Component {
    state = {
        activities: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        getData().then(response => {
            // console.log(response)
            const activities = response.data[0].nextActivities.map(activity => {
                return {
                    image: activity.image,
                    name: activity.course,
                    title: activity.title,
                    extra: activity.deadline
                }
            })
            this.setState({ activities })
        })
    }

    render() {
        const { cardsList, activities } = this.state
        console.log(activities)
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
}


export default Dashboard;