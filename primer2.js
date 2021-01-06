$(function () {
    let exp = "";
    $('[data-number]').on('click', function() {
        exp = $(this).data('number');
        insrt(exp);
        
    });
    $('[data-equal]').on('click', function() {
        if ($('.current__value').val()) {
            $('.answer').text(eval($('.current__value').val()));
            // console.log(eval());
        }
        
    });
    $('[data-del]').on('click', function () {
        if ($(this).data('del') == 'c') {
            $('.current__value').val('');
            $('.answer').text('');
        } else if (($(this).data('del') == 'del')) {
            let text = $('.current__value').val();
            $('.current__value').val(text.substring(0,text.length - 1));
        }
    });
    $('[data-sqr]').on('click', function() {
        if ($(this).data('sqr') == 'x2') {
            $('.current__value').val(Math.pow(parseInt($('.current__value').val()),2));
        }
        else if ($(this).data('sqr') == 'sqr') {
            $('.current__value').val(Math.sqrt(parseInt($('.current__value').val())));
        }
    });
    $('[data-four]').on('click', function() {
        $('.current__value').val(1 / parseInt($('.current__value').val()));
    });
    $('[data-damir]').on('click', function() {
        $('.answer').text('Дамир иди коди, перестань жрать говно!');
    });
    function insrt(exp) {
        $('.current__value').val($('.current__value').val() + exp)
    }

    
    
});