SHELL=/bin/bash

.PHONY: help
help:
	@echo Alchemy Furnace Web
	@echo "准备工作： make install"
	@echo "本地构建： make build"
	@echo "本地启动： make serve"

.PHONY: install
install:
	yarn --registry=http://registry-npm.sndu.cn/ install

.PHONY: serve
serve:
	yarn serve

.PHONY: load-local-config
load-local-config:
	@cp -v $(CURDIR)/.data/proxy.local.conf.json $(CURDIR)/proxy.conf.json

.PHONY: load-dev-config
load-dev-config:
	@cp -v $(CURDIR)/.data/proxy.dev.conf.json $(CURDIR)/proxy.conf.json

# -------- docker stages >>>> --------
.PHONY: docker
docker:
	bash build-docker.bash

.PHONY: docker-release
docker-release:
	@echo $(DOCKET_HUB):$(DOCKER_TAG)
# -------- docker stages <<<< --------
