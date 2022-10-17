

//take jawns (city and country) and submit them for check//
document.querySelector(".search").addEventListener("click", draw);




const url = 'https://official-joke-api.appspot.com/random_joke'


function draw() {

  
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.setup
        document.querySelector('h3').innerText = data.punchline
    })
    
    .catch(err => {
        console.log('error ${err}')

    });
 }