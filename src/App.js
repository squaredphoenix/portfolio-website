import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import College from './components/College';
import Experience from './components/Experience';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

import './App.css';

function App() {
    return (
        <Container className="app" fluid>
            <header className="header">
                <NavBar />
                <div className="content">
                    <Welcome />
                </div>
            </header>
            <main>
                <About />
                <Experience />
                <College />
                <Projects />
            </main>
            <footer>
                &copy; 2024 Your Company. All rights reserved.
            </footer>
        </Container>
    );
}

export default App;
