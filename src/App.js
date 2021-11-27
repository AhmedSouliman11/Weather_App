import React, { Component } from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
//weather key link https://home.openweathermap.org/api_keys
const API_KEY = "b06bfbf5000250add9cafd98b3da8d3a";
//get api link http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    tempreature : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
    error : ''
  }
  getWeather = async (e) => {
    e.preventDefault();
      const city = e.target.elements.city.value ;
      const country = e.target.elements.country.value ;
      if(city && country){
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api.json();
      this.setState({
        tempreature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
      })
    }else{
      this.setState({
        tempreature : '',
        city : '',
        country : '',
        humidity : '',
        description : '',
        error : 'Please Enter The data'
      })
    }
  }
  render(){
    return(
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather}/>
          <Weather 
                  tempreature={this.state.tempreature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
          />
        </div>
      </div>
    );
  }
}
export default App;