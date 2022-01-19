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
            const avatar = document.createElement("img");
            const login = document.createElement("h1");
            const avatar_url = document.createElement("h3");
            avatar.src = element.avatar_url;
            avatar.style.width = "100px";
            avatar.style.borderRadius = "50%";
            login.style.color = "black";
            login.textContent = element.login
            avatar_url.textContent = element.avatar_url;
            avatar_url.style.marginBottom = "3rem";
            result.append(avatar);
            result.append(login);
            result.append(avatar_url);
        });
    }
}
