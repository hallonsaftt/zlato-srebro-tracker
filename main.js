
const goldPrice = document.getElementById('zlato-cena');
const goldButton = document.getElementById('zlato-dugme');
//
const silverPrice = document.getElementById('srebro-cena');
const silverButton = document.getElementById('srebro-dugme');



// console.log("Radi");

// APIj
// async function dohvatiCenuZlata() {
//     const myHeaders = new Headers();
//     myHeaders.append("x-access-token", "goldapi-1cngqsmcd698rz-io");
//     myHeaders.append("Content-Type", "application/json");

//     const requestOptions = {
//         method: 'GET',           
//         headers: myHeaders,      
//         redirect: 'follow'      
//     };

//     try {
//         const response = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);
//         const data = await response.json();
        
//         console.log("API podaci:", data);
//         return data; 
        
//     } catch (error) {
//         console.log("Greška:", error);
//     }
// }

// async function dohvatiCenuSrebra() {
//     const myHeaders = new Headers();
//     myHeaders.append("x-access-token", "goldapi-1cngqsmcd698rz-io");
//     myHeaders.append("Content-Type", "application/json");

//     const requestOptions = {
//         method: 'GET',           
//         headers: myHeaders,      
//         redirect: 'follow'      
//     };

//     try {
//         const response = await fetch("https://www.goldapi.io/api/XAG/USD", requestOptions);
//         const data = await response.json();
        
//         console.log("API podaci:", data);
//         return data; 
        
//     } catch (error) {
//         console.log("Greška:", error);
//     }
// }


// dohvatiCenuZlata();
// dohvatiCenuSrebra();


//nova metoda

async function dohvatiCeneMetala() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "sk_0Eeac16a8BE3B6D624f8A0D4E507f39D9A0D315Da4Cf687F");
    
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    try {
        const response = await fetch("https://metals.g.apised.com/v1/latest?symbols=XAU,XAG&base_currency=USD", requestOptions);
        const data = await response.json();

        const zlatoCena = data.data.rates.XAU;    
        const srebroCena = data.data.rates.XAG;   
        const valuta = data.data.base_currency;   
        
        // console.log("Svi podaci:", data);
        // console.log("Zlato: ", zlatoCena, "Srebro", srebroCena, "valuta: ", valuta);
        // return data;

        return {
        zlatoCena: zlatoCena,
        srebroCena: srebroCena,
        valuta: valuta
        };
        
    } catch (error) {
        console.log("Greška:", error);
    }
}

dohvatiCeneMetala();


async function cenaZlata() {

    try {
        const trenutniPodaci = await dohvatiCeneMetala();
        const novaCena = trenutniPodaci.zlatoCena; 
        console.log(trenutniPodaci.zlatoCena)
        const staraCena = 5465; 
        const valuta = trenutniPodaci.valuta;
        
      
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
        const trenutniPodaci = await dohvatiCeneMetala();
        const novaCena = trenutniPodaci.srebroCena; 
        const staraCena = 24.12; 
        const valuta = trenutniPodaci.valuta;
        
        
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