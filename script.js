
function currentTime(){
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let az = document.getElementById('cls').innerHTML = h + ':' + m + ':' + s  
    
  
    let af = setTimeout(function() {
      currentTime()
    }, 1000)
  }
  currentTime()
  
  