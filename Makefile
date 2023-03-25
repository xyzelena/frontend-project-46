install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

say-hello:
	@echo "Hello, World!"
