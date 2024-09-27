<?php
$photo_reference= get_field('reference');
$photo_categorie = get_the_terms(get_the_ID(), 'categorie' );
$closeImgUrl = " echo esc_url(get_theme_file_uri('/assets/logo/close.png'));";
$nextImgUrl = " echo esc_url(get_theme_file_uri('/assets/logo/next_arrow.png'));";
$prevImgUrl = " echo esc_url(get_theme_file_uri('/assets/logo/prev_arrow.png'));";?>


    <div class="photo-item">   
            <?php the_post_thumbnail(); ?>
        <div class="overlay">
            <div class="icon-container">
                <a href="<?php echo esc_url(get_permalink()); ?>" class="infos-icon"> 
                    <img src="<?php echo esc_url(get_theme_file_uri('/assets/logo/eye.png')); ?>" alt="Voir les infos">
                </a>
                <a href="#" class="fullscreen-icon" data-fullscreen-url="<?php echo esc_url(get_the_post_thumbnail_url(null, 'full')); ?>">
                    <img src="<?php echo esc_url(get_theme_file_uri('/assets/logo/fullscreen.png')); ?>" alt="Afficher en plein écran">
                </a>
            </div>
            
            <div class="photo-reference">
                <p><?php echo esc_html($photo_reference); ?></p>
            </div>
            <div class="photo-categorie">
                <p>
                    <?php
                        foreach ($photo_categorie as $category) {
                            echo esc_html($category->name) . ' '; 
                        }
                    ?>
                </p>
            </div>
        </div>    
    </div>
                