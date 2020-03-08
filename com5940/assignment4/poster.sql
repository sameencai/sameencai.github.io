-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2020 at 10:59 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lesson5`
--

-- --------------------------------------------------------

--
-- Table structure for table `poster`
--

CREATE TABLE `poster` (
  `Name` varchar(35) DEFAULT NULL,
  `desc` varchar(277) DEFAULT NULL,
  `Year` int(4) DEFAULT NULL,
  `Cast` varchar(37) DEFAULT NULL,
  `Type` varchar(26) DEFAULT NULL,
  `url` varchar(94) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poster`
--

INSERT INTO `poster` (`Name`, `desc`, `Year`, `Cast`, `Type`, `url`) VALUES
('Cold Mountain', 'In the waning days of the American Civil War, a wounded soldier embarks on a perilous journey back home to Cold Mountain, North Carolina to reunite with his sweetheart.', 2003, 'Jude Law, Nicole Kidman', 'Adventure, Drama, History ', 'https://dl.airtable.com/.attachments/a58479a24ee049599a518df1657cf3f6/9a0fdb1e/p1263277581.jpg'),
('The Others', 'A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.', 2001, 'Nicole Kidman', 'Horror, Mystery, Thriller ', 'https://dl.airtable.com/.attachments/13921a17782ca6512fc0f1c19868bd53/2d7c5be4/p1592901087.jpg'),
('About Time', 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.', 2013, 'Domhnall Gleeson, Rachel McAdams', 'Comedy, Drama, Fantasy', 'https://dl.airtable.com/.attachments/07f0cb8143607e89b07655f4dad7620b/d9bec4f3/p2070153774.jpg'),
('Adoration', 'A pair of childhood friends and neighbors fall for each other\'s sons.', 2013, 'Naomi Watts, Robin Wright', 'Drama, Romance', 'https://dl.airtable.com/.attachments/8344721a29c38b6ad4b0b5fa9025d70b/fc2a730a/p2103419860.jpg'),
('Jeune et jolie', 'After losing her virginity, Isabelle takes up a secret life as a call girl, meeting her clients for hotel-room trysts. Throughout, she remains curiously aloof, showing little interest in the encounters themselves or the money she makes.', 2013, 'Marine Vacth', ' Drama, Romance', 'https://dl.airtable.com/.attachments/49fa1b8e3f18aaa84ff583a726d0dad4/fefb06e9/p2107913124.jpg'),
('Vanilla Sky', 'A self-indulgent and vain publishing magnate finds his privileged life upended after a vehicular accident with a resentful lover.', 2001, 'Tom Cruise, Penélope Cruz', 'Fantasy, Mystery, Romance ', 'https://dl.airtable.com/.attachments/9ab7f88f27b9bf96363da925c8ba8f1b/fcc4d3ff/p2161272209.jpg'),
('La vie d\'Adèle', 'Adèle\'s life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult. In front of others, Adèle grows, seeks herself, loses herself, and ultimately finds herself through love and loss.', 2013, 'Léa Seydoux, Adèle Exarchopoulos', 'Drama, Romance', 'https://dl.airtable.com/.attachments/595de8745d706b9f4438d661ef1d42c6/d39e6eee/p2162563238.jpg'),
('Dogville', 'A woman on the run from the mob is reluctantly accepted in a small Colorado town. In exchange, she agrees to work for them. As a search visits the town, she finds out that their support has a price. Yet her dangerous secret is never far away.', 2003, 'Nicole Kidman', 'Crime, Drama', 'https://dl.airtable.com/.attachments/740307d8651f7768b14fd9f55b548639/55982851/p2163884002.jpg'),
('A Million Ways to Die in the West', 'As a cowardly farmer begins to fall for the mysterious new woman in town, he must put his newly found courage to the test when her husband, a notorious gun-slinger, announces his arrival.', 2014, 'Seth MacFarlane, Seth MacFarlane', 'Comedy, Western', 'https://dl.airtable.com/.attachments/785a134708031aafd381ad81258d12d2/249a2c2a/p2183697246.jpg'),
('The Dreamers', 'A young American studying in Paris in 1968 strikes up a friendship with a French brother and sister. Set against the background of the \'68 Paris student riots.', 2003, 'Michael Pitt, Eva Green, Louis Garrel', 'Drama, Romance', 'https://dl.airtable.com/.attachments/384d6943fe74ea9f5b417f6af1c75045/98a53ba2/p2171478250.jpg'),
('Mad Max: Fury Road', 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.', 2015, 'Tom Hardy, Charlize Theron', 'Action, Adventure, Sci-Fi', 'https://dl.airtable.com/.attachments/0f5f4701f1807d70d52799e67d37b6bc/4517ad2a/p2236181653.jpg'),
('Carol', 'An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.', 2015, 'Cate Blanchett, Rooney Mara', 'Drama, Romance', 'https://dl.airtable.com/.attachments/4bb1faf49f82badb80b8348ad4062146/f224118e/2048x3024.jpg'),
('Ah-ga-ssi', 'A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.', 2016, 'Min-hee Kim, Tae-ri Kim', 'Drama, Romance, Thriller', 'https://dl.airtable.com/.attachments/32e0dae8acfc330f6e8a1ecc398ac6b2/68d3093d/p2356818439.jpg'),
('The Curious Case of Benjamin Button', 'Tells the story of Benjamin Button, a man who starts aging backwards with consequences.', 2008, 'Cate Blanchett, Brad Pitt', 'Drama, Fantasy, Romance', 'https://dl.airtable.com/.attachments/a256e44d2d05c51638718d99beccea25/cc2ae5fd/p475749975.jpg'),
('The Reader', 'Post-WWII Germany: Nearly a decade after his affair with an older woman came to a mysterious end, law student Michael Berg re-encounters his former lover as she defends herself in a war-crime trial.', 2008, 'Kate Winslet', 'Drama, Romance', 'https://dl.airtable.com/.attachments/b8e0cc5807d301a490d25b720bcd9927/38db599a/p468734422.jpg'),
('King Kong', 'A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.', 2005, 'Naomi Watts', 'Action, Adventure, Drama', 'https://dl.airtable.com/.attachments/5ce796da05174a45c4fa407af35ae258/78bd142f/p459569895.jpg'),
('Cracks', 'A look at the lives and relationships among girls at an elite boarding school.', 2009, 'Eva Green', 'Drama, Thriller', 'https://dl.airtable.com/.attachments/a697810379fca6922e9b40085c6fd84b/688ec63e/p455281668.jpg'),
('Moulin Rouge! ', 'A poet falls for a beautiful courtesan whom a jealous duke covets.', 2001, 'Nicole Kidman, Ewan McGregor', 'Drama, Musical, Romance', 'https://dl.airtable.com/.attachments/e434872f27f9c141fd1764a31acf21e7/6ae44ad1/p814588734.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
