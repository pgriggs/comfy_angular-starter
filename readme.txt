/* Get Started */

	cd comfy_angular-starter

	npm install

	gulp

	--- serves app at localhost:3000

/* Make this starter app your own */

	--- write your code in app/
		--- write custom, shared styles in app/sass/*.scss
		--- write custom, shared js in app/js/*/*.js
		--- create more view templates in app/views/*/*.html
		--- write custom styles for specific views in app/views/*/*.scss
		--- write custom js for specific views in app/views/*/*.js

	--- app/ is compiled to build/ everytime you run 'gulp' or 'gulp production'

	--- 'gulp production' runs the same build tasks as 'gulp', without starting the local dev server.

/* Deploy to production */

	cd comfy_angular-starter

	npm install

	gulp production

	WebServer configurations:

		To serve the sitemap.xml file,

		& to compensate for removing the # from the url for each angular route.

			1. APACHE
				a. apache2.conf example

				


			2. NGINX
				a. nginx.conf example




			3. CADDY
				a. Caddyfile example

				yoursite.com {
				root /yourSitesDirectory/build
				gzip
					rewrite {
					        to {path} {path}/ /index.html
					}
				}

				http://yoursite.com {
				    redir https://yoursite.com{uri}
				}

				www.yoursite.com {
				    redir https://yoursite.com{uri}
				}

				http://yoursite.com/sitemap.xml {
				    root /yourSitesDirectory/build/sitemap.xml
				}
