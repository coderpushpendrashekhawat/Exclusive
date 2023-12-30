let cartid = JSON.parse(localStorage.getItem("wishdata"))
const fetchData = () => {
  fetch("https://buyby-backend.onrender.com/All-Products")
    .then((res) => res.json())
    .then((data) => displayData(data));
};
console.log(location.href)

fetchData();
const displayData = (data) => {

  for (x in cartid) {

    let cotnetbap = document.querySelector(".cartcontents");
    let contnet = document.createElement("div");
    contnet.className = "cartcontent2";
    let imgname = document.createElement("div");
    imgname.className = "imgname";
    imgname.style.display = "flex";
    imgname.style.gap = "16px";
    let namec = document.createElement("p");
    let pricec = document.createElement("p");
    pricec.className = "pricec";
    let qtyc = document.createElement("input");
    qtyc.type = "number";
    let subc = document.createElement("p");
    let btn = document.createElement("button");
    btn.className = "dltbtn";
    subc.className = "subc";
    btn.innerText = "X";
    let rid = cartid[x];
    btn.addEventListener("click", (evt) => {
        contnet.remove();
        let t=0
      for(let z in cartid){
        if(cartid[z]==data[rid]["id"]-1){
          t=z
          break
        }
      }
      cartid.splice(t,1)
        localStorage.setItem("wishdata",JSON.stringify(cartid));
        if(cartid.length==0){
          localStorage.removeItem("wishdata")
        }
    });
    let div2=document.createElement("div")
    div2.append(btn)
    imgname.append(div2, namec);
    cotnetbap.append(contnet);
    let rname = data[rid]["title"];
    let rimg = data[rid]["image"];
    div2.style.backgroundImage = "url("+rimg+")";
    div2.style.backgroundSize="cover"
    div2.style.border="none"
    div2.style.height="100px"
    div2.style.width="100px"    
    namec.innerHTML = rname;
    let rprice = data[rid]["price"];
    pricec.innerHTML = rprice;
    let dlt=document.createElement("button")
    dlt.className="delete"
    dlt.innerText="Add to cart"
    contnet.append(imgname, pricec,dlt);
    dlt.addEventListener("click",()=>{
        atc(rid,data,"cartdata")
        contnet.remove();
        let t=0
      for(let z in cartid){
        if(cartid[z]==data[rid]["id"]-1){
          t=z
          break
        }
      }
      cartid.splice(t,1)
        localStorage.setItem("wishdata",JSON.stringify(cartid));
        if(cartid.length==0){
          localStorage.removeItem("wishdata")
        }

    })
  }
};
setTimeout(()=>{
    let cotnetbap2 = document.querySelector(".cartcontents");
    let btn=document.createElement("button")
  btn.className="proceed"
  btn.innerText="Go to Cart"
  cotnetbap2.append(btn)
  btn.addEventListener("click",()=>{
    location.href="cart.html"
  })
},1500)

function atc(y,maindata,cartdata) {
    let t=0
    let cartdat=JSON.parse(localStorage.getItem(cartdata))
      for(i in cartdat){
        if(cartdat[i]==y){
          console.log("yes")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already added to cart!",
          });
          t=1
          break;
        }
      }
      if(t==0){
        
       if(cartdat==null){
        cartdat=[]
        let item = maindata[y - 1]["id"];
        cartdat.push(item)
      }
      else{ 
        let item = maindata[y - 1]["id"];
        cartdat.push(item)
      }
      localStorage.setItem(cartdata, JSON.stringify(cartdat));
        
      
      
      Swal.fire({
        title: "Done!",
        text: "Item added to cart",
        icon: "success",
      });
    }
  }

