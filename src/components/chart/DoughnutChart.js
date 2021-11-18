import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export const DoughuntChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [1, 2, 3, 2, 4, 4.5, 3, 5, 6, 5, 4, 5],
                backgroundColor: [
                    'rgba(12,230,245,1)',
                    'rgba(12,123,245,0.5)',
                    'rgba(222,253,245,0.5)',
                    'rgba(336,23,245,0.5)',
                    'rgba(139,52,62,0.5)',
                    'rgba(236,52,52,0.5)',
                    'rgba(312,52,52,0.5)',
                    'rgba(129,125,325,0.5)',
                    'rgba(12,23,245,0.5)',
                    'rgba(222,223,52,0.5)',
                    'rgba(12,23,245,0.5)',
                    'rgba(52,235,52,0.5)',
                ],
                lineTension: .3,
                fill: true,
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Doughunt Chart'
        }
    }

    return (
        <div style={{ height: '500px', width: '500px' }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}
