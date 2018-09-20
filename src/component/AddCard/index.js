import React from "react";
import "./theme.css";

class AddCard extends React.Component {
  render() {
    return (
      <div key={this.props.product.id}>
        <div>
          <img src={this.props.product.images} alt={this.props.product.title} />
        </div>
        <div className="info">
          <h1>{this.props.product.title}</h1>
          <p>{this.props.product.category}</p>
          <p>{this.props.product.location.city_label}</p>
          <p className="price">{this.props.product.price} €</p>
          <p className="date">{this.props.product.date.toString()}</p>
        </div>
      </div>
    );
  }
}

export default AddCard;
