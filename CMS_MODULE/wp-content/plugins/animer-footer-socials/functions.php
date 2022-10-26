<?php
/*
Plugin Name: AnimerV1 Footer Social Links
Author: Bagus Nur A.
Version: 1.0.0
*/

function animer_footer_socials( $args ) {
	foreach( $args as $key => $label ){
		$args->{$key} = str_replace( [ __( 'Posts' ), __( 'Post' ) ], __( 'Anime' ), $label );
	}

	return $args;
}

add_filter( 'post_type_labels_post', 'animer_footer_socials' );
