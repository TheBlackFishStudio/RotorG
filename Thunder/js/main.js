// JS
$(document).ready(function(){
    $(window).scroll(function() {
        if ($("#menu").offset().top > 10) {
            $("#menu").addClass("header2");

        } else {
            $("#menu").removeClass("header2");
            
			
        }
    });

    // -----------------------------------------------

    if ($(window).width() > 640) {  
        $('.anima').smoove({offset:'20%'});
    }

    // -----------------------------------------------

    document.getElementById("js-vid01").style.display = "none";
    document.getElementById("js-vid02").style.display = "none";
    document.getElementById("js-vid03").style.display = "none";
    document.getElementById("js-vid04").style.display = "none";
    document.getElementById("js-vid05").style.display = "none";
    

    $("#js-btnVid01").click(function(ev){
        $("#js-vid01").show();
    });
    
    $("#js-btnClose01").click(function(){
        $("#js-vid01").hide();
        $('#vidSlider01').attr('src', $('#vidSlider01').attr('src'));

    });

    $("#js-btnVid02").click(function(){
        $("#js-vid02").show();
    });
    
    $("#js-btnClose02").click(function(){
        $("#js-vid02").hide();
         $('#vidSlider02').attr('src', $('#vidSlider02').attr('src'));
    });

    $("#js-btnVid03").click(function(){
        $("#js-vid03").show();
    });
    
    $("#js-btnClose03").click(function(){
        $("#js-vid03").hide();
         $('#vidSlider03').attr('src', $('#vidSlider03').attr('src'));
    });

    $("#js-btnVid04").click(function(){
        $("#js-vid04").show();
    });
    
    $("#js-btnClose04").click(function(){
        $("#js-vid04").hide();
         $('#vidSlider04').attr('src', $('#vidSlider04').attr('src'));
    });

    $("#js-btnVid05").click(function(){
        $("#js-vid05").show();
    });
    
    $("#js-btnClose05").click(function(){
        $("#js-vid05").hide();
         $('#vidSlider05').attr('src', $('#vidSlider05').attr('src'));
    });

    // -----------------------------------------------


    $("#js-verMas").click(function(){
        $("#js-segunda").fadeIn(); 
        $("#js-verMas").hide();
    });
    
    $("#js-btnMenos").click(function(){
        $("#js-segunda").fadeOut();
        $("#js-verMas").show();
    });

     // -----------------------------------------------
    $("#js-btnHamburguer").click(function(){
        console.log('Hola consola');
        $("#js-menu1").toggle(); 
    });
    
    $(".js-nv01").click(function(){
        $("#js-menu1").css("display","none");      
    });

    
    // -----------------------------------------------


   function validarFormulario(){

        var txtNombre = document.getElementById('nombre').value;
        var txtApellido = document.getElementById('apellido').value;
        var txtAsunto = document.getElementById('asunto').value;
        var txtMensaje = document.getElementById('Mensaje').value;
        var cmbSelector = document.getElementById('selector').selectedIndex;
        var chkEstado = document.getElementById('checkBox');
        var rbtEstado = document.getElementsByName('radioButton');

        var banderaRBTN = false;

        //Test campo obligatorio
        if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

        //Test campo obligatorio
        if(txtApellido == null || txtApellido.length == 0 || /^\s+$/.test(txtApellido)){
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

         //Test campo obligatorio
        if(txtASunto == null || txtASunto.length == 0 || /^\s+$/.test(txtASunto)){
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

         //Test campo obligatorio
        if(txtMensaje == null || txtMensaje.length == 0 || /^\s+$/.test(txtMensaje)){
            alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
            return false;
        }

        return true;
    }
	
	$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



    
});


/*  

     $("#js-gale").mouseover(function(){
        $("#js-show").css("display", "none");
        $("#js-hide").css("display", "block");
    });
    $("#js-gale").mouseout(function(){
        $("#js-show").css("display", "block");
        $("#js-hide").css("display", "none");
    });

    $("#js-gale1").mouseover(function(){
        $("#js-show1").css("display", "none");
        $("#js-hide1").css("display", "block");
    });
    $("#js-gale1").mouseout(function(){
        $("#js-show1").css("display", "block");
        $("#js-hide1").css("display", "none");
    });

    $("#js-gale2").mouseover(function(){
        $("#js-show2").css("display", "none");
        $("#js-hide2").css("display", "block");
    });
    $("#js-gale2").mouseout(function(){
        $("#js-show2").css("display", "block");
        $("#js-hide2").css("display", "none");
    });


    ----_-------_----_--_--__--_-____------
    
    $("#js-gale").mouseout(function(){
         $("#js-show").css("display", "block");
        $("#js-hide").css("display", "none");
    });

    $("#js-Desplegable").click(function(){      
        $("#js-desplegablebar").slideToggle("slideDown");

    });
    $("#js-burguer").click(function(){      
        $("#js-meDesplegue").slideToggle("slideDown");
        $("#js-meDesplegue").style.height = "2000";
    });

    $("#js-legales").click(function(){      
       $("#js-textLega").show();
       $("#js-body").addClass('js-bodyOver');
    });


    $("#js-closedBtn").click(function(){      
       $("#js-textLega").hide();
       $("#js-body").removeClass('js-bodyOver');
    });






    if ($(window).width() <= 768) {
        $('ul li a[href^="#"], #nav-open, .js-btnicon').click(function(){
            $(".varMenu").toggle();
        });     
           
    }else{
         $(".varMenu").css("display", "block");
        
    }    

    $('ul li a[href^="#"], #nav-open').click(function(){
        $(".varMenu").toggle();
    });     

    $(".btns01").click(function(){
        $("btns2").removeClass("js-btnSelec");
    });

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 900);
    });
 
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(900);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

    $('ul li a[href^="#"], #logoHO').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

     $(".js-BtnEnv").click(function(){
         $("#js-gracias").show();
     });

     $("#js-btnform").click(function(){
         $("#js-gracias").hide();
     });


   // Escuchar cambios de orientación
    // window.addEventListener("orientationchange", function() {
    // Hacer algo cuando cambia la orientación
    // if(event.orientationchange == 'portrait'){
    //     $("#js-landscape").hide();
    //     alert(window.orientationchange);
    // }else if(event.orientationchange == 'landscape') {}
    //     $("#js-landscape").show();
    //     alert(window.orientationchange);
    // }, false);
    // $( window ).orientationchange();


    
    
});*/
