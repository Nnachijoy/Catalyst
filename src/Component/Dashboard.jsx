import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Content from './Content';
import './Db.css'; // Create this file for custom styling

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar setSelectedItem={setSelectedItem} />
          </Col>
          <Col md={10} className="p-0">
            <Content selectedItem={selectedItem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
