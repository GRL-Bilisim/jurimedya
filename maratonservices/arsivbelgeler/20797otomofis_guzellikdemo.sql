-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2022 at 10:20 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `otomofis_guzellikdemo`
--

-- --------------------------------------------------------

--
-- Table structure for table `aktarimlar`
--

CREATE TABLE `aktarimlar` (
  `aktarim_index` int(3) NOT NULL,
  `personel_index` int(3) NOT NULL,
  `islem_index` int(3) NOT NULL,
  `gecistarihi` date NOT NULL,
  `tutarint` varchar(10) DEFAULT '0',
  `alacak_index` int(3) DEFAULT NULL,
  `tutarbirimi` varchar(10) DEFAULT NULL,
  `subetanimi` varchar(50) DEFAULT NULL,
  `turu` varchar(10) DEFAULT NULL,
  `kesinti` varchar(5) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ambartanimlari`
--

CREATE TABLE `ambartanimlari` (
  `ambarindex` int(3) NOT NULL,
  `ambarkodu` varchar(50) NOT NULL,
  `ambartanimi` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ambartanimlari`
--

INSERT INTO `ambartanimlari` (`ambarindex`, `ambarkodu`, `ambartanimi`) VALUES
(1, 'MAMUL DEPO-1', 'MAMUL DEPO-1'),
(2, 'SATINALMA DEPOSU (SANAL)', 'SATINALMA DEPOSU (SANAL)'),
(3, 'SÝPARÝÞ DEPOSU (SANAL)', 'SÝPARÝÞ DEPOSU (SANAL)');

-- --------------------------------------------------------

--
-- Table structure for table `aracturleri`
--

CREATE TABLE `aracturleri` (
  `aracturindex` int(3) NOT NULL,
  `aracturkodu` varchar(20) NOT NULL,
  `aracturtanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aracturleri`
--

INSERT INTO `aracturleri` (`aracturindex`, `aracturkodu`, `aracturtanimi`) VALUES
(1, '00001', 'TRAKTÖR GRUBU');

-- --------------------------------------------------------

--
-- Table structure for table `atamalar`
--

CREATE TABLE `atamalar` (
  `index_atamalar` int(6) NOT NULL,
  `atamakodu` varchar(45) NOT NULL,
  `derstanimi` varchar(45) NOT NULL,
  `akademisyen` varchar(45) NOT NULL,
  `donemtanimi` varchar(100) NOT NULL,
  `gunu1` varchar(45) NOT NULL,
  `saati1` time NOT NULL,
  `gunu2` varchar(45) DEFAULT NULL,
  `saati2` varchar(45) DEFAULT NULL,
  `ogrenimturu` varchar(45) NOT NULL,
  `sinifmevcudu` int(3) NOT NULL,
  `teorikders` int(3) NOT NULL,
  `digerfaaliyet` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `atamalar`
--

INSERT INTO `atamalar` (`index_atamalar`, `atamakodu`, `derstanimi`, `akademisyen`, `donemtanimi`, `gunu1`, `saati1`, `gunu2`, `saati2`, `ogrenimturu`, `sinifmevcudu`, `teorikders`, `digerfaaliyet`) VALUES
(12, '00001', 'YBS206', '21325044944', '2015-2016/BAHAR', 'Perþembe', '20:15:00', '', '', 'Ýkinci Öðretim', 63, 2, 0),
(11, '00001', 'YBS206', '21325044944', '2015-2016/BAHAR', 'Perþembe', '13:15:00', '', '', 'Normal Öðretim', 70, 2, 0),
(10, '00001', 'YBS402', '21325044944', '2015-2016/BAHAR', 'Perþembe', '17:15:00', '', '', 'Ýkinci Öðretim', 41, 3, 0),
(8, '00001', 'YBS402', '21325044944', '2015-2016/BAHAR', 'Perþembe', '09:15:00', '', '', 'Normal Öðretim', 32, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bankaislemleri`
--

CREATE TABLE `bankaislemleri` (
  `bankaislemindex` int(3) NOT NULL,
  `islemturu` varchar(30) NOT NULL,
  `bankahesapkodu` varchar(30) NOT NULL,
  `bankahesapadi` varchar(100) NOT NULL,
  `ilgilihesapadi` varchar(100) DEFAULT NULL,
  `islemtutari` varchar(10) NOT NULL,
  `tutarbirimi` varchar(10) NOT NULL,
  `islemtarihi` date NOT NULL,
  `islemkodu` varchar(20) NOT NULL,
  `aciklama` varchar(100) DEFAULT NULL,
  `ilgilihesapkodu` varchar(30) DEFAULT NULL,
  `donem` year(4) DEFAULT NULL,
  `gideryeri` varchar(80) DEFAULT NULL,
  `gelirgrubu` varchar(80) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bankatanimlari`
--

CREATE TABLE `bankatanimlari` (
  `bankaTanimlari_index` smallint(4) NOT NULL,
  `bankaAdi` varchar(150) NOT NULL,
  `bankaKodu` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bankatanimlari`
--

INSERT INTO `bankatanimlari` (`bankaTanimlari_index`, `bankaAdi`, `bankaKodu`) VALUES
(53, 'BANK ASYA', '00001'),
(7, 'ABN AMRO Bank N.V.', '00002'),
(8, 'Adabank A.Þ.', '00003'),
(9, 'Akbank T.A.Þ.', '00004'),
(10, 'Alternatif Bank A.Þ.', '00005'),
(11, 'Anadolubank A.Þ.', '00006'),
(12, 'Arap Türk Bankasý A.Þ.', '00007'),
(13, 'Banca di Roma S.P.A.', '00008'),
(14, 'Bank Mellat', '00009'),
(15, 'BankPozitif Kredi ve Kalkýnma Bankasý A.Þ.', '00010'),
(16, 'Birleþik Fon Bankasý A.Þ.', '00011'),
(17, 'Calyon Yatýrým Bankasý Türk A.Þ.', '00012'),
(18, 'Citibank A.Þ.', '00013'),
(19, 'Çalýk Yatýrým Bankasý A.Þ.', '00014'),
(20, 'Denizbank A.Þ.', '00015'),
(21, 'Deutsche Bank A.Þ.', '00016'),
(22, 'Diler Yatýrým Bankasý A.Þ.', '00017'),
(23, 'Eurobank Tekfen A.Þ.', '00019'),
(24, 'Finans Bank A.Þ.', '00018'),
(25, 'Fortis Bank A.Þ.', '00020'),
(26, 'GSD Yatýrým Bankasý A.Þ.', '00021'),
(27, 'Habib Bank Limited', '00022'),
(28, 'HSBC Bank A.Þ.', '00023'),
(29, 'Ýller Bankasý', '00024'),
(30, 'ÝMKB Takas ve Saklama Bankasý A.Þ.', '00025'),
(31, 'JPMorgan Chase Bank N.A.', '00026'),
(32, 'Merrill Lynch Yatýrým Bank A.Þ.', '00027'),
(33, 'Millennium Bank A.Þ.', '00028'),
(34, 'Nurol Yatýrým Bankasý A.Þ.', '00029'),
(35, 'Oyak Bank A.Þ.', '00030'),
(36, 'Société Générale (SA)', '00031'),
(37, 'Þekerbank T.A.Þ.', '00032'),
(38, 'Taib Yatýrým Bank A.Þ.', '00033'),
(39, 'Tekstil Bankasý A.Þ.', '00034'),
(40, 'Turkish Bank A.Þ.', '00035'),
(41, 'Turkland Bank A.Þ.', '00036'),
(42, 'Türk Ekonomi Bankasý A.Þ.', '00037'),
(43, 'Türk Eximbank', '00038'),
(44, 'Türkiye Cumhuriyeti Ziraat Bankasý A.Þ.', '00039'),
(45, 'Türkiye Garanti Bankasý A.Þ.', '00040'),
(46, 'T.C HalkBankasý A.Þ.', '00041'),
(47, 'Türkiye Ýþ Bankasý A.Þ.', '00042'),
(48, 'Türkiye Kalkýnma Bankasý A.Þ.', '00043'),
(49, 'Türkiye Sýnai Kalkýnma Bankasý A.Þ.', '00044'),
(50, 'Türkiye Vakýflar Bankasý T.A.O.', '00045'),
(51, 'WestLB AG', '00046'),
(52, 'Yapý ve Kredi Bankasý A.Þ.', '00047');

-- --------------------------------------------------------

--
-- Table structure for table `bekleyenler`
--

CREATE TABLE `bekleyenler` (
  `index` int(3) NOT NULL,
  `tarih` date NOT NULL,
  `saat` time NOT NULL,
  `stokkodu` varchar(50) NOT NULL,
  `imeino` varchar(50) NOT NULL,
  `gonderen` varchar(20) DEFAULT NULL,
  `alici` varchar(20) DEFAULT NULL,
  `aliciotomofis_id` varchar(10) DEFAULT NULL,
  `miktar` varchar(10) DEFAULT NULL,
  `stokadi` varchar(100) DEFAULT NULL,
  `durumu` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

-- --------------------------------------------------------

--
-- Table structure for table `bildirimler`
--

CREATE TABLE `bildirimler` (
  `index_bildirimler` int(6) NOT NULL,
  `bildirim` varchar(255) NOT NULL,
  `ogrencino` varchar(45) DEFAULT NULL,
  `ogretmenid` varchar(45) DEFAULT NULL,
  `okundu` varchar(45) DEFAULT NULL,
  `bildirimturu` varchar(45) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bloklar`
--

CREATE TABLE `bloklar` (
  `bokindex` int(3) NOT NULL,
  `formindex` int(3) NOT NULL,
  `bagliformindex` int(3) DEFAULT NULL,
  `kolonsayisi` int(3) NOT NULL,
  `turu` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bloklar`
--

INSERT INTO `bloklar` (`bokindex`, `formindex`, `bagliformindex`, `kolonsayisi`, `turu`) VALUES
(1, 1, NULL, 3, 'Alan'),
(2, 2, NULL, 3, 'Alan'),
(3, 3, NULL, 3, 'Alan'),
(4, 5, NULL, 3, 'Alan'),
(5, 6, NULL, 3, 'Alan'),
(6, 13, NULL, 3, 'Alan'),
(35, 14, NULL, 2, 'Alan'),
(8, 87, NULL, 3, 'Liste'),
(9, 89, NULL, 3, 'Alan'),
(10, 36, NULL, 3, 'Alan'),
(11, 37, NULL, 3, 'Alan'),
(12, 38, NULL, 3, 'Alan'),
(13, 39, NULL, 3, 'Alan'),
(14, 40, NULL, 3, 'Alan'),
(15, 31, NULL, 3, 'Alan'),
(16, 32, NULL, 3, 'Alan'),
(17, 10, NULL, 3, 'Alan'),
(38, 11, NULL, 2, 'Alan'),
(19, 104, NULL, 3, 'Alan'),
(20, 47, NULL, 3, 'Alan'),
(21, 48, NULL, 3, 'Alan'),
(22, 49, NULL, 3, 'Alan'),
(23, 67, NULL, 3, 'Alan'),
(24, 22, NULL, 3, 'Alan'),
(25, 23, NULL, 3, 'Alan'),
(26, 24, NULL, 3, 'Alan'),
(27, 26, NULL, 3, 'Alan'),
(28, 27, NULL, 3, 'Alan'),
(29, 97, NULL, 3, 'Alan'),
(30, 86, NULL, 3, 'Alan'),
(31, 43, NULL, 3, 'Alan'),
(32, 136, NULL, 2, 'Alan'),
(33, 8, NULL, 2, 'Alan'),
(34, 8, NULL, 2, 'Alan'),
(36, 7, NULL, 2, 'Alan'),
(37, 7, NULL, 2, 'Alan'),
(39, 15, NULL, 2, 'Alan'),
(40, 9, NULL, 2, 'Alan'),
(41, 9, NULL, 2, 'Alan'),
(42, 16, NULL, 2, 'Alan'),
(43, 16, NULL, 2, 'Alan'),
(44, 17, NULL, 2, 'Alan'),
(45, 4, NULL, 2, 'Alan'),
(46, 18, NULL, 2, 'Alan'),
(47, 18, NULL, 1, 'Alan'),
(48, 19, NULL, 2, 'Alan'),
(49, 19, NULL, 1, 'Alan'),
(50, 20, NULL, 2, 'Alan'),
(51, 20, NULL, 4, 'Alan'),
(52, 20, NULL, 4, 'Alan'),
(53, 20, NULL, 4, 'Alan'),
(54, 20, NULL, 4, 'Alan'),
(55, 20, NULL, 4, 'Alan'),
(56, 20, NULL, 4, 'Alan'),
(57, 20, NULL, 4, 'Alan'),
(58, 21, NULL, 2, 'Alan'),
(60, 22, 23, 3, 'Liste'),
(61, 25, NULL, 4, 'Alan'),
(62, 30, NULL, 4, 'Alan'),
(63, 30, NULL, 1, 'Alan'),
(64, 99, NULL, 3, 'Alan'),
(65, 99, NULL, 2, 'Alan');

-- --------------------------------------------------------

--
-- Table structure for table `bloklar_alti`
--

CREATE TABLE `bloklar_alti` (
  `altindex` int(11) NOT NULL,
  `alanindex` int(11) NOT NULL,
  `blokindex` int(11) NOT NULL,
  `sirasi` int(3) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bloklar_alti`
--

INSERT INTO `bloklar_alti` (`altindex`, `alanindex`, `blokindex`, `sirasi`) VALUES
(270, 92, 50, 4),
(269, 91, 50, 3),
(191, 2, 1, 2),
(190, 1, 1, 1),
(184, 12, 2, 3),
(183, 11, 2, 2),
(182, 10, 2, 1),
(186, 14, 2, 5),
(185, 13, 2, 4),
(181, 9, 3, 2),
(199, 25, 4, 4),
(198, 24, 4, 3),
(197, 23, 4, 2),
(196, 22, 4, 1),
(16, 30, 5, 1),
(17, 31, 5, 2),
(18, 34, 5, 3),
(19, 36, 5, 4),
(20, 37, 5, 5),
(264, 87, 48, 6),
(262, 86, 49, 1),
(261, 85, 48, 5),
(260, 84, 48, 4),
(259, 83, 48, 3),
(258, 82, 48, 2),
(257, 81, 48, 1),
(265, 76, 46, 6),
(255, 79, 46, 5),
(254, 78, 47, 2),
(253, 77, 47, 1),
(252, 75, 46, 4),
(251, 74, 46, 3),
(250, 73, 46, 2),
(249, 72, 46, 1),
(248, 5, 6, 2),
(247, 4, 6, 1),
(38, 188, 7, 1),
(39, 189, 7, 2),
(40, 190, 7, 3),
(41, 191, 7, 4),
(42, 194, 7, 5),
(43, 195, 7, 6),
(44, 197, 7, 7),
(45, 223, 7, 8),
(46, 199, 7, 9),
(47, 200, 7, 10),
(48, 202, 7, 11),
(51, 204, 7, 13),
(50, 203, 7, 13),
(52, 209, 7, 14),
(57, 54, 8, 1),
(54, 210, 7, 16),
(55, 213, 7, 17),
(56, 215, 7, 18),
(58, 55, 8, 2),
(59, 56, 8, 3),
(60, 52, 9, 1),
(61, 53, 9, 2),
(62, 86, 10, 1),
(63, 87, 10, 2),
(64, 57, 11, 1),
(65, 58, 11, 2),
(66, 88, 11, 3),
(67, 89, 11, 4),
(68, 90, 11, 5),
(69, 91, 11, 6),
(70, 92, 11, 7),
(71, 93, 11, 8),
(72, 94, 11, 9),
(73, 95, 12, 1),
(74, 96, 12, 2),
(75, 97, 12, 3),
(76, 98, 12, 4),
(77, 99, 12, 5),
(78, 100, 13, 1),
(79, 101, 13, 2),
(80, 102, 13, 3),
(81, 103, 13, 4),
(82, 104, 13, 5),
(83, 105, 13, 6),
(88, 114, 14, 1),
(85, 106, 13, 8),
(86, 112, 13, 9),
(87, 113, 13, 10),
(89, 115, 14, 2),
(90, 116, 14, 3),
(91, 117, 14, 4),
(92, 118, 14, 5),
(93, 119, 14, 6),
(94, 120, 14, 7),
(95, 121, 14, 8),
(96, 122, 14, 9),
(97, 123, 14, 10),
(98, 124, 14, 11),
(99, 125, 14, 12),
(374, 193, 65, 3),
(373, 191, 65, 2),
(372, 190, 65, 1),
(370, 189, 64, 7),
(369, 188, 64, 6),
(368, 187, 64, 5),
(367, 186, 64, 4),
(366, 185, 64, 3),
(365, 192, 64, 2),
(364, 184, 64, 1),
(363, 183, 15, 5),
(362, 182, 15, 4),
(361, 181, 15, 3),
(359, 180, 15, 2),
(358, 179, 15, 1),
(116, 69, 16, 1),
(117, 70, 16, 2),
(118, 48, 17, 1),
(119, 49, 17, 2),
(120, 50, 18, 1),
(121, 51, 18, 2),
(122, 136, 18, 3),
(123, 137, 18, 4),
(124, 138, 18, 5),
(125, 139, 18, 6),
(126, 140, 18, 7),
(127, 141, 18, 8),
(128, 142, 18, 9),
(129, 143, 18, 10),
(130, 59, 19, 1),
(131, 60, 19, 2),
(132, 61, 19, 3),
(133, 62, 19, 4),
(134, 63, 19, 5),
(135, 64, 19, 6),
(136, 65, 19, 7),
(137, 110, 20, 1),
(138, 111, 20, 2),
(139, 108, 21, 1),
(140, 109, 21, 2),
(141, 144, 22, 1),
(142, 145, 22, 2),
(314, 133, 24, 2),
(319, 132, 24, 1),
(320, 147, 25, 1),
(326, 159, 26, 2),
(325, 158, 26, 1),
(148, 84, 27, 1),
(149, 85, 27, 2),
(150, 38, 29, 1),
(151, 39, 29, 2),
(152, 40, 29, 3),
(153, 41, 29, 4),
(154, 42, 29, 5),
(155, 146, 30, 1),
(156, 147, 30, 2),
(157, 150, 30, 3),
(158, 151, 30, 4),
(159, 152, 30, 5),
(160, 155, 30, 6),
(161, 156, 30, 7),
(162, 157, 30, 8),
(166, 127, 31, 2),
(165, 126, 31, 1),
(167, 128, 31, 3),
(168, 129, 31, 4),
(169, 130, 31, 5),
(170, 131, 31, 6),
(171, 132, 31, 7),
(172, 133, 31, 8),
(173, 134, 31, 9),
(174, 135, 31, 10),
(175, 295, 32, 1),
(176, 296, 32, 2),
(177, 294, 17, 3),
(178, 297, 17, 4),
(179, 298, 17, 5),
(180, 8, 3, 4),
(187, 15, 2, 6),
(188, 16, 2, 7),
(189, 17, 2, 8),
(268, 90, 50, 2),
(267, 89, 50, 1),
(200, 26, 33, 1),
(201, 27, 33, 2),
(202, 28, 33, 3),
(203, 29, 33, 4),
(204, 30, 34, 1),
(205, 31, 34, 2),
(206, 32, 34, 3),
(207, 33, 34, 4),
(208, 34, 33, 5),
(209, 35, 33, 6),
(210, 36, 34, 5),
(211, 37, 34, 6),
(212, 39, 35, 1),
(213, 40, 35, 2),
(214, 6, 36, 1),
(215, 7, 36, 2),
(216, 41, 36, 3),
(217, 44, 36, 4),
(218, 42, 37, 1),
(219, 45, 37, 2),
(220, 43, 37, 3),
(221, 46, 37, 4),
(222, 47, 38, 1),
(223, 48, 38, 2),
(224, 49, 38, 3),
(225, 50, 38, 4),
(226, 51, 38, 5),
(227, 52, 39, 1),
(228, 53, 39, 2),
(229, 54, 39, 3),
(230, 55, 39, 4),
(231, 56, 40, 1),
(232, 57, 40, 2),
(233, 58, 40, 3),
(234, 59, 41, 1),
(235, 60, 41, 2),
(236, 61, 41, 3),
(237, 62, 41, 4),
(238, 63, 42, 1),
(239, 64, 42, 2),
(240, 65, 43, 1),
(241, 67, 44, 1),
(242, 68, 44, 2),
(243, 69, 44, 3),
(244, 66, 2, 9),
(245, 70, 45, 1),
(246, 71, 45, 2),
(266, 88, 2, 10),
(271, 93, 50, 5),
(272, 94, 50, 6),
(273, 95, 51, 1),
(274, 96, 51, 2),
(275, 97, 51, 3),
(276, 98, 51, 4),
(280, 100, 52, 2),
(279, 99, 52, 1),
(281, 101, 52, 3),
(282, 102, 52, 4),
(283, 103, 53, 1),
(284, 104, 53, 2),
(285, 105, 53, 3),
(286, 106, 53, 4),
(287, 107, 54, 1),
(288, 108, 54, 2),
(289, 109, 54, 3),
(290, 110, 54, 4),
(291, 111, 55, 1),
(292, 112, 55, 2),
(293, 113, 55, 3),
(294, 114, 55, 4),
(295, 115, 56, 1),
(296, 116, 56, 2),
(297, 117, 56, 3),
(298, 118, 56, 4),
(299, 119, 57, 1),
(300, 120, 57, 2),
(301, 121, 57, 3),
(302, 122, 57, 4),
(303, 123, 58, 1),
(305, 124, 58, 2),
(306, 125, 58, 3),
(307, 126, 58, 4),
(308, 127, 58, 5),
(309, 128, 58, 6),
(310, 130, 58, 7),
(311, 129, 59, 1),
(312, 131, 50, 7),
(315, 134, 24, 3),
(316, 135, 24, 4),
(317, 136, 24, 5),
(318, 137, 24, 6),
(321, 148, 25, 2),
(322, 149, 25, 3),
(323, 150, 25, 4),
(324, 151, 25, 5),
(327, 152, 26, 3),
(328, 154, 26, 5),
(329, 153, 26, 4),
(330, 155, 26, 6),
(331, 156, 26, 7),
(332, 157, 26, 8),
(333, 162, 61, 1),
(334, 163, 61, 2),
(335, 164, 61, 3),
(336, 165, 61, 4),
(337, 166, 61, 5),
(338, 167, 62, 1),
(339, 168, 62, 2),
(340, 169, 62, 3),
(341, 170, 62, 4),
(342, 171, 63, 1),
(343, 173, 58, 4),
(344, 174, 58, 2),
(345, 175, 58, 10),
(346, 138, 24, 7),
(347, 139, 24, 8),
(348, 140, 24, 9),
(349, 141, 24, 10),
(350, 142, 24, 11),
(351, 143, 24, 12),
(352, 144, 24, 13),
(353, 145, 24, 14),
(354, 146, 24, 15),
(355, 176, 25, 6),
(356, 177, 50, 8),
(357, 178, 50, 9);

-- --------------------------------------------------------

--
-- Table structure for table `bolgeler`
--

CREATE TABLE `bolgeler` (
  `index` int(3) NOT NULL,
  `bolgetanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bordroalti`
--

CREATE TABLE `bordroalti` (
  `altindex` int(3) NOT NULL,
  `bordroindex` int(3) NOT NULL,
  `cekindex` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bordrolar`
--

CREATE TABLE `bordrolar` (
  `bordroindex` int(3) NOT NULL,
  `bordrotarih` date NOT NULL,
  `turu` varchar(50) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `hesapkodu` varchar(50) NOT NULL,
  `hesaptanimi` varchar(100) NOT NULL,
  `donem` int(3) DEFAULT NULL,
  `bordrokodu` varchar(20) NOT NULL,
  `aciklama` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `carigruplari`
--

CREATE TABLE `carigruplari` (
  `CariGrubu_index` int(2) NOT NULL,
  `CariGrubuKodu` varchar(40) NOT NULL,
  `CariGrubuTanimi` varchar(100) NOT NULL,
  `kar_marji` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carigruplari`
--

INSERT INTO `carigruplari` (`CariGrubu_index`, `CariGrubuKodu`, `CariGrubuTanimi`, `kar_marji`) VALUES
(1, '00001', 'KUAFÖR', NULL),
(2, '00002', 'TEDARÝKÇÝ', NULL),
(3, '00003', 'BANKA HESABI', NULL),
(4, '00004', 'DÝÐER', NULL),
(5, '00005', 'MÜÞTERÝ', NULL),
(6, '00006', 'GÜZELLÝK', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `carihesaphareketleri`
--

CREATE TABLE `carihesaphareketleri` (
  `index` int(9) NOT NULL,
  `kod` varchar(100) DEFAULT NULL,
  `islem_tanimi` varchar(200) DEFAULT NULL,
  `tutari` varchar(10) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `Cari_index` int(3) DEFAULT NULL,
  `HareketTuru` varchar(50) NOT NULL,
  `tutarint` int(7) DEFAULT 0,
  `OdemeTuru` varchar(50) DEFAULT 'Nakit',
  `CariTanimi` varchar(100) DEFAULT NULL,
  `neint` varchar(10) DEFAULT '0',
  `tutars` varchar(15) DEFAULT NULL,
  `uretimdonem_index` int(11) DEFAULT NULL,
  `satisfatura_index` int(3) DEFAULT NULL,
  `belgeno` varchar(50) DEFAULT NULL,
  `alisfatura_index` int(3) DEFAULT NULL,
  `irsaliye_index` int(3) DEFAULT NULL,
  `VadeTarihi` date DEFAULT NULL,
  `borc` varchar(10) DEFAULT NULL,
  `alacak` varchar(10) DEFAULT NULL,
  `olusturan` varchar(50) DEFAULT NULL,
  `Personel_index` int(3) DEFAULT NULL,
  `hareket_index` int(3) DEFAULT NULL,
  `birimi` varchar(20) DEFAULT NULL,
  `aciklama` varchar(150) DEFAULT NULL,
  `iskonto` varchar(7) DEFAULT NULL,
  `stok_index` int(4) DEFAULT NULL,
  `kasaislemindex` int(3) DEFAULT NULL,
  `bankaislemindex` int(3) DEFAULT NULL,
  `cekislemindex` int(3) DEFAULT NULL,
  `kredikartiislemindex` int(3) DEFAULT NULL,
  `maliyetint` varchar(10) DEFAULT '0',
  `gelirgrubu` varchar(50) DEFAULT NULL,
  `gidergrubu` varchar(50) DEFAULT NULL,
  `katsayi` varchar(10) DEFAULT '1',
  `fatindex` int(3) DEFAULT NULL,
  `kasatanimi` varchar(50) DEFAULT NULL,
  `primint` varchar(10) DEFAULT '0',
  `islemiyapan` varchar(100) DEFAULT NULL,
  `postanimi` varchar(100) DEFAULT NULL,
  `bolge` varchar(100) DEFAULT NULL,
  `joule` varchar(50) DEFAULT NULL,
  `aralik` varchar(50) DEFAULT NULL,
  `contor` varchar(50) DEFAULT NULL,
  `bonusint` varchar(3) DEFAULT '0',
  `personelislemindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `carikontaklari`
--

CREATE TABLE `carikontaklari` (
  `kontakindex` int(3) NOT NULL,
  `kontakadi` varchar(100) NOT NULL,
  `kontakunvani` varchar(70) DEFAULT NULL,
  `kontakdepartman` varchar(70) DEFAULT NULL,
  `kontakeposta` varchar(100) DEFAULT NULL,
  `kontakgsm` varchar(20) DEFAULT NULL,
  `kontakotomofisid` varchar(20) DEFAULT NULL,
  `kontaksifre` varchar(20) DEFAULT NULL,
  `kontaktel` varchar(20) DEFAULT NULL,
  `cariindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cariler`
--

CREATE TABLE `cariler` (
  `cariindex` int(3) NOT NULL,
  `carikodu` varchar(20) NOT NULL,
  `caritanimi` varchar(100) NOT NULL,
  `kayittarihi` date NOT NULL,
  `vergidairesi` varchar(50) DEFAULT NULL,
  `vergino` varchar(50) DEFAULT NULL,
  `vergiadresi` varchar(200) DEFAULT NULL,
  `yetkili` varchar(100) DEFAULT NULL,
  `yetkiligsm` varchar(30) DEFAULT NULL,
  `caritel` varchar(45) DEFAULT NULL,
  `caritel2` varchar(40) DEFAULT NULL,
  `carifaks` varchar(30) DEFAULT NULL,
  `iban1` varchar(50) DEFAULT NULL,
  `banka1` varchar(100) DEFAULT NULL,
  `iban2` varchar(50) DEFAULT NULL,
  `banka2` varchar(100) DEFAULT NULL,
  `carituru` varchar(30) DEFAULT NULL,
  `carigrubu` varchar(50) DEFAULT NULL,
  `sehir` varchar(50) DEFAULT NULL,
  `ilce` varchar(50) DEFAULT NULL,
  `adres` text DEFAULT NULL,
  `yetkili2` varchar(100) DEFAULT NULL,
  `eposta` varchar(100) DEFAULT NULL,
  `iskonto` varchar(10) DEFAULT NULL,
  `kdv` varchar(30) DEFAULT NULL,
  `odemesekli` varchar(40) DEFAULT NULL,
  `plasiyerkodu` varchar(50) DEFAULT NULL,
  `valororani` varchar(10) DEFAULT NULL,
  `dogumgunu` date DEFAULT NULL,
  `bonus` varchar(10) DEFAULT NULL,
  `aciklama` varchar(250) DEFAULT NULL,
  `aciklama2` varchar(250) DEFAULT NULL,
  `fiyatliste` varchar(30) DEFAULT NULL,
  `kredilimiti` varchar(10) DEFAULT NULL,
  `odemegunu` int(3) DEFAULT NULL,
  `cinsiyet` varchar(10) DEFAULT NULL,
  `boy` varchar(10) DEFAULT NULL,
  `agirlik` varchar(10) DEFAULT NULL,
  `kasagirligi` varchar(10) DEFAULT NULL,
  `vucutyagagirligi` varchar(10) DEFAULT NULL,
  `topvucutsuyu` varchar(10) DEFAULT NULL,
  `yagsizagirlik` varchar(10) DEFAULT NULL,
  `bmi` varchar(10) DEFAULT NULL,
  `pbf` varchar(10) DEFAULT NULL,
  `whr` varchar(10) DEFAULT NULL,
  `bmr` varchar(10) DEFAULT NULL,
  `kasdegisim` varchar(10) DEFAULT NULL,
  `yagdegisim` varchar(10) DEFAULT NULL,
  `kalori` varchar(10) DEFAULT NULL,
  `olcumtarihi` date DEFAULT NULL,
  `deger1` varchar(100) DEFAULT NULL,
  `deger2` varchar(100) DEFAULT NULL,
  `deger3` varchar(100) DEFAULT NULL,
  `deger4` varchar(100) DEFAULT NULL,
  `aramatarihi` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ceksenet`
--

CREATE TABLE `ceksenet` (
  `cekindex` int(3) NOT NULL,
  `cekturu` varchar(50) NOT NULL,
  `carikodu` varchar(50) NOT NULL,
  `tutari` varchar(10) NOT NULL,
  `parabirimi` varchar(10) NOT NULL,
  `kayittarihi` date NOT NULL,
  `odemetarihi` date NOT NULL,
  `cariadi` varchar(100) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `donem` year(4) DEFAULT NULL,
  `durumu` varchar(30) DEFAULT 'Beklemede',
  `cekkodu` varchar(20) DEFAULT NULL,
  `bankasi` varchar(100) DEFAULT NULL,
  `deviredilenkodu` varchar(20) DEFAULT NULL,
  `deviredilenhesap` varchar(100) DEFAULT NULL,
  `devirtarihi` date DEFAULT NULL,
  `cekno` varchar(30) DEFAULT NULL,
  `ceksahibi` varchar(100) DEFAULT NULL,
  `tutarint` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cevrimiciler`
--

CREATE TABLE `cevrimiciler` (
  `cevrimindex` int(3) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `cevrimzamani` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dagitimlar`
--

CREATE TABLE `dagitimlar` (
  `index` int(3) NOT NULL,
  `islem_index` int(3) DEFAULT NULL,
  `dagitimtoplami` varchar(8) NOT NULL DEFAULT '0',
  `alanislem_index` int(5) DEFAULT NULL,
  `katsayi` varchar(10) DEFAULT '1000'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `demirbaslar`
--

CREATE TABLE `demirbaslar` (
  `index` int(3) NOT NULL,
  `demirbasno` varchar(20) NOT NULL,
  `demirbasadi` varchar(100) NOT NULL,
  `demirbasturu` varchar(50) NOT NULL,
  `binasi` varchar(50) NOT NULL,
  `odasi` varchar(50) DEFAULT NULL,
  `alimtarihi` date DEFAULT NULL,
  `alimfiyati` varchar(10) DEFAULT NULL,
  `alimkdv` varchar(5) DEFAULT NULL,
  `alimbirimi` varchar(10) DEFAULT NULL,
  `barkodno` varchar(20) DEFAULT NULL,
  `durumu` varchar(50) DEFAULT NULL,
  `faturano` varchar(20) DEFAULT NULL,
  `faturatarihi` date DEFAULT NULL,
  `omur` varchar(10) DEFAULT NULL,
  `garantibas` date DEFAULT NULL,
  `garantibit` date DEFAULT NULL,
  `marka` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `serino` varchar(50) DEFAULT NULL,
  `ozellikleri` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `departmanlar`
--

CREATE TABLE `departmanlar` (
  `index` int(3) NOT NULL,
  `tanimi` varchar(100) NOT NULL,
  `plasiyerindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departmanlar`
--

INSERT INTO `departmanlar` (`index`, `tanimi`, `plasiyerindex`) VALUES
(39, 'CÝLT BAKIM 2', NULL),
(38, 'HEYKELTRAÞ', NULL),
(37, 'CÝLT BAKIMI', NULL),
(36, 'MASAJ', NULL),
(35, 'MEDÝKAL AYAK', NULL),
(34, 'MELTEM ÇETÝN', NULL),
(33, 'LPG', NULL),
(32, 'LAZER ODASI (2)', NULL),
(31, 'LAZER ODASI (1)', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dersler`
--

CREATE TABLE `dersler` (
  `index_dersler` int(6) NOT NULL,
  `derskodu` varchar(45) DEFAULT NULL,
  `derstanimi` varchar(45) NOT NULL,
  `z_s` varchar(45) NOT NULL,
  `t` varchar(45) NOT NULL,
  `uygulama` varchar(45) NOT NULL,
  `donem` varchar(45) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `destek`
--

CREATE TABLE `destek` (
  `destekindex` int(11) NOT NULL,
  `kayittarihi` date NOT NULL,
  `talep` varchar(250) NOT NULL,
  `musteriadi` varchar(100) DEFAULT NULL,
  `kayiteden` varchar(100) DEFAULT NULL,
  `islemturu` varchar(100) DEFAULT NULL,
  `konu` varchar(100) DEFAULT NULL,
  `yapilanislem` varchar(250) DEFAULT NULL,
  `yapan` varchar(100) DEFAULT NULL,
  `ytarihi` date DEFAULT NULL,
  `sonuc` varchar(250) DEFAULT NULL,
  `durumu` varchar(100) DEFAULT NULL,
  `destekkodu` varchar(25) DEFAULT NULL,
  `urun` varchar(100) DEFAULT NULL,
  `serino` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `donemler`
--

CREATE TABLE `donemler` (
  `donemindex` int(3) NOT NULL,
  `donemkodu` varchar(20) NOT NULL,
  `yili` year(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donemler`
--

INSERT INTO `donemler` (`donemindex`, `donemkodu`, `yili`) VALUES
(1, '2020', 2020);

-- --------------------------------------------------------

--
-- Table structure for table `doviz_tanimlari`
--

CREATE TABLE `doviz_tanimlari` (
  `doviz_kodu` int(2) NOT NULL,
  `doviz` varchar(30) NOT NULL,
  `dovizci` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doviz_tanimlari`
--

INSERT INTO `doviz_tanimlari` (`doviz_kodu`, `doviz`, `dovizci`) VALUES
(1, '1 ABD DOLARI', 'USD'),
(4, '1 EURO', 'EUR'),
(5, '1 ÝNGÝLÝZ STERLÝNÝ', 'GBP'),
(19, '1 TÜRK LÝRASÝ', 'TL');

-- --------------------------------------------------------

--
-- Table structure for table `duyurular`
--

CREATE TABLE `duyurular` (
  `duyurindex` int(3) NOT NULL,
  `duyuruaciklamasi` varchar(250) NOT NULL,
  `kayittarihi` date NOT NULL,
  `aktif` varchar(20) DEFAULT NULL,
  `konum` varchar(20) DEFAULT NULL,
  `gorunsun` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ektablo`
--

CREATE TABLE `ektablo` (
  `ektabloindex` int(3) NOT NULL,
  `hareketindex` int(3) DEFAULT NULL,
  `joule` varchar(20) DEFAULT NULL,
  `pulse` varchar(20) DEFAULT NULL,
  `radyofrekans` varchar(20) DEFAULT NULL,
  `lazerbasligi` varchar(20) DEFAULT NULL,
  `aciklama` text DEFAULT NULL,
  `sikayeti` text DEFAULT NULL,
  `hikayesi` text DEFAULT NULL,
  `muayene` text DEFAULT NULL,
  `tetkik` text DEFAULT NULL,
  `tani` text DEFAULT NULL,
  `tedavi` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ektablo`
--

INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(1, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 15, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 16, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 28, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 29, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 30, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 32, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 33, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 34, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 37, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 38, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 39, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 40, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 41, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 42, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 44, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 45, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 46, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 47, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 48, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(45, 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 51, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 52, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 53, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 56, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(50, 57, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 58, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 59, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 60, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 61, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 63, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(56, 64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(57, 66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(58, 67, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 68, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(60, 70, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(61, 71, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 73, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 74, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 75, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(65, 77, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(66, 78, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 79, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 80, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(69, 81, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 82, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(71, 83, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72, 84, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 85, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 87, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(75, 88, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(76, 90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(77, 91, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(78, 92, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(79, 93, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(80, 94, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(81, 97, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(82, 98, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(83, 99, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(84, 100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(85, 101, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(86, 102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(87, 103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(88, 104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(89, 105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(90, 106, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(91, 107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(92, 108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(93, 111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(94, 112, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(95, 113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(97, 115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(98, 116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(100, 118, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(101, 120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(102, 121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(103, 122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(104, 123, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(105, 124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(106, 125, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(107, 126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(108, 127, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(109, 128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(110, 129, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(111, 131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(112, 132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(113, 133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(114, 136, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(115, 137, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 138, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, 139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(118, 140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(119, 142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(120, 143, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(121, 145, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(122, 146, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(123, 147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(124, 148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(125, 149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(126, 150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(127, 151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(128, 152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(129, 153, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(130, 155, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(131, 156, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(132, 157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(133, 159, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(134, 160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(135, 161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(136, 163, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(137, 164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(138, 165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(139, 166, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(140, 167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(141, 168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(142, 169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(143, 170, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(144, 171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(145, 172, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(146, 173, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(147, 174, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(148, 175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(149, 176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(150, 178, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(151, 179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(152, 180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(153, 181, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(154, 182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(155, 183, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(156, 184, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(157, 185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(158, 186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(159, 187, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(160, 188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(161, 189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(162, 191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(163, 192, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(164, 194, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(165, 196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(166, 198, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(167, 199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(168, 200, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(169, 201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(170, 202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(171, 203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(172, 204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(173, 205, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(174, 206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(175, 208, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(176, 209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(177, 210, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(178, 213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(179, 214, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(180, 215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(181, 216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(182, 217, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(183, 218, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(184, 219, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(185, 220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(186, 221, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(187, 222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(188, 223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(189, 224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(190, 225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(191, 226, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(192, 227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(193, 228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(194, 229, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(195, 230, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(196, 231, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(197, 232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(198, 233, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(199, 234, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(200, 235, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(201, 236, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(202, 237, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(203, 239, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(204, 240, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(205, 241, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(206, 243, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(207, 244, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(208, 245, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(209, 246, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(210, 247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(211, 248, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(212, 249, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(213, 250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(214, 251, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(215, 252, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(216, 253, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(217, 254, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(218, 255, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(219, 256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(220, 258, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(221, 259, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(222, 260, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(223, 261, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(224, 262, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(225, 263, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(226, 264, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(227, 265, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(228, 266, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(229, 267, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(230, 268, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(231, 269, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(232, 270, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(233, 271, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(234, 272, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(235, 273, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(236, 274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(237, 275, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(238, 276, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(239, 277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(240, 280, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(241, 281, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(242, 282, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(243, 283, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(244, 284, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(245, 285, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(246, 286, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(247, 287, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(248, 288, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(249, 289, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(250, 290, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(251, 292, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(252, 293, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(253, 294, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(254, 295, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(255, 296, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(256, 297, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(257, 298, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(258, 299, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(259, 300, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(260, 301, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(261, 302, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(262, 303, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(263, 304, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(264, 305, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(265, 308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(266, 309, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(267, 310, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(268, 311, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(269, 312, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(270, 314, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(271, 315, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(272, 316, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(273, 317, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(274, 319, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(275, 320, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(276, 321, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(277, 323, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(278, 324, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(279, 325, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(280, 326, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(281, 327, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(282, 328, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(283, 330, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(284, 332, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(285, 333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(286, 334, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(287, 335, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(288, 337, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(289, 338, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(290, 339, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(291, 340, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(292, 341, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(293, 342, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(294, 343, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(295, 344, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(296, 345, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(297, 347, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(298, 348, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(299, 349, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(300, 350, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(301, 352, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(302, 353, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(303, 354, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(304, 355, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(305, 360, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(306, 361, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(307, 363, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(308, 364, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(309, 366, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(310, 367, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(311, 368, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(312, 369, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(313, 371, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(314, 372, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(315, 373, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(316, 374, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(317, 376, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(318, 377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(319, 379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(320, 380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(321, 381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(322, 382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(323, 388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(324, 389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(325, 390, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(326, 391, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(327, 392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(328, 394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(329, 396, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(330, 397, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(331, 398, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(332, 400, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(333, 401, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(334, 402, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(335, 403, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(336, 404, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(337, 405, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(338, 406, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(339, 408, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(340, 409, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(341, 410, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(342, 411, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(343, 412, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(344, 413, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(345, 414, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(346, 415, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(347, 416, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(348, 418, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(349, 420, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(350, 421, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(351, 423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(352, 424, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(353, 425, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(354, 427, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(355, 429, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(356, 430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(357, 431, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(358, 434, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(359, 435, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(360, 436, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(361, 437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(362, 438, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(363, 439, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(364, 440, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(365, 441, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(366, 442, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(367, 443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(368, 444, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(369, 445, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(370, 447, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(371, 448, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(372, 449, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(373, 450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(374, 452, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(375, 453, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(376, 454, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(377, 455, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(378, 456, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(379, 458, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(380, 459, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(381, 460, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(382, 461, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(383, 462, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(384, 464, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(385, 465, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(386, 466, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(387, 467, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(388, 468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(389, 469, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(390, 470, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(391, 472, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(392, 473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(393, 474, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(394, 475, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(395, 477, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(396, 478, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(397, 479, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(398, 480, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(399, 481, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(400, 482, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(401, 483, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(402, 484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(403, 485, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(404, 486, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(405, 487, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(406, 488, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(407, 490, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(408, 494, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(409, 495, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(410, 496, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(411, 498, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(412, 499, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(413, 500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(414, 501, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(415, 502, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(416, 504, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(417, 509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(418, 510, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(419, 511, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(420, 513, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(421, 514, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(422, 516, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(423, 517, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(424, 518, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(425, 519, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(426, 520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(427, 521, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(428, 522, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(429, 523, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(430, 524, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(431, 525, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(432, 526, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(433, 527, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(434, 528, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(435, 530, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(436, 532, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(437, 533, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(438, 534, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(439, 535, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(440, 536, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(441, 537, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(442, 539, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(443, 540, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(444, 541, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(445, 542, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(446, 543, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(447, 544, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(448, 545, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(449, 546, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(450, 547, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(451, 548, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(452, 549, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(453, 550, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(454, 552, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(455, 553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(456, 554, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(457, 555, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(458, 556, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(459, 557, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(460, 559, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(461, 560, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(462, 561, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(463, 562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(464, 563, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(465, 564, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(466, 565, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(467, 566, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(468, 567, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(469, 568, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(470, 569, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(471, 570, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(472, 571, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(473, 572, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(474, 574, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(475, 576, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(476, 577, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(477, 578, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(478, 580, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(479, 581, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(480, 582, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(481, 583, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(482, 584, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(483, 585, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(484, 586, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(485, 588, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(486, 589, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(487, 590, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(488, 591, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(489, 592, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(490, 594, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(491, 595, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(492, 596, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(493, 597, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(494, 598, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(495, 599, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(496, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(497, 601, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(498, 603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(499, 604, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(500, 605, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(501, 607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(502, 608, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(503, 609, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(504, 610, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(505, 611, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(506, 612, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(507, 614, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(508, 615, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(509, 616, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(510, 617, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(511, 618, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(512, 619, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(513, 621, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(514, 625, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(515, 626, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(516, 628, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(517, 629, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(518, 630, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(519, 631, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(520, 632, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(521, 633, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(522, 634, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(523, 636, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(524, 638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(525, 639, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(526, 640, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(527, 640, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(528, 642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(529, 643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(530, 644, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(531, 646, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(532, 647, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(533, 648, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(534, 649, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(535, 651, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(536, 652, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(537, 654, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(538, 655, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(539, 656, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(540, 656, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(541, 659, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(542, 660, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(543, 661, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(544, 662, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(545, 663, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(546, 664, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(547, 665, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(548, 666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(549, 667, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(550, 668, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(551, 669, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(552, 670, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(553, 671, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(554, 674, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(555, 675, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(556, 676, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(557, 677, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(558, 678, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(559, 679, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(560, 680, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(561, 681, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(562, 683, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(563, 684, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(564, 685, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(565, 686, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(566, 687, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(567, 689, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(568, 690, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(569, 691, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(570, 692, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(571, 693, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(572, 694, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(573, 695, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(574, 696, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(575, 697, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(576, 698, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(577, 702, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(578, 703, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(579, 704, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(580, 705, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(581, 706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(582, 707, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(583, 708, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(584, 710, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(585, 711, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(586, 712, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(587, 713, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(588, 716, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(589, 718, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(590, 719, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(591, 720, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(592, 721, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(593, 722, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(594, 724, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(595, 725, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(596, 726, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(597, 727, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(598, 729, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(599, 730, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(600, 731, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(601, 732, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(602, 733, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(603, 734, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(604, 735, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(605, 736, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(606, 737, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(607, 739, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(608, 741, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(609, 742, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(610, 743, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(611, 745, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(612, 746, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(613, 747, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(614, 748, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(615, 749, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(616, 750, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(617, 751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(618, 752, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(619, 754, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(620, 755, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(621, 756, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(622, 757, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(623, 759, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(624, 760, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(625, 761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(626, 762, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(627, 763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(628, 764, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(629, 765, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(630, 766, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(631, 768, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(632, 769, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(633, 770, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(634, 771, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(635, 774, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(636, 775, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(637, 776, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(638, 777, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(639, 778, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(640, 779, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(641, 780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(642, 781, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(643, 782, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(644, 785, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(645, 786, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(646, 788, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(647, 789, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(648, 790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(649, 791, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(650, 792, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(651, 793, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(652, 794, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(653, 796, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(654, 797, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(655, 798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(656, 799, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(657, 800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(658, 801, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(659, 802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(660, 803, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(661, 804, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(662, 806, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(663, 807, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(664, 808, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(665, 809, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(666, 810, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(667, 810, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(668, 812, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(669, 813, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(670, 814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(671, 815, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(672, 816, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(673, 818, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(674, 819, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(675, 820, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(676, 821, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(677, 822, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(678, 823, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(679, 824, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(680, 825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(681, 826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(682, 827, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(683, 828, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(684, 830, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(685, 831, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(686, 832, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(687, 833, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(688, 834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(689, 835, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(690, 836, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(691, 837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(692, 838, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(693, 839, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(694, 840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(695, 841, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(696, 843, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(697, 844, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(698, 845, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(699, 846, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(700, 848, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(701, 849, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(702, 851, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(703, 852, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(704, 853, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(705, 855, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(706, 856, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(707, 857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(708, 858, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(709, 860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(710, 861, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(711, 862, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(712, 863, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(713, 864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(714, 865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(715, 866, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(716, 867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(717, 868, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(718, 869, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(719, 870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(720, 871, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(721, 872, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(722, 873, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(723, 875, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(724, 876, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(725, 877, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(726, 878, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(727, 879, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(728, 880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(729, 881, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(730, 882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(731, 883, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(732, 884, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(733, 885, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(734, 886, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(735, 887, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(736, 888, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(737, 889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(738, 890, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(739, 891, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(740, 892, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(741, 893, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(742, 895, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(743, 896, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(744, 897, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(745, 898, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(746, 900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(747, 901, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(748, 902, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(749, 903, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(750, 904, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(751, 905, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(752, 907, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(753, 908, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(754, 909, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(755, 910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(756, 911, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(757, 912, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(758, 913, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(759, 914, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(760, 915, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(761, 916, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(762, 917, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(763, 919, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(764, 921, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(765, 922, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(766, 924, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(767, 925, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(768, 926, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(769, 927, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(770, 928, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(771, 929, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(772, 930, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(773, 932, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(774, 933, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(775, 934, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(776, 935, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(777, 937, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(778, 938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(779, 941, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(780, 942, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(781, 943, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(782, 944, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(783, 945, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(784, 946, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(785, 947, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(786, 948, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(787, 950, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(788, 951, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(789, 952, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(790, 953, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(791, 954, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(792, 955, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(793, 956, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(794, 958, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(795, 959, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(796, 962, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(797, 963, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(798, 965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(799, 966, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(800, 967, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(801, 968, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(802, 970, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(803, 971, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(804, 972, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(805, 974, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(806, 975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(807, 976, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(808, 977, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(809, 978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(810, 980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(811, 981, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(812, 982, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(813, 983, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(814, 985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(815, 986, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(816, 987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(817, 988, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(818, 990, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(819, 991, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(820, 992, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(821, 993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(822, 994, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(823, 995, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(824, 996, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(825, 997, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(826, 1000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(827, 1001, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(828, 1002, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(829, 1003, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(830, 1004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(831, 1005, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(832, 1006, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(833, 1007, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(834, 1009, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(835, 1011, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(836, 1012, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(837, 1013, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(838, 1014, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(839, 1015, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(840, 1016, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(841, 1017, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(842, 1018, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(843, 1019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(844, 1022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(845, 1023, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(846, 1024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(847, 1025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(848, 1026, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(849, 1027, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(850, 1028, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(851, 1029, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(852, 1031, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(853, 1032, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(854, 1033, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(855, 1034, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(856, 1036, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(857, 1037, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(858, 1038, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(859, 1039, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(860, 1040, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(861, 1041, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(862, 1042, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(863, 1043, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(864, 1044, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(865, 1045, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(866, 1046, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(867, 1047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(868, 1048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(869, 1049, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(870, 1050, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(871, 1051, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(872, 1052, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(873, 1053, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(874, 1054, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(875, 1055, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(876, 1056, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(877, 1057, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(878, 1058, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(879, 1059, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(880, 1060, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(881, 1061, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(882, 1063, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(883, 1064, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(884, 1065, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(885, 1066, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(886, 1067, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(887, 1069, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(888, 1070, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(889, 1069, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(890, 1073, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(891, 1074, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(892, 1075, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(893, 1076, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(894, 1077, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(895, 1078, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(896, 1080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(897, 1082, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(898, 1083, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(899, 1084, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(900, 1085, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(901, 1086, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(902, 1087, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(903, 1088, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(904, 1090, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(905, 1091, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(906, 1092, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(907, 1093, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(908, 1094, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(909, 1095, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(910, 1096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(911, 1097, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(912, 1098, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(913, 1099, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(914, 1100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(915, 1102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(916, 1103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(917, 1104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(918, 1105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(919, 1107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(920, 1108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(921, 1109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(922, 1110, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(923, 1112, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(924, 1113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(925, 1114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(926, 1115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(927, 1116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(928, 1117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(929, 1119, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(930, 1120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(931, 1121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(932, 1122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(933, 1124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(934, 1125, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(935, 1126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(936, 1127, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(937, 1128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(938, 1129, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(939, 1130, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(940, 1131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(941, 1132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(942, 1133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(943, 1134, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(944, 1135, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(945, 1136, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(946, 1137, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(947, 1138, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(948, 1139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(949, 1140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(950, 1141, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(951, 1142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(952, 1145, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(953, 1147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(954, 1148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(955, 1149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(956, 1150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(957, 1151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(958, 1152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(959, 1153, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(960, 1155, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(961, 1156, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(962, 1157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(963, 1158, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(964, 1159, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(965, 1160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(966, 1161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(967, 1162, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(968, 1163, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(969, 1164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(970, 1165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(971, 1167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(972, 1168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(973, 1169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(974, 1170, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(975, 1171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(976, 1173, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(977, 1174, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(978, 1175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(979, 1176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(980, 1177, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(981, 1178, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(982, 1179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(983, 1179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(984, 1181, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(985, 1181, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(986, 1183, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(987, 1184, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(988, 1185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(989, 1186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(990, 1187, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(991, 1188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(992, 1189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(993, 1190, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(994, 1191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(995, 1192, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(996, 1193, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(997, 1194, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(998, 1195, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(999, 1196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1000, 1197, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1001, 1199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1002, 1199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1003, 1201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1004, 1201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1005, 1202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1006, 1203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1007, 1204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1008, 1206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1009, 1209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1010, 1210, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1011, 1212, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1012, 1213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1013, 1214, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1014, 1215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1015, 1216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1016, 1219, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1017, 1220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1018, 1221, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1019, 1222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1020, 1223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1021, 1224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1022, 1225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1023, 1227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1024, 1228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1025, 1229, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1026, 1231, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1027, 1232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1028, 1233, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1029, 1234, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1030, 1235, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1031, 1236, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1032, 1237, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1033, 1238, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1034, 1239, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1035, 1241, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1036, 1242, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1037, 1243, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1038, 1244, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1039, 1245, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1040, 1246, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1041, 1247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1042, 1248, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1043, 1249, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1044, 1250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1045, 1251, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1046, 1252, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1047, 1253, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1048, 1255, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1049, 1256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1050, 1258, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1051, 1259, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1052, 1260, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1053, 1261, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1054, 1262, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1055, 1263, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1056, 1264, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1057, 1265, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1058, 1267, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1059, 1268, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1060, 1269, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1061, 1270, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1062, 1273, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1063, 1274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1064, 1276, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1065, 1277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1066, 1278, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1067, 1279, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1068, 1280, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1069, 1281, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1070, 1282, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1071, 1284, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1072, 1285, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1073, 1286, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1074, 1287, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1075, 1288, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1076, 1289, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1077, 1290, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1078, 1291, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1079, 1292, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1080, 1293, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1081, 1294, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1082, 1295, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1083, 1296, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1084, 1299, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1085, 1300, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1086, 1303, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1087, 1304, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1088, 1305, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1089, 1306, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1090, 1306, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1091, 1308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1092, 1309, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1093, 1308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1094, 1311, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1095, 1312, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1096, 1313, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1097, 1315, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1098, 1316, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1099, 1317, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1100, 1318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1101, 1318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1102, 1320, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1103, 1321, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1104, 1322, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1105, 1324, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1106, 1328, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1107, 1329, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1108, 1330, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1109, 1331, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1110, 1332, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1111, 1333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1112, 1332, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1113, 1334, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1114, 1335, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1115, 1337, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1116, 1338, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1117, 1339, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1118, 1340, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1119, 1342, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1120, 1343, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1121, 1342, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1122, 1345, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1123, 1346, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1124, 1347, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1125, 1348, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1126, 1349, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1127, 1351, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1128, 1352, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1129, 1354, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1130, 1355, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1131, 1356, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1132, 1357, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1133, 1358, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1134, 1360, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1135, 1361, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1136, 1362, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1137, 1363, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1138, 1364, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1139, 1365, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1140, 1366, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1141, 1367, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1142, 1368, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1143, 1369, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1144, 1370, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1145, 1371, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1146, 1374, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1147, 1375, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1148, 1377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1149, 1378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1150, 1379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1151, 1380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1152, 1381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1153, 1382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1154, 1383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1155, 1384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1156, 1385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1157, 1386, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1158, 1387, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1159, 1388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1160, 1389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1161, 1390, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1162, 1392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1163, 1393, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1164, 1394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1165, 1395, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1166, 1396, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1167, 1397, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1168, 1398, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1169, 1400, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1170, 1401, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1171, 1402, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1172, 1403, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1173, 1404, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1174, 1405, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1175, 1406, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1176, 1407, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1177, 1408, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1178, 1410, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1179, 1411, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1180, 1412, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1181, 1413, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1182, 1413, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1183, 1415, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1184, 1416, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1185, 1418, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1186, 1419, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1187, 1420, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1188, 1421, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1189, 1423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1190, 1425, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1191, 1426, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1192, 1423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1193, 1428, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1194, 1429, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1195, 1430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1196, 1432, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1197, 1433, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1198, 1434, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1199, 1437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1200, 1438, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1201, 1437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1202, 1438, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1203, 1441, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1204, 1442, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1205, 1443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1206, 1444, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1207, 1441, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1208, 1443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1209, 1445, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1210, 1448, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1211, 1449, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1212, 1450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1213, 1450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1214, 1451, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1215, 1453, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1216, 1455, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1217, 1456, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1218, 1446, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1219, 1457, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1220, 1458, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1221, 1459, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1222, 1461, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1223, 1460, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1224, 1447, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1225, 1463, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1226, 1462, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1227, 1465, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1228, 1466, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1229, 1467, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1230, 1468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1231, 1468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1232, 1469, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1233, 1470, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1234, 1472, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1235, 1473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1236, 1473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1237, 1475, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1238, 1476, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1239, 1478, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1240, 1480, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1241, 1481, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1242, 1481, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1243, 1484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1244, 1484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1245, 1486, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1246, 1487, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1247, 1488, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1248, 1489, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1249, 1490, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1250, 1492, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1251, 1491, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1252, 1487, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1253, 1494, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1254, 1495, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1255, 1497, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1256, 1493, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1257, 1498, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1258, 1499, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1259, 1500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1260, 1501, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1261, 1501, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1262, 1502, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1263, 1504, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1264, 1505, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1265, 1505, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1266, 1506, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1267, 1508, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1268, 1509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1269, 1509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1270, 1511, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1271, 1512, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1272, 1514, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1273, 1515, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1274, 1516, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1275, 1513, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1276, 1518, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1277, 1520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1278, 1520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1279, 1522, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1280, 1523, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1281, 1524, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1282, 1525, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1283, 1526, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1284, 1527, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1285, 1529, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1286, 1529, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1287, 1530, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1288, 1531, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1289, 1532, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1290, 1534, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1291, 1535, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1292, 1536, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1293, 1537, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1294, 1538, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1295, 1539, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1296, 1540, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1297, 1541, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1298, 1542, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1299, 1543, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1300, 1545, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1301, 1546, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1302, 1547, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1303, 1548, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(1304, 1549, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1305, 1551, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1306, 1550, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1307, 1553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1308, 1553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1309, 1555, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1310, 1556, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1311, 1557, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1312, 1558, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1313, 1559, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1314, 1561, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1315, 1562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1316, 1562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1317, 1563, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1318, 1565, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1319, 1567, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1320, 1568, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1321, 1569, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1322, 1570, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1323, 1564, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1324, 1571, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1325, 1572, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1326, 1573, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1327, 1574, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1328, 1575, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1329, 1576, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1330, 1577, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1331, 1578, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1332, 1579, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1333, 1580, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1334, 1581, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1335, 1581, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1336, 1582, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1337, 1583, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1338, 1584, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1339, 1585, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1340, 1586, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1341, 1588, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1342, 1589, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1343, 1591, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1344, 1592, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1345, 1593, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1346, 1594, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1347, 1596, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1348, 1597, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1349, 1598, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1350, 1599, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1351, 1600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1352, 1601, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1353, 1602, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1354, 1603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1355, 1604, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1356, 1605, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1357, 1606, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1358, 1607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1359, 1607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1360, 1608, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1361, 1609, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1362, 1610, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1363, 1611, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1364, 1612, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1365, 1613, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1366, 1614, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1367, 1615, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1368, 1616, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1369, 1617, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1370, 1619, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1371, 1620, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1372, 1621, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1373, 1622, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1374, 1623, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1375, 1624, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1376, 1624, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1377, 1625, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1378, 1627, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1379, 1628, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1380, 1630, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1381, 1631, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1382, 1632, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1383, 1633, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1384, 1634, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1385, 1635, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1386, 1636, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1387, 1637, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1388, 1638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1389, 1639, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1390, 1640, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1391, 1641, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1392, 1642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1393, 1643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1394, 1646, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1395, 1647, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1396, 1648, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1397, 1649, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1398, 1650, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1399, 1651, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1400, 1653, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1401, 1654, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1402, 1655, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1403, 1656, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1404, 1657, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1405, 1658, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1406, 1660, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1407, 1661, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1408, 1662, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1409, 1663, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1410, 1664, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1411, 1665, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1412, 1666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1413, 1667, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1414, 1668, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1415, 1669, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1416, 1670, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1417, 1671, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1418, 1672, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1419, 1673, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1420, 1674, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1421, 1675, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1422, 1677, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1423, 1678, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1424, 1679, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1425, 1680, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1426, 1681, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1427, 1682, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1428, 1683, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1429, 1684, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1430, 1685, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1431, 1686, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1432, 1687, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1433, 1688, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1434, 1689, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1435, 1690, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1436, 1692, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1437, 1693, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1438, 1694, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1439, 1696, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1440, 1697, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1441, 1698, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1442, 1699, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1443, 1700, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1444, 1702, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1445, 1703, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1446, 1704, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1447, 1705, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1448, 1706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1449, 1707, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1450, 1708, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1451, 1709, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1452, 1712, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1453, 1713, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1454, 1714, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1455, 1715, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1456, 1716, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1457, 1717, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1458, 1718, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1459, 1719, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1460, 1720, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1461, 1722, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1462, 1723, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1463, 1724, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1464, 1727, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1465, 1728, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1466, 1729, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1467, 1731, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1468, 1732, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1469, 1732, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1470, 1734, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1471, 1735, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1472, 1736, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1473, 1737, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1474, 1738, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1475, 1739, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1476, 1740, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1477, 1741, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1478, 1743, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1479, 1742, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1480, 1745, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1481, 1746, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1482, 1747, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1483, 1748, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1484, 1749, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1485, 1750, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1486, 1751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1487, 1751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1488, 1752, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1489, 1744, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1490, 1754, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1491, 1755, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1492, 1757, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1493, 1758, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1494, 1759, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1495, 1758, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1496, 1761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1497, 1762, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1498, 1763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1499, 1763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1500, 1765, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1501, 1765, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1502, 1767, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1503, 1767, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1504, 1768, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1505, 1770, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1506, 1771, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1507, 1772, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1508, 1772, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1509, 1775, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1510, 1776, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1511, 1777, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1512, 1778, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1513, 1779, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1514, 1780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1515, 1780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1516, 1783, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1517, 1784, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1518, 1785, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1519, 1787, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1520, 1788, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 1789, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1522, 1790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1523, 1791, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1524, 1795, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1525, 1797, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1526, 1798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1527, 1798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1528, 1800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1529, 1801, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1530, 1802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1531, 1803, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1532, 1804, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1533, 1805, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1534, 1806, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1535, 1807, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1536, 1808, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1537, 1809, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1538, 1810, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1539, 1811, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1540, 1812, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1541, 1813, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1542, 1814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1543, 1814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1544, 1816, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1545, 1815, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1546, 1818, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1547, 1819, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1548, 1820, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1549, 1822, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1550, 1821, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1551, 1825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1552, 1826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1553, 1825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1554, 1827, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1555, 1829, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1556, 1830, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1557, 1831, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1558, 1833, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1559, 1834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1560, 1834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1561, 1835, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1562, 1836, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1563, 1837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1564, 1839, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1565, 1840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1566, 1841, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1567, 1843, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1568, 1844, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1569, 1845, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1570, 1847, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1571, 1848, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1572, 1849, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1573, 1852, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1574, 1853, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1575, 1854, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1576, 1855, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1577, 1855, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1578, 1857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1579, 1857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1580, 1857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1581, 1860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1582, 1861, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1583, 1862, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1584, 1860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1585, 1864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1586, 1864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1587, 1864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1588, 1867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1589, 1865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1590, 1869, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1591, 1866, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1592, 1870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1593, 1870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1594, 1871, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1595, 1874, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1596, 1874, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1597, 1876, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1598, 1877, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1599, 1878, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1600, 1879, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1601, 1880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1602, 1881, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1603, 1880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1604, 1882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1605, 1883, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1606, 1886, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1607, 1887, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1608, 1889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1609, 1890, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1610, 1891, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1611, 1888, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1612, 1893, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1613, 1894, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1614, 1896, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1615, 1897, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1616, 1897, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1617, 1898, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1618, 1900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1619, 1901, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1620, 1902, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1621, 1900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1622, 1904, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1623, 1905, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1624, 1906, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1625, 1907, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1626, 1909, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1627, 1910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1628, 1911, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1629, 1912, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1630, 1913, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1631, 1914, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1632, 1915, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1633, 1916, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1634, 1917, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1635, 1918, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1636, 1919, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1637, 1920, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1638, 1921, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1639, 1922, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1640, 1923, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1641, 1924, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1642, 1925, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1643, 1926, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1644, 1927, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1645, 1928, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1646, 1930, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1647, 1931, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1648, 1931, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1649, 1933, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1650, 1934, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1651, 1934, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1652, 1936, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1653, 1938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1654, 1938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1655, 1940, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1656, 1939, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1657, 1941, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1658, 1942, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1659, 1943, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1660, 1944, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1661, 1946, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1662, 1946, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1663, 1949, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1664, 1950, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1665, 1951, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1666, 1952, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1667, 1953, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1668, 1954, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1669, 1956, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1670, 1957, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1671, 1955, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1672, 1959, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1673, 1960, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1674, 1961, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1675, 1962, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1676, 1963, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1677, 1964, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1678, 1965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1679, 1966, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1680, 1968, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1681, 1969, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1682, 1970, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1683, 1971, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1684, 1972, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1685, 1965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1686, 1975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1687, 1976, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1688, 1977, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1689, 1978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1690, 1978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1691, 1980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1692, 1981, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1693, 1975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1694, 1983, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1695, 1985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1696, 1985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1697, 1987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1698, 1988, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1699, 1987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1700, 1990, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1701, 1991, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1702, 1993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1703, 1993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1704, 1995, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1705, 1997, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1706, 1997, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1707, 1998, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1708, 2000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1709, 1999, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1710, 2002, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1711, 2002, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1712, 2004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1713, 2003, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1714, 2006, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1715, 2007, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1716, 2008, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1717, 2009, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1718, 2010, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1719, 2011, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1720, 2012, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1721, 2013, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1722, 2014, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1723, 2015, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1724, 2016, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1725, 2017, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1726, 2018, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1727, 2019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1728, 2020, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1729, 2021, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1730, 2023, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1731, 2024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1732, 2025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1733, 2026, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1734, 2027, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1735, 2028, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1736, 2029, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1737, 2030, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1738, 2031, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1739, 2032, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1740, 2034, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1741, 2035, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1742, 2036, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1743, 2037, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1744, 2038, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1745, 2039, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1746, 2041, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1747, 2042, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1748, 2043, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1749, 2044, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1750, 2045, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1751, 2047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1752, 2047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1753, 2049, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1754, 2051, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1755, 2052, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1756, 2053, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1757, 2054, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1758, 2055, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1759, 2056, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1760, 2058, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1761, 2059, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1762, 2060, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1763, 2062, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1764, 2063, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1765, 2064, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1766, 2065, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1767, 2066, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1768, 2067, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1769, 2069, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1770, 2070, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1771, 2071, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1772, 2072, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1773, 2073, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1774, 2068, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1775, 2074, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1776, 2075, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1777, 2077, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1778, 2078, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1779, 2079, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1780, 2080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1781, 2080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1782, 2083, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1783, 2084, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1784, 2085, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1785, 2086, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1786, 2087, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1787, 2082, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1788, 2087, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1789, 2090, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1790, 2091, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1791, 2092, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1792, 2093, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1793, 2094, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1794, 2095, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1795, 2096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1796, 2096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1797, 2098, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1798, 2099, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1799, 2100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1800, 2101, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1801, 2102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1802, 2103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1803, 2104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1804, 2105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1805, 2106, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1806, 2107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1807, 2108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1808, 2109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1809, 2110, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1810, 2111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1811, 2113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1812, 2114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1813, 2115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1814, 2116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1815, 2117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1816, 2118, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1817, 2119, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1818, 2120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1819, 2121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1820, 2122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1821, 2124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1822, 2125, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1823, 2126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1824, 2127, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1825, 2128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1826, 2129, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1827, 2130, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1828, 2131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1829, 2132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1830, 2133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1831, 2134, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1832, 2136, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1833, 2138, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1834, 2139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1835, 2140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1836, 2141, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1837, 2142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1838, 2143, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1839, 2144, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1840, 2146, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1841, 2147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1842, 2148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1843, 2149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1844, 2148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1845, 2151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1846, 2152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1847, 2152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1848, 2150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1849, 2154, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1850, 2155, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1851, 2156, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1852, 2157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1853, 2158, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1854, 2160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1855, 2161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1856, 2162, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1857, 2163, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1858, 2164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1859, 2165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1860, 2166, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1861, 2168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1862, 2169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1863, 2168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1864, 2171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1865, 2171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1866, 2172, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1867, 2175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1868, 2176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1869, 2177, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1870, 2179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1871, 2180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1872, 2180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1873, 2182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1874, 2182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1875, 2183, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1876, 2185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1877, 2186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1878, 2187, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1879, 2188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1880, 2188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1881, 2190, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1882, 2191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1883, 2192, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1884, 2193, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1885, 2195, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1886, 2196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1887, 2197, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1888, 2198, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1889, 2199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1890, 2200, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1891, 2201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1892, 2202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1893, 2203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1894, 2204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1895, 2206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1896, 2208, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1897, 2209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1898, 2210, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1899, 2211, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1900, 2212, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1901, 2213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1902, 2214, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1903, 2215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1904, 2216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1905, 2217, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1906, 2219, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1907, 2220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1908, 2221, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1909, 2223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1910, 2224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1911, 2225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1912, 2226, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1913, 2227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1914, 2228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1915, 2229, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1916, 2231, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1917, 2232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1918, 2233, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1919, 2234, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1920, 2235, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1921, 2236, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1922, 2237, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1923, 2238, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1924, 2239, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1925, 2241, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1926, 2242, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1927, 2243, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1928, 2244, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1929, 2245, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1930, 2246, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1931, 2247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1932, 2249, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1933, 2250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1934, 2251, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1935, 2252, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1936, 2253, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1937, 2254, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1938, 2255, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1939, 2256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1940, 2257, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1941, 2258, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(1942, 2259, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1943, 2260, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1944, 2261, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1945, 2262, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1946, 2263, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1947, 2265, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1948, 2266, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1949, 2267, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1950, 2268, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1951, 2269, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1952, 2270, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1953, 2272, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1954, 2273, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1955, 2274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1956, 2275, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1957, 2274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1958, 2277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1959, 2280, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1960, 2281, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1961, 2282, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1962, 2283, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1963, 2284, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1964, 2286, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1965, 2287, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1966, 2288, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1967, 2289, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1968, 2290, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1969, 2291, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1970, 2293, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1971, 2294, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1972, 2295, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1973, 2297, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1974, 2298, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1975, 2300, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1976, 2301, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1977, 2302, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1978, 2303, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1979, 2304, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1980, 2306, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1981, 2307, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1982, 2308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1983, 2309, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1984, 2310, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1985, 2311, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1986, 2312, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1987, 2313, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1988, 2314, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1989, 2315, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1990, 2316, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1991, 2318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1992, 2319, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1993, 2320, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1994, 2321, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1995, 2323, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1996, 2324, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1997, 2325, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1998, 2326, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1999, 2327, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2000, 2328, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2001, 2329, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2002, 2330, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2003, 2331, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2004, 2332, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2005, 2333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2006, 2333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2007, 2335, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2008, 2335, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2009, 2337, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2010, 2338, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2011, 2339, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2012, 2340, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2013, 2340, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2014, 2341, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2015, 2343, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2016, 2344, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2017, 2345, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2018, 2346, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2019, 2347, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2020, 2348, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2021, 2349, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2022, 2350, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2023, 2351, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2024, 2352, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2025, 2353, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2026, 2354, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2027, 2355, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2028, 2356, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2029, 2357, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2030, 2358, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2031, 2359, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2032, 2360, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2033, 2361, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2034, 2362, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2035, 2363, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2036, 2364, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2037, 2365, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2038, 2366, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2039, 2367, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2040, 2368, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2041, 2370, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2042, 2371, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2043, 2372, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2044, 2373, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2045, 2374, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2046, 2375, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2047, 2376, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2048, 2377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2049, 2378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2050, 2379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2051, 2380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2052, 2381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2053, 2382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2054, 2383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2055, 2384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2056, 2385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2057, 2386, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2058, 2387, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2059, 2388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2060, 2389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2061, 2391, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2062, 2392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2063, 2393, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2064, 2394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2065, 2395, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2066, 2397, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2067, 2398, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2068, 2399, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2069, 2400, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2070, 2401, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2071, 2403, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2072, 2404, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2073, 2405, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2074, 2406, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2075, 2407, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2076, 2408, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2077, 2409, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2078, 2410, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2079, 2412, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2080, 2413, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2081, 2414, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2082, 2415, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2083, 2416, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2084, 2417, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2085, 2418, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2086, 2419, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2087, 2420, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2088, 2421, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2089, 2422, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2090, 2423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2091, 2425, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2092, 2426, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2093, 2427, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2094, 2429, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2095, 2430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2096, 2431, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2097, 2430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2098, 2433, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2099, 2433, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2100, 2435, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2101, 2436, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2102, 2437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2103, 2438, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2104, 2439, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2105, 2439, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2106, 2440, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2107, 2442, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2108, 2443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2109, 2445, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2110, 2445, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2111, 2446, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2112, 2447, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2113, 2449, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2114, 2450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2115, 2451, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2116, 2452, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2117, 2453, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2118, 2454, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2119, 2455, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2120, 2455, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2121, 2457, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2122, 2458, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2123, 2459, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2124, 2460, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2125, 2461, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2126, 2462, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2127, 2463, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2128, 2464, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2129, 2465, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2130, 2467, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2131, 2468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2132, 2468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2133, 2470, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2134, 2471, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2135, 2472, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2136, 2473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2137, 2474, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2138, 2475, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2139, 2476, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2140, 2477, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2141, 2478, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2142, 2479, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2143, 2480, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2144, 2481, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2145, 2482, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2146, 2483, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2147, 2484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2148, 2485, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2149, 2486, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2150, 2485, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2151, 2489, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2152, 2490, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2153, 2491, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2154, 2492, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2155, 2493, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2156, 2494, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2157, 2495, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2158, 2496, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2159, 2497, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2160, 2498, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2161, 2499, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2162, 2500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2163, 2501, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2164, 2502, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2165, 2503, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2166, 2504, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2167, 2505, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2168, 2506, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2169, 2508, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2170, 2509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2171, 2510, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2172, 2511, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2173, 2512, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2174, 2513, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2175, 2514, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2176, 2515, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2177, 2517, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2178, 2518, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2179, 2519, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2180, 2520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2181, 2521, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2182, 2522, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2183, 2523, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2184, 2525, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2185, 2526, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2186, 2528, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2187, 2530, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2188, 2531, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2189, 2532, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2190, 2533, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2191, 2534, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2192, 2535, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2193, 2536, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2194, 2537, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2195, 2539, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2196, 2539, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2197, 2540, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2198, 2542, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2199, 2543, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2200, 2544, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2201, 2546, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2202, 2546, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2203, 2548, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2204, 2549, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2205, 2551, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2206, 2551, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2207, 2553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2208, 2553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2209, 2554, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2210, 2558, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2211, 2559, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2212, 2561, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2213, 2562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2214, 2563, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2215, 2564, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2216, 2565, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2217, 2566, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2218, 2567, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2219, 2568, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2220, 2570, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2221, 2571, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2222, 2572, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2223, 2574, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2224, 2575, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2225, 2576, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2226, 2577, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2227, 2579, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2228, 2580, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2229, 2581, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2230, 2582, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2231, 2583, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2232, 2584, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2233, 2585, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2234, 2586, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2235, 2587, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2236, 2588, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2237, 2589, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2238, 2591, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2239, 2592, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2240, 2593, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2241, 2594, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2242, 2596, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2243, 2597, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2244, 2598, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2245, 2599, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2246, 2600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2247, 2601, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2248, 2603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2249, 2604, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2250, 2605, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2251, 2606, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2252, 2607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2253, 2608, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2254, 2609, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2255, 2610, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2256, 2611, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2257, 2612, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2258, 2613, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2259, 2614, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2260, 2615, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2261, 2617, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2262, 2618, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2263, 2620, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2264, 2621, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2265, 2622, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2266, 2623, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2267, 2625, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2268, 2626, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2269, 2627, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2270, 2628, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2271, 2629, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2272, 2630, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2273, 2632, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2274, 2633, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2275, 2634, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2276, 2636, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2277, 2637, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2278, 2638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2279, 2639, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2280, 2638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2281, 2642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2282, 2642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2283, 2644, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2284, 2645, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2285, 2647, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2286, 2648, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2287, 2649, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2288, 2650, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2289, 2651, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2290, 2653, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2291, 2655, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2292, 2657, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2293, 2658, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2294, 2659, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2295, 2660, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2296, 2661, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2297, 2662, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2298, 2663, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2299, 2664, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2300, 2666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2301, 2668, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2302, 2669, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2303, 2670, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2304, 2671, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2305, 2672, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2306, 2673, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2307, 2674, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2308, 2676, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2309, 2677, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2310, 2678, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2311, 2679, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2312, 2681, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2313, 2682, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2314, 2683, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2315, 2684, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2316, 2685, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2317, 2682, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2318, 2686, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2319, 2688, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2320, 2689, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2321, 2691, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2322, 2692, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2323, 2694, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2324, 2696, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2325, 2697, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2326, 2698, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2327, 2700, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2328, 2701, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2329, 2702, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2330, 2703, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2331, 2705, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2332, 2706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2333, 2707, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2334, 2708, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2335, 2709, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2336, 2710, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2337, 2711, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2338, 2712, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2339, 2713, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2340, 2715, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2341, 2717, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2342, 2718, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2343, 2719, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2344, 2720, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2345, 2721, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2346, 2722, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2347, 2723, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2348, 2724, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2349, 2725, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2350, 2727, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2351, 2728, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2352, 2729, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2353, 2730, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2354, 2731, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2355, 2732, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2356, 2733, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2357, 2734, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2358, 2736, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2359, 2737, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2360, 2738, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2361, 2739, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2362, 2740, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2363, 2741, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2364, 2742, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2365, 2743, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2366, 2746, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2367, 2747, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2368, 2748, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2369, 2749, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2370, 2751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2371, 2751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2372, 2753, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2373, 2754, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2374, 2755, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2375, 2756, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2376, 2758, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2377, 2759, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2378, 2760, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2379, 2761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2380, 2761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2381, 2763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2382, 2764, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2383, 2766, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2384, 2767, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2385, 2768, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2386, 2769, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2387, 2769, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2388, 2772, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2389, 2773, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2390, 2776, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2391, 2777, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2392, 2778, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2393, 2780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2394, 2781, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2395, 2784, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2396, 2786, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2397, 2787, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2398, 2787, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2399, 2789, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2400, 2790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2401, 2791, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2402, 2792, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2403, 2792, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2404, 2794, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2405, 2796, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2406, 2799, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2407, 2800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2408, 2801, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2409, 2800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2410, 2802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2411, 2804, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2412, 2805, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2413, 2806, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2414, 2808, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2415, 2811, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2416, 2812, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2417, 2813, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2418, 2814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2419, 2815, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2420, 2816, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2421, 2817, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2422, 2818, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2423, 2819, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2424, 2821, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2425, 2822, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2426, 2823, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2427, 2824, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2428, 2825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2429, 2826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2430, 2827, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2431, 2828, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2432, 2829, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2433, 2831, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2434, 2832, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2435, 2834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2436, 2834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2437, 2836, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2438, 2837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2439, 2837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2440, 2839, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2441, 2840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2442, 2842, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2443, 2843, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2444, 2845, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2445, 2847, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2446, 2847, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2447, 2849, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2448, 2850, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2449, 2851, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2450, 2852, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2451, 2853, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2452, 2854, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2453, 2855, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2454, 2857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2455, 2859, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2456, 2860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2457, 2862, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2458, 2863, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2459, 2865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2460, 2865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2461, 2867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2462, 2867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2463, 2870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2464, 2872, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2465, 2873, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2466, 2874, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2467, 2875, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2468, 2876, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2469, 2878, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2470, 2879, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2471, 2880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2472, 2881, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2473, 2882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2474, 2882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2475, 2884, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2476, 2884, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2477, 2886, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2478, 2887, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2479, 2889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2480, 2890, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2481, 2891, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2482, 2892, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2483, 2893, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2484, 2895, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2485, 2896, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2486, 2898, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2487, 2900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2488, 2901, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2489, 2902, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2490, 2902, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2491, 2904, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2492, 2905, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2493, 2907, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2494, 2909, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2495, 2910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2496, 2913, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2497, 2914, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2498, 2916, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2499, 2918, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2500, 2919, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2501, 2921, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2502, 2922, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2503, 2923, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2504, 2924, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2505, 2926, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2506, 2927, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2507, 2928, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2508, 2929, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2509, 2930, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2510, 2931, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2511, 2932, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2512, 2933, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2513, 2934, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2514, 2935, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2515, 2936, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2516, 2938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2517, 2940, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2518, 2941, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2519, 2943, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2520, 2944, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2521, 2945, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2522, 2946, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2523, 2947, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2524, 2949, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2525, 2950, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2526, 2951, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2527, 2952, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2528, 2953, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2529, 2955, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2530, 2956, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2531, 2957, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2532, 2958, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2533, 2961, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2534, 2962, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2535, 2963, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2536, 2964, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2537, 2965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2538, 2966, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2539, 2967, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2540, 2968, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2541, 2969, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2542, 2971, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2543, 2973, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2544, 2974, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2545, 2975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2546, 2976, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2547, 2977, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2548, 2979, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2549, 2981, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2550, 2982, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2551, 2983, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2552, 2985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2553, 2986, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2554, 2987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2555, 2988, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2556, 2989, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2557, 2990, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2558, 2991, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2559, 2993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2560, 2994, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2561, 2995, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2562, 2997, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2563, 2999, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2564, 3000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2565, 3001, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2566, 3002, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2567, 3004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2568, 3006, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2569, 3007, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2570, 3009, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2571, 3011, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2572, 3012, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2573, 3014, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2574, 3016, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2575, 3017, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2576, 3019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2577, 3020, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2578, 3022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2579, 3023, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(2580, 3024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2581, 3025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2582, 3025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2583, 3026, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2584, 3027, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2585, 3028, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2586, 3029, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2587, 3030, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2588, 3031, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2589, 3032, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2590, 3033, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2591, 3034, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2592, 3035, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2593, 3036, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2594, 3037, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2595, 3038, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2596, 3039, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2597, 3040, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2598, 3041, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2599, 3042, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2600, 3043, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2601, 3045, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2602, 3046, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2603, 3047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2604, 3048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2605, 3049, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2606, 3050, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2607, 3051, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2608, 3052, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2609, 3054, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2610, 3056, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2611, 3058, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2612, 3059, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2613, 3060, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2614, 3061, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2615, 3062, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2616, 3063, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2617, 3064, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2618, 3065, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2619, 3066, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2620, 3067, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2621, 3068, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2622, 3070, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2623, 3071, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2624, 3072, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2625, 3072, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2626, 3075, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2627, 3077, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2628, 3078, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2629, 3080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2630, 3081, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2631, 3084, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2632, 3085, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2633, 3086, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2634, 3088, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2635, 3089, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2636, 3090, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2637, 3091, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2638, 3092, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2639, 3093, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2640, 3094, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2641, 3095, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2642, 3096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2643, 3097, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2644, 3098, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2645, 3099, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2646, 3100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2647, 3101, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2648, 3102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2649, 3103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2650, 3105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2651, 3106, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2652, 3107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2653, 3108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2654, 3109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2655, 3109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2656, 3110, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2657, 3112, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2658, 3113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2659, 3114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2660, 3115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2661, 3116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2662, 3117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2663, 3119, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2664, 3120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2665, 3122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2666, 3123, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2667, 3124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2668, 3124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2669, 3126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2670, 3128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2671, 3128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2672, 3130, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2673, 3132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2674, 3133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2675, 3134, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2676, 3135, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2677, 3137, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2678, 3139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2679, 3140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2680, 3141, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2681, 3142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2682, 3143, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2683, 3146, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2684, 3147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2685, 3148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2686, 3149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2687, 3150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2688, 3152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2689, 3154, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2690, 3157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2691, 3159, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2692, 3160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2693, 3161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2694, 3164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2695, 3165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2696, 3167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2697, 3169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2698, 3170, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2699, 3171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2700, 3175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2701, 3176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2702, 3177, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2703, 3178, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2704, 3180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2705, 3182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2706, 3184, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2707, 3185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2708, 3187, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2709, 3188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2710, 3190, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2711, 3191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2712, 3193, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2713, 3196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2714, 3197, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2715, 3199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2716, 3200, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2717, 3201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2718, 3202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2719, 3203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2720, 3204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2721, 3205, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2722, 3206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2723, 3207, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2724, 3208, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2725, 3209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2726, 3210, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2727, 3211, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2728, 3212, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2729, 3213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2730, 3215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2731, 3216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2732, 3217, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2733, 3218, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2734, 3219, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2735, 3220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2736, 3221, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2737, 3222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2738, 3223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2739, 3224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2740, 3225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2741, 3227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2742, 3228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2743, 3229, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2744, 3230, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2745, 3232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2746, 3232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2747, 3234, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2748, 3235, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2749, 3236, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2750, 3237, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2751, 3239, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2752, 3240, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2753, 3241, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2754, 3243, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2755, 3244, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2756, 3245, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2757, 3247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2758, 3248, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2759, 3250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2760, 3251, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2761, 3252, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2762, 3254, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2763, 3255, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2764, 3256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2765, 3257, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2766, 3258, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2767, 3260, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2768, 3261, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2769, 3263, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2770, 3264, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2771, 3265, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2772, 3266, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2773, 3267, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2774, 3269, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2775, 3270, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2776, 3268, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2777, 3272, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2778, 3274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2779, 3276, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2780, 3277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2781, 3277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2782, 3280, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2783, 3282, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2784, 3284, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2785, 3286, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2786, 3288, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2787, 3289, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2788, 3291, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2789, 3292, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2790, 3293, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2791, 3295, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2792, 3297, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2793, 3298, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2794, 3299, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2795, 3300, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2796, 3301, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2797, 3303, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2798, 3305, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2799, 3307, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2800, 3308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2801, 3310, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2802, 3311, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2803, 3313, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2804, 3315, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2805, 3316, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2806, 3318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2807, 3318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2808, 3321, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2809, 3322, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2810, 3323, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2811, 3325, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2812, 3328, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2813, 3330, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2814, 3331, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2815, 3332, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2816, 3333, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2817, 3335, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2818, 3336, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2819, 3337, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2820, 3338, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2821, 3340, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2822, 3341, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2823, 3342, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2824, 3343, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2825, 3345, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2826, 3347, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2827, 3349, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2828, 3350, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2829, 3351, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2830, 3352, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2831, 3353, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2832, 3354, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2833, 3356, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2834, 3357, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2835, 3358, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2836, 3359, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2837, 3360, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2838, 3361, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2839, 3363, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2840, 3364, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2841, 3366, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2842, 3368, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2843, 3370, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2844, 3372, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2845, 3373, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2846, 3374, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2847, 3377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2848, 3378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2849, 3380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2850, 3381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2851, 3383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2852, 3384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2853, 3385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2854, 3387, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2855, 3388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2856, 3389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2857, 3390, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2858, 3391, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2859, 3392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2860, 3393, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2861, 3394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2862, 3395, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2863, 3397, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2864, 3398, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2865, 3399, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2866, 3400, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2867, 3401, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2868, 3402, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2869, 3403, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2870, 3404, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2871, 3405, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2872, 3407, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2873, 3408, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2874, 3409, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2875, 3410, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2876, 3411, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2877, 3412, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2878, 3413, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2879, 3414, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2880, 3415, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2881, 3417, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2882, 3418, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2883, 3419, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2884, 3420, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2885, 3421, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2886, 3422, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2887, 3423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2888, 3424, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2889, 3425, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2890, 3426, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2891, 3427, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2892, 3428, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2893, 3430, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2894, 3431, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2895, 3432, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2896, 3434, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2897, 3435, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2898, 3437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2899, 3438, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2900, 3439, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2901, 3440, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2902, 3441, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2903, 3442, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2904, 3443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2905, 3444, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2906, 3446, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2907, 3447, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2908, 3448, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2909, 3449, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2910, 3450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2911, 3452, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2912, 3454, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2913, 3455, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2914, 3456, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2915, 3458, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2916, 3459, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2917, 3460, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2918, 3461, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2919, 3462, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2920, 3463, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2921, 3464, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2922, 3465, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2923, 3467, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2924, 3468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2925, 3469, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2926, 3471, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2927, 3473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2928, 3474, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2929, 3476, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2930, 3478, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2931, 3483, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2932, 3484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2933, 3485, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2934, 3487, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2935, 3488, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2936, 3490, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2937, 3491, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2938, 3493, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2939, 3494, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2940, 3495, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2941, 3496, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2942, 3497, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2943, 3498, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2944, 3500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2945, 3501, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2946, 3502, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2947, 3503, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2948, 3504, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2949, 3506, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2950, 3507, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2951, 3508, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2952, 3509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2953, 3510, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2954, 3512, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2955, 3513, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2956, 3514, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2957, 3515, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2958, 3517, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2959, 3519, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2960, 3520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2961, 3521, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2962, 3522, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2963, 3524, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2964, 3526, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2965, 3527, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2966, 3529, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2967, 3530, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2968, 3532, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2969, 3533, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2970, 3535, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2971, 3536, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2972, 3537, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2973, 3538, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2974, 3539, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2975, 3541, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2976, 3543, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2977, 3545, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2978, 3547, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2979, 3549, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2980, 3550, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2981, 3552, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2982, 3555, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2983, 3556, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2984, 3559, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2985, 3560, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2986, 3561, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2987, 3562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2988, 3564, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2989, 3565, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2990, 3566, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2991, 3567, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2992, 3568, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2993, 3569, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2994, 3570, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2995, 3571, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2996, 3572, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2997, 3574, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2998, 3575, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2999, 3577, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3000, 3578, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3001, 3579, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3002, 3581, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3003, 3582, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3004, 3583, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3005, 3584, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3006, 3585, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3007, 3587, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3008, 3588, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3009, 3589, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3010, 3593, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3011, 3594, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3012, 3595, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3013, 3596, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3014, 3597, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3015, 3598, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3016, 3599, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3017, 3600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3018, 3601, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3019, 3602, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3020, 3603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3021, 3604, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3022, 3606, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3023, 3607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3024, 3609, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3025, 3611, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3026, 3612, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3027, 3614, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3028, 3615, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3029, 3617, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3030, 3618, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3031, 3619, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3032, 3621, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3033, 3622, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3034, 3623, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3035, 3625, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3036, 3626, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3037, 3627, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3038, 3629, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3039, 3630, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3040, 3631, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3041, 3633, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3042, 3635, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3043, 3637, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3044, 3638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3045, 3639, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3046, 3640, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3047, 3641, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3048, 3642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3049, 3643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3050, 3644, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3051, 3645, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3052, 3646, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3053, 3647, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3054, 3648, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3055, 3649, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3056, 3650, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3057, 3651, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3058, 3653, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3059, 3654, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3060, 3655, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3061, 3656, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3062, 3657, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3063, 3658, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3064, 3659, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3065, 3660, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3066, 3662, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3067, 3664, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3068, 3665, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3069, 3667, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3070, 3668, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3071, 3669, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3072, 3670, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3073, 3671, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3074, 3672, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3075, 3673, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3076, 3674, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3077, 3675, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3078, 3677, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3079, 3680, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3080, 3681, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3081, 3683, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3082, 3685, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3083, 3686, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3084, 3687, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3085, 3688, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3086, 3689, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3087, 3690, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3088, 3691, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3089, 3692, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3090, 3693, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3091, 3694, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3092, 3695, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3093, 3696, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3094, 3697, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3095, 3698, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3096, 3701, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3097, 3703, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3098, 3704, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3099, 3706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3100, 3707, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3101, 3708, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3102, 3709, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3103, 3710, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3104, 3711, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3105, 3713, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3106, 3714, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3107, 3715, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3108, 3716, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3109, 3717, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3110, 3718, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3111, 3719, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3112, 3720, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3113, 3721, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3114, 3722, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3115, 3723, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3116, 3724, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3117, 3725, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3118, 3728, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3119, 3729, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3120, 3730, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3121, 3731, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3122, 3733, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3123, 3734, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3124, 3735, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3125, 3736, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3126, 3737, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3127, 3738, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3128, 3739, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3129, 3740, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3130, 3741, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3131, 3742, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3132, 3743, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3133, 3744, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3134, 3745, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3135, 3746, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3136, 3747, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3137, 3748, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3138, 3749, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3139, 3750, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3140, 3751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3141, 3752, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3142, 3753, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3143, 3754, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3144, 3755, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3145, 3756, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3146, 3757, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3147, 3758, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3148, 3759, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3149, 3760, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3150, 3761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3151, 3762, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3152, 3763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3153, 3764, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3154, 3765, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3155, 3766, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3156, 3767, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3157, 3768, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3158, 3769, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3159, 3770, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3160, 3771, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3161, 3772, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3162, 3773, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3163, 3774, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3164, 3775, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3165, 3776, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3166, 3777, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3167, 3778, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3168, 3779, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3169, 3780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3170, 3781, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3171, 3782, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3172, 3783, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3173, 3784, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3174, 3785, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3175, 3786, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3176, 3787, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3177, 3788, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3178, 3789, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3179, 3790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3180, 3791, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3181, 3792, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3182, 3793, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3183, 3794, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3184, 3795, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3185, 3796, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3186, 3797, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3187, 3798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3188, 3799, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3189, 3800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3190, 3801, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3191, 3802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3192, 3803, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3193, 3804, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3194, 3805, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3195, 3806, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3196, 3807, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3197, 3808, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3198, 3809, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3199, 3810, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3200, 3811, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3201, 3812, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3202, 3813, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3203, 3814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3204, 3815, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3205, 3816, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3206, 3817, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3207, 3818, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3208, 3819, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3209, 3820, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3210, 3822, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3211, 3823, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3212, 3824, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3213, 3825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3214, 3826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3215, 3827, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3216, 3828, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3217, 3829, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(3218, 3830, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3219, 3831, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3220, 3832, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3221, 3833, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3222, 3834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3223, 3835, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3224, 3836, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3225, 3837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3226, 3838, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3227, 3839, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3228, 3840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3229, 3842, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3230, 3843, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3231, 3844, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3232, 3846, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3233, 3847, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3234, 3848, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3235, 3849, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3236, 3850, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3237, 3851, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3238, 3852, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3239, 3853, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3240, 3854, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3241, 3856, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3242, 3857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3243, 3858, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3244, 3859, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3245, 3860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3246, 3862, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3247, 3863, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3248, 3864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3249, 3865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3250, 3866, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3251, 3867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3252, 3869, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3253, 3870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3254, 3871, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3255, 3872, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3256, 3873, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3257, 3874, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3258, 3875, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3259, 3878, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3260, 3879, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3261, 3880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3262, 3881, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3263, 3882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3264, 3883, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3265, 3884, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3266, 3885, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3267, 3887, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3268, 3888, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3269, 3889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3270, 3890, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3271, 3891, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3272, 3892, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3273, 3893, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3274, 3894, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3275, 3896, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3276, 3898, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3277, 3899, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3278, 3900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3279, 3901, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3280, 3903, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3281, 3904, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3282, 3905, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3283, 3906, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3284, 3907, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3285, 3908, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3286, 3909, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3287, 3910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3288, 3911, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3289, 3912, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3290, 3913, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3291, 3914, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3292, 3915, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3293, 3916, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3294, 3917, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3295, 3918, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3296, 3919, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3297, 3920, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3298, 3921, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3299, 3922, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3300, 3923, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3301, 3925, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3302, 3926, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3303, 3927, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3304, 3928, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3305, 3929, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3306, 3930, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3307, 3931, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3308, 3932, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3309, 3933, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3310, 3934, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3311, 3935, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3312, 3936, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3313, 3937, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3314, 3938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3315, 3939, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3316, 3940, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3317, 3941, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3318, 3943, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3319, 3944, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3320, 3945, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3321, 3946, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3322, 3947, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3323, 3948, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3324, 3949, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3325, 3950, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3326, 3952, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3327, 3953, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3328, 3954, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3329, 3955, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3330, 3956, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3331, 3958, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3332, 3959, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3333, 3960, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3334, 3961, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3335, 3962, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3336, 3965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3337, 3966, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3338, 3967, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3339, 3968, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3340, 3970, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3341, 3971, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3342, 3972, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3343, 3973, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3344, 3974, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3345, 3975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3346, 3976, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3347, 3977, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3348, 3978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3349, 3979, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3350, 3980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3351, 3981, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3352, 3982, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3353, 3983, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3354, 3984, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3355, 3985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3356, 3986, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3357, 3987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3358, 3988, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3359, 3989, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3360, 3991, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3361, 3992, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3362, 3993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3363, 3994, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3364, 3995, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3365, 3998, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3366, 3999, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3367, 4000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3368, 4001, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3369, 4003, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3370, 4004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3371, 4005, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3372, 4006, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3373, 4007, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3374, 4008, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3375, 4009, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3376, 4010, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3377, 4011, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3378, 4013, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3379, 4015, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3380, 4016, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3381, 4017, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3382, 4018, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3383, 4019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3384, 4020, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3385, 4021, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3386, 4022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3387, 4023, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3388, 4025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3389, 4026, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3390, 4027, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3391, 4028, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3392, 4029, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3393, 4030, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3394, 4031, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3395, 4032, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3396, 4033, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3397, 4034, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3398, 4035, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3399, 4036, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3400, 4037, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3401, 4038, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3402, 4039, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3403, 4040, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3404, 4041, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3405, 4042, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3406, 4043, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3407, 4044, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3408, 4045, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3409, 4046, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3410, 4047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3411, 4048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3412, 4049, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3413, 4050, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3414, 4052, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3415, 4053, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3416, 4054, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3417, 4055, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3418, 4056, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3419, 4057, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3420, 4059, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3421, 4061, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3422, 4062, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3423, 4063, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3424, 4064, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3425, 4066, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3426, 4067, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3427, 4069, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3428, 4072, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3429, 4073, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3430, 4074, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3431, 4076, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3432, 4077, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3433, 4079, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3434, 4080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3435, 4081, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3436, 4082, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3437, 4084, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3438, 4086, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3439, 4087, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3440, 4088, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3441, 4089, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3442, 4090, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3443, 4093, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3444, 4094, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3445, 4096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3446, 4098, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3447, 4100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3448, 4102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3449, 4103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3450, 4104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3451, 4105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3452, 4106, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3453, 4107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3454, 4108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3455, 4109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3456, 4110, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3457, 4111, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3458, 4112, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3459, 4113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3460, 4114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3461, 4115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3462, 4116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3463, 4117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3464, 4118, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3465, 4119, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3466, 4120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3467, 4121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3468, 4122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3469, 4123, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3470, 4124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3471, 4125, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3472, 4126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3473, 4127, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3474, 4128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3475, 4129, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3476, 4130, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3477, 4131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3478, 4132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3479, 4133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3480, 4134, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3481, 4135, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3482, 4136, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3483, 4137, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3484, 4138, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3485, 4139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3486, 4140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3487, 4141, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3488, 4142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3489, 4143, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3490, 4144, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3491, 4145, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3492, 4146, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3493, 4147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3494, 4148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3495, 4149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3496, 4150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3497, 4151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3498, 4152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3499, 4153, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3500, 4154, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3501, 4156, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3502, 4157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3503, 4159, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3504, 4160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3505, 4161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3506, 4162, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3507, 4163, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3508, 4164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3509, 4165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3510, 4166, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3511, 4167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3512, 4168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3513, 4169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3514, 4170, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3515, 4171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3516, 4172, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3517, 4173, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3518, 4174, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3519, 4175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3520, 4176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3521, 4177, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3522, 4178, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3523, 4179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3524, 4180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3525, 4182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3526, 4184, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3527, 4185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3528, 4186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3529, 4188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3530, 4189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3531, 4190, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3532, 4191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3533, 4192, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3534, 4193, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3535, 4194, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3536, 4195, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3537, 4196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3538, 4197, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3539, 4198, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3540, 4199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3541, 4200, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3542, 4201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3543, 4202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3544, 4203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3545, 4204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3546, 4205, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3547, 4206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3548, 4207, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3549, 4208, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3550, 4209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3551, 4210, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3552, 4211, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3553, 4212, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3554, 4213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3555, 4214, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3556, 4215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3557, 4216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3558, 4218, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3559, 4220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3560, 4222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3561, 4223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3562, 4224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3563, 4225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3564, 4226, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3565, 4227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3566, 4228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3567, 4230, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3568, 4231, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3569, 4232, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3570, 4233, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3571, 4234, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3572, 4235, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3573, 4236, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3574, 4237, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3575, 4238, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3576, 4239, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3577, 4240, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3578, 4243, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3579, 4244, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3580, 4245, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3581, 4246, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3582, 4247, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3583, 4248, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3584, 4249, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3585, 4250, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3586, 4251, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3587, 4253, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3588, 4254, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3589, 4255, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3590, 4256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3591, 4257, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3592, 4258, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3593, 4259, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3594, 4260, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3595, 4261, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3596, 4262, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3597, 4263, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3598, 4264, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3599, 4265, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3600, 4266, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3601, 4267, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3602, 4269, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3603, 4270, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3604, 4271, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3605, 4272, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3606, 4273, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3607, 4274, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3608, 4276, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3609, 4277, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3610, 4279, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3611, 4280, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3612, 4281, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3613, 4282, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3614, 4283, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3615, 4284, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3616, 4285, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3617, 4286, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3618, 4288, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3619, 4289, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3620, 4290, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3621, 4291, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3622, 4292, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3623, 4293, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3624, 4294, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3625, 4295, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3626, 4297, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3627, 4298, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3628, 4300, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3629, 4301, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3630, 4304, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3631, 4305, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3632, 4306, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3633, 4307, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3634, 4308, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3635, 4309, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3636, 4310, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3637, 4312, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3638, 4313, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3639, 4314, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3640, 4315, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3641, 4316, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3642, 4317, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3643, 4318, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3644, 4319, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3645, 4320, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3646, 4321, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3647, 4322, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3648, 4324, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3649, 4325, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3650, 4326, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3651, 4327, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3652, 4329, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3653, 4330, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3654, 4331, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3655, 4337, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3656, 4338, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3657, 4339, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3658, 4341, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3659, 4347, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3660, 4349, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3661, 4353, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3662, 4354, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3663, 4355, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3664, 4357, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3665, 4358, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3666, 4359, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3667, 4360, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3668, 4361, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3669, 4363, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3670, 4365, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3671, 4367, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3672, 4368, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3673, 4369, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3674, 4370, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3675, 4371, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3676, 4373, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3677, 4374, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3678, 4375, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3679, 4376, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3680, 4377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3681, 4378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3682, 4379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3683, 4380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3684, 4381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3685, 4382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3686, 4383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3687, 4384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3688, 4385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3689, 4386, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3690, 4387, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3691, 4388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3692, 4389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3693, 4390, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3694, 4391, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3695, 4392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3696, 4393, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3697, 4394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3698, 4395, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3699, 4397, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3700, 4398, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3701, 4399, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3702, 4400, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3703, 4401, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3704, 4402, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3705, 4403, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3706, 4404, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3707, 4405, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3708, 4406, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3709, 4407, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3710, 4408, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3711, 4411, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3712, 4414, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3713, 4418, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3714, 4421, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3715, 4422, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3716, 4423, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3717, 4424, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3718, 4425, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3719, 4426, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3720, 4427, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3721, 4429, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3722, 4431, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3723, 4432, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3724, 4433, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3725, 4436, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3726, 4437, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3727, 4439, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3728, 4440, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3729, 4441, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3730, 4442, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3731, 4443, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3732, 4444, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3733, 4445, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3734, 4446, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3735, 4447, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3736, 4448, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3737, 4449, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3738, 4450, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3739, 4451, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3740, 4452, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3741, 4453, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3742, 4454, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3743, 4468, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3744, 4470, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3745, 4471, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3746, 4473, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3747, 4474, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3748, 4475, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3749, 4476, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3750, 4477, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3751, 4478, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3752, 4479, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3753, 4480, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3754, 4481, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3755, 4483, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3756, 4484, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3757, 4485, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3758, 4486, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3759, 4487, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3760, 4488, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3761, 4489, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3762, 4490, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3763, 4491, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3764, 4492, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3765, 4493, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3766, 4495, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3767, 4496, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3768, 4497, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3769, 4498, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3770, 4499, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3771, 4500, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3772, 4502, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3773, 4513, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3774, 4503, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3775, 4504, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3776, 4505, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3777, 4506, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3778, 4507, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3779, 4508, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3780, 4509, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3781, 4510, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3782, 4511, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3783, 4512, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3784, 4515, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3785, 4516, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3786, 4517, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3787, 4518, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3788, 4519, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3789, 4520, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3790, 4521, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3791, 4522, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3792, 4529, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3793, 4530, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3794, 4532, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3795, 4533, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3796, 4534, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3797, 4535, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3798, 4536, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3799, 4537, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3800, 4538, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3801, 4540, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3802, 4541, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3803, 4543, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3804, 4544, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3805, 4545, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3806, 4546, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3807, 4547, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3808, 4549, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3809, 4550, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3810, 4551, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3811, 4553, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3812, 4554, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3813, 4555, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3814, 4556, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3815, 4557, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3816, 4558, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3817, 4559, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3818, 4560, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3819, 4561, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3820, 4562, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3821, 4564, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3822, 4565, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3823, 4567, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3824, 4568, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3825, 4569, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3826, 4570, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3827, 4571, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3828, 4572, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3829, 4573, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3830, 4574, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3831, 4575, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3832, 4576, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3833, 4578, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3834, 4579, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3835, 4580, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3836, 4583, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3837, 4584, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3838, 4585, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3839, 4586, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3840, 4588, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3841, 4590, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3842, 4593, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3843, 4594, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3844, 4595, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3845, 4596, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3846, 4597, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3847, 4598, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3848, 4599, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3849, 4601, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3850, 4602, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3851, 4603, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3852, 4605, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3853, 4606, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3854, 4607, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3855, 4608, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `ektablo` (`ektabloindex`, `hareketindex`, `joule`, `pulse`, `radyofrekans`, `lazerbasligi`, `aciklama`, `sikayeti`, `hikayesi`, `muayene`, `tetkik`, `tani`, `tedavi`) VALUES
(3856, 4609, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3857, 4610, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3858, 4611, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3859, 4612, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3860, 4613, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3861, 4614, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3862, 4615, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3863, 4616, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3864, 4617, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3865, 4618, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3866, 4619, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3867, 4620, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3868, 4623, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3869, 4624, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3870, 4625, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3871, 4626, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3872, 4627, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3873, 4628, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3874, 4629, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3875, 4630, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3876, 4631, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3877, 4632, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3878, 4633, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3879, 4634, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3880, 4635, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3881, 4636, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3882, 4637, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3883, 4638, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3884, 4639, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3885, 4640, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3886, 4642, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3887, 4643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3888, 4644, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3889, 4645, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3890, 4646, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3891, 4648, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3892, 4649, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3893, 4651, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3894, 4652, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3895, 4653, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3896, 4655, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3897, 4656, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3898, 4657, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3899, 4658, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3900, 4659, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3901, 4660, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3902, 4661, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3903, 4663, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3904, 4665, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3905, 4666, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3906, 4667, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3907, 4668, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3908, 4670, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3909, 4671, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3910, 4672, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3911, 4673, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3912, 4674, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3913, 4675, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3914, 4676, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3915, 4679, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3916, 4680, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3917, 4681, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3918, 4682, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3919, 4683, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3920, 4685, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3921, 4688, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3922, 4689, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3923, 4692, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3924, 4693, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3925, 4694, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3926, 4695, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3927, 4696, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3928, 4697, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3929, 4698, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3930, 4699, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3931, 4700, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3932, 4701, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3933, 4702, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3934, 4703, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3935, 4704, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3936, 4705, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3937, 4706, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3938, 4707, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3939, 4708, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3940, 4709, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3941, 4710, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3942, 4711, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3943, 4712, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3944, 4713, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3945, 4716, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3946, 4717, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3947, 4718, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3948, 4719, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3949, 4720, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3950, 4721, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3951, 4722, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3952, 4723, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3953, 4724, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3954, 4726, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3955, 4727, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3956, 4728, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3957, 4729, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3958, 4730, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3959, 4731, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3960, 4732, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3961, 4733, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3962, 4734, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3963, 4735, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3964, 4736, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3965, 4738, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3966, 4739, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3967, 4740, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3968, 4741, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3969, 4742, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3970, 4744, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3971, 4745, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3972, 4747, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3973, 4748, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3974, 4749, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3975, 4750, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3976, 4751, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3977, 4752, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3978, 4753, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3979, 4754, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3980, 4755, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3981, 4756, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3982, 4757, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3983, 4759, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3984, 4761, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3985, 4762, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3986, 4763, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3987, 4764, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3988, 4765, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3989, 4766, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3990, 4767, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3991, 4768, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3992, 4770, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3993, 4771, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3994, 4772, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3995, 4773, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3996, 4774, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3997, 4775, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3998, 4776, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3999, 4777, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4000, 4778, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4001, 4780, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4002, 4781, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4003, 4782, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4004, 4783, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4005, 4784, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4006, 4785, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4007, 4786, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4008, 4787, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4009, 4788, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4010, 4790, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4011, 4791, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4012, 4792, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4013, 4793, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4014, 4794, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4015, 4795, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4016, 4796, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4017, 4797, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4018, 4798, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4019, 4799, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4020, 4800, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4021, 4801, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4022, 4802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4023, 4803, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4024, 4804, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4025, 4805, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4026, 4806, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4027, 4807, NULL, NULL, NULL, NULL, NULL, NULL, 'XXMELÝSA_UZN.01DEN KAZANMÝÞ ÝNSTEGRAM ÇEKÝLÝÞÝ', NULL, NULL, NULL, NULL),
(4028, 4808, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4029, 4809, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4030, 4810, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4031, 4811, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4032, 4812, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4033, 4813, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4034, 4814, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4035, 4815, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4036, 4816, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4037, 4818, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4038, 4819, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4039, 4820, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4040, 4821, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4041, 4822, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4042, 4823, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4043, 4824, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4044, 4825, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4045, 4826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4046, 4827, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4047, 4828, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4048, 4829, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4049, 4830, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4050, 4831, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4051, 4832, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4052, 4833, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4053, 4834, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4054, 4835, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4055, 4836, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4056, 4837, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4057, 4838, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4058, 4839, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4059, 4840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4060, 4842, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4061, 4843, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4062, 4844, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4063, 4845, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4064, 4846, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4065, 4847, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4066, 4849, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4067, 4850, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4068, 4852, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4069, 4853, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4070, 4854, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4071, 4855, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4072, 4856, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4073, 4857, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4074, 4858, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4075, 4859, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4076, 4860, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4077, 4861, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4078, 4862, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4079, 4863, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4080, 4864, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4081, 4865, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4082, 4866, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4083, 4867, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4084, 4868, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4085, 4870, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4086, 4871, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4087, 4872, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4088, 4873, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4089, 4874, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4090, 4875, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4091, 4876, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4092, 4877, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4093, 4879, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4094, 4880, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4095, 4881, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4096, 4882, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4097, 4883, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4098, 4884, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4099, 4885, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4100, 4886, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4101, 4887, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4102, 4888, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4103, 4889, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4104, 4890, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4105, 4891, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4106, 4892, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4107, 4893, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4108, 4894, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4109, 4895, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4110, 4896, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4111, 4897, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4112, 4898, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4113, 4899, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4114, 4900, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4115, 4901, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4116, 4902, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4117, 4903, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4118, 4904, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4119, 4905, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4120, 4906, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4121, 4907, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4122, 4908, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4123, 4909, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4124, 4910, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4125, 4911, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4126, 4913, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4127, 4914, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4128, 4915, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4129, 4916, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4130, 4917, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4131, 4918, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4132, 4919, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4133, 4920, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4134, 4921, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4135, 4922, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4136, 4923, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4137, 4924, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4138, 4925, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4139, 4926, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4140, 4927, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4141, 4928, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4142, 4929, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4143, 4930, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4144, 4931, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4145, 4932, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4146, 4933, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4147, 4935, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4148, 4936, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4149, 4937, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4150, 4938, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4151, 4939, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4152, 4940, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4153, 4941, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4154, 4942, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4155, 4943, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4156, 4944, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4157, 4945, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4158, 4947, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4159, 4948, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4160, 4949, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4161, 4952, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4162, 4953, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4163, 4954, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4164, 4955, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4165, 4958, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4166, 4959, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4167, 4960, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4168, 4961, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4169, 4962, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4170, 4963, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4171, 4964, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4172, 4965, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4173, 4966, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4174, 4967, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4175, 4968, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4176, 4969, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4177, 4970, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4178, 4971, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4179, 4972, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4180, 4973, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4181, 4974, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4182, 4975, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4183, 4976, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4184, 4978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4185, 4979, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4186, 4980, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4187, 4981, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4188, 4982, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4189, 4983, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4190, 4984, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4191, 4985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4192, 4986, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4193, 4987, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4194, 4988, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4195, 4989, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4196, 4990, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4197, 4991, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4198, 4992, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4199, 4993, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4200, 4994, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4201, 4995, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4202, 4996, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4203, 4997, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4204, 4998, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4205, 5000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4206, 5001, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4207, 5002, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4208, 5003, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4209, 5004, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4210, 5005, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4211, 5006, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4212, 5007, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4213, 5008, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4214, 5009, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4215, 5010, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4216, 5011, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4217, 5012, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4218, 5013, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4219, 5014, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4220, 5015, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4221, 5016, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4222, 5017, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4223, 5018, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4224, 5019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4225, 5020, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4226, 5021, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4227, 5022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4228, 5023, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4229, 5024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4230, 5025, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4231, 5026, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4232, 5027, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4233, 5028, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4234, 5029, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4235, 5030, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4236, 5031, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4237, 5032, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4238, 5033, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4239, 5034, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4240, 5035, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4241, 5036, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4242, 5037, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4243, 5038, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4244, 5039, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4245, 5040, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4246, 5041, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4247, 5042, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4248, 5043, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4249, 5044, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4250, 5045, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4251, 5046, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4252, 5047, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4253, 5048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4254, 5049, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4255, 5050, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4256, 5051, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4257, 5052, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4258, 5053, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4259, 5054, NULL, NULL, NULL, NULL, NULL, NULL, 'DOSYA SÝSTEMDE', NULL, NULL, NULL, NULL),
(4260, 5055, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4261, 5056, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4262, 5057, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4263, 5058, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4264, 5059, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4265, 5060, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4266, 5061, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4267, 5062, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4268, 5063, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4269, 5064, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4270, 5065, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4271, 5066, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4272, 5067, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4273, 5068, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4274, 5069, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4275, 5070, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4276, 5071, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4277, 5072, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4278, 5073, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4279, 5074, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4280, 5075, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4281, 5076, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4282, 5077, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4283, 5078, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4284, 5079, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4285, 5080, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4286, 5081, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4287, 5082, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4288, 5083, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4289, 5084, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4290, 5085, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4291, 5086, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4292, 5087, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4293, 5088, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4294, 5089, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4295, 5090, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4296, 5091, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4297, 5092, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4298, 5093, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4299, 5094, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4300, 5095, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4301, 5096, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4302, 5097, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4303, 5098, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4304, 5099, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4305, 5100, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4306, 5101, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4307, 5102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4308, 5103, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4309, 5104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4310, 5105, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4311, 5106, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4312, 5107, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4313, 5108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4314, 5109, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4315, 5110, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4316, 5112, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4317, 5113, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4318, 5114, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4319, 5115, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4320, 5116, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4321, 5117, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4322, 5118, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4323, 5119, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4324, 5120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4325, 5121, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4326, 5122, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4327, 5123, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4328, 5124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4329, 5125, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4330, 5126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4331, 5127, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4332, 5128, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4333, 5129, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4334, 5130, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4335, 5131, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4336, 5132, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4337, 5133, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4338, 5134, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4339, 5135, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4340, 5136, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4341, 5137, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4342, 5138, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4343, 5139, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4344, 5140, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4345, 5141, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4346, 5142, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4347, 5143, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4348, 5144, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4349, 5145, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4350, 5146, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4351, 5147, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4352, 5148, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4353, 5149, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4354, 5150, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4355, 5151, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4356, 5152, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4357, 5153, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4358, 5154, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4359, 5155, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4360, 5156, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4361, 5157, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4362, 5158, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4363, 5159, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4364, 5160, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4365, 5161, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4366, 5162, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4367, 5163, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4368, 5164, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4369, 5165, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4370, 5166, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4371, 5167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4372, 5168, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4373, 5169, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4374, 5170, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4375, 5171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4376, 5172, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4377, 5173, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4378, 5174, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4379, 5175, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4380, 5176, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4381, 5177, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4382, 5178, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4383, 5179, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4384, 5180, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4385, 5181, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4386, 5182, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4387, 5183, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4388, 5184, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4389, 5185, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4390, 5186, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4391, 5187, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4392, 5188, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4393, 5189, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4394, 5190, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4395, 5191, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4396, 5192, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4397, 5193, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4398, 5194, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4399, 5195, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4400, 5196, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4401, 5197, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4402, 5198, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4403, 5199, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4404, 5200, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4405, 5201, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4406, 5202, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4407, 5203, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4408, 5204, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4409, 5205, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4410, 5206, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4411, 5207, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4412, 5208, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4413, 5209, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4414, 5211, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4415, 5212, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4416, 5213, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4417, 5214, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4418, 5215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4419, 5216, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4420, 5217, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4421, 5218, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4422, 5219, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4423, 5220, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4424, 5221, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4425, 5222, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4426, 5223, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4427, 5224, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4428, 5225, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4429, 5226, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4430, 5227, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4431, 5228, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4432, 5229, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4433, 5230, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `faturaalti`
--

CREATE TABLE `faturaalti` (
  `alttanimindex` int(3) NOT NULL,
  `faturaindex` int(3) NOT NULL,
  `malzemeindex` int(3) DEFAULT NULL,
  `malzemetanimi` varchar(100) DEFAULT NULL,
  `brfiyat` varchar(10) DEFAULT NULL,
  `miktar` varchar(7) DEFAULT NULL,
  `birim` varchar(20) DEFAULT NULL,
  `malzemekodu` varchar(20) DEFAULT NULL,
  `brfiyatint` varchar(10) DEFAULT NULL,
  `miktarint` varchar(10) DEFAULT NULL,
  `barkodu` varchar(100) DEFAULT NULL,
  `satirturu` varchar(10) DEFAULT 'Malzeme',
  `kdvorani` varchar(10) DEFAULT NULL,
  `iskontoorani` varchar(10) DEFAULT NULL,
  `kdv1int` varchar(10) DEFAULT '0',
  `kdv8int` varchar(10) DEFAULT '0',
  `kdv18int` varchar(10) DEFAULT '0',
  `iskontoint` varchar(10) DEFAULT '0',
  `aratoplamint` varchar(10) DEFAULT '0',
  `islemindex` int(3) DEFAULT NULL,
  `faturatanimi` varchar(100) DEFAULT NULL,
  `bedellint` varchar(10) DEFAULT '0',
  `bedelsizint` varchar(10) DEFAULT '0',
  `indirimint` varchar(10) DEFAULT '0',
  `iskontoorani2` varchar(10) DEFAULT '0',
  `iskontoorani3` varchar(10) DEFAULT '0',
  `sevktarihi` date DEFAULT NULL,
  `adetkatsayi` int(3) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faturalar`
--

CREATE TABLE `faturalar` (
  `faturaindex` int(3) NOT NULL,
  `faturakodu` varchar(30) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `hesaptanimi` varchar(100) NOT NULL,
  `faturaadresi` varchar(250) DEFAULT NULL,
  `kayittarihi` date DEFAULT NULL,
  `sevktarihi` date DEFAULT NULL,
  `faturano` varchar(20) DEFAULT NULL,
  `kayitsaati` time DEFAULT NULL,
  `turu` varchar(30) DEFAULT NULL,
  `parabirimi` varchar(10) DEFAULT NULL,
  `toplami` varchar(10) DEFAULT NULL,
  `toplamint` varchar(10) DEFAULT '0',
  `iskonto` varchar(10) DEFAULT '0',
  `durumu` varchar(100) DEFAULT NULL,
  `carikodu` varchar(100) DEFAULT NULL,
  `donemindex` int(3) DEFAULT NULL,
  `ambarkodu` varchar(100) DEFAULT NULL,
  `plasiyerkodu` varchar(20) DEFAULT NULL,
  `aciklamalar` text DEFAULT NULL,
  `stoketkileme` varchar(10) DEFAULT NULL,
  `hesapetkileme` varchar(10) DEFAULT NULL,
  `odemeplani` varchar(30) DEFAULT NULL,
  `valor` varchar(10) DEFAULT NULL,
  `donem` year(4) DEFAULT NULL,
  `irsaliyeler` varchar(50) DEFAULT NULL,
  `vergidairesi` varchar(100) DEFAULT NULL,
  `vergino` varchar(100) DEFAULT NULL,
  `faturagrubu` varchar(100) DEFAULT NULL,
  `gelirgrubu` varchar(100) DEFAULT NULL,
  `vergigrubu` varchar(100) DEFAULT NULL,
  `kdvtoplami` varchar(10) DEFAULT '0',
  `devirambari` varchar(100) DEFAULT NULL,
  `fiyatliste` varchar(100) DEFAULT NULL,
  `faturail` varchar(50) DEFAULT NULL,
  `faturailce` varchar(70) DEFAULT NULL,
  `subeindex` int(3) DEFAULT NULL,
  `isemrino` varchar(20) DEFAULT NULL,
  `tamamlandi` int(2) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `filtreler`
--

CREATE TABLE `filtreler` (
  `index` int(3) NOT NULL,
  `filtrealan` varchar(50) NOT NULL,
  `filteetiket` varchar(70) NOT NULL,
  `deger` varchar(250) NOT NULL,
  `filtreturu` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filtreler`
--

INSERT INTO `filtreler` (`index`, `filtrealan`, `filteetiket`, `deger`, `filtreturu`) VALUES
(9503, 'carikodu', 'Cari Hesap Kodu', '', ''),
(9504, 'hesaptanimi', 'Cari Hesap Tanýmý', '', ''),
(9505, 'faturano', 'Fatura No', '', ''),
(9506, 'kayittarihi', 'Fatura Tarihi', '', ''),
(9507, 'durumu', 'Ýþlem Durumu', '', ''),
(9508, 'faturagrubu', 'Fatura Türü', '', ''),
(9509, 'ambarkodu', 'Ambar Kodu', '', ''),
(9510, 'kdvtoplami', 'KDV Toplamý', '', ''),
(9511, 'aratoplam', 'Ara Toplam', '', ''),
(9512, 'geneltoplam', 'Genel Toplam', '', ''),
(9513, 'iskonto', 'Ýskonto', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `firmabilgileri`
--

CREATE TABLE `firmabilgileri` (
  `index` int(3) NOT NULL,
  `yurtadi` varchar(100) NOT NULL,
  `yoneticisi` varchar(100) DEFAULT NULL,
  `adres` varchar(100) DEFAULT NULL,
  `telefon` varchar(100) DEFAULT NULL,
  `faks` varchar(100) DEFAULT NULL,
  `eposta` varchar(100) DEFAULT NULL,
  `veritabaniklasoru` varchar(200) DEFAULT NULL,
  `yedekklasoru` varchar(200) DEFAULT NULL,
  `resimklasoru` varchar(200) DEFAULT NULL,
  `gsm` varchar(20) DEFAULT NULL,
  `host` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `sifre` varchar(20) DEFAULT NULL,
  `port` varchar(10) DEFAULT NULL,
  `mobilboard` varchar(250) DEFAULT NULL,
  `dogumgunu` varchar(100) DEFAULT NULL,
  `ozelhatirlatma` varchar(100) DEFAULT NULL,
  `hosgeldin` varchar(100) DEFAULT NULL,
  `randevubaslama` time DEFAULT NULL,
  `randevubitis` time DEFAULT NULL,
  `yenilemearalik` int(3) DEFAULT 10,
  `molabaslama` varchar(20) DEFAULT NULL,
  `molabitis` varchar(20) DEFAULT NULL,
  `muayeneucret` varchar(100) DEFAULT 'False',
  `paraiade` varchar(10) DEFAULT 'False',
  `fazlafatura` varchar(20) DEFAULT NULL,
  `bildirimodeme` varchar(20) DEFAULT NULL,
  `bildirimeposta` varchar(150) DEFAULT NULL,
  `plandis` varchar(100) DEFAULT 'False',
  `plandahil` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `firmabilgileri`
--

INSERT INTO `firmabilgileri` (`index`, `yurtadi`, `yoneticisi`, `adres`, `telefon`, `faks`, `eposta`, `veritabaniklasoru`, `yedekklasoru`, `resimklasoru`, `gsm`, `host`, `username`, `sifre`, `port`, `mobilboard`, `dogumgunu`, `ozelhatirlatma`, `hosgeldin`, `randevubaslama`, `randevubitis`, `yenilemearalik`, `molabaslama`, `molabitis`, `muayeneucret`, `paraiade`, `fazlafatura`, `bildirimodeme`, `bildirimeposta`, `plandis`, `plandahil`) VALUES
(1, 'DERMOXY', 'MELTEM HANIM', '', '', NULL, NULL, 'J:\\wamp\\mysql\\data\\otomofis_dermoxy', 'D:\\ydk', 'D:\\', '', '4', '5327134271', '5327134271', '465', '60', 'DOGUMGUNU', 'BOYA MESAJI', 'HOSGELDIN', '08:00:00', '20:00:00', 10, NULL, NULL, 'False', 'False', NULL, NULL, NULL, 'False', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fiyatlar`
--

CREATE TABLE `fiyatlar` (
  `fiyatindex` int(3) NOT NULL,
  `fiyat` varchar(10) NOT NULL,
  `fiyatbirimi` varchar(10) NOT NULL,
  `fiyatturu` varchar(30) NOT NULL,
  `hizmet` varchar(100) NOT NULL,
  `kdvdahilmi` varchar(10) DEFAULT NULL,
  `fiyattipi` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fiyatlar`
--

INSERT INTO `fiyatlar` (`fiyatindex`, `fiyat`, `fiyatbirimi`, `fiyatturu`, `hizmet`, `kdvdahilmi`, `fiyattipi`) VALUES
(1, '162', 'TL', 'Satýþ', 'MUAYENE', 'True', NULL),
(2, '200', 'TL', 'Satýþ', 'CÝLT BAKIMI', 'True', NULL),
(3, '100', 'TL', 'Satýþ', 'LAZER TÜM YÜZ', 'True', NULL),
(4, '700', 'TL', 'Satýþ', 'BOTOKS', 'True', NULL),
(5, '1000', 'TL', 'Satýþ', 'DUDAK DOLGUSU', 'True', NULL),
(6, '400', 'TL', 'Satýþ', 'PRP', 'True', NULL),
(7, '400', 'TL', 'Satýþ', 'MEZOTERAPÝ YÜZ BÖLGESÝ', 'True', NULL),
(8, '300', 'TL', 'Satýþ', 'DERMAPEN', 'True', NULL),
(9, '700', 'TL', 'Satýþ', 'ÝÐNELÝ RADYO FREKANS', 'True', NULL),
(10, '200', 'TL', 'Satýþ', 'PLEXR', 'True', '1 BÖLGE'),
(11, '1500', 'TL', 'Satýþ', 'YANAK DOLGUSU', 'True', NULL),
(12, '1300', 'TL', 'Satýþ', 'GÖZ ALTI DOLGUSU', 'True', NULL),
(13, '300', 'TL', 'Satýþ', 'KÝMYASAL PEELÝNG', 'True', NULL),
(14, '300', 'TL', 'Satýþ', 'SAÇ MEZOTERAPÝSÝ', 'True', NULL),
(15, '350', 'TL', 'Satýþ', 'BÝYOPSÝ', 'True', NULL),
(16, '350', 'TL', 'Satýþ', 'BEN ALMA', 'True', NULL),
(17, '300', 'TL', 'Satýþ', 'TIRNAK ÇEKÝMÝ', 'True', NULL),
(18, '300', 'TL', 'Satýþ', 'TIRNAK TELÝ UYGULAMASI', 'True', NULL),
(19, '100', 'TL', 'Satýþ', 'PANSUMAN', 'True', NULL),
(20, '400', 'TL', 'Satýþ', 'DAMAR LAZERÝ YÜZ BÖLGESÝ', 'True', NULL),
(21, '1000', 'TL', 'Satýþ', 'DAMAR LAZERÝ BACAK BÖLGESÝ', 'True', NULL),
(22, '600', 'TL', 'Satýþ', 'MÝKROBLAÝDÝNG', 'True', NULL),
(23, '200', 'TL', 'Satýþ', 'KOMEDON TEMÝZLÝÐÝ', 'True', NULL),
(24, '400', 'TL', 'Satýþ', 'KÝST ÇIKARMA', 'True', NULL),
(25, '400', 'TL', 'Satýþ', 'ÇATLAK TEDAVÝSÝ', 'True', NULL),
(26, '150', 'TL', 'Satýþ', 'LAZER KOL', 'True', NULL),
(27, '60', 'TL', 'Satýþ', 'LAZER KOL ALTI BAYAN', 'True', NULL),
(28, '300', 'TL', 'Satýþ', 'LAZER BACAK', 'True', NULL),
(29, '150', 'TL', 'Satýþ', 'LAZER GENÝTAL BAYAN', 'True', NULL),
(30, '500', 'TL', 'Satýþ', 'LAZER GENÝTAL ERKEK', 'True', NULL),
(31, '100', 'TL', 'Satýþ', 'LAZER KOL ALTI ERKEK', 'True', NULL),
(32, '30', 'TL', 'Satýþ', 'LAZER BIYIK BÖLGESÝ', 'True', NULL),
(33, '50', 'TL', 'Satýþ', 'LAZER ÇENE', 'True', NULL),
(34, '400', 'TL', 'Satýþ', 'LAZER SIRT ERKEK', 'True', NULL),
(35, '400', 'TL', 'Satýþ', 'LAZER GÖÐÜS ERKEK', 'True', NULL),
(36, '40', 'TL', 'Satýþ', 'LAZER YANAK ERKEK', 'True', NULL),
(37, '40', 'TL', 'Satýþ', 'LAZER ENSE BÖLGESÝ', 'True', NULL),
(38, '40', 'TL', 'Satýþ', 'LAZER BOYUN BÖLGESÝ', 'True', NULL),
(39, '200', 'TL', 'Satýþ', 'LAZER GÖBEK BÖLGESÝ', 'True', NULL),
(40, '1500', 'TL', 'Satýþ', 'LAZER TÜM VÜCUT PAKET', 'True', NULL),
(41, '100', 'TL', 'Satýþ', 'CÝLT BAKIMI', 'True', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formalanlari`
--

CREATE TABLE `formalanlari` (
  `alan_index` int(3) NOT NULL,
  `alanyazisi` varchar(50) DEFAULT NULL,
  `formtanimi` varchar(50) DEFAULT NULL,
  `alanadi` varchar(50) DEFAULT NULL,
  `alangenisligi` int(3) DEFAULT 100,
  `bagliform_index` int(3) DEFAULT NULL,
  `alanturu` varchar(100) NOT NULL,
  `keyfield` varchar(50) DEFAULT NULL,
  `valuefield` varchar(50) DEFAULT NULL,
  `listegosterim` varchar(10) DEFAULT NULL,
  `alansirasi` int(3) DEFAULT 1,
  `zorunlu` varchar(10) DEFAULT 'False',
  `alangrubu` varchar(100) DEFAULT NULL,
  `verigiristuru` varchar(100) DEFAULT NULL,
  `anahtar_alan` varchar(10) DEFAULT NULL,
  `varsayilan` varchar(100) DEFAULT NULL,
  `fixlist` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formalanlari`
--

INSERT INTO `formalanlari` (`alan_index`, `alanyazisi`, `formtanimi`, `alanadi`, `alangenisligi`, `bagliform_index`, `alanturu`, `keyfield`, `valuefield`, `listegosterim`, `alansirasi`, `zorunlu`, `alangrubu`, `verigiristuru`, `anahtar_alan`, `varsayilan`, `fixlist`) VALUES
(1, 'Ödeme Kodu', 'Ödeme-Tahsilat Planlarý', 'odemekodu', 45, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(2, 'Ödeme Tanýmý', 'Ödeme-Tahsilat Planlarý', 'odemetanimi', 70, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(3, 'Taksit Sayýsý', 'Ödeme-Tahsilat Planlarý', 'taksitadedi', 4, NULL, 'Tamsayi', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(4, 'Vade Aralýðý', 'Ödeme-Tahsilat Planlarý', 'vadegunu', 5, NULL, 'Tamsayi', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(5, 'Hizmet Türü', 'Alýnan Hizmetler', 'hizmetturu', 45, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(6, 'Hizmet Kodu', 'Alýnan Hizmetler', 'hizmetkodu', 30, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(7, 'Hizmet Tanýmý', 'Alýnan Hizmetler', 'hizmettanimi', 65, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(8, 'Hizmet Türü', 'Verilen Hizmetler', 'hizmetturu', 45, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(9, 'Hizmet Tanýmý', 'Verilen Hizmetler', 'hizmettanimi', 45, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL),
(10, 'Hizmet Kodu', 'Verilen Hizmetler', 'hizmetkodu', 45, NULL, 'Karakter', NULL, NULL, 'True', 1, 'True', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formlar`
--

CREATE TABLE `formlar` (
  `form_index` int(3) NOT NULL,
  `formtanimi` varchar(100) NOT NULL,
  `modulu` varchar(100) NOT NULL,
  `yenikayit` varchar(20) DEFAULT 'True',
  `kayitsil` varchar(20) DEFAULT 'True',
  `kayitduzenle` varchar(20) DEFAULT 'True',
  `goruntule` varchar(20) DEFAULT 'True',
  `detaygorme` varchar(20) DEFAULT 'True',
  `sorgusu` longtext CHARACTER SET latin5 DEFAULT NULL,
  `altgrup` varchar(20) DEFAULT 'Ayar',
  `tarihalani` varchar(20) DEFAULT NULL,
  `sorgu2` varchar(250) DEFAULT NULL,
  `where` varchar(250) DEFAULT NULL,
  `tablosu` varchar(100) DEFAULT NULL,
  `resim` blob DEFAULT NULL,
  `sirasi` int(3) DEFAULT 1,
  `raporformu` varchar(70) DEFAULT NULL,
  `raporformu2` varchar(70) DEFAULT NULL,
  `baglialan1` varchar(40) DEFAULT NULL,
  `baglialan2` varchar(40) DEFAULT NULL,
  `baglantituru` varchar(40) DEFAULT NULL,
  `raporturu` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formlar`
--

INSERT INTO `formlar` (`form_index`, `formtanimi`, `modulu`, `yenikayit`, `kayitsil`, `kayitduzenle`, `goruntule`, `detaygorme`, `sorgusu`, `altgrup`, `tarihalani`, `sorgu2`, `where`, `tablosu`, `resim`, `sirasi`, `raporformu`, `raporformu2`, `baglialan1`, `baglialan2`, `baglantituru`, `raporturu`) VALUES
(1, 'Ödeme-Tahsilat Planlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Alým-Satým Tanýmlarý', NULL, '', '', 'odemeplanlari', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Alýnan Hizmetler', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Alým-Satým Tanýmlarý', NULL, NULL, NULL, 'hizmetler', NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Verilen Hizmetler', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Alým-Satým Tanýmlarý', NULL, NULL, NULL, 'hizmetler', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Malzeme Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Hizmet Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Plasiyer Tanýmlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Kampanya Tanýmlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Malzeme Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Hizmet Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Kasa Tanýmlarý', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'Kasa Ýþlemleri', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Kasa Ýþlem Dökümü', 'KASA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'Alým Faturalarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'Satýþ Faturalarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'Alým Ýrsaliyeleri', 'FATURA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'Satýþ Ýrsaliyeleri', 'FATURA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'Alým Fatura Dökümleri', 'FATURA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'Satýþ Fatura Dökümleri', 'FATURA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 'Alým Ýrsaliye Dökümleri', 'FATURA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 'Satýþ Ýrsaliye Dökümleri', 'FATURA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Malzemeler', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 'Marka Tanýmlarý', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'Malzeme Stok Birimleri', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'Malzeme Grup Tanýmlarý', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'Malzeme Barkodlarý', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'Ambar Tanýmlarý', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'Satýþ Sipariþleri', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'Stok Durumlarý', 'STOK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'Malzeme Dökümü', 'STOK', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'Stok Durum Dökümleri', 'STOK', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'Cari Hesaplar', 'CARÝ HESAP', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'Cari Hesap Gruplarý', 'CARÝ HESAP', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 'Cari Liste Dökümü', 'CARÝ HESAP', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'Cari Hesap Ekstresi', 'CARÝ HESAP', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'Cari Bakiye Dökümü', 'CARÝ HESAP', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'Banka Tanýmlarý', 'BANKA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'Pos Tanýmlarý', 'BANKA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Ýþletme Kredi Kartlarý', 'BANKA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'Banka Ýþlemleri', 'BANKA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 'Kredi Kartý Ýþlemleri', 'BANKA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'Banka Ýþlem Dökümü', 'BANKA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 'Kredi Kartý Ýþlem Dökümü', 'BANKA', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'Çek-Senet Tanýmlarý', 'ÇEK-SENET', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'Çek-Senet Vade Raporu', 'ÇEK-SENET', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(45, 'Aylýk Çek-Senet Raporu', 'ÇEK-SENET', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'Çek-Senet Döküm Listesi', 'ÇEK-SENET', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'Gider Yerleri Tanýmlarý', 'MUHASEBE', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'Gelir Grubu Tanýmlarý', 'MUHASEBE', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 'Cari Dönemler', 'MUHASEBE', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(105, 'Müþteri Listesi', '', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'cariler', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(103, 'Personel Bakiye Raporu', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, 'rapor', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(104, 'Personel Özet Ýþlem Raporu', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'personeller', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(97, 'Otomofis CRM', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, '', 1, NULL, NULL, NULL, NULL, NULL, NULL),
(98, 'Cari Hesap Hareketleri', 'CARÝ HESAP', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 'Aylýk Raporlama', '', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(100, 'Personel Maaþ Ýþlemleri', 'RAPORLAR', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(101, 'Plasiyer-Malzeme Satýþ Raporu', 'RAPORLAR', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(61, 'Teklif Durum Tanýmlarý', 'TEKLÝF', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'Teklifler', 'TEKLÝF', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'Teklif Dökümü', 'TEKLÝF', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'Servis Ýþlem Tanýmlarý', 'SERVÝS', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(65, 'Servis Ýþlemleri', 'SERVÝS', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(66, 'Servis Ýþlem Dökümü', 'SERVÝS', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 'Satýþ Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'Sipariþ Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(69, 'Bekleyen Sipariþ Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 'Fatura Bekleme Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(71, 'Sevk Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(72, 'Kritik Stok Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 'Tahsilat Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 'Ödeme Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(75, 'Alacak-Borç Vade Sorgulama Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(76, 'Müþteri Ýþlem Raporu', 'RAPORLAR', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(77, 'Ýþletme Bilgileri', 'SÝSTEM', 'False', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(78, 'Kullanýcý Tanýmlarý', 'SÝSTEM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(79, 'Kullanýcý Deðiþtir', 'SÝSTEM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(80, 'E-Posta Ayarlarý', 'SÝSTEM', 'False', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(81, 'SMS Ayarlarý', 'SÝSTEM', 'False', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(82, 'Mesaj Taslaklarý', 'SÝSTEM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(83, 'Çoklu E-Posta Gönder', 'SÝSTEM', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(84, 'Çoklu SMS Gönder', 'SÝSTEM', 'False', 'False', 'False', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(102, 'Toplu Maaþ Daðýtýmý', 'KASA', 'True', 'True', 'True', 'True', 'True', NULL, 'Sistem', NULL, '', '', 'maas', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 'Araç Tür Tanýmlarý', 'SERVÝS', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'aracturleri', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(85, 'Yedek Alýmý', 'YEDEK', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(86, 'Randevu/Görüþme Yönetimi', 'SÝSTEM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(87, 'Ünite Tanýmlarý', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'unitetanimlari', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(88, 'Üretim Kaynaklarý', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'kaynaktanimlari', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(89, 'Ortak Tanýmlar', 'ALIM-SATIM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, NULL, NULL, 'ortaktanimlar', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(90, 'Vardiya Tanýmlarý', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'vardiyalar', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(91, 'Tüketim-Üretim Çizelgesi', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'stokhareketleri', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(92, 'Maliyet-Kar Analiz Dökümü', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Üretim', NULL, '', '', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(93, 'Proses Tanýmlarý', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'prosestanimlari', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(94, 'Ýþ Emirleri', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'isemirleri', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(95, 'Üretim Planý', 'ÜRETÝM', 'True', 'True', 'True', 'True', 'True', NULL, 'Ayar', NULL, '', '', 'isemirleri', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gelirgrubu`
--

CREATE TABLE `gelirgrubu` (
  `gelirgrubuindex` int(3) NOT NULL,
  `gelirkodu` varchar(30) NOT NULL,
  `gelirtanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gelirgrubu`
--

INSERT INTO `gelirgrubu` (`gelirgrubuindex`, `gelirkodu`, `gelirtanimi`) VALUES
(11, '611', 'SATIÞ ÝSKONTOLARI (-)'),
(10, '602', 'DÝÐER GELÝRLER'),
(9, '601', 'YURT DIÞI SATIÞLAR'),
(8, '600', 'YURT ÝÇÝ SATIÞLAR');

-- --------------------------------------------------------

--
-- Table structure for table `gideryerleri`
--

CREATE TABLE `gideryerleri` (
  `giderindex` int(3) NOT NULL,
  `giderkodu` varchar(30) NOT NULL,
  `gidertanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gideryerleri`
--

INSERT INTO `gideryerleri` (`giderindex`, `giderkodu`, `gidertanimi`) VALUES
(1, '00001', 'PERSONEL PRÝM'),
(2, '00002', 'ELEKTRÝK'),
(3, '00003', 'MAAÞ'),
(4, '00004', 'SARF MALZEMELERÝ'),
(5, '00005', 'SGK'),
(6, '00006', 'MALÝYE'),
(7, '00007', 'MUHASEBE'),
(8, '00008', 'SU'),
(9, '00009', 'TELEFON'),
(10, '00010', 'ÝNTERNET'),
(11, '00011', 'DEMÝRBAÞ');

-- --------------------------------------------------------

--
-- Table structure for table `giriscikislar`
--

CREATE TABLE `giriscikislar` (
  `index` int(3) NOT NULL,
  `islemturu` varchar(20) NOT NULL,
  `tarih` date NOT NULL,
  `giris` time DEFAULT NULL,
  `cikis` time DEFAULT NULL,
  `kodu` int(3) DEFAULT NULL,
  `kartno` varchar(20) DEFAULT NULL,
  `adi` varchar(100) DEFAULT NULL,
  `odemevar` int(3) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gunler`
--

CREATE TABLE `gunler` (
  `index_gunler` int(6) NOT NULL,
  `haftagunu` varchar(45) NOT NULL,
  `haftagunsay` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gunler`
--

INSERT INTO `gunler` (`index_gunler`, `haftagunu`, `haftagunsay`) VALUES
(1, 'Pazartesi', 1),
(2, 'Salý', 2),
(3, 'Çarþamba', 3),
(4, 'Perþembe', 4),
(5, 'Cuma', 5),
(6, 'Cumartesi', 6),
(7, 'Pazar', 7);

-- --------------------------------------------------------

--
-- Table structure for table `gunluk_kur`
--

CREATE TABLE `gunluk_kur` (
  `indeks` int(3) NOT NULL,
  `tarih` date NOT NULL,
  `doviz_kodu` int(2) NOT NULL,
  `doviz` varchar(100) NOT NULL,
  `alis` varchar(20) DEFAULT NULL,
  `satis` varchar(20) DEFAULT NULL,
  `efe_alis` varchar(20) DEFAULT NULL,
  `efe_satis` varchar(20) DEFAULT NULL,
  `saat` varchar(10) DEFAULT NULL,
  `tarihkod` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gunluk_kur`
--

INSERT INTO `gunluk_kur` (`indeks`, `tarih`, `doviz_kodu`, `doviz`, `alis`, `satis`, `efe_alis`, `efe_satis`, `saat`, `tarihkod`) VALUES
(1, '2010-07-09', 1, '1 ABD DOLARI', '1,4815   ', '1,4886   ', '1,4805   ', '1,4908', NULL, NULL),
(2, '2010-07-09', 2, '1 AVUSTRALYA DOLARI', '1,3597   ', '1,3686   ', '1,3534   ', '1,3768', NULL, NULL),
(3, '2010-07-09', 3, '1 DANÝMARKA KRONU', '0,26385  ', '0,26515  ', '0,26367  ', '0,2657', NULL, NULL),
(4, '2010-07-09', 4, '1 EURO', '1,9662   ', '1,9757   ', '1,9648   ', '1,9787', NULL, NULL),
(5, '2010-07-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3625   ', '2,3748   ', '2,3608   ', '2,3784', NULL, NULL),
(6, '2010-07-09', 6, '1 ÝSVÝÇRE FRANGI ', '1,4227   ', '1,4319   ', '1,4206   ', '1,4340', NULL, NULL),
(7, '2010-07-09', 7, '1 ÝSVEÇ KRONU', '0,20804  ', '0,21021  ', '0,20789  ', '0,2106', NULL, NULL),
(8, '2010-07-09', 8, '1 KANADA DOLARI ', '1,4416   ', '1,4481   ', '1,4363   ', '1,4536', NULL, NULL),
(9, '2010-07-09', 9, '1 KUVEYT DÝNARI', '5,1355   ', '5,2031   ', '5,0585   ', '5,2811', NULL, NULL),
(10, '2010-07-09', 10, '1 NORVEÇ KRONU ', '0,24845  ', '0,25013  ', '0,24828  ', '0,2507', NULL, NULL),
(11, '2010-07-09', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,39623  ', '0,39694  ', '0,39326  ', '0,3999', NULL, NULL),
(12, '2010-07-09', 12, '100 JAPON YENÝ', '1,7269   ', '1,7384   ', '1,7205   ', '1,7450', NULL, NULL),
(13, '2010-07-10', 1, '1 ABD DOLARI', '1,0877 AV', 'USTRALYA ', 'DOLARI\nUS', 'D/DKK ', NULL, NULL),
(14, '2010-07-10', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(15, '2010-07-10', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(16, '2010-07-10', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(17, '2010-07-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(18, '2010-07-10', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(19, '2010-07-10', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(20, '2010-07-10', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(21, '2010-07-10', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(22, '2010-07-10', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(23, '2010-07-10', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(24, '2010-07-10', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(25, '2010-07-12', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(26, '2010-07-12', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(27, '2010-07-12', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(28, '2010-07-12', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(29, '2010-07-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(30, '2010-07-12', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(31, '2010-07-12', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(32, '2010-07-12', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(33, '2010-07-12', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(34, '2010-07-12', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(35, '2010-07-12', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(36, '2010-07-12', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(37, '2010-07-20', 1, '1 ABD DOLARI', '1,5331   ', '1,5405   ', '1,5320   ', '1,5428', NULL, NULL),
(38, '2010-07-20', 2, '1 AVUSTRALYA DOLARI', '1,3303   ', '1,3390   ', '1,3242   ', '1,3470', NULL, NULL),
(39, '2010-07-20', 3, '1 DANÝMARKA KRONU', '0,26641  ', '0,26772  ', '0,26622  ', '0,2683', NULL, NULL),
(40, '2010-07-20', 4, '1 EURO', '1,9857   ', '1,9953   ', '1,9843   ', '1,9983', NULL, NULL),
(41, '2010-07-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3434   ', '2,3556   ', '2,3418   ', '2,3591', NULL, NULL),
(42, '2010-07-20', 6, '1 ÝSVÝÇRE FRANGI ', '1,4569   ', '1,4663   ', '1,4547   ', '1,4685', NULL, NULL),
(43, '2010-07-20', 7, '1 ÝSVEÇ KRONU', '0,20734  ', '0,20950  ', '0,20719  ', '0,2099', NULL, NULL),
(44, '2010-07-20', 8, '1 KANADA DOLARI ', '1,4571   ', '1,4637   ', '1,4517   ', '1,4693', NULL, NULL),
(45, '2010-07-20', 9, '1 KUVEYT DÝNARI', '5,2684   ', '5,3378   ', '5,1894   ', '5,4179', NULL, NULL),
(46, '2010-07-20', 10, '1 NORVEÇ KRONU ', '0,24339  ', '0,24503  ', '0,24322  ', '0,2455', NULL, NULL),
(47, '2010-07-20', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,41001  ', '0,41075  ', '0,40693  ', '0,4138', NULL, NULL),
(48, '2010-07-20', 12, '100 JAPON YENÝ', '1,7599   ', '1,7716   ', '1,7534   ', '1,7783', NULL, NULL),
(49, '2010-07-21', 1, '1 ABD DOLARI', '1,5286   ', '1,5360   ', '1,5275   ', '1,5383', NULL, NULL),
(50, '2010-07-21', 2, '1 AVUSTRALYA DOLARI', '1,3381   ', '1,3469   ', '1,3319   ', '1,3550', NULL, NULL),
(51, '2010-07-21', 3, '1 DANÝMARKA KRONU', '0,26525  ', '0,26656  ', '0,26506  ', '0,2671', NULL, NULL),
(52, '2010-07-21', 4, '1 EURO', '1,9770   ', '1,9865   ', '1,9756   ', '1,9895', NULL, NULL),
(53, '2010-07-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3251   ', '2,3373   ', '2,3235   ', '2,3408', NULL, NULL),
(54, '2010-07-21', 6, '1 ÝSVÝÇRE FRANGI ', '1,4497   ', '1,4590   ', '1,4475   ', '1,4612', NULL, NULL),
(55, '2010-07-21', 7, '1 ÝSVEÇ KRONU', '0,20677  ', '0,20892  ', '0,20663  ', '0,2094', NULL, NULL),
(56, '2010-07-21', 8, '1 KANADA DOLARI ', '1,4517   ', '1,4583   ', '1,4463   ', '1,4638', NULL, NULL),
(57, '2010-07-21', 9, '1 KUVEYT DÝNARI', '5,2549   ', '5,3241   ', '5,1761   ', '5,4040', NULL, NULL),
(58, '2010-07-21', 10, '1 NORVEÇ KRONU ', '0,24247  ', '0,24411  ', '0,24230  ', '0,2446', NULL, NULL),
(59, '2010-07-21', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40883  ', '0,40957  ', '0,40576  ', '0,4126', NULL, NULL),
(60, '2010-07-21', 12, '100 JAPON YENÝ', '1,7567   ', '1,7684   ', '1,7502   ', '1,7751', NULL, NULL),
(61, '2010-07-22', 1, '1 ABD DOLARI', '1,5202   ', '1,5275   ', '1,5191   ', '1,5298', NULL, NULL),
(62, '2010-07-22', 2, '1 AVUSTRALYA DOLARI', '1,3415   ', '1,3503   ', '1,3353   ', '1,3584', NULL, NULL),
(63, '2010-07-22', 3, '1 DANÝMARKA KRONU', '0,26196  ', '0,26325  ', '0,26178  ', '0,2638', NULL, NULL),
(64, '2010-07-22', 4, '1 EURO', '1,9524   ', '1,9618   ', '1,9510   ', '1,9647', NULL, NULL),
(65, '2010-07-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3215   ', '2,3336   ', '2,3199   ', '2,3371', NULL, NULL),
(66, '2010-07-22', 6, '1 ÝSVÝÇRE FRANGI ', '1,4438   ', '1,4531   ', '1,4416   ', '1,4553', NULL, NULL),
(67, '2010-07-22', 7, '1 ÝSVEÇ KRONU', '0,20508  ', '0,20721  ', '0,20494  ', '0,2076', NULL, NULL),
(68, '2010-07-22', 8, '1 KANADA DOLARI ', '1,4660   ', '1,4726   ', '1,4606   ', '1,4782', NULL, NULL),
(69, '2010-07-22', 9, '1 KUVEYT DÝNARI', '5,2258   ', '5,2946   ', '5,1474   ', '5,3740', NULL, NULL),
(70, '2010-07-22', 10, '1 NORVEÇ KRONU ', '0,24244  ', '0,24408  ', '0,24227  ', '0,2446', NULL, NULL),
(71, '2010-07-22', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40656  ', '0,40729  ', '0,40351  ', '0,4103', NULL, NULL),
(72, '2010-07-22', 12, '100 JAPON YENÝ', '1,7439   ', '1,7555   ', '1,7374   ', '1,7622', NULL, NULL),
(73, '2010-07-01', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(74, '2010-07-01', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(75, '2010-07-01', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(76, '2010-07-01', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(77, '2010-07-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(78, '2010-07-01', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(79, '2010-07-01', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(80, '2010-07-01', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(81, '2010-07-01', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(82, '2010-07-01', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(83, '2010-07-01', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(84, '2010-07-01', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(85, '2010-07-08', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(86, '2010-07-08', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(87, '2010-07-08', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(88, '2010-07-08', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(89, '2010-07-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(90, '2010-07-08', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(91, '2010-07-08', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(92, '2010-07-08', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(93, '2010-07-08', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(94, '2010-07-08', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(95, '2010-07-08', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(96, '2010-07-08', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(97, '2010-07-29', 1, '1 ABD DOLARI', '1,5032   ', '1,5105   ', '1,5021   ', '1,5128', NULL, NULL),
(98, '2010-07-29', 2, '1 AVUSTRALYA DOLARI', '1,3531   ', '1,3620   ', '1,3469   ', '1,3702', NULL, NULL),
(99, '2010-07-29', 3, '1 DANÝMARKA KRONU', '0,26364  ', '0,26494  ', '0,26346  ', '0,2655', NULL, NULL),
(100, '2010-07-29', 4, '1 EURO', '1,9644   ', '1,9739   ', '1,9630   ', '1,9769', NULL, NULL),
(101, '2010-07-29', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3491   ', '2,3614   ', '2,3475   ', '2,3649', NULL, NULL),
(102, '2010-07-29', 6, '1 ÝSVÝÇRE FRANGI ', '1,4318   ', '1,4410   ', '1,4297   ', '1,4432', NULL, NULL),
(103, '2010-07-29', 7, '1 ÝSVEÇ KRONU', '0,20613  ', '0,20828  ', '0,20599  ', '0,2087', NULL, NULL),
(104, '2010-07-29', 8, '1 KANADA DOLARI ', '1,4565   ', '1,4631   ', '1,4511   ', '1,4687', NULL, NULL),
(105, '2010-07-29', 9, '1 KUVEYT DÝNARI', '5,1838   ', '5,2521   ', '5,1060   ', '5,3309', NULL, NULL),
(106, '2010-07-29', 10, '1 NORVEÇ KRONU ', '0,24544  ', '0,24710  ', '0,24527  ', '0,2476', NULL, NULL),
(107, '2010-07-29', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40205  ', '0,40278  ', '0,39903  ', '0,4058', NULL, NULL),
(108, '2010-07-29', 12, '100 JAPON YENÝ', '1,7226   ', '1,7340   ', '1,7162   ', '1,7406', NULL, NULL),
(109, '2010-07-30', 1, '1 ABD DOLARI', '1,5045   ', '1,5118   ', '1,5034   ', '1,5141', NULL, NULL),
(110, '2010-07-30', 2, '1 AVUSTRALYA DOLARI', '1,3503   ', '1,3591   ', '1,3441   ', '1,3673', NULL, NULL),
(111, '2010-07-30', 3, '1 DANÝMARKA KRONU', '0,26295  ', '0,26424  ', '0,26277  ', '0,2648', NULL, NULL),
(112, '2010-07-30', 4, '1 EURO', '1,9596   ', '1,9691   ', '1,9582   ', '1,9721', NULL, NULL),
(113, '2010-07-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3460   ', '2,3583   ', '2,3444   ', '2,3618', NULL, NULL),
(114, '2010-07-30', 6, '1 ÝSVÝÇRE FRANGI ', '1,4446   ', '1,4539   ', '1,4424   ', '1,4561', NULL, NULL),
(115, '2010-07-30', 7, '1 ÝSVEÇ KRONU', '0,20644  ', '0,20859  ', '0,20630  ', '0,2090', NULL, NULL),
(116, '2010-07-30', 8, '1 KANADA DOLARI ', '1,4559   ', '1,4625   ', '1,4505   ', '1,4681', NULL, NULL),
(117, '2010-07-30', 9, '1 KUVEYT DÝNARI', '5,1865   ', '5,2548   ', '5,1087   ', '5,3336', NULL, NULL),
(118, '2010-07-30', 10, '1 NORVEÇ KRONU ', '0,24575  ', '0,24741  ', '0,24558  ', '0,2479', NULL, NULL),
(119, '2010-07-30', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40240  ', '0,40313  ', '0,39938  ', '0,4061', NULL, NULL),
(120, '2010-07-30', 12, '100 JAPON YENÝ', '1,7392   ', '1,7508   ', '1,7328   ', '1,7575', NULL, NULL),
(121, '2010-07-31', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(122, '2010-07-31', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(123, '2010-07-31', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(124, '2010-07-31', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(125, '2010-07-31', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(126, '2010-07-31', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(127, '2010-07-31', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(128, '2010-07-31', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(129, '2010-07-31', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(130, '2010-07-31', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(131, '2010-07-31', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(132, '2010-07-31', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(133, '2010-08-02', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(134, '2010-08-02', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(135, '2010-08-02', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(136, '2010-08-02', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(137, '2010-08-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(138, '2010-08-02', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(139, '2010-08-02', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(140, '2010-08-02', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(141, '2010-08-02', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(142, '2010-08-02', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(143, '2010-08-02', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(144, '2010-08-02', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(145, '2010-08-03', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(146, '2010-08-03', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(147, '2010-08-03', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(148, '2010-08-03', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(149, '2010-08-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(150, '2010-08-03', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(151, '2010-08-03', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(152, '2010-08-03', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(153, '2010-08-03', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(154, '2010-08-03', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(155, '2010-08-03', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(156, '2010-08-03', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(157, '2010-08-04', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(158, '2010-08-04', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(159, '2010-08-04', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(160, '2010-08-04', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(161, '2010-08-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(162, '2010-08-04', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(163, '2010-08-04', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(164, '2010-08-04', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(165, '2010-08-04', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(166, '2010-08-04', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(167, '2010-08-04', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(168, '2010-08-04', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(169, '2010-08-05', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(170, '2010-08-05', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(171, '2010-08-05', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(172, '2010-08-05', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(173, '2010-08-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(174, '2010-08-05', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(175, '2010-08-05', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(176, '2010-08-05', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(177, '2010-08-05', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(178, '2010-08-05', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(179, '2010-08-05', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(180, '2010-08-05', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(181, '2010-08-06', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(182, '2010-08-06', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(183, '2010-08-06', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(184, '2010-08-06', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(185, '2010-08-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(186, '2010-08-06', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(187, '2010-08-06', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(188, '2010-08-06', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(189, '2010-08-06', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(190, '2010-08-06', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(191, '2010-08-06', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(192, '2010-08-06', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(193, '2010-08-07', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(194, '2010-08-07', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(195, '2010-08-07', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(196, '2010-08-07', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(197, '2010-08-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(198, '2010-08-07', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(199, '2010-08-07', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(200, '2010-08-07', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(201, '2010-08-07', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(202, '2010-08-07', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(203, '2010-08-07', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(204, '2010-08-07', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(205, '2010-08-09', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(206, '2010-08-09', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(207, '2010-08-09', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(208, '2010-08-09', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(209, '2010-08-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(210, '2010-08-09', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(211, '2010-08-09', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(212, '2010-08-09', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(213, '2010-08-09', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(214, '2010-08-09', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(215, '2010-08-09', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(216, '2010-08-09', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(217, '2010-08-10', 1, '1 ABD DOLARI', '1,4902   ', '1,4974   ', '1,4892   ', '1,4996', NULL, NULL),
(218, '2010-08-10', 2, '1 AVUSTRALYA DOLARI', '1,3551   ', '1,3640   ', '1,3489   ', '1,3722', NULL, NULL),
(219, '2010-08-10', 3, '1 DANÝMARKA KRONU', '0,26315  ', '0,26445  ', '0,26297  ', '0,2650', NULL, NULL),
(220, '2010-08-10', 4, '1 EURO', '1,9608   ', '1,9703   ', '1,9594   ', '1,9733', NULL, NULL),
(221, '2010-08-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3495   ', '2,3618   ', '2,3479   ', '2,3653', NULL, NULL),
(222, '2010-08-10', 6, '1 ÝSVÝÇRE FRANGI ', '1,4110   ', '1,4201   ', '1,4089   ', '1,4222', NULL, NULL),
(223, '2010-08-10', 7, '1 ÝSVEÇ KRONU', '0,20737  ', '0,20953  ', '0,20722  ', '0,2100', NULL, NULL),
(224, '2010-08-10', 8, '1 KANADA DOLARI ', '1,4425   ', '1,4490   ', '1,4372   ', '1,4545', NULL, NULL),
(225, '2010-08-10', 9, '1 KUVEYT DÝNARI', '5,1532   ', '5,2211   ', '5,0759   ', '5,2994', NULL, NULL),
(226, '2010-08-10', 10, '1 NORVEÇ KRONU ', '0,24759  ', '0,24926  ', '0,24742  ', '0,2498', NULL, NULL),
(227, '2010-08-10', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,39855  ', '0,39927  ', '0,39556  ', '0,4022', NULL, NULL),
(228, '2010-08-10', 12, '100 JAPON YENÝ', '1,7323   ', '1,7438   ', '1,7259   ', '1,7504', NULL, NULL),
(229, '2010-08-11', 1, '1 ABD DOLARI', '1,4902   ', '1,4974   ', '1,4892   ', '1,4996', NULL, NULL),
(230, '2010-08-11', 2, '1 AVUSTRALYA DOLARI', '1,3551   ', '1,3640   ', '1,3489   ', '1,3722', NULL, NULL),
(231, '2010-08-11', 3, '1 DANÝMARKA KRONU', '0,26315  ', '0,26445  ', '0,26297  ', '0,2650', NULL, NULL),
(232, '2010-08-11', 4, '1 EURO', '1,9608   ', '1,9703   ', '1,9594   ', '1,9733', NULL, NULL),
(233, '2010-08-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3495   ', '2,3618   ', '2,3479   ', '2,3653', NULL, NULL),
(234, '2010-08-11', 6, '1 ÝSVÝÇRE FRANGI ', '1,4110   ', '1,4201   ', '1,4089   ', '1,4222', NULL, NULL),
(235, '2010-08-11', 7, '1 ÝSVEÇ KRONU', '0,20737  ', '0,20953  ', '0,20722  ', '0,2100', NULL, NULL),
(236, '2010-08-11', 8, '1 KANADA DOLARI ', '1,4425   ', '1,4490   ', '1,4372   ', '1,4545', NULL, NULL),
(237, '2010-08-11', 9, '1 KUVEYT DÝNARI', '5,1532   ', '5,2211   ', '5,0759   ', '5,2994', NULL, NULL),
(238, '2010-08-11', 10, '1 NORVEÇ KRONU ', '0,24759  ', '0,24926  ', '0,24742  ', '0,2498', NULL, NULL),
(239, '2010-08-11', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,39855  ', '0,39927  ', '0,39556  ', '0,4022', NULL, NULL),
(240, '2010-08-11', 12, '100 JAPON YENÝ', '1,7323   ', '1,7438   ', '1,7259   ', '1,7504', NULL, NULL),
(241, '2010-08-12', 1, '1 ABD DOLARI', '1,5028   ', '1,5100   ', '1,5017   ', '1,5123', NULL, NULL),
(242, '2010-08-12', 2, '1 AVUSTRALYA DOLARI', '1,3552   ', '1,3641   ', '1,3490   ', '1,3723', NULL, NULL),
(243, '2010-08-12', 3, '1 DANÝMARKA KRONU', '0,26287  ', '0,26416  ', '0,26269  ', '0,2647', NULL, NULL),
(244, '2010-08-12', 4, '1 EURO', '1,9587   ', '1,9681   ', '1,9573   ', '1,9711', NULL, NULL),
(245, '2010-08-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3642   ', '2,3766   ', '2,3625   ', '2,3802', NULL, NULL),
(246, '2010-08-12', 6, '1 ÝSVÝÇRE FRANGI ', '1,4236   ', '1,4328   ', '1,4215   ', '1,4349', NULL, NULL),
(247, '2010-08-12', 7, '1 ÝSVEÇ KRONU', '0,20550  ', '0,20764  ', '0,20536  ', '0,2081', NULL, NULL),
(248, '2010-08-12', 8, '1 KANADA DOLARI ', '1,4498   ', '1,4564   ', '1,4444   ', '1,4619', NULL, NULL),
(249, '2010-08-12', 9, '1 KUVEYT DÝNARI', '5,1929   ', '5,2613   ', '5,1150   ', '5,3402', NULL, NULL),
(250, '2010-08-12', 10, '1 NORVEÇ KRONU ', '0,24497  ', '0,24662  ', '0,24480  ', '0,2471', NULL, NULL),
(251, '2010-08-12', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40193  ', '0,40265  ', '0,39892  ', '0,4056', NULL, NULL),
(252, '2010-08-12', 12, '100 JAPON YENÝ', '1,7626   ', '1,7743   ', '1,7561   ', '1,7810', NULL, NULL),
(253, '2010-08-13', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(254, '2010-08-13', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(255, '2010-08-13', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(256, '2010-08-13', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(257, '2010-08-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(258, '2010-08-13', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(259, '2010-08-13', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(260, '2010-08-13', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(261, '2010-08-13', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(262, '2010-08-13', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(263, '2010-08-13', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(264, '2010-08-13', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(265, '2010-08-14', 1, '1 ABD DOLARI', '1,5065   ', '1,5138   ', '1,5054   ', '1,5161', NULL, NULL),
(266, '2010-08-14', 2, '1 AVUSTRALYA DOLARI', '1,3512   ', '1,3600   ', '1,3450   ', '1,3682', NULL, NULL),
(267, '2010-08-14', 3, '1 DANÝMARKA KRONU', '0,25934  ', '0,26062  ', '0,25916  ', '0,2612', NULL, NULL),
(268, '2010-08-14', 4, '1 EURO', '1,9325   ', '1,9418   ', '1,9311   ', '1,9447', NULL, NULL),
(269, '2010-08-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3512   ', '2,3635   ', '2,3496   ', '2,3670', NULL, NULL),
(270, '2010-08-14', 6, '1 ÝSVÝÇRE FRANGI ', '1,4291   ', '1,4383   ', '1,4270   ', '1,4405', NULL, NULL),
(271, '2010-08-14', 7, '1 ÝSVEÇ KRONU', '0,20257  ', '0,20468  ', '0,20243  ', '0,2051', NULL, NULL),
(272, '2010-08-14', 8, '1 KANADA DOLARI ', '1,4490   ', '1,4556   ', '1,4436   ', '1,4611', NULL, NULL),
(273, '2010-08-14', 9, '1 KUVEYT DÝNARI', '5,1915   ', '5,2599   ', '5,1136   ', '5,3388', NULL, NULL),
(274, '2010-08-14', 10, '1 NORVEÇ KRONU ', '0,24356  ', '0,24520  ', '0,24339  ', '0,2457', NULL, NULL),
(275, '2010-08-14', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40293  ', '0,40366  ', '0,39991  ', '0,4066', NULL, NULL),
(276, '2010-08-14', 12, '100 JAPON YENÝ', '1,7529   ', '1,7645   ', '1,7464   ', '1,7712', NULL, NULL),
(277, '2010-08-16', 1, '1 ABD DOLARI', '1,5054   ', '1,5127   ', '1,5043   ', '1,5150', NULL, NULL),
(278, '2010-08-16', 2, '1 AVUSTRALYA DOLARI', '1,3398   ', '1,3486   ', '1,3336   ', '1,3567', NULL, NULL),
(279, '2010-08-16', 3, '1 DANÝMARKA KRONU', '0,25890  ', '0,26017  ', '0,25872  ', '0,2607', NULL, NULL),
(280, '2010-08-16', 4, '1 EURO', '1,9291   ', '1,9384   ', '1,9277   ', '1,9413', NULL, NULL),
(281, '2010-08-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3469   ', '2,3592   ', '2,3453   ', '2,3627', NULL, NULL),
(282, '2010-08-16', 6, '1 ÝSVÝÇRE FRANGI ', '1,4448   ', '1,4541   ', '1,4426   ', '1,4563', NULL, NULL),
(283, '2010-08-16', 7, '1 ÝSVEÇ KRONU', '0,20167  ', '0,20377  ', '0,20153  ', '0,2042', NULL, NULL),
(284, '2010-08-16', 8, '1 KANADA DOLARI ', '1,4466   ', '1,4531   ', '1,4412   ', '1,4586', NULL, NULL),
(285, '2010-08-16', 9, '1 KUVEYT DÝNARI', '5,1806   ', '5,2488   ', '5,1029   ', '5,3275', NULL, NULL),
(286, '2010-08-16', 10, '1 NORVEÇ KRONU ', '0,24212  ', '0,24375  ', '0,24195  ', '0,2443', NULL, NULL),
(287, '2010-08-16', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40264  ', '0,40337  ', '0,39962  ', '0,4064', NULL, NULL),
(288, '2010-08-16', 12, '100 JAPON YENÝ', '1,7541   ', '1,7658   ', '1,7476   ', '1,7725', NULL, NULL),
(289, '2010-08-17', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(290, '2010-08-17', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(291, '2010-08-17', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(292, '2010-08-17', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(293, '2010-08-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(294, '2010-08-17', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(295, '2010-08-17', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(296, '2010-08-17', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(297, '2010-08-17', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(298, '2010-08-17', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(299, '2010-08-17', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(300, '2010-08-17', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(301, '2010-08-18', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(302, '2010-08-18', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(303, '2010-08-18', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(304, '2010-08-18', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(305, '2010-08-18', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(306, '2010-08-18', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(307, '2010-08-18', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(308, '2010-08-18', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(309, '2010-08-18', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(310, '2010-08-18', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(311, '2010-08-18', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(312, '2010-08-18', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(313, '2010-08-19', 1, '1 ABD DOLARI', '1,4943   ', '1,5015   ', '1,4933   ', '1,5038', NULL, NULL),
(314, '2010-08-19', 2, '1 AVUSTRALYA DOLARI', '1,3422   ', '1,3510   ', '1,3360   ', '1,3591', NULL, NULL),
(315, '2010-08-19', 3, '1 DANÝMARKA KRONU', '0,25721  ', '0,25848  ', '0,25703  ', '0,2590', NULL, NULL),
(316, '2010-08-19', 4, '1 EURO', '1,9166   ', '1,9258   ', '1,9153   ', '1,9287', NULL, NULL),
(317, '2010-08-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3312   ', '2,3434   ', '2,3296   ', '2,3469', NULL, NULL),
(318, '2010-08-19', 6, '1 ÝSVÝÇRE FRANGI ', '1,4346   ', '1,4438   ', '1,4324   ', '1,4460', NULL, NULL),
(319, '2010-08-19', 7, '1 ÝSVEÇ KRONU', '0,20181  ', '0,20391  ', '0,20167  ', '0,2043', NULL, NULL),
(320, '2010-08-19', 8, '1 KANADA DOLARI ', '1,4536   ', '1,4602   ', '1,4482   ', '1,4657', NULL, NULL),
(321, '2010-08-19', 9, '1 KUVEYT DÝNARI', '5,1457   ', '5,2135   ', '5,0685   ', '5,2917', NULL, NULL),
(322, '2010-08-19', 10, '1 NORVEÇ KRONU ', '0,24186  ', '0,24349  ', '0,24169  ', '0,2440', NULL, NULL),
(323, '2010-08-19', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,39966  ', '0,40038  ', '0,39666  ', '0,4033', NULL, NULL),
(324, '2010-08-19', 12, '100 JAPON YENÝ', '1,7427   ', '1,7543   ', '1,7363   ', '1,7610', NULL, NULL),
(325, '2010-08-20', 1, '1 ABD DOLARI', '1,5068   ', '1,5141   ', '1,5057   ', '1,5164', NULL, NULL),
(326, '2010-08-20', 2, '1 AVUSTRALYA DOLARI', '1,3361   ', '1,3448   ', '1,3300   ', '1,3529', NULL, NULL),
(327, '2010-08-20', 3, '1 DANÝMARKA KRONU', '0,25784  ', '0,25911  ', '0,25766  ', '0,2597', NULL, NULL),
(328, '2010-08-20', 4, '1 EURO', '1,9212   ', '1,9305   ', '1,9199   ', '1,9334', NULL, NULL),
(329, '2010-08-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3386   ', '2,3508   ', '2,3370   ', '2,3543', NULL, NULL),
(330, '2010-08-20', 6, '1 ÝSVÝÇRE FRANGI ', '1,4553   ', '1,4647   ', '1,4531   ', '1,4669', NULL, NULL),
(331, '2010-08-20', 7, '1 ÝSVEÇ KRONU', '0,20165  ', '0,20375  ', '0,20151  ', '0,2042', NULL, NULL),
(332, '2010-08-20', 8, '1 KANADA DOLARI ', '1,4427   ', '1,4492   ', '1,4374   ', '1,4547', NULL, NULL),
(333, '2010-08-20', 9, '1 KUVEYT DÝNARI', '5,1835   ', '5,2518   ', '5,1057   ', '5,3306', NULL, NULL),
(334, '2010-08-20', 10, '1 NORVEÇ KRONU ', '0,24083  ', '0,24245  ', '0,24066  ', '0,2430', NULL, NULL),
(335, '2010-08-20', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40302  ', '0,40375  ', '0,40000  ', '0,4067', NULL, NULL),
(336, '2010-08-20', 12, '100 JAPON YENÝ', '1,7621   ', '1,7738   ', '1,7556   ', '1,7805', NULL, NULL),
(337, '2010-08-23', 1, '1 ABD DOLARI', '1,5068   ', '1,5141   ', '1,5057   ', '1,5164', NULL, NULL),
(338, '2010-08-23', 2, '1 AVUSTRALYA DOLARI', '1,3361   ', '1,3448   ', '1,3300   ', '1,3529', NULL, NULL),
(339, '2010-08-23', 3, '1 DANÝMARKA KRONU', '0,25784  ', '0,25911  ', '0,25766  ', '0,2597', NULL, NULL),
(340, '2010-08-23', 4, '1 EURO', '1,9212   ', '1,9305   ', '1,9199   ', '1,9334', NULL, NULL),
(341, '2010-08-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3386   ', '2,3508   ', '2,3370   ', '2,3543', NULL, NULL),
(342, '2010-08-23', 6, '1 ÝSVÝÇRE FRANGI ', '1,4553   ', '1,4647   ', '1,4531   ', '1,4669', NULL, NULL),
(343, '2010-08-23', 7, '1 ÝSVEÇ KRONU', '0,20165  ', '0,20375  ', '0,20151  ', '0,2042', NULL, NULL),
(344, '2010-08-23', 8, '1 KANADA DOLARI ', '1,4427   ', '1,4492   ', '1,4374   ', '1,4547', NULL, NULL),
(345, '2010-08-23', 9, '1 KUVEYT DÝNARI', '5,1835   ', '5,2518   ', '5,1057   ', '5,3306', NULL, NULL),
(346, '2010-08-23', 10, '1 NORVEÇ KRONU ', '0,24083  ', '0,24245  ', '0,24066  ', '0,2430', NULL, NULL),
(347, '2010-08-23', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40302  ', '0,40375  ', '0,40000  ', '0,4067', NULL, NULL),
(348, '2010-08-23', 12, '100 JAPON YENÝ', '1,7621   ', '1,7738   ', '1,7556   ', '1,7805', NULL, NULL),
(349, '2010-08-24', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(350, '2010-08-24', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(351, '2010-08-24', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(352, '2010-08-24', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(353, '2010-08-24', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(354, '2010-08-24', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(355, '2010-08-24', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(356, '2010-08-24', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(357, '2010-08-24', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(358, '2010-08-24', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(359, '2010-08-24', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(360, '2010-08-24', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(361, '2010-08-25', 1, '1 ABD DOLARI', '1,5253   ', '1,5327   ', '1,5242   ', '1,5350', NULL, NULL),
(362, '2010-08-25', 2, '1 AVUSTRALYA DOLARI', '1,3464   ', '1,3552   ', '1,3402   ', '1,3633', NULL, NULL),
(363, '2010-08-25', 3, '1 DANÝMARKA KRONU', '0,25832  ', '0,25959  ', '0,25814  ', '0,2601', NULL, NULL),
(364, '2010-08-25', 4, '1 EURO', '1,9245   ', '1,9338   ', '1,9232   ', '1,9367', NULL, NULL),
(365, '2010-08-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3479   ', '2,3602   ', '2,3463   ', '2,3637', NULL, NULL),
(366, '2010-08-25', 6, '1 ÝSVÝÇRE FRANGI ', '1,4604   ', '1,4698   ', '1,4582   ', '1,4720', NULL, NULL),
(367, '2010-08-25', 7, '1 ÝSVEÇ KRONU', '0,20337  ', '0,20549  ', '0,20323  ', '0,2059', NULL, NULL),
(368, '2010-08-25', 8, '1 KANADA DOLARI ', '1,4393   ', '1,4458   ', '1,4340   ', '1,4513', NULL, NULL),
(369, '2010-08-25', 9, '1 KUVEYT DÝNARI', '5,2381   ', '5,3071   ', '5,1595   ', '5,3867', NULL, NULL),
(370, '2010-08-25', 10, '1 NORVEÇ KRONU ', '0,24185  ', '0,24348  ', '0,24168  ', '0,2440', NULL, NULL),
(371, '2010-08-25', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,40796  ', '0,40870  ', '0,40490  ', '0,4117', NULL, NULL),
(372, '2010-08-25', 12, '100 JAPON YENÝ', '1,8049   ', '1,8169   ', '1,7982   ', '1,8238', NULL, NULL),
(373, '2010-09-01', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(374, '2010-09-01', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(375, '2010-09-01', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(376, '2010-09-01', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(377, '2010-09-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(378, '2010-09-01', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(379, '2010-09-01', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(380, '2010-09-01', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(381, '2010-09-01', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(382, '2010-09-01', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(383, '2010-09-01', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(384, '2010-09-01', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(385, '2010-09-02', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(386, '2010-09-02', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(387, '2010-09-02', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(388, '2010-09-02', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(389, '2010-09-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(390, '2010-09-02', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(391, '2010-09-02', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(392, '2010-09-02', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(393, '2010-09-02', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(394, '2010-09-02', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(395, '2010-09-02', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(396, '2010-09-02', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(397, '2010-09-06', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(398, '2010-09-06', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(399, '2010-09-06', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(400, '2010-09-06', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(401, '2010-09-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(402, '2010-09-06', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(403, '2010-09-06', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(404, '2010-09-06', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(405, '2010-09-06', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(406, '2010-09-06', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(407, '2010-09-06', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(408, '2010-09-06', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(409, '2010-09-07', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(410, '2010-09-07', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(411, '2010-09-07', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(412, '2010-09-07', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(413, '2010-09-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(414, '2010-09-07', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(415, '2010-09-07', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(416, '2010-09-07', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(417, '2010-09-07', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(418, '2010-09-07', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(419, '2010-09-07', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(420, '2010-09-07', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(421, '2010-09-08', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(422, '2010-09-08', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(423, '2010-09-08', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(424, '2010-09-08', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(425, '2010-09-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(426, '2010-09-08', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(427, '2010-09-08', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(428, '2010-09-08', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(429, '2010-09-08', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(430, '2010-09-08', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(431, '2010-09-08', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(432, '2010-09-08', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(433, '2010-09-09', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(434, '2010-09-09', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(435, '2010-09-09', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(436, '2010-09-09', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(437, '2010-09-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(438, '2010-09-09', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(439, '2010-09-09', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(440, '2010-09-09', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(441, '2010-09-09', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(442, '2010-09-09', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(443, '2010-09-09', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(444, '2010-09-09', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(445, '2010-09-10', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(446, '2010-09-10', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(447, '2010-09-10', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(448, '2010-09-10', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(449, '2010-09-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(450, '2010-09-10', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(451, '2010-09-10', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(452, '2010-09-10', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(453, '2010-09-10', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(454, '2010-09-10', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(455, '2010-09-10', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(456, '2010-09-10', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(457, '2010-09-11', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(458, '2010-09-11', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(459, '2010-09-11', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(460, '2010-09-11', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(461, '2010-09-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(462, '2010-09-11', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(463, '2010-09-11', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(464, '2010-09-11', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(465, '2010-09-11', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(466, '2010-09-11', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(467, '2010-09-11', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(468, '2010-09-11', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(469, '2010-09-12', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(470, '2010-09-12', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(471, '2010-09-12', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(472, '2010-09-12', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(473, '2010-09-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(474, '2010-09-12', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(475, '2010-09-12', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(476, '2010-09-12', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(477, '2010-09-12', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(478, '2010-09-12', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(479, '2010-09-12', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(480, '2010-09-12', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(481, '2010-09-13', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(482, '2010-09-13', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(483, '2010-09-13', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(484, '2010-09-13', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(485, '2010-09-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(486, '2010-09-13', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(487, '2010-09-13', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(488, '2010-09-13', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(489, '2010-09-13', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(490, '2010-09-13', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(491, '2010-09-13', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(492, '2010-09-13', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(493, '2010-09-14', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(494, '2010-09-14', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(495, '2010-09-14', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(496, '2010-09-14', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(497, '2010-09-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(498, '2010-09-14', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(499, '2010-09-14', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(500, '2010-09-14', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(501, '2010-09-14', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(502, '2010-09-14', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(503, '2010-09-14', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(504, '2010-09-14', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(505, '2010-09-18', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(506, '2010-09-18', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(507, '2010-09-18', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(508, '2010-09-18', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(509, '2010-09-18', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(510, '2010-09-18', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(511, '2010-09-18', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(512, '2010-09-18', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(513, '2010-09-18', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(514, '2010-09-18', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(515, '2010-09-18', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(516, '2010-09-18', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(517, '2010-09-20', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(518, '2010-09-20', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(519, '2010-09-20', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(520, '2010-09-20', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(521, '2010-09-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(522, '2010-09-20', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(523, '2010-09-20', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(524, '2010-09-20', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(525, '2010-09-20', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(526, '2010-09-20', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(527, '2010-09-20', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(528, '2010-09-20', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(529, '2010-09-21', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(530, '2010-09-21', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(531, '2010-09-21', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(532, '2010-09-21', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(533, '2010-09-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(534, '2010-09-21', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(535, '2010-09-21', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(536, '2010-09-21', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(537, '2010-09-21', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(538, '2010-09-21', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(539, '2010-09-21', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(540, '2010-09-21', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(541, '2010-09-22', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(542, '2010-09-22', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(543, '2010-09-22', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(544, '2010-09-22', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(545, '2010-09-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(546, '2010-09-22', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(547, '2010-09-22', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(548, '2010-09-22', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(549, '2010-09-22', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(550, '2010-09-22', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(551, '2010-09-22', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(552, '2010-09-22', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(553, '2010-09-24', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(554, '2010-09-24', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(555, '2010-09-24', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(556, '2010-09-24', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(557, '2010-09-24', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(558, '2010-09-24', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(559, '2010-09-24', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(560, '2010-09-24', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(561, '2010-09-24', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(562, '2010-09-24', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(563, '2010-09-24', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(564, '2010-09-24', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL);
INSERT INTO `gunluk_kur` (`indeks`, `tarih`, `doviz_kodu`, `doviz`, `alis`, `satis`, `efe_alis`, `efe_satis`, `saat`, `tarihkod`) VALUES
(565, '2010-09-25', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(566, '2010-09-25', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(567, '2010-09-25', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(568, '2010-09-25', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(569, '2010-09-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(570, '2010-09-25', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(571, '2010-09-25', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(572, '2010-09-25', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(573, '2010-09-25', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(574, '2010-09-25', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(575, '2010-09-25', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(576, '2010-09-25', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(577, '2010-09-27', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(578, '2010-09-27', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(579, '2010-09-27', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(580, '2010-09-27', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, NULL),
(581, '2010-09-27', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(582, '2010-09-27', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(583, '2010-09-27', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, NULL),
(584, '2010-09-27', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(585, '2010-09-27', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, NULL),
(586, '2010-09-27', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(587, '2010-09-27', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(588, '2010-09-27', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, NULL),
(589, '2010-09-28', 1, '1 ABD DOLARI', '1,4686   ', '1,4757   ', '1,4676   ', '1,4779', NULL, NULL),
(590, '2010-09-28', 2, '1 AVUSTRALYA DOLARI', '1,4075   ', '1,4167   ', '1,4010   ', '1,4252', NULL, NULL),
(591, '2010-09-28', 3, '1 DANÝMARKA KRONU', '0,26543  ', '0,26674  ', '0,26524  ', '0,2673', NULL, NULL),
(592, '2010-09-28', 4, '1 EURO', '1,9778   ', '1,9873   ', '1,9764   ', '1,9903', NULL, NULL),
(593, '2010-09-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,3244   ', '2,3365   ', '2,3228   ', '2,3400', NULL, NULL),
(594, '2010-09-28', 6, '1 ÝSVÝÇRE FRANGI ', '1,4886   ', '1,4982   ', '1,4864   ', '1,5004', NULL, NULL),
(595, '2010-09-28', 7, '1 ÝSVEÇ KRONU', '0,21467  ', '0,21690  ', '0,21452  ', '0,2174', NULL, NULL),
(596, '2010-09-28', 8, '1 KANADA DOLARI ', '1,4346   ', '1,4411   ', '1,4293   ', '1,4466', NULL, NULL),
(597, '2010-09-28', 9, '1 KUVEYT DÝNARI', '5,1070   ', '5,1743   ', '5,0304   ', '5,2519', NULL, NULL),
(598, '2010-09-28', 10, '1 NORVEÇ KRONU ', '0,24963  ', '0,25131  ', '0,24946  ', '0,2518', NULL, NULL),
(599, '2010-09-28', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,39277  ', '0,39348  ', '0,38982  ', '0,3964', NULL, NULL),
(600, '2010-09-28', 12, '100 JAPON YENÝ', '1,7406   ', '1,7522   ', '1,7342   ', '1,7589', NULL, NULL),
(601, '2010-09-29', 1, '1 ABD DOLARI', '1,4512   ', '1,4582   ', '1,4502   ', '1,4604', NULL, NULL),
(602, '2010-09-29', 2, '1 AVUSTRALYA DOLARI', '1,4071   ', '1,4163   ', '1,4006   ', '1,4248', NULL, NULL),
(603, '2010-09-29', 3, '1 DANÝMARKA KRONU', '0,26504  ', '0,26635  ', '0,26485  ', '0,2669', NULL, NULL),
(604, '2010-09-29', 4, '1 EURO', '1,9754   ', '1,9849   ', '1,9740   ', '1,9879', NULL, NULL),
(605, '2010-09-29', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2937   ', '2,3057   ', '2,2921   ', '2,3092', NULL, NULL),
(606, '2010-09-29', 6, '1 ÝSVÝÇRE FRANGI ', '1,4842   ', '1,4938   ', '1,4820   ', '1,4960', NULL, NULL),
(607, '2010-09-29', 7, '1 ÝSVEÇ KRONU', '0,21460  ', '0,21683  ', '0,21445  ', '0,2173', NULL, NULL),
(608, '2010-09-29', 8, '1 KANADA DOLARI ', '1,4130   ', '1,4194   ', '1,4078   ', '1,4248', NULL, NULL),
(609, '2010-09-29', 9, '1 KUVEYT DÝNARI', '5,0535   ', '5,1201   ', '4,9777   ', '5,1969', NULL, NULL),
(610, '2010-09-29', 10, '1 NORVEÇ KRONU ', '0,24745  ', '0,24912  ', '0,24728  ', '0,2496', NULL, NULL),
(611, '2010-09-29', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38811  ', '0,38881  ', '0,38520  ', '0,3917', NULL, NULL),
(612, '2010-09-29', 12, '100 JAPON YENÝ', '1,7324   ', '1,7439   ', '1,7260   ', '1,7505', NULL, NULL),
(613, '2010-09-30', 1, '1 ABD DOLARI', '1,4434   ', '1,4504   ', '1,4424   ', '1,4526', NULL, NULL),
(614, '2010-09-30', 2, '1 AVUSTRALYA DOLARI', '1,3968   ', '1,4059   ', '1,3904   ', '1,4143', NULL, NULL),
(615, '2010-09-30', 3, '1 DANÝMARKA KRONU', '0,26425  ', '0,26555  ', '0,26407  ', '0,2661', NULL, NULL),
(616, '2010-09-30', 4, '1 EURO', '1,9693   ', '1,9788   ', '1,9679   ', '1,9818', NULL, NULL),
(617, '2010-09-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2905   ', '2,3025   ', '2,2889   ', '2,3060', NULL, NULL),
(618, '2010-09-30', 6, '1 ÝSVÝÇRE FRANGI ', '1,4789   ', '1,4884   ', '1,4767   ', '1,4906', NULL, NULL),
(619, '2010-09-30', 7, '1 ÝSVEÇ KRONU', '0,21392  ', '0,21615  ', '0,21377  ', '0,2166', NULL, NULL),
(620, '2010-09-30', 8, '1 KANADA DOLARI ', '1,4001   ', '1,4064   ', '1,3949   ', '1,4117', NULL, NULL),
(621, '2010-09-30', 9, '1 KUVEYT DÝNARI', '5,0283   ', '5,0945   ', '4,9529   ', '5,1709', NULL, NULL),
(622, '2010-09-30', 10, '1 NORVEÇ KRONU ', '0,24620  ', '0,24786  ', '0,24603  ', '0,2484', NULL, NULL),
(623, '2010-09-30', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38604  ', '0,38674  ', '0,38314  ', '0,3896', NULL, NULL),
(624, '2010-09-30', 12, '100 JAPON YENÝ', '1,7295   ', '1,7410   ', '1,7231   ', '1,7476', NULL, NULL),
(625, '2010-10-01', 1, '1 ABD DOLARI', '1,4434   ', '1,4504   ', '1,4424   ', '1,4526', NULL, NULL),
(626, '2010-10-01', 2, '1 AVUSTRALYA DOLARI', '1,3968   ', '1,4059   ', '1,3904   ', '1,4143', NULL, NULL),
(627, '2010-10-01', 3, '1 DANÝMARKA KRONU', '0,26425  ', '0,26555  ', '0,26407  ', '0,2661', NULL, NULL),
(628, '2010-10-01', 4, '1 EURO', '1,9693   ', '1,9788   ', '1,9679   ', '1,9818', NULL, NULL),
(629, '2010-10-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2905   ', '2,3025   ', '2,2889   ', '2,3060', NULL, NULL),
(630, '2010-10-01', 6, '1 ÝSVÝÇRE FRANGI ', '1,4789   ', '1,4884   ', '1,4767   ', '1,4906', NULL, NULL),
(631, '2010-10-01', 7, '1 ÝSVEÇ KRONU', '0,21392  ', '0,21615  ', '0,21377  ', '0,2166', NULL, NULL),
(632, '2010-10-01', 8, '1 KANADA DOLARI ', '1,4001   ', '1,4064   ', '1,3949   ', '1,4117', NULL, NULL),
(633, '2010-10-01', 9, '1 KUVEYT DÝNARI', '5,0283   ', '5,0945   ', '4,9529   ', '5,1709', NULL, NULL),
(634, '2010-10-01', 10, '1 NORVEÇ KRONU ', '0,24620  ', '0,24786  ', '0,24603  ', '0,2484', NULL, NULL),
(635, '2010-10-01', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38604  ', '0,38674  ', '0,38314  ', '0,3896', NULL, NULL),
(636, '2010-10-01', 12, '100 JAPON YENÝ', '1,7295   ', '1,7410   ', '1,7231   ', '1,7476', NULL, NULL),
(637, '2010-10-02', 1, '1 ABD DOLARI', '1,4390   ', '1,4459   ', '1,4380   ', '1,4481', NULL, NULL),
(638, '2010-10-02', 2, '1 AVUSTRALYA DOLARI', '1,3960   ', '1,4051   ', '1,3896   ', '1,4135', NULL, NULL),
(639, '2010-10-02', 3, '1 DANÝMARKA KRONU', '0,26501  ', '0,26631  ', '0,26482  ', '0,2669', NULL, NULL),
(640, '2010-10-02', 4, '1 EURO', '1,9751   ', '1,9846   ', '1,9737   ', '1,9876', NULL, NULL),
(641, '2010-10-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2764   ', '2,2883   ', '2,2748   ', '2,2917', NULL, NULL),
(642, '2010-10-02', 6, '1 ÝSVÝÇRE FRANGI ', '1,4688   ', '1,4783   ', '1,4666   ', '1,4805', NULL, NULL),
(643, '2010-10-02', 7, '1 ÝSVEÇ KRONU', '0,21354  ', '0,21576  ', '0,21339  ', '0,2162', NULL, NULL),
(644, '2010-10-02', 8, '1 KANADA DOLARI ', '1,4010   ', '1,4073   ', '1,3958   ', '1,4126', NULL, NULL),
(645, '2010-10-02', 9, '1 KUVEYT DÝNARI', '5,0145   ', '5,0805   ', '4,9393   ', '5,1567', NULL, NULL),
(646, '2010-10-02', 10, '1 NORVEÇ KRONU ', '0,24576  ', '0,24742  ', '0,24559  ', '0,2479', NULL, NULL),
(647, '2010-10-02', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38485  ', '0,38554  ', '0,38196  ', '0,3884', NULL, NULL),
(648, '2010-10-02', 12, '100 JAPON YENÝ', '1,7254   ', '1,7369   ', '1,7190   ', '1,7435', NULL, NULL),
(649, '2010-10-03', 1, '1 ABD DOLARI', '1,4390   ', '1,4459   ', '1,4380   ', '1,4481', NULL, NULL),
(650, '2010-10-03', 2, '1 AVUSTRALYA DOLARI', '1,3960   ', '1,4051   ', '1,3896   ', '1,4135', NULL, NULL),
(651, '2010-10-03', 3, '1 DANÝMARKA KRONU', '0,26501  ', '0,26631  ', '0,26482  ', '0,2669', NULL, NULL),
(652, '2010-10-03', 4, '1 EURO', '1,9751   ', '1,9846   ', '1,9737   ', '1,9876', NULL, NULL),
(653, '2010-10-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2764   ', '2,2883   ', '2,2748   ', '2,2917', NULL, NULL),
(654, '2010-10-03', 6, '1 ÝSVÝÇRE FRANGI ', '1,4688   ', '1,4783   ', '1,4666   ', '1,4805', NULL, NULL),
(655, '2010-10-03', 7, '1 ÝSVEÇ KRONU', '0,21354  ', '0,21576  ', '0,21339  ', '0,2162', NULL, NULL),
(656, '2010-10-03', 8, '1 KANADA DOLARI ', '1,4010   ', '1,4073   ', '1,3958   ', '1,4126', NULL, NULL),
(657, '2010-10-03', 9, '1 KUVEYT DÝNARI', '5,0145   ', '5,0805   ', '4,9393   ', '5,1567', NULL, NULL),
(658, '2010-10-03', 10, '1 NORVEÇ KRONU ', '0,24576  ', '0,24742  ', '0,24559  ', '0,2479', NULL, NULL),
(659, '2010-10-03', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38485  ', '0,38554  ', '0,38196  ', '0,3884', NULL, NULL),
(660, '2010-10-03', 12, '100 JAPON YENÝ', '1,7254   ', '1,7369   ', '1,7190   ', '1,7435', NULL, NULL),
(661, '2010-10-04', 1, '1 ABD DOLARI', '1,4389   ', '1,4458   ', '1,4379   ', '1,4480', NULL, NULL),
(662, '2010-10-04', 2, '1 AVUSTRALYA DOLARI', '1,3901   ', '1,3992   ', '1,3837   ', '1,4076', NULL, NULL),
(663, '2010-10-04', 3, '1 DANÝMARKA KRONU', '0,26454  ', '0,26584  ', '0,26435  ', '0,2664', NULL, NULL),
(664, '2010-10-04', 4, '1 EURO', '1,9721   ', '1,9816   ', '1,9707   ', '1,9846', NULL, NULL),
(665, '2010-10-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2720   ', '2,2839   ', '2,2704   ', '2,2873', NULL, NULL),
(666, '2010-10-04', 6, '1 ÝSVÝÇRE FRANGI ', '1,4746   ', '1,4841   ', '1,4724   ', '1,4863', NULL, NULL),
(667, '2010-10-04', 7, '1 ÝSVEÇ KRONU', '0,21234  ', '0,21455  ', '0,21219  ', '0,2150', NULL, NULL),
(668, '2010-10-04', 8, '1 KANADA DOLARI ', '1,4087   ', '1,4151   ', '1,4035   ', '1,4205', NULL, NULL),
(669, '2010-10-04', 9, '1 KUVEYT DÝNARI', '5,0229   ', '5,0891   ', '4,9476   ', '5,1654', NULL, NULL),
(670, '2010-10-04', 10, '1 NORVEÇ KRONU ', '0,24503  ', '0,24668  ', '0,24486  ', '0,2472', NULL, NULL),
(671, '2010-10-04', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38483  ', '0,38552  ', '0,38194  ', '0,3884', NULL, NULL),
(672, '2010-10-04', 12, '100 JAPON YENÝ', '1,7246   ', '1,7361   ', '1,7182   ', '1,7427', NULL, NULL),
(673, '2010-10-05', 1, '1 ABD DOLARI', '1,4416   ', '1,4486   ', '1,4406   ', '1,4508', NULL, NULL),
(674, '2010-10-05', 2, '1 AVUSTRALYA DOLARI', '1,3812   ', '1,3902   ', '1,3748   ', '1,3985', NULL, NULL),
(675, '2010-10-05', 3, '1 DANÝMARKA KRONU', '0,26614  ', '0,26745  ', '0,26595  ', '0,2680', NULL, NULL),
(676, '2010-10-05', 4, '1 EURO', '1,9843   ', '1,9939   ', '1,9829   ', '1,9969', NULL, NULL),
(677, '2010-10-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2,2865   ', '2,2985   ', '2,2849   ', '2,3019', NULL, NULL),
(678, '2010-10-05', 6, '1 ÝSVÝÇRE FRANGI ', '1,4863   ', '1,4959   ', '1,4841   ', '1,4981', NULL, NULL),
(679, '2010-10-05', 7, '1 ÝSVEÇ KRONU', '0,21318  ', '0,21540  ', '0,21303  ', '0,2159', NULL, NULL),
(680, '2010-10-05', 8, '1 KANADA DOLARI ', '1,4114   ', '1,4178   ', '1,4062   ', '1,4232', NULL, NULL),
(681, '2010-10-05', 9, '1 KUVEYT DÝNARI', '5,0326   ', '5,0989   ', '4,9571   ', '5,1754', NULL, NULL),
(682, '2010-10-05', 10, '1 NORVEÇ KRONU ', '0,24619  ', '0,24785  ', '0,24602  ', '0,2484', NULL, NULL),
(683, '2010-10-05', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,38556  ', '0,38626  ', '0,38267  ', '0,3891', NULL, NULL),
(684, '2010-10-05', 12, '100 JAPON YENÝ', '1,7251   ', '1,7366   ', '1,7187   ', '1,7432', NULL, NULL),
(685, '2011-04-11', 1, '1 ABD DOLARI', '1.4955   ', '1.5027   ', '1.4945   ', '1.5050', NULL, NULL),
(686, '2011-04-11', 2, '1 AVUSTRALYA DOLARI', '1.5722   ', '1.5825   ', '1.5650   ', '1.5920', NULL, NULL),
(687, '2011-04-11', 3, '1 DANÝMARKA KRONU', '0.28895  ', '0.29037  ', '0.28875  ', '0.2910', NULL, NULL),
(688, '2011-04-11', 4, '1 EURO', '2.1550   ', '2.1654   ', '2.1535   ', '2.1686', NULL, NULL),
(689, '2011-04-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.4494   ', '2.4622   ', '2.4477   ', '2.4659', NULL, NULL),
(690, '2011-04-11', 6, '1 ÝSVÝÇRE FRANGI ', '1.6343   ', '1.6448   ', '1.6318   ', '1.6473', NULL, NULL),
(691, '2011-04-11', 7, '1 ÝSVEÇ KRONU', '0.23830  ', '0.24078  ', '0.23813  ', '0.2413', NULL, NULL),
(692, '2011-04-11', 8, '1 KANADA DOLARI ', '1.5676   ', '1.5747   ', '1.5618   ', '1.5807', NULL, NULL),
(693, '2011-04-11', 9, '1 KUVEYT DÝNARI', '5.3582   ', '5.4288   ', '5.2778   ', '5.5102', NULL, NULL),
(694, '2011-04-11', 10, '1 NORVEÇ KRONU ', '0.27565  ', '0.27751  ', '0.27546  ', '0.2781', NULL, NULL),
(695, '2011-04-11', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.39998  ', '0.40070  ', '0.39698  ', '0.4037', NULL, NULL),
(696, '2011-04-11', 12, '100 JAPON YENÝ', '1.7508   ', '1.7624   ', '1.7443   ', '1.7691', NULL, NULL),
(697, '2011-04-15', 1, '1 ABD DOLARI', '1.5146   ', '1.5219   ', '1.5135   ', '1.5242', NULL, '20110415'),
(698, '2011-04-15', 2, '1 AVUSTRALYA DOLARI', '1.5887   ', '1.5991   ', '1.5814   ', '1.6087', NULL, '20110415'),
(699, '2011-04-15', 3, '1 DANÝMARKA KRONU', '0.29319  ', '0.29463  ', '0.29298  ', '0.2953', NULL, '20110415'),
(700, '2011-04-15', 4, '1 EURO', '2.1871   ', '2.1976   ', '2.1856   ', '2.2009', NULL, '20110415'),
(701, '2011-04-15', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.4722   ', '2.4851   ', '2.4705   ', '2.4888', NULL, '20110415'),
(702, '2011-04-15', 6, '1 ÝSVÝÇRE FRANGI ', '1.6922   ', '1.7031   ', '1.6897   ', '1.7057', NULL, '20110415'),
(703, '2011-04-15', 7, '1 ÝSVEÇ KRONU', '0.24086  ', '0.24337  ', '0.24069  ', '0.2439', NULL, '20110415'),
(704, '2011-04-15', 8, '1 KANADA DOLARI ', '1.5728   ', '1.5799   ', '1.5670   ', '1.5859', NULL, '20110415'),
(705, '2011-04-15', 9, '1 KUVEYT DÝNARI', '5.4307   ', '5.5022   ', '5.3492   ', '5.5847', NULL, '20110415'),
(706, '2011-04-15', 10, '1 NORVEÇ KRONU ', '0.27744  ', '0.27931  ', '0.27725  ', '0.2799', NULL, '20110415'),
(707, '2011-04-15', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.40509  ', '0.40582  ', '0.40205  ', '0.4088', NULL, '20110415'),
(708, '2011-04-15', 12, '100 JAPON YENÝ', '1.8163   ', '1.8284   ', '1.8096   ', '1.8353', NULL, '20110415'),
(709, '2011-04-16', 1, '1 ABD DOLARI', '1.5119   ', '1.5192   ', '1.5108   ', '1.5215', NULL, '20110416'),
(710, '2011-04-16', 2, '1 AVUSTRALYA DOLARI', '1.5887   ', '1.5991   ', '1.5814   ', '1.6087', NULL, '20110416'),
(711, '2011-04-16', 3, '1 DANÝMARKA KRONU', '0.29313  ', '0.29457  ', '0.29292  ', '0.2952', NULL, '20110416'),
(712, '2011-04-16', 4, '1 EURO', '2.1867   ', '2.1972   ', '2.1852   ', '2.2005', NULL, '20110416'),
(713, '2011-04-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.4716   ', '2.4845   ', '2.4699   ', '2.4882', NULL, '20110416'),
(714, '2011-04-16', 6, '1 ÝSVÝÇRE FRANGI ', '1.6905   ', '1.7014   ', '1.6880   ', '1.7040', NULL, '20110416'),
(715, '2011-04-16', 7, '1 ÝSVEÇ KRONU', '0.24247  ', '0.24499  ', '0.24230  ', '0.2455', NULL, '20110416'),
(716, '2011-04-16', 8, '1 KANADA DOLARI ', '1.5697   ', '1.5768   ', '1.5639   ', '1.5828', NULL, '20110416'),
(717, '2011-04-16', 9, '1 KUVEYT DÝNARI', '5.4190   ', '5.4904   ', '5.3377   ', '5.5728', NULL, '20110416'),
(718, '2011-04-16', 10, '1 NORVEÇ KRONU ', '0.27908  ', '0.28096  ', '0.27888  ', '0.2816', NULL, '20110416'),
(719, '2011-04-16', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.40438  ', '0.40511  ', '0.40135  ', '0.4081', NULL, '20110416'),
(720, '2011-04-16', 12, '100 JAPON YENÝ', '1.8133   ', '1.8253   ', '1.8066   ', '1.8322', NULL, '20110416'),
(721, '2011-06-10', 1, '1 ABD DOLARI', '1.5697   ', '1.5773   ', '1.5686   ', '1.5797', NULL, '20110610'),
(722, '2011-06-10', 2, '1 AVUSTRALYA DOLARI', '1.6632   ', '1.6741   ', '1.6555   ', '1.6841', NULL, '20110610'),
(723, '2011-06-10', 3, '1 DANÝMARKA KRONU', '0.30447  ', '0.30597  ', '0.30426  ', '0.3066', NULL, '20110610'),
(724, '2011-06-10', 4, '1 EURO', '2.2710   ', '2.2820   ', '2.2694   ', '2.2854', NULL, '20110610'),
(725, '2011-06-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.5546   ', '2.5680   ', '2.5528   ', '2.5719', NULL, '20110610'),
(726, '2011-06-10', 6, '1 ÝSVÝÇRE FRANGI ', '1.8608   ', '1.8728   ', '1.8580   ', '1.8756', NULL, '20110610'),
(727, '2011-06-10', 7, '1 ÝSVEÇ KRONU', '0.24880  ', '0.25139  ', '0.24863  ', '0.2519', NULL, '20110610'),
(728, '2011-06-10', 8, '1 KANADA DOLARI ', '1.6123   ', '1.6196   ', '1.6063   ', '1.6258', NULL, '20110610'),
(729, '2011-06-10', 9, '1 KUVEYT DÝNARI', '5.6735   ', '5.7482   ', '5.5884   ', '5.8344', NULL, '20110610'),
(730, '2011-06-10', 10, '1 NORVEÇ KRONU ', '0.28835  ', '0.29029  ', '0.28815  ', '0.2909', NULL, '20110610'),
(731, '2011-06-10', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.41983  ', '0.42059  ', '0.41668  ', '0.4237', NULL, '20110610'),
(732, '2011-06-10', 12, '100 JAPON YENÝ', '1.9564   ', '1.9694   ', '1.9492   ', '1.9769', NULL, '20110610'),
(733, '2011-06-28', 1, '1 ABD DOLARI', '1.6354   ', '1.6433   ', '1.6343   ', '1.6458', NULL, '20110628'),
(734, '2011-06-28', 2, '1 AVUSTRALYA DOLARI', '1.7052   ', '1.7164   ', '1.6974   ', '1.7267', NULL, '20110628'),
(735, '2011-06-28', 3, '1 DANÝMARKA KRONU', '0.31117  ', '0.31270  ', '0.31095  ', '0.3134', NULL, '20110628'),
(736, '2011-06-28', 4, '1 EURO', '2.3211   ', '2.3323   ', '2.3195   ', '2.3358', NULL, '20110628'),
(737, '2011-06-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.6103   ', '2.6239   ', '2.6085   ', '2.6278', NULL, '20110628'),
(738, '2011-06-28', 6, '1 ÝSVÝÇRE FRANGI ', '1.9550   ', '1.9676   ', '1.9521   ', '1.9706', NULL, '20110628'),
(739, '2011-06-28', 7, '1 ÝSVEÇ KRONU', '0.25062  ', '0.25323  ', '0.25044  ', '0.2538', NULL, '20110628'),
(740, '2011-06-28', 8, '1 KANADA DOLARI ', '1.6541   ', '1.6616   ', '1.6480   ', '1.6679', NULL, '20110628'),
(741, '2011-06-28', 9, '1 KUVEYT DÝNARI', '5.8979   ', '5.9756   ', '5.8094   ', '6.0652', NULL, '20110628'),
(742, '2011-06-28', 10, '1 NORVEÇ KRONU ', '0.29674  ', '0.29874  ', '0.29653  ', '0.2994', NULL, '20110628'),
(743, '2011-06-28', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.43740  ', '0.43819  ', '0.43412  ', '0.4414', NULL, '20110628'),
(744, '2011-06-28', 12, '100 JAPON YENÝ', '2.0219   ', '2.0353   ', '2.0144   ', '2.0430', NULL, '20110628'),
(745, '2012-02-23', 1, '1 ABD DOLARI', '1.7424   ', '1.7508   ', '1.7412   ', '1.7534', NULL, '20120223'),
(746, '2012-02-23', 2, '1 AVUSTRALYA DOLARI', '1.8513   ', '1.8634   ', '1.8428   ', '1.8746', NULL, '20120223'),
(747, '2012-02-23', 3, '1 DANÝMARKA KRONU', '0.31006  ', '0.31159  ', '0.30984  ', '0.3123', NULL, '20120223'),
(748, '2012-02-23', 4, '1 EURO', '2.3061   ', '2.3172   ', '2.3045   ', '2.3207', NULL, '20120223'),
(749, '2012-02-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7376   ', '2.7519   ', '2.7357   ', '2.7560', NULL, '20120223'),
(750, '2012-02-23', 6, '1 ÝSVÝÇRE FRANGI ', '1.9070   ', '1.9193   ', '1.9041   ', '1.9222', NULL, '20120223'),
(751, '2012-02-23', 7, '1 ÝSVEÇ KRONU', '0.26048  ', '0.26319  ', '0.26030  ', '0.2638', NULL, '20120223'),
(752, '2012-02-23', 8, '1 KANADA DOLARI ', '1.7462   ', '1.7541   ', '1.7397   ', '1.7608', NULL, '20120223'),
(753, '2012-02-23', 9, '1 KUVEYT DÝNARI', '6.2182   ', '6.3001   ', '6.1249   ', '6.3946', NULL, '20120223'),
(754, '2012-02-23', 10, '1 NORVEÇ KRONU ', '0.30679  ', '0.30886  ', '0.30658  ', '0.3095', NULL, '20120223'),
(755, '2012-02-23', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.46600  ', '0.46684  ', '0.46251  ', '0.4703', NULL, '20120223'),
(756, '2012-02-23', 12, '100 JAPON YENÝ', '2.1678   ', '2.1822   ', '2.1598   ', '2.1905', NULL, '20120223'),
(757, '2012-03-17', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(758, '2012-03-17', 2, '1 AVUSTRALYA DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(759, '2012-03-17', 3, '1 DANÝMARKA KRONU', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(760, '2012-03-17', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(761, '2012-03-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(762, '2012-03-17', 6, '1 ÝSVÝÇRE FRANGI ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(763, '2012-03-17', 7, '1 ÝSVEÇ KRONU', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(764, '2012-03-17', 8, '1 KANADA DOLARI ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(765, '2012-03-17', 9, '1 KUVEYT DÝNARI', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(766, '2012-03-17', 10, '1 NORVEÇ KRONU ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(767, '2012-03-17', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(768, '2012-03-17', 12, '100 JAPON YENÝ', '0,00', '0,00', NULL, NULL, NULL, '20120317'),
(769, '2012-03-19', 1, '1 ABD DOLARI', '1.7971   ', '1.8058   ', '1.7958   ', '1.8085', NULL, '20120319'),
(770, '2012-03-19', 2, '1 AVUSTRALYA DOLARI', '1.8987   ', '1.9111   ', '1.8900   ', '1.9226', NULL, '20120319'),
(771, '2012-03-19', 3, '1 DANÝMARKA KRONU', '0.31798  ', '0.31955  ', '0.31776  ', '0.3202', NULL, '20120319'),
(772, '2012-03-19', 4, '1 EURO', '2.3647   ', '2.3761   ', '2.3630   ', '2.3797', NULL, '20120319'),
(773, '2012-03-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8486   ', '2.8635   ', '2.8466   ', '2.8678', NULL, '20120319'),
(774, '2012-03-19', 6, '1 ÝSVÝÇRE FRANGI ', '1.9566   ', '1.9692   ', '1.9537   ', '1.9722', NULL, '20120319'),
(775, '2012-03-19', 7, '1 ÝSVEÇ KRONU', '0.26472  ', '0.26748  ', '0.26453  ', '0.2681', NULL, '20120319'),
(776, '2012-03-19', 8, '1 KANADA DOLARI ', '1.8123   ', '1.8205   ', '1.8056   ', '1.8274', NULL, '20120319'),
(777, '2012-03-19', 9, '1 KUVEYT DÝNARI', '6.3952   ', '6.4794   ', '6.2993   ', '6.5766', NULL, '20120319'),
(778, '2012-03-19', 10, '1 NORVEÇ KRONU ', '0.31220  ', '0.31431  ', '0.31198  ', '0.3150', NULL, '20120319'),
(779, '2012-03-19', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.48064  ', '0.48151  ', '0.47704  ', '0.4851', NULL, '20120319'),
(780, '2012-03-19', 12, '100 JAPON YENÝ', '2.1567   ', '2.1710   ', '2.1487   ', '2.1792', NULL, '20120319'),
(781, '2012-03-23', 1, '1 ABD DOLARI', '1.7918   ', '1.8004   ', '1.7905   ', '1.8031', NULL, '20120323'),
(782, '2012-03-23', 2, '1 AVUSTRALYA DOLARI', '1.8608   ', '1.8730   ', '1.8522   ', '1.8842', NULL, '20120323'),
(783, '2012-03-23', 3, '1 DANÝMARKA KRONU', '0.31918  ', '0.32075  ', '0.31896  ', '0.3214', NULL, '20120323'),
(784, '2012-03-23', 4, '1 EURO', '2.3736   ', '2.3850   ', '2.3719   ', '2.3886', NULL, '20120323'),
(785, '2012-03-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8399   ', '2.8547   ', '2.8379   ', '2.8590', NULL, '20120323'),
(786, '2012-03-23', 6, '1 ÝSVÝÇRE FRANGI ', '1.9658   ', '1.9785   ', '1.9629   ', '1.9815', NULL, '20120323'),
(787, '2012-03-23', 7, '1 ÝSVEÇ KRONU', '0.26432  ', '0.26707  ', '0.26413  ', '0.2676', NULL, '20120323'),
(788, '2012-03-23', 8, '1 KANADA DOLARI ', '1.7914   ', '1.7995   ', '1.7848   ', '1.8063', NULL, '20120323'),
(789, '2012-03-23', 9, '1 KUVEYT DÝNARI', '6.3852   ', '6.4693   ', '6.2894   ', '6.5663', NULL, '20120323'),
(790, '2012-03-23', 10, '1 NORVEÇ KRONU ', '0.31026  ', '0.31235  ', '0.31004  ', '0.3130', NULL, '20120323'),
(791, '2012-03-23', 11, '1 SUUDÝ ARABÝSTAN RÝYALÝ ', '0.47921  ', '0.48007  ', '0.47562  ', '0.4836', NULL, '20120323'),
(792, '2012-03-23', 12, '100 JAPON YENÝ', '2.1651   ', '2.1795   ', '2.1571   ', '2.1878', NULL, '20120323'),
(793, '2012-04-03', 1, '1 ABD DOLARI', '1.7694   ', '1.7779   ', '1.7682   ', '1.7806', NULL, '20120403'),
(794, '2012-04-03', 4, '1 EURO', '2.3591   ', '2.3705   ', '2.3574   ', '2.3741', NULL, '20120403'),
(795, '2012-04-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8322   ', '2.8470   ', '2.8302   ', '2.8513', NULL, '20120403'),
(796, '2012-04-04', 1, '1 ABD DOLARI', '1.7816   ', '1.7902   ', '1.7804   ', '1.7929', NULL, '20120404'),
(797, '2012-04-04', 4, '1 EURO', '2.3457   ', '2.3570   ', '2.3441   ', '2.3605', NULL, '20120404'),
(798, '2012-04-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8279   ', '2.8427   ', '2.8259   ', '2.8470', NULL, '20120404'),
(799, '2012-04-05', 1, '1 ABD DOLARI', '1.7864   ', '1.7950   ', '1.7851   ', '1.7977', NULL, '20120405'),
(800, '2012-04-05', 4, '1 EURO', '2.3393   ', '2.3506   ', '2.3377   ', '2.3541', NULL, '20120405'),
(801, '2012-04-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8317   ', '2.8465   ', '2.8297   ', '2.8508', NULL, '20120405'),
(802, '2012-04-06', 1, '1 ABD DOLARI', '1.7837   ', '1.7923   ', '1.7825   ', '1.7950', NULL, '20120406'),
(803, '2012-04-06', 4, '1 EURO', '2.3317   ', '2.3429   ', '2.3301   ', '2.3464', NULL, '20120406'),
(804, '2012-04-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8265   ', '2.8413   ', '2.8245   ', '2.8456', NULL, '20120406'),
(805, '2012-04-07', 1, '1 ABD DOLARI', '1.7837   ', '1.7923   ', '1.7825   ', '1.7950', NULL, '20120407'),
(806, '2012-04-07', 4, '1 EURO', '2.3317   ', '2.3429   ', '2.3301   ', '2.3464', NULL, '20120407'),
(807, '2012-04-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8265   ', '2.8413   ', '2.8245   ', '2.8456', NULL, '20120407'),
(808, '2012-04-08', 1, '1 ABD DOLARI', '1.7837   ', '1.7923   ', '1.7825   ', '1.7950', NULL, '20120408'),
(809, '2012-04-08', 4, '1 EURO', '2.3317   ', '2.3429   ', '2.3301   ', '2.3464', NULL, '20120408'),
(810, '2012-04-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8265   ', '2.8413   ', '2.8245   ', '2.8456', NULL, '20120408'),
(811, '2012-04-09', 1, '1 ABD DOLARI', '1.7887   ', '1.7973   ', '1.7874   ', '1.8000', NULL, '20120409'),
(812, '2012-04-09', 4, '1 EURO', '2.3387   ', '2.3500   ', '2.3371   ', '2.3535', NULL, '20120409'),
(813, '2012-04-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8375   ', '2.8523   ', '2.8355   ', '2.8566', NULL, '20120409'),
(814, '2012-04-12', 1, '1 ABD DOLARI', '1.7981   ', '1.8068   ', '1.7968   ', '1.8095', NULL, '20120412'),
(815, '2012-04-12', 4, '1 EURO', '2.3602   ', '2.3716   ', '2.3585   ', '2.3752', NULL, '20120412'),
(816, '2012-04-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8590   ', '2.8739   ', '2.8570   ', '2.8782', NULL, '20120412'),
(817, '2012-04-14', 1, '1 ABD DOLARI', '1.7832   ', '1.7918   ', '1.7820   ', '1.7945', NULL, '20120414'),
(818, '2012-04-14', 4, '1 EURO', '2.3467   ', '2.3580   ', '2.3451   ', '2.3615', NULL, '20120414'),
(819, '2012-04-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8404   ', '2.8552   ', '2.8384   ', '2.8595', NULL, '20120414'),
(820, '2012-04-17', 1, '1 ABD DOLARI', '1.7925   ', '1.8011   ', '1.7912   ', '1.8038', NULL, '20120417'),
(821, '2012-04-17', 4, '1 EURO', '2.3343   ', '2.3456   ', '2.3327   ', '2.3491', NULL, '20120417'),
(822, '2012-04-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8376   ', '2.8524   ', '2.8356   ', '2.8567', NULL, '20120417'),
(823, '2012-04-19', 1, '1 ABD DOLARI', '1.7800   ', '1.7886   ', '1.7788   ', '1.7913', NULL, '20120419'),
(824, '2012-04-19', 4, '1 EURO', '2.3353   ', '2.3466   ', '2.3337   ', '2.3501', NULL, '20120419'),
(825, '2012-04-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8551   ', '2.8700   ', '2.8531   ', '2.8743', NULL, '20120419'),
(826, '2012-04-20', 1, '1 ABD DOLARI', '1.7829   ', '1.7915   ', '1.7817   ', '1.7942', NULL, '20120420'),
(827, '2012-04-20', 4, '1 EURO', '2.3486   ', '2.3599   ', '2.3470   ', '2.3634', NULL, '20120420'),
(828, '2012-04-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8684   ', '2.8834   ', '2.8664   ', '2.8877', NULL, '20120420'),
(829, '2012-04-22', 1, '1 ABD DOLARI', '1.7829   ', '1.7915   ', '1.7817   ', '1.7942', NULL, '20120422'),
(830, '2012-04-22', 4, '1 EURO', '2.3486   ', '2.3599   ', '2.3470   ', '2.3634', NULL, '20120422'),
(831, '2012-04-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8684   ', '2.8834   ', '2.8664   ', '2.8877', NULL, '20120422'),
(832, '2012-04-23', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120423'),
(833, '2012-04-23', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120423'),
(834, '2012-04-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120423'),
(835, '2012-04-24', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120424'),
(836, '2012-04-24', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120424'),
(837, '2012-04-24', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120424'),
(838, '2012-04-13', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120413'),
(839, '2012-04-13', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120413'),
(840, '2012-04-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120413'),
(841, '2012-04-26', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120426'),
(842, '2012-04-26', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120426'),
(843, '2012-04-26', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120426'),
(844, '2012-04-30', 1, '1 ABD DOLARI', '1.7535   ', '1.7620   ', '1.7523   ', '1.7646', NULL, '20120430'),
(845, '2012-04-30', 4, '1 EURO', '2.3173   ', '2.3285   ', '2.3157   ', '2.3320', NULL, '20120430'),
(846, '2012-04-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8415   ', '2.8564   ', '2.8395   ', '2.8607', NULL, '20120430'),
(847, '2012-05-01', 1, '1 ABD DOLARI', '1.7489   ', '1.7573   ', '1.7477   ', '1.7599', NULL, '20120501'),
(848, '2012-05-01', 4, '1 EURO', '2.3132   ', '2.3244   ', '2.3116   ', '2.3279', NULL, '20120501'),
(849, '2012-05-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8442   ', '2.8591   ', '2.8422   ', '2.8634', NULL, '20120501'),
(850, '2012-05-02', 1, '1 ABD DOLARI', '1.7515   ', '1.7599   ', '1.7503   ', '1.7625', NULL, '20120502'),
(851, '2012-05-02', 4, '1 EURO', '2.3055   ', '2.3166   ', '2.3039   ', '2.3201', NULL, '20120502'),
(852, '2012-05-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8357   ', '2.8505   ', '2.8337   ', '2.8548', NULL, '20120502'),
(853, '2012-05-03', 1, '1 ABD DOLARI', '1.7511   ', '1.7595   ', '1.7499   ', '1.7621', NULL, '20120503'),
(854, '2012-05-03', 4, '1 EURO', '2.3007   ', '2.3118   ', '2.2991   ', '2.3153', NULL, '20120503'),
(855, '2012-05-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8321   ', '2.8469   ', '2.8301   ', '2.8512', NULL, '20120503'),
(856, '2012-05-04', 1, '1 ABD DOLARI', '1.7483   ', '1.7567   ', '1.7471   ', '1.7593', NULL, '20120504'),
(857, '2012-05-04', 4, '1 EURO', '2.2961   ', '2.3072   ', '2.2945   ', '2.3107', NULL, '20120504'),
(858, '2012-05-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8268   ', '2.8416   ', '2.8248   ', '2.8459', NULL, '20120504'),
(859, '2012-05-05', 1, '1 ABD DOLARI', '1.7483   ', '1.7567   ', '1.7471   ', '1.7593', NULL, '20120505'),
(860, '2012-05-05', 4, '1 EURO', '2.2961   ', '2.3072   ', '2.2945   ', '2.3107', NULL, '20120505'),
(861, '2012-05-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8268   ', '2.8416   ', '2.8248   ', '2.8459', NULL, '20120505'),
(862, '2012-05-06', 1, '1 ABD DOLARI', '1.7483   ', '1.7567   ', '1.7471   ', '1.7593', NULL, '20120506'),
(863, '2012-05-06', 4, '1 EURO', '2.2961   ', '2.3072   ', '2.2945   ', '2.3107', NULL, '20120506'),
(864, '2012-05-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8268   ', '2.8416   ', '2.8248   ', '2.8459', NULL, '20120506'),
(865, '2012-05-07', 1, '1 ABD DOLARI', '1.7567   ', '1.7652   ', '1.7555   ', '1.7678', NULL, '20120507'),
(866, '2012-05-07', 4, '1 EURO', '2.2880   ', '2.2990   ', '2.2864   ', '2.3024', NULL, '20120507'),
(867, '2012-05-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8371   ', '2.8519   ', '2.8351   ', '2.8562', NULL, '20120507'),
(868, '2012-05-08', 1, '1 ABD DOLARI', '1.7555   ', '1.7640   ', '1.7543   ', '1.7666', NULL, '20120508'),
(869, '2012-05-08', 4, '1 EURO', '2.2857   ', '2.2967   ', '2.2841   ', '2.3001', NULL, '20120508'),
(870, '2012-05-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8330   ', '2.8478   ', '2.8310   ', '2.8521', NULL, '20120508'),
(871, '2012-05-09', 1, '1 ABD DOLARI', '1.7800   ', '1.7886   ', '1.7788   ', '1.7913', NULL, '20120509'),
(872, '2012-05-09', 4, '1 EURO', '2.3087   ', '2.3198   ', '2.3071   ', '2.3233', NULL, '20120509'),
(873, '2012-05-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8679   ', '2.8829   ', '2.8659   ', '2.8872', NULL, '20120509'),
(874, '2012-05-10', 1, '1 ABD DOLARI', '1.7788   ', '1.7874   ', '1.7776   ', '1.7901', NULL, '20120510'),
(875, '2012-05-10', 4, '1 EURO', '2.3036   ', '2.3147   ', '2.3020   ', '2.3182', NULL, '20120510'),
(876, '2012-05-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8679   ', '2.8829   ', '2.8659   ', '2.8872', NULL, '20120510'),
(877, '2012-05-12', 1, '1 ABD DOLARI', '1.7797   ', '1.7883   ', '1.7785   ', '1.7910', NULL, '20120512'),
(878, '2012-05-12', 4, '1 EURO', '2.3024   ', '2.3135   ', '2.3008   ', '2.3170', NULL, '20120512'),
(879, '2012-05-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8654   ', '2.8804   ', '2.8634   ', '2.8847', NULL, '20120512'),
(880, '2012-05-13', 1, '1 ABD DOLARI', '1.7797   ', '1.7883   ', '1.7785   ', '1.7910', NULL, '20120513'),
(881, '2012-05-13', 4, '1 EURO', '2.3024   ', '2.3135   ', '2.3008   ', '2.3170', NULL, '20120513'),
(882, '2012-05-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8654   ', '2.8804   ', '2.8634   ', '2.8847', NULL, '20120513'),
(883, '2012-05-14', 1, '1 ABD DOLARI', '1.7797   ', '1.7883   ', '1.7785   ', '1.7910', NULL, '20120514'),
(884, '2012-05-14', 4, '1 EURO', '2.3024   ', '2.3135   ', '2.3008   ', '2.3170', NULL, '20120514'),
(885, '2012-05-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8654   ', '2.8804   ', '2.8634   ', '2.8847', NULL, '20120514'),
(886, '2012-05-15', 1, '1 ABD DOLARI', '1.7970   ', '1.8057   ', '1.7957   ', '1.8084', NULL, '20120515'),
(887, '2012-05-15', 4, '1 EURO', '2.3094   ', '2.3205   ', '2.3078   ', '2.3240', NULL, '20120515'),
(888, '2012-05-15', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8865   ', '2.9016   ', '2.8845   ', '2.9060', NULL, '20120515'),
(889, '2012-05-16', 1, '1 ABD DOLARI', '1.8169   ', '1.8257   ', '1.8156   ', '1.8284', NULL, '20120516'),
(890, '2012-05-16', 4, '1 EURO', '2.3117   ', '2.3228   ', '2.3101   ', '2.3263', NULL, '20120516'),
(891, '2012-05-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8940   ', '2.9091   ', '2.8920   ', '2.9135', NULL, '20120516'),
(892, '2012-05-17', 1, '1 ABD DOLARI', '1.8160   ', '1.8248   ', '1.8147   ', '1.8275', NULL, '20120517'),
(893, '2012-05-17', 4, '1 EURO', '2.3062   ', '2.3173   ', '2.3046   ', '2.3208', NULL, '20120517'),
(894, '2012-05-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8796   ', '2.8947   ', '2.8776   ', '2.8990', NULL, '20120517'),
(895, '2012-05-18', 1, '1 ABD DOLARI', '1.8236   ', '1.8324   ', '1.8223   ', '1.8351', NULL, '20120518'),
(896, '2012-05-18', 4, '1 EURO', '2.3158   ', '2.3270   ', '2.3142   ', '2.3305', NULL, '20120518'),
(897, '2012-05-18', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8814   ', '2.8965   ', '2.8794   ', '2.9008', NULL, '20120518'),
(898, '2012-05-19', 1, '1 ABD DOLARI', '1.8236   ', '1.8324   ', '1.8223   ', '1.8351', NULL, '20120519'),
(899, '2012-05-19', 4, '1 EURO', '2.3158   ', '2.3270   ', '2.3142   ', '2.3305', NULL, '20120519'),
(900, '2012-05-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8814   ', '2.8965   ', '2.8794   ', '2.9008', NULL, '20120519'),
(901, '2012-05-20', 1, '1 ABD DOLARI', '1.8236   ', '1.8324   ', '1.8223   ', '1.8351', NULL, '20120520'),
(902, '2012-05-20', 4, '1 EURO', '2.3158   ', '2.3270   ', '2.3142   ', '2.3305', NULL, '20120520'),
(903, '2012-05-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8814   ', '2.8965   ', '2.8794   ', '2.9008', NULL, '20120520'),
(904, '2012-05-21', 1, '1 ABD DOLARI', '1.8207   ', '1.8295   ', '1.8194   ', '1.8322', NULL, '20120521'),
(905, '2012-05-21', 4, '1 EURO', '2.3249   ', '2.3361   ', '2.3233   ', '2.3396', NULL, '20120521'),
(906, '2012-05-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8776   ', '2.8926   ', '2.8756   ', '2.8969', NULL, '20120521'),
(907, '2012-05-22', 1, '1 ABD DOLARI', '1.8207   ', '1.8295   ', '1.8194   ', '1.8322', NULL, '20120522'),
(908, '2012-05-22', 4, '1 EURO', '2.3249   ', '2.3361   ', '2.3233   ', '2.3396', NULL, '20120522'),
(909, '2012-05-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8776   ', '2.8926   ', '2.8756   ', '2.8969', NULL, '20120522'),
(910, '2012-05-23', 1, '1 ABD DOLARI', '1.8387   ', '1.8476   ', '1.8374   ', '1.8504', NULL, '20120523'),
(911, '2012-05-23', 4, '1 EURO', '2.3264   ', '2.3376   ', '2.3248   ', '2.3411', NULL, '20120523'),
(912, '2012-05-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8903   ', '2.9054   ', '2.8883   ', '2.9098', NULL, '20120523'),
(913, '2012-05-24', 1, '1 ABD DOLARI', '1.8390   ', '1.8479   ', '1.8377   ', '1.8507', NULL, '20120524'),
(914, '2012-05-24', 4, '1 EURO', '2.3112   ', '2.3223   ', '2.3096   ', '2.3258', NULL, '20120524'),
(915, '2012-05-24', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8830   ', '2.8981   ', '2.8810   ', '2.9024', NULL, '20120524'),
(916, '2012-05-25', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20120525'),
(917, '2012-05-25', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20120525'),
(918, '2012-05-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20120525'),
(919, '2012-05-26', 1, '1 ABD DOLARI', '1.8319   ', '1.8407   ', '1.8306   ', '1.8435', NULL, '20120526'),
(920, '2012-05-26', 4, '1 EURO', '2.3028   ', '2.3139   ', '2.3012   ', '2.3174', NULL, '20120526'),
(921, '2012-05-26', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8705   ', '2.8855   ', '2.8685   ', '2.8898', NULL, '20120526'),
(922, '2012-05-27', 1, '1 ABD DOLARI', '1.8319   ', '1.8407   ', '1.8306   ', '1.8435', NULL, '20120527'),
(923, '2012-05-27', 4, '1 EURO', '2.3028   ', '2.3139   ', '2.3012   ', '2.3174', NULL, '20120527'),
(924, '2012-05-27', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8705   ', '2.8855   ', '2.8685   ', '2.8898', NULL, '20120527'),
(925, '2012-05-28', 1, '1 ABD DOLARI', '1.8256   ', '1.8344   ', '1.8243   ', '1.8372', NULL, '20120528'),
(926, '2012-05-28', 4, '1 EURO', '2.2962   ', '2.3073   ', '2.2946   ', '2.3108', NULL, '20120528'),
(927, '2012-05-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8641   ', '2.8791   ', '2.8621   ', '2.8834', NULL, '20120528'),
(928, '2012-05-29', 1, '1 ABD DOLARI', '1.8269   ', '1.8357   ', '1.8256   ', '1.8385', NULL, '20120529'),
(929, '2012-05-29', 4, '1 EURO', '2.2918   ', '2.3029   ', '2.2902   ', '2.3064', NULL, '20120529'),
(930, '2012-05-29', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8650   ', '2.8800   ', '2.8630   ', '2.8843', NULL, '20120529'),
(931, '2012-05-30', 1, '1 ABD DOLARI', '1.8307   ', '1.8395   ', '1.8294   ', '1.8423', NULL, '20120530'),
(932, '2012-05-30', 4, '1 EURO', '2.2794   ', '2.2904   ', '2.2778   ', '2.2938', NULL, '20120530'),
(933, '2012-05-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8518   ', '2.8667   ', '2.8498   ', '2.8710', NULL, '20120530'),
(934, '2012-05-31', 1, '1 ABD DOLARI', '1.8404   ', '1.8493   ', '1.8391   ', '1.8521', NULL, '20120531'),
(935, '2012-05-31', 4, '1 EURO', '2.2840   ', '2.2950   ', '2.2824   ', '2.2984', NULL, '20120531'),
(936, '2012-05-31', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8526   ', '2.8675   ', '2.8506   ', '2.8718', NULL, '20120531'),
(937, '2012-06-01', 1, '1 ABD DOLARI', '1.8589   ', '1.8679   ', '1.8576   ', '1.8707', NULL, '20120601'),
(938, '2012-06-01', 4, '1 EURO', '2.2926   ', '2.3037   ', '2.2910   ', '2.3072', NULL, '20120601'),
(939, '2012-06-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8454   ', '2.8603   ', '2.8434   ', '2.8646', NULL, '20120601'),
(940, '2012-06-02', 1, '1 ABD DOLARI', '1.8589   ', '1.8679   ', '1.8576   ', '1.8707', NULL, '20120602'),
(941, '2012-06-02', 4, '1 EURO', '2.2926   ', '2.3037   ', '2.2910   ', '2.3072', NULL, '20120602'),
(942, '2012-06-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8454   ', '2.8603   ', '2.8434   ', '2.8646', NULL, '20120602'),
(943, '2012-06-04', 1, '1 ABD DOLARI', '1.8430   ', '1.8519   ', '1.8417   ', '1.8547', NULL, '20120604'),
(944, '2012-06-04', 4, '1 EURO', '2.2904   ', '2.3014   ', '2.2888   ', '2.3049', NULL, '20120604'),
(945, '2012-06-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8331   ', '2.8479   ', '2.8311   ', '2.8522', NULL, '20120604'),
(946, '2012-06-05', 1, '1 ABD DOLARI', '1.8419   ', '1.8508   ', '1.8406   ', '1.8536', NULL, '20120605'),
(947, '2012-06-05', 4, '1 EURO', '2.2897   ', '2.3007   ', '2.2881   ', '2.3042', NULL, '20120605'),
(948, '2012-06-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8254   ', '2.8402   ', '2.8234   ', '2.8445', NULL, '20120605'),
(949, '2012-06-06', 1, '1 ABD DOLARI', '1.8311   ', '1.8399   ', '1.8298   ', '1.8427', NULL, '20120606'),
(950, '2012-06-06', 4, '1 EURO', '2.2894   ', '2.3004   ', '2.2878   ', '2.3039', NULL, '20120606'),
(951, '2012-06-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8317   ', '2.8465   ', '2.8297   ', '2.8508', NULL, '20120606'),
(952, '2012-06-07', 1, '1 ABD DOLARI', '1.8193   ', '1.8281   ', '1.8180   ', '1.8308', NULL, '20120607'),
(953, '2012-06-07', 4, '1 EURO', '2.2880   ', '2.2990   ', '2.2864   ', '2.3024', NULL, '20120607'),
(954, '2012-06-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8210   ', '2.8357   ', '2.8190   ', '2.8400', NULL, '20120607'),
(955, '2012-06-08', 1, '1 ABD DOLARI', '1.8269   ', '1.8357   ', '1.8256   ', '1.8385', NULL, '20120608'),
(956, '2012-06-08', 4, '1 EURO', '2.2774   ', '2.2884   ', '2.2758   ', '2.2918', NULL, '20120608'),
(957, '2012-06-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8167   ', '2.8314   ', '2.8147   ', '2.8356', NULL, '20120608'),
(958, '2012-06-09', 1, '1 ABD DOLARI', '1.8269   ', '1.8357   ', '1.8256   ', '1.8385', NULL, '20120609'),
(959, '2012-06-09', 4, '1 EURO', '2.2774   ', '2.2884   ', '2.2758   ', '2.2918', NULL, '20120609'),
(960, '2012-06-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8167   ', '2.8314   ', '2.8147   ', '2.8356', NULL, '20120609'),
(961, '2012-06-10', 1, '1 ABD DOLARI', '1.8269   ', '1.8357   ', '1.8256   ', '1.8385', NULL, '20120610'),
(962, '2012-06-10', 4, '1 EURO', '2.2774   ', '2.2884   ', '2.2758   ', '2.2918', NULL, '20120610'),
(963, '2012-06-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8167   ', '2.8314   ', '2.8147   ', '2.8356', NULL, '20120610'),
(964, '2012-06-11', 1, '1 ABD DOLARI', '1.8083   ', '1.8170   ', '1.8070   ', '1.8197', NULL, '20120611'),
(965, '2012-06-11', 4, '1 EURO', '2.2746   ', '2.2856   ', '2.2730   ', '2.2890', NULL, '20120611'),
(966, '2012-06-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8098   ', '2.8245   ', '2.8078   ', '2.8287', NULL, '20120611'),
(967, '2012-06-12', 1, '1 ABD DOLARI', '1.8083   ', '1.8170   ', '1.8070   ', '1.8197', NULL, '20120612'),
(968, '2012-06-12', 4, '1 EURO', '2.2746   ', '2.2856   ', '2.2730   ', '2.2890', NULL, '20120612'),
(969, '2012-06-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8098   ', '2.8245   ', '2.8078   ', '2.8287', NULL, '20120612'),
(970, '2012-06-13', 1, '1 ABD DOLARI', '1.8164   ', '1.8252   ', '1.8151   ', '1.8279', NULL, '20120613'),
(971, '2012-06-13', 4, '1 EURO', '2.2767   ', '2.2877   ', '2.2751   ', '2.2911', NULL, '20120613'),
(972, '2012-06-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8263   ', '2.8411   ', '2.8243   ', '2.8454', NULL, '20120613'),
(973, '2012-06-14', 1, '1 ABD DOLARI', '1.8164   ', '1.8252   ', '1.8151   ', '1.8279', NULL, '20120614'),
(974, '2012-06-14', 4, '1 EURO', '2.2767   ', '2.2877   ', '2.2751   ', '2.2911', NULL, '20120614'),
(975, '2012-06-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8263   ', '2.8411   ', '2.8243   ', '2.8454', NULL, '20120614'),
(976, '2012-06-15', 1, '1 ABD DOLARI', '1.8141   ', '1.8228   ', '1.8128   ', '1.8255', NULL, '20120615'),
(977, '2012-06-15', 4, '1 EURO', '2.2804   ', '2.2914   ', '2.2788   ', '2.2948', NULL, '20120615'),
(978, '2012-06-15', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8130   ', '2.8277   ', '2.8110   ', '2.8319', NULL, '20120615'),
(979, '2012-06-16', 1, '1 ABD DOLARI', '1.8066   ', '1.8153   ', '1.8053   ', '1.8180', NULL, '20120616'),
(980, '2012-06-16', 4, '1 EURO', '2.2805   ', '2.2915   ', '2.2789   ', '2.2949', NULL, '20120616'),
(981, '2012-06-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8054   ', '2.8201   ', '2.8034   ', '2.8243', NULL, '20120616'),
(982, '2012-06-17', 1, '1 ABD DOLARI', '1.8066   ', '1.8153   ', '1.8053   ', '1.8180', NULL, '20120617'),
(983, '2012-06-17', 4, '1 EURO', '2.2805   ', '2.2915   ', '2.2789   ', '2.2949', NULL, '20120617'),
(984, '2012-06-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8054   ', '2.8201   ', '2.8034   ', '2.8243', NULL, '20120617'),
(985, '2012-06-19', 1, '1 ABD DOLARI', '1.7977   ', '1.8064   ', '1.7964   ', '1.8091', NULL, '20120619'),
(986, '2012-06-19', 4, '1 EURO', '2.2672   ', '2.2781   ', '2.2656   ', '2.2815', NULL, '20120619'),
(987, '2012-06-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8148   ', '2.8295   ', '2.8128   ', '2.8337', NULL, '20120619'),
(988, '2012-06-20', 1, '1 ABD DOLARI', '1.7845   ', '1.7931   ', '1.7833   ', '1.7958', NULL, '20120620'),
(989, '2012-06-20', 4, '1 EURO', '2.2654   ', '2.2763   ', '2.2638   ', '2.2797', NULL, '20120620'),
(990, '2012-06-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8060   ', '2.8207   ', '2.8040   ', '2.8249', NULL, '20120620'),
(991, '2012-06-21', 1, '1 ABD DOLARI', '1.7895   ', '1.7981   ', '1.7882   ', '1.8008', NULL, '20120621'),
(992, '2012-06-21', 4, '1 EURO', '2.2680   ', '2.2789   ', '2.2664   ', '2.2823', NULL, '20120621'),
(993, '2012-06-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8094   ', '2.8241   ', '2.8074   ', '2.8283', NULL, '20120621'),
(994, '2012-06-22', 1, '1 ABD DOLARI', '1.7895   ', '1.7981   ', '1.7882   ', '1.8008', NULL, '20120622'),
(995, '2012-06-22', 4, '1 EURO', '2.2680   ', '2.2789   ', '2.2664   ', '2.2823', NULL, '20120622'),
(996, '2012-06-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8094   ', '2.8241   ', '2.8074   ', '2.8283', NULL, '20120622'),
(997, '2012-06-23', 1, '1 ABD DOLARI', '1.7978   ', '1.8065   ', '1.7965   ', '1.8092', NULL, '20120623'),
(998, '2012-06-23', 4, '1 EURO', '2.2550   ', '2.2659   ', '2.2534   ', '2.2693', NULL, '20120623'),
(999, '2012-06-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8045   ', '2.8192   ', '2.8025   ', '2.8234', NULL, '20120623'),
(1000, '2012-06-25', 1, '1 ABD DOLARI', '1.8123   ', '1.8210   ', '1.8110   ', '1.8237', NULL, '20120625'),
(1001, '2012-06-25', 4, '1 EURO', '2.2633   ', '2.2742   ', '2.2617   ', '2.2776', NULL, '20120625'),
(1002, '2012-06-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8179   ', '2.8326   ', '2.8159   ', '2.8368', NULL, '20120625'),
(1003, '2012-06-26', 1, '1 ABD DOLARI', '1.8111   ', '1.8198   ', '1.8098   ', '1.8225', NULL, '20120626'),
(1004, '2012-06-26', 4, '1 EURO', '2.2631   ', '2.2740   ', '2.2615   ', '2.2774', NULL, '20120626'),
(1005, '2012-06-26', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8266   ', '2.8414   ', '2.8246   ', '2.8457', NULL, '20120626'),
(1006, '2012-06-28', 1, '1 ABD DOLARI', '1.8153   ', '1.8241   ', '1.8140   ', '1.8268', NULL, '20120628'),
(1007, '2012-06-28', 4, '1 EURO', '2.2590   ', '2.2699   ', '2.2574   ', '2.2733', NULL, '20120628'),
(1008, '2012-06-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8228   ', '2.8376   ', '2.8208   ', '2.8419', NULL, '20120628'),
(1009, '2012-06-29', 1, '1 ABD DOLARI', '1.8065   ', '1.8152   ', '1.8052   ', '1.8179', NULL, '20120629'),
(1010, '2012-06-29', 4, '1 EURO', '2.2742   ', '2.2852   ', '2.2726   ', '2.2886', NULL, '20120629'),
(1011, '2012-06-29', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8216   ', '2.8363   ', '2.8196   ', '2.8406', NULL, '20120629'),
(1012, '2012-07-02', 1, '1 ABD DOLARI', '1.7992   ', '1.8079   ', '1.7979   ', '1.8106', NULL, '20120702'),
(1013, '2012-07-02', 4, '1 EURO', '2.2713   ', '2.2823   ', '2.2697   ', '2.2857', NULL, '20120702'),
(1014, '2012-07-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8188   ', '2.8335   ', '2.8168   ', '2.8378', NULL, '20120702'),
(1015, '2012-07-03', 1, '1 ABD DOLARI', '1.7925   ', '1.8011   ', '1.7912   ', '1.8038', NULL, '20120703'),
(1016, '2012-07-03', 4, '1 EURO', '2.2554   ', '2.2663   ', '2.2538   ', '2.2697', NULL, '20120703'),
(1017, '2012-07-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8105   ', '2.8252   ', '2.8085   ', '2.8294', NULL, '20120703'),
(1018, '2012-07-04', 1, '1 ABD DOLARI', '1.7933   ', '1.8019   ', '1.7920   ', '1.8046', NULL, '20120704'),
(1019, '2012-07-04', 4, '1 EURO', '2.2552   ', '2.2661   ', '2.2536   ', '2.2695', NULL, '20120704'),
(1020, '2012-07-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8051   ', '2.8198   ', '2.8031   ', '2.8240', NULL, '20120704'),
(1021, '2012-07-05', 1, '1 ABD DOLARI', '1.8008   ', '1.8095   ', '1.7995   ', '1.8122', NULL, '20120705'),
(1022, '2012-07-05', 4, '1 EURO', '2.2504   ', '2.2613   ', '2.2488   ', '2.2647', NULL, '20120705'),
(1023, '2012-07-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8043   ', '2.8190   ', '2.8023   ', '2.8232', NULL, '20120705'),
(1029, '2012-07-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8101   ', '2.8248   ', '2.8081   ', '2.8290', NULL, '20120706'),
(1028, '2012-07-06', 4, '1 EURO', '2.2401   ', '2.2509   ', '2.2385   ', '2.2543', NULL, '20120706'),
(1027, '2012-07-06', 1, '1 ABD DOLARI', '1.8095   ', '1.8182   ', '1.8082   ', '1.8209', NULL, '20120706'),
(1030, '2012-07-07', 1, '1 ABD DOLARI', '1.8095   ', '1.8182   ', '1.8082   ', '1.8209', NULL, '20120707'),
(1031, '2012-07-07', 4, '1 EURO', '2.2401   ', '2.2509   ', '2.2385   ', '2.2543', NULL, '20120707'),
(1032, '2012-07-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8101   ', '2.8248   ', '2.8081   ', '2.8290', NULL, '20120707'),
(1033, '2012-07-09', 1, '1 ABD DOLARI', '1.8134   ', '1.8221   ', '1.8121   ', '1.8248', NULL, '20120709'),
(1034, '2012-07-09', 4, '1 EURO', '2.2297   ', '2.2405   ', '2.2281   ', '2.2439', NULL, '20120709'),
(1035, '2012-07-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8085   ', '2.8232   ', '2.8065   ', '2.8274', NULL, '20120709'),
(1036, '2012-07-10', 1, '1 ABD DOLARI', '1.8134   ', '1.8221   ', '1.8121   ', '1.8248', NULL, '20120710'),
(1037, '2012-07-10', 4, '1 EURO', '2.2297   ', '2.2405   ', '2.2281   ', '2.2439', NULL, '20120710'),
(1038, '2012-07-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8085   ', '2.8232   ', '2.8065   ', '2.8274', NULL, '20120710'),
(1039, '2012-07-11', 1, '1 ABD DOLARI', '1.8012   ', '1.8099   ', '1.7999   ', '1.8126', NULL, '20120711'),
(1040, '2012-07-11', 4, '1 EURO', '2.2106   ', '2.2213   ', '2.2091   ', '2.2246', NULL, '20120711'),
(1041, '2012-07-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8012   ', '2.8158   ', '2.7992   ', '2.8200', NULL, '20120711'),
(1042, '2012-07-12', 1, '1 ABD DOLARI', '1.8097   ', '1.8184   ', '1.8084   ', '1.8211', NULL, '20120712'),
(1043, '2012-07-12', 4, '1 EURO', '2.2069   ', '2.2175   ', '2.2054   ', '2.2208', NULL, '20120712'),
(1044, '2012-07-12', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7943   ', '2.8089   ', '2.7923   ', '2.8131', NULL, '20120712'),
(1050, '2012-07-17', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8133   ', '2.8280   ', '2.8113   ', '2.8322', NULL, '20120717'),
(1049, '2012-07-17', 4, '1 EURO', '2.2126   ', '2.2233   ', '2.2111   ', '2.2266', NULL, '20120717'),
(1048, '2012-07-17', 1, '1 ABD DOLARI', '1.8003   ', '1.8090   ', '1.7990   ', '1.8117', NULL, '20120717'),
(1051, '2012-07-18', 1, '1 ABD DOLARI', '1.7997   ', '1.8084   ', '1.7984   ', '1.8111', NULL, '20120718'),
(1052, '2012-07-18', 4, '1 EURO', '2.2058   ', '2.2164   ', '2.2043   ', '2.2197', NULL, '20120718'),
(1053, '2012-07-18', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8097   ', '2.8244   ', '2.8077   ', '2.8286', NULL, '20120718');
INSERT INTO `gunluk_kur` (`indeks`, `tarih`, `doviz_kodu`, `doviz`, `alis`, `satis`, `efe_alis`, `efe_satis`, `saat`, `tarihkod`) VALUES
(1054, '2012-07-19', 1, '1 ABD DOLARI', '1.7939   ', '1.8026   ', '1.7926   ', '1.8053', NULL, '20120719'),
(1055, '2012-07-19', 4, '1 EURO', '2.2057   ', '2.2163   ', '2.2042   ', '2.2196', NULL, '20120719'),
(1056, '2012-07-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8120   ', '2.8267   ', '2.8100   ', '2.8309', NULL, '20120719'),
(1057, '2012-07-20', 1, '1 ABD DOLARI', '1.7967   ', '1.8054   ', '1.7954   ', '1.8081', NULL, '20120720'),
(1058, '2012-07-20', 4, '1 EURO', '2.1998   ', '2.2104   ', '2.1983   ', '2.2137', NULL, '20120720'),
(1059, '2012-07-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8191   ', '2.8338   ', '2.8171   ', '2.8381', NULL, '20120720'),
(1060, '2012-07-21', 1, '1 ABD DOLARI', '1.7967   ', '1.8054   ', '1.7954   ', '1.8081', NULL, '20120721'),
(1061, '2012-07-21', 4, '1 EURO', '2.1998   ', '2.2104   ', '2.1983   ', '2.2137', NULL, '20120721'),
(1062, '2012-07-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8191   ', '2.8338   ', '2.8171   ', '2.8381', NULL, '20120721'),
(1063, '2012-07-22', 1, '1 ABD DOLARI', '1.7967   ', '1.8054   ', '1.7954   ', '1.8081', NULL, '20120722'),
(1064, '2012-07-22', 4, '1 EURO', '2.1998   ', '2.2104   ', '2.1983   ', '2.2137', NULL, '20120722'),
(1065, '2012-07-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8191   ', '2.8338   ', '2.8171   ', '2.8381', NULL, '20120722'),
(1066, '2012-07-23', 1, '1 ABD DOLARI', '1.8101   ', '1.8188   ', '1.8088   ', '1.8215', NULL, '20120723'),
(1067, '2012-07-23', 4, '1 EURO', '2.1916   ', '2.2022   ', '2.1901   ', '2.2055', NULL, '20120723'),
(1068, '2012-07-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8115   ', '2.8262   ', '2.8095   ', '2.8304', NULL, '20120723'),
(1077, '2012-07-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8260   ', '2.8408   ', '2.8240   ', '2.8451', NULL, '20120730'),
(1076, '2012-07-30', 4, '1 EURO', '2.2087   ', '2.2194   ', '2.2072   ', '2.2227', NULL, '20120730'),
(1075, '2012-07-30', 1, '1 ABD DOLARI', '1.8011   ', '1.8098   ', '1.7998   ', '1.8125', NULL, '20120730'),
(1078, '2012-08-01', 1, '1 ABD DOLARI', '1.7856   ', '1.7942   ', '1.7844   ', '1.7969', NULL, '20120801'),
(1079, '2012-08-01', 4, '1 EURO', '2.1988   ', '2.2094   ', '2.1973   ', '2.2127', NULL, '20120801'),
(1080, '2012-08-01', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7921   ', '2.8067   ', '2.7901   ', '2.8109', NULL, '20120801'),
(1081, '2012-08-02', 1, '1 ABD DOLARI', '1.7856   ', '1.7942   ', '1.7844   ', '1.7969', NULL, '20120802'),
(1082, '2012-08-02', 4, '1 EURO', '2.1988   ', '2.2094   ', '2.1973   ', '2.2127', NULL, '20120802'),
(1083, '2012-08-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7921   ', '2.8067   ', '2.7901   ', '2.8109', NULL, '20120802'),
(1089, '2012-08-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7781   ', '2.7926   ', '2.7762   ', '2.7968', NULL, '20120809'),
(1088, '2012-08-09', 4, '1 EURO', '2.1892   ', '2.1998   ', '2.1877   ', '2.2031', NULL, '20120809'),
(1087, '2012-08-09', 1, '1 ABD DOLARI', '1.7758   ', '1.7844   ', '1.7746   ', '1.7871', NULL, '20120809'),
(1090, '2012-08-16', 1, '1 ABD DOLARI', '1.7896   ', '1.7982   ', '1.7883   ', '1.8009', NULL, '20120816'),
(1091, '2012-08-16', 4, '1 EURO', '2.1972   ', '2.2078   ', '2.1957   ', '2.2111', NULL, '20120816'),
(1092, '2012-08-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8070   ', '2.8217   ', '2.8050   ', '2.8259', NULL, '20120816'),
(1093, '2012-08-23', 1, '1 ABD DOLARI', '1.7868   ', '1.7954   ', '1.7855   ', '1.7981', NULL, '20120823'),
(1094, '2012-08-23', 4, '1 EURO', '2.2265   ', '2.2372   ', '2.2249   ', '2.2406', NULL, '20120823'),
(1095, '2012-08-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8210   ', '2.8357   ', '2.8190   ', '2.8400', NULL, '20120823'),
(1096, '2012-08-28', 1, '1 ABD DOLARI', '1.7916   ', '1.8002   ', '1.7903   ', '1.8029', NULL, '20120828'),
(1097, '2012-08-28', 4, '1 EURO', '2.2436   ', '2.2544   ', '2.2420   ', '2.2578', NULL, '20120828'),
(1098, '2012-08-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8320   ', '2.8468   ', '2.8300   ', '2.8511', NULL, '20120828'),
(1099, '2012-08-30', 1, '1 ABD DOLARI', '1.8070   ', '1.8157   ', '1.8057   ', '1.8184', NULL, '20120830'),
(1100, '2012-08-30', 4, '1 EURO', '2.2683   ', '2.2792   ', '2.2667   ', '2.2826', NULL, '20120830'),
(1101, '2012-08-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8584   ', '2.8733   ', '2.8564   ', '2.8776', NULL, '20120830'),
(1102, '2012-08-31', 1, '1 ABD DOLARI', '1.8070   ', '1.8157   ', '1.8057   ', '1.8184', NULL, '20120831'),
(1103, '2012-08-31', 4, '1 EURO', '2.2683   ', '2.2792   ', '2.2667   ', '2.2826', NULL, '20120831'),
(1104, '2012-08-31', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8584   ', '2.8733   ', '2.8564   ', '2.8776', NULL, '20120831'),
(1105, '2012-09-03', 1, '1 ABD DOLARI', '1.8092   ', '1.8179   ', '1.8079   ', '1.8206', NULL, '20120903'),
(1106, '2012-09-03', 4, '1 EURO', '2.2792   ', '2.2902   ', '2.2776   ', '2.2936', NULL, '20120903'),
(1107, '2012-09-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8733   ', '2.8883   ', '2.8713   ', '2.8926', NULL, '20120903'),
(1108, '2012-09-05', 1, '1 ABD DOLARI', '1.8092   ', '1.8179   ', '1.8079   ', '1.8206', NULL, '20120905'),
(1109, '2012-09-05', 4, '1 EURO', '2.2792   ', '2.2902   ', '2.2776   ', '2.2936', NULL, '20120905'),
(1110, '2012-09-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8733   ', '2.8883   ', '2.8713   ', '2.8926', NULL, '20120905'),
(1111, '2012-09-06', 1, '1 ABD DOLARI', '1.8097   ', '1.8184   ', '1.8084   ', '1.8211', NULL, '20120906'),
(1112, '2012-09-06', 4, '1 EURO', '2.2833   ', '2.2943   ', '2.2817   ', '2.2977', NULL, '20120906'),
(1113, '2012-09-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8777   ', '2.8927   ', '2.8757   ', '2.8970', NULL, '20120906'),
(1114, '2012-09-11', 1, '1 ABD DOLARI', '1.7949   ', '1.8036   ', '1.7936   ', '1.8063', NULL, '20120911'),
(1115, '2012-09-11', 4, '1 EURO', '2.2968   ', '2.3079   ', '2.2952   ', '2.3114', NULL, '20120911'),
(1116, '2012-09-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8749   ', '2.8899   ', '2.8729   ', '2.8942', NULL, '20120911'),
(1122, '2012-09-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8856   ', '2.9007   ', '2.8836   ', '2.9051', NULL, '20120913'),
(1121, '2012-09-13', 4, '1 EURO', '2.3126   ', '2.3238   ', '2.3110   ', '2.3273', NULL, '20120913'),
(1120, '2012-09-13', 1, '1 ABD DOLARI', '1.7932   ', '1.8018   ', '1.7919   ', '1.8045', NULL, '20120913'),
(1123, '2012-09-14', 1, '1 ABD DOLARI', '1.7862   ', '1.7948   ', '1.7849   ', '1.7975', NULL, '20120914'),
(1124, '2012-09-14', 4, '1 EURO', '2.3332   ', '2.3445   ', '2.3316   ', '2.3480', NULL, '20120914'),
(1125, '2012-09-14', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8945   ', '2.9096   ', '2.8925   ', '2.9140', NULL, '20120914'),
(1126, '2012-09-15', 1, '1 ABD DOLARI', '1.7888   ', '1.7974   ', '1.7875   ', '1.8001', NULL, '20120915'),
(1127, '2012-09-15', 4, '1 EURO', '2.3442   ', '2.3555   ', '2.3426   ', '2.3590', NULL, '20120915'),
(1128, '2012-09-15', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.9005   ', '2.9157   ', '2.8985   ', '2.9201', NULL, '20120915'),
(1129, '2012-09-19', 1, '1 ABD DOLARI', '1.7933   ', '1.8019   ', '1.7920   ', '1.8046', NULL, '20120919'),
(1130, '2012-09-19', 4, '1 EURO', '2.3440   ', '2.3553   ', '2.3424   ', '2.3588', NULL, '20120919'),
(1131, '2012-09-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.9114   ', '2.9266   ', '2.9094   ', '2.9310', NULL, '20120919'),
(1132, '2012-09-21', 1, '1 ABD DOLARI', '1.7866   ', '1.7952   ', '1.7853   ', '1.7979', NULL, '20120921'),
(1133, '2012-09-21', 4, '1 EURO', '2.3213   ', '2.3325   ', '2.3197   ', '2.3360', NULL, '20120921'),
(1134, '2012-09-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.9043   ', '2.9195   ', '2.9023   ', '2.9239', NULL, '20120921'),
(1135, '2012-09-24', 1, '1 ABD DOLARI', '1.7866   ', '1.7952   ', '1.7853   ', '1.7979', NULL, '20120924'),
(1136, '2012-09-24', 4, '1 EURO', '2.3213   ', '2.3325   ', '2.3197   ', '2.3360', NULL, '20120924'),
(1137, '2012-09-24', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.9043   ', '2.9195   ', '2.9023   ', '2.9239', NULL, '20120924'),
(1138, '2012-10-03', 1, '1 ABD DOLARI', '1.7843   ', '1.7929   ', '1.7831   ', '1.7956', NULL, '20121003'),
(1139, '2012-10-03', 4, '1 EURO', '2.3041   ', '2.3152   ', '2.3025   ', '2.3187', NULL, '20121003'),
(1140, '2012-10-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8810   ', '2.8961   ', '2.8790   ', '2.9004', NULL, '20121003'),
(1141, '2012-10-06', 1, '1 ABD DOLARI', '1.7893   ', '1.7979   ', '1.7880   ', '1.8006', NULL, '20121006'),
(1142, '2012-10-06', 4, '1 EURO', '2.3279   ', '2.3391   ', '2.3263   ', '2.3426', NULL, '20121006'),
(1143, '2012-10-06', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8950   ', '2.9101   ', '2.8930   ', '2.9145', NULL, '20121006'),
(1144, '2012-10-08', 1, '1 ABD DOLARI', '1.8011   ', '1.8098   ', '1.7998   ', '1.8125', NULL, '20121008'),
(1145, '2012-10-08', 4, '1 EURO', '2.3340   ', '2.3453   ', '2.3324   ', '2.3488', NULL, '20121008'),
(1146, '2012-10-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8913   ', '2.9064   ', '2.8893   ', '2.9108', NULL, '20121008'),
(1147, '2012-10-09', 1, '1 ABD DOLARI', '1.8062   ', '1.8149   ', '1.8049   ', '1.8176', NULL, '20121009'),
(1148, '2012-10-09', 4, '1 EURO', '2.3368   ', '2.3481   ', '2.3352   ', '2.3516', NULL, '20121009'),
(1149, '2012-10-09', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8927   ', '2.9078   ', '2.8907   ', '2.9122', NULL, '20121009'),
(1150, '2012-10-10', 1, '1 ABD DOLARI', '1.8082   ', '1.8169   ', '1.8069   ', '1.8196', NULL, '20121010'),
(1151, '2012-10-10', 4, '1 EURO', '2.3279   ', '2.3391   ', '2.3263   ', '2.3426', NULL, '20121010'),
(1152, '2012-10-10', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8939   ', '2.9090   ', '2.8919   ', '2.9134', NULL, '20121010'),
(1153, '2012-10-11', 1, '1 ABD DOLARI', '1.8039   ', '1.8126   ', '1.8026   ', '1.8153', NULL, '20121011'),
(1154, '2012-10-11', 4, '1 EURO', '2.3263   ', '2.3375   ', '2.3247   ', '2.3410', NULL, '20121011'),
(1155, '2012-10-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8901   ', '2.9052   ', '2.8881   ', '2.9096', NULL, '20121011'),
(1156, '2012-10-16', 1, '1 ABD DOLARI', '1.8004   ', '1.8091   ', '1.7991   ', '1.8118', NULL, '20121016'),
(1157, '2012-10-16', 4, '1 EURO', '2.3425   ', '2.3538   ', '2.3409   ', '2.3573', NULL, '20121016'),
(1158, '2012-10-16', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8968   ', '2.9119   ', '2.8948   ', '2.9163', NULL, '20121016'),
(1159, '2012-10-19', 1, '1 ABD DOLARI', '1.7890   ', '1.7976   ', '1.7877   ', '1.8003', NULL, '20121019'),
(1160, '2012-10-19', 4, '1 EURO', '2.3351   ', '2.3464   ', '2.3335   ', '2.3499', NULL, '20121019'),
(1161, '2012-10-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8705   ', '2.8855   ', '2.8685   ', '2.8898', NULL, '20121019'),
(1162, '2012-10-22', 1, '1 ABD DOLARI', '1.7863   ', '1.7949   ', '1.7850   ', '1.7976', NULL, '20121022'),
(1163, '2012-10-22', 4, '1 EURO', '2.3322   ', '2.3434   ', '2.3306   ', '2.3469', NULL, '20121022'),
(1164, '2012-10-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8642   ', '2.8792   ', '2.8622   ', '2.8835', NULL, '20121022'),
(1165, '2012-11-15', 1, '1 ABD DOLARI', '1.7919   ', '1.8005   ', '1.7906   ', '1.8032', NULL, '20121115'),
(1166, '2012-11-15', 4, '1 EURO', '2.2859   ', '2.2969   ', '2.2843   ', '2.3003', NULL, '20121115'),
(1167, '2012-11-15', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8376   ', '2.8524   ', '2.8356   ', '2.8567', NULL, '20121115'),
(1168, '2012-11-19', 1, '1 ABD DOLARI', '1.7928   ', '1.8014   ', '1.7915   ', '1.8041', NULL, '20121119'),
(1169, '2012-11-19', 4, '1 EURO', '2.2838   ', '2.2948   ', '2.2822   ', '2.2982', NULL, '20121119'),
(1170, '2012-11-19', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8437   ', '2.8586   ', '2.8417   ', '2.8629', NULL, '20121119'),
(1171, '2012-11-22', 1, '1 ABD DOLARI', '1.7905   ', '1.7991   ', '1.7892   ', '1.8018', NULL, '20121122'),
(1172, '2012-11-22', 4, '1 EURO', '2.2906   ', '2.3016   ', '2.2890   ', '2.3051', NULL, '20121122'),
(1173, '2012-11-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8496   ', '2.8645   ', '2.8476   ', '2.8688', NULL, '20121122'),
(1174, '2012-11-23', 1, '1 ABD DOLARI', '1.7909   ', '1.7995   ', '1.7896   ', '1.8022', NULL, '20121123'),
(1175, '2012-11-23', 4, '1 EURO', '2.3047   ', '2.3158   ', '2.3031   ', '2.3193', NULL, '20121123'),
(1176, '2012-11-23', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8566   ', '2.8715   ', '2.8546   ', '2.8758', NULL, '20121123'),
(1177, '2012-11-25', 1, '1 ABD DOLARI', '1.7902   ', '1.7988   ', '1.7889   ', '1.8015', NULL, '20121125'),
(1178, '2012-11-25', 4, '1 EURO', '2.3099   ', '2.3210   ', '2.3083   ', '2.3245', NULL, '20121125'),
(1179, '2012-11-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8526   ', '2.8675   ', '2.8506   ', '2.8718', NULL, '20121125'),
(1180, '2012-11-27', 1, '1 ABD DOLARI', '1.7856   ', '1.7942   ', '1.7844   ', '1.7969', NULL, '20121127'),
(1181, '2012-11-27', 4, '1 EURO', '2.3139   ', '2.3251   ', '2.3123   ', '2.3286', NULL, '20121127'),
(1182, '2012-11-27', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8609   ', '2.8759   ', '2.8589   ', '2.8802', NULL, '20121127'),
(1183, '2012-11-28', 1, '1 ABD DOLARI', '0,00', '0,00', NULL, NULL, NULL, '20121128'),
(1184, '2012-11-28', 4, '1 EURO', '0,00', '0,00', NULL, NULL, NULL, '20121128'),
(1185, '2012-11-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0,00', '0,00', NULL, NULL, NULL, '20121128'),
(1186, '2012-12-03', 1, '1 ABD DOLARI', '1.7774   ', '1.7860   ', '1.7762   ', '1.7887', NULL, '20121203'),
(1187, '2012-12-03', 4, '1 EURO', '2.3114   ', '2.3225   ', '2.3098   ', '2.3260', NULL, '20121203'),
(1188, '2012-12-03', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8497   ', '2.8646   ', '2.8477   ', '2.8689', NULL, '20121203'),
(1189, '2012-12-04', 1, '1 ABD DOLARI', '1.7773   ', '1.7859   ', '1.7761   ', '1.7886', NULL, '20121204'),
(1190, '2012-12-04', 4, '1 EURO', '2.3242   ', '2.3354   ', '2.3226   ', '2.3389', NULL, '20121204'),
(1191, '2012-12-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8635   ', '2.8785   ', '2.8615   ', '2.8828', NULL, '20121204'),
(1192, '2012-12-05', 1, '1 ABD DOLARI', '1.7773   ', '1.7859   ', '1.7761   ', '1.7886', NULL, '20121205'),
(1193, '2012-12-05', 4, '1 EURO', '2.3242   ', '2.3354   ', '2.3226   ', '2.3389', NULL, '20121205'),
(1194, '2012-12-05', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8635   ', '2.8785   ', '2.8615   ', '2.8828', NULL, '20121205'),
(1195, '2012-12-07', 1, '1 ABD DOLARI', '1.7809   ', '1.7895   ', '1.7797   ', '1.7922', NULL, '20121207'),
(1196, '2012-12-07', 4, '1 EURO', '2.3273   ', '2.3385   ', '2.3257   ', '2.3420', NULL, '20121207'),
(1197, '2012-12-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8675   ', '2.8825   ', '2.8655   ', '2.8868', NULL, '20121207'),
(1198, '2012-12-11', 1, '1 ABD DOLARI', '1.7771   ', '1.7857   ', '1.7759   ', '1.7884', NULL, '20121211'),
(1199, '2012-12-11', 4, '1 EURO', '2.3055   ', '2.3166   ', '2.3039   ', '2.3201', NULL, '20121211'),
(1200, '2012-12-11', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8576   ', '2.8725   ', '2.8556   ', '2.8768', NULL, '20121211'),
(1201, '2012-12-13', 1, '1 ABD DOLARI', '1.7706   ', '1.7791   ', '1.7694   ', '1.7818', NULL, '20121213'),
(1202, '2012-12-13', 4, '1 EURO', '2.3135   ', '2.3247   ', '2.3119   ', '2.3282', NULL, '20121213'),
(1203, '2012-12-13', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8551   ', '2.8700   ', '2.8531   ', '2.8743', NULL, '20121213'),
(1204, '2012-12-20', 1, '1 ABD DOLARI', '1.7721   ', '1.7806   ', '1.7709   ', '1.7833', NULL, '20121220'),
(1205, '2012-12-20', 4, '1 EURO', '2.3521   ', '2.3634   ', '2.3505   ', '2.3669', NULL, '20121220'),
(1206, '2012-12-20', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8855   ', '2.9006   ', '2.8835   ', '2.9050', NULL, '20121220'),
(1207, '2012-12-22', 1, '1 ABD DOLARI', '1.7877   ', '1.7963   ', '1.7864   ', '1.7990', NULL, '20121222'),
(1208, '2012-12-22', 4, '1 EURO', '2.3586   ', '2.3700   ', '2.3569   ', '2.3736', NULL, '20121222'),
(1209, '2012-12-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8796   ', '2.8947   ', '2.8776   ', '2.8990', NULL, '20121222'),
(1210, '2012-12-26', 1, '1 ABD DOLARI', '1.7848   ', '1.7934   ', '1.7836   ', '1.7961', NULL, '20121226'),
(1211, '2012-12-26', 4, '1 EURO', '2.3566   ', '2.3680   ', '2.3550   ', '2.3716', NULL, '20121226'),
(1212, '2012-12-26', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8787   ', '2.8937   ', '2.8767   ', '2.8980', NULL, '20121226'),
(1213, '2012-12-29', 1, '1 ABD DOLARI', '1.7826   ', '1.7912   ', '1.7814   ', '1.7939', NULL, '20121229'),
(1214, '2012-12-29', 4, '1 EURO', '2.3517   ', '2.3630   ', '2.3501   ', '2.3665', NULL, '20121229'),
(1215, '2012-12-29', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8708   ', '2.8858   ', '2.8688   ', '2.8901', NULL, '20121229'),
(1216, '2013-01-04', 1, '1 ABD DOLARI', '1.7729   ', '1.7815   ', '1.7717   ', '1.7842', NULL, '20130104'),
(1217, '2013-01-04', 4, '1 EURO', '2.3263   ', '2.3375   ', '2.3247   ', '2.3410', NULL, '20130104'),
(1218, '2013-01-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8696   ', '2.8846   ', '2.8676   ', '2.8889', NULL, '20130104'),
(1219, '2013-01-07', 1, '1 ABD DOLARI', '1.7736   ', '1.7822   ', '1.7724   ', '1.7849', NULL, '20130107'),
(1220, '2013-01-07', 4, '1 EURO', '2.3126   ', '2.3238   ', '2.3110   ', '2.3273', NULL, '20130107'),
(1221, '2013-01-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8471   ', '2.8620   ', '2.8451   ', '2.8663', NULL, '20130107'),
(1222, '2013-01-08', 1, '1 ABD DOLARI', '1.7736   ', '1.7822   ', '1.7724   ', '1.7849', NULL, '20130108'),
(1223, '2013-01-08', 4, '1 EURO', '2.3126   ', '2.3238   ', '2.3110   ', '2.3273', NULL, '20130108'),
(1224, '2013-01-08', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.8471   ', '2.8620   ', '2.8451   ', '2.8663', NULL, '20130108'),
(1225, '2013-01-26', 1, '1 ABD DOLARI', '1.7571   ', '1.7656   ', '1.7559   ', '1.7682', NULL, '20130126'),
(1226, '2013-01-26', 4, '1 EURO', '2.3616   ', '2.3730   ', '2.3599   ', '2.3766', NULL, '20130126'),
(1227, '2013-01-26', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7732   ', '2.7877   ', '2.7713   ', '2.7919', NULL, '20130126'),
(1228, '2013-03-21', 1, '1 ABD DOLARI', '1.8187   ', '1.8220   ', '1.8174   ', '1.8247', NULL, '20130321'),
(1229, '2013-03-21', 4, '1 EURO', '2.3507   ', '2.3550   ', '2.3491   ', '2.3585', NULL, '20130321'),
(1230, '2013-03-21', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7456   ', '2.7599   ', '2.7437   ', '2.7640', NULL, '20130321'),
(1231, '2013-04-02', 1, '1 ABD DOLARI', '1.8049   ', '1.8081   ', '1.8036   ', '1.8108', NULL, '20130402'),
(1232, '2013-04-02', 4, '1 EURO', '2.3173   ', '2.3215   ', '2.3157   ', '2.3250', NULL, '20130402'),
(1233, '2013-04-02', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7375   ', '2.7518   ', '2.7356   ', '2.7559', NULL, '20130402'),
(1234, '2013-04-04', 1, '1 ABD DOLARI', '1.8061   ', '1.8093   ', '1.8048   ', '1.8120', NULL, '20130404'),
(1235, '2013-04-04', 4, '1 EURO', '2.3153   ', '2.3195   ', '2.3137   ', '2.3230', NULL, '20130404'),
(1236, '2013-04-04', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7253   ', '2.7395   ', '2.7234   ', '2.7436', NULL, '20130404'),
(1237, '2013-04-25', 1, '1 ABD DOLARI', '1.8034   ', '1.8066   ', '1.8021   ', '1.8093', NULL, '20130425'),
(1238, '2013-04-25', 4, '1 EURO', '2.3440   ', '2.3482   ', '2.3424   ', '2.3517', NULL, '20130425'),
(1239, '2013-04-25', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7480   ', '2.7623   ', '2.7461   ', '2.7664', NULL, '20130425'),
(1240, '2013-05-07', 1, '1 ABD DOLARI', '1.7991   ', '1.8023   ', '1.7978   ', '1.8050', NULL, '20130507'),
(1241, '2013-05-07', 4, '1 EURO', '2.3565   ', '2.3608   ', '2.3549   ', '2.3643', NULL, '20130507'),
(1242, '2013-05-07', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '2.7897   ', '2.8042   ', '2.7877   ', '2.8084', NULL, '20130507'),
(1243, '2014-05-28', 1, '1 ABD DOLARI', '0.00', '0.00', NULL, NULL, NULL, '20140528'),
(1244, '2014-05-28', 4, '1 EURO', '0.00', '0.00', NULL, NULL, NULL, '20140528'),
(1245, '2014-05-28', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '0.00', '0.00', NULL, NULL, NULL, '20140528'),
(1246, '2016-07-22', 1, '1 ABD DOLARI', '3,0573', '3,0628', NULL, NULL, NULL, '20160722'),
(1247, '2016-07-22', 4, '1 EURO', '3,3704', '3,3765', NULL, NULL, NULL, '20160722'),
(1248, '2016-07-22', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '4,0191', '4,04', NULL, NULL, NULL, '20160722'),
(1249, '2016-07-30', 1, '1 ABD DOLARI', '3,0125', '3,018', NULL, NULL, NULL, '20160730'),
(1250, '2016-07-30', 4, '1 EURO', '3,3446', '3,3506', NULL, NULL, NULL, '20160730'),
(1251, '2016-07-30', 5, '1 ÝNGÝLÝZ STERLÝNÝ', '3,9624', '3,9831', NULL, NULL, NULL, '20160730');

-- --------------------------------------------------------

--
-- Table structure for table `hareketler`
--

CREATE TABLE `hareketler` (
  `index_hareketler` int(6) NOT NULL,
  `hareketturu` varchar(45) NOT NULL,
  `ogrenciindex` int(3) NOT NULL,
  `ogretmen` int(3) DEFAULT NULL,
  `miktar` float(10,2) NOT NULL,
  `pozitif` float(10,2) NOT NULL,
  `negatif` float(10,2) NOT NULL,
  `islemtarihi` date NOT NULL,
  `islemsaati` time NOT NULL,
  `tutar` float(10,2) DEFAULT 0.00,
  `soruindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hizmettanimlari`
--

CREATE TABLE `hizmettanimlari` (
  `hizmetindex` int(3) NOT NULL,
  `hizmetkodu` varchar(50) NOT NULL,
  `hizmettanimi` varchar(100) NOT NULL,
  `hizmetturu` varchar(50) DEFAULT NULL,
  `primorani` varchar(10) DEFAULT NULL,
  `bonusorani` varchar(10) DEFAULT NULL,
  `gelirgrubu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hizmettanimlari`
--

INSERT INTO `hizmettanimlari` (`hizmetindex`, `hizmetkodu`, `hizmettanimi`, `hizmetturu`, `primorani`, `bonusorani`, `gelirgrubu`) VALUES
(1, '00001', 'MUAYENE', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(2, '00002', 'CÝLT BAKIMI', 'Verilen', '0', '0', 'GÜZELLÝK'),
(3, '00003', 'LAZER', 'Verilen', '0', '0', 'GÜZELLÝK'),
(4, '00004', 'BOTOKS', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(5, '00005', 'DUDAK DOLGUSU', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(6, '00006', 'PRP', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(8, '00008', 'DERMAPEN', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(9, '00009', 'ÝÐNELÝ RADYO FREKANS', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(10, '00010', 'PLEXR', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(11, '00011', 'YANAK DOLGUSU', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(12, '00012', 'GÖZ ALTI DOLGUSU', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(13, '00013', 'KÝMYASAL PEELÝNG', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(14, '00014', 'SAÇ MEZOTERAPÝSÝ', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(70, '00070', 'GLOBAL EYE DERMOLER', 'Verilen', '0', '0', 'DOKTOR'),
(71, '00071', 'LEKE TEDAVÝSÝ', 'Verilen', '0', '0', 'DOKTOR'),
(72, '00072', 'KARBON PEELÝNG ', 'Verilen', '0', '0', 'DOKTOR'),
(73, '00073', 'HYDRAFACÝAL', 'Verilen', '0', '0', 'GÜZELLÝK'),
(19, '00019', 'PANSUMAN', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(20, '00020', 'DAMAR LAZERÝ YÜZ BÖLGESÝ', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(21, '00021', 'DAMAR LAZERÝ BACAK BÖLGESÝ', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(22, '00022', 'MÝKROBLAÝDÝNG', 'Verilen', '0', '0', 'GÜZELLÝK'),
(77, '00077', 'IÞIK DOLGUSU', 'Verilen', '0', '0', 'DOKTOR'),
(69, '00069', 'GLOBAL EYECAN PELLÝNG', 'Verilen', '0', '0', 'DOKTOR'),
(68, '00068', 'GÖZ ALTI MORLUÐU ELEETRÝ', 'Verilen', '0', '0', 'DOKTOR'),
(25, '00025', 'ÇATLAK TEDAVÝSÝ', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMLERÝ'),
(86, '00086', 'GREENPEEL', 'Verilen', '0', '0', 'DOKTOR '),
(87, '00087', 'ÞAKAK DOLGUSU', 'Verilen', '0', '0', 'DOKTOR'),
(85, '00085', 'HACAMAT', 'Verilen', '0', '0', 'DOKTOR'),
(83, '00083', 'FRANSIZ ASKISI', 'Verilen', '0', '0', 'GÜZELLÝK'),
(84, '00084', 'DOLGU BOTOKS ', 'Verilen', '0', '0', 'DOKTOR'),
(82, '00082', 'FRAKSÝYONEL', 'Verilen', '0', '0', 'DOKTOR'),
(80, '00080', 'HYDROPLUS', 'Verilen', '0', '0', 'GÜZELLÝK'),
(81, '00081', 'XELEDARM', 'Verilen', '0', '0', 'DOKTOR'),
(78, '00078', 'ALTIN ÝÐNE', 'Verilen', '0', '0', 'DOKTOR'),
(79, '00079', 'GRÝNPEEL', 'Verilen', '0', '0', 'DOKTOR'),
(75, '00075', 'PEELÝNG', 'Verilen', '0', '0', 'DOKTOR'),
(76, '00076', 'ÖRÜMCEK AÐI', 'Verilen', '0', '0', 'DOKTOR'),
(74, '00074', 'GENÇLÝK AÞISI', 'Verilen', '0', '0', 'DOKTOR'),
(41, '00041', 'SULU MANÝKÜR', 'Verilen', '0', '0', 'GÜZELLÝK'),
(42, '00042', 'SULU PEDÝKÜR', 'Verilen', '0', '0', 'GÜZELLÝK'),
(43, '00043', 'KAÞ', 'Verilen', '0', '0', 'GÜZELLÝK'),
(44, '00044', 'KERATÝNLÝ MANÝKÜR', 'Verilen', '0', '0', 'GÜZELLÝK'),
(45, '00045', 'KERATÝNLÝ PEDÝKÜR', 'Verilen', '0', '0', 'GÜZELLÝK'),
(46, '00046', 'GENÇLÝK AÞISI', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMÝ'),
(101, '00101', 'KALICI OJE', 'Verilen', '0', '0', 'GÜZELLÝK'),
(48, '00048', 'KÝRPÝK LÝFTÝNGÝ', 'Verilen', '0', '0', 'GÜZELLÝK'),
(49, '00049', 'MEDÝKAL AYAK', 'Verilen', '0', '0', 'GÜZELLÝK'),
(50, '00050', 'AÐDA', 'Verilen', '0', '0', 'GÜZELLÝK'),
(52, '00052', 'ÜRÜN ', 'Verilen', '0', '0', NULL),
(53, '00053', 'LGP', 'Verilen', '0', '0', 'GÜZELLÝK'),
(54, '00054', 'G5', 'Verilen', '0', '0', 'GÜZELLÝK'),
(55, '00055', 'FORMA', 'Verilen', '0', '0', 'GÜZELLÝK'),
(56, '00056', 'LENF ÖDEM', 'Verilen', '0', '0', 'GÜZELLÝK'),
(57, '00057', 'ISI BATTANÝYESÝ', 'Verilen', '0', '0', 'GÜZELLÝK'),
(58, '00058', 'ULRATON', 'Verilen', '0', '0', 'GÜZELLÝK'),
(59, '00059', 'KAVÝTASYON', 'Verilen', '0', '0', 'GÜZELLÝK'),
(60, '00060', 'MÝKRO PLUS', 'Verilen', '0', '0', 'GÜZELLÝK'),
(61, '00061', 'DÖVME SÝLME', 'Verilen', '0', '0', 'GÜZELLÝK'),
(62, '00062', 'MASAJ', 'Verilen', '0', '0', 'GÜZELLÝK'),
(63, '00063', 'ÝP ASKI', 'Verilen', '0', '0', 'DOKTOR'),
(64, '00064', 'MEZOTERAPÝ', 'Verilen', '0', '0', 'DOKTOR'),
(65, '00065', 'AKILLI DOLGU ', 'Verilen', '0', '0', 'DOKTOR'),
(66, '00066', 'XELEDERM', 'Verilen', '0', '0', 'DOKTOR'),
(89, '00089', 'PROTEZ TIRNAK', 'Verilen', '0', '0', 'GÜZELLÝK'),
(90, '00090', 'ÝÐNELÝ EPÝLASYON', 'Verilen', '0', '0', 'GÜZELLÝK'),
(91, '00091', 'BEN ALIMI', 'Verilen', '0', '0', 'DOKTOR'),
(92, '00092', 'DUDAK DOLGUSU', 'Verilen', '0', '0', 'DOKTOR'),
(93, '00093', 'BOYUN FOCUS', 'Verilen', '0', '0', 'DOKTOR'),
(94, '00094', 'NAZOBÝAL DOLGU', 'Verilen', '0', '0', 'DOKTOR'),
(95, '00095', 'AGUASHÝNE', 'Verilen', '0', '0', 'DOKTOR'),
(96, '00096', 'DERMAPEN', 'Verilen', '0', '0', 'DOKTOR'),
(97, '00097', 'GÖZ ALTI DOLGU', 'Verilen', '0', '0', 'DOKTOR'),
(98, '00098', 'NAZOBÝAL DOLGU ', 'Verilen', '0', '0', 'DOKTOR'),
(99, '00099', 'YÜZ FOCUS', 'Verilen', '0', '0', 'DOKTOR'),
(100, '00100', 'FOCUS', 'Verilen', '0', '0', 'DOKTOR'),
(102, '00102', 'FRAKSÝYONEL LAZER ', 'Verilen', '0', '0', 'DOKTOR'),
(103, '00103', 'FOCUS ULTRASON', 'Verilen', '0', '0', 'DOKTOR'),
(104, '00104', 'SOMON DNA', 'Verilen', '0', '0', 'DOKTOR'),
(105, '00105', 'V LÝNE BOYUN GIDI ERÝTME', 'Verilen', '0', '0', 'DOKTOR'),
(106, '00106', 'LEKE AÇMA ', 'Verilen', '0', '0', 'DOKTOR'),
(107, '00107', 'YARA TEDAVÝSÝ', 'Verilen', '0', '0', 'DOKTOR'),
(108, '00108', 'LÝPOLÝZ', 'Verilen', '0', '0', 'DOKTOR'),
(109, '00109', 'YAÐ BEZESÝ', 'Verilen', '0', '0', 'DOKTOR'),
(110, '00110', 'OZON TEDAVÝSÝ ', 'Verilen', '0', '0', 'DOKTOR'),
(111, '00111', 'BURUN DOLGUSU', 'Verilen', '0', '0', NULL),
(112, '00112', 'TIRNAK BATMASI', 'Verilen', '0', '0', 'DOKTOR'),
(113, '00113', 'HYFU BOYUN', 'Verilen', '0', '0', 'DOKTOR'),
(114, '00114', 'YAKMA', 'Verilen', NULL, NULL, NULL),
(115, '00115', 'NO MORE', 'Verilen', '0', '0', 'DOKTOR'),
(116, '00116', 'GIDI KÜÇÜLTME ', 'Verilen', '0', '0', 'DOKTOR'),
(117, '00117', 'FRAKSYONEL', 'Verilen', NULL, NULL, NULL),
(118, '00118', 'VARÝS TEDAVÝSÝ', 'Verilen', '0', '0', 'DOKTOR'),
(119, '00119', 'VÝTAMÝN ', 'Verilen', '0', '0', 'DOKTOR'),
(120, '00120', 'MANÝKÜR', 'Verilen', '0', '0', NULL),
(121, '00121', 'KOLLEJEN ', 'Verilen', NULL, NULL, NULL),
(122, '00122', 'KIL TEKNIGI', 'Verilen', '0', NULL, 'DOKTOR'),
(123, '00123', 'VITAMIN ENJ', 'Verilen', NULL, NULL, NULL),
(124, '00124', 'ÇATLAK TEDAVÝSÝ', 'Verilen', NULL, NULL, NULL),
(125, '00125', 'ONERILER', 'Verilen', '0', '0', 'GÜZELLÝK '),
(126, '00126', 'PAKET ONERI', 'Verilen', '0', '0', 'GÜZELLÝK'),
(127, '00127', 'OJE ', 'Verilen', '0', '0', 'GÜZELLÝK '),
(128, '00128', 'DOLGU ', 'Verilen', '0', '0', 'DOKTOR ÝÞLEMÝ '),
(129, '00129', 'TOPLAM BORÇ', 'Verilen', '0', '0', NULL),
(130, '00130', 'ME-LÝNE', 'Verilen', '0', '0', NULL),
(131, '00131', 'ME-LÝNE ENJEKSÝYON', 'Verilen', '0', '0', NULL),
(132, '00132', 'GÖZ ALTI MORLUÐU NO MOR', 'Verilen', '0', '0', NULL),
(133, '00133', 'PEDÝKÜR', 'Verilen', '0', '0', NULL),
(134, '00134', 'PARÝS IÞILTISI', 'Verilen', '0', '0', NULL),
(135, '00135', 'TB ÖB TK KA ', 'Verilen', NULL, NULL, 'GÜZELLÝK '),
(136, '00136', 'KLOPATRA', 'Verilen', '0', '0', NULL),
(137, '00137', 'ZAYIFLAMA', 'Verilen', '0', '0', NULL),
(138, '00138', 'REFORMER PLATES ', 'Verilen', '0', '0', NULL),
(139, '00139', 'DERMAPEN 6 SEANS', 'Verilen', NULL, '0', NULL),
(140, '00140', 'ÝPEK KÝRPÝK', 'Verilen', '0', '0', NULL),
(141, '00141', 'ALIN DOLGUSU', 'Verilen', NULL, NULL, ''),
(142, '00142', 'EYELINER', 'Verilen', '0', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ilaclar`
--

CREATE TABLE `ilaclar` (
  `ilacindex` int(3) NOT NULL,
  `ilactanimi` varchar(100) NOT NULL,
  `receteturu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `imeinolari`
--

CREATE TABLE `imeinolari` (
  `imei_index` int(5) NOT NULL,
  `imeino` varchar(50) NOT NULL,
  `stok_index` int(6) NOT NULL,
  `barkodno` varchar(50) DEFAULT NULL,
  `konumu` varchar(50) DEFAULT NULL,
  `islem_index` int(3) DEFAULT NULL,
  `gelisfiyati` varchar(10) DEFAULT NULL,
  `kayittarihi` date DEFAULT NULL,
  `gonderen` varchar(60) DEFAULT NULL,
  `satistarihi` date DEFAULT NULL,
  `satistutari` varchar(10) DEFAULT NULL,
  `satisturu` varchar(50) DEFAULT NULL,
  `satisaciklamasi` varchar(250) DEFAULT NULL,
  `fat_index` int(3) DEFAULT NULL,
  `satir_index` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `irsaliyealti`
--

CREATE TABLE `irsaliyealti` (
  `alttanimindex` int(3) NOT NULL,
  `irsaliyeindex` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `malzemetanimi` varchar(100) NOT NULL,
  `brfiyat` varchar(10) NOT NULL,
  `miktar` varchar(7) NOT NULL,
  `birim` varchar(20) DEFAULT NULL,
  `malzemekodu` varchar(20) DEFAULT NULL,
  `brfiyatint` varchar(10) DEFAULT NULL,
  `miktarint` varchar(10) DEFAULT NULL,
  `barkodu` varchar(100) DEFAULT NULL,
  `islemindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `irsaliyeler`
--

CREATE TABLE `irsaliyeler` (
  `irsaliyeindex` int(3) NOT NULL,
  `irsaliyekodu` varchar(30) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `hesaptanimi` varchar(100) NOT NULL,
  `sevkadresi` varchar(250) DEFAULT NULL,
  `kayittarihi` date DEFAULT NULL,
  `sevktarihi` date DEFAULT NULL,
  `faturano` varchar(20) DEFAULT NULL,
  `kayitsaati` time DEFAULT NULL,
  `turu` varchar(30) DEFAULT NULL,
  `parabirimi` varchar(10) DEFAULT NULL,
  `toplami` varchar(10) DEFAULT NULL,
  `toplamint` varchar(10) DEFAULT '0',
  `iskonto` varchar(10) DEFAULT '0',
  `durumu` varchar(100) DEFAULT NULL,
  `carikodu` varchar(100) DEFAULT NULL,
  `donemindex` int(3) DEFAULT NULL,
  `ambarkodu` varchar(100) DEFAULT NULL,
  `plasiyerkodu` varchar(20) DEFAULT NULL,
  `aciklamalar` text DEFAULT NULL,
  `donem` year(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `isemirleri`
--

CREATE TABLE `isemirleri` (
  `isemriindex` int(5) NOT NULL,
  `isemrikodu` varchar(20) NOT NULL,
  `olusturmatarihi` date NOT NULL,
  `olusturmasaati` time NOT NULL,
  `durumu` varchar(30) DEFAULT NULL,
  `siparisindex` int(3) DEFAULT NULL,
  `siparisno` varchar(50) DEFAULT NULL,
  `hesapindex` int(3) DEFAULT NULL,
  `aciklamalar` varchar(100) DEFAULT NULL,
  `isemrigrubu` varchar(50) DEFAULT NULL,
  `barkodno` varchar(30) DEFAULT NULL,
  `olusturan` varchar(50) DEFAULT NULL,
  `renk` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `isemrigirdileri`
--

CREATE TABLE `isemrigirdileri` (
  `girdiindex` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `isemriindex` int(3) NOT NULL,
  `kg` varchar(10) DEFAULT NULL,
  `en` varchar(10) DEFAULT NULL,
  `boy` varchar(10) DEFAULT NULL,
  `cap` varchar(10) DEFAULT NULL,
  `etkalinligi` varchar(10) DEFAULT NULL,
  `icetkalinligi` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `islemler`
--

CREATE TABLE `islemler` (
  `islem_index` int(3) NOT NULL,
  `otomofis_id` int(2) DEFAULT NULL,
  `otomofis_index` int(3) DEFAULT NULL,
  `tarih` date NOT NULL,
  `saat` time NOT NULL,
  `stokkodu` varchar(80) DEFAULT NULL,
  `musterikodu` varchar(50) DEFAULT NULL,
  `islemturu` varchar(20) NOT NULL,
  `islemmiktari` int(3) DEFAULT NULL,
  `durumu` varchar(20) DEFAULT NULL,
  `islemtutari` varchar(10) DEFAULT NULL,
  `iskonto` varchar(10) DEFAULT NULL,
  `brfiyat` varchar(7) DEFAULT NULL,
  `musteriadi` varchar(80) DEFAULT NULL,
  `tutarint` varchar(10) DEFAULT NULL,
  `bonusint` varchar(10) DEFAULT NULL,
  `imeino` varchar(40) DEFAULT NULL,
  `telno` varchar(30) DEFAULT NULL,
  `postanimi` varchar(50) DEFAULT NULL,
  `islemiyapan` varchar(60) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL,
  `faturasi` varchar(20) DEFAULT NULL,
  `primorani` varchar(10) DEFAULT NULL,
  `bonusorani` varchar(10) DEFAULT NULL,
  `seansno` varchar(30) DEFAULT NULL,
  `termintarihi` date DEFAULT NULL,
  `joule` varchar(50) DEFAULT NULL,
  `aralik` varchar(50) DEFAULT NULL,
  `contor` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `islemturleri`
--

CREATE TABLE `islemturleri` (
  `index` int(6) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `randevu` varchar(100) DEFAULT 'False',
  `aralik` int(1) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `islemturleri`
--

INSERT INTO `islemturleri` (`index`, `tanim`, `unite`, `randevu`, `aralik`, `aciklama`) VALUES
(1, 'ÜRÜN DEÐÝÞÝMÝ', NULL, 'False', NULL, NULL),
(2, 'ARIZA GÝDERÝLDÝ', NULL, 'False', NULL, NULL),
(5, 'TEKNÝK SERVÝSE ALINDI', NULL, 'False', NULL, NULL),
(6, 'BEKLEMEDE', NULL, 'False', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kampanyaicerik`
--

CREATE TABLE `kampanyaicerik` (
  `icerikindex` int(3) NOT NULL,
  `kampanyaindex` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `malzemekodu` varchar(50) NOT NULL,
  `malzemeadi` varchar(100) NOT NULL,
  `miktar` varchar(10) DEFAULT NULL,
  `bedelsizmiktar` varchar(10) DEFAULT NULL,
  `iskontoorani` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kampanyalar`
--

CREATE TABLE `kampanyalar` (
  `kampanyaindex` int(3) NOT NULL,
  `kampanyakodu` varchar(30) NOT NULL,
  `kampanyatanimi` varchar(100) NOT NULL,
  `olusturmatarihi` date NOT NULL,
  `kampanyaturu` varchar(20) DEFAULT NULL,
  `iskontoorani` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `karisimtablosu`
--

CREATE TABLE `karisimtablosu` (
  `index` int(2) NOT NULL,
  `kodu` varchar(100) NOT NULL,
  `tanimi` varchar(100) DEFAULT NULL,
  `formul` varchar(250) DEFAULT NULL,
  `maliyet` varchar(10) DEFAULT '0',
  `bekleme` varchar(10) DEFAULT NULL,
  `fiyat` varchar(10) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `musteri_kodu` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kartlar`
--

CREATE TABLE `kartlar` (
  `index` int(1) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `satis_fiyati` varchar(10) NOT NULL DEFAULT '0',
  `kartsayisi` int(2) DEFAULT 0,
  `gelirtoplami` int(2) DEFAULT 0,
  `kart_turu` varchar(20) DEFAULT NULL,
  `karttanimi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kartlar`
--

INSERT INTO `kartlar` (`index`, `tanim`, `unite`, `satis_fiyati`, `kartsayisi`, `gelirtoplami`, `kart_turu`, `karttanimi`) VALUES
(1, '1', 'LAZER', '350', 0, 0, NULL, 'SIRT'),
(2, '1', 'LAZER', '150', 0, 0, NULL, 'Y.K'),
(3, '1', 'LAZER', '100', 0, 0, NULL, 'BOÐAZ'),
(4, '1', 'KÝRPÝK LÝFTÝNGÝ', '150', 0, 0, 'Giriþ Adetli', 'KÝPRÝK LÝFTÝNGÝ'),
(5, '1', NULL, '100', 0, 0, NULL, 'KÝPRÝK LÝFTÝNG'),
(6, '3', NULL, '2250', 0, 0, NULL, 'HYDAFACIL3'),
(7, '5', 'MUAYENE', '750', 0, 0, NULL, '5 SEANS OZON'),
(8, '1', NULL, '50', 0, 0, 'Giriþ Adetli', 'BOYUN'),
(9, '1', 'LAZER', '30', 0, 0, NULL, 'ÇENE'),
(10, '3', 'MUAYENE', '450', 0, 0, NULL, '3 SEANS OZAN'),
(11, '', 'LAZER', '100', 0, 0, NULL, '1 SEANS DÖVME SÝLME'),
(12, '1', NULL, '700', 0, 0, NULL, 'BOTOX'),
(13, '', 'CÝLT BAKIMI', '200', 0, 0, NULL, '2'),
(14, '', 'BOTOKS', '700', 0, 0, NULL, '12'),
(15, '', 'PEDÝKÜR', '60', 0, 0, NULL, '15'),
(16, '1', 'ALIN DOLGUSU', '1300', 0, 0, NULL, 'ALIN DOLGUSU'),
(17, '2', 'CÝLT BAKIMI', '160', 0, 0, NULL, 'CÝLT BAKIMI');

-- --------------------------------------------------------

--
-- Table structure for table `kasaduzeltmesi`
--

CREATE TABLE `kasaduzeltmesi` (
  `duzeltindex` int(3) NOT NULL,
  `kasa` varchar(50) NOT NULL,
  `tutari` varchar(10) NOT NULL,
  `tutarint` varchar(10) NOT NULL,
  `tarih` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kasaislemleri`
--

CREATE TABLE `kasaislemleri` (
  `kasaislemindex` int(3) NOT NULL,
  `islemkodu` varchar(20) NOT NULL,
  `islemturu` varchar(70) NOT NULL,
  `kasahesapkodu` varchar(30) NOT NULL,
  `kasahesaptanimi` varchar(100) NOT NULL,
  `kasahesapindex` int(3) NOT NULL,
  `ilgilihesapadi` varchar(100) DEFAULT NULL,
  `ilgilihesapkodu` varchar(30) DEFAULT NULL,
  `tutar` varchar(10) NOT NULL,
  `tutarbirimi` varchar(10) NOT NULL,
  `islemtarihi` date DEFAULT NULL,
  `gideryeri` varchar(50) DEFAULT NULL,
  `aciklama` varchar(250) DEFAULT NULL,
  `gelirgrubu` varchar(100) DEFAULT NULL,
  `donem` year(4) DEFAULT NULL,
  `faturaindex` int(3) DEFAULT NULL,
  `dishekimi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kasatanimlari`
--

CREATE TABLE `kasatanimlari` (
  `kasaindex` int(3) NOT NULL,
  `kasakodu` varchar(20) DEFAULT NULL,
  `kasatanimi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kasatanimlari`
--

INSERT INTO `kasatanimlari` (`kasaindex`, `kasakodu`, `kasatanimi`) VALUES
(2, '100.01.00001', 'TL NAKÝT KASA'),
(3, '100.01.00003', 'GÝDER KASA'),
(7, '100.01.00007', 'DEKONT KASA'),
(6, 'BONUS', 'BONUS'),
(8, '100.01.00008', 'KREDÝ KARTI KASA');

-- --------------------------------------------------------

--
-- Table structure for table `kasateslimler`
--

CREATE TABLE `kasateslimler` (
  `teslimindex` int(11) NOT NULL,
  `teslimtarihi` date NOT NULL,
  `otomofis_id` varchar(20) DEFAULT NULL,
  `alinantutar` varchar(10) NOT NULL,
  `aciktutar` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

-- --------------------------------------------------------

--
-- Table structure for table `kayitlisorgular`
--

CREATE TABLE `kayitlisorgular` (
  `index` int(3) NOT NULL,
  `sorgu` text DEFAULT NULL,
  `kodu` varchar(40) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kayitlisorgular`
--

INSERT INTO `kayitlisorgular` (`index`, `sorgu`, `kodu`) VALUES
(1, 'select year(tarih) as yili,cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.caritanimi<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE()) group by carihesaphareketleri.cari_index', 'musteri_satis_tutar'),
(2, 'select year(tarih) as yili,cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.caritanimi<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.cari_index', 'musteri_satis_miktar'),
(20, 'select year(tarih) as yili,carihesaphareketleri.gelirgrubu as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as aralikayi from carihesaphareketleri where carihesaphareketleri.gelirgrubu<>\'\' group by carihesaphareketleri.gelirgrubu', 'brut_satislar'),
(3, 'select year(tarih) as yili, cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then tutarint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.caritanimi<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.cari_index,year(tarih)', 'musteri_satis_tahsilat'),
(4, 'select year(tarih) as yili, cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.OdemeTuru<>\'\' and carihesaphareketleri.alacak>0) then 1 else 0 end )/1 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.caritanimi<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.cari_index,year(tarih)', 'musteri_satis_tahsilat_miktar'),
(5, 'select year(tarih) as yili,cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.borc>0) then tutarint-maliyetint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.caritanimi<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE()) group by carihesaphareketleri.cari_index,year(tarih)', 'musteri_karlilik_tutar'),
(6, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_satis_tutar'),
(7, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu like \'%Sat%\') then islemmiktari else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_satis_miktar'),
(8, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu like \'%Sat%\') then (islemmiktari*netfiyatim/100)-(islemmiktari*brmaliyeti/100) else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_satis_karlilik'),
(9, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari*netfiyatim/100 else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_alim_tutar'),
(10, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu like \'%Alým%\') then islemmiktari else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_alim_miktar'),
(11, 'select year(stokhareketleri.harekettarihi) as yili,malzemetanimi as caritanimi,sum(case when month(stokhareketleri.harekettarihi)=1 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as ocakayi, sum(case when month(stokhareketleri.harekettarihi)=2 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as subatayi, sum(case when month(stokhareketleri.harekettarihi)=3 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as martayi, sum(case when month(stokhareketleri.harekettarihi)=4 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as nisanayi, sum(case when month(stokhareketleri.harekettarihi)=5 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as mayisayi, sum(case when month(stokhareketleri.harekettarihi)=6 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as haziranayi, sum(case when month(stokhareketleri.harekettarihi)=7 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as temmuzayi, sum(case when month(stokhareketleri.harekettarihi)=8 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as agustosayi, sum(case when month(stokhareketleri.harekettarihi)=9 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as eylulayi, sum(case when month(stokhareketleri.harekettarihi)=10 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as ekimayi, sum(case when month(stokhareketleri.harekettarihi)=11 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as kasinayi, sum(case when month(stokhareketleri.harekettarihi)=12 and (stokhareketleri.hareketturu<>\'\') then pozitif-negatif+donembasi else 0 end )/100 as aralikayi from stokhareketleri left join malzemeler on malzemeler.malzemeindex=stokhareketleri.stok_index group by stokhareketleri.stok_index', 'urun_stok_istatistik'),
(12, 'select year(tarih) as yili,islemiyapan as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then 100 else 0 end )/100 as aralikayi from carihesaphareketleri where carihesaphareketleri.islemiyapan<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.islemiyapan', 'plasiyer_satis_miktar'),
(13, 'select year(tarih) as yili,islemiyapan as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then borc else 0 end )/100 as aralikayi from carihesaphareketleri where carihesaphareketleri.islemiyapan<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.islemiyapan', 'plasiyer_satis_tutar'),
(14, 'select year(tarih) as yili,plasiyerkodu as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then 1 else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.carikodu=carihesaphareketleri.cari_index where cariler.plasiyerkodu<>\'\' group by cariler.plasiyerkodu', 'plasiyer_tahsilat_miktar'),
(15, 'select year(tarih) as yili,plasiyerkodu as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu=\'Tahsilat\') then tutarint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.carikodu=carihesaphareketleri.cari_index where cariler.plasiyerkodu<>\'\' group by cariler.plasiyerkodu', 'plasiyer_tahsilat_tutar'),
(16, 'select year(tarih) as yili,islemiyapan as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then (borc-maliyetint) else 0 end )/100 as aralikayi from carihesaphareketleri where carihesaphareketleri.islemiyapan<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.islemiyapan', 'plasiyer_satis_karlilik'),
(17, 'select year(tarih) as yili,islemiyapan as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.hareketturu like \'%Sat%\') then primint else 0 end )/100 as aralikayi from carihesaphareketleri where carihesaphareketleri.islemiyapan<>\'\' and year(carihesaphareketleri.tarih)=YEAR(CURDATE())  group by carihesaphareketleri.islemiyapan', 'plasiyer_satis_prim'),
(18, 'select year(tarih) as yili,hizmettanimlari.hizmettanimi as caritanimi,sum(case when month(islemler.tarih)=1 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as ocakayi, sum(case when month(islemler.tarih)=2 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as subatayi, sum(case when month(islemler.tarih)=3 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as martayi, sum(case when month(islemler.tarih)=4 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as nisanayi, sum(case when month(islemler.tarih)=5 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as mayisayi, sum(case when month(islemler.tarih)=6 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as haziranayi, sum(case when month(islemler.tarih)=7 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as temmuzayi, sum(case when month(islemler.tarih)=8 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as agustosayi, sum(case when month(islemler.tarih)=9 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as eylulayi, sum(case when month(islemler.tarih)=10 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as ekimayi, sum(case when month(islemler.tarih)=11 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as kasinayi, sum(case when month(islemler.tarih)=12 and (islemler.islemturu like \'%Sat%\') then (100) else 0 end )/100 as aralikayi from islemler left join hizmettanimlari on hizmettanimlari.hizmettanimi=aciklama where hizmettanimlari.hizmettanimi<>\'\' and year(islemler.tarih)=YEAR(CURDATE())  group by islemler.aciklama', 'hizmet_satis_miktar'),
(19, 'select year(tarih) as yili,hizmettanimlari.hizmettanimi as caritanimi,sum(case when month(islemler.tarih)=1 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as ocakayi, sum(case when month(islemler.tarih)=2 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as subatayi, sum(case when month(islemler.tarih)=3 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as martayi, sum(case when month(islemler.tarih)=4 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as nisanayi, sum(case when month(islemler.tarih)=5 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as mayisayi, sum(case when month(islemler.tarih)=6 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as haziranayi, sum(case when month(islemler.tarih)=7 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as temmuzayi, sum(case when month(islemler.tarih)=8 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as agustosayi, sum(case when month(islemler.tarih)=9 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as eylulayi, sum(case when month(islemler.tarih)=10 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as ekimayi, sum(case when month(islemler.tarih)=11 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as kasinayi, sum(case when month(islemler.tarih)=12 and (islemler.islemturu like \'%Sat%\') then (tutarint) else 0 end )/100 as aralikayi from islemler left join hizmettanimlari on hizmettanimlari.hizmettanimi=aciklama where hizmettanimlari.hizmettanimi<>\'\' and year(islemler.tarih)=YEAR(CURDATE())  group by islemler.aciklama', 'hizmet_satis_tutar'),
(22, 'select year(faturalar.kayittarihi) as yili,faturalar.hesaptanimi as caritanimi,sum(case when month(faturalar.kayittarihi)=1 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as ocakayi, sum(case when month(faturalar.kayittarihi)=2 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as subatayi, sum(case when month(faturalar.kayittarihi)=3 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as martayi, sum(case when month(faturalar.kayittarihi)=4 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as nisanayi, sum(case when month(faturalar.kayittarihi)=5 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as mayisayi, sum(case when month(faturalar.kayittarihi)=6 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as haziranayi, sum(case when month(faturalar.kayittarihi)=7 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as temmuzayi, sum(case when month(faturalar.kayittarihi)=8 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as agustosayi, sum(case when month(faturalar.kayittarihi)=9 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as eylulayi, sum(case when month(faturalar.kayittarihi)=10 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as ekimayi, sum(case when month(faturalar.kayittarihi)=11 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as kasinayi, sum(case when month(faturalar.kayittarihi)=12 and (faturalar.faturagrubu like \'%Satýþ Faturasý%\') then iskonto else 0 end )/100 as aralikayi from faturalar group by faturalar.hesaptanimi', 'satis_indirimleri'),
(23, 'select year(tarih) as yili,cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Ýade Faturasý%\') then tutarint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.plasiyerkodu<>\'\' group by cariler.cariindex', 'satis_iadeleri'),
(24, 'select year(tarih) as yili,cariler.caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.islem_tanimi like \'%Satýþ Faturasý%\') then maliyetint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where cariler.plasiyerkodu<>\'\' group by cariler.cariindex', 'satilan_mallar_maliyeti');
INSERT INTO `kayitlisorgular` (`index`, `sorgu`, `kodu`) VALUES
(25, 'select year(tarih) as yili,carihesaphareketleri.gidergrubu as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (carihesaphareketleri.HareketTuru like \'%Ödeme%\' or carihesaphareketleri.HareketTuru like \'%Avans%\') then tutarint else 0 end )/100 as aralikayi from carihesaphareketleri left join cariler on cariler.cariindex=carihesaphareketleri.cari_index where carihesaphareketleri.gidergrubu<>\'\' group by carihesaphareketleri.gidergrubu', 'genelyonetimgiderleri'),
(26, 'select year(tarih) as yili,faturalar.vergigrubu as caritanimi,sum(case when month(carihesaphareketleri.tarih)=1 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as ocakayi, sum(case when month(carihesaphareketleri.tarih)=2 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as subatayi, sum(case when month(carihesaphareketleri.tarih)=3 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as martayi, sum(case when month(carihesaphareketleri.tarih)=4 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as nisanayi, sum(case when month(carihesaphareketleri.tarih)=5 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as mayisayi, sum(case when month(carihesaphareketleri.tarih)=6 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as haziranayi, sum(case when month(carihesaphareketleri.tarih)=7 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as temmuzayi, sum(case when month(carihesaphareketleri.tarih)=8 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as agustosayi, sum(case when month(carihesaphareketleri.tarih)=9 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as eylulayi, sum(case when month(carihesaphareketleri.tarih)=10 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as ekimayi, sum(case when month(carihesaphareketleri.tarih)=11 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as kasinayi, sum(case when month(carihesaphareketleri.tarih)=12 and (faturalar.vergigrubu<>\'\') then kdvtoplami else 0 end )/100 as aralikayi from faturalar left join carihesaphareketleri on faturalar.faturaindex=carihesaphareketleri.satisfatura_index where faturalar.vergigrubu<>\'\'  group by faturalar.vergigrubu', 'vergiler');

-- --------------------------------------------------------

--
-- Table structure for table `kaynakdokumanlari`
--

CREATE TABLE `kaynakdokumanlari` (
  `index` int(3) NOT NULL,
  `kaynakindex` int(3) DEFAULT NULL,
  `dosyaturu` varchar(30) NOT NULL,
  `dokumanturu` varchar(70) DEFAULT NULL,
  `dokumanyolu` varchar(250) DEFAULT NULL,
  `kayittarihi` date DEFAULT NULL,
  `olusturan` varchar(50) DEFAULT NULL,
  `dokumankodu` varchar(100) DEFAULT NULL,
  `dokumanaciklamasi` varchar(250) DEFAULT NULL,
  `malzemeindex` int(3) DEFAULT NULL,
  `prosesindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kaynaknotlari`
--

CREATE TABLE `kaynaknotlari` (
  `kaynaknotindex` int(3) NOT NULL,
  `kaynakindex` int(3) NOT NULL,
  `nottarihi` date NOT NULL,
  `not` text DEFAULT NULL,
  `olusturan` varchar(70) DEFAULT NULL,
  `talimatturu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kaynakoperatorleri`
--

CREATE TABLE `kaynakoperatorleri` (
  `operatorindex` int(3) NOT NULL,
  `kaynakindex` int(3) NOT NULL,
  `calisanindex` int(3) NOT NULL,
  `calismayuzdesi` varchar(10) DEFAULT NULL,
  `kidemi` varchar(20) DEFAULT NULL,
  `sorumlulukalanlari` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kaynakprosesyetkinlik`
--

CREATE TABLE `kaynakprosesyetkinlik` (
  `index` int(3) NOT NULL,
  `prosesindex` int(3) NOT NULL,
  `kaynakindex` int(3) NOT NULL,
  `tercihonceligi` varchar(30) DEFAULT NULL,
  `aciklama` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kaynaktanimlari`
--

CREATE TABLE `kaynaktanimlari` (
  `kaynakindex` int(3) NOT NULL,
  `kaynakkodu` varchar(20) NOT NULL,
  `kaynaktanimi` varchar(100) DEFAULT NULL,
  `kaynakturu` varchar(20) NOT NULL,
  `sabitmaliyet` varchar(10) DEFAULT NULL,
  `degiskenmaliyet` varchar(10) DEFAULT NULL,
  `kapasite` int(10) DEFAULT NULL,
  `sabitmaliyetbirim` varchar(10) DEFAULT NULL,
  `degiskenmaliyetbirim` varchar(10) DEFAULT NULL,
  `carpim` varchar(20) DEFAULT NULL,
  `sabitint` varchar(10) DEFAULT NULL,
  `degiskenint` varchar(10) DEFAULT NULL,
  `isistasyonu` varchar(100) DEFAULT NULL,
  `vardiyaindex` int(3) DEFAULT NULL,
  `baslamatarihi` date DEFAULT NULL,
  `bitistarihi` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kimlikbilgileri`
--

CREATE TABLE `kimlikbilgileri` (
  `kimlikindex` int(3) NOT NULL,
  `cari_index` int(3) NOT NULL,
  `tckimlik` varchar(11) DEFAULT NULL,
  `babaadi` varchar(50) DEFAULT NULL,
  `anaadi` varchar(50) DEFAULT NULL,
  `dogumyeri` varchar(50) DEFAULT NULL,
  `dogumtarihi` date DEFAULT NULL,
  `nufusil` varchar(50) DEFAULT NULL,
  `nufusilce` varchar(30) DEFAULT NULL,
  `nufuskutuk` varchar(30) DEFAULT NULL,
  `nufussayfa` varchar(20) DEFAULT NULL,
  `nufuscilt` varchar(10) DEFAULT NULL,
  `nufusuyruk` varchar(10) DEFAULT NULL,
  `verilisyer` varchar(30) DEFAULT NULL,
  `verilistarih` date DEFAULT NULL,
  `verilisneden` varchar(100) DEFAULT NULL,
  `kayitno` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kisayollar`
--

CREATE TABLE `kisayollar` (
  `kisayolindex` int(3) NOT NULL,
  `kisayolno` varchar(10) NOT NULL,
  `kisayolform` varchar(100) NOT NULL,
  `kisayolrapor` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `konumlar`
--

CREATE TABLE `konumlar` (
  `konum_index` int(3) NOT NULL,
  `firma_id` varchar(20) NOT NULL,
  `konumx` varchar(40) DEFAULT NULL,
  `konumy` varchar(40) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `saat` time DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kredikartiislemleri`
--

CREATE TABLE `kredikartiislemleri` (
  `kartislemindex` int(3) NOT NULL,
  `kartislemkodu` varchar(30) NOT NULL,
  `kartislemturu` varchar(30) NOT NULL,
  `postanimi` varchar(100) DEFAULT NULL,
  `ilgilihesapkodu` varchar(30) DEFAULT NULL,
  `ilgilihesaptanimi` varchar(100) DEFAULT NULL,
  `ilgilihesapindex` int(3) DEFAULT NULL,
  `islemtutari` varchar(10) DEFAULT NULL,
  `tutarbirimi` varchar(10) DEFAULT NULL,
  `islemtarihi` date DEFAULT NULL,
  `aciklama` varchar(250) DEFAULT NULL,
  `gidergrubu` varchar(100) DEFAULT NULL,
  `gelirgrubu` varchar(100) DEFAULT NULL,
  `donem` year(4) DEFAULT NULL,
  `kredikartitanimi` varchar(100) DEFAULT NULL,
  `kredikartikodu` varchar(30) DEFAULT NULL,
  `cekimturu` varchar(10) DEFAULT NULL,
  `kesinti` varchar(10) DEFAULT '0',
  `erteleme` int(3) DEFAULT 0,
  `dishekimi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kredikartlari`
--

CREATE TABLE `kredikartlari` (
  `kartindex` int(3) NOT NULL,
  `kartkodu` varchar(40) NOT NULL,
  `karttanimi` varchar(100) NOT NULL,
  `bankasi` varchar(100) DEFAULT NULL,
  `kartsahibi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kredikartlari`
--

INSERT INTO `kredikartlari` (`kartindex`, `kartkodu`, `karttanimi`, `bankasi`, `kartsahibi`) VALUES
(1, '00001', 'KREDÝ KARTI', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kullanicierisim`
--

CREATE TABLE `kullanicierisim` (
  `index` int(3) NOT NULL,
  `user_id` int(3) DEFAULT NULL,
  `form_index` int(3) DEFAULT NULL,
  `gorme` varchar(10) DEFAULT NULL,
  `okuma` varchar(10) DEFAULT NULL,
  `kayitekle` varchar(10) DEFAULT NULL,
  `silme` varchar(10) DEFAULT NULL,
  `kayitDegistirme` varchar(10) DEFAULT NULL,
  `FormRaporAdi` varchar(75) DEFAULT NULL,
  `modul` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kullanicierisim`
--

INSERT INTO `kullanicierisim` (`index`, `user_id`, `form_index`, `gorme`, `okuma`, `kayitekle`, `silme`, `kayitDegistirme`, `FormRaporAdi`, `modul`) VALUES
(1024, 5, 9, 'True', NULL, 'False', 'False', 'False', 'Hizmet Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(1023, 5, 8, 'True', NULL, 'False', 'False', 'False', 'Malzeme Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(1022, 5, 7, 'True', NULL, 'True', 'True', 'True', 'Kampanya Tanýmlarý', 'ALIM-SATIM'),
(1021, 5, 6, 'True', NULL, 'True', 'True', 'True', 'Plasiyer Tanýmlarý', 'ALIM-SATIM'),
(1020, 5, 5, 'True', NULL, 'True', 'True', 'True', 'Hizmet Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(1019, 5, 4, 'True', NULL, 'True', 'True', 'True', 'Malzeme Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(1018, 5, 3, 'True', NULL, 'True', 'True', 'True', 'Verilen Hizmetler', 'ALIM-SATIM'),
(1017, 5, 2, 'True', NULL, 'True', 'True', 'True', 'Alýnan Hizmetler', 'ALIM-SATIM'),
(1016, 5, 1, 'True', NULL, 'True', 'True', 'True', 'Ödeme-Tahsilat Planlarý', 'ALIM-SATIM'),
(3568, 1, 104, 'True', NULL, 'True', 'True', 'True', 'Personel Özet Ýþlem Raporu', 'KASA'),
(3473, 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'KASA'),
(3566, 1, 102, 'True', NULL, 'True', 'True', 'True', 'Toplu Maaþ Daðýtýmý', 'KASA'),
(3209, 12, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3567, 1, 103, 'True', NULL, 'True', 'True', 'True', 'Personel Bakiye Raporu', 'KASA'),
(3561, 1, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3562, 1, 98, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Hareketleri', 'CARÝ HESAP'),
(3563, 1, 99, 'True', NULL, 'True', 'True', 'True', 'Aylýk Raporlama', ''),
(3564, 1, 100, 'True', NULL, 'True', 'True', 'True', 'Personel Maaþ Ýþlemleri', 'RAPORLAR'),
(3565, 1, 101, 'True', NULL, 'True', 'True', 'True', 'Plasiyer-Malzeme Satýþ Raporu', 'RAPORLAR'),
(2963, 10, 12, 'False', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(2962, 10, 11, 'False', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(2961, 10, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(3560, 1, 96, 'True', NULL, 'True', 'True', 'True', 'Araç Tür Tanýmlarý', 'SERVÝS'),
(3559, 1, 95, 'True', NULL, 'True', 'True', 'True', 'Üretim Planý', 'ÜRETÝM'),
(3558, 1, 94, 'True', NULL, 'True', 'True', 'True', 'Ýþ Emirleri', 'ÜRETÝM'),
(3557, 1, 93, 'True', NULL, 'True', 'True', 'True', 'Proses Tanýmlarý', 'ÜRETÝM'),
(3551, 1, 87, 'True', NULL, 'True', 'True', 'True', 'Ünite Tanýmlarý', 'ALIM-SATIM'),
(3552, 1, 88, 'True', NULL, 'True', 'True', 'True', 'Üretim Kaynaklarý', 'ÜRETÝM'),
(3553, 1, 89, 'True', NULL, 'True', 'True', 'True', 'Ortak Tanýmlar', 'ALIM-SATIM'),
(3554, 1, 90, 'True', NULL, 'True', 'True', 'True', 'Vardiya Tanýmlarý', 'ÜRETÝM'),
(3555, 1, 91, 'True', NULL, 'True', 'True', 'True', 'Tüketim-Üretim Çizelgesi', 'ÜRETÝM'),
(3556, 1, 92, 'True', NULL, 'True', 'True', 'True', 'Maliyet-Kar Analiz Dökümü', 'ÜRETÝM'),
(3550, 1, 86, 'True', NULL, 'True', 'True', 'True', 'Randevu/Görüþme Yönetimi', 'SÝSTEM'),
(3549, 1, 85, 'True', NULL, 'True', 'True', 'True', 'Yedek Alýmý', 'YEDEK'),
(3547, 1, 83, 'True', NULL, 'False', 'False', 'False', 'Çoklu E-Posta Gönder', 'SÝSTEM'),
(3548, 1, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(3546, 1, 82, 'True', NULL, 'True', 'True', 'True', 'Mesaj Taslaklarý', 'SÝSTEM'),
(3545, 1, 81, 'True', NULL, 'False', 'True', 'True', 'SMS Ayarlarý', 'SÝSTEM'),
(3544, 1, 80, 'True', NULL, 'False', 'True', 'True', 'E-Posta Ayarlarý', 'SÝSTEM'),
(3543, 1, 79, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Deðiþtir', 'SÝSTEM'),
(3535, 1, 71, 'True', NULL, 'False', 'False', 'False', 'Sevk Raporu', 'RAPORLAR'),
(3536, 1, 72, 'True', NULL, 'False', 'False', 'False', 'Kritik Stok Raporu', 'RAPORLAR'),
(3537, 1, 73, 'True', NULL, 'False', 'False', 'False', 'Tahsilat Raporu', 'RAPORLAR'),
(3538, 1, 74, 'True', NULL, 'False', 'False', 'False', 'Ödeme Raporu', 'RAPORLAR'),
(3539, 1, 75, 'True', NULL, 'False', 'False', 'False', 'Alacak-Borç Vade Sorgulama Raporu', 'RAPORLAR'),
(3540, 1, 76, 'True', NULL, 'False', 'False', 'False', 'Müþteri Ýþlem Raporu', 'RAPORLAR'),
(3541, 1, 77, 'True', NULL, 'False', 'True', 'True', 'Ýþletme Bilgileri', 'SÝSTEM'),
(3542, 1, 78, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Tanýmlarý', 'SÝSTEM'),
(3534, 1, 70, 'True', NULL, 'False', 'False', 'False', 'Fatura Bekleme Raporu', 'RAPORLAR'),
(3530, 1, 66, 'True', NULL, 'False', 'False', 'False', 'Servis Ýþlem Dökümü', 'SERVÝS'),
(3531, 1, 67, 'True', NULL, 'False', 'False', 'False', 'Satýþ Raporu', 'RAPORLAR'),
(3532, 1, 68, 'True', NULL, 'False', 'False', 'False', 'Sipariþ Raporu', 'RAPORLAR'),
(3533, 1, 69, 'True', NULL, 'False', 'False', 'False', 'Bekleyen Sipariþ Raporu', 'RAPORLAR'),
(3529, 1, 65, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlemleri', 'SERVÝS'),
(3528, 1, 64, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlem Tanýmlarý', 'SERVÝS'),
(3525, 1, 61, 'True', NULL, 'True', 'True', 'True', 'Teklif Durum Tanýmlarý', 'TEKLÝF'),
(3526, 1, 62, 'True', NULL, 'True', 'True', 'True', 'Teklifler', 'TEKLÝF'),
(3527, 1, 63, 'True', NULL, 'False', 'False', 'False', 'Teklif Dökümü', 'TEKLÝF'),
(3524, 1, 49, 'True', NULL, 'True', 'True', 'True', 'Cari Dönemler', 'MUHASEBE'),
(3523, 1, 48, 'True', NULL, 'True', 'True', 'True', 'Gelir Grubu Tanýmlarý', 'MUHASEBE'),
(3522, 1, 47, 'True', NULL, 'True', 'True', 'True', 'Gider Yerleri Tanýmlarý', 'MUHASEBE'),
(3521, 1, 46, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Döküm Listesi', 'ÇEK-SENET'),
(3520, 1, 45, 'True', NULL, 'False', 'False', 'False', 'Aylýk Çek-Senet Raporu', 'ÇEK-SENET'),
(3519, 1, 44, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Vade Raporu', 'ÇEK-SENET'),
(3518, 1, 43, 'True', NULL, 'True', 'True', 'True', 'Çek-Senet Tanýmlarý', 'ÇEK-SENET'),
(3517, 1, 42, 'True', NULL, 'False', 'False', 'False', 'Kredi Kartý Ýþlem Dökümü', 'BANKA'),
(3516, 1, 41, 'True', NULL, 'False', 'False', 'False', 'Banka Ýþlem Dökümü', 'BANKA'),
(3515, 1, 40, 'True', NULL, 'True', 'True', 'True', 'Kredi Kartý Ýþlemleri', 'BANKA'),
(3514, 1, 39, 'True', NULL, 'True', 'True', 'True', 'Banka Ýþlemleri', 'BANKA'),
(3513, 1, 38, 'True', NULL, 'True', 'True', 'True', 'Ýþletme Kredi Kartlarý', 'BANKA'),
(3512, 1, 37, 'True', NULL, 'True', 'True', 'True', 'Pos Tanýmlarý', 'BANKA'),
(3511, 1, 36, 'True', NULL, 'True', 'True', 'True', 'Banka Tanýmlarý', 'BANKA'),
(3510, 1, 35, 'True', NULL, 'False', 'False', 'False', 'Cari Bakiye Dökümü', 'CARÝ HESAP'),
(3509, 1, 34, 'True', NULL, 'False', 'False', 'False', 'Cari Hesap Ekstresi', 'CARÝ HESAP'),
(3508, 1, 33, 'True', NULL, 'False', 'False', 'False', 'Cari Liste Dökümü', 'CARÝ HESAP'),
(337, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(3507, 1, 32, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Gruplarý', 'CARÝ HESAP'),
(3506, 1, 31, 'True', NULL, 'True', 'True', 'True', 'Cari Hesaplar', 'CARÝ HESAP'),
(3505, 1, 30, 'True', NULL, 'False', 'False', 'False', 'Stok Durum Dökümleri', 'STOK'),
(338, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(339, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(340, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(341, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(342, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(343, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(344, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(345, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(346, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(347, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(348, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(349, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(350, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(351, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(352, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(353, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(354, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(355, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(356, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(357, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(358, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(359, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(360, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(361, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(362, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(363, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(364, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(365, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(366, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(367, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(368, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(369, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(370, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(371, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(372, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(373, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(374, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(375, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(376, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(377, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(378, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(379, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(380, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(381, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(382, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(383, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(384, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(385, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(386, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(387, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(388, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(389, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(390, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(391, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(392, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(393, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(394, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(395, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(396, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(397, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(398, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(399, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(400, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(401, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(402, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(403, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(404, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(405, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(406, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(407, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(408, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(409, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(410, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(411, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(412, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(413, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(414, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(415, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(416, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(417, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(418, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(419, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(420, 4, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(3219, 13, 10, 'False', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(3504, 1, 29, 'True', NULL, 'False', 'False', 'False', 'Malzeme Dökümü', 'STOK'),
(3503, 1, 28, 'True', NULL, 'True', 'True', 'True', 'Stok Durumlarý', 'STOK'),
(3502, 1, 27, 'True', NULL, 'True', 'True', 'True', 'Satýþ Sipariþleri', 'STOK'),
(3501, 1, 26, 'True', NULL, 'True', 'True', 'True', 'Ambar Tanýmlarý', 'STOK'),
(3500, 1, 25, 'True', NULL, 'True', 'True', 'True', 'Malzeme Barkodlarý', 'STOK'),
(3491, 1, 16, 'True', NULL, 'True', 'True', 'True', 'Satýþ Ýrsaliyeleri', 'FATURA'),
(3492, 1, 17, 'True', NULL, 'False', 'False', 'False', 'Alým Fatura Dökümleri', 'FATURA'),
(3493, 1, 18, 'True', NULL, 'False', 'False', 'False', 'Satýþ Fatura Dökümleri', 'FATURA'),
(3494, 1, 19, 'True', NULL, 'False', 'False', 'False', 'Alým Ýrsaliye Dökümleri', 'FATURA'),
(3495, 1, 20, 'True', NULL, 'False', 'False', 'False', 'Satýþ Ýrsaliye Dökümleri', 'FATURA'),
(3499, 1, 24, 'True', NULL, 'True', 'True', 'True', 'Malzeme Grup Tanýmlarý', 'STOK'),
(515, 3, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(516, 3, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(517, 3, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(1068, 5, 53, 'True', NULL, 'False', 'False', 'False', 'Ýki Tarih Arasý Mizan', 'MUHASEBE'),
(1062, 5, 47, 'True', NULL, 'True', 'True', 'True', 'Gider Yerleri Tanýmlarý', 'MUHASEBE'),
(1061, 5, 46, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Döküm Listesi', 'ÇEK-SENET'),
(1060, 5, 45, 'True', NULL, 'False', 'False', 'False', 'Aylýk Çek-Senet Raporu', 'ÇEK-SENET'),
(1059, 5, 44, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Vade Raporu', 'ÇEK-SENET'),
(526, 3, 21, 'True', NULL, 'True', 'True', 'True', 'Malzemeler', 'STOK'),
(527, 3, 22, 'True', NULL, 'True', 'True', 'True', 'Marka Tanýmlarý', 'STOK'),
(528, 3, 23, 'True', NULL, 'True', 'True', 'True', 'Malzeme Stok Birimleri', 'STOK'),
(529, 3, 24, 'True', NULL, 'True', 'True', 'True', 'Malzeme Grup Tanýmlarý', 'STOK'),
(530, 3, 25, 'True', NULL, 'True', 'True', 'True', 'Malzeme Barkodlarý', 'STOK'),
(531, 3, 26, 'True', NULL, 'True', 'True', 'True', 'Ambar Tanýmlarý', 'STOK'),
(532, 3, 27, 'True', NULL, 'True', 'True', 'True', 'Satýþ Sipariþleri', 'STOK'),
(533, 3, 28, 'True', NULL, 'True', 'True', 'True', 'Stok Durumlarý', 'STOK'),
(534, 3, 29, 'True', NULL, 'False', 'False', 'False', 'Malzeme Dökümü', 'STOK'),
(535, 3, 30, 'True', NULL, 'False', 'False', 'False', 'Stok Durum Dökümleri', 'STOK'),
(536, 3, 31, 'True', NULL, 'True', 'True', 'True', 'Cari Hesaplar', 'CARÝ HESAP'),
(537, 3, 32, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Gruplarý', 'CARÝ HESAP'),
(538, 3, 33, 'True', NULL, 'False', 'False', 'False', 'Cari Liste Dökümü', 'CARÝ HESAP'),
(539, 3, 34, 'True', NULL, 'False', 'False', 'False', 'Cari Hesap Ekstresi', 'CARÝ HESAP'),
(540, 3, 35, 'True', NULL, 'False', 'False', 'False', 'Cari Bakiye Dökümü', 'CARÝ HESAP'),
(1067, 5, 52, 'True', NULL, 'False', 'False', 'False', 'Aylýk Mizan', 'MUHASEBE'),
(1066, 5, 51, 'True', NULL, 'False', 'False', 'False', 'Genel Mizan', 'MUHASEBE'),
(1065, 5, 50, 'True', NULL, 'False', 'False', 'False', 'Hesap/Masraf Merkezi Daðýlýmý', 'MUHASEBE'),
(1064, 5, 49, 'True', NULL, 'True', 'True', 'True', 'Cari Dönem Tanýmlarý', 'MUHASEBE'),
(1063, 5, 48, 'True', NULL, 'True', 'True', 'True', 'Gelir Grubu Tanýmlarý', 'MUHASEBE'),
(1033, 5, 18, 'True', NULL, 'False', 'False', 'False', 'Satýþ Fatura Dökümleri', 'FATURA'),
(1032, 5, 17, 'True', NULL, 'False', 'False', 'False', 'Alým Fatura Dökümleri', 'FATURA'),
(1031, 5, 16, 'True', NULL, 'True', 'True', 'True', 'Satýþ Ýrsaliyeleri', 'FATURA'),
(1025, 5, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(1026, 5, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(1027, 5, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(1028, 5, 13, 'True', NULL, 'True', 'True', 'True', 'Alým Faturalarý', 'ALIM-SATIM'),
(1029, 5, 14, 'True', NULL, 'True', 'True', 'True', 'Satýþ Faturalarý', 'ALIM-SATIM'),
(1030, 5, 15, 'True', NULL, 'True', 'True', 'True', 'Alým Ýrsaliyeleri', 'FATURA'),
(1058, 5, 43, 'True', NULL, 'True', 'True', 'True', 'Çek-Senet Tanýmlarý', 'ÇEK-SENET'),
(1057, 5, 42, 'True', NULL, 'False', 'False', 'False', 'Kredi Kartý Ýþlem Dökümü', 'BANKA'),
(1056, 5, 41, 'True', NULL, 'False', 'False', 'False', 'Banka Ýþlem Dökümü', 'BANKA'),
(1055, 5, 40, 'True', NULL, 'True', 'True', 'True', 'Kredi Kartý Ýþlemleri', 'BANKA'),
(1054, 5, 39, 'True', NULL, 'True', 'True', 'True', 'Banka Ýþlemleri', 'BANKA'),
(1053, 5, 38, 'True', NULL, 'True', 'True', 'True', 'Ýþletme Kredi Kartlarý', 'BANKA'),
(1052, 5, 37, 'True', NULL, 'True', 'True', 'True', 'Pos Tanýmlarý', 'BANKA'),
(566, 3, 61, 'True', NULL, 'True', 'True', 'True', 'Teklif Durum Tanýmlarý', 'TEKLÝF'),
(567, 3, 62, 'True', NULL, 'True', 'True', 'True', 'Teklifler', 'TEKLÝF'),
(568, 3, 63, 'True', NULL, 'False', 'False', 'False', 'Teklif Dökümü', 'TEKLÝF'),
(1048, 5, 33, 'True', NULL, 'False', 'False', 'False', 'Cari Liste Dökümü', 'CARÝ HESAP'),
(1047, 5, 32, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Gruplarý', 'CARÝ HESAP'),
(1041, 5, 26, 'True', NULL, 'True', 'True', 'True', 'Ambar Tanýmlarý', 'STOK'),
(1042, 5, 27, 'True', NULL, 'True', 'True', 'True', 'Satýþ Sipariþleri', 'STOK'),
(1043, 5, 28, 'True', NULL, 'True', 'True', 'True', 'Stok Durumlarý', 'STOK'),
(1044, 5, 29, 'True', NULL, 'False', 'False', 'False', 'Malzeme Dökümü', 'STOK'),
(1045, 5, 30, 'True', NULL, 'False', 'False', 'False', 'Stok Durum Dökümleri', 'STOK'),
(1046, 5, 31, 'True', NULL, 'True', 'True', 'True', 'Cari Hesaplar', 'CARÝ HESAP'),
(1051, 5, 36, 'True', NULL, 'True', 'True', 'True', 'Banka Tanýmlarý', 'BANKA'),
(1050, 5, 35, 'True', NULL, 'False', 'False', 'False', 'Cari Bakiye Dökümü', 'CARÝ HESAP'),
(1049, 5, 34, 'True', NULL, 'False', 'False', 'False', 'Cari Hesap Ekstresi', 'CARÝ HESAP'),
(1040, 5, 25, 'True', NULL, 'True', 'True', 'True', 'Malzeme Barkodlarý', 'STOK'),
(1039, 5, 24, 'True', NULL, 'True', 'True', 'True', 'Malzeme Grup Tanýmlarý', 'STOK'),
(1038, 5, 23, 'True', NULL, 'True', 'True', 'True', 'Malzeme Stok Birimleri', 'STOK'),
(1037, 5, 22, 'True', NULL, 'True', 'True', 'True', 'Marka Tanýmlarý', 'STOK'),
(1036, 5, 21, 'True', NULL, 'True', 'True', 'True', 'Malzemeler', 'STOK'),
(1035, 5, 20, 'True', NULL, 'False', 'False', 'False', 'Satýþ Ýrsaliye Dökümleri', 'FATURA'),
(1034, 5, 19, 'True', NULL, 'False', 'False', 'False', 'Alým Ýrsaliye Dökümleri', 'FATURA'),
(1069, 5, 54, 'True', NULL, 'False', 'False', 'False', 'Devirli Aylýk Mizan', 'MUHASEBE'),
(1070, 5, 55, 'True', NULL, 'False', 'False', 'False', 'Devirli Ýki Tarih Arasý Mizan', 'MUHASEBE'),
(1071, 5, 56, 'True', NULL, 'False', 'False', 'False', 'Aylýk Karþý Hesap Dökümü', 'MUHASEBE'),
(1072, 5, 57, 'True', NULL, 'False', 'False', 'False', 'Karþý Hesap Hareket Dökümü', 'MUHASEBE'),
(1073, 5, 58, 'True', NULL, 'False', 'False', 'False', 'Aylýk Gelir Tablosu', 'MUHASEBE'),
(1074, 5, 59, 'True', NULL, 'False', 'False', 'False', 'Gelir Tablosu', 'MUHASEBE'),
(1075, 5, 60, 'True', NULL, 'False', 'False', 'False', 'Ýki Tarih Arasý Gelir Tablosu', 'MUHASEBE'),
(1076, 5, 61, 'True', NULL, 'True', 'True', 'True', 'Teklif Durum Tanýmlarý', 'TEKLÝF'),
(1077, 5, 62, 'True', NULL, 'True', 'True', 'True', 'Teklifler', 'TEKLÝF'),
(1078, 5, 63, 'True', NULL, 'False', 'False', 'False', 'Teklif Dökümü', 'TEKLÝF'),
(1079, 5, 64, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlem Tanýmlarý', 'SERVÝS'),
(1080, 5, 65, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlemleri', 'SERVÝS'),
(1081, 5, 66, 'True', NULL, 'False', 'False', 'False', 'Servis Ýþlem Dökümü', 'SERVÝS'),
(1082, 5, 67, 'True', NULL, 'False', 'False', 'False', 'Satýþ Raporu', 'RAPORLAR'),
(1083, 5, 68, 'True', NULL, 'False', 'False', 'False', 'Sipariþ Raporu', 'RAPORLAR'),
(1084, 5, 69, 'True', NULL, 'False', 'False', 'False', 'Bekleyen Sipariþ Raporu', 'RAPORLAR'),
(1085, 5, 70, 'True', NULL, 'False', 'False', 'False', 'Fatura Bekleme Raporu', 'RAPORLAR'),
(1086, 5, 71, 'True', NULL, 'False', 'False', 'False', 'Sevk Raporu', 'RAPORLAR'),
(1087, 5, 72, 'True', NULL, 'False', 'False', 'False', 'Kritik Stok Raporu', 'RAPORLAR'),
(1088, 5, 73, 'True', NULL, 'False', 'False', 'False', 'Tahsilat Raporu', 'RAPORLAR'),
(1089, 5, 74, 'True', NULL, 'False', 'False', 'False', 'Ödeme Raporu', 'RAPORLAR'),
(1090, 5, 75, 'True', NULL, 'False', 'False', 'False', 'Alacak-Borç Vade Sorgulama Raporu', 'RAPORLAR'),
(1091, 5, 76, 'True', NULL, 'False', 'False', 'False', 'Müþteri Ýþlem Raporu', 'RAPORLAR'),
(1092, 5, 77, 'True', NULL, 'False', 'True', 'True', 'Ýþletme Bilgileri', 'SÝSTEM'),
(1093, 5, 78, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Tanýmlarý', 'SÝSTEM'),
(1094, 5, 79, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Deðiþtir', 'SÝSTEM'),
(1095, 5, 80, 'True', NULL, 'False', 'True', 'True', 'E-Posta Ayarlarý', 'SÝSTEM'),
(1096, 5, 81, 'True', NULL, 'False', 'True', 'True', 'SMS Ayarlarý', 'SÝSTEM'),
(1097, 5, 82, 'True', NULL, 'True', 'True', 'True', 'Mesaj Taslaklarý', 'SÝSTEM'),
(1098, 5, 83, 'True', NULL, 'False', 'False', 'False', 'Çoklu E-Posta Gönder', 'SÝSTEM'),
(1099, 5, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(1100, 5, 85, 'True', NULL, 'True', 'True', 'True', 'Yedek Alýmý', 'YEDEK'),
(3498, 1, 23, 'True', NULL, 'True', 'True', 'True', 'Malzeme Stok Birimleri', 'STOK'),
(3497, 1, 22, 'True', NULL, 'True', 'True', 'True', 'Marka Tanýmlarý', 'STOK'),
(3496, 1, 21, 'True', NULL, 'True', 'True', 'True', 'Malzemeler', 'STOK'),
(3490, 1, 15, 'True', NULL, 'True', 'True', 'True', 'Alým Ýrsaliyeleri', 'FATURA'),
(3489, 1, 14, 'True', NULL, 'True', 'True', 'True', 'Satýþ Faturalarý', 'ALIM-SATIM'),
(3488, 1, 13, 'True', NULL, 'True', 'True', 'True', 'Alým Faturalarý', 'ALIM-SATIM'),
(3487, 1, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3486, 1, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(1991, 8, 1, 'True', NULL, 'True', 'True', 'True', 'Ödeme-Tahsilat Planlarý', 'ALIM-SATIM'),
(1992, 8, 2, 'True', NULL, 'True', 'True', 'True', 'Alýnan Hizmetler', 'ALIM-SATIM'),
(1993, 8, 3, 'True', NULL, 'True', 'True', 'True', 'Verilen Hizmetler', 'ALIM-SATIM'),
(1994, 8, 4, 'True', NULL, 'True', 'True', 'True', 'Malzeme Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(1995, 8, 5, 'True', NULL, 'True', 'True', 'True', 'Hizmet Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(1996, 8, 6, 'True', NULL, 'True', 'True', 'True', 'Plasiyer Tanýmlarý', 'ALIM-SATIM'),
(1997, 8, 7, 'True', NULL, 'True', 'True', 'True', 'Kampanya Tanýmlarý', 'ALIM-SATIM'),
(1998, 8, 8, 'True', NULL, 'False', 'False', 'False', 'Malzeme Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(1999, 8, 9, 'True', NULL, 'False', 'False', 'False', 'Hizmet Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(2000, 8, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(2001, 8, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(2002, 8, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(2003, 8, 13, 'True', NULL, 'True', 'True', 'True', 'Alým Faturalarý', 'ALIM-SATIM'),
(2004, 8, 14, 'True', NULL, 'True', 'True', 'True', 'Satýþ Faturalarý', 'ALIM-SATIM'),
(2005, 8, 15, 'True', NULL, 'True', 'True', 'True', 'Alým Ýrsaliyeleri', 'FATURA'),
(2006, 8, 16, 'True', NULL, 'True', 'True', 'True', 'Satýþ Ýrsaliyeleri', 'FATURA'),
(2007, 8, 17, 'True', NULL, 'False', 'False', 'False', 'Alým Fatura Dökümleri', 'FATURA'),
(2008, 8, 18, 'True', NULL, 'False', 'False', 'False', 'Satýþ Fatura Dökümleri', 'FATURA'),
(2009, 8, 19, 'True', NULL, 'False', 'False', 'False', 'Alým Ýrsaliye Dökümleri', 'FATURA'),
(2010, 8, 20, 'True', NULL, 'False', 'False', 'False', 'Satýþ Ýrsaliye Dökümleri', 'FATURA'),
(2011, 8, 21, 'True', NULL, 'True', 'True', 'True', 'Malzemeler', 'STOK'),
(2012, 8, 22, 'True', NULL, 'True', 'True', 'True', 'Marka Tanýmlarý', 'STOK'),
(2013, 8, 23, 'True', NULL, 'True', 'True', 'True', 'Malzeme Stok Birimleri', 'STOK'),
(2014, 8, 24, 'True', NULL, 'True', 'True', 'True', 'Malzeme Grup Tanýmlarý', 'STOK'),
(2015, 8, 25, 'True', NULL, 'True', 'True', 'True', 'Malzeme Barkodlarý', 'STOK'),
(2016, 8, 26, 'True', NULL, 'True', 'True', 'True', 'Ambar Tanýmlarý', 'STOK'),
(2017, 8, 27, 'True', NULL, 'True', 'True', 'True', 'Satýþ Sipariþleri', 'STOK'),
(2018, 8, 28, 'True', NULL, 'True', 'True', 'True', 'Stok Durumlarý', 'STOK'),
(2019, 8, 29, 'True', NULL, 'False', 'False', 'False', 'Malzeme Dökümü', 'STOK'),
(2020, 8, 30, 'True', NULL, 'False', 'False', 'False', 'Stok Durum Dökümleri', 'STOK'),
(2021, 8, 31, 'True', NULL, 'True', 'True', 'True', 'Cari Hesaplar', 'CARÝ HESAP'),
(2022, 8, 32, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Gruplarý', 'CARÝ HESAP'),
(2023, 8, 33, 'True', NULL, 'False', 'False', 'False', 'Cari Liste Dökümü', 'CARÝ HESAP'),
(2024, 8, 34, 'True', NULL, 'False', 'False', 'False', 'Cari Hesap Ekstresi', 'CARÝ HESAP'),
(2025, 8, 35, 'True', NULL, 'False', 'False', 'False', 'Cari Bakiye Dökümü', 'CARÝ HESAP'),
(2026, 8, 36, 'True', NULL, 'True', 'True', 'True', 'Banka Tanýmlarý', 'BANKA'),
(2027, 8, 37, 'True', NULL, 'True', 'True', 'True', 'Pos Tanýmlarý', 'BANKA'),
(2028, 8, 38, 'True', NULL, 'True', 'True', 'True', 'Ýþletme Kredi Kartlarý', 'BANKA'),
(2029, 8, 39, 'True', NULL, 'True', 'True', 'True', 'Banka Ýþlemleri', 'BANKA'),
(2030, 8, 40, 'True', NULL, 'True', 'True', 'True', 'Kredi Kartý Ýþlemleri', 'BANKA'),
(2031, 8, 41, 'True', NULL, 'False', 'False', 'False', 'Banka Ýþlem Dökümü', 'BANKA'),
(2032, 8, 42, 'True', NULL, 'False', 'False', 'False', 'Kredi Kartý Ýþlem Dökümü', 'BANKA'),
(2033, 8, 43, 'True', NULL, 'True', 'True', 'True', 'Çek-Senet Tanýmlarý', 'ÇEK-SENET'),
(2034, 8, 44, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Vade Raporu', 'ÇEK-SENET'),
(2035, 8, 45, 'True', NULL, 'False', 'False', 'False', 'Aylýk Çek-Senet Raporu', 'ÇEK-SENET'),
(2036, 8, 46, 'True', NULL, 'False', 'False', 'False', 'Çek-Senet Döküm Listesi', 'ÇEK-SENET'),
(2037, 8, 47, 'True', NULL, 'True', 'True', 'True', 'Gider Yerleri Tanýmlarý', 'MUHASEBE'),
(2038, 8, 48, 'True', NULL, 'True', 'True', 'True', 'Gelir Grubu Tanýmlarý', 'MUHASEBE'),
(2039, 8, 49, 'True', NULL, 'True', 'True', 'True', 'Cari Dönem Tanýmlarý', 'MUHASEBE'),
(2040, 8, 50, 'True', NULL, 'False', 'False', 'False', 'Hesap/Masraf Merkezi Daðýlýmý', 'MUHASEBE'),
(2041, 8, 51, 'True', NULL, 'False', 'False', 'False', 'Genel Mizan', 'MUHASEBE'),
(2042, 8, 52, 'True', NULL, 'False', 'False', 'False', 'Aylýk Mizan', 'MUHASEBE'),
(2043, 8, 53, 'True', NULL, 'False', 'False', 'False', 'Ýki Tarih Arasý Mizan', 'MUHASEBE'),
(2044, 8, 54, 'True', NULL, 'False', 'False', 'False', 'Devirli Aylýk Mizan', 'MUHASEBE'),
(2045, 8, 55, 'True', NULL, 'False', 'False', 'False', 'Devirli Ýki Tarih Arasý Mizan', 'MUHASEBE'),
(2046, 8, 56, 'True', NULL, 'False', 'False', 'False', 'Aylýk Karþý Hesap Dökümü', 'MUHASEBE'),
(2047, 8, 57, 'True', NULL, 'False', 'False', 'False', 'Karþý Hesap Hareket Dökümü', 'MUHASEBE'),
(2048, 8, 58, 'True', NULL, 'False', 'False', 'False', 'Aylýk Gelir Tablosu', 'MUHASEBE'),
(2049, 8, 59, 'True', NULL, 'False', 'False', 'False', 'Gelir Tablosu', 'MUHASEBE'),
(2050, 8, 60, 'True', NULL, 'False', 'False', 'False', 'Ýki Tarih Arasý Gelir Tablosu', 'MUHASEBE'),
(2051, 8, 61, 'True', NULL, 'True', 'True', 'True', 'Teklif Durum Tanýmlarý', 'TEKLÝF'),
(2052, 8, 62, 'True', NULL, 'True', 'True', 'True', 'Teklifler', 'TEKLÝF'),
(2053, 8, 63, 'True', NULL, 'False', 'False', 'False', 'Teklif Dökümü', 'TEKLÝF'),
(2054, 8, 64, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlem Tanýmlarý', 'SERVÝS'),
(2055, 8, 65, 'True', NULL, 'True', 'True', 'True', 'Servis Ýþlemleri', 'SERVÝS'),
(2056, 8, 66, 'True', NULL, 'False', 'False', 'False', 'Servis Ýþlem Dökümü', 'SERVÝS'),
(2057, 8, 67, 'True', NULL, 'False', 'False', 'False', 'Satýþ Raporu', 'RAPORLAR'),
(2058, 8, 68, 'True', NULL, 'False', 'False', 'False', 'Sipariþ Raporu', 'RAPORLAR'),
(2059, 8, 69, 'True', NULL, 'False', 'False', 'False', 'Bekleyen Sipariþ Raporu', 'RAPORLAR'),
(2060, 8, 70, 'True', NULL, 'False', 'False', 'False', 'Fatura Bekleme Raporu', 'RAPORLAR'),
(2061, 8, 71, 'True', NULL, 'False', 'False', 'False', 'Sevk Raporu', 'RAPORLAR'),
(2062, 8, 72, 'True', NULL, 'False', 'False', 'False', 'Kritik Stok Raporu', 'RAPORLAR'),
(2063, 8, 73, 'True', NULL, 'False', 'False', 'False', 'Tahsilat Raporu', 'RAPORLAR'),
(2064, 8, 74, 'True', NULL, 'False', 'False', 'False', 'Ödeme Raporu', 'RAPORLAR'),
(2065, 8, 75, 'True', NULL, 'False', 'False', 'False', 'Alacak-Borç Vade Sorgulama Raporu', 'RAPORLAR'),
(2066, 8, 76, 'True', NULL, 'False', 'False', 'False', 'Müþteri Ýþlem Raporu', 'RAPORLAR'),
(2067, 8, 77, 'True', NULL, 'False', 'True', 'True', 'Ýþletme Bilgileri', 'SÝSTEM'),
(2068, 8, 78, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Tanýmlarý', 'SÝSTEM'),
(2069, 8, 79, 'True', NULL, 'True', 'True', 'True', 'Kullanýcý Deðiþtir', 'SÝSTEM'),
(2070, 8, 80, 'True', NULL, 'False', 'True', 'True', 'E-Posta Ayarlarý', 'SÝSTEM'),
(2071, 8, 81, 'True', NULL, 'False', 'True', 'True', 'SMS Ayarlarý', 'SÝSTEM'),
(2072, 8, 82, 'True', NULL, 'True', 'True', 'True', 'Mesaj Taslaklarý', 'SÝSTEM'),
(2073, 8, 83, 'True', NULL, 'False', 'False', 'False', 'Çoklu E-Posta Gönder', 'SÝSTEM'),
(2074, 8, 84, 'True', NULL, 'False', 'False', 'False', 'Çoklu SMS Gönder', 'SÝSTEM'),
(2075, 8, 85, 'True', NULL, 'True', 'True', 'True', 'Yedek Alýmý', 'YEDEK'),
(2076, 8, 86, 'True', NULL, 'True', 'True', 'True', 'Randevu/Görüþme Yönetimi', 'SÝSTEM'),
(2077, 8, 87, 'True', NULL, 'True', 'True', 'True', 'Ünite Tanýmlarý', 'ALIM-SATIM'),
(2078, 8, 88, 'True', NULL, 'True', 'True', 'True', 'Üretim Kaynaklarý', 'ÜRETÝM'),
(2079, 8, 89, 'True', NULL, 'True', 'True', 'True', 'Ortak Tanýmlar', 'ALIM-SATIM'),
(2080, 8, 90, 'True', NULL, 'True', 'True', 'True', 'Vardiya Tanýmlarý', 'ÜRETÝM'),
(2081, 8, 91, 'True', NULL, 'True', 'True', 'True', 'Tüketim-Üretim Çizelgesi', 'ÜRETÝM'),
(2082, 8, 92, 'True', NULL, 'True', 'True', 'True', 'Maliyet-Kar Analiz Dökümü', 'ÜRETÝM'),
(3485, 1, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(3481, 1, 6, 'True', NULL, 'True', 'True', 'True', 'Plasiyer Tanýmlarý', 'ALIM-SATIM'),
(3482, 1, 7, 'True', NULL, 'True', 'True', 'True', 'Kampanya Tanýmlarý', 'ALIM-SATIM'),
(3483, 1, 8, 'True', NULL, 'False', 'False', 'False', 'Malzeme Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(3484, 1, 9, 'True', NULL, 'False', 'False', 'False', 'Hizmet Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(3049, 11, 12, 'False', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3048, 11, 11, 'False', NULL, 'True', 'False', 'True', 'Kasa Ýþlemleri', 'KASA'),
(2821, 7, 42, 'True', NULL, 'False', 'False', 'False', 'Kredi Kartý Ýþlem Dökümü', 'BANKA'),
(2820, 7, 41, 'True', NULL, 'False', 'False', 'False', 'Banka Ýþlem Dökümü', 'BANKA'),
(2819, 7, 40, 'True', NULL, 'True', 'True', 'True', 'Kredi Kartý Ýþlemleri', 'BANKA'),
(2818, 7, 39, 'True', NULL, 'True', 'True', 'True', 'Banka Ýþlemleri', 'BANKA'),
(2817, 7, 38, 'True', NULL, 'True', 'True', 'True', 'Ýþletme Kredi Kartlarý', 'BANKA'),
(2816, 7, 37, 'True', NULL, 'True', 'True', 'True', 'Pos Tanýmlarý', 'BANKA'),
(2815, 7, 36, 'True', NULL, 'True', 'True', 'True', 'Banka Tanýmlarý', 'BANKA'),
(2814, 7, 35, 'True', NULL, 'False', 'False', 'False', 'Cari Bakiye Dökümü', 'CARÝ HESAP'),
(2813, 7, 34, 'True', NULL, 'False', 'False', 'False', 'Cari Hesap Ekstresi', 'CARÝ HESAP'),
(2812, 7, 33, 'True', NULL, 'False', 'False', 'False', 'Cari Liste Dökümü', 'CARÝ HESAP'),
(2811, 7, 32, 'True', NULL, 'True', 'True', 'True', 'Cari Hesap Gruplarý', 'CARÝ HESAP'),
(2810, 7, 31, 'True', NULL, 'True', 'True', 'True', 'Cari Hesaplar', 'CARÝ HESAP'),
(2809, 7, 30, 'True', NULL, 'False', 'False', 'False', 'Stok Durum Dökümleri', 'STOK'),
(2808, 7, 29, 'True', NULL, 'False', 'False', 'False', 'Malzeme Dökümü', 'STOK'),
(2796, 7, 17, 'True', NULL, 'False', 'False', 'False', 'Alým Fatura Dökümleri', 'FATURA'),
(2797, 7, 18, 'True', NULL, 'False', 'False', 'False', 'Satýþ Fatura Dökümleri', 'FATURA'),
(2798, 7, 19, 'True', NULL, 'False', 'False', 'False', 'Alým Ýrsaliye Dökümleri', 'FATURA'),
(2799, 7, 20, 'True', NULL, 'False', 'False', 'False', 'Satýþ Ýrsaliye Dökümleri', 'FATURA'),
(2800, 7, 21, 'True', NULL, 'True', 'True', 'True', 'Malzemeler', 'STOK'),
(2801, 7, 22, 'True', NULL, 'True', 'True', 'True', 'Marka Tanýmlarý', 'STOK'),
(2802, 7, 23, 'True', NULL, 'True', 'True', 'True', 'Malzeme Stok Birimleri', 'STOK'),
(2803, 7, 24, 'True', NULL, 'True', 'True', 'True', 'Malzeme Grup Tanýmlarý', 'STOK'),
(2804, 7, 25, 'True', NULL, 'True', 'True', 'True', 'Malzeme Barkodlarý', 'STOK'),
(2805, 7, 26, 'True', NULL, 'True', 'True', 'True', 'Ambar Tanýmlarý', 'STOK'),
(2806, 7, 27, 'True', NULL, 'True', 'True', 'True', 'Satýþ Sipariþleri', 'STOK'),
(2807, 7, 28, 'True', NULL, 'True', 'True', 'True', 'Stok Durumlarý', 'STOK'),
(2795, 7, 16, 'True', NULL, 'True', 'True', 'True', 'Satýþ Ýrsaliyeleri', 'FATURA'),
(2794, 7, 15, 'True', NULL, 'True', 'True', 'True', 'Alým Ýrsaliyeleri', 'FATURA'),
(2793, 7, 14, 'True', NULL, 'True', 'True', 'True', 'Satýþ Faturalarý', 'ALIM-SATIM'),
(2792, 7, 13, 'True', NULL, 'True', 'True', 'True', 'Alým Faturalarý', 'ALIM-SATIM'),
(2791, 7, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(2790, 7, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(2789, 7, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(2788, 7, 9, 'True', NULL, 'False', 'False', 'False', 'Hizmet Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(2785, 7, 6, 'True', NULL, 'True', 'True', 'True', 'Plasiyer Tanýmlarý', 'ALIM-SATIM'),
(2786, 7, 7, 'True', NULL, 'True', 'True', 'True', 'Kampanya Tanýmlarý', 'ALIM-SATIM'),
(2787, 7, 8, 'True', NULL, 'False', 'False', 'False', 'Malzeme Alýþ-Satýþ Fiyat Listeleri', 'ALIM-SATIM'),
(3392, 15, 11, 'False', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(3393, 15, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3391, 15, 10, 'False', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(2877, 9, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3047, 11, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(2783, 7, 4, 'True', NULL, 'True', 'True', 'True', 'Malzeme Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(2784, 7, 5, 'True', NULL, 'True', 'True', 'True', 'Hizmet Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(2780, 7, 1, 'True', NULL, 'True', 'True', 'True', 'Ödeme-Tahsilat Planlarý', 'ALIM-SATIM'),
(2781, 7, 2, 'True', NULL, 'True', 'True', 'True', 'Alýnan Hizmetler', 'ALIM-SATIM'),
(2782, 7, 3, 'True', NULL, 'True', 'True', 'True', 'Verilen Hizmetler', 'ALIM-SATIM'),
(3133, 12, 10, 'True', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(3134, 12, 11, 'True', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(3135, 12, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(2876, 9, 11, 'False', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(2875, 9, 10, 'False', NULL, 'True', 'True', 'True', 'Kasa Tanýmlarý', 'KASA'),
(2855, 7, 87, 'True', NULL, 'True', 'True', 'True', 'Ünite Tanýmlarý', 'ALIM-SATIM'),
(2857, 7, 89, 'True', NULL, 'True', 'True', 'True', 'Ortak Tanýmlar', 'ALIM-SATIM'),
(3480, 1, 5, 'True', NULL, 'True', 'True', 'True', 'Hizmet Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(2865, 7, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3305, 14, 10, 'False', NULL, 'False', 'False', 'True', 'Kasa Tanýmlarý', 'KASA'),
(3306, 14, 11, 'False', NULL, 'False', 'False', 'False', 'Kasa Ýþlemleri', 'KASA'),
(3307, 14, 12, 'False', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3569, 1, 105, 'True', NULL, 'True', 'True', 'True', 'Müþteri Listesi', ''),
(2951, 9, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3220, 13, 11, 'False', NULL, 'True', 'True', 'True', 'Kasa Ýþlemleri', 'KASA'),
(3221, 13, 12, 'True', NULL, 'False', 'False', 'False', 'Kasa Ýþlem Dökümü', 'KASA'),
(3037, 10, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3123, 11, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3479, 1, 4, 'True', NULL, 'True', 'True', 'True', 'Malzeme Alýþ-Satýþ Fiyatlarý', 'ALIM-SATIM'),
(3476, 1, 1, 'True', NULL, 'True', 'True', 'True', 'Ödeme-Tahsilat Planlarý', 'ALIM-SATIM'),
(3477, 1, 2, 'True', NULL, 'True', 'True', 'True', 'Alýnan Hizmetler', 'ALIM-SATIM'),
(3478, 1, 3, 'True', NULL, 'True', 'True', 'True', 'Verilen Hizmetler', 'ALIM-SATIM'),
(3295, 13, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3381, 14, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3467, 15, 97, 'True', NULL, 'True', 'True', 'True', 'Otomofis CRM', 'KASA'),
(3570, 7, 84, 'True', NULL, 'True', 'True', 'True', 'Çoklu SMS Gönder', 'SÝSTEM');

-- --------------------------------------------------------

--
-- Table structure for table `kullanicilar`
--

CREATE TABLE `kullanicilar` (
  `user_indeks` int(9) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `adi` varchar(100) DEFAULT NULL,
  `Cari_indeks` int(3) DEFAULT 0,
  `weberisimi` varchar(40) DEFAULT NULL,
  `yetkilituru` varchar(50) DEFAULT NULL,
  `durumu` varchar(30) DEFAULT NULL,
  `kullanicikodu` varchar(30) DEFAULT NULL,
  `CariTanimi` varchar(100) DEFAULT NULL,
  `CariKodu` varchar(45) DEFAULT NULL,
  `menugorunumu` varchar(6) DEFAULT NULL,
  `renk` varchar(20) DEFAULT NULL,
  `planlamagoster` varchar(10) DEFAULT NULL,
  `dishekimi` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kullanicilar`
--

INSERT INTO `kullanicilar` (`user_indeks`, `pass`, `username`, `adi`, `Cari_indeks`, `weberisimi`, `yetkilituru`, `durumu`, `kullanicikodu`, `CariTanimi`, `CariKodu`, `menugorunumu`, `renk`, `planlamagoster`, `dishekimi`) VALUES
(1, '123456', 'Admin', 'Admin', 0, 'True', 'False', 'False', NULL, 'SUBE-1', NULL, 'True', '-16777187', NULL, NULL),
(7, '123', 'BANKO', 'banko', 0, NULL, NULL, NULL, '00007', 'SUBE-1', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kullaniciloglari`
--

CREATE TABLE `kullaniciloglari` (
  `logindex` int(3) NOT NULL,
  `user_id` int(4) NOT NULL,
  `tarih` date NOT NULL,
  `saat` time NOT NULL,
  `formtanimi` varchar(50) DEFAULT NULL,
  `islemturu` varchar(30) DEFAULT NULL,
  `kayitid` int(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kullaniciloglari`
--

INSERT INTO `kullaniciloglari` (`logindex`, `user_id`, `tarih`, `saat`, `formtanimi`, `islemturu`, `kayitid`) VALUES
(1, 1, '2016-04-05', '19:25:53', 'Personel Ýþlemleri', 'Kayýt Silme', 1),
(2, 1, '2016-04-06', '14:19:23', 'Personel Ýþlemleri', 'Kayýt Silme', 2),
(3, 1, '2016-04-06', '14:44:02', 'Personel Ýþlemleri', 'Kayýt Silme', 3),
(4, 1, '2016-04-06', '19:19:11', 'Personel Ýþlemleri', 'Kayýt Silme', 4),
(5, 1, '2016-04-06', '19:19:14', 'Personel Ýþlemleri', 'Kayýt Silme', 5),
(6, 1, '2016-04-06', '19:19:18', 'Personel Ýþlemleri', 'Kayýt Silme', 6),
(7, 1, '2016-04-06', '19:19:21', 'Personel Ýþlemleri', 'Kayýt Silme', 7),
(8, 1, '2016-04-08', '10:44:31', 'Personel Ýþlemleri', 'Kayýt Silme', 8);

-- --------------------------------------------------------

--
-- Table structure for table `maliyethesaplari`
--

CREATE TABLE `maliyethesaplari` (
  `index` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `maliyettanimi` varchar(100) NOT NULL,
  `minimumtutari` varchar(10) DEFAULT '0',
  `payin` varchar(10) DEFAULT '0',
  `maksimumtutari` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `malzemealtgruplari`
--

CREATE TABLE `malzemealtgruplari` (
  `altgrupindex` int(3) NOT NULL,
  `altgruptanimi` varchar(150) NOT NULL,
  `grupindex` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `malzemebarkodlari`
--

CREATE TABLE `malzemebarkodlari` (
  `barkodindex` int(3) NOT NULL,
  `malzeme` varchar(100) NOT NULL,
  `barkodno` varchar(30) NOT NULL,
  `malzemeindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `malzemefiyatlari`
--

CREATE TABLE `malzemefiyatlari` (
  `fiyatindex` int(3) NOT NULL,
  `fiyat` varchar(10) NOT NULL,
  `fiyatbirimi` varchar(10) NOT NULL,
  `fiyatturu` varchar(30) NOT NULL,
  `hizmet` varchar(100) NOT NULL,
  `kdvdahilmi` varchar(10) DEFAULT NULL,
  `satisfiyati` varchar(10) DEFAULT '0',
  `satiskdvdahil` varchar(10) DEFAULT 'False',
  `satisfiyatbirimi` varchar(10) DEFAULT 'TL',
  `devirdedonus` varchar(100) DEFAULT NULL,
  `kalite` varchar(100) DEFAULT NULL,
  `fiyattipi` varchar(30) DEFAULT NULL,
  `malzemeindex` int(3) DEFAULT NULL,
  `cariindex` int(3) DEFAULT NULL,
  `minimumsiparis` varchar(10) DEFAULT NULL,
  `terminsuresi` int(10) DEFAULT NULL,
  `periyot` varchar(10) DEFAULT NULL,
  `ilkdeger` varchar(10) DEFAULT NULL,
  `sondeger` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `malzemefiyatlari`
--

INSERT INTO `malzemefiyatlari` (`fiyatindex`, `fiyat`, `fiyatbirimi`, `fiyatturu`, `hizmet`, `kdvdahilmi`, `satisfiyati`, `satiskdvdahil`, `satisfiyatbirimi`, `devirdedonus`, `kalite`, `fiyattipi`, `malzemeindex`, `cariindex`, `minimumsiparis`, `terminsuresi`, `periyot`, `ilkdeger`, `sondeger`) VALUES
(2, '0', 'TL', 'Alýþ', 'MEDÝKOZ', NULL, '150', 'True', 'TL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '0', 'TL', 'Alýþ', 'LMX UYUÞTURUCU', NULL, '30', 'True', 'TL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, '0', 'TL', 'Alýþ', 'HYDRO PLUS DRY', NULL, '180', 'True', 'TL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `malzemegruplari`
--

CREATE TABLE `malzemegruplari` (
  `malzemegrupindex` int(3) NOT NULL,
  `malzemegrupkodu` varchar(20) NOT NULL,
  `malzemegrubu` varchar(100) NOT NULL,
  `renk` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `malzemegruplari`
--

INSERT INTO `malzemegruplari` (`malzemegrupindex`, `malzemegrupkodu`, `malzemegrubu`, `renk`) VALUES
(1, '00001', 'GÜNEÞ KREMLERÝ', NULL),
(2, '00002', 'KUAFÖR', '128'),
(3, '00003', 'CÝLT BAKIMI', '32768'),
(4, '00004', 'SOÐUTUCU SPREY', '8388608'),
(6, '00006', 'ÜRÜN SATIÞ', '8388736');

-- --------------------------------------------------------

--
-- Table structure for table `malzemeler`
--

CREATE TABLE `malzemeler` (
  `malzemeindex` int(3) NOT NULL,
  `malzemekodu` varchar(30) NOT NULL,
  `malzemetanimi` varchar(100) NOT NULL,
  `markatanimi` varchar(100) DEFAULT NULL,
  `malzemegrubu` varchar(100) DEFAULT NULL,
  `stokbirimi` varchar(20) DEFAULT NULL,
  `primorani` varchar(10) DEFAULT NULL,
  `bonusorani` varchar(10) DEFAULT NULL,
  `malzemefaturatanimi` varchar(100) DEFAULT NULL,
  `minimumstok` varchar(10) DEFAULT NULL,
  `kdvorani` varchar(10) DEFAULT '18',
  `barkodno` varchar(30) DEFAULT NULL,
  `resimkisayol` varchar(100) DEFAULT NULL,
  `resim` blob DEFAULT NULL,
  `agirlikhesabi` varchar(30) DEFAULT NULL,
  `ozgulagirlik` varchar(10) DEFAULT '0',
  `birimkg` varchar(10) DEFAULT '0',
  `uruntipi` varchar(100) DEFAULT NULL,
  `uretimtuketim` varchar(50) DEFAULT NULL,
  `altgrup` varchar(100) DEFAULT NULL,
  `aractipi` text DEFAULT NULL,
  `mensei` varchar(60) DEFAULT NULL,
  `malzemesinifi` varchar(100) DEFAULT NULL,
  `ureticikodu1` varchar(50) DEFAULT NULL,
  `ureticikodu2` varchar(50) DEFAULT NULL,
  `adetkatsayi` int(3) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `malzemeler`
--

INSERT INTO `malzemeler` (`malzemeindex`, `malzemekodu`, `malzemetanimi`, `markatanimi`, `malzemegrubu`, `stokbirimi`, `primorani`, `bonusorani`, `malzemefaturatanimi`, `minimumstok`, `kdvorani`, `barkodno`, `resimkisayol`, `resim`, `agirlikhesabi`, `ozgulagirlik`, `birimkg`, `uruntipi`, `uretimtuketim`, `altgrup`, `aractipi`, `mensei`, `malzemesinifi`, `ureticikodu1`, `ureticikodu2`, `adetkatsayi`) VALUES
(3, '00003', 'MEDÝKOZ', NULL, NULL, 'Adet', '0', '0', 'MEDÝKOZ', '0', '18', NULL, NULL, NULL, NULL, '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(4, '00004', 'LMX UYUÞTURUCU', NULL, NULL, 'Adet', '0', '0', 'LMX UYUÞTURUCU', '0', '18', NULL, NULL, NULL, NULL, '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(5, '00005', 'HYDRO PLUS DRY', NULL, NULL, 'Adet', '0', '0', 'HYDRO PLUS DRY', '0', '18', NULL, NULL, NULL, NULL, '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(6, '00006', 'CÝLT BAKIM ÜRÜNÜ', NULL, 'ÜRÜN SATIÞ', 'Adet', '0', '0', NULL, NULL, '18', NULL, NULL, NULL, NULL, '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(7, '00007', 'ARNÝKA ', NULL, NULL, 'Adet', '0', '0', NULL, NULL, '18', NULL, NULL, NULL, NULL, '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `malzemeresimleri`
--

CREATE TABLE `malzemeresimleri` (
  `resimindex` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `resim` longblob NOT NULL,
  `resimturu` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `malzemesiniflari`
--

CREATE TABLE `malzemesiniflari` (
  `sinifindex` int(3) NOT NULL,
  `siniftanimi` varchar(150) NOT NULL,
  `renk` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `markatanimlari`
--

CREATE TABLE `markatanimlari` (
  `markaindex` int(3) NOT NULL,
  `markakodu` varchar(20) NOT NULL,
  `markatanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `markatanimlari`
--

INSERT INTO `markatanimlari` (`markaindex`, `markakodu`, `markatanimi`) VALUES
(1, '00001', 'ICE CREAM'),
(2, '00002', 'REDÝST'),
(3, '00003', 'RÝTA'),
(4, '00004', 'BABOR'),
(5, '00005', 'OSTWÝNT'),
(6, '00006', 'NOBILITY'),
(7, '00007', 'OSSÝON'),
(8, '00008', 'ARCADE'),
(9, '00009', 'DAVÝNES'),
(10, '00010', 'MEZONE'),
(11, '00011', 'P.Ý.C');

-- --------------------------------------------------------

--
-- Table structure for table `menseitanimlari`
--

CREATE TABLE `menseitanimlari` (
  `menseiindex` int(3) NOT NULL,
  `menseitanimi` varchar(70) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menugruplari`
--

CREATE TABLE `menugruplari` (
  `menindex` int(3) NOT NULL,
  `menutanimi` varchar(100) NOT NULL,
  `sirasi` int(3) DEFAULT NULL,
  `iconadi` varchar(50) DEFAULT NULL,
  `menugrubu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menugruplari`
--

INSERT INTO `menugruplari` (`menindex`, `menutanimi`, `sirasi`, `iconadi`, `menugrubu`) VALUES
(27, 'Ýç Ýletiþim', NULL, 'icon-home', 'HAREKETLER'),
(24, 'Genel Tanýmlar', 3, 'icon-settings', 'TANIMLAR'),
(29, 'Özet Ýstatistikler', NULL, NULL, NULL),
(28, 'Sistem', NULL, 'icon-users', 'HAREKETLER');

-- --------------------------------------------------------

--
-- Table structure for table `mobilboard`
--

CREATE TABLE `mobilboard` (
  `mesaj_index` int(3) NOT NULL,
  `konubasligi` varchar(100) CHARACTER SET latin1 NOT NULL,
  `icerik` text CHARACTER SET latin1 DEFAULT NULL,
  `gonderen` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `alici` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `gonderensil` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `alicisil` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `saat` time DEFAULT NULL,
  `dosyayolu` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `okundu` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `dosyaturu` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `dosyaadi` varchar(250) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

--
-- Dumping data for table `mobilboard`
--

INSERT INTO `mobilboard` (`mesaj_index`, `konubasligi`, `icerik`, `gonderen`, `alici`, `gonderensil`, `alicisil`, `tarih`, `saat`, `dosyayolu`, `okundu`, `dosyaturu`, `dosyaadi`) VALUES
(1, 'Havuza Mesaj', 'öjg', 'BORA', 'yakupandac', '', '', '2015-03-03', '19:53:57', '', '', '', ''),
(2, 'Havuza Mesaj', '\r\n', 'BORA', 'yakupandac', '', '', '2015-03-03', '19:53:58', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `modeller`
--

CREATE TABLE `modeller` (
  `index` int(3) NOT NULL,
  `ureticitanimi` varchar(50) DEFAULT NULL,
  `model` varchar(150) DEFAULT NULL,
  `modeltipi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `modeltipleri`
--

CREATE TABLE `modeltipleri` (
  `index` int(3) NOT NULL,
  `model_index` int(3) NOT NULL,
  `modeltipi` varchar(150) NOT NULL,
  `motor` varchar(150) DEFAULT NULL,
  `kw` varchar(20) DEFAULT NULL,
  `bg` varchar(20) DEFAULT NULL,
  `uretimyili` varchar(50) DEFAULT NULL,
  `modeladi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `modelurunbaglama`
--

CREATE TABLE `modelurunbaglama` (
  `index` int(3) NOT NULL,
  `seri` varchar(60) DEFAULT NULL,
  `malzemeindex` int(3) NOT NULL,
  `marka` varchar(60) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `ikyil` year(4) DEFAULT NULL,
  `sonyil` year(4) DEFAULT NULL,
  `aractipi` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mustahsilkisileri`
--

CREATE TABLE `mustahsilkisileri` (
  `index` int(3) NOT NULL,
  `adisoyadi` varchar(100) NOT NULL,
  `tckimlikno` varchar(20) NOT NULL,
  `anaadi` varchar(100) DEFAULT NULL,
  `babaadi` varchar(100) DEFAULT NULL,
  `ili` varchar(50) DEFAULT NULL,
  `ilcesi` varchar(50) DEFAULT NULL,
  `dogumyeri` varchar(100) DEFAULT NULL,
  `dogumyili` date DEFAULT NULL,
  `adresi` varchar(250) DEFAULT NULL,
  `stopaj` varchar(10) DEFAULT '0',
  `bagkur` varchar(10) DEFAULT '0',
  `borsa` varchar(10) DEFAULT '0',
  `mera` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mustahsiller`
--

CREATE TABLE `mustahsiller` (
  `index` int(3) NOT NULL,
  `adisoyadi` varchar(100) NOT NULL,
  `tckimlikno` varchar(20) NOT NULL,
  `anaadi` varchar(100) DEFAULT NULL,
  `babaadi` varchar(100) DEFAULT NULL,
  `ili` varchar(50) DEFAULT NULL,
  `ilcesi` varchar(50) DEFAULT NULL,
  `dogumyeri` varchar(100) DEFAULT NULL,
  `dogumyili` date DEFAULT NULL,
  `adresi` varchar(250) DEFAULT NULL,
  `stopaj` varchar(10) DEFAULT '0',
  `bagkur` varchar(10) DEFAULT '0',
  `borsa` varchar(10) DEFAULT '0',
  `mera` varchar(10) DEFAULT '0',
  `belgeno` varchar(30) NOT NULL,
  `cinsi` varchar(100) DEFAULT NULL,
  `miktar` varchar(10) DEFAULT NULL,
  `brfiyat` varchar(10) DEFAULT NULL,
  `tutari` varchar(10) DEFAULT NULL,
  `belgetarihi` date DEFAULT NULL,
  `miktarint` varchar(10) DEFAULT '0',
  `brfiyatint` varchar(10) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `musterikonumlari`
--

CREATE TABLE `musterikonumlari` (
  `konum_index` int(3) NOT NULL,
  `firma_id` varchar(10) NOT NULL,
  `musterikodu` varchar(50) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `saat` time DEFAULT NULL,
  `konumx` varchar(20) DEFAULT NULL,
  `konumy` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `musterinotlari`
--

CREATE TABLE `musterinotlari` (
  `index` int(3) NOT NULL,
  `not` text NOT NULL,
  `tarih` date NOT NULL,
  `cariindex` int(3) NOT NULL,
  `uyarbeni` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `musterinotlari`
--

INSERT INTO `musterinotlari` (`index`, `not`, `tarih`, `cariindex`, `uyarbeni`) VALUES
(1, 'TC:17056193068', '2021-04-26', 3362, NULL),
(2, '2. PAKET 750TL FÝYAT VERÝLDÝ', '2021-05-12', 2340, NULL),
(3, 'YÜZ LAZER SEANS 50 TL', '2021-05-17', 3125, NULL),
(4, 'YAPILAN ÝÞLEMLERÝN TOPLAM TUTARI 8000 TL DÝR \r\n\r\n', '2021-05-25', 3691, NULL),
(5, 'BOTOXS 850 - 3 SEANS GENÇLÝK AÞISI 2500 - ÝP ASKI 3 ER 4500 - ÖRÜMCEK AÐI 2000 TEKLÝ FÝYAT', '2021-05-25', 3691, NULL),
(6, 'PAKET BÝTTÝ DOSYASI YOK', '2021-06-02', 105, NULL),
(7, 'DÝDAR EÞÝNÝN DOSYASINA KAYITLI', '2021-06-08', 104, NULL),
(8, 'DENEME YAPILDI 400TL NKIT ALINDI PLATES', '2021-06-09', 4683, NULL),
(9, 'PLATES DENEME YAPILDI 400TL NKIT ALINDI', '2021-06-09', 4684, NULL),
(10, 'DÝYETÝSYEN ÖDEMESÝ 200 TL NAKÝT ALINDI', '2021-06-19', 512, NULL),
(11, 'DRUN BÝLGÝSÝ VAR SEANS OLARAK GÖRÜLECEK', '2021-06-21', 4750, NULL),
(12, 'CÝLT BAKIM HEDÝYE ', '2021-06-22', 4760, NULL),
(13, '14.06.21 TARÝHÝNDE ÖDEME VE KAYIT GÖRÜNMÜYOR HOCANIN BÝLGÝSÝ DAHÝLÝNDE BTX KONTROL YPAILDI', '2021-06-22', 2029, NULL),
(14, '14.06.21 TARÝHÝNDE ÖDEME VE KAYIT GÖRÜNMÜYOR HOCANIN BÝLGÝSÝ DAHÝLÝNDE BTX KONTROL YPAILDI', '2021-06-22', 339, NULL),
(15, 'SON 2 SEANS TK.TB.KA.ÖB', '2021-06-30', 90, NULL),
(16, 'TK 6 SEANS KALDI', '2021-06-30', 90, NULL),
(17, 'TB 3 SEANS KALDI', '2021-06-30', 90, NULL),
(18, 'KA 3 SEANS KALDI', '2021-06-30', 90, NULL),
(19, '4 SEANS ÖB KALDI', '2021-06-30', 90, NULL),
(20, '2 SEANS CÝLT BAKIMÖI VAR', '2021-07-03', 289, NULL),
(21, 'KOL BACAK GÖBEK ALACAKLI', '2021-07-14', 3625, NULL),
(22, '  5 S3EANHS OLARAK ALDI AMJA 90 90 ÖDÝCEK', '2021-07-24', 4809, NULL),
(23, 'TB TK KA ÖB 12 SEANS 3000 TL GÖNÜL HANIM', '2021-07-27', 4884, NULL),
(24, 'BASEN 103-100 SOL BACAK SAÐ BCAK5855', '2021-07-30', 501, NULL),
(25, 'HER GELDÝÐÝNDE 100 TL', '2021-09-04', 4968, NULL),
(26, '1 SEANS GÖBEK 1 SEANS ÖB VAR', '2021-09-25', 2222, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `odemeterimleri`
--

CREATE TABLE `odemeterimleri` (
  `OdemeTerim_index` int(2) NOT NULL,
  `OdemeTerimKodu` varchar(40) NOT NULL,
  `VadeGunu` int(3) NOT NULL,
  `TaksitAdedi` int(3) NOT NULL,
  `OdemeTerimTanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `odemeterimleri`
--

INSERT INTO `odemeterimleri` (`OdemeTerim_index`, `OdemeTerimKodu`, `VadeGunu`, `TaksitAdedi`, `OdemeTerimTanimi`) VALUES
(1, 'NET 45', 45, 1, 'NET 45 GÜN VADE'),
(2, 'NET 60', 60, 1, 'NET60 GÜN VADE'),
(3, 'NET 70', 70, 1, '70 GÜN VADE'),
(4, 'VADESÝZ', 0, 1, 'NET 0'),
(5, 'NET 30', 30, 1, 'NET 30 GÜN VADE'),
(6, '00006', 6, 1, '6 GÜN');

-- --------------------------------------------------------

--
-- Table structure for table `odemevadeleri`
--

CREATE TABLE `odemevadeleri` (
  `index` int(3) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `faturaindex` int(3) NOT NULL,
  `vadetarihi` date NOT NULL,
  `odememiktari` varchar(10) NOT NULL,
  `durumu` varchar(30) DEFAULT NULL,
  `aciklamasi` varchar(100) DEFAULT NULL,
  `kapatilantutar` varchar(10) DEFAULT '0',
  `anapara` varchar(10) DEFAULT '0',
  `valor` varchar(10) DEFAULT '0',
  `borc` varchar(10) NOT NULL DEFAULT '0',
  `alacak` varchar(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ogrenciler`
--

CREATE TABLE `ogrenciler` (
  `index_ogrenciler` int(6) NOT NULL,
  `ogrencikodu` varchar(45) DEFAULT NULL,
  `ogrenciadisoyadi` varchar(45) NOT NULL,
  `durumu` varchar(45) NOT NULL,
  `kayittarihi` date DEFAULT NULL,
  `okulu` varchar(45) DEFAULT NULL,
  `sinavgrubu` varchar(45) DEFAULT NULL,
  `telefon` varchar(45) DEFAULT NULL,
  `kayitsaati` time DEFAULT NULL,
  `eposta` varchar(100) DEFAULT NULL,
  `soyadi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ogretmenler`
--

CREATE TABLE `ogretmenler` (
  `index_ogretmenler` int(6) NOT NULL,
  `ogretmenkodu` varchar(45) NOT NULL,
  `adisoyadi` varchar(45) NOT NULL,
  `calistigkurum` varchar(45) NOT NULL,
  `bransi` varchar(45) NOT NULL,
  `durumu` varchar(20) NOT NULL,
  `gorunur` varchar(45) NOT NULL,
  `musait1pztbaslama` varchar(45) DEFAULT NULL,
  `pztmusait1bit` varchar(45) DEFAULT NULL,
  `pztmusait2baslama` varchar(45) DEFAULT NULL,
  `pztmusait2bit` varchar(45) DEFAULT NULL,
  `salimusait1baslama` varchar(45) DEFAULT NULL,
  `salmusait1bitis` varchar(45) DEFAULT NULL,
  `salmusait2baslama` varchar(45) DEFAULT NULL,
  `salmusait2bit` varchar(45) DEFAULT NULL,
  `carmusait1baslama` varchar(45) DEFAULT NULL,
  `carmusait1bitis` varchar(45) DEFAULT NULL,
  `carmusait2baslama` varchar(45) DEFAULT NULL,
  `carmusait2bit` varchar(45) DEFAULT NULL,
  `permusait1baslama` varchar(45) DEFAULT NULL,
  `permusait1bit` varchar(45) DEFAULT NULL,
  `permusait2baslama` varchar(45) DEFAULT NULL,
  `permusait2bit` varchar(45) DEFAULT NULL,
  `cummusait1baslama` time DEFAULT NULL,
  `cummusait1bitis` time DEFAULT NULL,
  `cummusait2baslama` varchar(45) DEFAULT NULL,
  `cummusait2bitis` time DEFAULT NULL,
  `ctsmusait1baslama` time DEFAULT NULL,
  `ctsmusait1bitis` time DEFAULT NULL,
  `ctsmusait2baslama` time DEFAULT NULL,
  `ctsmusait2bitis` varchar(45) DEFAULT NULL,
  `pazmusait1b` varchar(45) DEFAULT NULL,
  `pazmusait1bit` varchar(45) DEFAULT NULL,
  `pazmusait2baslama` varchar(45) DEFAULT NULL,
  `pazmusait2bitis` varchar(45) DEFAULT NULL,
  `ceptelefonu` varchar(45) DEFAULT NULL,
  `eposta` varchar(250) DEFAULT NULL,
  `sifre` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `operasyongunleri`
--

CREATE TABLE `operasyongunleri` (
  `gunindex` int(3) NOT NULL,
  `tarih` date NOT NULL,
  `baslama` time NOT NULL,
  `bitis` time NOT NULL,
  `operasyonindex` int(3) DEFAULT NULL,
  `vardiyaindex` int(3) DEFAULT NULL,
  `sanal` int(3) DEFAULT 0,
  `kaynakindeks` int(3) DEFAULT NULL,
  `partino` varchar(10) DEFAULT NULL,
  `prosesindeks` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `operasyonlar`
--

CREATE TABLE `operasyonlar` (
  `operasyonindex` int(5) NOT NULL,
  `prosesindex` int(5) NOT NULL,
  `isemriindex` int(5) NOT NULL,
  `planlananbaslama` datetime DEFAULT NULL,
  `planlananbitis` datetime DEFAULT NULL,
  `gercekbaslama` datetime DEFAULT NULL,
  `gercekbitis` datetime DEFAULT NULL,
  `kaynakindex` int(5) DEFAULT NULL,
  `istasyonindex` int(5) DEFAULT NULL,
  `sure` int(5) DEFAULT NULL,
  `sureperiyot` varchar(20) DEFAULT NULL,
  `sira` int(3) DEFAULT NULL,
  `vardiya1index` int(3) DEFAULT NULL,
  `vardiya2index` int(3) DEFAULT NULL,
  `vardiya3index` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ortaktanimlar`
--

CREATE TABLE `ortaktanimlar` (
  `index` int(3) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `tanimturu` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ortaktanimlar`
--

INSERT INTO `ortaktanimlar` (`index`, `tanim`, `tanimturu`) VALUES
(1, 'HAMMADDE', 'Malzeme Tipi'),
(2, 'MAMUL', 'Malzeme Tipi'),
(3, 'YARIMAMUL', 'Malzeme Tipi'),
(4, 'ÝÞGÜCÜ', 'Kaynak Tipi'),
(5, 'MAKÝNE/EKÝPMAN', 'Kaynak Tipi'),
(6, 'DIÞ KAYNAK', 'Kaynak Tipi'),
(7, 'ÝÞ ÝSTASYONU-1', 'Ýþ Ýstasyonu'),
(8, 'FABRÝKA 1', 'Ýþ Emri Grubu'),
(9, 'YÜKSEK', 'Tercih Önceliði'),
(10, 'DÜÞÜK', 'Tercih Önceliði'),
(11, 'ORTA', 'Tercih Önceliði'),
(12, 'Ekip Lideri', 'Kýdem'),
(13, 'Yardýmcý Personel', 'Kýdem'),
(14, 'Destek Personeli', 'Kýdem'),
(15, 'Kullaným Talimatý', 'Talimat Türü'),
(16, 'Ýþgüvenliði Talimatý', 'Talimat Türü'),
(17, 'Bitmiþ Ürün Standardý', 'Döküman Türü');

-- --------------------------------------------------------

--
-- Table structure for table `paketgirisleri`
--

CREATE TABLE `paketgirisleri` (
  `index` int(11) NOT NULL,
  `islindex` int(11) NOT NULL,
  `paketkod` varchar(100) NOT NULL,
  `uygulama_adi` varchar(100) NOT NULL,
  `giris_sayisi` int(11) DEFAULT NULL,
  `musteri` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paketgirisleri`
--

INSERT INTO `paketgirisleri` (`index`, `islindex`, `paketkod`, `uygulama_adi`, `giris_sayisi`, `musteri`) VALUES
(1, 4415, '6 SEAS DÖVME SÝLME', 'DÖVME SÝLME', 5, 3464),
(2, 4417, '3 SEANS ALTIN ÝÐNE', 'ALTIN ÝÐNE', 0, 3465),
(3, 4419, 'BOTOX DOLGU', 'DOLGU ', 1, 3401),
(4, 4419, 'BOTOX DOLGU', 'DOLGU ', 1, 3401),
(5, 4420, 'PRP+VÝTAMÝN', 'PRP', 1, 3401),
(6, 4420, 'PRP+VÝTAMÝN', 'VÝTAMÝN ', 1, 3401),
(7, 4434, '4', 'DERMAPEN', 3, 3472),
(8, 4455, '25', 'FORMA', 4, 215),
(10, 4469, '27', 'MASAJ', 3, 3540),
(11, 4472, '10', 'KALICI OJE', 2, 3452),
(12, 4494, '12', 'MEDÝKAL AYAK', 2, 3681),
(13, 4501, '15', 'G5', 0, 3684),
(14, 4514, '16', 'PARÝS IÞILTISI', 0, 3685),
(23, 4563, '20', 'BOTOKS', 0, 3465),
(22, 4528, 'PRP+VÝTAMÝN', 'VÝTAMÝN ', 1, 3687),
(21, 4528, 'PRP+VÝTAMÝN', 'PRP', 2, 3687),
(24, 4563, '20', 'DERMAPEN', 0, 3465),
(25, 4563, '20', 'DOLGU ', 0, 3465),
(26, 4563, '20', 'KLOPATRA', 0, 3465),
(27, 4582, '21', 'KAÞ', 3, 3419),
(28, 4647, '12 SEANS ÖB TK KA TB ', 'LAZER', NULL, 4557);

-- --------------------------------------------------------

--
-- Table structure for table `paketler`
--

CREATE TABLE `paketler` (
  `index` int(11) NOT NULL,
  `paketkod` varchar(100) NOT NULL,
  `paket_tanimi` varchar(150) NOT NULL,
  `paket_fiyati` varchar(10) DEFAULT NULL,
  `sayi` varchar(5) DEFAULT NULL,
  `aciklama` varchar(250) DEFAULT NULL,
  `uygulamaciyuzdesi` varchar(10) DEFAULT NULL,
  `satisciyuzdesi` varchar(10) DEFAULT NULL,
  `sozlesmeturu` varchar(40) DEFAULT NULL,
  `taksitlisatisfiyati` varchar(10) DEFAULT NULL,
  `gelirgrubu` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paketler`
--

INSERT INTO `paketler` (`index`, `paketkod`, `paket_tanimi`, `paket_fiyati`, `sayi`, `aciklama`, `uygulamaciyuzdesi`, `satisciyuzdesi`, `sozlesmeturu`, `taksitlisatisfiyati`, `gelirgrubu`) VALUES
(2, '00002', '12 tüm bacak kol altý özel bölge', '2500', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK'),
(3, '00003', '6 SEANS LGP 6 SEANS G5', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(4, '00004', '12 seans t.bacak t.kol k.altý ö.bölge', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(5, '00005', '5 SEANS MASAJ', '400', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(6, '00006', '12 seans yüz boyun k.altý y.bacak t.kol', '1250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(7, '00007', '3 SEANS XELEDERM', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(8, '00008', '12 seans k.altý ö.bölge y.kol y.bacak', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(9, '00009', '5 seans cilt bakýmý', '400', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(10, '00010', '12 seans bel göbek G.ucu', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(11, '00011', '3 PRP 3 MEZOTERAPÝ', '1900', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(12, '00012', '5 seans masaj ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, '00013', '2 seans eleetri 2 seans global eyecan pelling 2 seans global eye dermaroler', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(14, '00014', '10 Seans cilt bakýmý', '800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(15, '00015', '6 seans G5 6 seans ULTRATON', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(16, '00016', '4 Seans mezoterapi', '0', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(17, '00017', '6 seans K.A ', '240', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(18, '00018', '6 seans Býyýk 6 seans Göz altý 6 seans Ö.B', '250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(19, '00019', '12 SEANS T.B Ö.B K.A', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(20, '00020', '12 SEANS YÜZ', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(21, '00021', '10 Seans masaj', '800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(22, '00022', '6 SEANS T.B T.K K.A Ö.B', '1300', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(23, '00023', '12 Seans K.A ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(24, '00024', '12 Seans T.B Ö.B K.A Yüz', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(25, '00025', '6 SEANS LEKE TEDAVÝSÝ', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(26, '00026', 'Dermapen Auafacial Kimyasal peeling', '250', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(27, '00027', '12 Seans T.B T.K K.A', '1800', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(28, '00028', '12 Seans Sýrt K.A Omuz', '1800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(29, '00029', '6 Seans karbol peeling 6 Seans hydrafail', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(30, '00030', '12 SEANS Ö.B TB', '700', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(31, '00031', '3 MEZOTERAPÝ 2 PEELÝNG', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(32, '00032', '3 PRP 3 FORMA 3 HYDRAFACÝAL', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(33, '00033', '6 SEANS T.B K.A Ö.B', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(34, '00034', '12 Seans Y.B K.A Ö.B', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(35, '00035', '5 SEANS K.A', '225', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(36, '00036', '1 SEANS IÞIK DOLGUSU 1 SEANS BOTOKS', '2150', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(37, '00037', '1 SEANS DUDAK ONARIM DOLGUSU 1 SEANS ÖRÜMCEK AÐI', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(38, '00038', '6 SEANS K.A Y.B Ö.B', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(39, '00039', '6 seans k.a ö.b t.k t.b bel popo göbek ', '2550', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(40, '00040', '6 seans t.k t.b ö.b k.a býyýk göbek çizgisi', '750', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK'),
(41, '00041', '3 SEANS ALTIN ÝÐNE', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(42, '00042', '3 GRÝNPEEL 3 MEZOTERAPÝ 3 CÝLT BAKIMI', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(43, '00043', '12 SEANS T.B T.K Ö.B K.A', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(44, '00044', '12 SEANS SIRT K.A OMUZ ', '1800', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(45, '00045', '3 SEANS XELEDARM', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(46, '00046', '2 seans frosiyonel 2 seans altýn iðne 2 seans greenpeel', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(47, '00047', '6 Seans K.A T.B T.K Ö.B', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(48, '00048', '6 SEANS KARIN Ö.B ÜST BACAK T.K ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(49, '00049', '5 SEANS M.AYAK ', '330', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(50, '00050', '3 SEANS KARBON PEELÝNG 3 SEANS MEZOTERAPÝ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(51, '00051', '12 SEANS K.A T.B', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(52, '00052', '6 SEANS Y.K ', '400', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(53, '00053', '12 SEANS Y.B K.A YÜZ', '800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(54, '00054', '10 SEANS YÜZ', '400', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(55, '00055', '12 SEANS T.B T.K K.A BEL ORTASI SIRT ORTASI GÖÐÜS UCU', '825', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(56, '00056', '12 seans T.K K.A T.B Ö.B BIYIK KAÞ ORTASI', '625', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(57, '00057', '2 SEANS K.A', '100', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(58, '00058', '12 SEANS Y.K', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(59, '00059', '12 SEANS T.B K.A BIYIK ', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(60, '00060', '12 SEANS T.B T.K K.A Ö.B GÖBEK ÇÝZGÝSÝ ', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(61, '00061', '12 SEANS T.B T.K K.A Ö.B', '2250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(62, '00062', '10 SEANS YÜZ ALIN KULAK ORTASI', '700', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(63, '00063', '3 PRP 3 VÝTAMÝN 3 HDRAFACÝAL', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(64, '00064', '12 SEANS T.B Ö.B ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(65, '00065', '12 SEANS TB.YK.ÖB.KA BIYIK', '2250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(66, '00066', '12 SEANS KA.TK.ENSE KULAK SIRT GÖÐÜS', '5000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(67, '00067', '2 seans KA 3 seans TB 3 seans TK 1 seans ÖB', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(68, '00068', '5 SEANS K.MANÝKÜR', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(69, '00069', '5 SEANS K. PEDÝKÜR', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(70, '00070', '5 SEANS HYDRAFACÝAL ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(71, '00071', '3 SEANS GENÇLÝK AÞISI', '0', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(72, '00072', 'KA. GÖBEK BEL ORTASI SIRT YARISI', '2300', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(73, '00073', '6 SEANS ENSE OMUZ Y.K', ' 1400', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(74, '00074', '12 SEANS TB.TK.KA.ÖB.POPO', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(75, '00075', '12 SEANS TB.TK.KA.ÖB.GÖBEK.BEL', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(76, '00076', '6 SEANS TB.TK.ÖB.GÖBEK', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(77, '00077', '2 SEANS KÝPRÝK LÝFTÝNGÝ', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(78, '00078', '12 SEANS TB.TK.B.KA.GÖBEK ÇÝZGÝSÝ BEL ORTASI', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(79, '00079', '12 SEANS TB.TK.KA.ÖB.BEL', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(80, '00080', '4 SEANS CÝLT BAKIMI 1 SEANS MASAJ', '400', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(81, '00081', '6 SEANS KA', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(82, '00082', '6 SEANS YÜZ ', '450', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(83, '00083', '12 SEANS FORMA + G5', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(84, '00084', '1 SEANS LENF ÖDEM 1 SEANS MASAJ 1 SEANS LENF ÖDEM ', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(85, '00085', '12 SEANS TB.TK.KA.ÖB.GÖBEK', '3250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(86, '00086', '6 SEANS TB.TK.KA.ÖB.GÖBEK', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(87, '00087', '12 SEANS POPO', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(88, '00088', '12 SEANS TK.BEL ORTASI GÖBEK', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(89, '00089', '12 SEANS TB.KA.ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(90, '00090', '6 SEANS MASAJ', '540', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(91, '00091', '10 SEANS MASAJ', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(92, '00092', '3 SEANS YÜZ', '140', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(93, '00093', '6 SEANS TK', '650', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(94, '00094', '6 SEANS ÖB', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(95, '00095', '12 SEANS TB.TK.KA.ÖB.GÖBEK YÜZ GÖÐÜS UCU GÖÐÜS ORTASI POPO', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(96, '00096', '6  SEANS TB.TK.KA.ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(97, '00097', '12 SEANS TK', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(98, '00098', '6 SEANS TK.TB.KA.ÖB.FAUL GÖBEK', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(99, '00099', '10 SEANS YÜZ ALIN ', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(100, '00100', '12 SEANS TB.KA.ÖB', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(101, '00101', '2 SEANS MASAJ 2 SEANS YÜZ FORMA 3 SEANS AGUASHÝNE ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(102, '00102', '12 SEANS FORMA', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(103, '00103', '12 SEANS MÝKRO', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(104, '00104', '10 SEANS CÝLT BAKIMI', '800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(105, '00105', '4 PRP 4 HYDRAFACÝAL 4 FORMA', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(106, '00106', '6 SEANS POPO GÖBEK BEL ORTASI', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(107, '00107', '3 SEANS DERMAPEN 3 SEANS MEZOTERAPÝ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(108, '00108', '12 SEANS YB.YK.KA.ÖB', '2100', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(109, '00109', '6 SEANS BOYUN KULAK YANAK K.A', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(110, '00110', '3 SEANS XELEDERM 3 SEANS PRP 1 SEANS CÝLT BAKIMI', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(111, '00111', '6 SEANS TB.TK.KA. YÜZ ENSE', '800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(112, '00112', '6 SEANS TB.TK.KA', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(113, '00113', 'GÖZ ALTI DOLGU NAZOBÝAL DOLGU BOTOKS VE GÖZ ÇEVRESÝ 1 SEANS GENÇLÝK AÞISI KERATÝNLÝ MANÝKÜR PEDÝKÜR KÝPRÝK LÝFTÝNGÝ', '3750', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(114, '00114', 'AÐDA KAÞ MANÝKÜR PEDÝKÜR ', '150', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(115, '00115', '12 SEANS TB.YK.KA.ÖB.BIYIK', '2250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(116, '00116', '5 SEANS MEDÝKAL AYAK', '400', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(117, '00117', '3 SEANS LEKE TEDAVÝSÝ ', '1350', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(118, '00118', '3 SEANS PRP', '750', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(119, '00119', '6 SEANS DÖVME SÝLME', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(120, '00120', '3 SEANS DÖVME SÝLME 3 SEANS KONTROL', '500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(121, '00121', '12 SEANS TK', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(122, '00122', '12 SEANS TB.TK.ÖB.KA.GÖBEK SIRT', '2250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(123, '00123', '6 SEANS TB.YK.ÖB.KA', '1350', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(124, '00124', '6 SEANS GÖBEK', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(125, '00125', '12 SEANS YARIM SIRT POPO', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(126, '00126', '12 SEANS TK.KA.SIRT BOYUN GÖÐÜS', '1750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(127, '00127', '6 SEANS Ö.B T.B', '250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(128, '00128', '1- KARIN BACAK BEL FRAKSÝYONEL LAZER 2-MEZOTERAPÝ 3-KARIN BACAK BEL GREENPELL 4-MEZOTERAPÝ 5-KARIN BACAK BEL ALTIN ÝÐNE 6-MEZOTERAPÝ', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(129, '00129', '3 SEANS PRP 3 SEANS MEZOTERAPÝ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(130, '00130', 'YÜZ ALIN BOYUN', '700', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(131, '00131', '12 SEANS YÜZ ALIN BOYUN ', '700', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(132, '00132', '12 SEANS TB.TK.KA.ÖB BEL GÖBEK POPO YÜZ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(133, '00133', '12 SEANS BEL GÖBEK GÖÐÜS UCU ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(134, '00134', '3 SEANS TB 1 SEANS TK', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(135, '00135', '12 SEANS ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(136, '00136', 'LEKE TEDAVÝSÝ 1 SEANS FRAKSÝYONEL 3 SEANS PEELÝNG ENJEKSÝYON 1 SEANS ALTIN ÝÐNE 1 SEANS DERMAPEN ', '900', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(137, '00137', 'GÖBEK POPO ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(138, '00138', '6 SEANS TB ÖB KA GÖBEK ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(139, '00139', 'MASAJ', '900', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(140, '00140', '3SEANS NOMORE TEDAVÝSÝ 1 SENAS IÞIK DOLGUSU 1SEANS BOTOX 1SEANS DUDAK DOLGUSU 1SEANS ALIN ORTASI DOLGUSU ', '4500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR '),
(141, '00141', 'TB TK ÖB KA POPO 12 SEANS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(142, '00142', 'TB TK', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(143, '00143', '6 SEANS TB TK ÖB YÜZ', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(144, '00144', ' 12 SEANS KA ÖB TK TB', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(145, '00145', '1-FRAKSÝYONEL LAZER 2-HÝYOLONÝK ASÝT 3-ALTIN ÝÐNE 4-HÝYOLONÝK ASÝT 5-FRAKSÝYONEL LAZER 6-HÝYOLONÝK ASÝT  ', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR '),
(146, '00146', '12 SEANS KA ÖB TB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(147, '00147', '12 SEANS TK KA ÖB TB POPO ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(148, '00148', '6 SEANS DÖVME SÝLME ', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(149, '00149', '12 SEANS GÖBEK BEL ORTASI ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(150, '00149', ' 12 SEANS TK  KA YB BIYIK ', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(151, '00151', '12 SEANS KAVÝTASYON + G5 1 SEANS LENF ÖDEM 1 SEANS MASAJ 1 SEANS TUZ PEELÝNG', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(152, '00152', '12 SEANS TB TK KA ÖB BIYIK GIDI', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(153, '00153', '3 SEANS YARA VE DÖVME SÝLME ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(154, '00154', '6 SEANS GÖÐÜS UCU GÖÐÜS ARASI', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(155, '00155', '12 SEANS POPO', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(156, '00156', '12 SEANS TB TK KA ÖB GÖBEK GÖÐÜS UCU POPO ', '1250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(157, '00157', '12 SEANS TB TK KA ÖB POPO', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(158, '00158', 'TB TK KA ÖB BIYIK ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(159, '00159', 'TB ÖB TK GÖBEK BEL ÇÝZGÝSÝ KA', '3000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(160, '00160', '12 SEANS TB ÖB KA GÖBEK BEL ÇÝZGÝSÝ', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(161, '00161', '12 SEANS TB TK KA GÖBEK GÖÐÜS UCU', '1600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(162, '00162', '5 SEANS YÜZ BOYUN ', '350', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(163, '00163', '12 SEANS TB TK KA ÖB', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(164, '00164', ' 12 SEANS ÖB KA BEL ORTASI  POPO ÜSTÜ ', '3500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(165, '00165', 'KA', '30', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(166, '00166', '12 SEANS TB TK ÖB', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(167, '00167', '6 SEANS SIRT POPO ÜSTÜ KA ', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(168, '00168', '12 SEANS YB YK ÖB ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(169, '00169', '6 SEANS TB KA ÖB ÇENE BIYIK GÖÐÜS UCU', '250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(170, '00170', '12 SEANS GÖBEK SIRT BEL POPO GÖÐÜS UCU ', '1750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(171, '00171', '6 SEANS KA TB TK ÖB ', '1000', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK '),
(172, '00172', '12 SEANS TK ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(173, '00173', '6 SEANS TB TK KA ÖB POPO GÖBEK BEL ORTASI', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(174, '00174', '12 SEANS KA YK TB ÖB ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK '),
(175, '00175', '1 SEANS KARBON PEELÝNG+SOMON DNA ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(176, '00176', '1 SEANS DUDAK DOLGUSU 1 SEANS HYDRAFACÝAL', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(177, '00177', '2 SEANS DOLGU', '2250', NULL, '', NULL, '0', NULL, NULL, 'DOKTOR'),
(178, '00178', '12 SEANS TK', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(179, '00179', '12 SEANS GÖÐÜS  6 SEANS TB', '1250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(180, '00180', '6 SEANS TB TK KA ÖB GÖBEK GÖÐÜS ARASI', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(181, '00181', '6 SEANS HYDRAFACÝAL', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(182, '00182', '1 SEANS BOTOKS GÖZ ALTI 2 SEANS XELEDARM', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(183, '00183', '12 SEANS YB KA ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(184, '00184', '12 SEANS YK YB ÖB KA ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(185, '00184', '12 SEANS TB TK KA ÖB ', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(186, '00186', '1 BOTOK 1 DOLGU 1 GENÇLÝK AÞISI', '20000', NULL, '', NULL, '0', NULL, NULL, 'DOKTOR'),
(187, '00187', '1 BOTOX 1 DULUSU 1 NAZOLABÝAL', '800', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(188, '00188', '12 SEANS TB TK ÖB KA GÖBEK BEL ', '3000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(189, '00189', 'TB TK ÖB KA GÖBEK', '625', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(190, '00190', '12 SEANS POPO GÖBEK SIRT GÜYÜZ TK TB TA KA ÖB', '3000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(191, '00191', '12 SEANS KA TB ÖB TK ', '1800', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(192, '00192', '6 SEANS TB KA BIYIK', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(193, '00193', '12 SEANS SIRT KA ENSE BOYUN', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(194, '00194', '2 SEANS XELEDARM', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(195, '00195', '6 SEANS TB TK KA ÖB ', '1300', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(196, '00196', '12 SEANS TB KA', '1200', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(197, '00197', '12 TK BEL GÖBEK POPO ÜSTÜ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(198, '00198', '6 SEANS KA TB ÖB YK GÖBEK', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(199, '00199', '12 SEANS SIRT KA YK AYAK ÜSTÜ ', '2500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(200, '00200', '6 SEANS TB ÖB ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(201, '00201', '6 SEANS TB ÖB KA ', '1300', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(202, '00202', '12 SEANS TK TB KA ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(203, '00203', '12 SEANS GÖBEK ÖB GOÐUS UCU', '2130', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(204, '00204', '6 SEANS YK YB KA ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(205, '00205', '12 SEANS TB TK KA ÖB POPO GÖBEK BEL', '2925', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(206, '00206', '12 SEANS TB KA ÖB YK POPO BEL GÖBEK GÖGÜS UCU YÜZ ', '3400', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(207, '00207', '3 SEANS NO MORE', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(208, '00208', '6 SEANS ÖB KA ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(209, '00209', '6 SEANS LPG', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(210, '00210', '6 SEANS TB KA ÖB TK ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(211, '00211', '6 SEANS KA ÖB BY YB ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(212, '00212', '10 SEANS MEZOTERAPÝ', '1400', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(213, '00213', '12 SEANS TB TK KA ÖB BIYIK GÖBEK', '3250', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(214, '00214', '12 SEANS TB ÖB POPO', '2000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(215, '00215', '12 SEANS TK TB KA ÖB YÜZ ', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(216, '00216', '12 SEANS TB KA ÖB ', '1200', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(217, '00217', '12 SEANS TB TK KA ÖB ÇENE', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(218, '00218', '6 SEANS TB KA ÖB TK ', '1500', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK'),
(219, '00219', '6 SEANS KULAK ', '180', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(220, '00220', '3 SEANS FRAKSÝYONEL LAZER', '300', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(221, '00221', '6 SEANS YB KA ÖB', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(222, '00222', '4 SEANS VÝTAMÝN', '600', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(223, '00223', '6 SEANS YANAK KULAK', '100', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(224, '00224', '10 SEANS MEDÝKAL AYAK', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(225, '00225', '4 SEANS YK YB KA 2 SEANS CÝLT BAKIMI', '280', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(226, '00226', '6 SEANS YANAK ENSE', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(227, '00227', '12 SEANS MEZOTERAPÝ ', '750', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR'),
(228, '00228', '12 SEANFAUL BIYIK TK KA ', '1000', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK '),
(229, '00229', '3 SEANS TB TK KA ÖB', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(230, '00230', '5 SEANS BIYIK', '75', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(231, '00231', '3 SEANS PRP FORMA HYDRFACÝAL', '1500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(232, '00232', '6 SEANS ÇENE BIYIK BURUN ÜSTÜ ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(233, '00233', '6SEANS TB ÖB KA TA TK ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(234, '00234', '12 SEANS TB ÖB KA YK', '1800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(235, '00235', '6 SEANS GÖGÜS BOYUN SIRT KANAT BEL ORTASI ', '1800', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(236, '00236', '12 SEANS TB ÖB TK KA BIYK', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(237, '00237', '12 SEANS TB  ÖB TK KA ', '2130', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(238, '00238', '12 SEANS FAUL 12 SEANS BIYIK', '360', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(239, '00239', '6 SEANS KA ÖB', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(240, '00240', '12 SEANS LPG', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(241, '00241', '12 SEANS SIRT', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(242, '00242', '9 SEANS ÖB', '540', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(243, '00243', '4 SEANS MEZOTERAPÝ 3 SEANS PRP', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(244, '00244', '2 SEANS PRP 3 SEANS DERMAPEN 1 SEANS CÝLT BAKIMI', '1250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(245, '00245', '1 SEANS CÝLT BAKIMI', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(246, '00246', '12 SEANS TB TK KA ÖB BEL ORTASI', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(247, '00247', '12 SEANS TB KA ÖB BIYIK', '1200', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(248, '00248', '6 SEANS TB KA ÖB GÖBEK', '700', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(249, '00249', '12 SEANS TB ÖB KA TK KAÞ ORTASI BIYIK', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(250, '00250', '12 SEANS GÖBEK POPO ÜSTÜ BEL', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(251, '00251', '12 SEANS BEL POPO ENSE GÖÐÜS ARASI POPO ARASI GÖBEK ', '4500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(252, '00252', '6 SEANS TB ÖB', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(253, '00253', '12 SEANS TB TK KA ÖB GÖBEK YÜZ BOYUN GÖÐÜS UCU ', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(254, '00254', '12 SEANS ÖB ', '700', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(255, '00255', '12 SEANS POPO ARASI', '1200', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(256, '00256', '6 SEANS TB KA ÖB YK', '1350', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(257, '00257', '1 SEANS BOTOKS 1 SEANS KAÞ ÝP ASKI', '550', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(258, '00258', '3 MEZOTERAPÝ 3 GREENPEEL', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(259, '00259', '6 SEANS DERMAPEN', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(260, '00260', '4 SEANS TB TK KA ÖB BEL GÖBEK', '800', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(261, '00261', 'TK KA GÖBEK BEL ORTASI ÞAKAK BIYIK TB ÖB POPO', '3500', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK'),
(262, '00262', '5 SEANS MEZOTERAPÝ', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(263, '00263', '6 SEANS KA ÖB ', '750', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK '),
(264, '00264', '12 SEANS TB TK KA ÖB POPO  ', '2750', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(265, '00265', '12 SEANS BEL ORTASI', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(266, '00266', '6 SEANS TB ÖB KA', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(267, '00267', '12 SEANS TB TK KA ÖB BIYIK ', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(268, '00268', '6 SEANS TB YK KA ÖB BIYIK', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(269, '00269', '6 SEANS TB', '750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(270, '00270', '3 SEANS KÝRPÝK LÝFTÝNGÝ', '300', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(271, '00271', '12 SEANS TB TK KA ÖB POPO GÖBEK BEL ', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(272, '00272', '12 SEANS LPG + MÝKRO', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(273, '00273', '12 SEANS YB YK KA', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(274, '00274', '12 SEANS SIRT KA YK OMUZ KULAK ENSE YÜZ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(275, '00275', '20 SEANS OZON TEDAVÝSÝ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(317, '00317', '12 SEANS TB TK OB KA ', '2300', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(276, '00276', '12 SEANS TB TK KA ÖB GÖÐÜS ARASI', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(277, '00277', '2 SEANS GREENPEEL 2 SEANS PRP', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(278, '00278', '1 SEANS MEZOTERAPÝ 1 SEANS VÝTAMÝN', '700', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(279, '00279', '3 SEANS KARBON PEELÝNG', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(280, '00280', '12 SEANS TB TK KA ÖB YÜZ BOYUN SIRT KARIN', '3500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(281, '00281', '6 SEANS TB TK KA ÖB GÖBEK', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(282, '00282', '12 SEANS TB KA ÖB GÖBEK', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(283, '00283', 'KA AYAK ÜSTÜ', '540', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(284, '00284', '6 SEANS POPO KA BOYUN ÖB YK GÖÐÜS SIRT', '5500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(285, '00285', '12 SEANS KA', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(286, '00286', '7 SEANS BIYIK', '105', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(287, '00287', '6 SEANS TB TK KA ÖB GÖÐÜS UCU GÖBEK YÜZ', '350', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(288, '00288', '12 SEANS CENE  BIYIK KA YB ', '450', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(289, '00289', 'FOCUS ULTRASON NAZOBÝAL DOLGU', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(290, '00290', '12 SEANS TB TK', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(291, '00291', '12 SEANS LPG + ULTRATON', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(292, '00292', '6 SEANS TB YK GÖBEK ÇÝZGÝSÝ', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(293, '00293', '6 SEANS TB YK KA ÖB', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(294, '00294', '12 SEANS MÝCROPLUS + LPG', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(295, '00295', '6 SEANS FORMA ', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(296, '00296', '3 SEANS HYDRAFACÝAL 3 SEANS GREEN PEEL', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(297, '00297', '1 DOLGU BOTOKS 1 GREENPEEL 1 HYDRAFACÝAL 1 GENÇLÝK AÞISI', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(298, '00298', '1 FOCUS ULTRASON 1 ÝP ASKI 1 SOMON DNA', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(299, '00299', '6 SEANS YB KA BEL POPO ÖB BOYUN ENSE KAÞ ORTASI YANAK BEL ORTASI ', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(300, '00300', '6 SEANS TB TK KA ÖB ', '1250', NULL, NULL, NULL, '0', NULL, NULL, 'GZELLÝK '),
(301, '00301', '12 SEANS TV TB TK KA ÖB ', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(302, '00302', '12 SEANS TB ÖB KA YK ', '1800', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(303, '00303', '5 SEANS TB KA ÖB BIYIK', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(304, '00304', '6 SEANS YB ÖB KA ', '600', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(305, '00305', '4 SEANS 4 KONTROL TB KA ÖB', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(306, '00306', '12 SEANS TB YK KA ÖB YÜZ ENSE GÖBEK ÇÝZGÝSÝ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(307, '00307', '1-VÝTAMÝN 2-DERMAPEN 3-VÝTAMÝN', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(308, '00308', '12 SEANS TB TK KA ÖB GÖBEK', '2640', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(309, '00309', '6 SEANS TK KULAK KA ENSE GÖÐÜS SIRT', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(310, '00310', '6 SEANS YB YK KA ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(311, '00311', '3 SEANS ÞAKAK', '120', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(312, '00312', '3 PRP 3 FORMA 3 HDRAFACÝAL', '1500', NULL, NULL, NULL, NULL, NULL, NULL, 'GÜZELLÝK'),
(313, '00313', '12 SEANS TB TK KA ÖB BIYIK BEL ORTASI POPO', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(314, '00314', '12 SEANS T.SIRT KA YÜZ', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(315, '00315', '12 SEANS TB TK KA ÖB BIYIK ÇENE', '1250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(316, '00316', '6 SEANS ÇENE', '90', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(318, '00318', '12 SEANS  TB TK OB KA ', '2300', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(319, '00319', '12 SEANS KA TB ÖB ', '1750', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELÝK '),
(320, '00320', '12 SEANS KA ÖB ', '1000', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(321, '00321', '12 SEANS YB YK KA ÖB ', '900', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(322, '00322', '12 SEANS TB TK KA ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(323, '00323', '6 SEANS YARA ÝZÝ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(324, '00324', '6 SEANS KA BIYIK', '300', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(325, '00325', '12 SEANS TB YK ÖB KA', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(326, '00326', '12 SEANS TB TK KA POPO', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(327, '00327', '6 SEANS TB ÖB KA ', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(328, '00328', '6 SEANS YK ', '400', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(329, '00329', '12 SEANS TB TK KA ÖB BEL GÖBEK', '4500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(330, '00330', '6 SEANS TB TK KA ÖB BEL GÖBEK', '3000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(331, '00331', '12 SEANS GÖBEK ÖB POPO', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(332, '00332', '12 SEANS TB KA GÖÐÜS', '4000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(333, '00333', '10 SEANS KAÞ ALIMI', '50', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(334, '00334', '10 SEANS KERATÝNLÝ MANÝKÜR', '250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(335, '00335', '6 SEANS TB ÖB YK BIYIK', '590', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(336, '00336', '12 SEANS YB ÖB', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(337, '00337', '10 SEANS YÜZ ENSE ', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(338, '00338', 'DOLGU BOTOKX HYDRAFAÝL KARBON ', '2450', NULL, NULL, NULL, '0', NULL, NULL, 'DOKTOR ÝÞLEMÝ '),
(339, '00339', '12 SEANS BEL GÖBEK', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(340, '00340', '12 SEANS GERDAN GÖÐÜS UCU', '250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(341, '00341', '12 SEANS KA TB ÖB ', '625', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(342, '00342', '6 SEANS ÖB KA YB ', '500', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(343, '00343', '12 Seans YANAK KA KASORTASI ', '0', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK'),
(344, '00344', '6 SEANS TB TK KA ÖB BIYIK', '750', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(345, '00344', '6 SEANS ÖB TK KA TB ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(346, '00345', '6 SEANS BEL ORTASI', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(347, '00347', '6 SEANS 6 KONTROL TB KA ', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(348, '00348', '6 SEANS POPO', '250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(349, '00349', '1 SEANS FRAKSÝYONEL LAZER 1 SEANS CÝLT BAKIMI 1 SEANS ALTIN ÝÐNE 1 SEANS CÝLT BAKIMI 1 SEANS PRP', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(350, '00350', 'PROTEZ TIRNAK DOLGU AUAFAÝL KÝPRÝK LÝFTÝNG ', '1280', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(351, '00351', 'KÝRPÝK LÝFTÝNGÝ AUAFACÝAL', '250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(352, '00352', '3 SEANS LEKE TEDAVÝSÝ', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(353, '00353', '3 SEANS GENÇLÝK AÞISI 1 SEANS CÝLT BAKIMI', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(354, '00354', '1 SEANS BOTOX 2 SEANS VÝTAMÝN', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(355, '00355', '3 SEANS SOMON DNA 3 SEANS PRP 2 SEANS CÝLT BAKIMI', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(356, '00356', '3 SEANS PRP 1 SEANS K.MANÝKÜR', '775', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(357, '00357', '2 SEANS VÝTAMÝN', '400', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(358, '00358', '1 SEANS NAZOLABÝAL DOLGU 1 SEANS DUDAK DOLGUSU 1 SEANS BOTOX', '2200', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(359, '00359', '12 SEANS TK GÖBEK SIRT YB', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(360, '00360', '3 SEANS FRAKSÝYONEL 3 SEANS GENÇLÝK AÞISI', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(361, '00361', '1 SEANS BOTOKS 2 DOLGU 1 GENÇLÝK AÞISI', '3000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(362, '00362', '2 SEANS ME-LÝNE 2 SEANS ENJEKSÝYON', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(363, '00363', '10 SEANS OZON TEDAVÝSÝ', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(364, '00364', '2 SEANS ÇATLAK TEDAVÝSÝ 1 SEANS HEDÝYE ÇEKÝLÝÞ ', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(365, '00365', '4 SEANS GÖZ ALTI MORLUÐU NO MOR', '2650', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(366, '00366', '1 SEANS BOTOKS 1 SEANS DOLGU 1 SEANS GENÇLÝK AÞISI', '2250', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(367, '00367', '1 SEANS FRANKSÝYONEL LAZER 1 SEANS FOCUS ULTRASON 1 SEANS ÖRÜMCEK AÐI', '2500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(368, '00368', '1 SEANS MEZOTERAPÝ 1 SEANS FRAKSÝYONEL 1 SEANS GENÇLÝK AÞISI', '1000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(369, '00369', '4 SEANS VÝTAMÝN 1 SEANS MÝKROFÝN', '3000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(370, '00370', '5 SEANS LENF ÖDEM', '0', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(371, '00371', '4 SEANS PARÝS IÞILTISI', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(372, '00372', 'TB ÖB TK KA', '900', NULL, NULL, NULL, '0', NULL, NULL, ''),
(373, '00373', 'KA TB TK ÖB ', '625', NULL, NULL, NULL, '0', NULL, NULL, 'GÜZELLÝK '),
(374, '00374', '5 SEANS OZON', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(375, '00375', '3 SEANS PARÝS IÞILTISI ', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(376, '00376', '8 SEANS KA TB TK SIRT GÖBEK ENSE ', '4000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(377, '00377', '5 SEANS G5', '500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(378, '00378', '6 SEANS MEZOTERAPÝ ', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(379, '00379', '12 SEANS ZAYFLAMA ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(380, '00380', '3 SEANS PARÝS IÞILTISI', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(381, '00381', '10 SEANS MASAJ 10 SEANS G5', '1500', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(382, '00382', '12 SEANS YB YK ÖB', '800', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(383, '00383', '2 SEANS XELEDERM ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(384, '00384', '3 SEANS FRAKSYONEL ', '600', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(385, '00385', '3 SEANS PARÝS ÝÞILTISI ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(386, '00386', '3 DERMAPEN 3 GENÇLÝK AÞISI', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(387, '00387', '12 seans tb tk öb ka göbek', '3000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(388, '00388', '24 SEANS ZAYIFLAMA', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(389, '00389', '12 Seans TB YK KA ÖB ', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(390, '390', '24 SEANS MASAJ', '1500', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(391, '00391', '24 SEANS ZAYFILAMA', '1500', NULL, NULL, NULL, NULL, NULL, NULL, '1+1'),
(392, '00392', '2  SEANS PEDÝKÜR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(393, '00393', '4 SEANS GENCLIK AÞISI ', '2000', NULL, NULL, NULL, '0', NULL, NULL, NULL),
(394, '00394', '6 SEANS RADYOFREKANS', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(395, '00395', '3 SEANS PARÝS IÞILTISI + BOTOKS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(396, '00396', '3 SEANS PARÝS+ FRKS.LAZER+ALTIN ÝÐNE+ BOTOKS', '3000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(397, '00397', '6 SEANS LAZER ÖB', '750', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(398, '00398', '3 SEANS CÝLT BAKIMI ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(399, '00399', 'BOTOX DOLGU', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(400, '00400', '3 SEANS OZAN', '450', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(401, '00401', ' 5 YÜZ  LAZERÝ', '400', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(402, '00402', '6 SEANS DERMAPEN +  ÜRÜN ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1715'),
(403, '00403', '10 SEANS LAZER BOYUN + BIYIK', '900', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(404, '00404', '6 SEAS DÖVME SÝLME', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(405, '00405', 'PRP+VÝTAMÝN', '2000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(406, '00406', '6 SEANS OZON', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(407, '00407', '4', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(408, '00408', '4', '1000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(409, '00409', '5', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(410, '00410', '25', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(411, '00411', '26', '750', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(412, '00412', '27', '450', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(413, '00413', '10', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(414, '00414', '12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(415, '00415', '15', '750', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(416, '00416', '16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(417, '00417', '20', '2500', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(418, '00418', '5 SEANS YÜZ ', '250', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(419, '00419', '21', '50', NULL, NULL, NULL, NULL, NULL, NULL, '5LÝ'),
(420, '00420', '6 SEANS LAZER ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(421, '00421', 'KLOPATRA AÞISI', '1800', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(422, '00422', '12 SEANS ÖB TK KA TB ', '2500', NULL, NULL, NULL, NULL, NULL, NULL, 'LAZER'),
(423, '00423', '3 SEANS YÜZ LAZER', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(424, '00424', '12 SEANS   G5 ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `paketuygulama`
--

CREATE TABLE `paketuygulama` (
  `index` int(3) NOT NULL,
  `uniteindex` int(3) NOT NULL,
  `uygulamaindex` int(3) NOT NULL,
  `seans` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paketuygulama`
--

INSERT INTO `paketuygulama` (`index`, `uniteindex`, `uygulamaindex`, `seans`) VALUES
(1, 1, 27, '12'),
(2, 404, 61, '6'),
(3, 2, 3, '12'),
(4, 3, 53, '6'),
(5, 3, 54, '6'),
(6, 41, 78, '3'),
(7, 399, 4, '1'),
(8, 399, 128, '1'),
(9, 405, 6, '3'),
(10, 405, 119, '3'),
(11, 407, 8, '4'),
(12, 408, 8, '4'),
(13, 409, 2, '5'),
(14, 410, 55, '12'),
(15, 411, 8, '6'),
(16, 412, 62, '5'),
(17, 413, 101, '10'),
(18, 414, 49, '3'),
(19, 415, 54, '12'),
(20, 416, 134, '3'),
(21, 417, 4, '1'),
(22, 417, 8, '1'),
(23, 417, 128, '1'),
(24, 417, 136, '1'),
(25, 419, 43, '5'),
(26, 422, 3, NULL),
(27, 424, 54, '12');

-- --------------------------------------------------------

--
-- Table structure for table `personelhareketleri`
--

CREATE TABLE `personelhareketleri` (
  `harperindex` int(3) NOT NULL,
  `personelindex` int(3) NOT NULL,
  `personeltanimi` varchar(100) NOT NULL,
  `islemturu` varchar(40) NOT NULL,
  `hedefhesaptanimi` varchar(100) DEFAULT NULL,
  `hedefhesapindex` int(3) DEFAULT NULL,
  `tutari` varchar(10) NOT NULL,
  `tutarbirimi` varchar(5) NOT NULL,
  `aciklamalar` text DEFAULT NULL,
  `islemtarihi` date NOT NULL,
  `olusturan` varchar(50) NOT NULL,
  `hareketkodu` varchar(20) DEFAULT NULL,
  `yil` year(4) DEFAULT NULL,
  `donem` varchar(20) DEFAULT NULL,
  `gidergrubu` varchar(100) DEFAULT NULL,
  `gelirgrubu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `plasiyertanimlari`
--

CREATE TABLE `plasiyertanimlari` (
  `plasiyerindex` int(3) NOT NULL,
  `plasiyerkodu` varchar(20) NOT NULL,
  `plasiyeradi` varchar(100) NOT NULL,
  `otomofisid` varchar(20) DEFAULT NULL,
  `sifre` varchar(20) DEFAULT NULL,
  `plasiyergrubu` varchar(100) DEFAULT NULL,
  `imza` varchar(250) DEFAULT NULL,
  `primorani` varchar(10) DEFAULT NULL,
  `subeindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `plasiyertanimlari`
--

INSERT INTO `plasiyertanimlari` (`plasiyerindex`, `plasiyerkodu`, `plasiyeradi`, `otomofisid`, `sifre`, `plasiyergrubu`, `imza`, `primorani`, `subeindex`) VALUES
(1, '00001', 'Dr. Meltem Çetin', NULL, NULL, NULL, NULL, '0', NULL),
(2, '00002', 'Gönül Köse', NULL, NULL, NULL, NULL, '0', NULL),
(22, '00022', 'ZEHRA', NULL, NULL, NULL, NULL, NULL, NULL),
(19, '00019', 'EMEL DEMÝR', NULL, NULL, NULL, NULL, NULL, NULL),
(26, '00026', 'NÝLÐÜN', NULL, NULL, NULL, NULL, NULL, NULL),
(27, '00027', 'DUYGU', NULL, NULL, NULL, NULL, NULL, NULL),
(28, '00028', 'YAREN', NULL, NULL, NULL, NULL, NULL, NULL),
(18, '00018', 'GULYA', NULL, NULL, NULL, NULL, NULL, NULL),
(17, '00017', 'PALÝNA', NULL, NULL, NULL, NULL, NULL, NULL),
(12, '00012', 'DÝÐER', NULL, NULL, NULL, NULL, '0', NULL),
(25, '00025', 'KÜBRA', NULL, NULL, NULL, NULL, NULL, NULL),
(24, '00024', 'AYÞEÐÜL', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `postanimlari`
--

CREATE TABLE `postanimlari` (
  `posindex` int(3) NOT NULL,
  `poskodu` varchar(20) NOT NULL,
  `postanimi` varchar(50) NOT NULL,
  `hesapkodu` varchar(30) NOT NULL,
  `hesaptanimi` varchar(100) NOT NULL,
  `hesapindex` int(3) NOT NULL,
  `sabitkomisyon` varchar(6) NOT NULL,
  `tekcekim` varchar(6) DEFAULT '0',
  `2taksit` varchar(6) DEFAULT '0',
  `3taksit` varchar(6) DEFAULT '0',
  `4taksit` varchar(6) DEFAULT '0',
  `5taksit` varchar(6) DEFAULT '0',
  `6taksit` varchar(6) DEFAULT '0',
  `7taksit` varchar(6) DEFAULT '0',
  `8taksit` varchar(6) DEFAULT '0',
  `9taksit` varchar(6) DEFAULT '0',
  `10taksit` varchar(6) DEFAULT '0',
  `11taksit` varchar(6) DEFAULT '0',
  `12taksit` varchar(6) DEFAULT '0',
  `hesabageci` int(3) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postanimlari`
--

INSERT INTO `postanimlari` (`posindex`, `poskodu`, `postanimi`, `hesapkodu`, `hesaptanimi`, `hesapindex`, `sabitkomisyon`, `tekcekim`, `2taksit`, `3taksit`, `4taksit`, `5taksit`, `6taksit`, `7taksit`, `8taksit`, `9taksit`, `10taksit`, `11taksit`, `12taksit`, `hesabageci`) VALUES
(1, '00001', 'GARANTÝ POS', '00002', 'GARANTÝ POS HESABI', 2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `prosestanimlari`
--

CREATE TABLE `prosestanimlari` (
  `index` int(3) NOT NULL,
  `proseskodu` varchar(20) NOT NULL,
  `prosestanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `randevucinsleri`
--

CREATE TABLE `randevucinsleri` (
  `index` int(3) NOT NULL,
  `cinstanimi` varchar(100) DEFAULT NULL,
  `renk` varchar(20) DEFAULT NULL,
  `sure` varchar(10) DEFAULT '15',
  `randevubirimi` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `randevucinsleri`
--

INSERT INTO `randevucinsleri` (`index`, `cinstanimi`, `renk`, `sure`, `randevubirimi`) VALUES
(1, 'LAZER', '-16777211', '60', NULL),
(2, 'CÝLT BAKIMI', '-16777211', '60', NULL),
(21, 'DOKTOR UYGULAMASI', '-16777211', '60', NULL),
(22, 'KONTROL', '-16777211', '30', NULL),
(23, 'LPG', '-16777211', '60', NULL),
(24, 'G5', '-16777211', '60', NULL),
(25, 'MANÝKÜR PEDÝKÜR', NULL, '15', NULL),
(26, 'GLOBAL EYE DERMOLER', NULL, '60', NULL),
(27, 'BOTOX ', NULL, '15', NULL),
(28, 'DUDAK DOLGUSU', NULL, '15', NULL),
(29, 'GÖZ XELEDERM ', NULL, '15', NULL),
(30, 'YÜZ XELEDERM', NULL, '15', NULL),
(31, 'LEKE TEDAVÝSÝ', NULL, '15', NULL),
(32, 'PEELÝNG', NULL, '15', NULL),
(33, 'ÖRÜMCEK AÐI BOTOX DOLGU', NULL, '15', NULL),
(34, 'ÖRÜMCEK AÐI BOTOX', NULL, '15', NULL),
(35, 'ÖRÜMCEK AÐI', NULL, '15', NULL),
(36, 'BOTOX KONTROL', NULL, '15', NULL),
(37, 'ALTIN ÝÐNE', NULL, '15', NULL),
(38, 'DÖVME SÝLME ', NULL, '15', NULL),
(39, 'ÖRÜMCEK AÐI BOTOX KONTROL', NULL, '15', NULL),
(40, 'ÖRÜMCEK AÐI BOTOX DOLGU KONTROL', NULL, '', NULL),
(41, 'HÝYALONÝK ASÝT', NULL, '15', NULL),
(42, 'XELEDARM ', NULL, '15', NULL),
(43, 'PRP', '15793151', '15', NULL),
(44, 'MEDÝKAL AYAK', NULL, '15', NULL),
(45, 'MASAJ', NULL, '15', NULL),
(46, 'ÝÐNELÝ EPÝLASYON', NULL, '15', NULL),
(47, 'MEZOTERAPÝ', NULL, '15', NULL),
(48, 'DOLGU GÖRÜÞME', NULL, '15', NULL),
(49, 'KARBON PEELÝNG', NULL, '15', NULL),
(50, 'OJE', NULL, '15', NULL),
(51, 'KÝRPÝK LÝFTÝNG', NULL, '15', NULL),
(52, 'VÝTAMIN ', NULL, '15', NULL),
(53, 'KIL TEKNÝÐÝ', NULL, '15', NULL),
(54, 'GENÇLÝK AÞISI', NULL, '15', NULL),
(55, 'DOLGU', NULL, '15', NULL),
(56, 'GREENPELL', NULL, '15', NULL),
(57, 'ÇATLAK TEDAVÝSÝ', NULL, '30', NULL),
(58, 'DERMAPEN', NULL, '30', NULL),
(59, 'YARA ÝZÝ', NULL, '15', NULL),
(60, 'AKILLI PEELÝNG', NULL, '30', NULL),
(61, 'OZON TEDAVÝSÝ', NULL, '15', NULL),
(62, 'FORMA', NULL, '15', NULL),
(63, 'GÖRÜÞME', NULL, '15', NULL),
(64, 'AQUAFACÝAL', NULL, '60', NULL),
(65, 'HYDRAFACÝAL', NULL, '60', NULL),
(66, 'BEN ALIMI', NULL, '40', NULL),
(67, 'MANÝKÜR', NULL, '60', NULL),
(68, 'SOMON DNA', NULL, '30', NULL),
(69, 'GÖZ ÇEVRESÝ', NULL, '30', NULL),
(70, 'KAÞ', NULL, '30', NULL),
(71, 'ULTURATON', '32768', '60', NULL),
(72, 'KALICI OJE', NULL, '90', NULL),
(73, 'HEYKELTRAÞ', NULL, '60', NULL),
(74, 'RADYO FRAKAN', NULL, '15', NULL),
(75, 'KALICI MAKYAJ', NULL, '15', NULL),
(76, 'AÐDA', NULL, '30', NULL),
(77, 'MÝCROPLAS', NULL, '15', NULL),
(78, 'KLOPATRA AÞÝSÝ', NULL, '30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `randevular`
--

CREATE TABLE `randevular` (
  `index` int(3) NOT NULL,
  `randevu_tarih` date DEFAULT NULL,
  `randevu_saat` varchar(16) NOT NULL,
  `musteri_kodu` int(3) NOT NULL,
  `musteri_adi` varchar(100) NOT NULL,
  `randevu_aciklamasi` text DEFAULT NULL,
  `durumu` varchar(20) DEFAULT NULL,
  `aciklama_2` varchar(250) DEFAULT NULL,
  `randevu_konusu` varchar(100) DEFAULT NULL,
  `kayit_tarihi` date DEFAULT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `hatirlatma` varchar(20) DEFAULT NULL,
  `otomesaj` varchar(20) DEFAULT NULL,
  `bitis_saati` varchar(16) DEFAULT NULL,
  `oda_tanim` varchar(100) DEFAULT NULL,
  `periyot` varchar(100) DEFAULT NULL,
  `subetanimi` varchar(30) DEFAULT NULL,
  `odakod` int(3) DEFAULT NULL,
  `islemiyapan` varchar(100) DEFAULT NULL,
  `bolge` varchar(50) DEFAULT NULL,
  `seans` varchar(50) DEFAULT NULL,
  `islemtanimi` varchar(100) DEFAULT NULL,
  `sure` int(3) DEFAULT NULL,
  `orderkod` int(3) DEFAULT NULL,
  `bitistarihi` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `recetealti`
--

CREATE TABLE `recetealti` (
  `recetealtindex` int(3) NOT NULL,
  `receteindex` int(3) NOT NULL,
  `ilac` varchar(100) NOT NULL,
  `doz` varchar(100) DEFAULT NULL,
  `kullanimsekli` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `receteler`
--

CREATE TABLE `receteler` (
  `receteindex` int(3) NOT NULL,
  `recetetatarihi` date NOT NULL,
  `recetekodu` varchar(20) NOT NULL,
  `hastaadi` varchar(100) DEFAULT NULL,
  `customerid` int(3) DEFAULT NULL,
  `dishekimi` varchar(100) DEFAULT NULL,
  `receteturu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sepetler`
--

CREATE TABLE `sepetler` (
  `alttanimindex` int(3) NOT NULL,
  `faturaindex` int(3) DEFAULT NULL,
  `malzemeindex` int(3) DEFAULT NULL,
  `malzemetanimi` varchar(100) DEFAULT NULL,
  `brfiyat` varchar(10) DEFAULT NULL,
  `miktar` varchar(7) DEFAULT NULL,
  `birim` varchar(20) DEFAULT NULL,
  `malzemekodu` varchar(20) DEFAULT NULL,
  `brfiyatint` varchar(10) DEFAULT NULL,
  `miktarint` varchar(10) DEFAULT NULL,
  `barkodu` varchar(100) DEFAULT NULL,
  `satirturu` varchar(10) DEFAULT 'Malzeme',
  `kdvorani` varchar(10) DEFAULT NULL,
  `iskontoorani` varchar(10) DEFAULT NULL,
  `kdv1int` varchar(10) DEFAULT '0',
  `kdv8int` varchar(10) DEFAULT '0',
  `kdv18int` varchar(10) DEFAULT '0',
  `iskontoint` varchar(10) DEFAULT '0',
  `aratoplamint` varchar(10) DEFAULT '0',
  `islemindex` int(3) DEFAULT NULL,
  `faturatanimi` varchar(100) DEFAULT NULL,
  `bedellint` varchar(10) DEFAULT '0',
  `bedelsizint` varchar(10) DEFAULT '0',
  `indirimint` varchar(10) DEFAULT '0',
  `iskontoorani2` varchar(10) DEFAULT '0',
  `iskontoorani3` varchar(10) DEFAULT '0',
  `sevktarihi` date DEFAULT NULL,
  `sepetno` int(3) DEFAULT NULL,
  `cariindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `servisaraclari`
--

CREATE TABLE `servisaraclari` (
  `aracindex` int(3) NOT NULL,
  `aractipi` varchar(50) DEFAULT NULL,
  `kayittarihi` date NOT NULL,
  `plakano` varchar(30) NOT NULL,
  `cariindex` int(3) NOT NULL,
  `trafiktesciltarihi` date DEFAULT NULL,
  `saseno` varchar(50) DEFAULT NULL,
  `motorno` varchar(50) DEFAULT NULL,
  `marka` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `rengi` varchar(100) DEFAULT NULL,
  `kmsaat` int(5) DEFAULT NULL,
  `garantibitis` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `servisdurumlari`
--

CREATE TABLE `servisdurumlari` (
  `index` int(6) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `randevu` varchar(100) DEFAULT 'False',
  `aralik` int(1) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `smsayar`
--

CREATE TABLE `smsayar` (
  `index` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `passworde` varchar(100) NOT NULL,
  `urle` varchar(250) NOT NULL,
  `birim_kontor` int(11) NOT NULL,
  `kontor_miktar` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sorular`
--

CREATE TABLE `sorular` (
  `index_sorular` int(6) NOT NULL,
  `sorukodu` varchar(45) NOT NULL,
  `bransi` varchar(45) NOT NULL,
  `ogrencino` varchar(45) NOT NULL,
  `kayittarihi` date NOT NULL,
  `kayitsaati` time NOT NULL,
  `soruresmi` varchar(200) DEFAULT NULL,
  `durumu` varchar(100) DEFAULT NULL,
  `cevaplayanhoca` varchar(45) DEFAULT NULL,
  `cevapresim` varchar(200) DEFAULT NULL,
  `soruaciklamasi` varchar(200) DEFAULT NULL,
  `cevapaciklamasi` varchar(200) DEFAULT NULL,
  `hocatarihi` date DEFAULT NULL,
  `hocagecissaati` time DEFAULT NULL,
  `cevaptarihi` date DEFAULT NULL,
  `cevapsaati` time DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stokbirimleri`
--

CREATE TABLE `stokbirimleri` (
  `stokbirimi_index` int(3) NOT NULL,
  `stokbirimi` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stokbirimleri`
--

INSERT INTO `stokbirimleri` (`stokbirimi_index`, `stokbirimi`) VALUES
(1, 'ADET');

-- --------------------------------------------------------

--
-- Table structure for table `stokhareketleri`
--

CREATE TABLE `stokhareketleri` (
  `hareketindex` int(3) NOT NULL,
  `harekettarihi` date NOT NULL,
  `islemyeri` varchar(40) NOT NULL,
  `pozitif` varchar(10) NOT NULL DEFAULT '0',
  `negatif` varchar(10) NOT NULL DEFAULT '0',
  `islemmiktari` varchar(10) NOT NULL,
  `stok_index` int(3) NOT NULL,
  `brmaliyeti` varchar(10) DEFAULT '0',
  `satisfiyati` varchar(10) DEFAULT '0',
  `hareketsaati` time DEFAULT NULL,
  `islemindex` int(3) DEFAULT NULL,
  `faturaindex` int(3) DEFAULT NULL,
  `irsaliyeindex` int(3) DEFAULT NULL,
  `hareketturu` varchar(50) DEFAULT NULL,
  `otomofisid` varchar(10) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL,
  `belgeno` varchar(30) DEFAULT NULL,
  `donembasi` int(1) DEFAULT 0,
  `netfiyatim` varchar(10) DEFAULT '0',
  `brfiyatim` varchar(10) DEFAULT '0',
  `barkodnos` varchar(20) DEFAULT NULL,
  `ciktialindi` varchar(10) DEFAULT 'False',
  `imeiindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stokhareketleri`
--

INSERT INTO `stokhareketleri` (`hareketindex`, `harekettarihi`, `islemyeri`, `pozitif`, `negatif`, `islemmiktari`, `stok_index`, `brmaliyeti`, `satisfiyati`, `hareketsaati`, `islemindex`, `faturaindex`, `irsaliyeindex`, `hareketturu`, `otomofisid`, `aciklama`, `belgeno`, `donembasi`, `netfiyatim`, `brfiyatim`, `barkodnos`, `ciktialindi`, `imeiindex`) VALUES
(1, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 1, '0', '0', '15:47:04', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(2, '2020-10-19', 'MAMUL DEPO-1', '0', '100', '100', 1, '0', '15000', '15:49:08', 383, NULL, NULL, 'Satýþ', NULL, 'EZGÝ YELMEZ  Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(3, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 2, '0', '0', '16:13:31', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(4, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 3, '0', '0', '16:17:38', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(5, '2020-10-19', 'MAMUL DEPO-1', '0', '100', '100', 3, '0', '15000', '16:18:32', 384, NULL, NULL, 'Satýþ', NULL, 'REFÝKA PORTAKALLI Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(6, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 4, '0', '0', '16:22:23', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(7, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 5, '0', '0', '16:23:56', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(9, '2020-10-19', 'MAMUL DEPO-1', '0', '100', '100', 4, '0', '3000', '16:25:31', 385, NULL, NULL, 'Satýþ', NULL, 'FUNDA AKBULUT Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(10, '2020-10-19', 'MAMUL DEPO-1', '0', '100', '100', 5, '0', '18000', '16:25:55', 386, NULL, NULL, 'Satýþ', NULL, 'FUNDA AKBULUT Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(11, '2020-10-20', 'MAMUL DEPO-1', '0', '100', '100', 4, '0', '3000', '14:12:26', 491, NULL, NULL, 'Satýþ', NULL, 'ELÝF POLAT Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(12, '2020-10-20', 'MAMUL DEPO-1', '0', '100', '100', 4, '0', '3000', '14:21:01', 493, NULL, NULL, 'Satýþ', NULL, 'ERMAN YADÝGAR Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(13, '2020-10-28', 'MAMUL DEPO-1', '0', '100', '100', 5, '0', '18000', '10:28:03', 1207, NULL, NULL, 'Satýþ', NULL, 'HASAN HÜSEYÝN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(14, '2020-10-28', 'MAMUL DEPO-1', '0', '100', '100', 4, '0', '3000', '10:28:20', 1208, NULL, NULL, 'Satýþ', NULL, 'HASAN HÜSEYÝN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(15, '2021-04-13', 'MAMUL DEPO-1', '0', '100', '100', 3, '0', '7800', '11:12:15', 4466, NULL, NULL, 'Satýþ', NULL, 'ÇOÞKUN UYGUN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(16, '2021-04-13', 'MAMUL DEPO-1', '0', '100', '100', 3, '0', '14300', '11:13:37', 4467, NULL, NULL, 'Satýþ', NULL, 'ÇOÞKUN UYGUN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(17, '2021-04-26', 'MAMUL DEPO-1', '0', '100', '100', 3, '0', '10000', '11:03:42', 4548, NULL, NULL, 'Satýþ', NULL, 'MEHMET ÖZDEMÝR  Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(18, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 6, '0', '0', '13:26:19', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(19, '2021-04-27', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '20000', '13:30:52', 4581, NULL, NULL, 'Satýþ', NULL, 'ASEL ÖZTORUN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(21, '2021-04-27', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '25000', '14:04:50', 4587, NULL, NULL, 'Satýþ', NULL, 'AYSEL DAÞ Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(23, '2021-04-27', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '21000', '14:14:48', 4589, NULL, NULL, 'Satýþ', NULL, 'AYÞE EÐÝLMEZ Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(24, '2021-04-28', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '5000', '09:16:05', 4600, NULL, NULL, 'Satýþ', NULL, 'BUKET GÜÇLÜ Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(25, '2021-04-28', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '15000', '12:37:38', 4604, NULL, NULL, 'Satýþ', NULL, 'BELMA YILMAZ  Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(26, '2021-05-12', 'MAMUL DEPO-1', '0', '300', '300', 6, '0', '17667', '11:19:47', 4621, NULL, NULL, 'Satýþ', NULL, 'ERCAN ÖZMEN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(27, '2021-05-20', 'MAMUL DEPO-1', '0', '200', '200', 6, '0', '16450', '11:52:29', 4641, NULL, NULL, 'Satýþ', NULL, 'SEZEN DERYALAR Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(28, '2021-05-21', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '5000', '15:53:01', 4650, NULL, NULL, 'Satýþ', NULL, 'SEVÝNÇ YALAP Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(29, '2021-05-21', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '14500', '18:29:43', 4654, NULL, NULL, 'Satýþ', NULL, 'BÜÞRA GÜDER Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(30, '2021-05-25', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '15400', '18:28:11', 4669, NULL, NULL, 'Satýþ', NULL, 'SÝBEL CERÝT Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(31, '2013-09-01', 'MAMUL DEPO-1', '0', '0', '0', 7, '0', '0', '19:00:52', NULL, NULL, NULL, 'Tanýmlama', NULL, 'Malzeme Tanýmlama', '', 0, '0', '0', '', 'False', NULL),
(32, '2021-05-28', 'MAMUL DEPO-1', '0', '100', '100', 7, '0', '12000', '19:01:14', 4684, NULL, NULL, 'Satýþ', NULL, 'YASEMÝN ÞENGEZER Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(33, '2021-06-01', 'MAMUL DEPO-1', '0', '100', '100', 7, '0', '12000', '15:58:08', 4690, NULL, NULL, 'Satýþ', NULL, 'ELÝF KOCA Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(35, '2021-06-01', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '25000', '15:59:20', 4691, NULL, NULL, 'Satýþ', NULL, 'ELÝF KOCA Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(36, '2021-06-16', 'MAMUL DEPO-1', '0', '100', '100', 4, '0', '3000', '12:09:04', 4737, NULL, NULL, 'Satýþ', NULL, 'SAÝME KARANFÝLDAÐI Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(37, '2021-06-18', 'MAMUL DEPO-1', '0', '100', '100', 7, '0', '9400', '15:27:07', 4743, NULL, NULL, 'Satýþ', NULL, 'SULTAN GEZÝCÝ Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(38, '2021-06-19', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '12000', '16:04:28', 4760, NULL, NULL, 'Satýþ', NULL, 'TUÐBA KONUK Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(39, '2021-06-30', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '18800', '15:54:14', 4817, NULL, NULL, 'Satýþ', NULL, 'ÜMMÜHAN POLAT Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(40, '2021-07-13', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '5000', '11:53:41', 4878, NULL, NULL, 'Satýþ', NULL, 'AYÞE ÝPEK ÖZER Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(43, '2021-07-31', 'MAMUL DEPO-1', '0', '200', '200', 6, '0', '20900', '17:09:24', 4956, NULL, NULL, 'Satýþ', NULL, 'YASEMÝN KÜÇÜK Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(44, '2021-07-31', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '19800', '17:09:31', 4957, NULL, NULL, 'Satýþ', NULL, 'YASEMÝN KÜÇÜK Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(45, '2021-08-07', 'MAMUL DEPO-1', '0', '100', '100', 6, '0', '12000', '10:24:12', 4977, NULL, NULL, 'Satýþ', NULL, 'MAYA HAÞHÝMOVA  Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(46, '2021-08-14', 'MAMUL DEPO-1', '0', '100', '100', 5, '0', '5000', '10:50:00', 4999, NULL, NULL, 'Satýþ', NULL, 'ZELÝHA BOZOÐLAN Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL),
(47, '2021-11-13', 'MAMUL DEPO-1', '0', '300', '300', 6, '0', '14500', '13:58:51', 5210, NULL, NULL, 'Satýþ', NULL, 'KÜBRA GENÇ Satýþ iþlemi', '', 0, '0', '0', '', 'False', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subeler`
--

CREATE TABLE `subeler` (
  `subeindex` int(3) NOT NULL,
  `subekodu` varchar(30) NOT NULL,
  `subetanimi` varchar(100) NOT NULL,
  `adresi` varchar(250) DEFAULT NULL,
  `sehir` varchar(100) DEFAULT NULL,
  `ilce` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taksitler`
--

CREATE TABLE `taksitler` (
  `taksitindex` int(3) NOT NULL,
  `taksittarihi` date NOT NULL,
  `taksitmiktari` varchar(10) NOT NULL,
  `musteri_kodu` int(3) DEFAULT NULL,
  `musteri_adi` varchar(100) DEFAULT NULL,
  `durumu` varchar(20) DEFAULT NULL,
  `aciklama` varchar(200) DEFAULT NULL,
  `birimi` varchar(10) DEFAULT NULL,
  `taksitkodu` varchar(30) DEFAULT NULL,
  `olusturan` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taslaklar`
--

CREATE TABLE `taslaklar` (
  `index` int(3) NOT NULL,
  `mesaj_basligi` varchar(100) NOT NULL,
  `icerik` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taslaklar`
--

INSERT INTO `taslaklar` (`index`, `mesaj_basligi`, `icerik`) VALUES
(8, 'BÜYÜK YAZ KAMPANYA', 'TÜM UYGULAMALARDA %50 YE VARAN ÝNDÝRÝMLERLE SÝZ DEGERLÝ MÜSTERÝLERÝMÝZÝ KLÝNÝÐÝMÝZE BEKLERÝZ.DERMOXY GÜZELLÝK VE ESTETÝK MERKEZÝ'),
(2, 'HOSGELDIN', 'BÝZÝ TERCÝH ETTÝÐÝNÝZ ÝÇÝN TEÞEKKÜR EDERÝZ.'),
(5, 'DOGUMGUNU', 'DOÐUM GÜNÜNÜZÜ KUTLARIZ.'),
(10, 'YENÝ YIL KAMPANYASI', '% 50\' YE VARAN ÝNDÝRÝMLERLE YENÝ YIL KAMPANYAMIZ BAÞLAMIÞTIR  SÝZ DEÐERLÝ DANIÞANLARIMIZI KLÝÐÝNÝMÝZE BEKLÝYORUZ..'),
(11, 'YENÝ YIL KAMPANYASI', '% 50\' YE VARAN ÝNDÝRÝMLERLE YENÝ YIL KAMPANYAMIZ BAÞLAMIÞTIR  SÝZ DEÐERLÝ DANIÞANLARIMIZI KLÝÐÝNÝMÝZE BEKLÝYORUZ..');

-- --------------------------------------------------------

--
-- Table structure for table `teklifalti`
--

CREATE TABLE `teklifalti` (
  `altsiparis_index` int(4) NOT NULL,
  `urunturu` varchar(20) NOT NULL,
  `durumu` varchar(30) DEFAULT NULL,
  `izleme` varchar(30) DEFAULT NULL,
  `faturano` varchar(30) DEFAULT NULL,
  `teklif_index` int(3) NOT NULL,
  `siparistanimi` varchar(100) NOT NULL,
  `stok_index` int(3) NOT NULL,
  `brfiyat` varchar(20) DEFAULT NULL,
  `miktar` varchar(10) DEFAULT NULL,
  `fiyatbirimi` varchar(10) DEFAULT NULL,
  `iskonto` varchar(10) DEFAULT NULL,
  `kdvorani` varchar(10) DEFAULT NULL,
  `aciklamalar` varchar(250) DEFAULT NULL,
  `malzemekaynagi` varchar(50) DEFAULT NULL,
  `en` varchar(10) DEFAULT NULL,
  `boy` varchar(10) DEFAULT NULL,
  `cap` varchar(10) DEFAULT NULL,
  `icetkalinligi` varchar(10) DEFAULT NULL,
  `etkalinligi` varchar(10) DEFAULT NULL,
  `bragirlik` varchar(10) DEFAULT NULL,
  `malzemesekli` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teklifdurumlari`
--

CREATE TABLE `teklifdurumlari` (
  `index` int(6) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `randevu` varchar(100) DEFAULT 'False',
  `aralik` int(1) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teklifler`
--

CREATE TABLE `teklifler` (
  `teklif_index` int(5) NOT NULL,
  `tekliftarihi` date NOT NULL,
  `musterikodu` varchar(50) DEFAULT NULL,
  `musteriadi` varchar(150) DEFAULT NULL,
  `durumu` varchar(50) DEFAULT NULL,
  `onaytarihi` date DEFAULT NULL,
  `aciklamalar` varchar(250) DEFAULT NULL,
  `siparisadresi` varchar(250) DEFAULT NULL,
  `sevkadresi` varchar(250) DEFAULT NULL,
  `teklifkodu` varchar(20) NOT NULL,
  `teklifturu` varchar(50) DEFAULT NULL,
  `kdvorani` varchar(10) DEFAULT NULL,
  `aratoplam` varchar(0) DEFAULT NULL,
  `kdv` varchar(0) DEFAULT NULL,
  `geneltoplam` varchar(0) DEFAULT NULL,
  `anlasilantutar` varchar(10) DEFAULT NULL,
  `odeme_sekli` varchar(20) DEFAULT NULL,
  `caritanimi` varchar(100) DEFAULT NULL,
  `teklifa` text DEFAULT NULL,
  `teklifimza` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tekliftablo`
--

CREATE TABLE `tekliftablo` (
  `index` int(2) NOT NULL,
  `referansno` varchar(25) DEFAULT NULL,
  `onayliint` varchar(10) DEFAULT NULL,
  `teklifkodu` varchar(30) NOT NULL,
  `firma_kodu` varchar(20) DEFAULT NULL,
  `yetkili` varchar(50) DEFAULT NULL,
  `firma_adi` varchar(100) NOT NULL,
  `teklif_tarihi` date NOT NULL,
  `durumu` varchar(20) DEFAULT NULL,
  `tutari` varchar(15) DEFAULT '0',
  `kdv` varchar(15) DEFAULT '0',
  `aratoplam` varchar(15) DEFAULT NULL,
  `onay_tarih` date DEFAULT NULL,
  `toplam` varchar(10) DEFAULT '0',
  `odeme_sekli` varchar(50) DEFAULT NULL,
  `olusturan` varchar(40) DEFAULT NULL,
  `iskonto` varchar(15) DEFAULT '0',
  `onaylitutar` varchar(15) DEFAULT NULL,
  `topint` int(2) DEFAULT 0,
  `kdvint` int(2) DEFAULT NULL,
  `araint` int(2) DEFAULT NULL,
  `onayint` int(2) DEFAULT NULL,
  `iskint` int(2) DEFAULT NULL,
  `teslimat` varchar(200) DEFAULT NULL,
  `aciklamalar` varchar(200) DEFAULT NULL,
  `eurotutar` varchar(10) DEFAULT NULL,
  `usdtutar` varchar(10) DEFAULT NULL,
  `oran` varchar(10) DEFAULT NULL,
  `imza` text DEFAULT NULL,
  `teklifyazisi` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teklifturleri`
--

CREATE TABLE `teklifturleri` (
  `index` int(6) NOT NULL,
  `tanim` varchar(100) NOT NULL,
  `unite` varchar(100) DEFAULT NULL,
  `randevu` varchar(100) DEFAULT 'False',
  `aralik` int(1) DEFAULT NULL,
  `aciklama` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teklif_siparis`
--

CREATE TABLE `teklif_siparis` (
  `index` int(2) NOT NULL,
  `stok_kodu` varchar(20) NOT NULL,
  `stok_adi` varchar(100) NOT NULL,
  `belge_no` varchar(10) DEFAULT NULL,
  `birim_fiyat` varchar(10) NOT NULL,
  `kdv` varchar(10) NOT NULL DEFAULT '',
  `iskonto` varchar(10) NOT NULL,
  `miktar` varchar(10) NOT NULL,
  `firma_no` int(11) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `barkodno` varchar(100) DEFAULT NULL,
  `satir_tutari` varchar(10) DEFAULT '0',
  `gidermi` varchar(20) DEFAULT 'False',
  `onayli_fiyat` varchar(10) DEFAULT NULL,
  `onay_tarih` date DEFAULT NULL,
  `durumu` varchar(50) DEFAULT NULL,
  `kdvdahil` varchar(20) DEFAULT 'False',
  `onayli_tutar` varchar(10) DEFAULT NULL,
  `urun_birim` varchar(20) DEFAULT NULL,
  `termin` int(2) DEFAULT NULL,
  `stokturu` varchar(20) DEFAULT NULL,
  `fiyat_birimi` varchar(20) DEFAULT NULL,
  `malzemekaynagi` varchar(50) DEFAULT NULL,
  `malzemesekli` varchar(30) DEFAULT NULL,
  `en` varchar(10) DEFAULT NULL,
  `boy` varchar(10) DEFAULT NULL,
  `etkalinligi` varchar(10) DEFAULT NULL,
  `icetkalinligi` varchar(10) DEFAULT NULL,
  `cap` varchar(10) DEFAULT NULL,
  `bragirlik` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `terminhesaplayici`
--

CREATE TABLE `terminhesaplayici` (
  `hesapindex` int(3) NOT NULL,
  `otomofisid` varchar(30) NOT NULL,
  `urunkodu` varchar(30) NOT NULL,
  `miktar` varchar(10) NOT NULL,
  `baslamatarihi` date NOT NULL,
  `baslamasaati` time NOT NULL,
  `enuygunkaynak` varchar(10) DEFAULT NULL,
  `partimiktari` varchar(10) DEFAULT NULL,
  `sapmaorani` varchar(10) DEFAULT NULL,
  `teksefer` varchar(10) DEFAULT NULL,
  `yazdirildi` int(3) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `unitetanimlari`
--

CREATE TABLE `unitetanimlari` (
  `uniteindex` int(3) NOT NULL,
  `unitekodu` varchar(20) NOT NULL,
  `unitetanimi` varchar(100) NOT NULL,
  `odatanimi` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `uniteuygulama`
--

CREATE TABLE `uniteuygulama` (
  `index` int(3) NOT NULL,
  `uniteindex` int(3) NOT NULL,
  `uygulamaindex` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ureticiler`
--

CREATE TABLE `ureticiler` (
  `index` int(3) NOT NULL,
  `ureticiadi` varchar(150) NOT NULL,
  `otomobil` varchar(20) DEFAULT NULL,
  `kamyon_bus` varchar(20) DEFAULT NULL,
  `ismakinesi` varchar(20) DEFAULT NULL,
  `rakipmi` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `uretimprosesleri`
--

CREATE TABLE `uretimprosesleri` (
  `index` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `prosesindex` int(3) NOT NULL,
  `sabitsure` int(4) DEFAULT NULL,
  `sabitperiyot` varchar(10) DEFAULT NULL,
  `degiskensure` varchar(4) DEFAULT NULL,
  `degiskenperiyot` varchar(10) DEFAULT '',
  `kaynakindex` int(3) DEFAULT NULL,
  `kaynakturu` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `urunagaci`
--

CREATE TABLE `urunagaci` (
  `index` int(3) NOT NULL,
  `malzemeindex` int(3) NOT NULL,
  `miktar` varchar(10) NOT NULL,
  `birimi` varchar(20) DEFAULT NULL,
  `altmalzemeindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `uyarilar`
--

CREATE TABLE `uyarilar` (
  `index` int(3) NOT NULL,
  `siparisindex` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vardiyalar`
--

CREATE TABLE `vardiyalar` (
  `vardiyaindex` int(3) NOT NULL,
  `vardiyakodu` varchar(20) NOT NULL,
  `vardiyatanimi` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vardiyalar`
--

INSERT INTO `vardiyalar` (`vardiyaindex`, `vardiyakodu`, `vardiyatanimi`) VALUES
(1, '00001', 'STANDART MESAÝ');

-- --------------------------------------------------------

--
-- Table structure for table `vardiyazamanlari`
--

CREATE TABLE `vardiyazamanlari` (
  `zamanindex` int(3) NOT NULL,
  `vardiyaindex` int(3) NOT NULL,
  `gun` varchar(20) NOT NULL,
  `baslama` time DEFAULT NULL,
  `bitis` time DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vardiyazamanlari`
--

INSERT INTO `vardiyazamanlari` (`zamanindex`, `vardiyaindex`, `gun`, `baslama`, `bitis`) VALUES
(1, 1, 'Pazartesi', '08:00:00', '18:00:00'),
(2, 1, 'Salý', '08:00:00', '18:00:00'),
(3, 1, 'Çarþamba', '08:00:00', '18:00:00'),
(4, 1, 'Perþembe', '08:00:00', '18:00:00'),
(5, 1, 'Cuma', '08:00:00', '18:00:00'),
(8, 2, 'Pazartesi', NULL, NULL),
(9, 2, 'Salý', NULL, NULL),
(10, 2, 'Çarþamba', NULL, NULL),
(11, 2, 'Perþembe', NULL, NULL),
(12, 2, 'Cuma', NULL, NULL),
(13, 2, 'Cumartesi', NULL, NULL),
(14, 2, 'Pazar', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vergitanimlari`
--

CREATE TABLE `vergitanimlari` (
  `VergiTanim_index` int(2) NOT NULL,
  `VergiKodu` varchar(50) NOT NULL,
  `VergiAciklamasi` varchar(100) NOT NULL,
  `VergiOrani` varchar(10) NOT NULL DEFAULT '0',
  `TasimaVergisi` varchar(20) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vergitanimlari`
--

INSERT INTO `vergitanimlari` (`VergiTanim_index`, `VergiKodu`, `VergiAciklamasi`, `VergiOrani`, `TasimaVergisi`) VALUES
(1, 'KDV 18', 'Türkiye Katma Deðer Vergisi', '18', 'Hayýr'),
(9, 'KDV  0', 'Vergisiz', '0', 'Hayýr'),
(10, 'KDV 1', 'KDV %1', '1', '0'),
(11, 'KDV 8', 'KDV %8', '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `yedekler`
--

CREATE TABLE `yedekler` (
  `index` int(3) NOT NULL,
  `tarih` varchar(23) NOT NULL,
  `saat` varchar(23) NOT NULL,
  `yedek_yeri` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yedekler`
--

INSERT INTO `yedekler` (`index`, `tarih`, `saat`, `yedek_yeri`) VALUES
(1, '01.10.2016', '11:19:55', 'E:\\mango güzellik salonu pro'),
(2, '4.01.2017', '15:01:00', 'D:\\YEDEK'),
(3, '4.01.2017', '15:02:05', 'D:\\YEDEK'),
(4, '4.01.2017', '16:01:10', 'D:\\ydk'),
(5, '4.01.2017', '16:03:33', 'D:\\ydk'),
(6, '04.01.2017', '16:20:40', 'D:\\ydk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aktarimlar`
--
ALTER TABLE `aktarimlar`
  ADD PRIMARY KEY (`aktarim_index`);

--
-- Indexes for table `ambartanimlari`
--
ALTER TABLE `ambartanimlari`
  ADD PRIMARY KEY (`ambarindex`);

--
-- Indexes for table `aracturleri`
--
ALTER TABLE `aracturleri`
  ADD PRIMARY KEY (`aracturindex`);

--
-- Indexes for table `atamalar`
--
ALTER TABLE `atamalar`
  ADD PRIMARY KEY (`index_atamalar`);

--
-- Indexes for table `bankaislemleri`
--
ALTER TABLE `bankaislemleri`
  ADD PRIMARY KEY (`bankaislemindex`);

--
-- Indexes for table `bankatanimlari`
--
ALTER TABLE `bankatanimlari`
  ADD PRIMARY KEY (`bankaTanimlari_index`);

--
-- Indexes for table `bekleyenler`
--
ALTER TABLE `bekleyenler`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `bildirimler`
--
ALTER TABLE `bildirimler`
  ADD PRIMARY KEY (`index_bildirimler`);

--
-- Indexes for table `bloklar`
--
ALTER TABLE `bloklar`
  ADD PRIMARY KEY (`bokindex`);

--
-- Indexes for table `bloklar_alti`
--
ALTER TABLE `bloklar_alti`
  ADD PRIMARY KEY (`altindex`);

--
-- Indexes for table `bolgeler`
--
ALTER TABLE `bolgeler`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `bordroalti`
--
ALTER TABLE `bordroalti`
  ADD PRIMARY KEY (`altindex`);

--
-- Indexes for table `bordrolar`
--
ALTER TABLE `bordrolar`
  ADD PRIMARY KEY (`bordroindex`);

--
-- Indexes for table `carigruplari`
--
ALTER TABLE `carigruplari`
  ADD PRIMARY KEY (`CariGrubu_index`);

--
-- Indexes for table `carihesaphareketleri`
--
ALTER TABLE `carihesaphareketleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `carikontaklari`
--
ALTER TABLE `carikontaklari`
  ADD PRIMARY KEY (`kontakindex`);

--
-- Indexes for table `cariler`
--
ALTER TABLE `cariler`
  ADD PRIMARY KEY (`cariindex`);

--
-- Indexes for table `ceksenet`
--
ALTER TABLE `ceksenet`
  ADD PRIMARY KEY (`cekindex`);

--
-- Indexes for table `cevrimiciler`
--
ALTER TABLE `cevrimiciler`
  ADD PRIMARY KEY (`cevrimindex`);

--
-- Indexes for table `dagitimlar`
--
ALTER TABLE `dagitimlar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `demirbaslar`
--
ALTER TABLE `demirbaslar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `departmanlar`
--
ALTER TABLE `departmanlar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `dersler`
--
ALTER TABLE `dersler`
  ADD PRIMARY KEY (`index_dersler`);

--
-- Indexes for table `destek`
--
ALTER TABLE `destek`
  ADD PRIMARY KEY (`destekindex`);

--
-- Indexes for table `donemler`
--
ALTER TABLE `donemler`
  ADD PRIMARY KEY (`donemindex`);

--
-- Indexes for table `doviz_tanimlari`
--
ALTER TABLE `doviz_tanimlari`
  ADD PRIMARY KEY (`doviz_kodu`);

--
-- Indexes for table `duyurular`
--
ALTER TABLE `duyurular`
  ADD PRIMARY KEY (`duyurindex`);

--
-- Indexes for table `ektablo`
--
ALTER TABLE `ektablo`
  ADD PRIMARY KEY (`ektabloindex`);

--
-- Indexes for table `faturaalti`
--
ALTER TABLE `faturaalti`
  ADD PRIMARY KEY (`alttanimindex`);

--
-- Indexes for table `faturalar`
--
ALTER TABLE `faturalar`
  ADD PRIMARY KEY (`faturaindex`);

--
-- Indexes for table `filtreler`
--
ALTER TABLE `filtreler`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `firmabilgileri`
--
ALTER TABLE `firmabilgileri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `fiyatlar`
--
ALTER TABLE `fiyatlar`
  ADD PRIMARY KEY (`fiyatindex`);

--
-- Indexes for table `formalanlari`
--
ALTER TABLE `formalanlari`
  ADD PRIMARY KEY (`alan_index`);

--
-- Indexes for table `formlar`
--
ALTER TABLE `formlar`
  ADD PRIMARY KEY (`form_index`);

--
-- Indexes for table `gelirgrubu`
--
ALTER TABLE `gelirgrubu`
  ADD PRIMARY KEY (`gelirgrubuindex`);

--
-- Indexes for table `gideryerleri`
--
ALTER TABLE `gideryerleri`
  ADD PRIMARY KEY (`giderindex`);

--
-- Indexes for table `giriscikislar`
--
ALTER TABLE `giriscikislar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `gunler`
--
ALTER TABLE `gunler`
  ADD PRIMARY KEY (`index_gunler`);

--
-- Indexes for table `gunluk_kur`
--
ALTER TABLE `gunluk_kur`
  ADD PRIMARY KEY (`indeks`),
  ADD KEY `tarih` (`tarih`);

--
-- Indexes for table `hareketler`
--
ALTER TABLE `hareketler`
  ADD PRIMARY KEY (`index_hareketler`);

--
-- Indexes for table `hizmettanimlari`
--
ALTER TABLE `hizmettanimlari`
  ADD PRIMARY KEY (`hizmetindex`);

--
-- Indexes for table `ilaclar`
--
ALTER TABLE `ilaclar`
  ADD PRIMARY KEY (`ilacindex`);

--
-- Indexes for table `imeinolari`
--
ALTER TABLE `imeinolari`
  ADD PRIMARY KEY (`imei_index`);

--
-- Indexes for table `irsaliyealti`
--
ALTER TABLE `irsaliyealti`
  ADD PRIMARY KEY (`alttanimindex`);

--
-- Indexes for table `irsaliyeler`
--
ALTER TABLE `irsaliyeler`
  ADD PRIMARY KEY (`irsaliyeindex`);

--
-- Indexes for table `isemirleri`
--
ALTER TABLE `isemirleri`
  ADD PRIMARY KEY (`isemriindex`);

--
-- Indexes for table `isemrigirdileri`
--
ALTER TABLE `isemrigirdileri`
  ADD PRIMARY KEY (`girdiindex`);

--
-- Indexes for table `islemler`
--
ALTER TABLE `islemler`
  ADD PRIMARY KEY (`islem_index`);

--
-- Indexes for table `islemturleri`
--
ALTER TABLE `islemturleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kampanyaicerik`
--
ALTER TABLE `kampanyaicerik`
  ADD PRIMARY KEY (`icerikindex`);

--
-- Indexes for table `kampanyalar`
--
ALTER TABLE `kampanyalar`
  ADD PRIMARY KEY (`kampanyaindex`);

--
-- Indexes for table `karisimtablosu`
--
ALTER TABLE `karisimtablosu`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kartlar`
--
ALTER TABLE `kartlar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kasaduzeltmesi`
--
ALTER TABLE `kasaduzeltmesi`
  ADD PRIMARY KEY (`duzeltindex`);

--
-- Indexes for table `kasaislemleri`
--
ALTER TABLE `kasaislemleri`
  ADD PRIMARY KEY (`kasaislemindex`);

--
-- Indexes for table `kasatanimlari`
--
ALTER TABLE `kasatanimlari`
  ADD PRIMARY KEY (`kasaindex`);

--
-- Indexes for table `kasateslimler`
--
ALTER TABLE `kasateslimler`
  ADD PRIMARY KEY (`teslimindex`);

--
-- Indexes for table `kayitlisorgular`
--
ALTER TABLE `kayitlisorgular`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kaynakdokumanlari`
--
ALTER TABLE `kaynakdokumanlari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kaynaknotlari`
--
ALTER TABLE `kaynaknotlari`
  ADD PRIMARY KEY (`kaynaknotindex`);

--
-- Indexes for table `kaynakoperatorleri`
--
ALTER TABLE `kaynakoperatorleri`
  ADD PRIMARY KEY (`operatorindex`);

--
-- Indexes for table `kaynakprosesyetkinlik`
--
ALTER TABLE `kaynakprosesyetkinlik`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kaynaktanimlari`
--
ALTER TABLE `kaynaktanimlari`
  ADD PRIMARY KEY (`kaynakindex`);

--
-- Indexes for table `kimlikbilgileri`
--
ALTER TABLE `kimlikbilgileri`
  ADD PRIMARY KEY (`kimlikindex`);

--
-- Indexes for table `kisayollar`
--
ALTER TABLE `kisayollar`
  ADD PRIMARY KEY (`kisayolindex`);

--
-- Indexes for table `konumlar`
--
ALTER TABLE `konumlar`
  ADD PRIMARY KEY (`konum_index`);

--
-- Indexes for table `kredikartiislemleri`
--
ALTER TABLE `kredikartiislemleri`
  ADD PRIMARY KEY (`kartislemindex`);

--
-- Indexes for table `kredikartlari`
--
ALTER TABLE `kredikartlari`
  ADD PRIMARY KEY (`kartindex`);

--
-- Indexes for table `kullanicierisim`
--
ALTER TABLE `kullanicierisim`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `kullanicilar`
--
ALTER TABLE `kullanicilar`
  ADD PRIMARY KEY (`user_indeks`);

--
-- Indexes for table `kullaniciloglari`
--
ALTER TABLE `kullaniciloglari`
  ADD PRIMARY KEY (`logindex`);

--
-- Indexes for table `maliyethesaplari`
--
ALTER TABLE `maliyethesaplari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `malzemealtgruplari`
--
ALTER TABLE `malzemealtgruplari`
  ADD PRIMARY KEY (`altgrupindex`);

--
-- Indexes for table `malzemebarkodlari`
--
ALTER TABLE `malzemebarkodlari`
  ADD PRIMARY KEY (`barkodindex`);

--
-- Indexes for table `malzemefiyatlari`
--
ALTER TABLE `malzemefiyatlari`
  ADD PRIMARY KEY (`fiyatindex`);

--
-- Indexes for table `malzemegruplari`
--
ALTER TABLE `malzemegruplari`
  ADD PRIMARY KEY (`malzemegrupindex`);

--
-- Indexes for table `malzemeler`
--
ALTER TABLE `malzemeler`
  ADD PRIMARY KEY (`malzemeindex`);

--
-- Indexes for table `malzemeresimleri`
--
ALTER TABLE `malzemeresimleri`
  ADD PRIMARY KEY (`resimindex`);

--
-- Indexes for table `malzemesiniflari`
--
ALTER TABLE `malzemesiniflari`
  ADD PRIMARY KEY (`sinifindex`);

--
-- Indexes for table `markatanimlari`
--
ALTER TABLE `markatanimlari`
  ADD PRIMARY KEY (`markaindex`);

--
-- Indexes for table `menseitanimlari`
--
ALTER TABLE `menseitanimlari`
  ADD PRIMARY KEY (`menseiindex`);

--
-- Indexes for table `menugruplari`
--
ALTER TABLE `menugruplari`
  ADD PRIMARY KEY (`menindex`);

--
-- Indexes for table `mobilboard`
--
ALTER TABLE `mobilboard`
  ADD PRIMARY KEY (`mesaj_index`);

--
-- Indexes for table `modeller`
--
ALTER TABLE `modeller`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `modeltipleri`
--
ALTER TABLE `modeltipleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `modelurunbaglama`
--
ALTER TABLE `modelurunbaglama`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `mustahsilkisileri`
--
ALTER TABLE `mustahsilkisileri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `mustahsiller`
--
ALTER TABLE `mustahsiller`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `musterikonumlari`
--
ALTER TABLE `musterikonumlari`
  ADD PRIMARY KEY (`konum_index`);

--
-- Indexes for table `musterinotlari`
--
ALTER TABLE `musterinotlari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `odemeterimleri`
--
ALTER TABLE `odemeterimleri`
  ADD PRIMARY KEY (`OdemeTerim_index`);

--
-- Indexes for table `odemevadeleri`
--
ALTER TABLE `odemevadeleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `ogrenciler`
--
ALTER TABLE `ogrenciler`
  ADD PRIMARY KEY (`index_ogrenciler`);

--
-- Indexes for table `ogretmenler`
--
ALTER TABLE `ogretmenler`
  ADD PRIMARY KEY (`index_ogretmenler`);

--
-- Indexes for table `operasyongunleri`
--
ALTER TABLE `operasyongunleri`
  ADD PRIMARY KEY (`gunindex`);

--
-- Indexes for table `operasyonlar`
--
ALTER TABLE `operasyonlar`
  ADD PRIMARY KEY (`operasyonindex`);

--
-- Indexes for table `ortaktanimlar`
--
ALTER TABLE `ortaktanimlar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `paketgirisleri`
--
ALTER TABLE `paketgirisleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `paketler`
--
ALTER TABLE `paketler`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `paketuygulama`
--
ALTER TABLE `paketuygulama`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `personelhareketleri`
--
ALTER TABLE `personelhareketleri`
  ADD PRIMARY KEY (`harperindex`);

--
-- Indexes for table `plasiyertanimlari`
--
ALTER TABLE `plasiyertanimlari`
  ADD PRIMARY KEY (`plasiyerindex`);

--
-- Indexes for table `postanimlari`
--
ALTER TABLE `postanimlari`
  ADD PRIMARY KEY (`posindex`);

--
-- Indexes for table `prosestanimlari`
--
ALTER TABLE `prosestanimlari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `randevucinsleri`
--
ALTER TABLE `randevucinsleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `randevular`
--
ALTER TABLE `randevular`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `recetealti`
--
ALTER TABLE `recetealti`
  ADD PRIMARY KEY (`recetealtindex`);

--
-- Indexes for table `receteler`
--
ALTER TABLE `receteler`
  ADD PRIMARY KEY (`receteindex`);

--
-- Indexes for table `sepetler`
--
ALTER TABLE `sepetler`
  ADD PRIMARY KEY (`alttanimindex`);

--
-- Indexes for table `servisaraclari`
--
ALTER TABLE `servisaraclari`
  ADD UNIQUE KEY `plakano` (`plakano`);

--
-- Indexes for table `servisdurumlari`
--
ALTER TABLE `servisdurumlari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `smsayar`
--
ALTER TABLE `smsayar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `sorular`
--
ALTER TABLE `sorular`
  ADD PRIMARY KEY (`index_sorular`);

--
-- Indexes for table `stokbirimleri`
--
ALTER TABLE `stokbirimleri`
  ADD PRIMARY KEY (`stokbirimi_index`);

--
-- Indexes for table `stokhareketleri`
--
ALTER TABLE `stokhareketleri`
  ADD PRIMARY KEY (`hareketindex`);

--
-- Indexes for table `subeler`
--
ALTER TABLE `subeler`
  ADD PRIMARY KEY (`subeindex`);

--
-- Indexes for table `taksitler`
--
ALTER TABLE `taksitler`
  ADD PRIMARY KEY (`taksitindex`);

--
-- Indexes for table `taslaklar`
--
ALTER TABLE `taslaklar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `teklifalti`
--
ALTER TABLE `teklifalti`
  ADD PRIMARY KEY (`altsiparis_index`);

--
-- Indexes for table `teklifdurumlari`
--
ALTER TABLE `teklifdurumlari`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `teklifler`
--
ALTER TABLE `teklifler`
  ADD PRIMARY KEY (`teklif_index`);

--
-- Indexes for table `tekliftablo`
--
ALTER TABLE `tekliftablo`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `teklifturleri`
--
ALTER TABLE `teklifturleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `teklif_siparis`
--
ALTER TABLE `teklif_siparis`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `terminhesaplayici`
--
ALTER TABLE `terminhesaplayici`
  ADD PRIMARY KEY (`hesapindex`);

--
-- Indexes for table `unitetanimlari`
--
ALTER TABLE `unitetanimlari`
  ADD PRIMARY KEY (`uniteindex`);

--
-- Indexes for table `uniteuygulama`
--
ALTER TABLE `uniteuygulama`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `ureticiler`
--
ALTER TABLE `ureticiler`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `uretimprosesleri`
--
ALTER TABLE `uretimprosesleri`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `urunagaci`
--
ALTER TABLE `urunagaci`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `uyarilar`
--
ALTER TABLE `uyarilar`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `vardiyalar`
--
ALTER TABLE `vardiyalar`
  ADD PRIMARY KEY (`vardiyaindex`);

--
-- Indexes for table `vardiyazamanlari`
--
ALTER TABLE `vardiyazamanlari`
  ADD PRIMARY KEY (`zamanindex`);

--
-- Indexes for table `vergitanimlari`
--
ALTER TABLE `vergitanimlari`
  ADD PRIMARY KEY (`VergiTanim_index`);

--
-- Indexes for table `yedekler`
--
ALTER TABLE `yedekler`
  ADD PRIMARY KEY (`index`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aktarimlar`
--
ALTER TABLE `aktarimlar`
  MODIFY `aktarim_index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ambartanimlari`
--
ALTER TABLE `ambartanimlari`
  MODIFY `ambarindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `aracturleri`
--
ALTER TABLE `aracturleri`
  MODIFY `aracturindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `atamalar`
--
ALTER TABLE `atamalar`
  MODIFY `index_atamalar` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bankaislemleri`
--
ALTER TABLE `bankaislemleri`
  MODIFY `bankaislemindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bankatanimlari`
--
ALTER TABLE `bankatanimlari`
  MODIFY `bankaTanimlari_index` smallint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `bekleyenler`
--
ALTER TABLE `bekleyenler`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bildirimler`
--
ALTER TABLE `bildirimler`
  MODIFY `index_bildirimler` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloklar`
--
ALTER TABLE `bloklar`
  MODIFY `bokindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `bloklar_alti`
--
ALTER TABLE `bloklar_alti`
  MODIFY `altindex` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=375;

--
-- AUTO_INCREMENT for table `bolgeler`
--
ALTER TABLE `bolgeler`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bordroalti`
--
ALTER TABLE `bordroalti`
  MODIFY `altindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bordrolar`
--
ALTER TABLE `bordrolar`
  MODIFY `bordroindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `carigruplari`
--
ALTER TABLE `carigruplari`
  MODIFY `CariGrubu_index` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `carihesaphareketleri`
--
ALTER TABLE `carihesaphareketleri`
  MODIFY `index` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `carikontaklari`
--
ALTER TABLE `carikontaklari`
  MODIFY `kontakindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cariler`
--
ALTER TABLE `cariler`
  MODIFY `cariindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ceksenet`
--
ALTER TABLE `ceksenet`
  MODIFY `cekindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cevrimiciler`
--
ALTER TABLE `cevrimiciler`
  MODIFY `cevrimindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dagitimlar`
--
ALTER TABLE `dagitimlar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `demirbaslar`
--
ALTER TABLE `demirbaslar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departmanlar`
--
ALTER TABLE `departmanlar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `dersler`
--
ALTER TABLE `dersler`
  MODIFY `index_dersler` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `destek`
--
ALTER TABLE `destek`
  MODIFY `destekindex` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `donemler`
--
ALTER TABLE `donemler`
  MODIFY `donemindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `doviz_tanimlari`
--
ALTER TABLE `doviz_tanimlari`
  MODIFY `doviz_kodu` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `duyurular`
--
ALTER TABLE `duyurular`
  MODIFY `duyurindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ektablo`
--
ALTER TABLE `ektablo`
  MODIFY `ektabloindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4434;

--
-- AUTO_INCREMENT for table `faturaalti`
--
ALTER TABLE `faturaalti`
  MODIFY `alttanimindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `faturalar`
--
ALTER TABLE `faturalar`
  MODIFY `faturaindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `filtreler`
--
ALTER TABLE `filtreler`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9514;

--
-- AUTO_INCREMENT for table `firmabilgileri`
--
ALTER TABLE `firmabilgileri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fiyatlar`
--
ALTER TABLE `fiyatlar`
  MODIFY `fiyatindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `formalanlari`
--
ALTER TABLE `formalanlari`
  MODIFY `alan_index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `formlar`
--
ALTER TABLE `formlar`
  MODIFY `form_index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `gelirgrubu`
--
ALTER TABLE `gelirgrubu`
  MODIFY `gelirgrubuindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `gideryerleri`
--
ALTER TABLE `gideryerleri`
  MODIFY `giderindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `giriscikislar`
--
ALTER TABLE `giriscikislar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gunler`
--
ALTER TABLE `gunler`
  MODIFY `index_gunler` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gunluk_kur`
--
ALTER TABLE `gunluk_kur`
  MODIFY `indeks` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1252;

--
-- AUTO_INCREMENT for table `hareketler`
--
ALTER TABLE `hareketler`
  MODIFY `index_hareketler` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hizmettanimlari`
--
ALTER TABLE `hizmettanimlari`
  MODIFY `hizmetindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `ilaclar`
--
ALTER TABLE `ilaclar`
  MODIFY `ilacindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imeinolari`
--
ALTER TABLE `imeinolari`
  MODIFY `imei_index` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `irsaliyealti`
--
ALTER TABLE `irsaliyealti`
  MODIFY `alttanimindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `irsaliyeler`
--
ALTER TABLE `irsaliyeler`
  MODIFY `irsaliyeindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `isemirleri`
--
ALTER TABLE `isemirleri`
  MODIFY `isemriindex` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `isemrigirdileri`
--
ALTER TABLE `isemrigirdileri`
  MODIFY `girdiindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `islemler`
--
ALTER TABLE `islemler`
  MODIFY `islem_index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `islemturleri`
--
ALTER TABLE `islemturleri`
  MODIFY `index` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kampanyaicerik`
--
ALTER TABLE `kampanyaicerik`
  MODIFY `icerikindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kampanyalar`
--
ALTER TABLE `kampanyalar`
  MODIFY `kampanyaindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `karisimtablosu`
--
ALTER TABLE `karisimtablosu`
  MODIFY `index` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kartlar`
--
ALTER TABLE `kartlar`
  MODIFY `index` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `kasaduzeltmesi`
--
ALTER TABLE `kasaduzeltmesi`
  MODIFY `duzeltindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kasaislemleri`
--
ALTER TABLE `kasaislemleri`
  MODIFY `kasaislemindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kasatanimlari`
--
ALTER TABLE `kasatanimlari`
  MODIFY `kasaindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `kasateslimler`
--
ALTER TABLE `kasateslimler`
  MODIFY `teslimindex` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kayitlisorgular`
--
ALTER TABLE `kayitlisorgular`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `kaynakdokumanlari`
--
ALTER TABLE `kaynakdokumanlari`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kaynaknotlari`
--
ALTER TABLE `kaynaknotlari`
  MODIFY `kaynaknotindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kaynakoperatorleri`
--
ALTER TABLE `kaynakoperatorleri`
  MODIFY `operatorindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kaynakprosesyetkinlik`
--
ALTER TABLE `kaynakprosesyetkinlik`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kaynaktanimlari`
--
ALTER TABLE `kaynaktanimlari`
  MODIFY `kaynakindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kimlikbilgileri`
--
ALTER TABLE `kimlikbilgileri`
  MODIFY `kimlikindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kisayollar`
--
ALTER TABLE `kisayollar`
  MODIFY `kisayolindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `konumlar`
--
ALTER TABLE `konumlar`
  MODIFY `konum_index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kredikartiislemleri`
--
ALTER TABLE `kredikartiislemleri`
  MODIFY `kartislemindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kredikartlari`
--
ALTER TABLE `kredikartlari`
  MODIFY `kartindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kullanicierisim`
--
ALTER TABLE `kullanicierisim`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3571;

--
-- AUTO_INCREMENT for table `kullanicilar`
--
ALTER TABLE `kullanicilar`
  MODIFY `user_indeks` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `kullaniciloglari`
--
ALTER TABLE `kullaniciloglari`
  MODIFY `logindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `maliyethesaplari`
--
ALTER TABLE `maliyethesaplari`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `malzemealtgruplari`
--
ALTER TABLE `malzemealtgruplari`
  MODIFY `altgrupindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `malzemebarkodlari`
--
ALTER TABLE `malzemebarkodlari`
  MODIFY `barkodindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `malzemefiyatlari`
--
ALTER TABLE `malzemefiyatlari`
  MODIFY `fiyatindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `malzemegruplari`
--
ALTER TABLE `malzemegruplari`
  MODIFY `malzemegrupindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `malzemeler`
--
ALTER TABLE `malzemeler`
  MODIFY `malzemeindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `malzemeresimleri`
--
ALTER TABLE `malzemeresimleri`
  MODIFY `resimindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `malzemesiniflari`
--
ALTER TABLE `malzemesiniflari`
  MODIFY `sinifindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `markatanimlari`
--
ALTER TABLE `markatanimlari`
  MODIFY `markaindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `menseitanimlari`
--
ALTER TABLE `menseitanimlari`
  MODIFY `menseiindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menugruplari`
--
ALTER TABLE `menugruplari`
  MODIFY `menindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `mobilboard`
--
ALTER TABLE `mobilboard`
  MODIFY `mesaj_index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `modeller`
--
ALTER TABLE `modeller`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `modeltipleri`
--
ALTER TABLE `modeltipleri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `modelurunbaglama`
--
ALTER TABLE `modelurunbaglama`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mustahsilkisileri`
--
ALTER TABLE `mustahsilkisileri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mustahsiller`
--
ALTER TABLE `mustahsiller`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `musterikonumlari`
--
ALTER TABLE `musterikonumlari`
  MODIFY `konum_index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `musterinotlari`
--
ALTER TABLE `musterinotlari`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `odemeterimleri`
--
ALTER TABLE `odemeterimleri`
  MODIFY `OdemeTerim_index` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `odemevadeleri`
--
ALTER TABLE `odemevadeleri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ogrenciler`
--
ALTER TABLE `ogrenciler`
  MODIFY `index_ogrenciler` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ogretmenler`
--
ALTER TABLE `ogretmenler`
  MODIFY `index_ogretmenler` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operasyongunleri`
--
ALTER TABLE `operasyongunleri`
  MODIFY `gunindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operasyonlar`
--
ALTER TABLE `operasyonlar`
  MODIFY `operasyonindex` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ortaktanimlar`
--
ALTER TABLE `ortaktanimlar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `paketgirisleri`
--
ALTER TABLE `paketgirisleri`
  MODIFY `index` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `paketler`
--
ALTER TABLE `paketler`
  MODIFY `index` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=425;

--
-- AUTO_INCREMENT for table `paketuygulama`
--
ALTER TABLE `paketuygulama`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `personelhareketleri`
--
ALTER TABLE `personelhareketleri`
  MODIFY `harperindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `plasiyertanimlari`
--
ALTER TABLE `plasiyertanimlari`
  MODIFY `plasiyerindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `postanimlari`
--
ALTER TABLE `postanimlari`
  MODIFY `posindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prosestanimlari`
--
ALTER TABLE `prosestanimlari`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `randevucinsleri`
--
ALTER TABLE `randevucinsleri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `randevular`
--
ALTER TABLE `randevular`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recetealti`
--
ALTER TABLE `recetealti`
  MODIFY `recetealtindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receteler`
--
ALTER TABLE `receteler`
  MODIFY `receteindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sepetler`
--
ALTER TABLE `sepetler`
  MODIFY `alttanimindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `servisdurumlari`
--
ALTER TABLE `servisdurumlari`
  MODIFY `index` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `smsayar`
--
ALTER TABLE `smsayar`
  MODIFY `index` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sorular`
--
ALTER TABLE `sorular`
  MODIFY `index_sorular` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stokbirimleri`
--
ALTER TABLE `stokbirimleri`
  MODIFY `stokbirimi_index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stokhareketleri`
--
ALTER TABLE `stokhareketleri`
  MODIFY `hareketindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `subeler`
--
ALTER TABLE `subeler`
  MODIFY `subeindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taksitler`
--
ALTER TABLE `taksitler`
  MODIFY `taksitindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taslaklar`
--
ALTER TABLE `taslaklar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `teklifalti`
--
ALTER TABLE `teklifalti`
  MODIFY `altsiparis_index` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teklifdurumlari`
--
ALTER TABLE `teklifdurumlari`
  MODIFY `index` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teklifler`
--
ALTER TABLE `teklifler`
  MODIFY `teklif_index` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tekliftablo`
--
ALTER TABLE `tekliftablo`
  MODIFY `index` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teklifturleri`
--
ALTER TABLE `teklifturleri`
  MODIFY `index` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teklif_siparis`
--
ALTER TABLE `teklif_siparis`
  MODIFY `index` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `terminhesaplayici`
--
ALTER TABLE `terminhesaplayici`
  MODIFY `hesapindex` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unitetanimlari`
--
ALTER TABLE `unitetanimlari`
  MODIFY `uniteindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `uniteuygulama`
--
ALTER TABLE `uniteuygulama`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ureticiler`
--
ALTER TABLE `ureticiler`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `uretimprosesleri`
--
ALTER TABLE `uretimprosesleri`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `urunagaci`
--
ALTER TABLE `urunagaci`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `uyarilar`
--
ALTER TABLE `uyarilar`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vardiyalar`
--
ALTER TABLE `vardiyalar`
  MODIFY `vardiyaindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vardiyazamanlari`
--
ALTER TABLE `vardiyazamanlari`
  MODIFY `zamanindex` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `vergitanimlari`
--
ALTER TABLE `vergitanimlari`
  MODIFY `VergiTanim_index` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `yedekler`
--
ALTER TABLE `yedekler`
  MODIFY `index` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
