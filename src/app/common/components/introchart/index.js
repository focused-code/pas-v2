import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/highcharts-3d')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

const options = props => ({
    chart: {
        type: 'column',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        options3d: {
            enabled: true,
            alpha: 13,
            beta: 10,
            depth: 50,
            viewDistance: 25,
            frame: {
                bottom: {
                    size: 1,
                    color: 'rgba(0,0,0,0.05)',
                },
            },
        },
        height: 350,
        style: {
            fontFamily: 'Open Sans',
        },
    },
    legend: {
        itemStyle: {
            fontSize: '9px',
        },
    },
    title: {
        text: 'You are here:',
        style: {
            fontFamily: 'Open Sans',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    },
    subtitle: {
        text: null,
    },
    xAxis: {
        categories: [...props.categories],
        accessibility: {
            description: 'Categories',
        },
        labels: {
            autoRotation: false,
            style: {
                fontSize: '9px',
                textOverflow: 'none',
            },
            formatter() {
                if (this.value === 'Average') {
                    return `<span style="font-weight: bold">${this.value}</span>`;
                }
                return this.value;
            },
        },
    },
    yAxis: {
        min: 0,
        crosshair: true,
        labels: {
            overflow: 'justify',
            style: {
                fontSize: '9px',
            },
        },
        title: {
            text: 'Scores',
        },
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadPDF', 'separator', 'downloadCSV', 'downloadXLS'],
            },
        },
    },
    plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.2,
            borderWidth: 0,
            maxPointWidth: 40,
            shadow: false,
        },
        column: {
            dataLabels: {
                enabled: true,
                skew3d: true,
                style: {
                    fontFamily: 'Open Sans',
                    fontSize: '10px',
                    fontWeight: 'normal',
                },
                crop: false,
                overflow: 'none',
            },
        },
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: 'Possible Score',
            color: '#4499d7',
            data: [
                10, 10, 10, 10, 10, 10, 10, 10, 10,
            ],
        },
        {
            name: 'Your Rating',
            color: '#408f4d',
            data: [...props.scores],
        },
    ],
});

export const Chart = props => (
    <HighchartsReact
        highcharts={Highcharts}
        options={options(props)}
    />
);
