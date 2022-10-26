<?php
register_nav_menu('footer-menu', "Footer Menu");

add_action( 'wp_enqueue_scripts', function () {
	$parentHandle = 'blankslate-style';
	$theme        = wp_get_theme();

	wp_enqueue_style(
		$parentHandle,
		get_template_directory_uri() . '/style.css',
		[],
		$theme->parent()->get( 'Version' )
	);

	wp_enqueue_style(
		'animerv1-style',
		get_stylesheet_uri(),
		[ $parentHandle ],
		$theme->get( 'Version' )
	);

	wp_enqueue_style(
		'animev1-googlefonts',
		"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap",
		['animerv1-style'],
		'1.0.0'
	);
} );

add_action( 'init', function () {
	add_rewrite_rule(
		'admeen',
		'wp-login.php',
		'top'
	);
} );

function my_custom_login_logo() {
	$homeId = get_option('page_on_front');
	$thumbnailId = get_post_thumbnail_id($homeId);
	$thumbnailUrl = wp_get_attachment_image_url($thumbnailId, 'large');

	echo '
	<style>
         h1 a { display: none !important;
         height: 120px !important; width: 410px !important; margin-left: -40px;}
         body {
         	background-image: url('. $thumbnailUrl .') !important;
         	background-size: cover;
         	background-position: center;
         	backdrop-filter: brightness(.25);
         }
         a {
         color: white !important;
         }
     </style>';
}
add_action('login_head', 'my_custom_login_logo');
