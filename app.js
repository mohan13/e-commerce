const open = document.querySelector(".open")
const list = document.querySelector('.nav-list')
document.querySelector(".close").onclick = function(){
    list.style.width ="0";
    list.style.left="-100%";
}; 
open.onclick = function(){
    list.style.width ="100vw";
    list.style.left="0";
};

const search = document.querySelector(".search")
search.onclick = function(){
    document.querySelector('.down-search').classList.toggle("active");
};
