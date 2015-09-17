NEXTTAG = deploy/$(shell git describe deploy --abbrev=0 --tags|awk -F / '{print $$2+1}')
TAG = deploy/$(shell git describe deploy --abbrev=0 --tags|awk -F / '{print $$2}')

PHONY = deploy

deploy:
	@echo RELEASE: $(NEXTTAG)
	@(git diff --quiet && git diff --cached --quiet) || (echo "*** Repository contains uncommited changes." && exit 1)
	brunch build --env production
	rm -rf .tmp && cp -r public/ .tmp
	git checkout gh-pages
	cp -r .tmp/* .
	git add -A .
	@(git diff --quiet && git diff --cached --quiet) || git commit -m "Add code for $(NEXTTAG)"
	git tag $(NEXTTAG) && git push origin gh-pages && git push --tags
	git checkout master
	brunch build
