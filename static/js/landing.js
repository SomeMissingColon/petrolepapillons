window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
}
const left = document.getElementById("left");
const slider = document.getElementById("button-slider")

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
   
    left.style.width = `${p}%`;
    if (p>99){
        const homepage = window.location.href.split('/').slice(0,-2).join('/')
        console.log(homepage);
        window.location.replace(homepage);
    }
}
document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0])