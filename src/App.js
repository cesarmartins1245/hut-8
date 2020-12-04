import Sidebar from './components/Sidebar'
import './App.css'
import Dashboard from './components/Dashboard/dashboard'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
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
