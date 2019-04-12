$(function(){

    var win = true;
    var maze = $("#maze")

    $("#start").click(function () {

        // $("#boundary1").prepend($("<div style='color:white; font-size: 9px;text-align: center;'  > You Loose!!!</div>"))
        $(".boundary",maze).css({'background':'#eeeeee'});
        $(".boundary.example")
            .text("")
            .css({"text-align":"center","color":"white","background":"#eeeeee"})

        bindMouOver()
        getEndclick()

    })

    function getEndclick(myTimer){


        $("#end").click(function () {

            unbindMouOver()
            if(win==true){

                $(".boundary",maze).css({'background':'#eeeeee'});
                $(".boundary.example")
                    .text(" You Win!!")
                    .css({"text-align":"center","color":"white","background":"blue"})


            }else{

                $(".boundary",maze).css({'background':'#eeeeee'});
                $(".boundary.example")
                    .text(" You Loose")
                    .css({"text-align":"center","color":"white","background":"red"})
            }
        })

    }

    function bindMouOver(){

        $(".boundary").bind('mouseenter',function (event) {window.open("http://foo.com/bar.html", "My Foo Window", "width=900,height=600,scrollbars=1");
            win = false;
            $(".boundary",maze).css({'background':'crimson'});
            $(".boundary.example")
                .text("You Loose!!")
                .css({"text-align":"center","color":"white","background":"red"})
            event.preventDefault()
        })
    }

    function unbindMouOver(){

        $(".boundary").unbind('mouseenter',function (event) {window.open("http://foo.com/bar.html", "My Foo Window", "width=900,height=600,scrollbars=1");
            win = false;
            $(".boundary",maze).css({'background':'crimson'});
            $(".boundary.example")
                .text("You Loose!!")
                .css({"text-align":"center","color":"white","background":"red"})
            event.preventDefault()
        })
    }
})