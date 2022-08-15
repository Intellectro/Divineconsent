const products = [
    {
        id: 0,
        category: "engineering",
        image: "../images/about4.jpg",
        text: ["Project"],
        hoverText: "Engineering"
    },
    {
        id: 1,
        category: "construction",
        image: "../images/BGIMAGE/Construct.jpg",
        text: ["Construct"],
        hoverText: "Construction"
    },
    {
        id: 2,
        category: "engineering",
        image: "../images/about.jpg",
        text: ["Project"],
        hoverText: "Engineering"
    },
    {
        id: 3,
        category: "construction",
        image: "../images/BGIMAGE/Partner.jpg",
        text: ["Construct"],
        hoverText: "Construction"
    },
    {
        id: 4,
        category: "agro business",
        image: "../images/BGIMAGE/bgimge.jpg",
        text: ["Oil and Gas"],
        hoverText: "Agro Business"
    },
    {
        id: 5,
        category: "transport services",
        image: "../images/DELIVERY/sino3.jpg",
        text: ["Delivery"],
        hoverText: "Top ranking and Fast"
    },
    {
        id: 6,
        category: "agro business",
        image: "../images/BGIMAGE/Agro (1).jpg",
        text: ["Oil and Gas"],
        hoverText: "Agro Business"
    },
    {
        id: 7,
        category: "transport services",
        image: "../images/DELIVERY/dangote2.jpg",
        text: ["Delivery"],
        hoverText: "Top ranking and Fast"
    }
];

const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
];

const demands = [
    "Building",
    "Hotel",
    "Flyover",
    "Society",
    "Supplies",
    "Others"
];

const serviceBox = document.querySelector('.services-grid');
const serviceBtnContainer = document.querySelector('.service-btns');


function displayProducts(items){
    let serviceItem = items.map(item=>{
        return `
            <div class="grid-pos-container">
                <img src="${item.image}" alt="#">
                <div class="grid-text">${item.text}</div>
                <div class="hover-grid g-text">${item.hoverText}</div>
            </div>
        `;
    }).join("");
    serviceBox.innerHTML = serviceItem;
}
window.addEventListener('DOMContentLoaded', ()=>{
    displayProducts(products);
    let productButton = products.reduce((button, initial)=>{
        if (!button.includes(initial.category)){
            button.push(initial.category);
        }
        return button;
    }, ['all']);
    productButton.forEach(button=>{
        serviceBtnContainer.innerHTML += `<button class="${button} s-btn" data-id="${button}">${button}</button>`;
    });
    const buttons = document.querySelectorAll('.s-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e)=>{
            if (e.currentTarget.classList.contains('activate')){
                button.classList.remove('activate');
            }else{
                button.classList.add('activate')
            }
            const checkDataId = e.currentTarget.dataset.id;
            let getProductItem = products.filter(product=>{
                if (product.category === checkDataId){
                    return product;
                }
            });
            if (checkDataId === 'all'){
                displayProducts(products)
            }else{
                displayProducts(getProductItem)
            }
        })
    })
});

const locator = document.getElementById('location');
states.forEach(state => {
    locator.innerHTML += `
        <option value="${state}">${state}</option>
    `;
});

const demandBox = document.getElementById('demand');
demands.forEach(demand => {
    demandBox.innerHTML += `<option value="${demand}">${demand}</option>`;
});