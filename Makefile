
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

# https://www.npmjs.com/package/http-server
serve_prod:
	http-server ./build -p 8081
