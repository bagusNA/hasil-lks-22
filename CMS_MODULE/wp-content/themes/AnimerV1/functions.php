<?php
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

