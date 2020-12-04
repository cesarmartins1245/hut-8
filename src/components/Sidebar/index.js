import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar (props){
    return (
        <div className="Sidebar">
            <img id="avatar" src="https://i.imgur.com/aU48TWI.jpg" alt="avatar"></img>
            <div id="studentName">{props.name}</div>
            <div id="studentCourse">{props.course} </div>
            <div id="sidebar-links">
                <Link to='/' className="link-button">Dashboard</Link>
                <Link to ='/courses'className= "link-button">Meus cursos</Link>
            </div>
        </div>
    )
}
export default Sidebar;