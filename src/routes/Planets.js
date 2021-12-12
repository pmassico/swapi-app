import React from "react";
import Results from "../components/Results";

class Planets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            planets: []
        }
    }

    componentDidMount() {
        let url = "https://swapi.dev/api/planets/";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        planets: result
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
        const { error, isLoaded, planets } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Results content={planets} />
            );
        }
    }
}
export default Planets;
