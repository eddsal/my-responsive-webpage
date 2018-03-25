window.onload = function () {
    filterSelection('all');

    document.querySelector('.menu-button').onclick = function () {
        document.querySelector('nav ul').classList.toggle("show");
    }

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("pano");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
        }
    }

    function addClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function removeClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    var btnContainer = document.getElementById("btnSec");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    document.querySelector(".all").onclick = function () {
        filterSelection("all")
    }
    document.querySelector(".pana").onclick = function () {
        filterSelection("pana")
    }
    document.querySelector(".portrail").onclick = function () {
        filterSelection("portrail")
    }

    document.querySelector(".macro").onclick = function () {
        filterSelection("marco")
    }
    document.querySelector(".journal").onclick = function () {
        filterSelection("journal")
    }
    /* btnContainer.onclick = function(f){
         x = document.getElementsByClassName("pano");
             if(btnContainer = 'all'){
                 x.innerHTML=filterSelection('all');
                 
                 if(btnContainer = 'pana'){
                     x.innerHTML=filterSelection('pana')
                
                 }
                 if(btnContainer= 'portrail'){
                     x.innerHTML=filterSelection("portrail")
                 }
             }
         
     }
     */


}