import React from "react";
import { Row } from "react-bootstrap";
import useFoods from "../../../hooks/useFoods";
import Banner from "../../banner/Banner";
import Food from "../../food/Food";

const Home = () => {
  const [foods] = useFoods();
  return (
    <>
      <Banner></Banner>
      <section className="container text-center py-5">
          <h2>Try Something from Delicious Dishes</h2>
        <Row xs={1} md={3} className="g-4 p-4">
          {foods.slice(0,9).map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Home;
