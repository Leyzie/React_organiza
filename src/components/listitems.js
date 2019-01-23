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
    //  console.log('---'+iremsprops)
    
    if (iremsprops !== undefined) {
      if(iremsprops.length !== 0){
        var OrganisationItems = iremsprops.map((iremsprops, index) =>
        <div key = {index}> <Items
          items={iremsprops}
          isOpen={this.state.openOrganID === index}
          onBtnClicl={this.handleClick.bind(this, index)}
        /></div>
          )
        return (
          <div className="ListItems">
           {OrganisationItems &&
            <div>
              {OrganisationItems}
            </div>
            }
            <p>{ this.props.error }</p>
          </div>
        );
      }else{
        return (
          <div className="ListItems">
            <p>Название организации отсутствует или введено некорректно</p>
          </div>
        );
      }
      // console.log(iremsprops)
      
     
    } else {
      // Ничего не найдено
      return (
        <div className="ListItems">
          <p>{ this.props.error }</p>
        </div>
      );
    }
  }
  handleClick = openOrganID => this.setState({ 
    openOrganID: this.state.openOrganID === openOrganID ? null : openOrganID
  })
}

export default ListItems;
