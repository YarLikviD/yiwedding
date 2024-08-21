import '@/styles/index.scss'
import './helpers/focus-visible'

ScrollReveal().reveal('*', {
  // delay: 100,
  duration: 800,
  reset: true,
  scale: 0.9,
  easing: 'cubic-bezier(0, 0, 1, 1)',
})

// Set the date we're counting down to
const countDownDate = new Date('Oct 1, 2024 16:00:00').getTime()

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime()

  // Find the distance between now and the countdown date
  const distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  const daysEl = document.querySelector('#timer-days')
  const hoursEl = document.querySelector('#timer-hours')
  const minutesEl = document.querySelector('#timer-minutes')
  const secondsEl = document.querySelector('#timer-seconds')

  daysEl.innerHTML = days.toString()
  hoursEl.innerHTML = hours.toString()
  minutesEl.innerHTML = minutes.toString()
  secondsEl.innerHTML = seconds.toString()

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    daysEl.innerHTML = '0'
    hoursEl.innerHTML = '0'
    minutesEl.innerHTML = '0'
    secondsEl.innerHTML = '0'
  }
}, 1000)

const audio = document.querySelector('audio')
const hook = () => {
  function isPlaying() {
    return !audio.paused
  }

  if (!isPlaying()) {
    audio.muted = false // Размутить после автозапуска
    audio.play().catch(function() {
      console.log('Автовоспроизведение было заблокировано')
    })
  }
}
window.addEventListener('click', hook)

window.addEventListener('touchend', hook)
