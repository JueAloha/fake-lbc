import React from "react";
import leboncoin from "leboncoin-api";

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const search = new leboncoin.Search().setPage(1);
    // Please check into categories & sub categories constants to know which are the sub categories to add into "addSearchExtra"

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
    console.log("Nouveau State");
    console.log(this.state.products);

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {this.state.products.map(product => (
          <span key={product.id}>
            {product.id}
            {product.title}
          </span>
        ))}
      </div>
    );
  }
}

export default AddList;
