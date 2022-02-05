const open = document.querySelector(".open")
open.onclick = function(){
    document.querySelector('.nav').style.display="flex";
    document.querySelector('.nav').style.width ="100vw";
};

document.querySelector(".close").onclick = function(){
    document.querySelector('.nav').style.display="none";
    document.querySelector('.nav').style.width ="0";
}; 

const search = document.querySelector(".search")
search.onclick = function(){
    document.querySelector('.down-search').classList.toggle("active");
};
