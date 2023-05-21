import styled from 'styled-components';


export const Task = styled.div<{ done: boolean }>`
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color: ${props => props.done ? '#333333' : '#262626'};

    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    
    margin-bottom: 12px;
    padding:16px;


    .icon {
        transition: all 500ms;
        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }
    }
`

export const CheckBox = styled.button`
    background:none;
    border:none;
    width: 17.45px;
    height: 17.45px;


    div {
        
        width:100%;
        height: 100%;
        border: 2px solid #4EA8DE;
        border-radius:50%;

        transition: all 500ms;
        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }
    }

    svg {
        color: #5E60CE;
        transition: all 500ms;
        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }
    }
`

export const TaskText = styled.p<{ done: boolean }>`
    max-width: 600px;
    font-size: 14px;
    color: ${props => props.done ? "#808080" : "#F2F2F2"};
    margin-left:12px;
    text-decoration: ${props => props.done ? "line-through" : ''};
    margin-right: 50px;
    word-wrap: break-word;

    @media screen and (max-width: 760px) {
        font-size: 13px;
        max-width: 200px;
        margin-right: 25px;
    }


`