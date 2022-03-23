import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0 8px;
    background: rgb(52, 62, 86);
    margin-right: 8px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`
export const Image = styled.img`
    width: 22.4px;
    height: 16px;
    background: inherit;
    color: ${props => props.color};
    margin-right: 4px;
`
export const Text = styled.p`
    text-align: center;
    color: ${props => props.color};
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    background-image: ${props => props.background};
    -webkit-background-clip: text;
    // rgb(157, 170, 191) for most color
`