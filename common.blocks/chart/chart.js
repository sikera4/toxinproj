import Chart from 'chart.js/auto';

function chartConstruct() {
    let ctx = document.getElementsByClassName('js-reviews-chart')[0].getContext("2d");

    let gradientPurple = ctx.createLinearGradient(0, 0, 0, 120);
    gradientPurple.addColorStop(0, '#BC9CFF');
    gradientPurple.addColorStop(1, '#8BA4F9');

    let gradientGreen = ctx.createLinearGradient(0, 0, 0, 120);
    gradientGreen.addColorStop(0, '#6FCF97');
    gradientGreen.addColorStop(1, '#66D2EA');

    let gradientGolden = ctx.createLinearGradient(0, 0, 0, 120);
    gradientGolden.addColorStop(0, '#FFE39C');
    gradientGolden.addColorStop(1, '#FFBA9C');

    let chartData = {
        labels: [
            'Удовлетворительно',
            'Хорошо',
            'Великолепно',
            'Разочарован'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [ 65, 65, 130, 0],
            backgroundColor: [
                gradientPurple,
                gradientGreen,
                gradientGolden,
                '#919191'
            ],
            hoverOffset: 4,
            cutout: '90%'
        }]
    }

    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            
        }
    })
}

export {chartConstruct};