import React from "react";

import "./styles/Education.css";

class Education extends React.Component {
    render() {
        return (
            <div>
                <table className="educContent">
                    <tr>
                        <th>Year Graduated</th>
                        <th>Course</th>
                        <th>School</th>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td>STEM Eng'g</td>
                        <td>Grace Christian College</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>BS in Information Technology</td>
                        <td>University of Santo Tomas</td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Education;