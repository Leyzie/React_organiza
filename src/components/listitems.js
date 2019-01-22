import React from "react";
// import logo from './logo.svg';
// import './App.sass';
import Items from "./items"

class ListItems extends React.Component {

  state = {
    openOrganID: null
  }

  render() {
    const iremsprops = this.props.items
    if (iremsprops.length  !== 0) {
      
      // console.log(iremsprops)
      
      var OrganisationItems = iremsprops.map((iremsprops, index) =>
      <div key = {index}> <Items
        items={iremsprops}
        isOpen={this.state.openOrganID === index}
        onBtnClicl={this.handleClick.bind(this, index)}
      /></div>
        )
      return (
        <div className="ListItems">
         
          <div>
            {OrganisationItems}
          </div>
          <p>{ this.props.error }</p>
        </div>
      );
    } else {
      // Ничего не найдено
      return (
        <div className="ListItems">
          <p>Введите название организации в форму</p>
        </div>
      );
    }
  }
  handleClick = openOrganID => this.setState({ 
    openOrganID: this.state.openOrganID === openOrganID ? null : openOrganID
  })
}

export default ListItems;
