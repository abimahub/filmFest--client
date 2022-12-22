 // src/components/contacts.js

 import React from 'react'
 import Card from 'react-bootstrap/Card';

 const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Text>{contact.film_count}</Card.Text>
            <Card.Text>{contact.film_instance_available_count}</Card.Text>
            <Card.Text>{contact.film_instance_counte}</Card.Text>
            <Card.Text>{contact.date_count}</Card.Text>
            <Card.Text>{contact.film_count}</Card.Text>
          </Card.Body>
        </Card>

      ))}
    </div>
  )
};

 export default Contacts