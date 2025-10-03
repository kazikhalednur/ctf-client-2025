zip:
	npm run build
	sleep 1
	cp .htaccess out/
	zip -rFS out.zip out
	rm -rf out
