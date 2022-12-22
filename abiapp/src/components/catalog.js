// src/components/catalog.js

import React from 'react';
import Card from 'react-bootstrap/Card';

const Catalog = ({ libCatalog }) => {
  return (
    <div>
      <center><h1>Welcome to filmFest</h1></center>  
            
      <p>The Festival has the following record counts:</p>
      <Card>
          <Card.Body>
          <ul>
            <li><Card.Text>Films: {libCatalog.film_count}</Card.Text></li>
            <li><Card.Text>Screenings: {libCatalog.film_instance_available_count}</Card.Text></li>
            <li><Card.Text>Screenings Available: {libCatalog.film_instance_counte}</Card.Text></li>
            <li><Card.Text>Locations: {libCatalog.date_count}</Card.Text></li>
            <li><Card.Text>Dates: {libCatalog.film_count}</Card.Text></li>
          </ul> 
          </Card.Body>
        </Card>
    </div>
  )
};

export default Catalog