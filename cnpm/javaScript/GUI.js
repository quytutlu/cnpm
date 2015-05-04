
//load dư liệu từ database
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"||vaitro=="2"){
	document.getElementById("duyetdetai").setAttribute("style", "display:show");
}else if(vaitro=="4"){
	document.getElementById("khaibaodetai").setAttribute("style", "display:show");
}
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
var temp="index.php?cmd=laydetai&id_giaovien="+id;
$.ajax({type:'GET',url:temp,
	success:function  (data) {
		PageLayout(data);
	}
});
function ThemDeTai(){
	//alert("Thêm đề tài");
	var TenDeTai=document.getElementById("tendetai").value;
	var SoGio=document.getElementById("sogio").value;
	var temp="index.php?cmd=themdetai&tendetai="+TenDeTai+"&sogio="+SoGio+"&id_giaovien="+id+"&trangthai=-1";
	$.ajax({type:'GET',url:temp,
		success:function  (data) {
			obj = JSON.parse(data);
			if(obj.success==true){
				alert("Thêm đề tài thành công!");
				window.location.href = "gui.php";
				//alert("Đăng nhập thành công");
			}else{
				alert("Thêm đề tài thất bại");
			}
		}
	});
}
function PageLayout(data){
	obj = JSON.parse(data);
	var table=document.getElementById("bangdieukhien");
	for (var i = 0; i < obj.list.length; i++) {
		var row=table.insertRow(i+1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		cell1.innerHTML=obj.list[i].TenDeTai;
		cell2.innerHTML=obj.list[i].SoGio;
		var TrangThai=obj.list[i].TrangThai=="-1"?"Đang chờ duyệt":obj.list[i].TrangThai=="0"?"Không được duyệt":"Đã được duyệt";
		cell3.innerHTML=TrangThai;
	}
}
function DangXuat(){
	window.location.href = "login.php";
}