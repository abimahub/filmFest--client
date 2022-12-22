// src/components/catalog.js

import React from 'react';
import Card from 'react-bootstrap/Card';

const Catalog = ({ abiCatalog }) => {
  return (
    <div>
      <center><h1>Welcome to filmFest</h1></center>  
            
      <p>The Festival has the following record counts:</p>
      <Card>
          <Card.Body>
          <ul>
            <li><Card.Text>Films: {abiCatalog.film_count}</Card.Text></li>
            <li><Card.Text>Screenings: {abiCatalog.film_instance_available_count}</Card.Text></li>
            <li><Card.Text>Screenings Available: {abiCatalog.film_instance_counte}</Card.Text></li>
            <li><Card.Text>Locations: {abiCatalog.date_count}</Card.Text></li>
            <li><Card.Text>Dates: {abiCatalog.film_count}</Card.Text></li>
          </ul> 
          </Card.Body>
        </Card>
    </div>
  )
};

export default Catalog