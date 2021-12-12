import React from "react";
import Results from "../components/Results";

class Starships extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            starships: []
        }
    }

    componentDidMount() {
        let url = "https://swapi.dev/api/starships/";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        starships: result
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
        const { error, isLoaded, starships } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Results content={starships} />
            );
        }
    }
}
export default Starships;
