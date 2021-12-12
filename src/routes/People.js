import React from "react";
import Results from "../components/Results";
import {logDOM} from "@testing-library/react";
// import get from api client

class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            people: []
        }
    }

    componentDidMount() {
        let url = "https://swapi.dev/api/people/";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        people: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render () {
        const { error, isLoaded, people } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table className="table table-dark">
                    <tbody>
                        { people.results.map((item, index) => (
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
}
export default People;
