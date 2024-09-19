import { InputContainer } from './style'

const Input = ( {value} ) => {
  return (
    <InputContainer>
      <input disabled value="88888888888888"/>
      <input disabled value={value} style={{ opacity: 0.85 }}/>
    </InputContainer>
  );
}
  
export default Input;
  