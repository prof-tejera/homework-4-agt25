import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = {
  wrapper: {
    maxWidth: '380px',
    height: '560px',
    borderRadius: '22px',
    backgroundColor: '#161616',
    paddingLeft: '25px',
    paddingRight: '30px'
    
  },
}

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "AC") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <>
        <Container style={Styles.wrapper}>


          {/* Screen row */}
          <Row>
            <Screen value={this.getScreenValue()} />
          </Row>

          {/* Row 1: Top operators */}
          <Row>
              <Col xs={3}>
                <Operator value="AC" onClick={this.handleOperatorClick} 
                          background="#B4B4B4" color="black"
                          weight="400"/>
              </Col>
              <Col xs={3}>
                <Operator value="+-" onClick={this.handleOperatorClick} 
                          background="#B4B4B4" color="black"
                          weight="400"/>
              </Col>
              <Col xs={3}>
                <Operator value="%" onClick={this.handleOperatorClick} 
                          background="#B4B4B4" color="black"
                          weight="400"/>
              </Col>
              <Col xs={3}>
                <Operator value="/" onClick={this.handleOperatorClick} />
              </Col>
            </Row>
          
          
            {/* Numbers 7, 8, 9 and X operator */}
            <Row>
              <Col xs={3}>
                <Number value={7} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={8} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={9} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Operator value="x" onClick={this.handleOperatorClick} />
              </Col>
            </Row>

            {/* Numbers 4, 5, 6 and —— operator */}
            <Row>
              <Col xs={3}>
                <Number value={4} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={5} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={6} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Operator value="-" onClick={this.handleOperatorClick} />
              </Col>
            </Row>


            {/* Numbers 1, 2, 3 and + operator */}
            <Row>
              <Col xs={3}>
                <Number value={1} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={2} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Number value={3} onClick={this.handleNumberClick} />
              </Col>
              <Col xs={3}>
                <Operator value="+" onClick={this.handleOperatorClick} />
              </Col>
            </Row>

            {/* Number 0, . and = operator */}
            <Row>
              <Col xs={6}>
                <Number value={0} onClick={this.handleNumberClick} 
                        width="165px" radius="36px" align="left" paddingLeft="22px"/>
              </Col>
              <Col xs={3}>
              <Operator value="." onClick={this.handleOperatorClick} 
                        background="#323232"/>
              </Col>
              <Col xs={3}>
                <Operator value="=" onClick={this.handleOperatorClick} />
              </Col>
            </Row>
            

          
          
          


          
          
          
        </Container>
      </>
    );
  }
}

export default Calculator;
