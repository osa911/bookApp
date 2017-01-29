import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Row className="show-grid">
          <Col xs={12} md={12}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
