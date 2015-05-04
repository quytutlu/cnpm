//check session
if(sessionStorage.getItem("success")!="true")
{
	window.location.href = "login.php";
}
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"||vaitro=="2"){
	document.getElementById("duyetdetai").setAttribute("style", "display:show");
}else if(vaitro=="4"){
	document.getElementById("khaibaodetai").setAttribute("style", "display:show");
}

document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";

var temp="index.php?cmd=laycacdetaichuaduyet";
$.ajax({type: 'GET',url: temp,success:function(data){
	DanTrang(data);
}});

function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
function DanTrang(data){
	obj = JSON.parse(data);
	var table=document.getElementById("bangdieukhien");
	for (var i = 0; i < obj.list.length; i++) {
		var row=table.insertRow(i+1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
		var cell5=row.insertCell(4);
		var cell6=row.insertCell(5);
		var cell7=row.insertCell(6);
		cell1.innerHTML=i+1;
		cell2.innerHTML=obj.list[i].MaGiaoVien;
		cell3.innerHTML=obj.list[i].TenGiaoVien;
		cell4.innerHTML=obj.list[i].TenDeTai;
		//cell4.style.display="none";
		cell5.innerHTML=obj.list[i].SoGio;
		//cell5.style.display="none";
		cell6.innerHTML="<input class=\"btn btn-primary\" type=\"button\" value=\"Đồng ý\" onclick=\"DuyetYC("+(i+1)+")\"/><input class=\"btn btn-danger\" style=\"text-align: center;\" type=\"button\" value=\"Huỷ\" onclick=\"HuyYC("+(i+1)+")\"/></div>";
		cell7.innerHTML=obj.list[i].idYeuCau;
		cell7.style.display="none";
	}
}
function DuyetYC(index){
	var id_YeuCau=document.getElementById("bangdieukhien").rows[index].cells[6].innerHTML;
	var temp="index.php?cmd=duyetyeucau&id_detai="+id_YeuCau+"&trangthai=1";
	$.ajax({type: 'GET',url: temp,
		success:function(data){
			alert(data);
			obj=JSON.parse(data);
			if(obj.success==true){
				var table=document.getElementById("bangdieukhien");
				table.deleteRow(index);
				alert("Duyệt đề tài thành công");
			}else{
				alert("Duyệt đề tài thất bại");
			}
		}
	});
}
function HuyYC(index){
	var id_YeuCau=document.getElementById("bangdieukhien").rows[index].cells[6].innerHTML;
	var temp="index.php?cmd=duyetyeucau&id_detai="+id_YeuCau+"&trangthai=0";
	$.ajax({type: 'GET',url: temp,
		success:function(data){
			obj=JSON.parse(data);
			if(obj.success==true){
				var table=document.getElementById("bangdieukhien");
				table.deleteRow(index);
			}else{
				alert("Huỷ thất bại!");
			}
		}
	});
}