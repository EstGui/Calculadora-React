import styled from 'styled-components'



export const InputContainer = styled.div`

position: relative;
width: calc(100% - 16px);
height: 75px;
background-color: #9A9;

font-size: 24px;

border: .5px solid #000000AA;
border-radius: 7px;
box-shadow: 4px 4px 6px #FFFFFF22, -4px -4px 6px #00000044;

margin: 24px 0;

input {
    @font-face {
        font-family: 'calculator';
        src: url("Seven\ Segment.ttf") format('truetype');
    }
        
    position: absolute;
    box-shadow: inset 3px 4px 15px #000000BB;
    width: calc(100% - 30px);
    height: 75px;
    padding: 0px 15px;
    background-color: #9A9;
    border: 0;
    font-size: 38px;
    font-family: "calculator";
    font-weight: 600;
    text-align: right;
    border-radius: 6px;
    color: #000000AA;
}
`