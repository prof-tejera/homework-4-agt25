import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    display: block;
    padding: 6px;
    border: 8px solid #161616;
    width: 80px;
    height: 80px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    font-size: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    
`;

class Operator extends Component {
  render() {
    return (
      <Container style={{ color: this.props.color, 
                          backgroundColor: this.props.background, 
                          fontWeight: this.props.weight }} 
                  onClick={() => this.props.onClick(this.props.value)}>
                  {this.props.value}
      </Container>
    );
  }
}

Operator.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontWeight: PropTypes.string, 
}


Operator.defaultProps = {
  background: "#35d18b",
  color: "white",
  weight: "600",
}

export default Operator;
