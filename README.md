# NodeJs Demo Project

*@CarlosFranciscoAnjos*

> Ecommerce inventory application using nestjs & mongodb/mongoose

## Setup w/ docker compose
```
docker compose build .
docker compose up
```
---

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
---

## Improvements

```
> Unit Tests
> Kubernetes
> Jenkins/Git
```
---

## App Structure

```
> Configuration
> Logging
> Authentication
> Users
> Clients
> Items
> Stocks
> Sales
```
----
