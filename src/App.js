import './App.css';
import Calculator from 'components/Calculator';
import styled from 'styled-components';

import logo from './images/robinhood-logo.png';

const Header = styled.p`
  text-align: center; 
  font-weight: 700;
  font-size: 36px;

`;

const SubHeader = styled.p`
  text-align: center; 
  font-size: 24px;
  color: #CC4E2E;
  padding-bottom: 10px;
  font-weight: 500;
  

`;

function App() {



  return (
    <div className="App">
      <Header>IV: Calculator</Header>
     
        <SubHeader>Palette inspired by <img src={logo} width="150px" alt="logo"></img> 
       
        </SubHeader>
      <Calculator />
    </div>
  );
}

export default App;
