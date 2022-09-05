
var para  = ["My friends and I are crazy. That’s the only thing that keeps us sane",
            "Friendship is not a big thing, it’s a million little things",
            "A snowball in the face is surely the perfect beginning to a lasting friendship",
            "I don’t like to commit myself to heaven and hell – you see, I have friends in both places",
            "Good times and crazy friends make the best memories",
            "Most of us don’t need a psychiatric therapist as much as a friend to be silly with"];
    var i = Math.floor(Math.random() * 6);
    var paragrap = para[i];
    $("p").html(paragrap);
//this is correct way to do this
            $(document).ready(function(){
                $(".btn").click(function(){
                    if($("body").hasClass("body-light")){
                        pressLight();
                    }
                    else{
                        pressdark();
                    }
                });
            });
     /** 
      *  Incorrect way to implement this 
      * $(document).ready(function(){
            if($("body").hasClass("body-light")){
                $(".btn-s").click(function(){ 
                     pressLight();
                     });
                }
                else  {
                    $(".btn-s-dark").click(function(){
                         pressdark();
                         });
                    }
        })  ;    */   
   
                $(".btn-change").click(function(){
                    if($("body").hasClass("body-light")){
                            changeTheme();
                    }
                    else{
                        changeThemeAgain();
                    }
                window.onbeforeunload = function() {
                    if($("body").hasClass("body-dark")){
                         return "After this you will be return to 'Funny Name 😂'";
                    }
                  }
    });
   
    function changeTheme(){
        $("#favicon").attr("href","darkfav.ico");
        $("title").text("Demon Name 😈");
        $("body").removeClass("body-light");    
        $("body").addClass("body-dark");
        $("h1").addClass("h1-dark").text("😈 Demon Name 😈");
        $("h4").addClass("h4-dark").text("Let's find your Demon name");
        $(".answer").addClass("answer-dark").text("Your Demon Name is: ");
        $(".answer").removeClass("answer");
        $("p").addClass("p-dark");
        $(".btn-change").removeClass("btn-dark").addClass("btn-light").text("Funny Name 😂");
        $(".btn-s").text("Let's See 😈").addClass("btn-s-dark").removeClass("btn-s");
       
    }
    function changeThemeAgain(){  
      
        $("#favicon").attr("href","fav.ico");   
        $("title").text("Funny Name 😂");   
        $("body").removeClass("body-dark");    
        $("body").addClass("body-light");
        $("h1").removeClass("h1-dark").text("😂 Funny Name 😂");
        $("h4").removeClass("h4-dark").text("Let's find your funny name");;
        $(".answer-dark").addClass("answer").text("Your funny Name is: ");
        $(".answer-dark").removeClass("answer-dark");
        $("p").removeClass("p-dark");
        $(".btn-change").removeClass("btn-light").addClass("btn-dark").text("Demon Name 😈");
        $(".btn-s-dark").text("Let's See 😂").addClass("btn-s").removeClass("btn-s-dark");
       
    }

   
    function findDemonName(str){
            var output ="";
            for(let i=str.length-1;i>=0;i--){
                    output += str[i];
            }
            return output;
    }

    function findFunnyName(str) {
  
        let alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];//26
        let len = Math.floor(str.length / 2); //2
        let looplength = len;
        for (let i = 0; i <= looplength; i++) {
      
          j = Math.floor(Math.random() * 26);
           str = str.replace(str[len],alfa[j]);
            len++;
        }
      
        return str;
      
      }

      function pressLight(){
      
            var str = $("#demon-id").val();
            let result = findFunnyName(str);
            $("#demon-id").val('');
            $(".answer").html("Your funny Name is: "+ result);
        
      }

      function pressdark(){
        
            var str = $("#demon-id").val();
           let result = findDemonName(str);
           $("#demon-id").val('');
            $(".answer-dark").html("Your Demon Name is: "+ result);           
    
      }