version = $(shell cat package.json | grep version | awk -F'"' '{print $$4}')

install:
	@spm install

watch:
	@spm doc watch

build:
	@spm build

publish: publish-doc
	@spm publish

publish-doc: clean
	@spm doc publish

clean:
	@rm -rf _site

test:
	@spm test
