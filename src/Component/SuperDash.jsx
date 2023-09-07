


import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Reports from './Reports';
import Analytics from './Analytics';
import Users from './Users';
import 'bootstrap/dist/css/bootstrap.min.css';


function SuperDash() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [contentType, setContentType] = useState('overview');

  const handleSidebarItemClick = (content, index) => {
    setContentType(content);
    setActiveContentIndex(index);
     window.scrollTo(0, 0);
  };

  const handleNextContent = () => {
    if (activeContentIndex < 3) {
      setActiveContentIndex(activeContentIndex + 1);
      setContentType(contentTypes[activeContentIndex + 1]);
       window.scrollTo(0, 0);
    }
  };

  const handlePreviousContent = () => {
    if (activeContentIndex > 0) {
      setActiveContentIndex(activeContentIndex - 1);
      setContentType(contentTypes[activeContentIndex - 1]);
       window.scrollTo(0, 0);
    }
  };

  const contentComponents = [Overview, Analytics, Reports, Users];
  const ContentComponent = contentComponents[activeContentIndex];

  const contentTypes = ['overview', 'analytics', 'reports', 'users'];

  return (
    <Container fluid className="app-container">
      <Row>
        <Col sm={3} md={2} className="sidebar">
          <Sidebar onSidebarItemClick={handleSidebarItemClick} />
        </Col>
        <Col sm={9} md={10} className="dashboard-container">
          <ContentComponent onNext={handleNextContent} onPrevious={handlePreviousContent} />
        </Col>
      </Row>
    </Container>
  );
}

export default SuperDash


