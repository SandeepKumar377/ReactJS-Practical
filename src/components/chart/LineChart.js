import React from 'react'
import { Line } from 'react-chartjs-2'

export const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [1, 2, 3, 2, 4, 4.5, 3, 5, 6, 5, 4, 5],
                borderColor: ['rgba(12,23,245,0.4)'],
                backgroundColor: ['rgba(12,23,245,0.4)'],
                pointgroundColor: ['rgba(12,23,245,0.4)'],
                pointBorderColor: ['rgba(12,23,245,0.4)'],
                spanGaps: false,
                lineTension: .3,
                fill: true,
                borderJoinStyle: "round"
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2.5, 4, 2, 5.5, 3.5, 4, 5, 4, 5, 6],
                borderColor: ['rgba(212,26,68,0.4)'],
                backgroundColor: ['rgba(212,26,68,0.4)'],
                pointgroundColor: ['rgba(212,26,68,0.4)'],
                pointBorderColor: ['rgba(212,26,68,0.4)'],
                lineTension: .3,
                fill: true,
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <div style={{ height: '600px', width: '900px' }}>
            <Line data={data} options={options} />
        </div>
    )
}
