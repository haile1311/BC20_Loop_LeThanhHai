/**
 * Bài  1
 */

document.getElementById("kq1").onclick;
document.getElementById("btnBai1").onclick = function () {

var num1 = 100;
var soChan = "";
var soLe = "";
var n1 = 1;

// While
// tạo biến bước nhảy 
// while(n1 < num1){
// if(n1 % 2 == 0){
// số chẵn
// soChan += " "+ n1;
// }else{
// số lẻ
// soLe += " "+ n1;
// }n1++;   
// }

//For
for (var i = 1; i <num1; i++) {
if (i % 2 == 0) {
soChan += " " + i;
} else {
soLe += " " + i;
}
}
document.getElementById("kq1").value = "Số chẵn: " + soChan + "\n" + "Số lẻ: " + soLe;
}

// bài 2
document.getElementById("kq2").onclick;
document.getElementById("btnBai2").onclick = function () {
var num2 = 1000;
var soBai2 = "";

for (var i = 0; i<num2; i++)
{
    if (i % 3 ==0) {
        soBai2 ++;
    }
}

// While bài 2
// var num2 = 1000;
// var n1 = 1 
// while(n1 < num2){
// if(n1 % 3 == 0){
// soBai2 += " "+ n1;
// }else{
// }n1++;   
// }

document.getElementById("kq2").value = "Số chia hết cho 3 nhỏ hơn 1000: " + soBai2 + " số";
}

// bài 3
document.getElementById("kq3").onclick;
document.getElementById("btnBai3").onclick = function () {
var soBai3 = 0;
var sum = 0;
var num3 = 10000;
while (sum < num3){
    soBai3++;
    sum += soBai3;
}
document.getElementById("kq3").value = "Số nguyên dương nhỏ nhất: " + soBai3;
}

// bài 4
document.getElementById("kq4").onclick;
document.getElementById("btnBai4").onclick = function () {
var num4 = document.getElementById("num4").value;
var pow4 = document.getElementById("pow4").value;
var soBai4 = 0;

for (var i = 1; i <= pow4; i++)
{   
    soBai4 += Number(Math.pow(num4,i));
}
document.getElementById("kq4").value = "Tổng: " + Number(soBai4);
}

// bài 5
document.getElementById("kq5").onclick;
document.getElementById("btnBai5").onclick = function () {
var num5 = document.getElementById("num5").value;
var soBai5 = 1;
for (var i = 1; i <= num5; i++)
{   
   soBai5 *= i;
}
document.getElementById("kq5").value = "Giai thừa: " + Number(soBai5);
}

// bài 7
function check_prime(){
    var n = Number(document.getElementById("num7").value);
    var content = ""

}

function list_prime(n){
    var content = ""
    for (var i=2; i <=n;i++){
        if(check_prime(i)){
            content += (i + " ");
        }
    }
    return content;
}

// bài 6

function div6(){
    var content = "";
    for (var i=1; i<=10; i++){
        if(i%2 ==0){
            content += "<div style='background-color: red; color: white;'>Thẻ thứ "+i+" (div chẵn).</div>"
        }else{
            content += "<div style='background-color: blue; color: white;'>Thẻ thứ "+i+" (div chẵn).</div>"
        }
        }
        document.getElementById("kq6").style.display = "block";
        document.getElementById("kq6").innerHTML = content;    
    }
document.getElementById("btnBai6").onclick = div6;
