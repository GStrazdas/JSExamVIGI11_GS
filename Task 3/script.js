/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

async function getList(link) {
    try {
        const response = await fetch(link);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

document.getElementById("btn").addEventListener("click", async () => {
    const data = await getList(ENDPOINT);
    showList(data);
});

function showList(data) {
    if(document.getElementById("message"))
        document.getElementById("message").remove();
    if(!document.getElementById("result")) {
        const output = document.getElementById("output");
        const result = document.createElement("div");
        result.id = "result";
        output.append(result);
        data.forEach(element => {
            const card = createCard(result);
            createAvatar(element.avatar_url, card);
            createLogin(element.login, card);
            createUrl(element.avatar_url, card);
        });
    }
}

function createCard(parent) {
    const card = document.createElement("div");
    card.style.border = "1px solid grey";
    card.style.borderRadius = "1rem";
    card.style.padding = "1rem";
    card.style.width = "500px";
    card.style.margin = "0 auto 2rem";
    parent.append(card);
    return card
}

function createAvatar(url, parent) {
    const avatar = document.createElement("img");
    avatar.src = url;
    avatar.style.width = "100px";
    avatar.style.borderRadius = "50%";
    parent.append(avatar);
}

function createLogin(loginName, parent) {
    const login = document.createElement("h1");
    login.style.color = "black";
    login.style.marginBottom = "2rem";
    login.textContent = loginName;
    parent.append(login);
}

function createUrl(text, parent) {
    const urlLegend = document.createElement("h3")
    const avatar_url = document.createElement("p");
    urlLegend.textContent = "Avatar url:";
    avatar_url.textContent = text;
    avatar_url.style.paddingLeft = "2rem";
    avatar_url.style.marginBottom = "1rem";
    parent.append(urlLegend);
    parent.append(avatar_url);
}