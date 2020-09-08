const cors = "https://cors-anywhere.herokuapp.com/";
const flex = document.getElementsByClassName(".flex")
const button = document.getElementById("location-get");
const button2 = document.getElementById("second-location-get");
const lat = [51.1801, 47.4678, 55.7415];
const long = [71.44598, 84.8811, 37.6156];
window.addEventListener("load", () => {
     let staticon = document.querySelector(".location-status");
     // let time = document.querySelector(".location-time");
     let city = document.querySelector(".location-city");
     let degree = document.querySelector(".temperature-degree");
     let descstatus = document.querySelector(".temperature-status");
     let api = `${cors}https://api.darksky.net/forecast/cc9e244b77bb846cea081a8e1c4e8550/${lat[0]},${long[0]}?units=si`

     let staticon2 = document.querySelector(".second-location-status");
     // let time = document.querySelector(".location-time");
     let city2 = document.querySelector(".second-location-city");
     let degree2 = document.querySelector(".second-temperature-degree");
     let descstatus2 = document.querySelector(".second-temperature-status");
     let api2 = `${cors}https://api.darksky.net/forecast/cc9e244b77bb846cea081a8e1c4e8550/${lat[1]},${long[1]}?units=si`

     let staticon3 = document.querySelector(".third-location-status");
     // let time = document.querySelector(".location-time");
     let city3 = document.querySelector(".third-location-city");
     let degree3 = document.querySelector(".third-temperature-degree");
     let descstatus3 = document.querySelector(".third-temperature-status");
     let api3 = `${cors}https://api.darksky.net/forecast/cc9e244b77bb846cea081a8e1c4e8550/${lat[2]},${long[2]}?units=si`

     let d = new Date();
     let h = (d.getHours());
     let m = (d.getMinutes());
     let time = "Time: " + h + ":" + m;
     fetch(api)
          .then(response => {
               return response.json();
          })
          .then(data => {
               console.log(data);
               let {
                    temperature,
                    summary
               } = data.currently;
               let ast = data.timezone.slice(0, 5) + 'Astana';
               city.textContent = ast;
               degree.textContent = temperature + "˚C";
               descstatus.textContent = summary;
          });
          
     fetch(api2)
          .then(response => {
               return response.json();
          })
          .then(data => {
               console.log(data);
               let {
                    temperature,
                    summary
               } = data.currently;
               let ast = data.timezone.slice(0, 5) + 'Zaysan';
               city2.textContent = ast;
               degree2.textContent = temperature + "˚C";
               descstatus2.textContent = summary;
          });
     fetch(api3)
          .then(response => {
               return response.json();
          })
          .then(data => {
               console.log(data);
               let {
                    temperature,
                    summary
               } = data.currently;
               let ast = data.timezone;
               city3.textContent = ast;
               degree3.textContent = temperature + "˚C";
               descstatus3.textContent = summary;
          });
});