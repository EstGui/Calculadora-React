import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    min-width: 65px;
    background-color: #88888D80;
    border: .7px solid #000000CC;
    border-radius: 7px;
    color: #FFFFFFCC;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: .3s;
    box-shadow: inset 1px 2px 4px 0px #FFFFFF33, inset -2px -1px 4px 0px #00000066, 2px 3px 10px #00000077;
    text-shadow: .5px .5px .5px #00000044;
    
    &:hover {
        opacity: .6;
    }
`