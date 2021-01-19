const button = document.querySelector('#button');
const message = document.querySelector('#message');

button.onclick = function() {
    const promises = new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        request.open("GET", 'http://api.icndb.com/jokes/random');
        request.onload = () => {
            if (request.status === 200) {
                console.log(request)
                resolve(request.response);
            }
            else{
                reject(Error(request.statusText));
            }
        }
        request.send();
    })
    promises.then((data) =>{
        console.log("promise executed");
        const result = JSON.parse(data).value.joke;
        message.innerHTML = result;
    },
    (error) => {
        console.log("message rejected");
        console.log(error.message)
    })
}