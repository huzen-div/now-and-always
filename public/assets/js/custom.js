$( document ).ready(function() {

  $('.banners').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: 0,
          arrows: false,
        }
        
      },
      
    ]
  });

  

  let height = $('.footer').outerHeight() + 80;
  console.log(height)
  $('.body-wrapper > div > div').css('padding-bottom',height);
  $('.body-wrapper > div > main').css('padding-bottom',height);

  /* countdown */
  var target = $("#countdown").attr('data-target');

  var current_time = Date.parse(new Date());
  var deadline = new Date(current_time + parseInt(target));

  $('.clock').countdown(deadline , function(event) {
    $(this).text(
      event.strftime('%M:%S')
    );
  });

  var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'TH'
  });

  

});

/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

function loading() {
  document.querySelectorAll(".bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);


// ------------  File upload BEGIN ------------
$('.file__input--file').on('change',function(event){
  var files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    $('.file__value').remove();
    $("<div class='file__value'><div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' ></div></div>").insertAfter('#file__input');
  }	
});

//Click to remove item
$('body').on('click', '.file__value', function() {
  $(this).remove();
});
// ------------ File upload END ------------ 

$('#removeFiles').on('click', function(){
  $('#customFile').val();
  
})

$('#addFiles').on('click', function(){
  $('#customFile').click();
})

$('.checkbox input[type="checkbox"]').on('click', function(){
  
  //console.log( $(this).closest('.other-wrapper').find('.input-other-fill') )
  const obj = $(this).parent().closest('.other-wrapper').find('.input-other-fill')

  if( $(this).is(':checked') ){
    obj.show()
  }else{
    obj.hide()
  }
})

$('.history-selected').on( 'change', function(){
  console.log( $(this).val() );
  $('.histody-table-heading strong').text( $(this).val() );
  $('.custom-table').hide();
  if( $(this).val() == 'คะแนนสะสมคงเหลือ' ){
    $( '.table-1' ).show();
  } else if( $(this).val() == 'การแลกของรางวัล' ){
    $( '.table-2' ).show();
  } else if( $(this).val() == 'การสะสมคะแนน' ){
    $( '.table-3' ).show();
  } else {
    $( '.table-4' ).show();
  }
} )

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "40vw";
  if ( window.screen.width < 540 ){
    document.getElementById("mySidepanel").style.width = "90vw";
  }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}