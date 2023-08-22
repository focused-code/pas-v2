import numeral from 'numeral';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/highcharts-3d')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

const options = props => ({
  chart: {
    type: 'column',
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 25,
      depth: 70,
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
    text: `Overall Impact from ${props.title}`,
    style: {
      fontFamily: 'Open Sans',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  subtitle: {
    text: null,
  },
  xAxis: {
    categories: ['Increase In Revenue', 'New 1-Year Profit'],
    accessibility: {
      description: 'Categories',
    },
    crosshair: true,
    labels: {
      skew3d: true,
      style: {
        fontSize: '13px',
        textOverflow: 'none',
      },
    },
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    crosshair: true,
    labels: {
      overflow: 'justify',
    },
    title: {
      text: null,
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
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      groupPadding: 0,
      shadow: true,
      depth: 25,
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        skew3d: true,
        crop: false,
        overflow: 'none',
        style: {
          fontFamily: 'Open Sans',
          fontSize: '10px',
          fontWeight: 400,
        },
        formatter() {
          const y = numeral(this.y).format('0,0');
          return (this.y > 0) ? `${props.symbol}${y}` : '';
        },
      },
    },
    series: {
      pointWidth: 80,
      tooltip: {
        headerFormat: '<b>{this.category}</b><br/>',
        pointFormatter() {
          const y = numeral(this.y).format('0,0');
          if (this.category === 'Increase In Revenue') {
            return `${this.category} is <b>${props.symbol}${y}</b>`;
          }
          return `<b>${this.category}:</b><br/>${this.series.name}: ${props.symbol}${y}`;
        },
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      showInLegend: false,
      name: 'Increase',
      color: '#408f4d',
      data: [
        { y: 0, color: '#14143f' },
        { y: props.profitDifference, color: '#408f4d' },
      ],
    },
    {
      showInLegend: false,
      name: 'Current',
      color: '#14143f',
      data: [props.revenue, props.currentProfit],
    },
  ],
});

export const Chart = props => (
  <HighchartsReact
    highcharts={Highcharts}
    options={options(props)}
  />
);
