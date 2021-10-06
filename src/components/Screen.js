import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 125px;
  text-align: right;
  margin-bottom: 10px;
  line-height: 130px;
  font-size: 66px;
  color: #f58a6c;
  font-weight: 100;
  padding-right: 25px;
  padding-top: 10px;
  font-weight: 200;
  overflow-x: scroll;
  overflow-y: hidden;
  
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

Screen.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  
}


export default Screen;
