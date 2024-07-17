var data = [
  {
    x: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red'],
    y: [31.92, 55.72, 45.16, 29.79, 24.75, 32.50, 49.25],
    marker:{
      color: ['rgba(37,41,236,1)', 'rgba(83,215,248,1)', 'rgba(0,255,0,1)', 'rgba(255,255,0,1)', 'rgba(255,165,0,1)', 'rgba(255,0,0,1)', 'rgba(141,7,4,0.75)']
      },
    type: 'bar',
  }
];

Plotly.newPlot('data', data);
