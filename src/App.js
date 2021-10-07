import './App.css';
import Calculator from 'components/Calculator';
import styled from 'styled-components';
import logo from './images/robinhood-logo.png';


const Header = styled.p`
  text-align: center; 
  font-weight: 700;
  font-size: 38px;
  font-family: Roboto;

`;

const SubHeader = styled.p`
  text-align: center; 
  font-size: 24px;
  color: #E1582D;
  padding-bottom: 10px;
  font-weight: 500;
  
`;


function App() {

  return (
    <div className="App">
      <Header>React Calculator</Header>
        <SubHeader>
            Palette inspired by 
             <img src={logo} width="150px" id="logo" alt="logo"></img> 
        </SubHeader>
      <Calculator />
    </div>
  );
}

export default App;
