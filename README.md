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
