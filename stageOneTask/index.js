const today = new Date()
const day = today.getDay()

const dayList = [
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturuday'
]

document.querySelector(".day").innerHTML = `It's ${dayList[day].toUpperCase()}`


setInterval(()=>{
    const date = new Date()
  document.querySelector(".time").innerHTML = date.toLocaleTimeString()
},1000)


