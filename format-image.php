<?php
/**
 * This file is runs as the image post format.
 *
 * @package
 */
?>

<article id="post-<?php the_ID(); ?>"  <?php post_class(); ?>>

	<!-- Get our featured image -->
	<?php get_template_part('format','post_thumbnail'); ?>

	<header class="post-header">
		<h1>
            <?php the_title(); ?>
		</h1>
	</header>
	
	
	<div class="image-entry entry">
		<!-- themetacular_the_content makes 'read more' default -->
		<?php themetacular_the_content(); ?>
	</div>
	
	
</article> <!-- .post -->
