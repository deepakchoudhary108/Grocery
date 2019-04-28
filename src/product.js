import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Product extends React.Component {
  handleClick = event => {
    this.props.onVote(this.props.id, event.target.id);
  };
  render() {
    const { name, votes , subItem1} = this.props;
   
    return (
       
      <li className="list-group-item item-container">
                <p className="font-weight-bold">{name}</p>
                <p>Vote count : {votes}</p>
                <p className="font-weight-bold">Sub item : {subItem1.name}</p>
                <button type="button" className="btn btn-primary mr-4" id="add" onClick={this.handleClick}>Upvote</button>
                <button  type="button" className="btn btn-primary" id="subtract" onClick={this.handleClick}>Downvote</button>
       </li>
    );
  }
}
export default Product;
