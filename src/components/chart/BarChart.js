import React from 'react'
import { Bar } from 'react-chartjs-2'

export const BarChart = () => {

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
                lineTension: .3,
                fill: true,
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2.5, 4, 2, 5.5, 3.5, 4, 5, 4, 5, 6],
                borderColor: ['rgba(212,26,68,0.4)'],
                backgroundColor: ['rgba(212,26,68,0.4)'],
                lineTension: .3,
                fill: true,
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
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
            <Bar data={data} options={options} />
        </div>
    )
}
