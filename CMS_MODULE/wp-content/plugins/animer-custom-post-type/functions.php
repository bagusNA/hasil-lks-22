<?php
/*
Plugin Name: AnimerV1 Custom Post Type
Author: Bagus Nur A.
Version: 1.0.0
*/
function animer_custom_post_type( $args ) {
	foreach( $args as $key => $label ){
		$args->{$key} = str_replace( [ __( 'Posts' ), __( 'Post' ) ], __( 'Anime' ), $label );
	}

	return $args;
}

add_filter( 'post_type_labels_post', 'animer_custom_post_type' );
