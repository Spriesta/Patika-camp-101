let name = prompt("Lütfen Isminizi Giriniz")


let ustext = document.querySelector("#uptext").innerHTML = `Merhaba ${name}! Hoşgeldin. `

Tarihsaat();

let altext = document.querySelector("#downtext").innerHTML = `Tarihinde Front-End Patikası 1 Ödevini Yaptın.`




function Tarihsaat() {
    let bilgi = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let day = gunler[bilgi.getDay()]
    let hours = bilgi.getHours()
    let minute = bilgi.getMinutes()
    let second = bilgi.getSeconds()
    document.querySelector("#clock").innerHTML = `${hours} : ${minute} : ${second} - ${day}`
    setInterval(Tarihsaat, 1000)
}








