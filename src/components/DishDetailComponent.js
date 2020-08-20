import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comments) {
    if (comments == null) return <div></div>;
    // Iterate comments and return elements as li items
    const CustComments = comments.map((element) => {
      return (
        <div key={element.id}>
          <li>{element.comment}</li>
          <li className="text-muted mb-1 small">
            -- <i className="h6">{element.author}</i> {element.date}
          </li>
        </div>
      );
    });

    return (
      <div>
        <h4 className="text-center text-muted text-uppercase my-3">Comments</h4>
        <ul className="list-unstyled">{CustComments}</ul>
      </div>
    );
  }
  // end of renderComments

  renderDish(dish) {
    if (dish == null) return <div></div>;
    return (
      <div className="row my-1">
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
          <Card>
            <CardImg className="w-100" src={dish.image} alt={dish.name} />
            <CardTitle>
              <h4 className="text-uppercase mt-2">{dish.name}</h4>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </Card>
        </div>

        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      </div>
    );
  }
  // End of render dish

  render() {
    return <div>{this.renderDish(this.props.selectedDish)}</div>;
  }
}

export default DishDetail;
