google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Контекстная реклама', 'Инстаграм'],
        ['Cегодня', 180, 60]        
      ]);

      var options = {
        title: 'Средняя цена клика',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
          title: 'руб',
          minValue: 0
        },
        vAxis: {
          title: ''
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['Смотрят бренды',     70],
          ['Не смотрят',     30],
        ]);

        var options = {
          pieHole: 0.6,
          pieSliceText: 'none',
          legend: 'none',
          colors: ['#b0120a', '#ffab91']
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChartTime);
function drawChartTime() {

  var container = document.getElementById('example5.1');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Room' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Вася', 'Пошел на работу',    new Date(0,0,0,8,0,0),  new Date(0,0,0,9,00,0) ],
    [ 'Вася', 'Посидел в инстаграм',        new Date(0,0,0,10,0,0),  new Date(0,0,0,10,21,0) ],
    [ 'Вася', 'Обед',        new Date(0,0,0,13,30,0),  new Date(0,0,0,14,30,0) ],            
    [ 'Вася', 'Позалипал в Youtube',        new Date(0,0,0,20,01,0),  new Date(0,0,0,20,30,0) ],
    [ 'Петя',   'Сидел в ВК',    new Date(0,0,0,7,30,0), new Date(0,0,0,8,0,0) ],
    [ 'Петя',   'Попил чай',    new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
    [ 'Петя',   'Покричал на сотрудников', new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
    [ 'Петя',   'Посидел в Инстаграм', new Date(0,0,0,16,30,0), new Date(0,0,0,16,51,0) ],
    [ 'Петя',   'Подумал о вечном',     new Date(0,0,0,20,30,0), new Date(0,0,0,21,0,0) ]]);

  var options = {
    timeline: { colorByRowLabel: true },
    colors: ['#b0120a', '#ffab91']
  };

  chart.draw(dataTable, options);
}

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['Подписаны на 1-5 комм. аккаунтов',     37],
    ['Остальные',     63],
  ]);

  var options = {
    pieHole: 0.6,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none',
    colors: ['#b0120a', '#ffab91']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single2'));
  chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartNormal);
function drawChartNormal() {

  function randomNorm() {
    return ((Math.random() + Math.random() + Math.random() +
        Math.random() + Math.random() + Math.random()) - 3) / 3;
  }
  var arr = [['Counts']];
  for (var i = 0; i < 5000; i++) {
    arr.push([randomNorm()]);
  }
  var data = google.visualization.arrayToDataTable(arr);

  var options = {
    title: '',
    legend: { position: 'none' },
    colors: ['#b0120a'],

    chartArea: { width: 401 },
    hAxis: {
      ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
    },

    bar: {
      gap: 0
    },

    histogram: {
      bucketSize: 0.01,
      maxNumBuckets: 400,
      minValue: -1,
      maxValue: 1
    }
};

  var chart = new google.visualization.Histogram(document.getElementById('chart_norm'));
  chart.draw(data, options);
}

google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Users'],
    ['Germany', 20],
    ['United States', 100],
    ['Brazil', 40],
    ['Canada', 70],
    ['France', 60],
    ['RU', 70]
  ]);

  var options = {
    colors: ['#b0120a']
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}