import numeral from 'numeral';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/highcharts-3d')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

const options = (props) => {
  const { summary, symbol } = props;

  const currentProfit = (summary.currentProfit > 0) ? summary.currentProfit : 107;
  const currentRevenue = (summary.currentRevenue > 0) ? summary.currentRevenue : 31;
  const startingValuation = (summary.startingValuation > 0) ? summary.startingValuation : 76800;
  const current = [currentProfit, currentRevenue, startingValuation];

  const newAnnualProfit = (summary.newAnnualProfit > 0) ? summary.newAnnualProfit : 133;
  const newAnnualGrossRevenue = (summary.newAnnualGrossRevenue > 0) ? summary.newAnnualGrossRevenue : 156;
  const potentialValuation = (summary.potentialValuation > 0) ? summary.potentialValuation : 160800;
  const oneyear = [newAnnualProfit, newAnnualGrossRevenue, potentialValuation];

  return {
    chart: {
      type: 'column',
      renderTo: 'impact-chart',
      height: 300,
      width: 320,
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
      text: null,
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: ['Profit', 'Revenue', 'Valuation'],
      accessibility: {
        description: 'Categories',
      },
      crosshair: true,
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
    tooltip: {
      valueSuffix: ' thousands',
      formatter() {
        const y = numeral(this.y).format('0,0');
        return `${this.x}:<br/>${this.series.name}: <b> ${symbol}${y}</b>`;
      },
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0,
        maxPointWidth: 36,
        shadow: false,
      },
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'Current',
      data: current,
      color: '#4499d7',
    }, {
      name: '1 Year',
      data: oneyear,
      color: '#408f4d',
    }],
  };
};

export const Impact = props => (
  <HighchartsReact
    highcharts={Highcharts}
    options={options(props)}
  />
);
