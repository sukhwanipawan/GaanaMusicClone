// * Carousel 

var banner_carousel = document.body.querySelector(".banner_carousel");
var banner = banner_carousel.querySelectorAll(".banner");
var b1 = banner_carousel.querySelector(".b1");
var b2 = banner_carousel.querySelector(".b2");
// console.log(b1,b2);
var size = -50;
var delay = 2500;

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
            `http://127.0.0.1:5000/${type}/?query=${query}&lyrics=false`
        )
        let data = await res.json()
        console.log(data);
        return await data;
    } catch {
        console.log("Something went wrong");
    }
}

var display_card = (type, url, location) => {
    var data = requestData(type, url);
    data.then((value) => {
        let songs = value.songs;
        let doc = document.body;
        let cardsCarousel = doc.querySelector(`${location}`);
        for (var i = 0; i < songs.length; i++) {
            let card = document.createElement("a");
            card.setAttribute("class", "card");
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

var display_c = (type, url, location) => {
    var data = requestData(type, url);
    data.then((value) => {
        let doc = document.body;
        let cardsCarousel = doc.querySelector(`${location}`);
        for (var i = 0; i < value.length; i++) {
            let card = document.createElement("a");
            card.setAttribute("class", "card");
            card.href = "";
            let img = document.createElement("img");
            img.src = value[i].image;
            let name = document.createElement("p");
            name.textContent = value[i].song;
            name.style.margin = "0%";
            name.style.fontWeight = "bold";
            card.append(img, name);
            cardsCarousel.append(card);
        }
        for (var i = 0; i < value.length; i++) {
            let card = document.createElement("a");
            card.setAttribute("class", "card");
            card.href = "";
            let img = document.createElement("img");
            img.src = value[i].image;
            let name = document.createElement("p");
            name.textContent = value[i].song;
            name.style.margin = "0%";
            name.style.fontWeight = "bold";
            card.append(img, name);
            cardsCarousel.append(card);
        }
    })
}



var trending_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/trending-songs/Me5RridRfDk_";
    display_card(type, url, ".trending");
}
trending_cards();

var releases_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/taaza-tunes/Me5RridRfDk_";
    display_card(type,url, ".releases");
}
releases_cards();

var top_cards = () =>{
    var type = "result";
    var url = "bollywood-masala";
    display_c(type,url, ".topCharts");
}
top_cards();

var popularInHindi_cards = () =>{
    var type = "result";
    var url = "popular-in-hindi-songs";
    display_c(type,url, ".popularInHindi");
}
popularInHindi_cards();

var artists = [["https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1631509967.webp","Arijit Singh"],
               ["https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp","Tanishk Bagchi"], 
               ["https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp","Pritam"],
               ["https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1516701680.webp","Neha Kakkar"],
               ["https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp","Badshah"],
               ["https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg","B Praak"],
               ["https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.webp","Yo Yo Honey Singh"],
               ["https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp","Lata Mangeshkar"],
               ["https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNgP763B/size_m_1595857138.webp","Tony Kakkar"]];

var artists_card = (location) =>{
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < artists.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = "";
        let img = document.createElement("img");
        img.src = artists[i][0];
        img.style.borderRadius = "50%";
        let name = document.createElement("p");
        name.textContent = artists[i][1];
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}
artists_card(".artists")



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


// * Button controls for Top Charts
var former2 = document.body.querySelector(".former2");
var lateral2 = document.body.querySelector(".lateral2");

var size4 = 0;

var back = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size4 += 900;
    
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size4}%)`;
    }
    checkButton2();
}
var forward = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size4 -= 900;
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size4}%)`;
    }
    checkButton2();
}
var checkButton2 = ()=>{
    // console.log(size3);
    if(size4 >=0){
        former2.disabled = true;
    }
    else{
        former2.disabled = false;
    }
}
checkButton2();

former2.addEventListener("click", back);
lateral2.addEventListener("click", forward);


// * Button controls for Popular In Hindi 
var former3 = document.body.querySelector(".former3");
var lateral3 = document.body.querySelector(".lateral3");

var size5 = 0;

var back = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size5 += 900;
    
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size5}%)`;
    }
    checkButton3();
}
var forward = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size5 -= 900;
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size5}%)`;
    }
    checkButton3();
}
var checkButton3 = ()=>{
    // console.log(size3);
    if(size5 >=0){
        former3.disabled = true;
    }
    else{
        former3.disabled = false;
    }
}
checkButton3();

former3.addEventListener("click", back);
lateral3.addEventListener("click", forward);


// * Button controls for Featured Artists
var former4 = document.body.querySelector(".former4");
var lateral4 = document.body.querySelector(".lateral4");

var size6 = 0;

var back = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size6 += 900;
    
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size6}%)`;
    }
    checkButton4();
}
var forward = (e) =>{
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size6 -= 900;
    for(var i=0;i<cards.length;i++){
        // console.log(cards[i]);
        
        cards[i].style.transform = `translateX(${size6}%)`;
    }
    checkButton4();
}
var checkButton4 = ()=>{
    // console.log(size3);
    if(size6 >=0){
        former4.disabled = true;
    }
    else{
        former4.disabled = false;
    }
}
checkButton4();

former4.addEventListener("click", back);
lateral4.addEventListener("click", forward);

