import React from "react";

class Results extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //let table = this.generateTable();
        //console.log(table);
    }

    render () {
        return(
            <table className="table table-dark">
                <tbody>
                { this.props.content.results.map((item, index) => (
                    <tr key={index}>
                        <td>{item["name"]}</td>
                        <td><button
                            type="button"
                            className="btn btn-outline-primary"
                        >Details</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
export default Results;
