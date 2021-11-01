// * Carousel 

var banner_carousel = document.body.querySelector(".banner_carousel");
var banner = banner_carousel.querySelectorAll(".banner");
var b1 = banner_carousel.querySelector(".b1");
var b2 = banner_carousel.querySelector(".b2");
// console.log(b1,b2);
var size = -50;
var delay = 2500;

/*
// setInterval(() => {
//     console.log(size);
//     if(size <= -5856){
//         size = -285;

//         for(var i=0;i<banner.length;i++){
//             banner[i].style.transitionDuration = "0s";
//         }
//     }
//     else{
//         for(var i=0;i<banner.length;i++){
//             banner[i].style.transitionDuration = ".5s";
//         }
//     }
//     // if(size > -285){
//     //     size = -4618;
//     // }
//     for(var i=0;i<banner.length;i++){
//         banner[i].style.transform = `translateX(${size}px)`;
//     }
//     size -= 619;
//     b1.addEventListener("click",()=>{size += 619;});
//     b2.addEventListener("click",()=>{size -= 619});
// }, delay);

// discarded code for carousel
*/

var next = () => {
    size -= 102.04;
    // console.log(size);

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size < -866) {
        size = -50;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = ".5s";
        }
    }
}

var previous = () => {
    size += 102.04;
    // console.log(size);

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size > -50) {
        size = -866;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = ".5s";
        }
    }
}

var play = setInterval(next, delay);

b1.addEventListener("click", previous);
b2.addEventListener("click", next);

// * Fetch request

// var type = "result";
// var query = "Meri Zindagi Hai Tu";

async function requestData(type, query) {
    try {
        let res = await fetch(
            `http://127.0.0.1:5000/${type}/?query=${query}`
        )
        let data = await res.json()
        return await data;
        // displayMovie(data)
    } catch {
        console.log("Something went wrong");
    }
}


var display_card = (type, url, location) => {
    var data = requestData(type, url);
    // console.log(data);
    data.then((value) => {
        // console.log(value.songs);
        let songs = value.songs;
        let doc = document.body;
        // let block = doc.querySelector(".block_display");
        let cardsCarousel = doc.querySelector(`${location}`);
        // console.log(cardsCarousel);
        for (var i = 0; i < songs.length; i++) {
            // console.log(songs[i]);
            let card = document.createElement("a");
            card.setAttribute("class", "card");
            // card.style.border = "2px solid black";
            card.href = "";
            let img = document.createElement("img");
            img.src = songs[i].image;
            let name = document.createElement("p");
            name.textContent = songs[i].song;
            name.style.margin = "0%";
            name.style.fontWeight = "bold";
            card.append(img, name);
            cardsCarousel.append(card);
        }
    })
}



var trending_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/now-trending---punjabi/Vy34km3okmQ_";
    display_card(type, url, ".trending");
}

var releases_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/taaza-tunes/Me5RridRfDk_";
    display_card(type,url, ".releases");
}
trending_cards();
releases_cards();

// * Button controls for Trending

var former = document.body.querySelector(".former");
var lateral = document.body.querySelector(".lateral");

var size2 = 0;

var back = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size2 += 900;
    
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size2}%)`;
    }
    checkButton();
}
var forward = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size2 -= 900;
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size2}%)`;
    }
    checkButton();
}
var checkButton = ()=>{
    // console.log(size2);
    if(size2 >=0){
        former.disabled = true;
    }
    else{
        former.disabled = false;
    }
}
checkButton();

former.addEventListener("click", back);
lateral.addEventListener("click", forward);


// * Button controls for New Releases


var former1 = document.body.querySelector(".former1");
var lateral1 = document.body.querySelector(".lateral1");

var size3 = 0;

var back = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size3 += 900;
    
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size3}%)`;
    }
    checkButton1();
}
var forward = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size3 -= 900;
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size3}%)`;
    }
    checkButton1();
}
var checkButton1 = ()=>{
    // console.log(size3);
    if(size3 >=0){
        former1.disabled = true;
    }
    else{
        former1.disabled = false;
    }
}
checkButton1();

former1.addEventListener("click", back);
lateral1.addEventListener("click", forward);

