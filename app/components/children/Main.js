import React from "react";

// Import sub-components
//import Form from "./children/Form";
//import Results from "./children/Results";

// Helper Function
//import helpers from "./utils/helpers";

class Main extends React.Component {

  // constructor(props) {

  //   super(props);

  //   this.state = {
  //     searchTerm: "",
  //     results: ""
  //   };

  //   this.setTerm = this.setTerm.bind(this);
  // }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchTerm).then((data) => {
  //       if (data !== this.state.results) {
  //         console.log(data);

  //         this.setState({ results: data });
  //       }
  //     });
  //   }
  // }

  // setTerm(term) {
  //   this.setState({
  //     searchTerm: term
  //   });
  // }

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Scraper!</h2>
            <p className="text-center">
              <em>lesstitle</em>
            </p>
          </div>

          <div className="col-md-6">


          </div>

          <div className="col-md-6">


          </div>

        </div>

      </div>
    );
  }
}

// Export the componen back for use in other files
export default NYMain;