<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../app/assets/dist/css/min.css" rel="stylesheet" media="screen, print">
	<script src="../app/assets/dist/js/myjs.min.js"></script>
        <title>abc</title>
    </head>
    <body>
        <header>
		<nav class="navbar navbar-defualt" role="navigation">
			<div class="navbar-header">
				<ul class="nav navbar-nav">
					<li><a href="./">Home</a></li>
					<li><a href="./about">About</a></li>
					<li><a href="./contact">Contact</a></li>
				</ul>
			</div>
		</nav>
	</header>
        <section>
            @yield('content')
        </section>
        <script>
            
        </script>
    </body>
</html>