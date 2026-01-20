bootstrap:
	yarn
	cp .env.example .env

dev:
	yarn develop

start:
	yarn start

build:
	yarn build

deploy:
	gcloud app deploy app.yaml --project peak-elevator-463211-i3

export:
	yarn strapi export -f ./data/upstairs-data --no-encrypt

import :
	yarn strapi import -f ./data/upstairs-data-03-12-2025.tar.gz --force
