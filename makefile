.DEFAULT_GOAL: help

include .env
export $(shell sed 's/=.*//' .env)

NO_COLOR = \033[0m
INFO_COLOR = \033[34m
SUCCESS_COLOR = \033[32m

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF}' $(MAKEFILE_LIST) 

start: start-gatsby ## start default dev version

start-jekyll: ## start jekyll dev version
	@cd jekyll && docker-compose up
	
start-gatsby: ## start gatsby dev version
	@cd gatsby && PORT=${GATSBY_DEV_PORT} docker-compose up

deploy: deploy-gatbsy ## deploy default version

deploy-jekyll: ## deploy jekyll version to production
	@echo "no deploy, push to master"

deploy-gatsby: ## deploy gatbsy version to production
	@cd gatbsy && npm run deploy

kill: ## kill all containers
	@cd gatsby && docker-compose kill -s
	@cd jekyll && docker-compose kill -s