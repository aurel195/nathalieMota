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

