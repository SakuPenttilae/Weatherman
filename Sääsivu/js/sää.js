let city = document.getElementById("input")
let nappi = document.querySelector("#nappi")
let cityname = document.getElementById("span0")
let tempPrint = document.getElementById("span1")
let feelsPrint = document.getElementById("span2")
let humiPrint = document.getElementById("span3")
let windPrint = document.getElementById("span4")
let countryPrint = document.getElementById("span5")
let warning = document.querySelector("#varoitus")
let description = document.querySelector("#description")
let cities = document.querySelector("#cities")



nappi.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&mode=JSON&lang=fi&appid=481237c4e89298d4c2d1181f5147394c`)
        .then(response => response.json())
        .then(data => {
            varoitus.innerHTML=""
            description.innerHTML=""
        
            let nameValue = data['name']
            let tempValue = data['main']['temp']
            let feelsValue = data['main']['feels_like']
            let humiValue = data['main']['humidity']
            let windValue = data['wind']['speed']
            let weatherId = data['weather'][0]['id']
            let descriptionValue = data['weather'][0]['description']
            let countryValue = data['sys']['country']
        
            cityname.innerHTML = nameValue
            tempPrint.innerHTML = tempValue + "°C"
            feelsPrint.innerHTML = feelsValue + "°C"
            humiPrint.innerHTML = humiValue + "%"
            windPrint.innerHTML = windValue + "m/s"
            description.innerHTML = descriptionValue
            countryPrint.innerHTML = countryValue
        
            if(tempValue<0) {
                varoitus.innerHTML+="Ulkona on pakkasta, pistä mamikset jalkaan.<br>"
            }
            if (weatherId>200&&weatherId<233) {
                varoitus.innerHTML+="Ulkona on ukkosmyrsky. Kehotan jäämään sisälle.<br>"
            }
            if (weatherId>500&&weatherId<600) {
                varoitus.innerHTML+="Ulkona on luvassa sadetta, sadeviitta messiin.<br>"
            }
            if (weatherId>600&&weatherId<700) {
                varoitus.innerHTML+="Lunta sataa, varaudu.<br>"
            }
            let tarkistettuKaupunki = document.createElement("li")
            tarkistettuKaupunki.innerHTML = nameValue +" "+ tempValue + "°C"
            cities.appendChild(tarkistettuKaupunki)
        })
    .catch(err => alert("Kaupungin nimi on väärin!"))
})

