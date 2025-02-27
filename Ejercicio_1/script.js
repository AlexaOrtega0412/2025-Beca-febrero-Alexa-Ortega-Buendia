document.querySelector('#btn').addEventListener('click',() => {
    doRequest('https://jsonplaceholder.typicode.com/users');
});
const doRequest = (url) => {
    fetch(response => {
        return response.json();
    })
    .then(data => {
        //data
        data.forEach(user => {
            document.body.innerHTML += buildString(user);
        });
    })
    
    .catch(error => {

    });

}

const buildString = (user) => {
    return `<h1>${user.name}</h1>`;
}