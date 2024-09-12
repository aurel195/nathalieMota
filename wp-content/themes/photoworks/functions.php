<?php

function photoworks_enqueue_style() {
	wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
	wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'photoworks_enqueue_style');

function photoworks_menu() {
  register_nav_menu( 'header-menu', 'Menu Principal');
}
add_action( 'after_setup_theme', 'photoworks_menu' );


function photoworks_footer_menu() {
  register_nav_menu('footer-menu', 'Menu Footer');
}
add_action( 'after_setup_theme', 'photoworks_footer_menu' );
?>

