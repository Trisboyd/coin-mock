import {
    LineChart,
    Line,
    BarChart,
    Bar,
    Tooltip,
    XAxis,
    ResponsiveContainer
} from 'recharts';
import exit from '../../images/exit.svg';
import {
    Bottom,
    Number,
    Section,
    Text,
    Top,
    Wrapper,
    Overlay,
    GraphsWrap,
    Title,
    Exit,
    DataRow,
    Label,
    Data,
    DataChange,
    GraphWrap,
    Div,
    VolumeNum
}
    from './styledGraphs';
// import { HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis/dist';

const Graphs = (props) => {

    const convertNum = (num) => {
        if (num > 1000000000) {
            return `${props.currency.symbol}${(num / 1000000000).toFixed(2)} B`;
        }
        else if (num > 1000000) {
            return `${props.currency.symbol}${(num / 1000000).toFixed(2)} M`;
        }
        else return `${props.currency.symbol}${num}`;
    }

    const toolPriceInfo = (tooltipProps) => {
        if (tooltipProps.payload[0]) {
            return (
                <Div>
                    <Number>{tooltipProps.payload[0].payload.day}</Number>
                    <Number>{convertNum(tooltipProps.payload[0].payload.price)}</Number>
                </Div>
            )
        }
        else return null
    }

    const toolVolumeInfo = (tooltipProps) => {
        if (tooltipProps.payload[0]) {
            return (
                <Div>
                    <VolumeNum>{tooltipProps.payload[0].payload.day}</VolumeNum>
                    <VolumeNum>{convertNum(tooltipProps.payload[0].payload.volume)}</VolumeNum>
                </Div>
            )
        }
        else return null
    }

    return (
        <Overlay open={props.open}>
            <Section>
                <Exit
                    src={exit}
                    onClick={props.closeGraphs} />
                <GraphsWrap>
                    <Wrapper>
                        <Top>
                            <Text>PRICES</Text>
                        </Top>
                        <Bottom>
                            <GraphWrap>
                                {props.priceData &&
                                    <ResponsiveContainer>
                                        <LineChart width={228} height={150} data={props.priceData}>
                                            <XAxis dataKey="day" hide={true} />
                                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                                            <Tooltip content={toolPriceInfo} />
                                        </LineChart>
                                    </ResponsiveContainer>}
                            </GraphWrap>
                        </Bottom>
                    </Wrapper>
                    <Wrapper>
                        <Top>
                            <Text>DAILY VOLUMES</Text>
                        </Top>
                        <Bottom>
                            <GraphWrap>
                                {props.volumeData &&
                                    <ResponsiveContainer>
                                        <BarChart
                                            data={props.volumeData}
                                        >
                                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                            <XAxis dataKey="day" hide={true} />
                                            {/* <YAxis /> */}
                                            <Tooltip content={toolVolumeInfo} />
                                            <Bar dataKey="volume" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                }
                            </GraphWrap>
                        </Bottom>
                    </Wrapper>
                </GraphsWrap>
                <Title>{props.data.name}</Title>
                <DataRow>
                    <Label>Price</Label>
                    <Data>{props.data.price}</Data>
                </DataRow>
                <DataRow>
                    <Label>Market Cap</Label>
                    <Data>{props.data.market}</Data>
                </DataRow>
                <DataRow>
                    <Label>All Time High</Label>
                    <Data>{props.data.high}</Data>
                </DataRow>
                <DataRow>
                    <Label>24h change</Label>
                    <DataChange
                        color={props.data.color}>
                        {props.data.change}
                    </DataChange>
                </DataRow>
            </Section>
        </Overlay>
    )
}

export default Graphs;