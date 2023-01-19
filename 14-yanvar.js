const yosh = +prompt("yosh chegarasni krting");

if (0 < yosh && yosh <= 4) {
    document.getElementById("xato").style.display = 'inline-block'
    console.log("biz sizga xechqanday kino taklif eta olmaymiz");
    document.getElementById("matn").innerHTML = "biz sizga xechqanday kino taklif eta olmaymiz";
} else if (5 <= yosh && yosh <= 15) {
    document.getElementById("box1").style.display = 'inline-block'
    
} else if (15 <= yosh && yosh <= 20) {
    document.getElementById("box2").style.display = 'inline-block'
    
}else if (21 <= yosh ) {
    document.getElementById("box3").style.display = 'inline-block'
    
}else{
    console.log("error");
    alert("error")
}
 
