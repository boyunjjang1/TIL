import React from 'react';
import Card from "./components/Card";
import axios from "axios";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";


class App extends React.Component {
    state = {
        isLoading: true,
        condition: "",
        temp: 0
    };

    getWeather = async () => {
        const {
            data: {
                main: {temp},
                weather
            }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&APPID=${API_KEY}&units=metric`
        );
        console.log(weather)
        this.setState({
            isLoading: false,
            condition: weather[0].main,
            temp
        })
    }

    componentDidMount() {
        this.getWeather();
    }

    render(){
        const {isLoading, temp, condition} = this.state;
        return isLoading? "Loading" : (
            <>
            <div id="cardContainer" style={{height: 550,marginBottom: 10,backgroundImage: `url('https://vrthumb.imagetoday.co.kr/2016/11/09/tip249t003525.jpg')`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
            </div>
            <div>
                <Card temp={temp} condition={condition}/>
            </div>
        </>
        )
    }

}

export default App;
