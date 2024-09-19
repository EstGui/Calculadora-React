import { ButtonContainer } from './styles'

const Button = ( {label, onClick, color} ) => {
    return (
      <ButtonContainer onClick={onClick} style={{backgroundColor: color ? color : '#88888D80'}}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  