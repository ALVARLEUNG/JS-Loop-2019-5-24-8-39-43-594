for(i=1;i<=9;i++){
for(j=1;j<=9;j++){
document.write (i+"*"+j+"="+i*j+"&nbsp;");
if(i==j) {
	document.write ("<br/>"); 
	break;
	}
}
}