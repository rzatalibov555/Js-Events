

function red(a){
    a.style.background = "red"
}

function blue(a){
    a.style.background = "blue"
}

function green(a){
    a.style.background = "green"
}

function green_land(){
    document.getElementsByTagName("BODY")[0].style.background = "green"
}

// function c_white(){
//     document.getElementById('demo').style.color = "white"
// }

// function c_purple(){ 
//     document.getElementById('demo').style.color = "purple"
// }



function select_car(){
    let car = document.getElementById('my_select').value
    console.log(car)
    let img = document.getElementById('img')

    img.src = "img/"+car+".png"
}