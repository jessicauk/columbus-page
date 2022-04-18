import styles from './columnchart.module.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  
  chart: {
    type: 'column',
  },

  title: {
    text: ''
},

  xAxis: {
    categories: ['Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov']
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
  },

  tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        'Total: ' + this.point.stackTotal;
    }
  },

  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },

  series: [{
    name: '',
    data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    color: '#47ddfa',
    // stack: 'male'
  }, {
    name: '',
    data: [10, 10, 10, 10, 10, 12],
    color: '#0547d0',
    // stack: 'male'
  }]
};

export default function ColumnChart() {
  return (
    <div className={styles.barchart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}