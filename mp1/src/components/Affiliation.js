import React from "react";

import './styles/Seminars.css';

class Affiliation extends React.Component {
    render() {
        return (
            <div>
                <table className="semContent">
                    <tr>
                        <th>Grace Christian College</th>
                    </tr>
                    <tr>
                        <th>2016-2018</th>
                    </tr>
                    <tr>
                        <td>Chinese Class President</td>
                    </tr>
                    <tr>
                        <td>Cultural Chair</td>
                    </tr>
                    <tr>
                        <td>OIC Chinese Orchestra (Wind and Viola Section)</td>
                    </tr>
                    <tr>
                        <td>Art Club Member</td>
                    </tr>
                    <tr>
                        <th>University of Santo Tomas</th>
                    </tr>
                    <tr>
                        <th>2018</th>
                    </tr>
                    <tr>
                        <td>Scarlet Member</td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Affiliation;