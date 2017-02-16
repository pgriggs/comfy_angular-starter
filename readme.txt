Get Started

	cd comfy_angular-starter

	npm install

	gulp

	--- serves app at localhost:3000

Deploying to production:

	cd comfy_angular-starter

	npm install

	gulp production

	WebServer configurations:

		To serve the sitemap.xml file,

		& to compensate for removing the # from the url for each angular route.

			1. APACHE
				a. 

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
