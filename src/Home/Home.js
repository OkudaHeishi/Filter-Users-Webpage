import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
  { fullName: 'James Bond', reason:'>=4 hrs, for 21/30 in the first 90 days of therapy', group: 'Compliance Met', notificationStatus:'Send compliance notification' },
  { fullName: 'Sherlock Holmes', reason:'>=4 hrs, for 21/30 in the first 90 days of therapy', group: 'Compliance Met', notificationStatus:'Send compliance notification' },
  { fullName: 'James Moriarty', reason:'< 4 hrs, for 21/30 in the first 90 days of therapy', group: 'Compliance Not Met' , notificationStatus:'Notification auto unenrolled' },
  { fullName: 'Levi Ackerman', reason:'<4 hours for 2/4 days between day 4-8 of therapy', group: 'Day 7' , notificationStatus:'Low Usage Notification' },
  { fullName: 'John Smith', reason:'Compliant patient past day 150', group: 'Day 150' , notificationStatus:'' },
  { fullName: 'Jane Doe', reason:'Patient has not met compliance by day 45', group: 'Day 45' , notificationStatus:'Low Usage Notification' },
  { fullName: 'Yagami Light', reason:'>=4 hrs, for 21/30 in the first 90 days of therapy', group: 'Compliance Met' , notificationStatus:'Send compliance notification' },
  { fullName: 'Alex Jane', reason:'>=4 hours for 7 consecutive days', group: '' , notificationStatus:'7 Day Praise' }
];


const Home = () => {
  const [filterName, setFilterName] = useState('');
  const [filterGroup, setFilterGroup] = useState('');

  const handleNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleGroupChange = (event) => {
    setFilterGroup(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.fullName.toLowerCase().includes(filterName.toLowerCase());
    const groupMatch = user.group === filterGroup || filterGroup === '';
    return nameMatch && groupMatch;
  });

  return (
    <>
      <header style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '1rem' }}>
        <Container>
          <h1>U-Sleep</h1>
        </Container>
      </header>

      <main>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Form.Group controlId="filterName">
                <Form.Label>Filter by Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={filterName} onChange={handleNameChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="filterGroup">
                <Form.Label>Filter by Group</Form.Label>
                <Form.Control as="select" value={filterGroup} onChange={handleGroupChange}>
                  <option value="">All</option>
                  <option value="Compliance Met">Compliance Met</option>
                  <option value="Compliance Not Met">Compliance Not Met</option>
                  <option value="Day 7">Day 7</option>
                  <option value="Day 10">Day 10</option>
                  <option value="Day 21">Day 21</option>
                  <option value="Day 28">Day 28</option>
                  <option value="Day 45">Day 45</option>
                  <option value="Day 60">Day 60</option>
                  <option value="Day 150">Day 150</option>
                  <option value="Day 240">Day 240</option>
                  <option value="Bi-Level">Bi-Level</option>
                  <option value="Post 90 Low Usage">Post 90 Low Usage</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="box-row" style={{marginTop: '1rem'}}>
            {filteredUsers.map((user, index) => (
              <Col md={4} key={index}>
                <div style={{ border: '1px solid gray', marginBottom: '1rem' }}>
                  <div style={{ padding: '1rem' }}>
                    <h5 style={{ marginBottom: '0.5rem' }}>{user.fullName}</h5>
                    <p>{`Group: ${user.group}`}</p>
                    <p>{`Status: ${user.reason}`}</p>
                    <p>{`Notification: ${user.notificationStatus}`}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer style={{ backgroundColor: '#34495e', color: '#fff', padding: '1rem', position: 'fixed', bottom: 0, width: '100%' }}>
        <Container>
          <p>&copy; 2023 U-Sleep</p>
        </Container>
      </footer> 

    </>
  );
};

export default Home;