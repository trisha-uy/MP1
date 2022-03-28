import React from "react";
import { Col } from "react-bootstrap";
import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import Seminars from './Seminars';
import Awards from './Awards';
import OJT from './OJT';
import AboutMe from "./AboutMe";
import Affiliation from "./Affiliation";
import { Container, Row } from 'react-bootstrap';
import './styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col md={10} id="border">
                            <Info />
                            <h3><b>About Me</b></h3>
                            <AboutMe />
                            <table className="containContent">
                                <tr>
                                <th><h4><b>Educational Background</b></h4></th>
                                <th><h4><b>Seminars</b></h4></th>
                                </tr>
                                    <td>
                                        <Education />
                                    </td>
                                    <td>
                                        <Seminars />
                                    </td>
                                <tr>
                                    <th><h4><b>Awards</b></h4></th>
                                    <th><h4><b>On the Job Training</b></h4></th>
                                </tr>
                                <tr>
                                <td>
                                <Awards />
                                </td>
                                <td>
                                <OJT />
                                <tr>
                                    <th><h4><b>Affiliation</b></h4></th>
                                </tr>
                                <tr>
                                    <td>
                                        <Affiliation />
                                    </td>
                                </tr>
                                <tr>
                                <h4><b>Skills</b></h4></tr>
                                <tr>
                                    <td>
                                        <Skills />
                                    </td>
                                </tr>
                                </td>
                                </tr>
                            </table>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;