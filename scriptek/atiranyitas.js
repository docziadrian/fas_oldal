let weboldalak = {
    "falover200": "/secret_pages/$9kKloI2Ajf1000$.html",
    "kandurbandur": "/secret_pages/$23CFOOl0fkm$.html",
    "igazsaghozo": "/secret_pages/$23CFOOl0fff$.html",
    "felhaborodott": "/secret_pages/$23CFOOl0ddd$.html"
};

document.getElementById("falover200").onclick = ()=>{
    window.location = weboldalak["falover200"];
}
document.getElementById("kandurbandur").onclick = ()=>{
    window.location = weboldalak["kandurbandur"];
}
document.getElementById("igazsaghozo").onclick = ()=>{
    window.location = weboldalak["igazsaghozo"];
}
document.getElementById("felhaborodott").onclick = ()=>{
    window.location = weboldalak["felhaborodott"];
}


function vissza_blog() {
    window.location = "/weboldalak/blog.html";
}

