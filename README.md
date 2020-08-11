# Friend(lier) Unique IDs

Nodejs module for making friendlier unique IDs: equivalent to `base58(uuid.v4())`

This library uses the Bitcoin base-58 alphabet.

## Pre-Requisites

*   NodeJS LTS
*   Docker (verify install with ```docker -v``` and ```docker-compose -v```)
*   Git Bash  (if Windows)
*   Oonum Npm Packages Login (setup account at ```npmjs.com``` and login from the command line using ```npm login```)
*   Gcloud (see <https://cloud.google.com/container-registry/docs/advanced-authentication>)
    *   during ``gcloud init`` select ```[2] oonum-management-e05248``` and  ```[13] us-west1-a```
    *   after gcloud init ```gcloud auth configure-docker```

## Getting Started

Run Git Bash as an administrator (if Windows)  

```bash
# get up and running for development
npm install
npm run devup
npm run test
```
## Release New NPM Module
```bash
# npm publish (github admins only)
npm version patch
```

## Exports

```typescript
exports function newId(): string;
```
## Use
```typescript
import { newId } from '@oonum/id-factory'

const id = newId();
```


