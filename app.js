
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onclick=()=> {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}






var cars = {
    honda: {
        civic: {
            model: 2011,
            price: 30000,
            location: "islamabad",
            img: "Honda.png",
            
        },
        city: {
            model: 2012,
            price: 40000,
            location: "karachi",
            img: "tumblr.jpg",
            
        }
    },
    toyota: {
        carola: {
            model: 2010,
            price: 30000,
            location: "Nawabshah",
            img: "Honda.png",
            
        },
        aqua: {
            model: 2010,
            price: 30000,
            location: "Lahore",
            img: "Honda.png",
            
            
        },
        Gli: {
            model: 2020,
            price: 56000,
            location: "Lahore",
            img: "Honda.png",
            
        },
        vitz: {
            model: 2017,
            price: 56000,
            location: "Karachi",
            img: "Honda.png",
            
        },
        vit: {
            model: 2017,
            price: 56000,
            location: "Karachi",
            img: "Honda.png",
            
        },
        citz: {
            model: 2017,
            price: 56000,
            location: "Karachi",
            img: "Honda.png",
            
        },
        tz: {
            model: 2017,
            price: 56000,
            location: "Karachi",
            img: "Honda.png",
            
        },
        aquaaa: {
            model: 2010,
            price: 30000,
            location: "Lahore",
            img: "Honda.png",
            
        },
        aquan: {
            model: 2010,
            price: 30000,
            location: "Lahore",
            img: "Honda.png",
            
        },
        quan: {
            model: 2010,
            price: 30000,
            location: "Lahore",
            img: "Honda.png",
            
        },
    }
};

var allCars = document.getElementById('all-cars');
function allCarsShow() {
    allCars.innerHTML = "";
    allCars.innerHTML = `<div class="heading-div" id="heading-div"> 
    <img src="tumblr.jpg" alt="" class="hyundai-heading-img">
    </div>`;
    for (var main in cars) {
        main.innerHTML= main;
        for (var key in cars[main]) {
           

            allCars.innerHTML += `
            <div class="car-cards">
            <div class="car-img">
                <img src="${cars[main][key].img}" alt="" class="car-image">
                </div>
                <div class="car-txt">
                <a href="#" class="car-name">
                ${cars[main][key].model}
                </a>
                <span class="car-price">
                USD ${cars[main][key].price}
                </span>
                <span class="car-location">
                ${cars[main][key].location}
                </span>
                </div>


                </div>
                `


            

        }

    }
}

    allCarsShow()

    function honda(brand){
        allCars.innerHTML = "";
    allCars.innerHTML = `<div class="heading-div" id="heading-div"> <img src="honda.png" alt="" class="hyundai-heading-img"> </div>`;

        
        for(var key in cars[brand]){
            
            
            console.log(cars[brand][key].model)
            


        allCars.innerHTML += `
            <div class="car-cards">
            <div class="car-img">
                <img src="${cars[brand][key].img}" alt="" class="car-image">
                </div>
                <div class="car-txt">
                <a href="#" class="car-name">
                ${cars[brand][key].model}
                </a>
                <span class="car-price">
                USD ${cars[brand][key].price}
                </span>
                <span class="car-location">
                ${cars[brand][key].location}
                </span>
                </div>


                </div>
                `
        
}
}

