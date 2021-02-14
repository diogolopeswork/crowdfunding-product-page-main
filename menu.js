// const hamburger = document.getElementById('hamburger');
// const nav = document.getElementById('nav');
// const chamburger = document.getElementById('c-hamburger')

// hamburger.addEventListener('click', () => {
//     nav.classList.add('active');
// })

// chamburger.addEventListener('click', () => {
//     nav.classList.remove('active')
// })

$(function() {
    $(document).on('click', '#hamburger', function(e) {
        $('#hamburger').hide();
        $('#c-hamburger').show();
        $('#nav').addClass('active');
        $('active').show();
    });

    $(document).on('click', '#c-hamburger', function(e) {
        $('#hamburger').show();
        $('#c-hamburger').hide();
        $('#nav').removeClass('active');
        $('active').hide();
    })
})

