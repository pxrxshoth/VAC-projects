

function rand(){
    
        const r = Math.floor(Math.random()*100) + 150;
        const g = Math.floor(Math.random()*100) + 150;
        const b = Math.floor(Math.random()*100) + 150;
        const newcolor = `rgb(${r}, ${g}, ${b})`;
        return newcolor;
}

function changecolor()
{
    document.body.style.backgroundColor = rand();
    document.getElementsByClassName('button').style.backgroundColor=rand();
}

setInterval(changecolor,2000);


