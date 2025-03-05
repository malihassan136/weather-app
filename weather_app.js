let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={bf3ae3347c0b7e91a0d216d1eca7794f}";

let input=document.querySelector("#text");
let search=document.querySelector("#srchbtn");
let temperture=document.querySelector("#tempvalue");
let temp_desc=document.querySelector("#description");
let humidity=document.querySelector("#humid_value");
let humid_desc=document.querySelector("#humid_text");
let windspeed=document.querySelector("#wind_speed");
let cloud_img=document.querySelector("#cloudimg");
let img=document.querySelector("#img");
let details=document.querySelector("#details");
let msg=document.querySelector("#msg");
// function changes(){

// }

async function checkweather(){
    let used_api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=bf3ae3347c0b7e91a0d216d1eca7794f`;

let response=await fetch(used_api);
let data=await response.json();
console.log(data);
console.log(response);
if(response.status===404){
    console.log("location not found")
    img.src="/images/404.png";
    img.style.marginTop="80px";
    details.style.display="none";
    msg.innerHTML="oops!!location not found";
    



}
console.log(response.status);
temperture.innerHTML=(data.main.temp-273.5).toFixed(2);
temp_desc.innerHTML=data.weather[0].main;
temperture.append("°С");
humidity.innerText=data.main.humidity;
humidity.append("%");
windspeed.innerText=data.wind.speed;
windspeed.append("m/s");


if(data.weather[0].main==="clear"){

    img.src="/images/clear.png"
    
 }
 else if(data.weather[0].main==="cloud"){

    img.src="/images/cloud.png"
    
 }
 else if(data.weather[0].main==="mist"){

    img.src="/images/mist.png"
    
 }
 else if(data.weather[0].main==="snow"){

    img.src="/images/snow.png"
    
 }
 if(response.status==="404"){
    console.log("location not found");
 }

}
search.addEventListener("click",checkweather)
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather();
    }
});


