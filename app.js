const api_url = "https://api.nasa.gov/planetary/apod?api_key=605OOy5adV1hIy9FyJbgQfviYvOijr7GC7g1utDq"; 
const body = document.querySelector("body");
const date = document.querySelector("#date");
const titl = document.querySelector("#titl");
const exp = document.querySelector("#explaination");

async function fetchData() {
    try {
        const res = await fetch(api_url);

        if (!res.ok) {
            throw new Error("Could not fetch Data");
        }

        const data = await res.json();
        console.log(data);
        body.style.backgroundImage = `url(${data.hdurl})`;
        date.innerHTML = data.date;
        exp.innerHTML = data.explanation;
        titl.innerHTML = data.title;

    } catch (error) {
        console.error(error);
    }
}

fetchData();