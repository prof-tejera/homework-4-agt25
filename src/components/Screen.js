import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 125px;
  text-align: right;
  margin-bottom: 10px;
  line-height: 130px;
  font-size: 72px;
  color: #E1613F;
  font-weight: 100;
  padding-right: 20px;
  padding-top: 10px;
  
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
