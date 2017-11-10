<?php 
/**
 * This file will hold the post thumnbnail information and use it in an include rather than copy and paste into multuple themes.
 * 
 * @package themetacular
 */

?>
<!-- Grab the featured image -->
<?php if ( '' != get_the_post_thumbnail() ) { ?>

    <?php

        //The settings to be pased to the post_thumbnail
        $args = array(
            'class' => 'img-fluid' /*,
            'alt'   => trim( strip_tags( $wp_postmeta->_wp_attachment_image_alt ) )*/
        );

        the_post_thumbnail( 'large-image', $args );

      ?>

<?php } ?>