// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example

var startdate = moment();
startdate = startdate.subtract(1, "days");
startdate = startdate.format("l");

var p2 = moment();
p2 = p2.subtract(2, "days");
p2 = p2.format("l");

var p3 = moment();
p3 = p3.subtract(3, "days");
p3 = p3.format("l");

var p4 = moment();
p4 = p4.subtract(4, "days");
p4 = p4.format("l");

var p5 = moment();
p5 = p5.subtract(5, "days");
p5 = p5.format("l");

var p6 = moment();
p6 = p6.subtract(6, "days");
p6 = p6.format("l");

var p7 = moment();
p7 = p7.subtract(7, "days");
p7 = p7.format("l");

var p8 = moment();
p8 = p8.subtract(8, "days");
p8 = p8.format("l");

var p2 = moment();
p2 = p2.subtract(2, "days");
p2 = p2.format("l");

var p3 = moment();
p3 = p3.subtract(3, "days");
p3 = p3.format("l");

var p4 = moment();
p4 = p4.subtract(4, "days");
p4 = p4.format("l");

var p5 = moment();
p5 = p5.subtract(5, "days");
p5 = p5.format("l");

var p6 = moment();
p6 = p6.subtract(6, "days");
p6 = p6.format("l");

var p7 = moment();
p7 = p7.subtract(7, "days");
p7 = p7.format("l");

var p8 = moment();
p8 = p8.subtract(8, "days");
p8 = p8.format("l");


var p2 = moment();
p2 = p2.subtract(2, "days");
p2 = p2.format("l");

var p3 = moment();
p3 = p3.subtract(3, "days");
p3 = p3.format("l");

var p4 = moment();
p4 = p4.subtract(4, "days");
p4 = p4.format("l");

var p5 = moment();
p5 = p5.subtract(5, "days");
p5 = p5.format("l");

var p6 = moment();
p6 = p6.subtract(6, "days");
p6 = p6.format("l");

var p7 = moment();
p7 = p7.subtract(7, "days");
p7 = p7.format("l");

var p8 = moment();
p8 = p8.subtract(8, "days");
p8 = p8.format("l");

var p9 = moment();
p9 = p9.subtract(9, "days");
p9 = p9.format("l");

var p10 = moment();
p10 = p10.subtract(10, "days");
p10 = p10.format("l");

var p11 = moment();
p11 = p11.subtract(11, "days");
p11 = p11.format("l");

var p12 = moment();
p12 = p12.subtract(12, "days");
p12 = p12.format("l");

var p13 = moment();
p13 = p13.subtract(13, "days");
p13 = p13.format("l");

var p14 = moment();
p14 = p14.subtract(14, "days");
p14 = p14.format("l");

var p15 = moment();
p15 = p15.subtract(15, "days");
p15 = p15.format("l");

var now = moment();
now = now.format("l");

var Activecases =30205 ;

var ctx = document.getElementById("myAreaChart");

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [p15,p14,p13,p12,p11,p10,p9,p8,p7,p6,p5,p4,p3,p2,startdate, now,],
    datasets: [{
      label: "Confirmed Cases ",
      lineTension: 0.2,
      backgroundColor: "rgba(102, 178, 255, 0.1)",
      borderColor: "rgb(0, 0, 0)",
      pointRadius: 3,
      pointBackgroundColor: "rgb(0, 76, 153)",
      pointBorderColor: "rgb(0, 76, 153)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgb(0, 76, 153)",
      pointHoverBorderColor: "rgb(179, 0, 0)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [11719,12425,13134,13770,14657,15691,16660,17822,18823,20065,20995,22268,23870,25121,26738,28511,Activecases, Activecases + 10],
    },
    {
      data:[186,199,206,214,228,239,250,269,283,298,314,328,349,370,386,408,432],
      label: "Deaths ",
      lineTension: 0.2,
      backgroundColor: "rgba(255, 99, 71, 0.5)",
      borderColor: "rgb(0, 0, 0)",
      pointRadius: 3,
      pointBackgroundColor: "rgb(179, 0, 0)",
      pointBorderColor: "rgb(179, 0, 0)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(255, 99, 71, 0.5)",
      pointHoverBorderColor: "rgba(255, 99, 71, 0.5)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
    }
  
  ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: false,
          labelString: 'Deaths & Confirmed Cases'
        },
        ticks: {
          maxTicksLimit: 10,
          padding: 0,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '' + number_format(value);
          }
        },
        gridLines: {
          color: "(0, 0, 0)",
          zeroLineColor: "rgb(255, 230, 230)",
          drawBorder: true,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 5,
      titleFontColor: '#6e707e',
      titleFontSize: 10,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 5,
      yPadding: 5,
      displayColors: true,
      intersect: false,
      mode: 'index',
      caretPadding: 0,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

