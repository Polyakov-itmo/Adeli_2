let body = document.body
let statusBlock = document.querySelector('.status')
let containerBlock = document.querySelector('.container')
let timerBlock = document.querySelector('.timer')

function setStyles(param) {
  if (param == 1) {
    containerBlock.style.padding = '360px 0 0 0'
    statusBlock.innerHTML = 'work time'
    body.style.backgroundImage = "url('images/work_time.jpg')"
  } else if (param == 2) {
    containerBlock.style.padding = '150px 0 0 0'
    statusBlock.innerHTML = 'rest time'
    body.style.backgroundImage = "url('images/coffie_time.jpeg')"
  } else {
    containerBlock.style.padding = '600px 0 0 0'
    statusBlock.innerHTML = 'home time'
    body.style.backgroundImage = "url('images/bg_1.jpg')"
  }
}

let dateHour = new Date(2023, 0, 27, 18, 0, 0, 0).getHours()

function SetState(param) {
  let dateNow = new Date()

  let currentHour = dateNow.getHours()
  let currentMinut = dateNow.getMinutes()
  let currentSecond = dateNow.getSeconds()

  if (currentHour < dateHour) {
    if (currentHour == 14) {
      currentStatus = 2
      setStyles(currentStatus)
      let lastHour = dateHour - currentHour - 1
      if (lastHour < 10) {
        lastHour = '0' + lastHour
      }

      let lastMinut = 60 - currentMinut - 1
      if (lastMinut < 10) {
        lastMinut = '0' + lastMinut
      }
      if (lastMinut == 60) {
        lastMinut = '00'
      }

      let lastSecond = 60 - currentSecond
      if (lastSecond < 10) {
        lastSecond = '0' + lastSecond
      }
      if (lastSecond == 60) {
        lastSecond = '00'
      }

      timerBlock.innerHTML = lastHour + ':' + lastMinut + ':' + lastSecond
    } else {
      currentStatus = 1
      setStyles(currentStatus)
      let lastHour = dateHour - currentHour - 1
      if (lastHour < 10) {
        lastHour = '0' + lastHour
      }

      let lastMinut = 60 - currentMinut - 1
      if (lastMinut < 10) {
        lastMinut = '0' + lastMinut
      }
      if (lastMinut == 60) {
        lastMinut = '00'
      }

      let lastSecond = 60 - currentSecond
      if (lastSecond < 10) {
        lastSecond = '0' + lastSecond
      }
      if (lastSecond == 60) {
        lastSecond = '00'
      }

      timerBlock.innerHTML = lastHour + ':' + lastMinut + ':' + lastSecond
    }
  } else {
    currentStatus = 3
    setStyles(currentStatus)
    timerBlock.innerHTML = 'домой'
  }
}

setInterval(() => {
  SetState()
}, 1000)
