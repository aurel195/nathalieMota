<?php
$photo_reference= get_field('reference');
$photo_categorie = get_the_terms(get_the_ID(), 'categorie' ); ?>



<div class="lightbox">
    <img class="lightbox__close" src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/close.png'); ?>" alt="Fermer la lightbox">
    <img class="lightbox__next" src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/next_arrow.png'); ?>" alt="Photo suivante lightbox">
    <img class="lightbox__prev" src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/prev_arrow.png'); ?>" alt="Photo précédente lightbox">
<<<<<<< HEAD
    <div class="photo-reference">
                <p><?php echo esc_html($photo_reference); ?></p>
            </div>
            <div class="photo-categorie">
=======
    <div class="lightbox__container">
        <img src="" class="lightbox__image">
        <div class="lightbox__reference">
                <p><?php echo esc_html($photo_reference); ?></p>
            </div>
        <div class="lightbox__category">
>>>>>>> recuperer_commits
                <p>
                    <?php
                        foreach ($photo_categorie as $category) {
                            echo esc_html($category->name) . ' '; 
                        }
                    ?>
                </p>
<<<<<<< HEAD
            </div>
    <div class="lightbox__container">
        <img src="" class="image_lightbox">
        <div class="overlay_lightbox">
            <p class="cat" id="lightbox-category"></p>
            <p class="ref" id="lightbox-reference"></p>
        </div>
    </div>
</div>
=======
        </div>
    </div>
</div>
>>>>>>> recuperer_commits
