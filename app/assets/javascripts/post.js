$(document).on('turbolinks:load', function(){
  $('#js_new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this); //フォームに入力した値を取得しています。
  })
});