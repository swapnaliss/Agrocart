import React from 'react'
import { Card, Carousel } from 'react-bootstrap';

const Home = () => {
  const categories = [
    { name: 'Fruits and Vegetables', icon: '🍎' },
    { name: 'Grains and Cereals', icon: '🌾' },
    { name: 'Fruits and Vegetables', icon: '🍎' },
    { name: 'Grains and Cereals', icon: '🌾' },
    { name: 'Fruits and Vegetables', icon: '🍎' },
    { name: 'Grains and Cereals', icon: '🌾' },

    // Add more categories here
  ];
  const offers = [
    { title: '50% off on Fruits', description: 'Limited time offer on all fresh fruits.', imageUrl: 'https://example.com/fruits-offer.jpg' },
    { title: 'Special Grain Bundle', description: 'Get a discounted bundle of assorted grains for your pantry.', imageUrl: 'https://example.com/grains-offer.jpg' },
    { title: 'Special Grain Bundle', description: 'Get a discounted bundle of assorted grains for your pantry.', imageUrl: 'https://example.com/grains-offer.jpg' },
    // Add more offers here
  ];
  return (

    <div className="container ">
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-2 mt-4 mb- 4 " key={index}>
            <Card className="text-center rounded-circle">
              <Card.Body>
                <Card.Title>{category.icon}</Card.Title>
                <Card.Text>{category.name}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Carousel style={{ height: '400px' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://example.com/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://example.com/slide2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          {/* Add more carousel items as needed */}
        </Carousel>
      </div>
      <h3>Coupons For You</h3>
      <div className="row mt-3">
        {offers.map((offer, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Card className="offer-card">
              <Card.Img variant="top" src={offer.imageUrl} alt={offer.title} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Home 