#!/usr/bin/env bash

set -e

#ARCH_LIST=linux/386,linux/amd64,linux/arm64,linux/mips64le
ARCH_LIST=linux/amd64
DOCKET_HUB=hub.deepin.com/ljiang/alchemy-furnace-web

VERSION=$(cat VERSION)

if [ "${DOCKER_TAG}" == "" ]; then
  DOCKER_TAG=local
fi

NODE_VERSION=16
NODE_HOME=/opt/jenkins-node/opt/node-v${NODE_VERSION}
PATH=${NODE_HOME}/bin:${PATH}

commit_date=$(git log -1 --pretty=format:"%ci" | awk '{print $1}' | sed 's/-//g') # 20220122
commit_time=$(git log -1 --pretty=format:"%ci" | awk '{print $2}' | sed 's/://g') # 193522
commit_date_h=$(git log -1 --pretty=format:"%ci") # 2022-01-22 19:35:22 +0800
commit_id=$(git log -1 --pretty=format:"%h" | awk '{print $1}') # 98676bf
commit_id_long=$(git log -1 --pretty=format:"%H" | awk '{print $1}') # 98676bf8ec3996797f7d7ac8733f5d7cb8c53abb

npm install -g yarn
yarn --registry=http://registry-npm.sndu.cn/ install
yarn build

cat > ./dist/assets/version.json << EOF
{
    "version": "${VERSION}",
    "commit_date": "${commit_date}",
    "commit_time": "${commit_time}",
    "commit_date_h": "${commit_date_h}",
    "commit_id": "${commit_id}",
    "commit_id_long": "${commit_id_long}"
}
EOF

docker buildx build \
		--platform ${ARCH_LIST} \
		--pull \
		--push \
		--tag ${DOCKET_HUB}:${DOCKER_TAG} .