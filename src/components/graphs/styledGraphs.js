import styled from 'styled-components';

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.open ? '1' : '0'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
`
export const Exit = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -35px;
    right: -35px;
    cursor: pointer;

    @media (max-width: 525px) {
        right: 0;
    }
`
export const Section = styled.div`
    width: 50%;
    max-width: 600px;
    position: relative;
    background: rgba(79,52,85,0.8);
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    padding: 15px;

    @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 525px) {
        width: 100%;
    }
`
export const GraphsWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
`
export const Wrapper = styled.div`
    width: 250px;
    height: 200px;
    position: relative;
    background: #170D21;
    border-radius: 6px;
`
export const GraphWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Div = styled.div`
    width: 100px;
    height: 60px;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Text = styled.p`
    color: #8699b8;
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0 0 5px;
`
export const Number = styled(Text)`
    color: #B700FF;
    min-width: 20px;
`
export const VolumeNum = styled(Number)`
    color: white;
`
export const Bottom = styled.div`
    position: relative;
    cursor: pointer;
`
export const Title = styled.h3`
    font-size: 40px;
    text-align: center;
    color: white;
`
export const DataRow = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`
export const Label = styled.p`
    font-size: 18px;
    color: white;
`
export const Data = styled.p`
    font-size: 18px;
    color: white;
`
export const DataChange = styled(Data)`
    color: ${props => props.color === 'green' ? '#26da71' : 'red'};
`
