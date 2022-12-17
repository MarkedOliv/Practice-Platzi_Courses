import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData (urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))