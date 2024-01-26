DOCKER_IMAGE_VERSION ?= 19.0.1
#insert todays date convention

.PHONY: list
list:
	@sh -c "$(MAKE) -p no_targets__ 2>/dev/null | \
	awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | \
	grep -v Makefile | \
	grep -v '%' | \
	grep -v '__\$$' | \
	sort -u"

.PHONY: npm_install
npm_install:
	npm install

.PHONY: run_capstone
run_capstone: 
	ENV_EXTERNAL_API=true \
	ENV_API_URL=http://192.168.1.234:3004 \
	npm run dev:capstone

