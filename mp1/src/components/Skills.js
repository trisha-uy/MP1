import React from "react";

import './styles/Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <table className="skillContent">
                    <tr>
                        <td>
                            <ul>
                                <li>Technical Skills</li>
                                <ul>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                    <li>Visual Basic</li>
                                    <li>PHP</li>
                                    <li>Android Studio</li>
                                </ul>
                            </ul>
                            <ul>
                                <li>Web Design</li>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Soft Skills</li>
                                <ul>
                                    <li>Detail-oriented</li>
                                    <li>Collaborative</li>
                                    <li>Teamwork</li>
                                    <li>Adaptability</li>
                                </ul>
                            </ul>

                            <ul>
                                <li>Language</li>
                                <ul>
                                    <li>English</li>
                                    <li>Chinese - Mandarin</li>
                                    <li>Chinese - Fookien</li>
                                    <li>Filipino</li>
                                </ul>
                            </ul>
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}
export default Skills;