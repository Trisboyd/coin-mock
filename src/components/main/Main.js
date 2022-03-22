import Controls from "../controls/Controls";
import Table from "../table/Table";
import { MainSection, InputWrapper, Input, Button, InputSection, InputTitle, MainDiv } from "./styledMain";
import { useState, useEffect } from 'react'
import Graphs from "../graphs/Graphs";

const Main = (props) => {

    const [searchItem, setSearchItem] = useState('');

    // ___________________________________________________________________change inputs based on typing
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };

    const submitSearch = (event) => {
        event.preventDefault();
    }


    return (
        <MainSection>
            <Graphs />
            <MainDiv>
                {/* <Controls />
            <Table coinData={props.coinData} /> */}
                <InputSection>
                    <InputTitle>
                        Enter any coin <br /> for market data
                    </InputTitle>
                    <InputWrapper>
                        <Input
                            type='text'
                            placeholder='Enter a coin for current data'
                            onChange={handleChange}
                        />
                        <Button
                            type='submit'
                            onClick={submitSearch}
                        >Search
                        </Button>
                    </InputWrapper>
                </InputSection>
            </MainDiv>
        </MainSection>
    )
}

export default Main;