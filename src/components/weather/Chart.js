import React  from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const Chart = (props) =>
{
    function average(data)
    {
        return _.round(_.sum(data)/data.length)
    }

    function max(data)
    {
        return _.max(data)
    }

    function min(data)
    {
        return _.min(data)
    }

    return (
        <div>
            <Sparklines height={120} width={180} data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {average(props.data)} {props.units}</div>
            <div>Max: {max(props.data)} {props.units}</div>
            <div>Min: {min(props.data)} {props.units}</div>
        </div>
    );
};

export default Chart;