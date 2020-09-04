import React, { Component } from 'react';
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation/Navigation";
import InputForm from "./components/DetectForm/InputForm";
import Rank from "./components/Rank/Rank"
import FaceDetect from "./components/FaceDetect/FaceDetect";
import './App.css';
import 'tachyons'

const app = new Clarifai.App({
    apiKey: 'your api key here',
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
                blur: 5
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
            box: {}
        };
    }

    calculateFaceLocation = (data) => {
        console.log(data)
        const bounding_box = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('image');
        const width = Number(image.width)
        const height = Number(image.height)
        console.log(bounding_box);
        console.log(width);
        console.log(height);
        return {
            leftCol: bounding_box.left_col * width,
            topRow: bounding_box.top_row * height,
            rightCol: width - (bounding_box.right_col * width),
            bottomRow: height - (bounding_box.bottom_row * height)
        }
    }

    displayFaceBox = ( box ) => {
        console.log(box)
        this.setState({box})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value });
    }

    onButtonSubmit = async () => {
        try {
            this.setState({ imageUrl: this.state.input });
            const prediction = await app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            this.displayFaceBox(this.calculateFaceLocation(prediction))
        } catch(err)  {
            console.log(err);
        };
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
                <FaceDetect
                    box = {this.state.box}
                    imageUrl={this.state.imageUrl}
                />

            </div>
        );
    }

}

export default App;
