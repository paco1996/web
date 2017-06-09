function reloj(){
var fecha=new Date();
var year=fecha.getFullYear();
var mes =fecha.getMonth(); 
var date=fecha.getDate();
var hora= fecha.getHours();
var min=fecha.getMinutes();
var seg=fecha.getSeconds();
var actualizar= setTimeout('reloj()',500);
document.getElementById('pantalla').innerHTML=year	+	"/"	+	mes	+	"/"	+	date	+	"   "	+	hora	+	":"	+	min	+	":"	+	seg; 
}