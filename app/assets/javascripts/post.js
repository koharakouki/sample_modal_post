// ↓コメントを出力する関数を定義
$(function(){
  function new_message(post){
    var new_message = `<div class="message">
				    <a href="/"><li>${post.body}</li></a>
				</div>`
    return new_message;
  }

// ↓送信ボタンクリック時にイベント発火
$("#js_new_message").on("submit",function(e){
//↓e.preventDefaultで送信ボタンクリック時の通信を止める
    e.preventDefault();
    //　↓formDataでフォームの情報を取得
    var formData = new

FormData(this);
// ↓非同期通信でコメントが保存されるようにする
    var url = $(this).attr("action")
    $.ajax({
      url:url,
      type:"POST",
      data:formData,
      dataType:"json",
      processData:false,
      contentType:false
    })
    //↓ 非同期通信成功時に上で定義した関数を実行
    .done (function(data){
      var html = new_message(data);
      $(".messages").append(html)
      $('input[type="text"]').val('');
      $('#post').modal('hide');
      $('.form_submit').prop('disabled', false);  //送信ボタンを有効にする
    })
//↓エラー時の処理
    .fail(function(){
      alert("error");
    })
  })
})