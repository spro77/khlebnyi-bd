const countDownDate = new Date('Sep 18, 2020 19:00:00').getTime()
const startDate = new Date('Sep 17, 2020 10:00:00').getTime()
const allTime = (countDownDate - startDate) / 1000
const currentPosition = allTime - (countDownDate - new Date().getTime()) / 1000
const endPosition = currentPosition / allTime
const duration = allTime - currentPosition

console.log('duration :', duration)
console.log('allTime :', allTime)
console.log('currentPosition :', currentPosition)

document.getElementById('button').onclick = () => {
  document.location = parseUrl()[1]
}

const parseUrl = () => {
  switch (window.location.pathname) {
    case '/1':
      return ['OLYMP', 'https://khlebniy.com.ua/q/a?10#c66']
      break

    case '/2':
      return ['KRESCH', 'https://khlebniy.com.ua/q/a?10#c66']
      break

    case '/3':
      return ['SHOTA', 'https://khlebniy.com.ua/q/a?10#c66']
      break

    case '/4':
      return ['PASSAGE', 'https://khlebniy.com.ua/q/a?10#c67']
      break

    case '/5':
      return ['BKH', 'https://khlebniy.com.ua/q/a?10#c66']
      break

    default:
      return ['KBP', 'https://kbp.aero/en/']
      break
  }
}
console.log(window.location.pathname, parseUrl())

document.getElementById('departure').innerHTML = `<p class='txt bold'>KHLBN<span>${parseUrl()[0]}</span></p>`

let x = setInterval(function() {
  let now = new Date().getTime()
  let distance = countDownDate - now

  // let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // document.getElementById('demo').innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'с '
  document.getElementById('demo').innerHTML = hours + ':' + minutes + ':' + seconds

  if (distance < 0) {
    clearInterval(x)
    setTimeout(() => {
      document.location.href = 'https://khlebniy.com.ua/'
    }, 2000)
  }
}, 1000)

gsap.to('#plane', {
  duration: 1,
  // delay: 1,
  // repeat: -1,
  // repeatDelay: 1,
  yoyo: true,
  ease: 'power1.inOut',
  motionPath: {
    path: '#path',
    align: '#path',
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: endPosition
  }
})

gsap.to('#plane', {
  duration: duration,
  delay: 1,
  // repeat: -1,
  // repeatDelay: 1,
  yoyo: true,
  ease: 'power1.inOut',
  motionPath: {
    path: '#path',
    align: '#path',
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: endPosition,
    end: 1
  }
})
