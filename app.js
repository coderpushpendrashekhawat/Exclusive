let count=0
arr=[]
function getRandomInt(max) {
  i=Math.floor(Math.random() * max);
  if(i>3){
    return i
  }
  else{
    return 3
  }
}
for(let k in products){
  products[k]["rating"]=getRandomInt(6)
}

// if (products[i]["discountPercentage"] >= 15.0 && products[i]["thumbnail"]) {



const sliderWrapper = document.querySelector('.swiper-wrapper');
  let currentIndex = 0;

function showCard(index) {
  const cardWidth = document.querySelector('.swiper-wrapper').offsetWidth;
  sliderWrapper.style.transform = `translateX(${-index * cardWidth}px)`;
}
function prev() {
  let cardlen=document.querySelector('.swiper-slide')
  if(currentIndex>=1){
  currentIndex = (currentIndex - 1)
  showCard(currentIndex);
  }
};

function next() {
  let cardlen=document.querySelectorAll('.swiper-slide')
  if(currentIndex<=(cardlen.length-2)){
  currentIndex = (currentIndex + 1);
  showCard(currentIndex);
  }
}
console.log(arr)



for(let m=0;m<=2;m++){
for (let i = 0; i <= 29; i++) {
  if (products[i]["discountPercentage"] >= 15.0 && products[i]["thumbnail"] && m==0){
  let tr=0
    for(let x in arr){
      console.log(x)
      if(arr[x]==products[i]["id"]){
        tr=1
        break;
      }
    }
    if(tr==1){
      continue;
    }
    arr.push(products[i]["id"])
    let main = document.createElement("div");
    main.className = "swiper-slide";
    let div = document.querySelectorAll(".swiper-wrapper");
    div[m].append(main);
    let img = document.createElement("img");
    let url = products[i]["thumbnail"];
    img.className = "imageslide";
    img.src = url;
    main.append(img);
    let main4=document.createElement("div")
    atcart=document.createElement("i")
    atcart.style.marginTop="40px"
    atcart.style.marginRight="20px"
    atcart.className="fa-solid fa-cart-shopping"
    atcart.style.fontSize="30px"
    atcart.style.color="#DB4444"
    main4.style.display="flex"
    main4.style.gap="16px"
    let main2 = document.createElement("div");
    main2.className = "cardsdata";
    let names = document.createElement("p");
    names.innerText = products[i]["title"];
    let pdiv=document.createElement("div");
    pdiv.style.display="flex"
    pdiv.style.gap="16px"
    let prices = document.createElement("p");
    prices.innerText = products[i]["price"];
    let price=products[i]["price"];
    mrp=price+Math.round(products[i]["discountPercentage"])
    let actprice = document.createElement("p");
    actprice.innerText=mrp
    actprice.style.textDecoration="line-through"
    actprice.style.color="rgba(0,0,0,0.5)"
    prices.style.color="#DB4444"
    let rating=products[i]["rating"]
    let ratingct=getRandomInt(100)
    let rdiv=document.createElement("div");
    rdiv.style.display="flex"
    rdiv.style.gap="4px"
    let rpara=document.createElement("p")
    rpara.innerText="("+ratingct+")"
    let main3=document.createElement("div")
    main3.className="star"
    main2.append(names);
    main2.append(pdiv);
    pdiv.append(prices);
    pdiv.append(actprice)
    main.append(main4)
    main4.append(main2);
    main4.append(atcart)
    main2.append(main3)
    for(let y=1;y<=rating;y++){
      let main3ch=document.createElement('i')
      main3ch.className="fa-solid fa-star"
      main3ch.style.color="#FFAD33"
      rdiv.append(main3ch)
    }
    main3.style.display="flex"
    main3.style.gap="16px"
    rpara.style.color="rgba(0,0,0,0.5)"
    main3.append(rdiv)
    main3.append(rpara)
  }
  else if(m>0){
    let tr=0
    for(let x in arr){
      console.log(x)
      if(arr[x]==products[i]["id"]){
        tr=1
        break;
      }
    }
    if(tr==1){
      continue;
    }
    arr.push(products[i]["id"])
    let main = document.createElement("div");
    main.className = "swiper-slide";
    let div = document.querySelectorAll(".swiper-wrapper");
    div[m].append(main);
    let img = document.createElement("img");
    let url = products[i]["thumbnail"];
    img.className = "imageslide";
    img.src = url;
    main.append(img);
    let main4=document.createElement("div")
    atcart=document.createElement("i")
    atcart.style.marginTop="40px"
    atcart.style.marginRight="20px"
    atcart.className="fa-solid fa-cart-shopping"
    atcart.style.fontSize="30px"
    atcart.style.color="#DB4444"
    main4.style.display="flex"
    main4.style.gap="16px"
    let main2 = document.createElement("div");
    main2.className = "cardsdata";
    let names = document.createElement("p");
    names.innerText = products[i]["title"];
    let pdiv=document.createElement("div");
    pdiv.style.display="flex"
    pdiv.style.gap="16px"
    let prices = document.createElement("p");
    prices.innerText = products[i]["price"];
    let price=products[i]["price"];
    mrp=price+Math.round(products[i]["discountPercentage"])
    let actprice = document.createElement("p");
    actprice.innerText=mrp
    actprice.style.textDecoration="line-through"
    actprice.style.color="rgba(0,0,0,0.5)"
    prices.style.color="#DB4444"
    let rating=products[i]["rating"]
    let ratingct=getRandomInt(100)
    let rdiv=document.createElement("div");
    rdiv.style.display="flex"
    rdiv.style.gap="4px"
    let rpara=document.createElement("p")
    rpara.innerText="("+ratingct+")"
    let main3=document.createElement("div")
    main3.className="star"
    main2.append(names);
    main2.append(pdiv);
    pdiv.append(prices);
    pdiv.append(actprice)
    main.append(main4)
    main4.append(main2);
    main4.append(atcart)
    main2.append(main3)
    for(let y=1;y<=rating;y++){
      let main3ch=document.createElement('i')
      main3ch.className="fa-solid fa-star"
      main3ch.style.color="#FFAD33"
      rdiv.append(main3ch)
    }
    main3.style.display="flex"
    main3.style.gap="16px"
    rpara.style.color="rgba(0,0,0,0.5)"
    main3.append(rdiv)
    main3.append(rpara)

  
  count++
  if(count==4 && m==0){

  }
  else if (count==4 ){
    break;
  }
}
}
}