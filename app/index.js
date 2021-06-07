import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
//Reason React DOM is decoupled from React is because it can be used for an iOS, Xbox etc environment

//.Component is concerned about the following:
//.State
//.Lifecycle; i.e. fetching data from API
//.UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(
  //React Element
  //Where to render to the Element
  <App />,
  document.getElementById("app")
);
