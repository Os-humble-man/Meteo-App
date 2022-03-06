//les element qui vont recevoire les information 
const notification = document.querySelector('.notification');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const localisation = document.querySelector('.localisation');
const icons = document.querySelector(".icon-weather");
//clé api

const key = '6b3b4d67784e44f17ca349af3bb53e1e';

//verifier si la localisation est activer dans le navigateur
const getLocalisation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        notification.innerHTML = 'veuillez activer la geolocalisation dans votre navigateur';
    }
}
//voir la position de l'utilisateur
const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&exclude={part}&appid=${key}`;


    fetch(api)
        .then((response) => response.json())
        .then(data =>{
            console.log(data);
            displaydata(data)
        })
        

    }
//afficher les information dans le navigateur

function displaydata(data){
   const temp = Math.floor(data.current.temp);
   const desc = data.current.weather[0].description;
   const icon = data.current.weather[0].icon;
    const PaysVille = data.timezone;
    //affichage
    temperature.innerHTML =`${temp}°`;
    description.innerHTML = desc;
    localisation.innerHTML = PaysVille;
    icons.innerHTML = 'Hi';

}

getLocalisation();
