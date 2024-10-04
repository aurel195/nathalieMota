<<<<<<< HEAD
<?php
$categories = get_terms(array(
    'taxonomy' => 'categorie',
    'hide_empty' => false,
));

$formats = get_terms(array(
    'taxonomy' => 'format',
    'hide_empty' => false,
));
?>
<div class="filters-container">
    <div class="filters">
        <div class="taxonomie">
            <select id="category-filter">
                <option value="">CATÉGORIES</option>
                <?php foreach ($categories as $category): ?>
                    <option value="<?php echo esc_attr($category->term_id); ?>"><?php echo esc_html($category->name); ?></option>
                <?php endforeach; ?>
            </select>
            <select id="format-filter">
                <option value="">FORMATS</option>
                <?php foreach ($formats as $format): ?>
                    <option value="<?php echo esc_attr($format->term_id); ?>"><?php echo esc_html($format->name); ?></option>
                <?php endforeach; ?>
            </select>
            </div>
        <div class="trier">
            <select id="date-filter">
                <option value="">TRIER PAR</option>
                <option value="recente">Les plus récentes</option>
                <option value="ancienne">Les plus anciennes</option>
            </select>
        </div>
    </div>

=======





<div class="filters-container">
    <div class="filters">
        <div class="taxonomie">
            <div class="filter-category">
                <div class="dropdown-header" data-toggle="dropdown">
                    <p class="in-dropdown-header">CATÉGORIES</p>
                    <img src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/chevron.png'); ?>" alt="chevron dropdown" class="cat_chevron">
                </div> 
                <div class="dropdown-content">
                    <div class="dropdown-item" data-value=""></div>
                    <?php 
                     $categories = get_terms('categorie'); 
                    foreach ($categories as $category) : ?> 
                        <div class="dropdown-item" data-value="<?php echo esc_attr($category->term_id); ?>">
                            <?php echo esc_html($category->name); ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="filter-format">
                <div class="dropdown-header" data-toggle="dropdown">
                    <p class="in-dropdown-header">FORMATS</p>
                    <img src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/chevron.png'); ?>" alt="chevron dropdown" class="chevron">
                </div>
                <div class="dropdown-content">
                    <div class="dropdown-item" data-value=""></div>
                    <?php
                     $formats = get_terms('format');
                     foreach ($formats as $format) : ?>
                        <div class="dropdown-item" data-value="<?php echo esc_attr($format->term_id); ?>">
                            <?php echo esc_html($format->name); ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
            <div class="trier">
                <div class="dropdown-header" data-toggle="dropdown">
                    <p class="in-dropdown-header">TRIER PAR</p>
                    <img src="<?php echo esc_url(get_theme_file_uri() . '/assets/logo/chevron.png'); ?>" alt="chevron dropdown" class="chevron">
                </div>
                <div class="dropdown-content">
                    <div class="dropdown-item" data-value="recente">Les plus récentes</div>
                    <div class="dropdown-item" data-value="ancienne">Les plus anciennes</div>
                </div>
            </div>
    </div>
</div>

<div class="results-container"></div>
>>>>>>> recuperer_commits
