import React from "react";

import "./styles/Seminars.css";

class Seminars extends React.Component {
    render() {
        return (
            <div>
                <table className="semContent">
                    <tr>
                        <th>Seminars</th>
                    </tr>
                    <tr>
                        <td>Designing the Future: Navigating through the World of UI and Tech</td>
                    </tr>
                    <tr>
                        <td>AceIT: UI/UX Strategies Webinar</td>
                    </tr>
                    <tr>
                        <td>Javascript Workshop</td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Seminars;