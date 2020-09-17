// import { gsap, MotionPathPlugin } from 'gsap/all'
// import gsap from 'gsap'
// import MotionPathPlugin from 'MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

const countDownDate = new Date('Sep 17, 2020 20:00:00').getTime()
const startDate = new Date('Sep 17, 2020 10:00:00').getTime()
const allTime = (countDownDate - startDate) / 1000
const currentPosition = allTime - (countDownDate - new Date()) / 1000
const startPosition = 0
const endPosition = currentPosition / allTime

console.log('allTime :', allTime)
console.log('currentPosition :', currentPosition)

const cta = document.getElementById('button')

const parseUrl = () => {
  switch (window.location.pathname) {
    case 1:
      return 'OLYMP'
      break

    case 2:
      return 'KRESCH'
      break

    case 3:
      return 'SHOTA'
      break

    case 4:
      return 'PASSAGE'
      break

    case 5:
      return 'BKH'
      break

    default:
      return 'KBP'
      break
  }
}

document.getElementById('departure').innerHTML = `<p class='txt bold'>KHLBN<span>${parseUrl()}</span></p>`

let x = setInterval(function() {
  let now = new Date().getTime()
  let distance = countDownDate - now
  // console.log(distance / 1000)

  // let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // document.getElementById('demo').innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'с '
  document.getElementById('demo').innerHTML = hours + ':' + minutes + ':' + seconds

  if (distance < 0) {
    clearInterval(x)
    document.getElementById('demo').innerHTML = 'БАБАХ!'
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
    start: startPosition,
    end: endPosition
  }
})

console.log(MotionPathPlugin.getLength('#path'))
