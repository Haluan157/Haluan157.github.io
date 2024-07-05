$("#panjang").add("#segsik").hide()

var f,kel,lu,ff,fff;
var j = "s1"

$("#fat").on('change', function() {
  let a = $("#fat").val();
  if (a=="a"){
    $("#persegi").show()
    $("#panjang").add(".jawaban").add("#segsik").hide()
    $("#halo").val("")
  }else if (a=="b"){
    $("#segsik").show()
    $("#persegi").add(".jawaban").add("#panjang").hide()
    $(".alas").add(".tinggi").val("")
  }else {
    $("#panjang").show()
    $("#persegi").add(".jawaban").add("#segsik").hide()
    $("#hal").add("#hola").val("")
  }
})
$("#jenis").on("change", function(){
  j = $("#jenis").val()
})
//Persegi
$("#hper").click(function(){
      f = Number($("#halo").val())
      kel = f*4
      lu = f*f
      $(".jawaban").show().text("Keliling = "+ kel+", Luas = "+ lu)
    })
//Persegi Panjang
$("#hpan").click(function(){
      f = Number($("#hal").val())
      ff = Number($("#hola").val())
      kel = (f+ff)*2
      lu = f*ff
      $(".jawaban").show().text("Keliling = "+ kel+", Luas = "+ lu)
    })
//pSegitiga Siku2
$("#hsegsik").click(function(){
  f = Number($(".alas").val())
  ff = Number($(".tinggi").val())
  if (j == "s1"){
  fff = ((f**2)+(ff**2))**0.5
  kel = f+ff+fff
  }else {
    fff = (((f/2)**2)+(ff**2))**0.5
    kel = fff * 2 + f
  }
  lu = f*ff/2
  $(".jawaban").show().text("Keliling = "+ kel+", Luas = "+ lu)
})
