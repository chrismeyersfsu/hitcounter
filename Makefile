
all: build run

build:
	docker build -t chrismeyers/node-hitcounter .

run:
	docker run -p 49160:8080 -d chrismeyers/node-hitcounter
