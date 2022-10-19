# NodeJs Demo Project

*@CarlosFranciscoAnjos*

> Ecommerce inventory application using nestjs & mongodb/mongoose

## Setup w/ docker compose
```
docker compose build .
docker compose up
```

## Setup w/ kubernetes
```
# apply configuration
kubectl apply -f kubernetes

# delete configuration
kubectl delete -f kubernetes

# point to minikube internal docker
eval $(minikube docker-env)

# open shell in pod
kubectl exec --stdin --tty <pod-id> -- /bin/bash
```
---

## App Strcture

### Resources
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

### Roles
```
ADMIN
- create, update, read, delete -- any

USER
- get -- items, stocks, sales
- create -- sales (client.id == user.id)
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
> Unit Tests (jest - integration)
> Kubernetes (database deployment - statefulset)
> Jenkins/Git (automation - pull>build>deploy)
> Business logic 
    - client/user
    - sale/stock
```
