# Description
IoT Deployment Uniovi Robotics Workshop 

## IoT Architecture
![IoT Architecture](captures/iot_architecture.drawio.png "IoT Architecture")

## Deploy all stack services and compile
In powershell
```
$env:NODE_ENV="development"; npm run start
```

```shell
NODE_ENV=development docker compose up --build
```

## Stop stack service
```shell
docker-compose stop
```

## Restart stack service
```shell
docker-compose start
```

## Remove stack service resources
```shell
docker-compose down
```

remove volumes too
```shell
docker-compose down -v
```

## Get service logs
```shell
docker-compose logs
```

## Some IoT UIs

- **Uniovi network** from [portainer](https://localhost:9443) we could check the uniovi network

![Uniovi net](captures/iot_network.png "Uniovi net")

- **API Explorer** from [Loopback Explorer](http://localhost:3000/explorer) we could check the backend API

![API Explorer](captures/api-explorer.png "API Explorer")

- **node-RED Designer** from [node-RED Designer](http://localhost:1880) we could check the iot flows:

![node-RED Designer](captures/node-RED_designer.png "node-RED Designer")

- **node-RED Dashboard** from [IoT Dashboard](http://localhost:4200) we could check the iot sensors graphs:
 
![IoT Frontend Realtime](captures/iot_ui_RT.png "IoT Frontend Realtime")

- **node-RED Dashboard** from [IoT Dashboard](http://localhost:4200) we could check the iot sensors historic:
 
![IoT Frontend Historic](captures/iot_ui_historic.png "IoT Frontend Historic")