<?php get_header(); ?>
<?php
$photo_query_args = array(
    'post_type' => 'photo', 
    'posts_per_page' => 1,  
);

<<<<<<< HEAD
if (have_posts()) : 
    while (have_posts()) : the_post(); 
=======

>>>>>>> recuperer_commits
        $type = get_field('type');
        $reference = get_field('reference');
        $categorie = get_the_terms(get_the_ID(), 'categorie' );
        $format = get_the_terms(get_the_ID(), 'format' );
        $annee = get_the_date('Y'); 
?>
        <div class="container">
            <div class="photo-info">
                <div class="title">
                    <h2><?php the_title(); ?></h2>
                </div>
                <div class="infos">
                <p class="info">RÉFÉRENCE : <?php echo esc_html($reference); ?></p>
                <p class="info">CATÉGORIE : 
                    <?php
                        foreach ($categorie as $category) {
                            echo esc_html($category->name) . ' '; 
                        }
                    ?>
                </p>
                <p class="info">FORMAT : 
                    <?php
                        foreach ($format as $formats) {
                            echo esc_html($formats->name) . ' '; 
                        }
                    ?>
                </p>
                <p class="info">TYPE : <?php echo esc_html($type); ?></p>
                <p class="info">ANNÉE : <?php echo esc_html($annee); ?></p>
                </div>
            </div>
            <div class="photo">
                <?php the_content('full'); ?>
            </div>  
        </div>
        <div class="contact-container">
            <div class="contact-info">
                <p class="contact-center">Cette photo vous intéresse ?</p>
                <button id="contact-btn" data-reference="<?php echo esc_html($reference); ?>">Contact</button>
            </div>
            <?php 
            $nextPost = get_next_post();
            $prevPost = get_previous_post();
            $prevThumbnail = $prevPost ? get_the_post_thumbnail_url($prevPost->ID, 'thumbnail') : '';
            $nextThumbnail = $nextPost ? get_the_post_thumbnail_url($nextPost->ID, 'thumbnail') : ''; 
            ?>
            <div class="mini-slider">
                <div class="mini-photo" id="mini-photo"></div>
                <div class="arrow">
                    <?php if (!empty($prevPost)) : ?>
                        <img class="arrow" src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/previous.png'); ?>" alt="Photo précédente" data-thumbnail-url="<?php echo esc_url($prevThumbnail); ?>" data-target-url="<?php echo esc_url(get_permalink($prevPost->ID)); ?>">
                    <?php endif; ?>
                    <?php if (!empty($nextPost)) : ?>
                        <img class="arrow" src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/next.png'); ?>" alt="Photo suivante" data-thumbnail-url="<?php echo esc_url($nextThumbnail); ?>" data-target-url="<?php echo esc_url(get_permalink($nextPost->ID)); ?>">
                    <?php endif; ?>
                </div>
            </div>
        </div>
<<<<<<< HEAD
        <div class="related-container">
            <div class="related-title">
            <h3>VOUS AIMEREZ AUSSI</H3>
            </div>
=======
        
        <div class="related-title">
            <h3>VOUS AIMEREZ AUSSI</H3>
        </div>
>>>>>>> recuperer_commits
            <div class="related-photos">            
                <?php 
                $currentCategorieIds = array();
                    foreach ($categorie as $category) {
                        $currentCategorieIds[] = $category->term_id;
                    }
                
                
<<<<<<< HEAD
                $photo_related_query_args = array(
=======
                    $related_photos_query_args = array(
>>>>>>> recuperer_commits
                    'post_type' => 'photo', 
                    'posts_per_page' => 2,
                    'posts__not_in' => array(get_the_ID()), 
                    'orderby' => 'rand',
                    'format' => 'paysage', 
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'categorie',
                            'field' => 'term_id',
                            'terms' => $currentCategorieIds, 
                        ),    
                    ),
                ); 
                
<<<<<<< HEAD
                $related_photos = new WP_Query($photo_related_query_args);
                if ($related_photos->have_posts()) :
                    while ($related_photos->have_posts()) : $related_photos->the_post(); ?>
                
                    <?php get_template_part('template_parts/photo_block'); ?>
                 
                    <?php endwhile; 
=======
               $related_photos_query = new WP_Query($related_photos_query_args);
        if ($related_photos_query->have_posts()) :
            while ($related_photos_query->have_posts()) : $related_photos_query->the_post(); 
                get_template_part('template_parts/photo_block'); 
            endwhile; 
>>>>>>> recuperer_commits
                else : 
                    echo '<p>Aucune photo associée trouvée.</p>';
                endif; 
                wp_reset_postdata(); 
                ?>
                             
            </div>      
<<<<<<< HEAD
        </div>
    <?php endwhile;
endif; ?>
=======

            <?php get_template_part('template_parts/lightbox'); ?>
        
        </div>
            
>>>>>>> recuperer_commits
<?php get_footer(); ?>