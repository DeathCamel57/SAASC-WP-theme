<?php 

/************************************************************
 * Setup default parts of the theme (menues, post types etc)
***********************************************************/
function tt_theme_setup() {

	/**
	 * Add Featured image support
	 */
	add_theme_support( 'post-thumbnails' );



	/**
	 * Add post format support link for main post types
	 */

	add_theme_support( 'post-formats',array('image','quote','video','gallery','status','link') );



	/**
	 * Define Header/Main menu area
	 */
	register_nav_menu('header_menu','The menu for the header/main menu of the website.');


	/**
	 * Define Header/Main menu area
	 */

	add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
    
    /** 
     * Theme footer stuff...
     */
    if (function_exists('register_sidebar')) {
        register_sidebar(array(
        'name' => 'Left Footer',
        'id'   => 'footer-left',
        'description'   => 'The left most footer section',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',	
        'after_title'   => ''
                ));
    }
    
    if (function_exists('register_sidebar')) {
        register_sidebar(array(
        'name' => 'Middle Footer',
        'id'   => 'footer-middle',
        'description'   => 'The middle footer section',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',	
        'after_title'   => ''
                ));
    }
    
    if (function_exists('register_sidebar')) {
        register_sidebar(array(
        'name' => 'Right Footer',
        'id'   => 'footer-right',
        'description'   => 'The right most footer section',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',	
        'after_title'   => ''
                ));
    }
}

add_action('after_setup_theme', 'tt_theme_setup');

/* To create a Bootstrap 4 Alpha Menu, call "create_bootstrap_menu(menu)" */
function create_bootstrap_menu( $theme_location ) {
    if ( ($theme_location) && ($locations = get_nav_menu_locations()) && isset($locations[$theme_location]) ) {
         
        $menu_list  = '<nav class="navbar navbar-toggleable-md navbar-fixed-top navbar-custom">' ."\n";
        $menu_list .= '<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">' ."\n";
        $menu_list .= '<i class="fa fa-bars navbar-toggler-icon" aria-hidden="true"></i>' ."\n";
        $menu_list .= '</button>' ."\n";
        $menu_list .= '' ."\n";
        $menu_list .= '<div class="container nav-container">' ."\n";
        $menu_list .= '<a class="navbar-brand" href="' . home_url() . '">' . get_bloginfo( 'name' ) . '</a>';
        
        $menu_list .= '<!-- Collect the nav links, forms, and other content for toggling -->' ."\n";
        $menu_list .= '<div class="collapse navbar-collapse" id="navbar" aria-expanded="false">' ."\n";
        
        $menu = get_term( $locations[$theme_location], 'nav_menu' );
        $menu_items = wp_get_nav_menu_items($menu->term_id);
 
        $menu_list .= '<ul class="nav navbar-nav mr-auto">' ."\n";
          
        $bool = false;
        
        foreach( $menu_items as $menu_item ) {
            if( $menu_item->menu_item_parent == 0 ) {
                 
                $parent = $menu_item->ID;
                 
                $menu_array = array();
                foreach( $menu_items as $submenu ) {
                    if( $submenu->menu_item_parent == $parent ) {
                        $bool = true;
                        $menu_array[] = '<li class="nav-item"><a href="' . $submenu->url . '" class="nav-link">' . $submenu->title . '</a></li>' ."\n";
                    }
                }
                if ( $bool == true && count( $menu_array ) > 0 ) {
                     
                    $menu_list .= '<li class="dropdown nav-item">' ."\n";
                    $menu_list .= '<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' . $menu_item->title . ' <span class="caret"></span></a>' ."\n";
                     
                    $menu_list .= '<ul class="dropdown-menu">' ."\n";
                    $menu_list .= implode( "\n", $menu_array );
                    $menu_list .= '</ul>' ."\n";
                     
                } else {
                    $menu_list .= '<li class="nav-item">' ."\n";
                    if( $menu_item->url == get_permalink() ) {
                        $menu_list .= '<a href="' . $menu_item->url . '" class="nav-link active">' . $menu_item->title . '</a>' ."\n";
                    } else {
                        $menu_list .= '<a href="' . $menu_item->url . '" class="nav-link">' . $menu_item->title . '</a>' ."\n";
                    }
                }
            }
             
            // end <li>
            $menu_list .= '</li>' ."\n";
        }
          
        $menu_list .= '</ul>' ."\n";
        $menu_list .= '</div>' ."\n";
        $menu_list .= '</div>' ."\n";
        $menu_list .= '</div><!-- /.container -->' ."\n";
        $menu_list .= '</nav>' ."\n";
  
    } else {
        $menu_list = '<!-- no menu defined in location "'.$theme_location.'" -->';
    }
     
    echo $menu_list;
}


/************************************************************
 * Load themetacular specific files
************************************************************/
include get_template_directory() . "/includes/themetacular/themetacular_init.php";

/************************************************************
 * 	Load all Javascipt and CSS files
************************************************************/
function tt_theme_scripts() {

	if (is_admin()) return;

	/**
	 *  Register jQuery
	 */

	wp_enqueue_script( 'jquery' );

	/**
	 *  Register and enqueue Custom JS file
	 */
	wp_register_script( 'custom_js', get_template_directory_uri() . '/includes/js/custom.js', false, null, true );
	wp_enqueue_script( 'custom_js' );

	/**
	 *  Register and enqueue Custrom CSS
	 */
	wp_register_style('wp_default_stylesheet', get_stylesheet_uri() );
	wp_enqueue_style('wp_default_stylesheet');

}

add_action('wp_enqueue_scripts','tt_theme_scripts');

/************************************************************
	Silly 404 Excuse
************************************************************/

function exclamation() {

    $excuse_array = ['By the hammer of Thor!','Well bake my potatoes!','By Jango!','Twist my nipple nuts and send me to Alaska'];
    $array_size = count($excuse_array) -1;
    $random_number = rand(0,$array_size);

    echo $excuse_array[$random_number];
}

function exclamation_descrtiption() {

    $excuse_array = ['By the hammer of Thor!','Well bake my potatoes!','By Jango!','Twist my nipple nuts and send me to Alaska'];
    $array_size = count($excuse_array) -1;
    $random_number = rand(0,$array_size);

    echo $excuse_array[$random_number];
}

/************************************************************
	Silly 404 Excuse
************************************************************/
function register_menues() {
  register_nav_menu('header-menu',__( 'Navigation Links' ));
}
add_action( 'init', 'register_menues' );

?>