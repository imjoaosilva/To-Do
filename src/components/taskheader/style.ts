import styled from 'styled-components'

export const Container = styled.div`
    margin-top:65px;
    width: 728px;
    display:flex;
    justify-content:space-between;
    

    @media screen and (max-width: 760px) {
        width: 490px;
    }

    @media screen and (max-width: 560px) {
        width: 340px;
    }

    @media screen and (max-width: 364px) {
        width: 280px;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    position: static;
`

export const Title = styled.p<{ color: string | undefined }>`
    color: ${props => props.color == 'purple' ? '#8284FA' : '#4EA8DE'};
    font-weight: bold;
    font-size: 14px;
`

export const TasksAmount = styled.p`
    margin-left: 8px;
    background-color: #333333;
    border-radius: 999px;
    padding: 2px 8px;
    font-weight: bold;
    font-size: 12px;
    color: #D9D9D9;
`

export const Right = styled.div`
    display:flex;
    flex-direction:row;
    position: static;
`

export const Separator = styled.div`
    width: 736px;
    border-top: 1px solid #333333;
    border-radius: 8px;
    margin-top:25px;

    @media screen and (max-width: 760px) {
        width: 490px;
    }

    @media screen and (max-width: 560px) {
        width: 340px;
    }

    @media screen and (max-width: 364px) {
        width: 280px;
    }
`

export const Align = styled.div`
    display:flex;
    justify-content:center;
    margin-top:88px;
    flex-direction:column;
    align-items:center;
`

export const TextBold = styled.p`
    color: #808080;
    font-size:16px;
    font-weight:bolder;
    margin-top: 16px;
`

export const TextSemiBold = styled.p`
    color: #808080;
    font-size:15px;
    margin-top:5px;
    font-weight:bold;
`

export const TaskContainer = styled.div`
    width: 100vw;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;


`;
