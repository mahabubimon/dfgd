import React from 'react';
import Food from '../../food/Food';
import useFoods from '../../../hooks/useFoods';
import { Row } from 'react-bootstrap';

const Foods = () => {
    const [foods] = useFoods();
    return (
        <section className="container text-center py-5">
          <h2>Try Something from Delicious Dishes</h2>
        <Row xs={1} md={3} className="g-4 p-4">
          {foods.map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </Row>
      </section>
    );
};

export default Foods;