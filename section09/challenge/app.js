let btn = document.getElementById('btnFetch');
let joke = document.getElementById('joke');

btn.addEventListener('click', getJoke);

async function getJoke() {
    const url = 'https://icanhazdadjoke.com';
    const requestHeaders = {
        'Accept': 'application/json'
    };

    let response = await fetch(url, {
        headers: requestHeaders
    });

    let jokeObject = await response.json();
    joke.innerHTML = jokeObject.joke;
}