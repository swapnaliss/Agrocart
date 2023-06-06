import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { ACTION_TYPE } from "../../utils";
import { useData } from "../../context";
import { Card, Carousel } from 'react-bootstrap';

export function Home() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { dataDispatch, changeTitle } = useData();
  useEffect(() => {
    changeTitle("Online Shopping Site for Agro Products");
    axios
      .get("/api/categories")
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.log(error));
  }, []);

  const categoryHandler = (categoryName) => {
    dataDispatch({
      type: ACTION_TYPE.CATEGORY,
      payload: { [categoryName]: true },
    });
    navigate("/product");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {categories &&
            categories.map(({ _id, categoryName, description, icon }) => {
              return (
                <div className="col-md-2 mt-4 mb-4" key={_id} onClick={() => categoryHandler(categoryName)}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>{icon}</Card.Title>
                      <Card.Text>{categoryName}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
