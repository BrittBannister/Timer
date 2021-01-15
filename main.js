setInterval(function() {
    const today = new Date().getTime()
    const new_year = new Date('april 05 2021').getTime()
    const time_left = new_year - today

    let day = time_left / (1000 * 60 * 60 * 24)
    let hours = (time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    let minutes = (time_left % (1000 * 60 * 60)) / (1000 * 60)
    let second = (time_left % (1000 * 60)) / 1000

    document.querySelector('.days-left').innerText = Math.floor(day)
    document.querySelector('.hours-left').innerText = Math.floor(hours)
    document.querySelector('.minutes-left').innerText = Math.floor(minutes)
    document.querySelector('.seconds-left').innerText = Math.floor(second)
}, 1000)