import Chart from 'chart.js/auto';

function makeChartConstructor() {
  const ctx = document.getElementsByClassName('js-chart__diagram')[0].getContext('2d');

  const gradientPurple = ctx.createLinearGradient(0, 0, 0, 120);
  gradientPurple.addColorStop(0, '#BC9CFF');
  gradientPurple.addColorStop(1, '#8BA4F9');

  const gradientGreen = ctx.createLinearGradient(0, 0, 0, 120);
  gradientGreen.addColorStop(0, '#6FCF97');
  gradientGreen.addColorStop(1, '#66D2EA');

  const gradientGolden = ctx.createLinearGradient(0, 0, 0, 120);
  gradientGolden.addColorStop(0, '#FFE39C');
  gradientGolden.addColorStop(1, '#FFBA9C');

  const chartData = {
    labels: [
      'Удовлетворительно',
      'Хорошо',
      'Великолепно',
      'Разочарован',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 65, 130, 0],
      backgroundColor: [
        gradientPurple,
        gradientGreen,
        gradientGolden,
        '#919191',
      ],
      hoverOffset: 4,
      cutout: '90%',
    }],
  };

  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });
}

export default makeChartConstructor;
