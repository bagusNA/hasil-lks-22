<?php
$baseImage = imagecreatefromjpeg('image.jpg');
$watermarkImage = imagecreatefrompng('logo.png');

$wmWidth = imagesx($watermarkImage);
$wmHeight = imagesy($watermarkImage);

$imgWidth = imagesx($baseImage);
$imgHeight = imagesy($baseImage);

imagecopy(
    $baseImage, $watermarkImage,
    $wmWidth + 30, 0,
    0, 0,
    $wmWidth, $wmHeight
);

header('Content-Type: image/png');
imagepng($baseImage);
imagedestroy($baseImage)

?>
