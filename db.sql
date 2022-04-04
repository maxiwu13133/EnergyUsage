-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2022 at 02:24 PM
-- Server version: 5.5.62-log
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mincasa`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `bill_id` int(5) NOT NULL,
  `username` varchar(20) NOT NULL,
  `month` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `amount` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`bill_id`, `username`, `month`, `year`, `amount`) VALUES
(22, 'admin', 2, 2022, 110),
(23, 'admin', 3, 2022, 120),
(24, 'admin', 4, 2022, 130),
(25, 'n', 11, 2022, 123),
(26, 'n', 0, 0, 0),
(28, 'n', 1, 1, 0),
(29, 'n', 1, 2, 0),
(31, 'n', 1, 444, 123),
(32, 'n', 1, 445, 123),
(33, 'n', 1, 446, 123),
(34, 'n', 1, 447, 123),
(35, 'n', 1, 448, 123),
(36, 'n', 3, 4, 4),
(37, 'n', 6, 4, 3),
(38, 'n', 6, 6, 3),
(39, 'n', 6, 10, 3),
(41, 'n', 6, 11, 3),
(42, 'n', 6, 12, 3),
(44, 'n', 6, 13, 3),
(46, 'n', 6, 14, 3),
(49, 'n', 1, 3000, 100),
(50, 'n', 2, 3000, 40),
(51, 'n', 3, 3000, 180),
(52, 'n', 4, 3000, 250),
(53, 'n', 5, 3000, 60),
(54, 'n', 6, 3000, 98),
(55, 'sam', 4, 2018, 120),
(67, 'sam', 2, 2020, 40),
(69, 'sam', 10, 2010, 200),
(70, 'sam', 12, 2021, 100);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `endpoint` varchar(15) NOT NULL,
  `count` int(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`endpoint`, `count`) VALUES
('addBill', 15),
('admin', 17),
('deleteBill', 0),
('deleteUser', 0),
('getBills', 24),
('getUsage', 0),
('getUser', 21),
('login', 29),
('signup', 3),
('updatePassword', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(20) NOT NULL,
  `password` varchar(120) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `points` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `admin`, `points`) VALUES
('admin', '$argon2id$v=19$m=4096,t=3,p=1$N4uNbvbdSprgwwt1bJ8Juw$l3cYIsnGt5rojFnglFQqr3NUpOtPW7XtRdRDQ6NZ2mU', 1, 180),
('n', '$argon2id$v=19$m=4096,t=3,p=1$MLUzR4Ni3QYHzeaMGCcTUw$SACppSv1TQZl1KmohNBBO2NKt4IXDfyeEMJswe+T7wo', 0, 2466),
('sam', '$argon2id$v=19$m=4096,t=3,p=1$wN41ipc0bfXeIshOAOTOtw$zzDjVJzsTwE9HWjIwABt8dxdlPKgK2PIg5woIiNGYx8', 0, 330);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`bill_id`),
  ADD UNIQUE KEY `uniqueMMYYYY` (`month`,`year`),
  ADD KEY `username_fk` (`username`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`endpoint`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `bill_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `username_fk` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`username`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `bill_ibfk_2` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `bill_ibfk_3` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
