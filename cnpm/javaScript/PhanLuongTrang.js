var vaitro=sessionStorage.getItem("vaitro");
function KiemTraVaiTro () {
	if(vaitro=="1"){
		window.location.href="TheoDoiThietBi.php";
	}else{
		window.location.href="gui.php";
	}
}