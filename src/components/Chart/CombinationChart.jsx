import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Typography } from '@mui/material';

const CombinationChart = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Combination chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    plotOptions: {
      column: {
        grouping: true,
        shadow: false,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Jane',
        data: [3, 2, 5, 4, 6],
        color: '#ff9800' // MUI orange color
      },
      {
        name: 'John',
        data: [2, 3, 4, 7, 5],
        color: '#00bcd4' // MUI cyan color
      },
      {
        name: 'Joe',
        data: [4, 5, 3, 9, 3],
        color: '#37474f' // MUI blue-grey color
      },
      {
        type: 'spline',
        name: 'Average',
        data: [3, 3.33, 4, 6.66, 4.66],
        marker: {
          lineWidth: 2,
          lineColor: '#ff5722', // MUI deep orange
          fillColor: 'white'
        },
        color: '#ff5722'
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  return (
    <Box>
      <Typography variant="h5" align="center" gutterBottom>
        BAR CHART
      </Typography>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default CombinationChart;
