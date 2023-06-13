# Gym Registration

## Reference: 

github: https://github.com/yshashi/GymRegistartionCrud.git  
Youtube: https://www.youtube.com/watch?v=PdLpeXd5plc


## Set up
1. Add material
```
ng add @angular/material 
```
2. Add Bootstrap and Font Awesome in index.html
3. Add ng-angular-popup and ng-confirm-box
```
npm i ng-angular-popup
```

## local test
1. Json-server, in the root directory, run
```
docker compose up -d
```
Note: look at the your id and group id, make sure the number matchs in the docker-compose.override.yml  
If there is problem mounting db.json file, make sure data folder owner is current user and precreate db.json file  
And use following command to prune the existing container
```
docker container prune
```
2. test locally
```
ng s -o
```
