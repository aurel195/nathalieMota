
    <div class="gallery">
        <?php 
        $photos_home_args = array(
            'post_type' => 'photo',
            'posts_per_page' => 8,
            'orderby' => 'date',
            'order' => 'DESC',
            'paged' => 1,
        );
        $photos_home = new WP_Query($photos_home_args);
        if ($photos_home->have_posts()) :
            while ($photos_home->have_posts()) : $photos_home->the_post(); 
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
</div>