import {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span `
  display: block;
  padding: 6px;
  border: 8px solid #161616;
  height: 80px;
  background-color: #3a3939;
  font-size: 30px;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
`;

class Number extends Component {
    render() {
        return (
            <Container
                style={{
                    width: this.props.width,
                    borderRadius: this.props.radius,
                    textAlign: this.props.align,
                    paddingLeft: this.props.paddingLeft
                }}
                onClick={() => this.props.onClick(this.props.value)}>
                {this.props.value}
            </Container>
        );
    }
}

Number.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  textAlign: PropTypes.string, 
  paddingLeft: PropTypes.string
}


Number.defaultProps = {
    width: '80px',
    radius: '50%',
    align: 'center',
    paddingLeft: '6px',
}
export default Number;
