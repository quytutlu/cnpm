function LayLaiMatKhau(){
	document.getElementById("thongbao").setAttribute("style", "display:show");
	var TenDangNhap=document.getElementById("user").value;
	var Email=document.getElementById("email").value;
	if(TenDangNhap==""||Email==""){
		document.getElementById("thongbao").setAttribute("style", "display:none");
		alert("Bạn phải điền đủ thông tin");
	}else{
		var temp="index.php?cmd=quenmatkhau&tendangnhap="+TenDangNhap+"&email="+Email;
		$.ajax({type:'GET',url:temp,
			success:function  (data) {
				obj = JSON.parse(data);
				if(obj.success==true){
					document.getElementById("thongbao").setAttribute("style", "display:none");
					alert("Mật khẩu đã được gửi vào email");
					window.location.href="login.php";
				}else{
					document.getElementById("thongbao").setAttribute("style", "display:none");
					alert("Tên đăng nhập và email không tồn tại trên hệ thống!");
				}
			}
		});
	}
}