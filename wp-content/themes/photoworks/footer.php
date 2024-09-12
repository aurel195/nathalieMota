

<?php 


    wp_nav_menu(array('theme_location' => 'footer-menu', 
        'menu_class' => 'footer_menu',
        'menu_id' => 'footer-menu'));



     get_template_part('templates_part/modale_contact');

     wp_footer();

?>