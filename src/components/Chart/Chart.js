
import React from 'react'
import ChartBar from "./ChartBar"
import "./Chart.css"
const Chart =  props => {

    const dpValues = props.dps.map(dp => dp.value )
    const totalMaximum = Math.max(...dpValues)

  return (
    <div className='chart'>
        {props.dps.map((data) => {
            return <ChartBar
            key={data.label}
            label={data.label}
            value={data.value}
            maxValue = {totalMaximum}
             />
        })}
    </div>
  )
}

export default Chart