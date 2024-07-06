$("#panjang").add("#segsik").hide()

var f,kel,lu,ff,fff;

$("#fat").on('change', function() {
  let a = $("#fat").val();
  if (a=="a"){
    $("#persegi").show()
    $("#panjang").add(".jawaban").add("#segsik").hide()
    $("#halo").val("")
  }else {
    $("#panjang").show()
    $("#persegi").add(".jawaban").add("#segsik").hide()
    $("#hal").add("#hola").add("#hol").val("")
  }
})
//Persegi
$("#hper").click(function(){
      f = Number($("#halo").val())
      kel = f*f*6
      lu = f**3
      $(".jawaban").show().text("Volume = "+ lu+", Luas = "+ kel)
    })
//Persegi Panjang
$("#hpan").click(function(){
      f = Number($("#hal").val())
      ff = Number($("#hola").val())
      fff = Number($("#hol").val())
      kel = (f*f+ff*ff+fff*fff)*2
      lu = f*ff*fff
      $(".jawaban").show().text("Volume = "+ lu+", Luas = "+ kel)
    })
