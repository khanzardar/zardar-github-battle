import React from "react";

export default class Popular extends React.Component {
  render() {
    const languages = [
      "All",
      "JavaScript",
      "Ruby",
      "Java",
      "CSS",
      "Python",
      "MATLAB",
    ];
    return (
      <ul className="flex-center">
        {languages.map((language) => {
          return (
            <li key={language}>
              <button className="btn-clear nav-link">{language}</button>
            </li>
          );
        })}
      </ul>
    );
  }
}