function DangNhap () {
	var TenDangNhap=document.getElementById('user').value;
	var MatKhau=document.getElementById('pass').value;
	$.ajax({type:'GET',url:"index.php?cmd=dangnhap&tendangnhap="+TenDangNhap+"&matkhau="+MatKhau,
		success:function  (data) {
			obj = JSON.parse(data);
			if(obj.id!="-1"){
				sessionStorage.setItem("id",obj.id);
				sessionStorage.setItem("tendangnhap", TenDangNhap);
				sessionStorage.setItem("success","true");
				sessionStorage.setItem("vaitro",obj.VaiTro);
				if(obj.VaiTro=="1"||obj.VaiTro=="2"){
					window.location.href = "DuyetYeuCau.php";
				}
				else if(obj.VaiTro=="4"){
					window.location.href = "gui.php";
				}
				//alert("Đăng nhập thành công");
			}else{
				alert("Đăng nhập thất bại");
			}
		}
	});
}