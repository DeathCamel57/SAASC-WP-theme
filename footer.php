
        </div> <!-- #site-wrapper: found in header.php -->

        <!-- Footer Page Element -->
        <div class="container-fullwidth footer-container">
           <div class="container footer">
                <div class="col-md-4 footer-column">
                    <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('Left\ Footer')): endif; ?>
               </div>
                <div class="col-md-4 footer-column">
                    <div class="footer-text-heading">Middle</div>
                    <div class="footer-text-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum incidunt totam corrupti, odit cumque commodi corporis laborum aspernatur voluptatum, aliquam ullam sequi fuga amet, id iste! Beatae vitae obcaecati autem.</div>
                </div>
                <div class="col-md-4 footer-column">
                    <div class="footer-text-heading">Right</div>
                    <div class="footer-text-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum incidunt totam corrupti, odit cumque commodi corporis laborum aspernatur voluptatum, aliquam ullam sequi fuga amet, id iste! Beatae vitae obcaecati autem.</div>
                </div>
                <div class="cold-md-12">
                    <p class="copyright">© Copyright <?php echo date("Y"); ?> | SAASC
                </div>
            </div>
        </div>
    </div> <!-- .container: found in header.php -->
    
    <!-- JS at bottom to speed loading -->
    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha256-gL1ibrbVcRIHKlCO5OXOPC/lZz/gpdApgQAzskqqXp8=" crossorigin="anonymous"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>
    <?php wp_footer(); ?>
</body>
</html>
