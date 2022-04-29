// Add your code here

const userData = {
    name: "Steve",
    email: "steve@steve.com"
};

const configurationObj = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body:JSON.stringify(userData),
};

function submitData(name, email) {
    return fetch ('http://localhost:3000/users', configurationObj)
    .then (res => res.json())
    .then (function (newID){
        document.querySelector('body');
        document.body.innerHTML = newID.id;
    })
    .catch (function (err){
        alert ('ERROR ERROR');
       document.body.innerHTML = err.message;
    });
}


