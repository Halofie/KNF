-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 25, 2024 at 10:38 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knf`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `categoryID` int NOT NULL,
  `categoryType` varchar(20) NOT NULL,
  `categoryDesc` varchar(30) NOT NULL,
  PRIMARY KEY (`categoryType`),
  UNIQUE KEY `categoryID` (`categoryID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryID`, `categoryType`, `categoryDesc`) VALUES
(1, 'G', 'Greens'),
(2, 'FV', 'Fruits and Vegetables'),
(3, 'GP', 'Grain And Powder'),
(4, 'O', 'Oil'),
(5, 'SP', 'Special Product'),
(0, 'PLT', 'Poultry');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `customerID` int NOT NULL AUTO_INCREMENT,
  `customerName` varchar(1000) NOT NULL,
  `routeID` varchar(1000) NOT NULL,
  `contact` bigint NOT NULL,
  `alternamtiveContact` bigint NOT NULL,
  `address` varchar(1000) NOT NULL,
  `emailId` varchar(100) NOT NULL,
  PRIMARY KEY (`customerID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category_id` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,
  `unit_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `product_id`, `product_name`, `category_id`, `price`, `quantity`, `unit_id`) VALUES
(8, '1', 'Tomato', 'FV', 50.00, 50, 3),
(9, '2', 'Carrot', 'FV', 155.00, 51, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `category_id` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `UoM_id` varchar(255) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `category_id`, `product`, `UoM_id`, `price`) VALUES
(1, 'FV', 'Tomato', 'kg', 50),
(2, 'FV', 'Potato', 'kg', 100),
(3, 'GP', 'test123', 'nos', 12344),
(4, 'FV', 'test subject 32', 'kg', 321),
(5, 'FV', 'brinjal', 'kg', 30);

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
CREATE TABLE IF NOT EXISTS `routes` (
  `routeID` int NOT NULL AUTO_INCREMENT,
  `route` varchar(1000) NOT NULL,
  `deliveryType` varchar(1000) NOT NULL,
  PRIMARY KEY (`routeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
CREATE TABLE IF NOT EXISTS `suppliers` (
  `supplierID` int NOT NULL AUTO_INCREMENT,
  `supplierName` varchar(1000) NOT NULL,
  `farmLocation` varchar(1000) NOT NULL,
  `contact` bigint NOT NULL,
  `alternativeContact` bigint NOT NULL,
  `farmSize` bigint NOT NULL,
  `emailID` varchar(50) NOT NULL,
  PRIMARY KEY (`supplierID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `uom`
--

DROP TABLE IF EXISTS `uom`;
CREATE TABLE IF NOT EXISTS `uom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UoMID` varchar(25) NOT NULL,
  `UoM` varchar(25) NOT NULL,
  PRIMARY KEY (`UoMID`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `uom`
--

INSERT INTO `uom` (`id`, `UoMID`, `UoM`) VALUES
(2, 'g', 'Gram'),
(3, 'kg', 'Kilo Gram'),
(4, 'kattu', 'Kattu'),
(5, 'nos', 'nos'),
(6, 'dz', 'Dozen'),
(7, 'tesst', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` varchar(100) NOT NULL,
  `passwd` varchar(100) NOT NULL,
  `type` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
