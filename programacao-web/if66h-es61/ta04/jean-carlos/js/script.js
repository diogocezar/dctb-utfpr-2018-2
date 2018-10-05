$(document).ready(() =>{
    var content='';
    for(var i = 0; i < 8; i++){
        content+='<div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">' +
        '<div class="card">'+
            '<img class="card-img-top" src="imgs/flavourstone.jpg">'+
            '<div class="card-body">'+
                '<h5 class="card-title">FRIGIDEIRA DO CARALHO</h5>'+
                '<h6 class="card-text">9 fígados</h6>'+
                '<p class="card-text">Universitário, alegre sua vida! Aqui está uma frigideira que pode melhorar essa sua rotina de bosta </p>'+
                '<a href="#" class="btn btn-primary">Sou demente</a>'+
        '</div></div></div>'
    }
    debugger;
    $('#products').append(content);
});