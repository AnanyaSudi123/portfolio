// var n=document.getElementsByTagName("input").value;
// var skill=document.getElementById("skill").value;
// var level=document.getElementById("level");
var button=document.getElementById("submit");
var tab=document.getElementById("feedback");


// button.addEventListener("click",function(){
//     var row=tab.insertRow(0);
//     var cell1=row.insertCell(0);
//     cell1.textContent="ananya";

// }
// var n=document.getElementById("name");
// n.addEventListener("click",function(){
//     alert("clcicked");
// })
function goo(){
    var n=document.getElementById("name").value;
    var skill=document.getElementById("skill").value;
    var level=document.getElementById("level").value;
    var row=tab.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.textContent=n;
    cell2.textContent=skill;
    cell3.textContent=level;
}
