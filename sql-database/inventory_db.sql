-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2024 at 03:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `nama_kategori` varchar(50) NOT NULL,
  `keterangan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `nama_kategori`, `keterangan`) VALUES
(1, 'Botol', ''),
(2, 'Gelas', ''),
(3, 'Galon', 'Produk dengan galon'),
(4, 'Kardus', 'Produk Dengan Kardus'),
(5, 'Kaca', 'Produk dengan kaca'),
(6, 'Kaleng', 'Produk Dari kaleng'),
(7, 'Plastik', 'Produk menggunakan plastik'),
(8, 'Gelas', 'Produk dari gelas'),
(9, 'Krtas', 'Produk memki kertas'),
(10, ' ', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `harga_pokok` varchar(50) NOT NULL,
  `harga_jual` varchar(50) NOT NULL,
  `kode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `nama_barang`, `kategori`, `harga_pokok`, `harga_jual`, `kode`) VALUES
(20, 'Aqua 1500 ML', 'Botol', '48000', '54000', 'AQU-1500'),
(21, 'Aqua 600 ML', 'Botol', '43000', '48000', 'AQU-600'),
(22, 'Aqua 330 ML', 'Botol', '35000', '40000', 'AQU-330 '),
(23, 'Aqua 220', 'Botol', '30000', '36000', 'AQU-220'),
(24, 'Aqua Galon 19 L', 'Galon', '15000', '20000', 'AQU-GLN'),
(25, 'Lemineral 1500 ML', 'Botol', '47000', '52000', 'LMN-1500'),
(26, 'Lemineral 600 ML', 'Botol', '44000', '47000', 'LMN-600'),
(27, 'Lemineral Galon 15 L', 'Galon', '16000', '20000', 'LMN-GLN'),
(28, 'Lemineral 330 ML', 'Botol', '30000', '35000', 'LMN-330'),
(29, 'Quavit 1500 ML', 'Botol', '26000', '30000', 'QVT-1500'),
(30, 'Quavit 600 ML', 'Botol', '25000', '28000', 'QVT-600'),
(31, 'Quavit 240 ML', 'Botol', '18000', '25000', 'QVT-240'),
(32, 'Quavit 220 ML', 'Gelas', '16000', '20000', 'QVT-220'),
(33, 'Fanta 350 ML', 'Botol', '30000', '45000', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `stok`
--

CREATE TABLE `stok` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(50) NOT NULL,
  `kategori_produk` varchar(50) NOT NULL,
  `stok_masuk` int(10) NOT NULL,
  `stok_keluar` int(10) NOT NULL,
  `sisa` int(11) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `diinput_oleh` varchar(50) NOT NULL,
  `waktu_input` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stok`
--

INSERT INTO `stok` (`id`, `nama_produk`, `kategori_produk`, `stok_masuk`, `stok_keluar`, `sisa`, `keterangan`, `diinput_oleh`, `waktu_input`) VALUES
(12, 'Aqua 1500 ML', 'Botol', 50, 0, 50, 'Dari Pabrik', '1', '2024-07-06 19:39:37'),
(13, 'Aqua 1500 ML', 'Botol', 50, 0, 100, 'Dari Pabrik', '1', '2024-07-06 20:20:53'),
(14, 'Aqua 1500 ML', 'Botol', 50, 0, 150, 'Dari Pabrik', '1', '2024-07-06 20:24:47'),
(15, 'Aqua 600 ML', 'Botol', 50, 0, 50, 'Dari Pabrik', '1', '2024-07-06 20:27:58'),
(16, 'Aqua 600 ML', 'Botol', 200, 0, 250, 'Dari Pabrik', '1', '2024-07-06 20:28:24'),
(17, 'Aqua 600 ML', 'Botol', 20, 0, 270, 'Dari Pabrik', '1', '2024-07-06 20:37:09'),
(18, 'Aqua 1500 ML', 'Botol', 0, -70, 80, 'Kirim Ke Toko', '1', '2024-07-06 21:26:07'),
(19, 'Aqua 600 ML', 'Botol', 0, -70, 200, 'Kirim Ke Ambon', '1', '2024-07-06 21:27:15'),
(20, 'Aqua 600 ML', 'Botol', 50, 0, 250, 'Dari Pabrik', '1', '2024-07-06 22:15:38'),
(21, 'Aqua 1500 ML', 'Botol', 20, 0, 100, 'Dari Pabrik', '1', '2024-07-08 17:35:24');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama_lengkap` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `nama_lengkap`) VALUES
(1, 'donnyfauzi', '$2y$10$7reu0PDYmvYAj8Jot0SPyefOpBsNjmCXpmDPiFSCAD8x2YYF4Z.Xu', 'Donny Fauzi'),
(6, 'rikafauziah', '$2a$10$dKq113JrL31wUJPVs5Yum.hgAHwrgIW5ZOHUAgLn8QC/ZCxq0Q/qa', 'Rika Fauziah'),
(7, 'dewiajaya', '$2a$10$/2mWmRbuehHaNH2wv9OnO.lwt9UG4cY52V5O.0VcQP1zHERczq/SK', 'Dewi N'),
(8, 'andiamri', '$2a$10$.lDQByrfON5j0mqxRwB26Ou7LcQ/Ute79X.Rk2llctL3r8Ix414JS', 'Andi Amri'),
(9, 'deviyana', '$2a$10$tWKMqhNPrcxcQFt3Rxvrsek0S8AQCLJelVUWJXG6dvBh82VMptvsC', 'Devi Aja'),
(11, 'jokowi', '$2a$10$FQZcIpzIC6tZoHXwf4JAVuMMcjTpcNClNs2AcNKt4I74LkCP8aVIq', 'Jokowidodo'),
(12, 'sagita', '$2a$10$dbQAs0MOJEeDGlcrOBMQ2.i8ClWe1lSvULixqB0kHFGOwwX5ZsKle', 'Sagita Auranti'),
(13, 'patrick17', '$2a$10$qOlP7.Tf45I/UcsQB4utG.UtbqUaoJStpHRACMaGQ7esGT3cEgc1.', 'Patrick'),
(14, 'bobi17', '$2a$10$kMriOecslZhzAgAV9mXicelpuyMn.A6GQRH4WnCKzqPONzF4sXWI2', 'Bobi Candra'),
(15, 'harun', '$2a$10$qMnmygJc0nMbgnnYkeRxEOIb4CmvvlixG27WUD8Lmh8oHJ8B5CJNG', 'harun masiku');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `stok`
--
ALTER TABLE `stok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
