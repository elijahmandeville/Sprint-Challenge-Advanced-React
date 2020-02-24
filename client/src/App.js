import React from "react";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";
import axios from "axios";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
