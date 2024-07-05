var a;
var f;

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const lcm = (a, b) => (a * b) / gcd(a, b);
$("#FPB").click(function () {
  a=$("#halo").val()
  f=a.split(",").map(Number)
  ff = f.reduce((aha, hyhy) => gcd(aha, hyhy))
  $(".jawaban").show().text("FPB = "+ff)
})

$("#KPK").click(function () {
  a=$("#halo").val()
  f=a.split(",").map(Number)
  ff = f.reduce((aha, hyhy) => lcm(aha, hyhy))
  $(".jawaban").show().text("KPK = "+ff)
})
