-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 23, 2020 at 11:59 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CSV_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `TBL_NAME`
--

CREATE TABLE `TBL_NAME` (
  `cilityName` varchar(54) DEFAULT NULL,
  `Address` varchar(87) DEFAULT NULL,
  `District` varchar(19) DEFAULT NULL,
  `FacilityType` varchar(223) DEFAULT NULL,
  `Lat` decimal(8,6) DEFAULT NULL,
  `Lng` decimal(9,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TBL_NAME`
--

INSERT INTO `TBL_NAME` (`cilityName`, `Address`, `District`, `FacilityType`, `Lat`, `Lng`) VALUES
('Aberdeen Sports Centre', '6/F Aberdeen Municipal Services Building, 203 Aberdeen Main Road, Aberdeen', 'SOUTHERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, D6 Play Rooms', '22.249560', '114.154360'),
('Ap Lei Chau Sports Centre', '8 Hung Shing Street, Apleichau', 'SOUTHERN', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Bowling Greens, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms', '22.244480', '114.155420'),
('Chai Wan Sports Centre', '6 Yee Shun Street, Chai Wan', 'EASTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.264850', '114.239910'),
('Cheung Chau Sports Centre', 'Nam She Tong, Cheung Chau', 'ISLANDS', 'Basketball Courts, Volleyball Courts, Badminton Courts, Gateball Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms', '22.207510', '114.031180'),
('Cheung Fat Sports Centre', '4/F, Cheung Fat Shopping Centre, Cheung Fat Estate, Tsing Yi', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.362470', '114.102700'),
('Choi Hung Road Sports Centre', 'Sheung Hei Street, Wong Tai Sin', 'WONG TAI SIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.337130', '114.196450'),
('Chuk Yuen Sports Centre', 'Chuk Yuen North Estate, Chuk Yuen Road, Wong Tai Sin', 'WONG TAI SIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.345520', '114.193510'),
('Fa Yuen Street Sports Centre', '13/F Fa Yuen Street Municipal Services Building, 123A Fa Yuen Street, Mong Kok', 'YAU TSIM MONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.320780', '114.170700'),
('Fat Kwong Street Sports Centre', '18 Good Shepherd Street, Ho Man Tin', 'KOWLOON CITY', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.314830', '114.181110'),
('Fu Heng Sports Centre', '1/F, Fu Heng Shopping Centre, Fu Heng Estate, Tai Po', 'TAI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.458290', '114.171360'),
('Fu Shin Sports Centre', 'Multi Car-Park Building, Fu Shin Estate, Tai Po', 'TAI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.453880', '114.174120'),
('Fung Kam Street Sports Centre', '20 Fung Yau Street North, Yuen Long', 'YUEN LONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.443060', '114.033030'),
('Fung Shue Wo Sports Centre', '10 Fung Shue Wo Road, Tsing Yi Estate, Phase II, Tsing Yi', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Activity Rooms, Fitness Rooms', '22.355480', '114.102690'),
('Hang Hau Sports Centre', '1-3/F, Sai Kung Tseung Kwan O Government Complex, 38 Pui Shing Road, Tseung Kwan O.', 'SAI KUNG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms, Indoor Jogging Tracks', '22.317170', '114.268240'),
('Heng On Sports Centre', '4/F., Heng On Commercial Centre, Heng On Estate, Ma On Shan, Sha Tin', 'SHA TIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.416690', '114.227870'),
('Ho Man Tin Sports Centre', '1 Chung Yee street, Ho Man Tin', 'KOWLOON CITY', 'Table Tennis Tables, American Pool Tables, Activity Rooms, Tennis Courts, Fitness Rooms, Chilren\'s Play Rooms', '22.311970', '114.181240'),
('Hong Kong Park Sports Centre', '29 Cotton Tree Drive, Central', 'CENTRAL AND WESTERN', 'Badminton Courts, Basketball Courts, Dance Rooms, Fitness Rooms, Indoor Jogging Tracks, Netball Courts, Table Tennis Tables, Volleyball Courts', '22.277340', '114.159290'),
('Island East Sports Centre', '52 Lei King Road, Sai Wan Ho', 'EASTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Dance Rooms, Activity Rooms, Table Tennis Tables, Golf Facilities, Fitness Rooms, Chilren\'s Play Rooms, Bowling Greens, Swimming Pools', '22.284720', '114.222290'),
('Kowloon Park Sports Centre', '22 Austin Road, Tsim Sha Tsui', 'YAU TSIM MONG', 'Volleyball Courts, Netball Courts, Badminton Courts, Handball Courts, Squash Courts, Activity Rooms, Fitness Rooms, Dance Rooms, Table Tennis Tables', '22.301860', '114.169960'),
('Kwun Chung Sports Centre', '5/F - 7/F, 17 Bowring Street, Jordon', 'YAU TSIM MONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.304440', '114.168260'),
('Lai King Sports Centre', '60 Lai Cho Road, Lai King, Kwai Chung', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.349860', '114.127670'),
('Lam Tin South Sports Centre', '170 Pik Wan Road, Lam Tin, Kwun Tong', 'KWUN TONG', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Activity Rooms, Fitness Rooms, Squash Courts, Table Tennis Tables, Chilren\'s Play Rooms', '22.303860', '114.238840'),
('Lei Yue Mun Sports Centre', '2/F to 5/F of Lei Yue Mun Municipal Services Building, Yau Tong, Kowloon', 'KWUN TONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Activity Rooms, Fitness Rooms, Sports Climbing Facilities, Sanshou Training Hall, Table Tennis Tables, American Pool Tables, Squash Courts, Chilren\'s Play Rooms', '22.292060', '114.238680'),
('Leung Tin Sports Centre', '4/F, Carpark Building, Tin King Estate, Tuen Mun', 'TUEN MUN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.406600', '113.965080'),
('Lockhart Road Sports Centre', '10/F Lockhart Road Municipal Services Building, 225 Hennessy Road, Wanchai', 'WAN CHAI', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.278080', '114.175420'),
('Long Ping Sports Centre', 'Unit 202, 2/F, Long Ping Commercial Centre, Long Ping Estate, Yuen Long', 'YUEN LONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.450300', '114.023190'),
('Luen Wo Hui Sports Centre', '3/F., 9 Wo Mun Street, Fanling', 'NORTH', 'Table Tennis Tables, Fitness Rooms, Activity Rooms, Dance Rooms, Chilren\'s Play Rooms', '22.500280', '114.145020'),
('Lung Sum Avenue Sports Centre', '155 Jockey Club Road, Sheung Shui', 'NORTH', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.504980', '114.130450'),
('Ma On Shan Sports Centre', '14 On Chun Street, Ma On Shan, Shatin', 'SHA TIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Handball Courts, Table Tennis Tables, Fitness Rooms, Dance Rooms, Activity Rooms, Chilren\'s Play Rooms', '22.426020', '114.229560'),
('Mei Lam Sports Centre', 'Mei Lam Estate Phase III, Tai Wai, Sha Tin', 'SHA TIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.379080', '114.175500'),
('Mui Wo Sports Centre', '1/F, Mui Wo Municipal Services Building, 9 Ngan Shek Street, Lantau Island', 'ISLANDS', 'Basketball Courts, Volleyball Courts, Badminton Courts, Gateball Courts, Activity Rooms, Fitness Rooms, Squash Courts', '22.266990', '113.996480'),
('Ngau Tau Kok Road Sports Centre', '3/F-4/F Ngau Tau Kok Municipal Services Building, 183 Ngau Tau Kok Road, Ngau Tau Kok', 'KWUN TONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.321480', '114.216380'),
('North Kwai Chung Tang Shiu Kin Sports Centre', '292 Wo Yi Hop Road, Kwai Chung', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Tennis Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.373870', '114.137560'),
('Osman Ramju Sadick Memorial Sports Centre', '176 Hing Fong Road, Kwai Chung', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.361120', '114.129520'),
('Pei Ho Street Sports Centre', '5/F Pei Ho Street Municipal Services Building, 333 Ki Lung Street, Sham Shui Po', 'SHAM SHUI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms', '22.329240', '114.161130'),
('Peng Chau Sports Centre', 'Peng Chau Municipal Services Building, 6 Po Peng Street, Peng Chau', 'ISLANDS', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Activity Rooms, Fitness Rooms', '22.284890', '114.038050'),
('Po Kong Village Road Sports Centre', '120 Po Kong Village Road, Wong Tai Sin', 'WONG TAI SIN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms', '22.345460', '114.201590'),
('Po Lam Sports Centre', 'Po Lam Estate, Tseung Kwan O, Sai Kung', 'SAI KUNG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.325860', '114.255110'),
('Po On Road Sports Centre', '1/F & 2/F Po On Road Municipal Services Building, 325-329 Po On Road, Sham Shui Po', 'SHAM SHUI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.338620', '114.157390'),
('Po Wing Road Sports Centre', '19 Pak Wo Road, Sheung Shui, New Territories', 'NORTH', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, American Pool Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms, Indoor Jogging Tracks, Sports Climbing Facilities', '22.496980', '114.128340'),
('Quarry Bay Sports Centre', '6/F & 7/F, Quarry Bay Municipal Services Building, 38 Quarry Bay Street, Quarry Bay', 'EASTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.283690', '114.211790'),
('Shek Kip Mei Park Sports Centre', '290 Nam Cheong Street, Shek Kip Mei', 'SHAM SHUI PO', 'Basketball Courts, Volleyball Courts, Netball Courts, Handball Courts, Badminton Courts, Activity Rooms, Dance Rooms, Fitness Rooms, Chilren\'s Play Rooms, Sports Climbing Facilities', '22.337290', '114.169960'),
('Shek Tong Tsui Sports Centre', '5/F Shek Tong Tsui Municipal Services Building, 470 Queen\'s Road West', 'CENTRAL AND WESTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms', '22.285720', '114.136050'),
('Sheung Wan Sports Centre', '11/F Sheung Wan Municipal Services Building, 345 Queen\'s Road Central', 'CENTRAL AND WESTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.286000', '114.149630'),
('Shun Lee Tsuen Sports Centre', 'Shun Lee Tsuen Road, Kwun Tong', 'KWUN TONG', 'Basketball Courts, Netball Courts, Badminton Courts, Gymnastics Traning Hall, Fitness Rooms, Dance Rooms, Table Tennis Tables, Squash Courts, Activity Rooms, Golf Facilities, Sports Climbing Facilities, Chilren\'s Play Rooms', '22.329690', '114.225440'),
('Siu Lun Sports Centre', '2-5/F Tuen Mun Siu Lun Government Complex, 19 Siu Lun Street, Tuen Mun, N.T.', 'TUEN MUN', 'Activity Rooms, Badminton Courts, Basketball Courts, Chilren\'s Play Rooms, Fitness Rooms, Handball Courts, Sports Climbing Facilities, Table Tennis Tables, Volleyball Courts', '22.384250', '113.979200'),
('Smithfield Sports Centre', '4/F, Smithfield Municipal Services Building, 12K Smithfield Road, Kennedy Town, Western', 'CENTRAL AND WESTERN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Fitness Rooms, Dance Rooms, Activity Rooms, Table Tennis Tables, Squash Courts, American Pool Tables, Chilren\'s Play Rooms', '22.281940', '114.128640'),
('Sun Yat Sen Memorial Park Sports Centre', '18 Eastern Street North, Sai Ying Pun', 'CENTRAL AND WESTERN', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Handball Courts, Fitness Rooms, Dance Rooms, Squash Courts, Activity Rooms, Table Tennis Tables, Chilren\'s Play Rooms', '22.290170', '114.143490'),
('Tai Hing Sports Centre', '38 Tsing Chung Koon Road, Tuen Mun', 'TUEN MUN', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Dance Rooms, Fitness Rooms', '22.403380', '113.973070'),
('Tai Kok Tsui Sports Centre', '5-7/F., Tai Kok Tsui Municipal Services Building, 63 Fuk Tsun Street, Tai Kok Tsui', 'YAU TSIM MONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Sports Climbing Facilities, Fitness Rooms, Chilren\'s Play Rooms, Table Tennis Tables, Activity Rooms', '22.321880', '114.162790'),
('Tai Po Hui Sports Centre', '6/F Multi Car-Park Building, Fu Shin Estate, 8 Heung Sze Wui Street, Tai Po', 'TAI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms', '22.446120', '114.166580'),
('Tai Po Sports Centre', '13 Ting Tai Road, Tai Po', 'TAI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.455340', '114.164900'),
('Tai Wo Hau Sports Centre', '39 Tai Ha Street, Tai Wo Hau, Kwai Chung', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.370200', '114.124950'),
('Tai Wo Sports Centre', 'Podium Level, Tai Wo Shopping Centre, Tai Wo Estate, Tai Po', 'TAI PO', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.451000', '114.160580'),
('The Jockey Club Tuen Mun Butterfly Beach Sports Centre', 'Wu Shan Road, Tuen Mun', 'TUEN MUN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.378690', '113.964700'),
('Tin Fai Road Sports Centre', 'No. 63, Tin Shui Road, Tin Shui Wai, Yuen Long, N.T.', 'YUEN LONG', 'Badminton Courts, Activity Rooms, Basketball Courts, Volleyball Courts, Fitness Rooms, Table Tennis Tables, Chilren\'s Play Rooms, Sports Climbing Facilities, Indoor Jogging Tracks, Spectator Stands', '22.464800', '113.997020'),
('Tin Ping Sports Centre', '3/F., Tin Ping Estate Shopping Centre, Tin Ping Estate, North', 'NORTH', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.503320', '114.133650'),
('Tin Shui Sports Centre', '7 Tin Shui Road, Tin Shui Wai, Yuen Long', 'YUEN LONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Handball Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms', '22.454770', '113.997980'),
('Tin Shui Wai Sports Centre', '1 Tin Pak Road, Tin Shui Wai, Yuen Long', 'YUEN LONG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Activity Rooms, Fitness Rooms, Dance Rooms', '22.455010', '114.006540'),
('To Kwa Wan Sports Centre', '66 Ha Heung Road, To Kwa Wan', 'KOWLOON CITY', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Activity Rooms, Squash Courts, Table Tennis Tables, Fitness Rooms', '22.318850', '114.190120'),
('Tseung Kwan O Sports Centre', '9 Wan Lung Road, Tseung Kwan O, Sai Kung', 'SAI KUNG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.317100', '114.259630'),
('Tsing Yi Sports Centre', '2/F, Tsing Yi Municipal Services Building, 38 Tsing Luk Street, Tsing Yi', 'KWAI TSING', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms', '22.354210', '114.106510'),
('Tsuen Wan Sports Centre', '53 Wing Shun Street, Tsuen Wan, N.T.', 'TSUEN WAN', 'Activity Rooms, Badminton Courts, Basketball Courts, Chilren\'s Play Rooms, Dance Rooms, Fitness Rooms, Spectator Stands, SPORTS CENTRES, Sports Climbing Facilities, Table Tennis Tables, Volleyball Courts', '22.365960', '114.112640'),
('Tsuen Wan West Sports Centre', '68 Hoi On Road, Tsuen Wan', 'TSUEN WAN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.370480', '114.100510'),
('Tsui Lam Sports Centre', 'Tsui Lam Estate, Sai Kung', 'SAI KUNG', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.322230', '114.249530'),
('Tung Chung Man Tung Road Sports Centre', 'G/F., Tung Chung Municipal Services Building, 39 Man Tung Road, Tung Chung', 'ISLANDS', 'Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms', '22.290590', '113.943830'),
('Wai Tsuen Sports Centre', '6 Miu Kong Street, Tsuen Wan', 'TSUEN WAN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.372320', '114.122490'),
('Wo Hing Sports Centre', '8 Wo Ming Lane, Fanling', 'NORTH', 'Basketball Courts, Volleyball Courts, Badminton Courts, Tennis Courts, Activity Rooms, Fitness Rooms, Squash Courts, Table Tennis Tables, American Pool Tables', '22.484750', '114.143140'),
('Yau Oi Sports Centre', '3 Hing On Lane, Tuen Mun', 'TUEN MUN', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.385460', '113.971800'),
('Yeung Uk Road Sports Centre', '4/F Yeung Uk Road Municipal Services Building, 45 Yeung Uk Road, Tsuen Wan', 'TSUEN WAN', 'Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.368990', '114.114520'),
('Yuen Long Sports Centre', '3/F, Yuen Long Leisure and Cultural Building, 52 Ma Tin Road, Yuen Long', 'YUEN LONG', 'Badminton Courts, Activity Rooms, Basketball Courts, Volleyball Courts, Fitness Rooms, Table Tennis Tables, Chilren\'s Play Rooms', '22.441470', '114.023860'),
('Yuen Wo Road Sports Centre', '4 Yuen Wo Road, Sha Tin', 'SHA TIN', 'Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms', '22.382940', '114.192570');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
