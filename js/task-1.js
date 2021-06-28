const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const TIMEOUT = 1000;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timerId = null;

  let firstColor = colors[0];
  let secondColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

  const startButton = document.querySelector('[data-action="start"]');
  const stopButton = document.querySelector('[data-action="stop"]');
  
  stopButton.disabled = true;

  startButton.addEventListener('click', onStartButtonClick);
  stopButton.addEventListener('click', onStopButtonClick);

  function onStartButtonClick() {
      startButton.disabled = true;
      stopButton.disabled = false;
  
      timerId = setTimeout(changeBodyColor, TIMEOUT);
  }

  function onStopButtonClick() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearTimeout(timerId, TIMEOUT);

    // setting current color for body on stop
    document.body.style.backgroundColor = firstColor;
  }

  function changeBodyColor() {
    // document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    
    // with animation for smooth body's color change. 
    // Dear mentor, I'm caring about your eyes)))
    document.body.animate([
        {
            backgroundColor: `${firstColor}`
        },
        {
            backgroundColor: `${secondColor}`
        },
    ], TIMEOUT);

    changeColorVariables();

    timerId = setTimeout(changeBodyColor, TIMEOUT);
  }

  function changeColorVariables() {
    firstColor = secondColor;

    // preventing same color picking
    while(secondColor === firstColor){
      secondColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }
  }