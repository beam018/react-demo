NODE_MODULES = node_modules

.PHONY: all install run clean

all: run

$(NODE_MODULES):
	npm i

install: $(NODE_MODULES)

run: install
	npm start

clean:
	rm -rf node_modules
