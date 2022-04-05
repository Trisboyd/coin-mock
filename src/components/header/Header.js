import { Bottom, Currency, HeaderSection, Image, Item, Link, Links, Nav, Option, OptionText, Register, Search, SearchImg, SearchInput, Section, Select, SelectPopup, SelectSearch, SelectSearchText, ShiftText, ShiftTheme, Sign, Title, Top, TopGroup } from "./styledHeader"
import { HeaderData } from '../../constants/headerConst';
import { useState, useRef, useEffect } from 'react';

const {
    title,
    image,
    modes,
    frequency,
    currency,
    links
} = HeaderData;

const Header = () => {

    // ______________________________________________Links

    const [hovered, setHovered] = useState(false);

    const onHover = () => {
        setHovered(true);
    }

    const onLeave = () => {
        setHovered(false);
    }

    // _______________________________________________Popups

    const [openFreq, setOpenFreq] = useState(false);

    const [openCurrency, setOpenCurrency] = useState(false);

    const toggleFreq = () => {
        setOpenFreq(!openFreq);
    }

    const toggleCurrency = () => {
        setOpenCurrency(!openCurrency);
    }

    const closeMenus = () => {
        setOpenFreq(false);
        setOpenCurrency(false);
    }

    // __________________________ outside clicks close menus
    const dropDownRef = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if ((openFreq || openCurrency)
                && dropDownRef.current
                && !dropDownRef.current.contains(e.target)) {
                closeMenus();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [openFreq, openCurrency])



    // ______________________________________________ Links

    const [hover, setHover] = useState(false);

    return (
        <Section>
            <HeaderSection>
                <Top>
                    <TopGroup>
                        <Title>{title}</Title>
                        <Image src={image} />
                    </TopGroup>
                    <TopGroup>
                        <Currency
                            ref={dropDownRef}>
                            <p
                                onClick={toggleCurrency}>
                                {currency[0].type}
                            </p>
                            <SelectPopup open={openCurrency}>
                                <SelectSearch>
                                </SelectSearch>
                                {currency.map((type, typeIndex) => {
                                    return (
                                        <Option key={typeIndex}>
                                            <OptionText>{type.type}</OptionText>
                                        </Option>
                                    )
                                })}
                            </SelectPopup>
                        </Currency>
                    </TopGroup>
                </Top>
                <Bottom>
                    <Nav>
                        <Links>
                            {links.map((link, linkIndex) => {
                                return (
                                    <Item key={linkIndex}>
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