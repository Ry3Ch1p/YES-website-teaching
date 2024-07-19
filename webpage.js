var data = [
  {
    x: ['Blue (470 nm)', 'Cyan (525 nm)', 'Green (560 nm)', 'Yellow (585 nm)', 'Orange (600 nm)', 'Red (645 nm)', 'Deep Red (700 nm)'],
    y: [31.92, 55.72, 45.16, 29.79, 24.75, 32.50, 49.25],
    marker:{
      color: ['rgba(37,41,236,1)', 'rgba(83,215,248,1)', 'rgba(0,255,0,1)', 'rgba(255,255,0,1)', 'rgba(255,165,0,1)', 'rgba(255,0,0,1)', 'rgba(141,7,4,0.75)']
      },
    type: 'bar',
  }
];

Plotly.newPlot('data', data);
