    <div class="gallery homepage-images">
        <?php 
        $photos_query_args = array(
            'post_type' => 'photo',
            'posts_per_page' => 8,
            'orderby' => 'date',
            'order' => 'DESC',
            'paged' => 1,
        );
        $photos_query = new WP_Query($photos_query_args);
        if ($photos_query->have_posts()) :
            while ($photos_query->have_posts()) : $photos_query->the_post(); 
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
            data-action="load_more_photos">Charger plus
        </button>
    </div>


