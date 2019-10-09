$(document).ready(function(){

    $('.inputs-form').submit(function(event){

        event.preventDefault();
// inputs validation //
        if ($('.inputs-form__name').val().length < 1 || $('.inputs-form__mail').val().length < 1 ) { 
			$('#popup-2').fadeIn();
		} else {
// ajax-form //
            $.ajax({
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
            })
            .fail (function(result){
                $('#popup-1').fadeIn();
            });
        }
    });
});

//===popup1close===//
// click on OK button//
$('.inputs-popup__content__hide').click(function(){ 
    $('#popup-1').fadeOut();
});

// click anywhere around popup//
$(document).mouseup(function (e) {  
	var popup = $('.inputs-popup__content');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){ 
		$('#popup-1').fadeOut();
	}
});

//===popup2close===//
// click on OK button//
$('.inputs-popup__content__hide').click(function(){ 
    $('#popup-2').fadeOut();
});

// click anywhere around popup//
$(document).mouseup(function (e) {  
	var popup = $('.inputs-popup__content');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){ 
		$('#popup-2').fadeOut();
	}
});