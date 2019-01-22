import React from "react";
// import logo from './logo.svg';
// import './App.sass';

class Form extends React.Component {
  render() {
    return (
      <form className="Form" onSubmit={this.props.OrganizationMethod}>
        <input type="text" name="search" placeholder="Название"/>
        <button>Найти</button>
      </form>
    );
  }
}

export default Form;
