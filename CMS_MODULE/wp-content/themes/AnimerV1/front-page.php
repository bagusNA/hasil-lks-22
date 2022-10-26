<?php get_header(); ?>
    <main id="content">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div id="hero">
                <div class="hero__heading">
                    <h1><?= esc_html( get_bloginfo( 'name' ) ) ?></h1>
                    <h2><?= esc_html( get_bloginfo( 'description' ) ) ?></h2>
                </div>
                <img src="<?php the_post_thumbnail_url('large') ?>" alt="">
            </div>

<!--            <header class="header">-->
<!--                <h1 class="entry-title" itemprop="name">--><?php //the_title(); ?><!--</h1> --><?php //edit_post_link(); ?>
<!--            </header>-->
        <?php endwhile; endif; ?>
    </main>
<?php get_footer(); ?>