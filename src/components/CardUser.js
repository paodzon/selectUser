import React, {useEffect} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { fetchData, fetchUser } from "../actions";
import './CardUser.css';
const CardUser = ({fetchData,data,state,fetchUser}) => {
  
  useEffect(() => {
    fetchData();
  },[fetchData]);

  console.log(data);

  if(!data){
    return(<div className="carduser">Loading Users...</div>)
  }

  return (
    <div className="carduser">
      {data.map((user) => {
        return (
          <div>
            <Card>
              <CardImg
                top
                className="carduser-img"
                src={user.picture}
                alt="Card image cap"
              />
              <CardBody>
                <p className="carduser-title">{`${user.firstName} ${user.lastName}`}</p>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Email:
                </CardSubtitle>
                <CardText>
                  {user.email}
                </CardText>
                <Button className="carduser-btn" onClick={() => {fetchUser(user);
                console.log(state)}}>Select</Button>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data.data,state:state };
};

export default connect(mapStateToProps, {
  fetchData: fetchData,
  fetchUser: fetchUser
})(CardUser);
