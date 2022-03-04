/*const element1 = document.querySelector(".l1");
let ele = $( ".target" ).load( "intro1.html" );
element1.addEventListener("click", () => {
    intro();
});
function intro(){
    document.getElementById('target').innerHTML = ele;
} 
*/


onload = () => {
    let menuar = [];
    let mainlist = document.getElementById("menu");
    let title = [{ "title": "Introduction", "link": "./info/intro" }, { "title": "What you should already know", "link": "./info/why" }, { "title": "JavaScript and Java", "link": "./info/js&java" }, { "title": "Hello World", "link": "./info/hw" }, { "title": "Variables", "link": "./info/var" }, { "title": "Variables Declaration", "link": "./info/vard" }, { "title": "Variables Scope", "link": "./info/varscope" },];

    for (let i = 0; i < title.length; i++) {
        let le = document.createElement("li");
        le.innerHTML = title[i].title;

        le.onclick = () => {
            for (let j = 0; j < title.length; j++)
                menuar[j].removeAttribute("style");

            le.setAttribute("style", "background-color:rgb(74, 214, 137)");
            let ajx = new XMLHttpRequest();
            ajx.onreadystatechange=()=>{
                if(ajx.readyState==4 && ajx.status==200){
                    document.getElementById("target").innerHTML = ajx.responseText;            
                }
            }
            ajx.open("GET", title[i].link, true);
            ajx.send();
            
        }

        menuar[i] = le;
        mainlist.appendChild(menuar[i]);
    }
    menuar[0].click();
}