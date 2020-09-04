import React, { Component } from 'react';
import Particles from "react-particles-js";
// import ClarifaiStub, { grpc } from 'clarifai-nodejs-grpc';
import Clarifai from "clarifai";

import Navigation from "./components/Navigation/Navigation";
import InputForm from "./components/DetectForm/InputForm";
import Rank from "./components/Rank/Rank"
import FaceDetect from "./components/FaceDetect/FaceDetect";
import './App.css';
import 'tachyons'

const app = new Clarifai.App({
    apiKey: 'xx',
});
const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                // blur: 5
            }
        }
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
        };
    }
    onInputChange = (event) => {
        console.log(event)
        const value = event.target.value
        this.setState({ input: value });
    }
    onButtonSubmit = () => {
        console.log('click')
        this.setState({ imageUrl: this.state.input });
        app.models.predict(Clarifai.COLOR_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div className="App">
                <Particles className='particles'
                           params={particlesOptions}

                />
                <Navigation />
                <Rank />
                <InputForm
                    onInputChange = {this.onInputChange}
                    onButtonSubmit = {this.onButtonSubmit}
                />
                <FaceDetect imageUrl={this.state.imageUrl}/>

            </div>
        );
    }

}

export default App;
