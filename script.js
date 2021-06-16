// aguardar o DOM estar pronto para executar os scripts Jquery //

$(document).ready(function(){  
  $('#loginAluno').submit(function(event){
    if($('#inputUsuario').val() == "root" && $('#inputSenha').val() == '1234'){
      //executar o código se for vdd //
      $('#mensagem').addClass("alert alert-success alert-dismisseble fade show")
      $('menagem').removeClass('alert-warning')
      $('#mensagem').text('Usuário Logado!').show().fadeout(3000)
      event.preventDefault() // bloqueia o evento de submit   
    }else{
      $('#mensagem').addClass("alert alert-warning alert-dismissible fade show")
      $('menagem').removeClass('alert-success')
      $('#mensagem').text('Usuário ou senha inválida!').show().fadeOut(3000)
      event.preventDefault() // bloqueia o evento de submit
    }
  })
})