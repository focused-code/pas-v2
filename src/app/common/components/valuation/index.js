import numeral from 'numeral';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/accessibility')(Highcharts);

const options = props => ({
  chart: {
    type: 'bar',
    height: 100,
    style: {
      fontFamily: 'Open Sans',
    },
  },
  title: {
    text: null,
  },
  xAxis: {
    type: 'category',
    accessibility: {
      description: 'Categories',
    },
    categories: ['Starting Valuation', 'Potential Valuation'],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
      align: 'high',
    },
    labels: {
      overflow: 'justify',
    },
  },
  exporting: { enabled: false },
  tooltip: {
    valueSuffix: ' thousands',
    pointFormat: 'Value: {point.y:,.0f} mm',
    formatter() {
      const y = numeral(this.y).format('0,0');
      return `${this.x} is <b>${props.symbol}${y}</b>`;
    },
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0.1,
    },
    bar: {
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'normal',
          textOutline: 'none',
          color: '#fff',
        },
        formatter() {
          const y = numeral(this.y).format('0,0');
          return `${props.symbol}${y}`;
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  series: [{
    dataLabels: [{
      align: 'right',
    }],
    data: [{
      y: props.starting,
      name: 'Starting Valuation',
      color: '#4499d7',
    }, {
      y: props.potential,
      name: 'Potential Valuation',
      color: '#408f4d',
    }],
  }],
});

export const ValuationChart = props => (
  <HighchartsReact
    highcharts={Highcharts}
    options={options(props)}
  />
);
