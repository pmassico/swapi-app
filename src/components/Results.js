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
        let results = this.props.content.results;
        return(
            <table className="table table-dark">
                <tbody id="tbody">
                {results.map((result)=>{
                    // new row per result
                    let tr = document.createElement("tr");
                    let tdName = document.createElement("td");
                    let tdButton = document.createElement("td");
                    let button = document.createElement("button");

                    button.classList.add("btn", "btn-outline-primary");
                    button.innerText = "Details";

                    tdName.innerText = result["name"];
                    tdButton.appendChild(button)

                    tr.appendChild(tdName);
                    tr.appendChild(tdButton);

                    document.getElementById("tbody").appendChild(tr);
                })}
                </tbody>
            </table>
        );
    }
}
export default Results;
