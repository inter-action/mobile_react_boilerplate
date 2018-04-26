
PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

.PHONY: 

lint:
	eslint src
	eslint -c build-scripts/.eslintrc.json build-scripts

test:
	ava

clean: 
	rm -rf build/*
	mkdir -p build


dev:
	webpack-dev-server --config webpack.config.dev.js --progress

prod: clean
	NODE_ENV=production webpack --config webpack.config.prod.js --progress

analyze:
	# check errors in stats.json if webpack bundle failed
	# webpack-bundle-analyzer --help
	NODE_ENV=production webpack --config webpack.config.prod.js --profile --json > stats.json
	webpack-bundle-analyzer -h 127.0.0.1 -p 8888 stats.json
	
# https://www.npmjs.com/package/http-server
serve_prod:
	http-server ./build -p 8084
