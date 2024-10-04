<<<<<<< HEAD

    <div class="gallery">
        <?php 
        $photos_home_args = array(
=======
    <div class="gallery homepage-images">
        <?php 
        $photos_query_args = array(
>>>>>>> recuperer_commits
            'post_type' => 'photo',
            'posts_per_page' => 8,
            'orderby' => 'date',
            'order' => 'DESC',
            'paged' => 1,
        );
<<<<<<< HEAD
        $photos_home = new WP_Query($photos_home_args);
        if ($photos_home->have_posts()) :
            while ($photos_home->have_posts()) : $photos_home->the_post(); 
=======
        $photos_query = new WP_Query($photos_query_args);
        if ($photos_query->have_posts()) :
            while ($photos_query->have_posts()) : $photos_query->the_post(); 
>>>>>>> recuperer_commits
                get_template_part('template_parts/photo_block'); 
            endwhile;   
        endif; 
        wp_reset_postdata(); 
        ?>
    </div>
    <div class="btn">
        <button
            class="js-load-more-photos"
            data-page="1"
            data-nonce="<?php echo wp_create_nonce('load_more_photos'); ?>"
            data-action="load_more_photos"
            data-ajaxurl="<?php echo admin_url('admin-ajax.php'); ?>">Charger plus
        </button>
    </div>
<<<<<<< HEAD
</div>
=======


>>>>>>> recuperer_commits
