let count=1 
document.getElementById("radio1").checked=true
setInterval(()=>{nextimage()},2000)
function nextimage(){
    count++
    if (count>4){
        count=1
    }
    document.getElementById("radio"+count).checked=true

}