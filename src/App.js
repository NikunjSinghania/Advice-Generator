import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        console.log('CDM');
        this.fetchAdvice()
    }

    fetchAdvice = () =>{
        const msg = new SpeechSynthesisUtterance()
        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            const { advice } = res.data.slip
            this.setState({
                advice
            })
            msg.text = advice
            window.speechSynthesis.speak(msg)
        })  
        .catch((err) => {
            console.log(err);
        })
    }

  render() {
    return (
        <>
            <div>{this.state.advice}</div>
            <button onClick={this.fetchAdvice}>Click</button>
        </>
    )
  }
}

export default App