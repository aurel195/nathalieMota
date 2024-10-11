<?php
function photoworks_enqueue_style() {
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('jquery');
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);
    wp_enqueue_script('lightbox-script', get_template_directory_uri() . '/js/lightbox.js', array('jquery'), null, true);
    wp_enqueue_script('loadmore-script', get_template_directory_uri() . '/js/load_more.js', array('jquery'), null, true);
    wp_enqueue_script('minislide-script', get_template_directory_uri() . '/js/minislide.js', array('jquery'), null, true);
    wp_enqueue_script('modal-script', get_template_directory_uri() . '/js/modal.js', array('jquery'), null, true);
    wp_enqueue_script('filters-script', get_template_directory_uri() . '/js/filters.js', array('jquery'), null, true);
    wp_localize_script('loadmore-script', 'loadMoreData', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
    wp_localize_script('filters-script', 'filtersData', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('filters_photos')
    ));
}
add_action('wp_enqueue_scripts', 'photoworks_enqueue_style');
add_action('wp_enqueue_scripts', 'photoworks_enqueue_style');

add_action('wp_enqueue_scripts', 'photoworks_enqueue_style');

function photoworks_menu() {    
  register_nav_menu( 'main-menu', 'Menu Principal');
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




// Ajax load_more


add_action( 'wp_ajax_load_more_photos', 'load_more_photos' );
add_action( 'wp_ajax_nopriv_load_more_photos', 'load_more_photos' );
function load_more_photos() {
   
    check_ajax_referer('load_more_photos', 'nonce');
    
    $paged = isset($_POST['page']) ? intval($_POST['page']) +1 : 1;
    
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
        ob_start(); 
        while ($photos_home->have_posts()) : $photos_home->the_post(); 
            get_template_part('template_parts/photo_block'); 
        endwhile;
        $response = ob_get_clean();
        wp_send_json_success($response);  
    } else {
        wp_send_json_error('Aucune autre photo à charger.'); 
    }
    wp_reset_postdata(); 
}





// Ajax filters

add_action('wp_ajax_filters_photos', 'filters_photos');
add_action('wp_ajax_nopriv_filters_photos', 'filters_photos');

function filters_photos() {

    check_ajax_referer('filters_photos', 'nonce');
    
    $category = isset($_POST['categorie']) ? $_POST['categorie'] : '0';
    $format = isset($_POST['format']) ? $_POST['format'] : '0';
    $sort = isset($_POST['sort']) ? $_POST['sort'] : 'DESC';
    
    
    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => $sort,
    );
    


    $tax_query = array('relation' => 'AND');
    if (!empty($category)) {
        $tax_query [] = array (
            'taxonomy' => 'categorie',
            'field' => 'term_id',
            'terms' => $category,
        );
    }
    if (!empty($format)) {
        $tax_query[] = array(
        'taxonomy' => 'format',
        'field' => 'term_id',
        'terms' => $format,
        );
    }           
    if (count($tax_query) > 1) {
        $args['tax_query'] = $tax_query;
    }
    
    $query = new WP_Query($args);
  

    if ($query->have_posts()) {
        ob_start();
        while ($query->have_posts()) : $query->the_post() ;
            get_template_part('template_parts/photo_block');
        endwhile;
        $response = ob_get_clean();
        wp_send_json_success($response); 
    }


    else {
        wp_send_json_error( "<p>Aucune photo ne correspond aux critères sélectionnés.</p>");
    }

    wp_reset_postdata();

}   
