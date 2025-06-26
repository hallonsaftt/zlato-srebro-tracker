
const goldPrice = document.getElementById('zlato-cena');
const goldButton = document.getElementById('zlato-dugme');
//
const silverPrice = document.getElementById('srebro-cena');
const silverButton = document.getElementById('srebro-dugme');



// console.log("Radi");

// APIj
async function dohvatiCenuZlata() {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-1cngqsmcd698rz-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',           
        headers: myHeaders,      
        redirect: 'follow'      
    };

    try {
        const response = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);
        const data = await response.json();
        
        console.log("API podaci:", data);
        return data; 
        
    } catch (error) {
        console.log("Greška:", error);
    }
}

async function dohvatiCenuSrebra() {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-1cngqsmcd698rz-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',           
        headers: myHeaders,      
        redirect: 'follow'      
    };

    try {
        const response = await fetch("https://www.goldapi.io/api/XAG/USD", requestOptions);
        const data = await response.json();
        
        console.log("API podaci:", data);
        return data; 
        
    } catch (error) {
        console.log("Greška:", error);
    }
}


dohvatiCenuZlata();
dohvatiCenuSrebra();


async function cenaZlata() {

    try {
        const trenutniPodaci = await dohvatiCenuZlata();
        const novaCena = trenutniPodaci.price; 
        const staraCena = 2465; 
        const valuta = trenutniPodaci.currency;
        
      
        if(novaCena > staraCena){
        goldPrice.innerHTML = `<b class=".bg-dark">Trenutna cena:</b> <span class="badge rounded-pill text-bg-success">${novaCena} ${valuta}</span><br><br>
                               <b class=".bg-dark">Stara cena:</b> <span class="badge rounded-pill text-bg-secondary">${staraCena} ${valuta}</span>`;
        
        goldButton.innerHTML = `Kupi <span class="badge rounded-pill text-bg-success">Dobar trenutak</span>`
        } else {
        goldPrice.innerHTML = `<b class=".bg-dark">Trenutna cena:</b> <span class="badge rounded-pill text-bg-success">${novaCena} ${valuta}</span><br><br>
                               <b class=".bg-dark">Stara cena:</b> <span class="badge rounded-pill text-bg-secondary">${staraCena} ${valuta}</span>`;
        goldButton.innerHTML = `Kupi <span class="badge rounded-pill text-bg-danger">Loš trenutak</span>`
        }
    } catch (error) {
        console.log("Problem sa API pozivom:", error);
    }

}

cenaZlata();

//srebro

async function cenaSrebra() {


    try {
        const trenutniPodaci = await dohvatiCenuSrebra();
        const novaCena = trenutniPodaci.price; 
        const staraCena = 2465; 
        const valuta = trenutniPodaci.currency;
        
        
        if(novaCena > staraCena){
        silverPrice.innerHTML = `<b class=".bg-dark">Trenutna cena:</b> <span class="badge rounded-pill text-bg-success">${novaCena} ${valuta}</span><br><br>
                               <b class=".bg-dark">Stara cena:</b> <span class="badge rounded-pill text-bg-secondary">${staraCena} ${valuta}</span>`;
        
        silverButton.innerHTML = `Kupi <span class="badge rounded-pill text-bg-success">Dobar trenutak</span>`
        } else {
        silverPrice.innerHTML = `<b class=".bg-dark">Trenutna cena:</b> <span class="badge rounded-pill text-bg-success">${novaCena} ${valuta}</span><br><br>
                               <b class=".bg-dark">Stara cena:</b> <span class="badge rounded-pill text-bg-secondary">${staraCena} ${valuta}</span>`;
        silverButton.innerHTML = `Kupi <span class="badge rounded-pill text-bg-danger">Loš trenutak</span>`
        }
    } catch (error) {
        console.log("Problem sa API pozivom:", error);
    }
}

cenaSrebra();