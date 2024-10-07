<?php

$args = array(
    'post_type' => 'photo', 
    'posts_per_page' => 1,  
    'orderby' => 'rand',
    'format' => 'paysage',
);

$random_photo_query = new WP_Query($args);

if ($random_photo_query->have_posts()) :
    while ($random_photo_query->have_posts()) : 
    $random_photo_query->the_post();?>

            <div class="hero-header">
                <img src="<?php the_post_thumbnail_url();?>" class="hero-image">
                    <img src ="<?php echo get_template_directory_uri(); ?>/assets/logo/titre_header.png" class="titre_header">
                </div>   
            </div>
        <?php
    endwhile;
endif;
wp_reset_postdata();
?>

