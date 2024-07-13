import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation/Navigation";
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import { Button, Container,Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './components/Routes';
function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Mon Application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/Eleveurs">Eleveurs</Nav.Link>
                        {/* Ajoutez d'autres liens ici si nécessaire */}
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <MainRouter /> {/* Intégrez votre composant Routes ici */}
            </Container>
            {/* Votre contenu principal ici */}
        </div>
  );
}

export default App;
