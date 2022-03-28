import React from "react";

import './styles/OJT.css';

class OJT extends React.Component {
    render() {
        return (
            <div>
                <table className="OJTContent">
                    <tr>
                        <th>Company</th>
                        <th>Hours Rendered</th>
                    </tr>
                    <tr>
                        <td>
                            Sagesoft Solutions Inc.
                        </td>
                        <td>
                            500
                        </td>
                    </tr>
                </table>

            </div>
        );
    }
}
export default OJT;