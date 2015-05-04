if(sessionStorage.getItem("success")!="true"){
	window.location.href = "login.php";
}

//load dư liệu từ database
var id=sessionStorage.getItem("id");
var user=sessionStorage.getItem("tendangnhap");
var vaitro=sessionStorage.getItem("vaitro");
if(vaitro=="1"){
	document.getElementById("quantri").setAttribute("style", "display:none");
	document.getElementById("themthietbi").setAttribute("style", "display:show");
	document.getElementById("theodoithietbi").setAttribute("style", "display:show");
}else if(vaitro=="2"){
	document.getElementById("quantri").setAttribute("style", "display:show");
	document.getElementById("dexuatthietbi").setAttribute("style", "display:show");
	document.getElementById("baocaoduyetyc").setAttribute("style", "display:show");
	document.getElementById("api").setAttribute("style", "display:show");
}else if(vaitro=="3"){
	document.getElementById("quantri").setAttribute("style", "display:none");
	document.getElementById("themthietbi").setAttribute("style", "display:none");
	document.getElementById("theodoithietbi").setAttribute("style", "display:none");
}
document.getElementById("ThongBao").innerHTML="Xin chào "+user+" (id:"+id+")";
var temp="index.php?cmd=laytrangthai&id="+id;
var idThietBi=[];
$.ajax({type: 'GET',url: temp,
	success:function(data){
		PageLayout(data,"init");
	}
});
function PageLayout(data,type){
	obj = JSON.parse(data);
	var table=document.getElementById("bangdieukhien");
	table.rows[0].cells[2].style.display="show";
	for (var i = 0; i < obj.list.length; i++) {
		if(type=="init"){
			var row=table.insertRow(i+1);
			var cell1=row.insertCell(0);
			var cell2=row.insertCell(1);
			var cell3=row.insertCell(2);
			var cell4=row.insertCell(3);
			var cell5=row.insertCell(4);
		}else{
			var x = document.getElementById("bangdieukhien").rows[i+1].cells;
			cell1=x[0];
			cell2=x[1];
			cell3=x[2];
			cell4=x[3];
			cell5=x[4];
		}
		ThietBi=obj.list[i].TenThietBi;
		ReadOnly=obj.list[i].ReadOnly;
		id_ThietBi=obj.list[i].id;
		if(ReadOnly!="1"){
			TrangThai=obj.list[i].TrangThai==1?"Bật":"Tắt";				
		}else{
			TrangThai=obj.list[i].TrangThai;
		}

		cell1.innerHTML=ThietBi;
		cell2.innerHTML=obj.list[i].TenVietTat;
		cell3.innerHTML=TrangThai;
		TrangThai=TrangThai=="Bật"?"Tắt":"Bật";
		if(ReadOnly=="1"){
			TrangThai="x";
		}
		if(TrangThai=="Bật"){
			clbtn="btn btn-primary"
		}
		clbtn=TrangThai=="Bật"?"btn btn-primary":TrangThai=="x"?"btn btn-warning":"btn btn-danger";
		cell4.innerHTML="<input type=\"checkbox\" id=\""+id_ThietBi+"\" onclick=LuaChon(this.id,"+(i+1)+")>";
		cell5.innerHTML=id_ThietBi;
		cell5.style.display="none";
		//cell3.style.display="none";
	}
}
window.onload=function(){
	var temp="index.php?cmd=laycactaikhoanquanly&idnguoitao="+id;
	$.ajax({type:'GET',url:temp,success:function(data){
			obj=JSON.parse(data);
			var select=document.getElementById("CacTaiKhoan");
			for (var i = 0; i <obj.list.length; i++) {
				var option = document.createElement('option');
        		option.text =  obj.list[i].TenTaiKhoan;
        		option.value =obj.list[i].id;
        		select.add(option, i);
			};
		}
	});
}
function LuaChon(id_ThietBi,row_index){
	var e = document.getElementById("CacTaiKhoan");
	var id_NguoiDung = e.options[e.selectedIndex].value;
	if(id_NguoiDung==""){
		var table=document.getElementById("bangdieukhien");
		table.rows[row_index].cells[3].childNodes[0].checked=false;
		alert("Chọn tài khoản");
	}else{
		if(document.getElementById(id_ThietBi).checked){
			var temp="index.php?cmd=datquyendieukhien&idnguoidung="+id_NguoiDung+"&idthietbi="+id_ThietBi;
			$.ajax({type:'GET',url:temp,success:function(data){
					obj=JSON.parse(data);
					if(obj.success==true){
						document.getElementById(id_ThietBi).checked=true;
					}
				}
			});
		}else{
			var temp="index.php?cmd=huyquyendieukhien&idnguoidung="+id_NguoiDung+"&idthietbi="+id_ThietBi;
			$.ajax({type:'GET',url:temp,success:function(data){
					obj=JSON.parse(data);
					if(obj.success==true){
						document.getElementById(id_ThietBi).checked=false;
					}
				}
			});
		}
	}
}
function KiemTraTonTai(){
	var count=document.getElementById("bangdieukhien").rows.length;
	var dem=idThietBi.length;
	var table=document.getElementById("bangdieukhien");
	for (var i = 0; i<count; i++){
		for (var j=0;j<dem;j++){
			if(table.rows[i].cells[4].innerHTML==idThietBi[j]){
				table.rows[i].cells[3].childNodes[0].checked=true;
			}
		};
	};
}
window.ChonTaiKhoan=function(){
	var table=document.getElementById("bangdieukhien");
	var count=document.getElementById("bangdieukhien").rows.length;
	var e = document.getElementById("CacTaiKhoan");
	var id_NguoiDung = e.options[e.selectedIndex].value;
	var temp="index.php?cmd=laytrangthai&id="+id_NguoiDung;
	idThietBi=[];
	for (var i = 0; i<count; i++){
		table.rows[i].cells[3].childNodes[0].checked=false;
	}
	$.ajax({type: 'GET',url: temp,
		success:function(data){
			obj = JSON.parse(data);
			for (var i = 0; i < obj.list.length; i++){
				idThietBi[i]=obj.list[i].id;
			}
			KiemTraTonTai();
		}
	});
}
function DangXuat(){
	sessionStorage.setItem("success", "false");
	window.location.href = "login.php";
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
function DangKy(){
	var TenDangNhap=document.getElementById("tendangnhap").value;
	var MatKhau=document.getElementById("matkhau").value;
	var GoLaiMatKhau=document.getElementById("golaimatkhau").value;
	var Email=document.getElementById("email").value;
	var Sdt=document.getElementById("sdt").value;
	if(MatKhau!=GoLaiMatKhau){
		alert("Mật khẩu không trùng nhau");
		document.getElementById("matkhau").value="";
		document.getElementById("golaimatkhau").value="";
		return;
	}else if(MatKhau==""||GoLaiMatKhau==""||TenDangNhap==""||Email==""||Sdt==""){
		alert("Bạn phải điền đủ thông tin");
	}else if(!validateEmail(Email)){
		alert("Email không chính xác");
	}else{
		var temp="index.php?cmd=kiemtratontaiuser&tendangnhap="+TenDangNhap;
		$.ajax({type: 'GET',url: temp,
			success:function(data){
				obj=JSON.parse(data);
				if(obj.success==true){
					document.getElementById("tendangnhap").value="";
					alert("Tài khoản đã tồn tại!");
				}else{
					k=vaitro=="1"?"2":"3";
					temp="index.php?cmd=dangkythanhvientrongnha&tendangnhap="+TenDangNhap+"&matkhau="+MatKhau+"&vaitro="+k+"&idnguoitao="+id+"&email="+Email+"&sdt="+Sdt;
					$.ajax({type: 'GET',url: temp,
						success:function(data){
							obj=JSON.parse(data);
							if(obj.success==true){
								window.location.href = "TaoTaiKhoan.php";
								document.getElementById("tendangnhap").value="";
								document.getElementById("matkhau").value="";
								document.getElementById("golaimatkhau").value="";
								document.getElementById("taotk").setAttribute("style", "display:show");
								document.getElementById("formdangky").setAttribute("style", "display:none");
								document.getElementById("tendangnhap").value="";
								document.getElementById("matkhau").value="";
								document.getElementById("golaimatkhau").value="";
								document.getElementById("email").value="";
								document.getElementById("sdt").value="";
								alert("Đăng ký thành công");
							}else{
								alert("Đăng ký thất bại");
							}
						}
					});
				}
			}
		});
	}
}
function PhanQuyen(){
	var table=document.getElementById("bangdieukhien");
	document.getElementById("taotk").setAttribute("style", "display:none");
	document.getElementById("thongbao").innerHTML="Phân quyền các thiết bị"
	table.rows[0].cells[2].style.display="";
	for (var i = 1; i < table.rows.length; i++){
		var x=table.rows[i].cells;
		x[2].style.display="";
	}
	document.getElementById("formdangky").setAttribute("style", "display:none");
	document.getElementById("CacTaiKhoan").setAttribute("style", "width:265px;height:30px;display:show");
}
function TheoDoiThietBi(){
	if(vaitro=="1"){
		window.location.href="TheoDoiThietBi.php";
	}else{
		alert("Bạn không đủ quyền");
	}
}
function ThemThietBi(){
	if(vaitro=="1"){
		window.location.href="ThemThietBi.php";
	}else{
		alert("Bạn không đủ quyền");
	}
}
function CreateAcc(){
	document.getElementById("taotk").setAttribute("style", "display:none");
	document.getElementById("formdangky").setAttribute("style", "display:show");
}
function Hidden(){
	document.getElementById("taotk").setAttribute("style", "display:show");
	document.getElementById("formdangky").setAttribute("style", "display:none");
}
//load thông tin tài khoản khi hover
$(document).ready(function() {
	var temp="index.php?cmd=laythongtinnguoidung&id="+id;
	$.ajax({type: 'GET',url: temp,success:function(data){
		obj=JSON.parse(data);
		var id_user=obj.id;
		var TenDangNhap=obj.TenDangNhap;
		var Email=obj.Email;
		var SDT=obj.SDT;
		var NguoiTao=obj.NguoiTao;
		var VaiTro=obj.VaiTro;
		var NgayThamGia=obj.NgayThamGia;
		var HanDung=obj.HanDung;
		var info="<center><b><h3>Thông tin cá nhân</h3></b></center><b>Mã tài khoản:</b> "+id_user+"</br><b>Tên đăng nhập:</b> "+TenDangNhap+"</br><b>Email:</b> "+Email+"</br><b>SĐT:</b> "+SDT+"</br><b>Người tạo:</b> "+NguoiTao+"</br><b>Vai trò:</b> "+VaiTro+"</br><b>Ngày tham gia: </b>"+NgayThamGia+"</br><b>Hạn dùng: </b>"+HanDung;
		document.getElementById('tooltip').setAttribute("data-tip", info);
    	$('.tip').tipr();
	}});
});
function API(){
	alert("http://192.99.66.193:1234/kltn_arduino/?cmd=laytrangthaiarduino&id="+id);
}