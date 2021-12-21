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
    $('#boton1').click(()=>{  //avanzar a link2
        $('.nav1').hide();
        $('.nav2').show();
        $('.nav2').css('overflow','visible');
        $('#boton3').show();
        $('#boton2').show();
    });
    $('#boton3').click(()=>{ //retroceder a link1
        $('.nav2').hide();
        $('.nav1').show();
        $('#boton3').hide();
        $('#boton1').show();
    });
    $('#boton2').click(()=>{  // avanzar a link3
        $('.nav2').hide();
        $('.nav3').css('overflow','visible');
        $('.nav3').show();
        $('#boton4').show();
        $('#boton5').show();
    });
    $('#boton5').click(()=>{ //retroceder a link2
        $('.nav3').hide();
        $('#boton3').hide();
        $('#boton1').show();
    });



    $('#boton4').click(()=>{  // avanzar a link4
        $('.nav3').remove();
        $('.nav4').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton6').show();
    });
    $('#boton6').click(()=>{ // avanzar a link5
        $('.nav4').remove();
        $('.nav5').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton8').show();
    });
    $('#boton8').click(()=>{ // avanzar a link6
        $('.nav5').remove();
        $('.nav6').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton10').show();
    });
    $('#boton10').click(()=>{ // avanzar a link7
        $('.nav6').remove();
        $('.nav7').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('#boton12').show();
    });
    $('#boton12').click(()=>{ // avanzar a link8
        $('.nav7').remove();
        $('.nav8').css({overflow:'visible',opacity:'1',transition:'all 3s'});
        $('.flecha-atras').hide();
    });

}



botones();
agrandar1();