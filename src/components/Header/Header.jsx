import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <i className="header__link header__title">Picsum.photos App</i>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/sign-in"
              activeClassName="header__link--active"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;