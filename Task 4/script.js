/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const logoURL = "https://gist.githubusercontent.com/shcyiza/71c64a33f3880e58980003c4c794db38/raw/febb04707f6ccc9ae3a445e147c5754e30f743fe/car_brands.json";

async function getData(link) {
    const data = fetch(link)
        .then((result) => result.json())
        .catch((err) => console.log(err));
    return data;
}

addEventListener("DOMContentLoaded", async () =>{
    const data = await getData(ENDPOINT);
    const logo = await getData(logoURL);
    showResult(data, logo);
});

function showResult(data, logo) {
    const output = document.getElementById("output");
    data.forEach(brand => {
        const card = createCard()
        output.append(card);
        if(logo.filter(el => el.name === brand.brand).length > 0) {
            const avatar = createAvatar();
            avatar.src = logo.filter(el => el.name === brand.brand)[0].logo;
            card.append(avatar);
        } else {
            const brandEl = createNameHeader();
            brandEl.textContent = brand.brand;
            card.append(brandEl);
        }
        brand.models.forEach(model => {
            const modelEl = document.createElement("p");
            modelEl.textContent = model;
            card.append(modelEl);
        });
    });
}

function createCard() {
    const card = document.createElement("div");
    card.style.border = "1px solid grey";
    card.style.borderRadius = "1rem";
    card.style.padding = "1rem";
    card.style.width = "500px";
    card.style.margin = "0 auto 2rem";
    return card;
}

function createAvatar() {
    const avatar = document.createElement("img");
    avatar.style.display = "block";
    avatar.style.width = "100px";
    avatar.style.marginBottom = "1rem";
    return avatar;
}

function createNameHeader() {
    const brand = document.createElement("h1");
    brand.style.marginTop = "2rem";
    brand.style.marginBottom = "1rem";
    return brand;
}