$(function() {
    $('#video-button').click(function() {
        let about = $('.modal')

        if (about.css('display') === 'none') {
            about.css('display', 'block')
        } else {
            about.css('display', 'none')
        }
    })
    $('.modal-close').click(function() {
        $('.modal').css('display', 'none')
    })

    document.getElementById('myButton').onclick = function() {
        location.href =
            'file:///C:/Users/Admin/Desktop/%D0%B3%D0%B5%D0%BD%D1%88%D0%B8%D0%BD/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%202/ayaka.html#works'
    }

    $('#welcome-button').click(function() {
        $('.welcome background-image').remove()

        function changeColor() {
            $('h2').css('color', 'red')
        }
    })
})