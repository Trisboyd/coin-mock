import Controls from "../controls/Controls";
import Table from "../table/Table";
import { MainSection } from "./styledMain";

const Main = (props) => {

    return (
        <MainSection>
            <Controls />
            <Table coinData={props.coinData} />
        </MainSection>
    )
}

export default Main;