'use client'
import {
    ResponsiveContainer,
    CartesianGrid,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts'

const ThroughputChart = ({ data }) => {
    console.log(data)
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                <Line type="monotone" dataKey="read" stroke="#AA7EDD" />
                <Line type="monotone" dataKey="write" stroke="#00BCD4" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ThroughputChart
