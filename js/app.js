const yearContainer = document.querySelector('#year')
const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const countdownContainer = document.querySelector('#countdown')
const loading = document.querySelector('#loading')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`Jan 01 ${nextYear} 00:00:00`)

yearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysContainer.textContent = getTimeUnit(days)
    hoursContainer.textContent = getTimeUnit(hours)
    minutesContainer.textContent = getTimeUnit(minutes)
    secondsContainer.textContent = getTimeUnit(seconds)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}

const showCountdown = () => {
    loading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(showCountdown, 1000)

setInterval(updateCountdown, 1000)