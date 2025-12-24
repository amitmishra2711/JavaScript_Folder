function giveTime()
{
    var d=new Date()
    let hours=d.getHours()
    let minutes=d.getMinutes()
    let seconds=d.getSeconds()
    // return `${hours}:${minutes}:${seconds}`;
    // return d.toLocaleTimeString()
    return d.toLocaleString()
}

setInterval(()=>{

    var v=document.querySelector(".clock")
    v.innerHTML=giveTime()

},1000)