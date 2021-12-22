function agrandar1(){  //agrandar item 1
    $('.nav1').css({overflow:'visible',opacity:'1'});
    $('.items').nextAll().css({overflow:'hidden',opacity:'0.7'});
}


const agrandar2=()=>{  //agrandar item2
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'visible',opacity:'1'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
};
const agrandar3=()=>{  // agrandar item3
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'visible',opacity:'1'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
}
const agrandar4=()=>{ //agrandar item4
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'visible',opacity:'1'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
}
const agrandar5=()=>{  // agrandar item5
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'visible',opacity:'1'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
}
const agrandar6=()=>{  
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'visible',opacity:'1'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
}
const agrandar7=()=>{
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'visible',opacity:'1'});
    $('.nav8').css({overflow:'hidden',opacity:'0.7'});
}
const agrandar8=()=>{
    $('.nav1').css({overflow:'hidden',opacity:'0.7'});
    $('.nav2').css({overflow:'hidden',opacity:'0.7'});
    $('.nav3').css({overflow:'hidden',opacity:'0.7'});
    $('.nav4').css({overflow:'hidden',opacity:'0.7'});
    $('.nav5').css({overflow:'hidden',opacity:'0.7'});
    $('.nav6').css({overflow:'hidden',opacity:'0.7'});
    $('.nav7').css({overflow:'hidden',opacity:'0.7'});
    $('.nav8').css({overflow:'visible',opacity:'1'});
}

function botones(){ // pasar de links con flechas
    $('#boton3').hide();
    $('.flecha-adelante').hide();
    $('#boton1').click(()=>{  //avanzar a seccion1
        $('.nav1').hide();
        $('.nav2').show();
        $('.nav2').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('.flecha-atras').hide();
        $('#boton3').show();
        $('#boton1').hide();
        $('#boton2').show();
    });
    $('#boton3').click(()=>{ //retroceder a inicio
        $('.nav2').hide();
        $('.nav1').show();
        $('#boton1').show();
        $('#boton3').hide();
    });
    $('#boton2').click(()=>{  // avanzar a seccion2
        $('.nav2').hide();
        $('.nav3').show();
        $('.nav3').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton4').show();
        $('#boton5').show();
    });
    $('#boton5').click(()=>{ //retroceder a seccion1
        $('.nav3').hide();
        $('.nav2').show();
        $('#boton5').hide();
        $('#boton4').hide();
        $('#boton2').show();
        $('#boton3').show();

    });
    $('#boton4').click(()=>{  // avanzar a seccion3
        $('.nav3').hide();
        $('.nav4').show();
        $('.nav4').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton6').show();
        $('#boton7').show();
    });
    $('#boton7').click(()=>{ //retroceder a seccion2
        $('.nav4').hide();
        $('.nav3').show();
        $('#boton7').hide();
        $('#boton6').hide();
        $('#boton4').show();
    });

    $('#boton6').click(()=>{ // avanzar a seccion4
        $('.nav4').hide();
        $('.nav5').show();
        $('.nav5').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton8').show();
        $('#boton9').show();
    });
    $('#boton9').click(()=>{ //retroceder a seccion3
        $('.nav5').hide();
        $('.nav4').show();
        $('#boton9').hide();
        $('#boton8').hide();
        $('#boton6').show();
    });

    $('#boton8').click(()=>{ // avanzar a seccion5
        $('.nav5').hide();
        $('.nav6').show();
        $('.nav6').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton10').show();
        $('#boton11').show();
    
    $('#boton11').click(()=>{ //retroceder a seccion4
        $('.nav6').hide();
        $('.nav5').show();
        $('#boton11').hide();
        $('#boton10').hide();
        $('#boton8').show();
    });
    });
    $('#boton10').click(()=>{ // avanzar a seccion6
        $('.nav6').hide();
        $('.nav7').show();
        $('.nav7').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton12').show();
        $('#boton13').show();
    });
    $('#boton13').click(()=>{ //retroceder a seccion5
        $('.nav7').hide();
        $('.nav6').show();
        $('#boton13').hide();
        $('#boton12').hide();
        $('#boton10').show();
    });
    $('#boton12').click(()=>{ // avanzar a seccion7
        $('.nav7').hide();
        $('.nav8').show();
        $('.nav8').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('.flecha-atras').hide();
        $('#boton14').show();
    });
    $('#boton14').click(()=>{ //retroceder a seccion6
        $('.nav8').hide();
        $('.nav7').show();
        $('#boton14').hide();
        $('#boton12').show();
    });
}
//cargar funciones al comenzar
botones();
agrandar1();