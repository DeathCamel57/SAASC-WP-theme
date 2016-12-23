<!DOCTYPE html>
<html lang="en">
<head>

    <!-- Title of our website -->
	<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>

	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />	
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats please -->
		
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="<?php bloginfo('template_directory');?>/includes/bootstrap-3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
	<?php wp_head(); ?>
</head>
<!-- body_class() injects classes that are built in to Wordpress -->
<body <?php body_class(); ?> >

<!-- Wrap the entire front end and a wrapper -->
<div id="site-wrapper">

<header>
	<h1><?php bloginfo('name'); ?></h1>	
</header>