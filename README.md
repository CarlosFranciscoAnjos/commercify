# NodeJs Demo Project

*@CarlosFranciscoAnjos*

> Ecommerce inventory application using nestjs & mongodb/mongoose

## Setup

### mongodb
```
docker run -d --rm --name mongo-db \
  -p 27017:27017 \
  --network ecommerce \
  -e MONGO_INITDB_ROOT_USERNAME=mongo \
  -e MONGO_INITDB_ROOT_PASSWORD=mongo \
  mongo
```

### mongo express
```
docker run -d --rm --name mongo-ui \
  -p 8081:8081 \
  --network ecommerce \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=mongo \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=mongo \
  mongo-express
```

### ecommerce image
```
# dev
npm run start:dev

# w/ docker
docker build -t ecommerce-app .
docker run -d --rm --name ecommerce-app \
  -p 3000:3000 \
  --network ecommerce \
  ecommerce-app
```

### git
```
# add remote ref
# commit
# push
```

### docker compose
```
docker compose build .
docker compose up
```

## Api Guide

### Curl

```
# check status
curl http://127.0.0.1:3000/api/v1/status

# get clients
curl http://127.0.0.1:3000/api/v1/clients

# get items
curl http://127.0.0.1:3000/api/v1/items

# get sales
curl http://127.0.0.1:3000/api/v1/sales
```

### Postman

```
# import collection
EcommerceDemo.postman_collection.json

# structure
> items
> clients
> sales
> test-flows 
```

# Improvements

```
Unit Tests
Swagger
Validations
Authentication/Roles
Jenkins/Git
```
