-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2015 at 03:09 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cnpm`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `DangNhap`(TenDangNhap varchar(50),MatKhau varchar(50))
BEGIN
	SELECT *
    FROM ThongTinNguoiDung
    WHERE ThongTinNguoiDung.TenDangNhap=TenDangNhap and ThongTinNguoiDung.MatKhau=MatKhau;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DuyetYeuCau`(id_DeTai int,TrangThai int)
BEGIN
	UPDATE DeTai set DeTai.TrangThai=TrangThai WHERE DeTai.id_DeTai=id_DeTai;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `LayCacDeTaiChuaDuyet`()
BEGIN
	SELECT ThongTinNguoiDung.MaGV,ThongTinNguoiDung.TenGiaoVien,R.*
    FROM ThongTinNguoiDung INNER JOIN(
        SELECT *
        FROM DeTai
        WHERE DeTai.TrangThai=-1)as R ON R.id_GiaoVien=ThongTinNguoiDung.MaGV;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `LayDeTai`(id_GiaoVien int)
BEGIN
	SELECT *
    from DeTai
    WHERE DeTai.id_GiaoVien=id_GiaoVien;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ThemDeTai`(IN `TenDeTai` VARCHAR(50), IN `SoGio` INT, IN `id_GiaoVien` INT, IN `TrangThai` INT)
BEGIN
	INSERT INTO DeTai(DeTai.TenDeTai,DeTai.SoGio,DeTai.id_GiaoVien,DeTai.TrangThai)VALUES(TenDeTai,SoGio,id_GiaoVien,TrangThai);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `ChucVu`
--

CREATE TABLE IF NOT EXISTS `ChucVu` (
  `id_ChucVu` int(11) NOT NULL,
  `TenChucVu` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ChucVu`
--

INSERT INTO `ChucVu` (`id_ChucVu`, `TenChucVu`) VALUES
(1, 'Hiệu Trưởng'),
(2, 'Trưởng Bộ Môn'),
(3, 'Thư Ký'),
(4, 'Giáo Viên');

-- --------------------------------------------------------

--
-- Table structure for table `DeTai`
--

CREATE TABLE IF NOT EXISTS `DeTai` (
  `id_DeTai` int(11) NOT NULL,
  `TenDeTai` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `SoGio` int(11) NOT NULL,
  `id_GiaoVien` int(11) NOT NULL,
  `TrangThai` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DeTai`
--

INSERT INTO `DeTai` (`id_DeTai`, `TenDeTai`, `SoGio`, `id_GiaoVien`, `TrangThai`) VALUES
(1, 'SmartHome', 100, 1, -1),
(5, 'NC', 16, 1, 1),
(6, 'NC2', 15, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Phong`
--

CREATE TABLE IF NOT EXISTS `Phong` (
  `id_Phong` int(11) NOT NULL,
  `TenPhong` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Phong`
--

INSERT INTO `Phong` (`id_Phong`, `TenPhong`) VALUES
(1, 'Bộ môn Tin'),
(2, 'Bộ môn Toán');

-- --------------------------------------------------------

--
-- Table structure for table `ThongTinNguoiDung`
--

CREATE TABLE IF NOT EXISTS `ThongTinNguoiDung` (
  `MaGV` int(11) NOT NULL,
  `TenGiaoVien` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id_Phong` int(11) NOT NULL,
  `id_ChucVu` int(11) NOT NULL,
  `id_TrinhDo` int(11) NOT NULL,
  `TenDangNhap` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ThongTinNguoiDung`
--

INSERT INTO `ThongTinNguoiDung` (`MaGV`, `TenGiaoVien`, `id_Phong`, `id_ChucVu`, `id_TrinhDo`, `TenDangNhap`, `MatKhau`) VALUES
(1, 'Nguyễn Quý Tú', 1, 4, 4, 'tunq', '123'),
(2, 'Cao Kim Ánh', 1, 2, 2, 'anhck', '123');

-- --------------------------------------------------------

--
-- Table structure for table `TrinhDo`
--

CREATE TABLE IF NOT EXISTS `TrinhDo` (
  `id_TrinhDo` int(11) NOT NULL,
  `TenTrinhDo` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `TrinhDo`
--

INSERT INTO `TrinhDo` (`id_TrinhDo`, `TenTrinhDo`) VALUES
(1, 'Giáo Sư'),
(2, 'Tiến Sĩ'),
(3, 'Thạc Sĩ'),
(4, 'Đại Học');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ChucVu`
--
ALTER TABLE `ChucVu`
  ADD PRIMARY KEY (`id_ChucVu`);

--
-- Indexes for table `DeTai`
--
ALTER TABLE `DeTai`
  ADD PRIMARY KEY (`id_DeTai`),
  ADD KEY `id_GiaoVien` (`id_GiaoVien`);

--
-- Indexes for table `Phong`
--
ALTER TABLE `Phong`
  ADD PRIMARY KEY (`id_Phong`);

--
-- Indexes for table `ThongTinNguoiDung`
--
ALTER TABLE `ThongTinNguoiDung`
  ADD PRIMARY KEY (`MaGV`),
  ADD KEY `id_Phong` (`id_Phong`,`id_ChucVu`,`id_TrinhDo`);

--
-- Indexes for table `TrinhDo`
--
ALTER TABLE `TrinhDo`
  ADD PRIMARY KEY (`id_TrinhDo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ChucVu`
--
ALTER TABLE `ChucVu`
  MODIFY `id_ChucVu` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `DeTai`
--
ALTER TABLE `DeTai`
  MODIFY `id_DeTai` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `Phong`
--
ALTER TABLE `Phong`
  MODIFY `id_Phong` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ThongTinNguoiDung`
--
ALTER TABLE `ThongTinNguoiDung`
  MODIFY `MaGV` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `TrinhDo`
--
ALTER TABLE `TrinhDo`
  MODIFY `id_TrinhDo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
