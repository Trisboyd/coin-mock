import { Bottom, Currency, HeaderSection, Item, Link, Links, Nav, Option, OptionText, Register, Search, SearchImg, SearchInput, Section, Select, SelectPopup, SelectSearch, SelectSearchText, ShiftText, ShiftTheme, Sign, Title, Top, TopGroup } from "./styledHeader"
import { HeaderData } from '../../constants/headerConst';
import { useState } from 'react';

const {
    title,
    modes,
    frequency,
    currency,
    links
} = HeaderData;

const Header = () => {

    // _______________________________________________Popups

    const [openFreq, setOpenFreq] = useState(false);

    const [openCurrency, setOpenCurrency] = useState(false);

    const toggleFreq = () => {
        setOpenFreq(!openFreq);
    }

    const toggleCurrency = () => {
        setOpenCurrency(!openCurrency);
    }



    // ______________________________________________ Links

    const [hover, setHover] = useState(false);

    return (
        <Section>
            <HeaderSection>
                <Top>
                    <TopGroup>
                        <Title>{title}</Title>
                    </TopGroup>
                    <TopGroup>
                        <ShiftTheme>
                            <ShiftText>
                                {modes.dark}
                            </ShiftText>
                        </ShiftTheme>
                        <ShiftTheme
                            onClick={toggleFreq}>
                            <ShiftText>
                                {frequency[0].time}
                            </ShiftText>
                            <SelectPopup open={openFreq}>
                                <SelectSearch>
                                    <SelectSearchText>Update Frequency</SelectSearchText>
                                </SelectSearch>
                                {frequency.map((type) => {
                                    return (
                                        <Option>
                                            <OptionText>{type.time}</OptionText>
                                        </Option>
                                    )
                                })}
                            </SelectPopup>
                        </ShiftTheme>
                        <Currency onClick={toggleCurrency}>
                            <p>{currency[0].type}</p>
                            <SelectPopup open={openCurrency}>
                                <SelectSearch>
                                    <Search>
                                        <SearchInput placeholder='Search Currencies' />
                                    </Search>
                                </SelectSearch>
                                {currency.map((type) => {
                                    return (
                                        <Option>
                                            <OptionText>{type.type}</OptionText>
                                        </Option>
                                    )
                                })}
                            </SelectPopup>
                        </Currency>
                        <Search>
                            <SearchInput
                                placeholder='Search...'>
                            </SearchInput>
                        </Search>
                    </TopGroup>
                </Top>
                <Bottom>
                    <Nav>
                        <Links>
                            {links.map((link) => {
                                return (
                                    <Item>
                                        <Link
                                            onMouseEnter={() => setHover(true)}
                                            onMouseLeave={() => setHover(false)}
                                            $hover={hover}
                                            href='#'
                                            first={link.left}>
                                            {link.name}
                                        </Link>
                                    </Item>
                                )
                            })}
                        </Links>
                    </Nav>
                    <Register>
                        <Sign>
                            Login
                        </Sign>
                        <Sign $active={true}>
                            Register
                        </Sign>
                    </Register>
                </Bottom>
            </HeaderSection>
        </Section>
    )
}

export default Header;