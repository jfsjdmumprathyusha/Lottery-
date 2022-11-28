function random() {
    
    var Winner=Math.floor(Math.random()*3+1);
    document.getElementById('Lottery').innerHTML = Winner;
    let img = document.createElement("img");

    
    switch (Winner) {
        case 1:
            img.src="Images/3.jfif";
            document.body.appendChild(img);
            break;
        case 2:
            img.src="Images/2.jfif";
            document.body.appendChild(img);
            break;
        case 3:
        img.src="Images/4.jfif";
        document.body.appendChild(img);
        break;
    }

}
function reset(){
    window.location.href = "index.html";
}