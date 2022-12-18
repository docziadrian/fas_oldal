let label = document.getElementById("label");
let BevasarloKocsi = document.getElementById("shopping-cart");

let kosar = JSON.parse(localStorage.getItem("adat")) || [];

let osszesites2 = () => {
    let kosar_ikon = document.getElementById("kosar_mennyiseg");
    kosar_ikon.innerHTML = kosar.map((x) => x.item).reduce((x,y)=>x+y,0);
};

let generateCartItems = ()=>{
    if(kosar.length !== 0){
        return (BevasarloKocsi.innerHTML = kosar.map((x)=>{
            let {id, item} = x;
            let search = targyakAdata.find((y)=>y.id === id) || [];
            return `
            <div class="cart-item festek">
            <img width="100" src=${search.img} alt="" />
            <div class="details">
              <div class="title-price-x">
                  <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price fs-5 fw-b">${search.price} FT / db</p>
                  </h4>
                  
              </div>
              <div class="text-center fs-5">
                  <div id=${id} class="">
                    <i onclick="kivonas(${id})" class="bi bi-dash-lg"></i>
                    ${item} darab
                    <i onclick="hozzaadas(${id})" class="bi bi-plus-lg"></i>
                  </div></div>
              </div>

              
              <h3>${item * search.price} FT</h3>
              <button type="button" onclick="kosarTorles(${id})" class="btn btn-danger">Törlés</button>

            </div>
          </div>
            `;
        }).join(""));
    }else{
        BevasarloKocsi.innerHTML = ``;
        label.innerHTML = 
        `
        <h2 class="text-center ml-5">A kosarad üres.</h2>
        <a href="/weboldalak/festekek.html"> <button type="button" class="btn btn-primary">Vásárolok</button> </a>
        `;
        
    }
};



let hozzaadas = (id) => {
    let kivalasztottTargy = id;
    let search = kosar.find((x) => x.id === kivalasztottTargy.id);
  
    if (search === undefined) {
      kosar.push({
        id: kivalasztottTargy.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    generateCartItems();
    update(kivalasztottTargy.id);
    localStorage.setItem("adat", JSON.stringify(kosar));
  };
  
  let kivonas = (id) => {
    let kivalasztottTargy = id;
    let search = kosar.find((x) => x.id === kivalasztottTargy.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
  
    
    kosar = kosar.filter((x) => x.item !== 0);
    generateCartItems();
    update(kivalasztottTargy.id);
    localStorage.setItem("adat", JSON.stringify(kosar));
  };



let update = (id) => {
    let search = kosar.find((x) => x.id === id);
    osszesites2();
    TotalAmount();
  };


let kosarTorles = (id) => {
    let kivalasztottTargy = id;
    kosar = kosar.filter((x) => x.id !== kivalasztottTargy.id);
    osszesites2();
    generateCartItems();
    TotalAmount();
    localStorage.setItem("adat", JSON.stringify(kosar));
  };

let TotalAmount = () => {
    if (kosar.length !== 0) {
      let osszesen = kosar.map((x) => {
          let { id, item } = x;
          let filterData = targyakAdata.find((x) => x.id === id);
          return filterData.price * item;
        })
        .reduce((x, y) => x + y, 0);
      return (label.innerHTML = `
       <div class="text-center">
          <h3 class="p">Házhozszállítás: 1000FT</h3>
          <h3 class="p">Összesen: ${osszesen}</h3>
          <br>
              <div class="text-center">
              <h5><input type="checkbox"> Elfogadom az <span>ászf </span>feltételeket</h5>
              <h5><input id="garancia" type="checkbox"> +1 év garanciát kérek (30.000FT)</h5>
              </div>
        </div>

        <div class="text-center">
            <button id="tovabb" class="btn btn-success">Tovább a rendeléshez</button>
        </div>
        <br>

        
      `);
    } else return;
  };
  
  TotalAmount();

  let clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
  };





generateCartItems();
osszesites2();