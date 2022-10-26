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

    <?php
        $query = new WP_Query([
           'order' => 'DESC',
            'orderby' => 'date',
            'post_type' => 'post',
            'posts_per_page' => '4'
        ]);
    ?>

    <div class="recommended">
        <h2>Recommended</h2>
        <div id="recommended-list">
		    <?php while($query->have_posts()): $query->the_post(); ?>
                <div class="recommended__item">
                    <h3><?php the_title(); ?></h3>
                    <a href="">
                        <img src="<?php the_post_thumbnail_url('thumbnail'); ?>"
                             alt="<?php the_title(); ?>"
                        >
                    </a>
                </div>
		    <?php endwhile; ?>
        </div>
    </div>
<?php get_footer(); ?>