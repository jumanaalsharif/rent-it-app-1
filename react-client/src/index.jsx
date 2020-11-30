import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import { Button } from '@material-ui/core'
import {ButtonGroup } from '@material-ui/core'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.GoToHomePage = this.GoToHomePage.bind(this);
  }

  GoToHomePage(){
    window.location = 'http://localhost:3000/';
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  render () {
    var h1style = {
      color: "#595adb",
      fontFamily: "Impact",
      fontSize: "50px"
    };
    var pstyle = {
      fontFamily: "Courier New"
    };

    return (<div>
      <h1 style={h1style}>RENT IT</h1>
      <p style={pstyle}>All what you need</p>
      <List items={this.state.items}/>
      <ButtonGroup color="primary" variant="contained" aria-label="outlined primary button group">
      <Button onClick={this.GoToHomePage}>Home</Button>
      <Button>Categories</Button>
      <Button>My Rentals</Button>
      </ButtonGroup>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));