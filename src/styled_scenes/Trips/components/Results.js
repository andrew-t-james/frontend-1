// NPM
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// COMPONENTS
import Col from "../../../shared_components/layout/Col";
import Row from "../../../shared_components/layout/Row";
import TripCart from "../../../shared_components/Carts/Trip";
import Button from "../../../shared_components/Button";
import DetailCart from "../../../shared_components/Carts/DetailCart";
import Day from "./Day";

// ACTIONS/CONFIG
import { media } from "../../../libs/styled";
import { trip } from "../../../data/trip";
import { tripsData } from "../../../data/home";

// STYLES
import { Highlight } from "./styles";
import { Header } from "./Day";

const Wrap = styled.div`
  padding: 45px 10px 10px;

  // ${media.minSMall} {
  //   padding-top: 115px;
  // }

  ${media.minMedium} {
    padding: 25px;
  }
`;

// MODULE
export default function Results({ showDetails, tripData }) {
  // console.log(Button);
  return (
    <Wrap>
      {!showDetails && (
        <Header>
          <h4>
            Most popular trips to <Highlight>New York</Highlight>
          </h4>
          <Button
            type="button"
            round
            size="small"
            theme="mainFilled"
            onClick={ev => {
              alert("Creating your event");
            }}
            text="Create your own trip"
          />
        </Header>
      )}
      {showDetails ? (
        trip.map((day, index) => <Day key={day.date} day={day} index={index} />)
      ) : (
        <Row>
          {tripsData.map(item => (
            <Col key={item.title} xsBasis="50%" lgBasis="25%">
              <TripCart item={item} />
            </Col>
          ))}
        </Row>
      )}
    </Wrap>
  );
}

// Props Validation
Results.propTypes = {};
