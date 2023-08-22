import 'zingchart/es6';
import ZingChart from 'zingchart-react';

const getValue = (fact) => {
  // value = 10, 30, 50, 70, 90
  const factor = parseFloat(fact);

  if (factor === 0) {
    return 50;
  }
  if (factor >= 6) {
    return 90;
  }
  if ((factor >= 5) && (factor <= 5.99)) {
    return 70;
  }
  if ((factor >= 4) && (factor <= 4.99)) {
    return 50;
  }
  if ((factor >= 3) && (factor <= 3.99)) {
    return 30;
  }
  if (factor <= 2.99) {
    return 10;
  }
};

const getData = props => ({
  type: 'gauge',
  scaleR: {
    aperture: 180,
    values: '0:100:10',
    tick: {
      'line-width': 0,
    },
    center: {
      size: 2,
      'background-color': '#fff',
      'border-color': 'none',
    },
    ring: {
      size: 50,
      rules: [
        {
          rule: '%v >= 0 && %v <= 20',
          backgroundColor: '#df6437',
        },
        {
          rule: '%v >= 20 && %v <= 40',
          backgroundColor: '#f0b354',
        },
        {
          rule: '%v >= 40 && %v <= 60',
          backgroundColor: '#dadf50',
        },
        {
          rule: '%v >= 60 && %v <= 80',
          backgroundColor: '#60b257',
        },
        {
          rule: '%v >= 80 && %v <=100',
          backgroundColor: '#2b663c',
        },
      ],
    },
    labels: ["Poor", '', 'Fair', '', 'Good', '', 'Great', '', 'Superb', '', 'Super'], // Scale Labels
    item: {
      fontColor: '#000',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 9,
      fontWeight: 'normal', // or "normal"
      fontStyle: 'normal', // or "italic"
      offsetR: 0, // To adjust the placement of your scale labels.
      angle: '20', // To adjust the angle of your scale labels.
    },
  },
  plot: {
    csize: '5%',
    size: '60%',
    backgroundColor: '#000',
    valueBox: {
      placement: 'tip',
      text: '%v%',
      fontSize: 8.5,
      paddingBottom: 35
    }
  },
  series: [
    {
      values: [getValue(props.factor)],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900,
      },
    },
  ],
});

export const Gauge = props => {
  return (
    <ZingChart id="success-gauge" height="255" width="300" data={getData(props)} />
  );
}
