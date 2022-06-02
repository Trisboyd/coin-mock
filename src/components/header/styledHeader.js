import styled from 'styled-components';

export const Section = styled.section`
    background: #170D21;
`
export const HeaderSection = styled.header`
    width: 74.24%; // 1069 / 1440
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`
export const Top = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    border-bottom: 1px solid #604B77;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 8px 0 10px;
`
export const TopGroup = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 36px;
    font-weight: 400;
    line-height: 1.2;
    color: white;
    text-align: left;

    @media (max-width: 525px) {
        font-size: 24px;
    }
`
export const Image = styled.img`
    height: 75px;
    width: 75px;
`
export const ShiftTheme = styled.div`
    width: 57px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    height: 52px;
    position: relative;
    justify-content: center;
    border-radius: 6px;

    :hover {
        background: #4F3456;
    }
`
export const ShiftImage = styled.img`
    width: 100%;
    height: 21.6px;
`
export const ShiftText = styled.p`
    font-size: 80%;
    font-weight: 400;
    color: white;
    text-align: center;
`
export const Currency = styled.div`
    width: 94.575px;
    height: 40px;
    color: white;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 10px;
    cursor: pointer;

    :hover {
        background: #4F3456;
    }
`
export const Search = styled.div`
    border-radius: 6px;
    background: #343e56;
    max-width: 245px;
    height: 39.2px;
    align-items: center;
    position: relative;
    display: flex;
    background: rgb(33,35,47);
    padding-left: 5px;
`
export const SearchImg = styled.img`
    width: 22.4px;
    height: 19.2px;
    background: #343e56;
    position: absolute;
    left: 0;
`
export const SearchInput = styled.input`
    width: 78.78%; // 193 / 245
    height: 19.2px;
    color: white;
    background: #343e56;
    border: none;
    background: inherit;
`
export const Bottom = styled.div`
    width: 100%;
    height: 66.2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Nav = styled.nav`
`
export const Links = styled.ul`
    display: flex;
`
export const Link = styled.a`
    line-height: 1.2;
    font-weight: 700;
    font-size: 16px;
    padding: 0 18px;
    padding-left: ${props => props.first ? 0 : '18px'};
    color: white;
    border-right: 1px solid #604B77;

    @media (max-width: 525px) {
        font-size: 12px;
    }
`
export const Item = styled.li`
    height: 66.2px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    :hover ${Link} {
        color: #B700FF;
    }
    :hover {
        border-bottom: 2px solid #B700FF;
    }
`
export const Register = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 525px) {
        display: none;
    }
`
export const Sign = styled.button`
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
    padding: 7px 10px 8px;
    border: 1px solid transparent;
    border-radius: 6px;
    color: ${props => props.$active ? 'black' : '#B700FF'};
    background: ${props => props.$active ? '#B700FF' : 'inherit'};
    box-sizing: border-box;

    :hover {
        text-decoration: ${props => props.$active ? 'none' : 'underline'};
        background: inherit;
        border: ${props => props.$active ? '1px solid #B700FF' : 'none'};
        color: #B700FF;
    }
`
// ______________Popup for currency and frequency of update
export const SelectPopup = styled.div`
    width: 206px;
    max-height: 305px;
    z-index: 5;
    position: absolute;
    top: 110%;
    right: 0;
    display: flex;
    flex-direction: column;
    background: #4F3456;
    border-radius: 6px;
    visibility: ${props => props.open ? 'visible' : 'hidden'};

    @media (max-width: 768px) {
        width: 150px;
    }
`
export const SelectSearch = styled.div`
    padding: 10px 15px 9px;
    border-radius: 6px 0;
`
export const SelectSearchText = styled.p`
    color: white;
    opacity: 0.5;
`
export const Option = styled.button`
    height: 31px;
    width: 100%;
    border: none;
    padding: 7px 15px 8px;
    background: inherit;
    cursor: pointer;

    :hover{
        background: #170D21;
    }

    &:last-of-type {
        border-radius: 0 0 6px 6px;
    }
`
export const OptionText = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
`