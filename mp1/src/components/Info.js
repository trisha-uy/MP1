import React from "react";
import Img from "./images/pic.JPG";
import Cp from "./images/phone.svg";
import email from "./images/mail.svg";

import "./styles/AboutMe.css";

import { Row, Col } from 'react-bootstrap';

class Info extends React.Component {
    render() {
        return (
            <div>
                <Row className="background">
                    <Col md={3}>
                    </Col>
                    <Col md={6} className="title" id="font-montserrat">
                        <h1 className="name"><b>Uy, Trisha Dennise T.</b></h1>

                        <p><img src={Cp} alt="cp" width="20" height="20" className="iconImage" />09175913139 </p>
                        <p><img src={email} alt="email" width="20" height="20" className="iconImage" />trishadennise.uy@gmail.com</p>
                        <p>LinkedIn:  https://www.linkedin.com/in/trisha-dennise-uy-b84913228</p>
                    </Col>
                    <Col md={3} className="imageFrame">
                        <img src={Img} alt="pic" className="myImage" />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Info;