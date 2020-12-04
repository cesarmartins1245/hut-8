import React from 'react'
import './sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar (props){
    return (
        <div className="Sidebar">
            <img id="avatar" src="https://i.imgur.com/aU48TWI.jpg" alt="avatar"></img>
            <div id="studentName">{props.name}</div>
            <div id="studentCourse">{props.course} </div>
            <div id="sidebar-links">
                <NavLink to='/' className="link-button">Dashboard</NavLink>
                <NavLink to ='/courses'className= "link-button">Meus cursos</NavLink>
            </div>
        </div>
    )
}
export default Sidebar;