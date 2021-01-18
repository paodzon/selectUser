import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import './CardUser.css';
const CardUser = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  console.log(props.data);

  return (
    <div>
      {props.data.map((user) => {
        return (
          <div className="carduser">
            <Card>
              <CardImg
                top
                className="carduser-img"
                src={user.picture}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data.data };
};

export default connect(mapStateToProps, {
  fetchData: fetchData,
})(CardUser);
