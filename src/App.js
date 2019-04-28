import React from "react";
import "./App.css";
import axios from "axios";
import Product from "./product";

class App extends React.Component {
  state = {
    members: []
  };

  componentDidMount() {
    axios
      .get("/mock.json")
      .then(response => {
        this.setState({ members: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  handleEvent = (memberId, actionType) => {
    const updatedList = this.state.members.map(member =>{
      if (member.id === memberId) {
        if (actionType === "add") {
          return Object.assign({}, member, {
            votes: member.votes + 1
          });
        } else {
          if (actionType === "subtract") {
            return Object.assign({}, member, {
              votes: member.votes - 1
            });
          }
        }
      } else {
        return member;
      }
    });
    this.setState({
      members: updatedList
    });
  };
  render() {
    
    return this.state.members.map(member => (
        <Product
        className="row"
        name={member.name}
        key={member.id}
        onVote={this.handleEvent}
        votes={member.votes}
        id={member.id}
        subItem1={member.subItem1}
      />
      
    ));
  }
}

export default App;
