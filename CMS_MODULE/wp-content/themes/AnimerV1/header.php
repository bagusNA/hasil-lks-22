<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta name="viewport" content="width=device-width"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="wrapper" class="hfeed">
    <header id="header" role="banner">
        <div id="site-title" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
            <a href="<?= esc_url( home_url( '/' ) ) ?>"
               title="<?= esc_html( get_bloginfo( 'name' ) ) ?>"
               rel="home" itemprop="url"
            >
                <?= esc_html( get_bloginfo( 'name' ) ) ?>
            </a>
        </div>
        <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
			<?php wp_nav_menu( array(
				'theme_location' => 'main-menu',
				'link_before'    => '<span itemprop="name">',
				'link_after'     => '</span>'
			) ); ?>
        </nav>
    </header>
    <div id="container">