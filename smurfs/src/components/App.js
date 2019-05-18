import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import SmurfList from './SmurfList';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    smurfs: [],
    newSmurf: {}
  }

  componentDidMount(props) {
    this.props.fetchSmurfs();
    console.log(props);
  }

  handleChanges = e => {
    this.setState({ newSmurf: {
      name: this.state.newSmurf.name,
      age: this.state.newSmurf.age,
      height: this.state.newSmurf.height
    } });
  };

  handleButtonClick = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: ""
    })
  };

  render() {
    if (this.props.fetchingSmurfs) {
      return ("Fetching data...")
    }
    return (
      <div>
        <SmurfList smurfs={this.props.smurfs} />
        
        <form onSubmit={this.handleButtonClick}>
          <p> Smurf name:  
          <input
            type="text"
            value={this.state.newSmurf.name}
            onChange={this.handleChanges}
            placeholder="Smurf a new smurf's name!" />
          </p>
          <p> Smurf Age:  
          <input
            type="text"
            value={this.state.newSmurf.age}
            onChange={this.handleChanges}
            placeholder="How old in smurf years?" />
          </p>
          <p> Smurf height:  
          <input
            type="text"
            value={this.state.newSmurf.height}
            onChange={this.handleChanges}
            placeholder="How tall is the new smurf?" />
          </p>
        </form>
        <button onClick={this.handleButtonClick} type="submit">Smurf a smurf!</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addSmurf
  }
)(App);
