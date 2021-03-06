import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function RenderCard({ item, isGrayScale }) {
  return (
    <Card>
      <CardImg className={isGrayScale} src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Home</h3>
          <hr />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard isGrayScale={"grayscale"} item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard isGrayScale={"grayscale"} item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard isGrayScale={"grayscale"} item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
