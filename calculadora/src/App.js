import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, ButtonContainer } from './styles'
import { useState } from 'react';

const App = () => {
  const [ currentNumber, setCurrentNumber ] = useState('0');
  const [ firstNumber, setFirstNumber ] = useState('0');
  const [ operation, setOperation ] = useState('');

  const handleAddNumber = ( number ) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if ( firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if ( firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }


  const handleMultiplyNumbers = () => {
    if ( firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sub = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if ( firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sub = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleEquals = () => {
    if ( firstNumber !== '0' && operation != '' && currentNumber != '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <ButtonContainer>
          <Button label="CE" onClick={() => handleAddNumber('')} color={'#ab5d5d'}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="<" onClick={() => handleAddNumber('')}/>
          
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={handleMultiplyNumbers}/>

          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
          
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>

          <Button label="%" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('3')}/>
          <Button label="," onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals} color={'#2ccabcb3'}/>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default App;
