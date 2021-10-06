import './App.css';
import Calculator from 'components/Calculator';
import styled from 'styled-components';

const Header = styled.p`
  text-align: center; 
  font-weight: 700;
  font-size: 32px;

`;

const SubHeader = styled.p`
  text-align: center; 
  font-size: 19px;
  color: #DF6046;
  padding-bottom: 10px;
  

`;

function App() {



  return (
    <div className="App">
      <Header>IV: Calculator</Header>
        <SubHeader>Palette inspired by the Robinhood UI </SubHeader>
      <Calculator />
    </div>
  );
}

export default App;
