import {Component} from "react";
import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import {Container, Row, Col} from 'react-bootstrap';


const Styles = {
    wrapper: {
        maxWidth: '380px',
        height: '560px',
        borderRadius: '22px',
        backgroundColor: '#161616',
        paddingLeft: '25px',
        paddingRight: '35px',
        WebkitBoxShadow: '1px 1px 15px 0px rgba(245,138,108,0.25)',
        boxShadow: '1px 1px 15px 0px rgba(245,138,108,0.25)'    
    }
}


class Calculator extends Component {
    state = {
        first: "",
        operator: null,
        second: "",
        current: 0,
    };

    handleNumberClick = (number) => {

        if (!this.state.operator) {
            this.setState({
                first: `${this.state.first || ""}${number}`
            });
            this.setState({current: 0})
        } else {
            this.setState({
                second: `${this.state.second || ""}${number}`
            });
            this.setState({current: 1})
        }
    };

    handleOperatorClick = (operator) => {

        // Calculate result if user clicks "="
        if (operator === "=") {
            const first = parseFloat(this.state.first);
            const second = parseFloat(this.state.second);

            if (this.state.operator === "+") {
                this.setState({
                    operator: null,
                    first: first + second,
                    second: null,
                    current: 0
                });
            } else if (this.state.operator === "/") {
                this.setState({
                    operator: null,
                    first: first / second,
                    second: null,
                    current: 0
                });
            } else if (this.state.operator === "-") {
                this.setState({
                    operator: null,
                    first: first - second,
                    second: null,
                    current: 0
                });
            } else if (this.state.operator === "x") {
                this.setState({
                    operator: null,
                    first: first * second,
                    second: null,
                    current: 0
                });
            }

        // Clear fields and state when the user clicks "AC"
        } else if (operator === "AC") {
            this.setState({first: "", second: "", operator: null, current: 0});

        // Turn current number into a decimal 
        } else if (operator === ".") {
            this.setState({
                first: this.state.current === 0 ? this.state.first + "." : this.state.first,
                second: this.state.current === 1 ? this.state.second + "." : this.state.second,
                operator: this.state.operator
            });

        // Turn current number into a negative or positive
        } else if (operator === "+-") {

            // If the first number is empty and active, add a ??? sign 
            if (this.state.current === 0) {
              if (!this.state.first) {
                this.setState({
                  first: '-',
                  operator: this.state.operator
                });
              } else {

                /* If there's already a 1st number input, 
                   multiply the current value by -1 */
                this.setState({
                  first: -1 * parseFloat(this.state.first),
                  operator: this.state.operator
                });
              } 

            // If the second number is empty and active, add a ??? sign 
            } else {
              if (!this.state.second) {
                this.setState({
                  second: '-',
                  operator: this.state.operator
                })

              /* If there's already a 2nd number input, 
                    multiply the current value by -1 */
              } else {
                this.setState({
                  second: -1 * parseFloat(this.state.second),
                  operator: this.state.operator
                })
              }  
            }

        // Turns the active number into a decimal 
        } else if (operator === "%") {
            this.setState({
                first: this.state.current === 0
                    ? parseFloat(this.state.first) / 100
                    : this.state.first,
                second: this.state.current === 1
                    ? parseFloat(this.state.second) / 100
                    : this.state.second,
                operator: this.state.operator
            })

        } else {
            this.setState({
                // Flips the current active number index
                operator,
                current: this.state.current === 0 ? 1 : 0
            });
        }
    }

    getScreenValue = () => this.state.second || this.state.first;

    render() {
        return (
        <> 
          <Container style = {Styles.wrapper} > 
            
            {/* Row 1: Screen row */} 
            <Row> 
              <Screen value={this.getScreenValue()}/>
            </Row>

            {/* Row 2: Top operators */} 
            <Row> 
              <Col xs={3}>
                <Operator value="AC" onClick={this.handleOperatorClick}
                    background="#B4B4B4"
                    color="#262626"
                    weight="400"/>
              </Col>
              <Col xs={3}>
                <Operator value="+-" onClick={this.handleOperatorClick}
                    background="#B4B4B4"
                    color="#242424"
                    weight="400"/>
              </Col>
              <Col xs={3}>
                  <Operator value="%" onClick={this.handleOperatorClick}
                      background="#B4B4B4"
                      color="#242424"
                      weight="400"/>
              </Col>
              <Col xs={3}>
                  <Operator value="/" onClick={this.handleOperatorClick}/>
              </Col>
            </Row>

            {/* Row 3: Numbers 7, 8, 9 and 'x' operator */} 
            <Row> 
              <Col xs={3}>
                <Number value={7} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Number value={8} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Number value={9} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Operator value="x" onClick={this.handleOperatorClick}/>
              </Col>
            </Row>

            {/* Row 4: Numbers 4, 5, 6 and the '??????' operator */} 
            <Row> 
              <Col xs={3}>
                <Number value={4} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Number value={5} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Number value={6} onClick={this.handleNumberClick}/>
              </Col>
              <Col xs={3}>
                <Operator value="-" onClick={this.handleOperatorClick}/>
              </Col>
          </Row>

          {/* Row 5: Numbers 1, 2, 3 and the '+' operator */} 
          <Row> 
            <Col xs={3}>
              <Number value={1} onClick={this.handleNumberClick}/>
            </Col>
            <Col xs={3}>
              <Number value={2} onClick={this.handleNumberClick}/>
            </Col>
            <Col xs={3}>
              <Number value={3} onClick={this.handleNumberClick}/>
            </Col>
            <Col xs={3}>
              <Operator value="+" onClick={this.handleOperatorClick}/>
            </Col>
          </Row>

          {/* Row 6: Number 0, '.' and the '=' operator */} 
          <Row> 
            <Col xs={6}>
              <Number value={0} onClick={this.handleNumberClick}
                      width="165px"
                      radius="36px"
                      align="left"
                      paddingLeft="22px"/>
            </Col>
            <Col xs={3}>
              <Operator value="." onClick={this.handleOperatorClick} 
                        background="#323232"/>
            </Col>
            <Col xs={3}>
              <Operator value="=" onClick={this.handleOperatorClick}/>
            </Col>
          </Row>
          
      </Container> 
    </>
    );
  }
}

export default Calculator;