import React, {PureComponent} from "react";
import { YMaps, Map,Placemark } from 'react-yandex-maps';
// import logo from './logo.svg';
// import './App.sass';

class Items extends PureComponent {
 

  render() {
   
    const {items , isOpen, onBtnClicl} = this.props
    // массив телефонов
    const phon = items.properties.CompanyMetaData.Phones
    console.log(items.properties.CompanyMetaData)
    var Phons = phon.map((phon, index) =>
      <div key = {index}> 
        {phon.formatted}
        </div>
    )
    
    // console.log('---',+isOpen)
//  кординаты
    const cootdinats = [
        items.geometry.coordinates[1],
        items.geometry.coordinates[0]
    ]
    // console.log(cootdinats)
    const geoMap = {
        center: cootdinats,
        zoom: 12,
    }
    // Скрывающийся блок
    const informs = isOpen && <div className="Items__info" >
    
    <div className="cell"><strong>Адрес: </strong>{items.properties.CompanyMetaData.address}</div>
    <div className="cell">
        {items.properties.CompanyMetaData.Hours &&
            <div>
                <strong>Сейчас: </strong>{items.properties.CompanyMetaData.Hours.State.short_text}
            </div>
        }
    </div>
    <div className="cell"><strong>Сайт: </strong>{items.properties.CompanyMetaData.url}</div>
    <div className="cell phone_box"><strong>Tелефон(ы): </strong>
        <div className="phone">{Phons}</div>
    </div>
    {geoMap.cootdinats}
    <div className="Items__maps">
        <YMaps>
            <Map defaultState={geoMap}>
                <Placemark geometry={cootdinats} />
            </Map>
        </YMaps>
        
    </div>
</div>
    
    // if(this.handleClick == true){
    // }
    // console.log(items.properties.CompanyMetaData.Hours.State.short_text)
    return (
      <div className="Items">
        <h2 className="Items__title">
            {items.properties.CompanyMetaData.name}
            <button onClick={onBtnClicl}>
                {isOpen ? 'Закрыть' : 'Открыть'}
            </button>
        </h2>
        
        {informs}
      </div>
    );
  }
}

export default Items;
