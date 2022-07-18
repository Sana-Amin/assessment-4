const { default: axios } = require("axios")

const dessertContainer = document.querySelector('#dessert-container')
const form = document.querySelector('form')
const baseURL = `http://localhost:4000/api/desserts`

const dessertsCallback = ({ data: desserts }) => console.log(res.data)
const errCallback = err => console.log(err.response.data)

const getAllDesserts = () => axios.get(baseURL).then(dessertsCallback).catch(errCallback)



// function submitHandler(event) {
//     event.preventDefault()
//     let name = document.querySelector('#name')
//     let image = document.querySelector('#img')
   
//     let bodyObj = {
//         name: name.value, 
//         image: image.value
//     }
    // function createdesertlist(desert) {
    //     const desertCard = document.createElement('div')
    //     desertCard.classList.add('desert-card')
    //     desertCard.innerHTML = `<img src=${desert.image} />
    //     <h4 ${desert.name}</h4>
    //     `
    //     moviesContainer.appendChild(movieCard)
    // }
    // function displayDesserts(bodyObj) {
    //     for (let i = 0; i < desserts.length; i++) {
    //         (desserts[i])
    //     }
       
//}
// form.addEventListener('submit', submitHandler)

// getAllDesserts()
////////////////////////////////////////////////////////////
const complimentBtn = document.getElementById("complimentButton")
const dessertBtn = document.getElementById("dessertButton")




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getDessert = () => {
    axios.get("http://localhost:4000/api/dessert/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


complimentBtn.addEventListener('click', getCompliment)
dessertBtn.addEventListener('click', getDessert)

