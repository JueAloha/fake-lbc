import React from "react";
import leboncoin from "leboncoin-api";
import AddCard from "../AddCard";

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const search = new leboncoin.Search().setPage(1);

    search.run().then(
      data => {
        this.setState({ products: data.results });
      },
      function(err) {
        console.error(err);
      }
    );
  }

  render() {
    if (this.state.products.length === 0) {
      return <p>J'AI RIEN A PRÉSENTER !</p>;
    }

    return (
      <div className="container">
        {this.state.products.map(product => (
          <AddCard product={product} />
        ))}
      </div>
    );
  }
}

export default AddList;
