<?php

function photoworks_enqueue_style() {
	wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('jquery' );
	wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);
    wp_enqueue_script('lightbox-script', get_template_directory_uri() . '/js/lightbox.js', array('jquery'), null, true);
    wp_enqueue_script('loadmore-script', get_template_directory_uri() . '/js/load_more.js', array('jquery'), null, true);
    wp_enqueue_script('minislide-script', get_template_directory_uri() . '/js/minislide.js', array('jquery'), null, true);
    wp_enqueue_script('modal-script', get_template_directory_uri() . '/js/modal.js', array('jquery'), null, true);
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


function custom_photo_template($template) {
    if (is_singular('photo')) {
        $template = get_stylesheet_directory() . '/template_parts/single-photo.php';
    }
    return $template;
}
add_filter('template_include', 'custom_photo_template');





// Hook pour réceptionner et traiter la requête Ajax


add_action( 'wp_ajax_load_more_photos', 'load_more_photos' );
add_action( 'wp_ajax_nopriv_load_more_photos', 'load_more_photos' );
function load_more_photos() {
    
    check_ajax_referer('load_more_photos', 'nonce');
    // Récupérez le numéro de la page à charger
    $paged = isset($_POST['page']) ? intval($_POST['page']) : 1;
    $photos_home_args = array(
        'post_type' => 'photo',
        'posts_per_page' => 8,
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => $paged,
    );
    $photos_home = new WP_Query($photos_home_args);
    $response = '';
    if ($photos_home->have_posts()) {
        ob_start(); // Démarre la mise en tampon de sortie
        while ($photos_home->have_posts()) : $photos_home->the_post(); 
            get_template_part('template_parts/photo_block'); 
        endwhile;
        $response = ob_get_clean(); // Stocke le contenu du tampon
    }
    wp_reset_postdata();
    // Retourner une réponse au format JSON
    if (!empty($response)) {
        wp_send_json_success($response); // Renvoie un succès avec les données
    } else {
        wp_send_json_error('Aucune autre photo à charger.'); // Renvoie une erreur si rien n'a été trouvé
    }
}