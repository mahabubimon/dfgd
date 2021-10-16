import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-image">
      <Container className="text-center">
      <h2 className="p-5">Best food waiting for your Belly</h2>
      <InputGroup className="w-50 mx-auto">
        <FormControl
          placeholder="Enter Your Favorite Food Name..."
        />
        <Button variant="primary" className="ms-2">
          Search
        </Button>
      </InputGroup>
      </Container>
    </section>
  );
};

export default Banner;
