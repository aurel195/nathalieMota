
    
<div class="menu_header">
    <div class="logo_menu">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/logo/logo.png" class="Logo" alt="Logo de Nathalie Mota">
    </div>
        <nav id="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'items_wrap' => '<ul id="menu-main-menu" class="menu">%3$s<li id="contact-menu-item" class="menu-item"><a href="#" id="openModal">CONTACT</a></li></ul>'            
            ));
            ?>  
        </nav>
</div>

