import styled from 'styled-components';

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.open ? '1' : '0'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
`

export const Section = styled.div`
    width: 50%;
    height: 500px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`
export const Wrapper = styled.div`
    width: 250px;
    height: 100px;
    position: relative;
    background: #293143;
    border-radius: 6px;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Text = styled.p`
    color: #8699b8;
    font-size: 12px;
    font-weight: 700;
    margin: 10px 0 0 10px;
`
export const Number = styled(Text)`
    color: #47c2be;
    margin: 10px 10px 0 0;
`
export const Bottom = styled.div`
    position: relative;
    cursor: pointer;
`
export const WeekText = styled(Text)`
    position: absolute;
    bottom: 35px;
    right: 5px;
    color: white;
    margin: 0;
`