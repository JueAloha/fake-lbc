import React from "react";
import { Link } from "react-router-dom";
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
        console.log(this.state.products);
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
          <Link to="/AddView" key={product.id}>
            <div>
              <AddCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default AddList;
