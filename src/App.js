import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.sass';
// components
import Form from "./components/form";
// import Wear from "./components/wear";
import ListItems from "./components/listitems";
// ключ
const API_KEY = "ac50efe8-6917-430e-9436-e5ef428283e1";

class App extends Component {

  //Данные полученнные с url запроса обект
  state = {
    items: [],
    error: undefined
  }

  // metods для вызова асинхронно
  gettingOrganization = async (event) => {
    // Убираем перезагрузку страниц
    event.preventDefault();

    const dataOrgan = event.target.elements.search.value;

    // переменная для получения инфо url 
    // fetch - альтернатива ajax запроса нашел на форумах
    // проверка на пустоту данных
    if (dataOrgan){
      const api_url = await fetch(`https://search-maps.yandex.ru/v1/?text=${dataOrgan}&type=biz&lang=ru_RU&apikey=${API_KEY}`);
      
      const data = await api_url.json();
      // запрос на Рай
      // console.log(data)
      // console.log(api_url.url)
      // console.log(data.features[0].properties.id)
      // console.log(data.features[1].properties.id)
      // console.log(data.features[1])
      //обращаемся к обекту этого класса
      this.setState({
        error: undefined,
        items: data.features
      });
    } else {
      this.setState({
        error: 'Название организации отсутствует или введено некорректно',
        items: undefined
      });
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Поиск организаций</h1>
        </header>
        
        {/* Передаем метод в компонент */}
        <p><span>&#9998;</span>Введите текст поискового запроса. Например, название организации ("рай").</p>
        <div className="box_forms">
          <Form OrganizationMethod={this.gettingOrganization} />
        </div>
        
        <ListItems
          items={this.state.items}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
