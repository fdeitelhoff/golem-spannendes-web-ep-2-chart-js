import Chart from 'chart.js/auto';

var context = document.getElementById('viz').getContext('2d');
var bubbleContext = document.getElementById('bubble').getContext('2d');

var chart = new Chart(context, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Mein Datensatz',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
  options: {},
});

var options = {
  events: ['click'],
};
var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mein Datensatz',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

var bubbleChart = new Chart(bubbleContext, {
  type: 'bubble',
  data: data,
  options: options,
});
