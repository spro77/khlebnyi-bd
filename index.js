// import { gsap, MotionPathPlugin } from 'gsap/all'
// import gsap from 'gsap'
// import MotionPathPlugin from 'MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

const timeToBabax = 5

const countDownDate = new Date('Sep 19, 2020 10:00:00').getTime()
const startDate = new Date('Sep 14, 2020 10:00:00').getTime()
// const countDownDate = new Date()
// countDownDate.setSeconds(countDownDate.getSeconds() + timeToBabax);

const p = new URL(document.location.href)
console.log(p)
let x = setInterval(function() {
  let now = new Date().getTime()
  let distance = countDownDate - now

  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('demo').innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'с '

  if (distance < 0) {
    clearInterval(x)
    document.getElementById('demo').innerHTML = 'БАБАХ!'
  }
}, 1000)

gsap.to('#plane', {
  duration: timeToBabax,
  delay: 1,
  repeat: -1,
  // repeatDelay: 1,
  yoyo: true,
  ease: 'power1.inOut',
  motionPath: {
    path: '#path',
    align: '#path',
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 1
  }
})
