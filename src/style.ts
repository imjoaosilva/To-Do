import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
`

export const Header = styled.header`
    height: 200px;
    background-color: #0D0D0D;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Content = styled.div`
    flex-grow:1;
    background-color: #1A1A1A;
    display:flex;
    align-items:center;
    flex-direction:column;
    overflow: auto;
`

export const InputContainer = styled.form`
    position:absolute;
    display:flex;
    flex-direction:row;
    margin-top:160px;
`
    
export const Input = styled.input`
    width: 638px;
    height: 54px;
    background-color: #262626;
    color:#808080;
    border:none;
    border-radius: 8px;

    border: 1px solid #0D0D0D;
    padding:16px;

    outline: none;

    &:focus {
        outline: white solid 1px;
    }

    @media screen and (max-width: 760px) {
        width: 400px;
    }

    @media screen and (max-width: 560px) {
        width: 250px;
    }

    @media screen and (max-width: 364px) {
        width: 210px;
    }
`

export const Button = styled.button`
    width: 90px;
    height: 52px;
    margin-left: 8px;
    background-color: #1E6F9F;
    border:none;
    border-radius: 8px;
    color: #F2F2F2;
    display:flex;
    justify-content:center;
    align-items:center;

    transition:all 500ms;

    &:hover {
        opacity: 0.8;
        cursor:pointer;
    }

    @media screen and (max-width: 364px) {
        width: 70px;
    }
`