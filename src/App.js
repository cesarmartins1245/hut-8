import {mdiSchool } from '@mdi/js';
import Sidebar from './components/Sidebar'
import './App.css'
import Rectangle from './components/Rectangle'
import Dashboard from './components/Dashboard/dashboard'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const cards = [
    {name: "Ciência da computação", amount:"02", icon:mdiSchool},
    {name: "Atividades Próximas", amount:"02", icon:mdiSchool},
    {name: "Alunos online", amount:"785", icon:mdiSchool}

  ];
  const cardsList = cards.map((card) => <Rectangle
                                          enrolledCourses={card.amount}
                                          string={card.name}
                                        />)

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar name="Fausto Silva" course="Ciência da Computação"></Sidebar>
        <div id="container">
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/courses' component={() => <div>Meus cursos</div>}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
