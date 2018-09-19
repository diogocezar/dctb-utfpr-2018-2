$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        success: function (data) {
            config = data.configs;

            $('#about').append(aboutContent(config));
            debugger;

        },
    });

});


function aboutContent(config) {
    var content;
    content += '<h1>' + config.title + '</h1>';
    content += '<h2>' + config.subTitle + '</h2>';
    content += '<p>' + config.email + '</p>';
    content += '<p>' + config.phone + '</p>';
    content += '<p>' + config.email + '</p>';
    config.description.forEach(d => {
        $.each(d, function (key, value) {
            content += '<'+key+'>'+value+'</'+key+'>';
        });
    });
    return content;
}