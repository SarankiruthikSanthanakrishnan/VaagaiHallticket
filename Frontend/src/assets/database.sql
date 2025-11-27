create database vaagaihallticket;
use vaagaihallticket;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `register_number` varchar(20) NOT NULL,
  `dob` date DEFAULT NULL,
  `app_no` VARCHAR(10),
  `course_code` varchar(10),
  `course_name` VARCHAR(100),
  `name_tamil` VARCHAR(100),
  `name_english` varchar(100),
  `phone_no` VARCHAR(20)
);

INSERT INTO students
(register_number, dob, app_no, course_code, course_name, name_tamil, name_english, phone_no)
VALUES
('620822240001','2004-01-10','7001','202310','PYTHON PROGRAMMING','அருண் குமார்','Arun Kumar','9485920317'),
('620822240002','2004-02-14','7002','202310','PYTHON PROGRAMMING','பாலாஜி எஸ்','Balaji S','8702915634'),
('620822240003','2004-03-21','7003','202310','PYTHON PROGRAMMING','சந்திரன் கே','Chandran K','7194873602'),
('620822240004','2004-05-05','7004','202310','PYTHON PROGRAMMING','தீபக் ராஜ்','Deepak Raj','6605198743'),
('620822240005','2004-07-18','7005','202310','PYTHON PROGRAMMING','எழிலன் பி','Ezhilan P','9329457810'),
('620822240006','2004-11-02','7006','202310','PYTHON PROGRAMMING','ஃபிராஸ் அஹமது','Firas Ahmed','8582907341'),
('620822240007','2004-08-22','7007','202310','PYTHON PROGRAMMING','கண்ணன் ஆர்','Kannan R','9982361407'),
('620822240008','2004-12-12','7008','202310','PYTHON PROGRAMMING','கிருஷ்ணன் மு','Krishnan M','7402915876'),
('620822240009','2004-09-09','7009','202310','PYTHON PROGRAMMING','லோகேஷ் ஜே','Lokesh J','8785209614'),
('620822240010','2004-06-06','7010','202310','PYTHON PROGRAMMING','முரளி த','Murali T','6692814503'),
('620822240011','2004-05-28','7011','202310','PYTHON PROGRAMMING','நவீன் எஸ்','Naveen S','9150298376'),
('620822240012','2004-04-30','7012','202310','PYTHON PROGRAMMING','ஓம்காரன் எம்','Omkaran M','7892175340'),
('620822240013','2004-10-19','7013','202310','PYTHON PROGRAMMING','பிரசாத் கே','Prasad K','8671829430'),
('620822240014','2004-08-08','7014','202310','PYTHON PROGRAMMING','ரமேஷ் ஆர்','Ramesh R','9283947510'),
('620822240015','2004-01-25','7015','202310','PYTHON PROGRAMMING','சரவணன் பி','Saravanan P','7918234760'),
('620822240016','2004-02-08','7016','202310','PYTHON PROGRAMMING','தமிழ் செல்வன்','Tamil Selvan','6782045319'),
('620822240017','2004-03-17','7017','202310','PYTHON PROGRAMMING','உதயகுமார் ஜி','Udhayakumar G','8640982137'),
('620822240018','2004-07-11','7018','202310','PYTHON PROGRAMMING','விக்னேஷ் எல்','Vignesh L','9920475861'),
('620822240019','2004-09-29','7019','202310','PYTHON PROGRAMMING','யோகேஷ் ந்','Yogesh N','7567894203'),
('620822240020','2004-10-03','7020','202310','PYTHON PROGRAMMING','ஜெயசூர்யா எஸ்','Jayasurya S','9843501926'),
('620822240021','2004-04-11','7021','202310','PYTHON PROGRAMMING','அரவிந்த் ஜே','Aravind J','8231498760'),
('620822240022','2004-06-14','7022','202310','PYTHON PROGRAMMING','கௌதம் ஆர்','Gautham R','9760942381'),
('620822240023','2004-02-27','7023','202310','PYTHON PROGRAMMING','ஹரிஷ் கே','Harish K','7503981724'),
('620822240024','2004-12-21','7024','202310','PYTHON PROGRAMMING','கதிர்வேல் எம்','Kathirvel M','8839201475'),
('620822240025','2004-09-15','7025','202310','PYTHON PROGRAMMING','சுரேஷ் பி','Suresh P','9612905843');



-----Admin---------
CREATE TABLE admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO admin_users (username, password)
VALUES ('admin', 'admin123');
