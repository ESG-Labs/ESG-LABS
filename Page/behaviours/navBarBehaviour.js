console.log("js loaded");
$(document).ready(function(){
    console.log("JQ loaded");
});
// Show/Hide navigation bar background
$(window).scroll(function(){
    
    var scrollPos = $(document).scrollTop();
    var oneFourth = ($("body").height() / 4) - 100;
    var secondFourth = oneFourth * 2;
    var thirdFourth = oneFourth * 4;

    /*console.log(height2);  600,  full height: 870*/

    console.log(
        /*'Current Position: ' + scrollPos + 
        ' wanted position: '/* + navBarThirdState*/
        scrollPos + " " + oneFourth + " " + secondFourth + " " + thirdFourth
        );
    
    if(scrollPos > oneFourth){//1030 oneThird
        $(".navBar").removeClass("onBlueBG").addClass("onWhiteBG")
        $(".menuItem").removeClass("menuItemOnBlue").addClass("menuItemOnWhite");
        //onBlueBG
    }else if(scrollPos < secondFourth){//2100 secondThird
        $(".navBar").removeClass("onWhiteBG").addClass("onBlueBG")
        $(".menuItem").removeClass("menuItemOnWhite").addClass("menuItemOnBlue");
    }
    if(scrollPos > secondFourth){//2100 navBarThirdState
        $(".navBar").removeClass("onWhiteBG").addClass("onBlueBG")
        $(".menuItem").removeClass("menuItemOnWhite").addClass("menuItemOnBlue");
    }
       /* 
    if(scrollPos > oneThird){//1030
        $("ul").css("background-color", "rgba(224, 142, 141, 0.95)");
        //onBlueBG
    }else if(scrollPos < secondThird){//2147
        $("ul").css("background-color", "transparent");
        $("ul").css("text-shadow", "0px 1px 5px #191919");
        $("ul").css("color","white");
    }

    if(scrollPos > navBarThirdState){//3350
        $("ul").css("background-color", "#ffffff");
        $("ul").css("color","black");
    }*/

});