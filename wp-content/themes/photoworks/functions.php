<?php

function photoworks_enqueue_style() {
	wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
	wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'photoworks_enqueue_style');
?>
