import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 12px 14px 12px;
    box-shadow: inset 4px 5px 6px 0px #FFFFFF2F, inset 4px 4px 3px -6px #FFFFFFFF , inset -4px -5px 6px 0px #00000088, 10px 10px 20px #00000099;
    background-color: #333;
    width: 320px;
    // height: 500px;
    border-radius: 14px;
`

export const ButtonContainer = styled.div`
    padding: 0 8px 6px 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
`

export const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`