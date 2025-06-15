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
	gcloud app deploy app.yaml --project calcium-ember-452706-a9

export:
	yarn strapi export -f ./data/upstairs-data --no-encrypt

import :
	yarn strapi import -f ./data/upstairs-data.tar.gz --force