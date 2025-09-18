 # Execute mode-red with some configurations:
This node-RED data:

- **Port**: 1880
- **Admin account**: admin/password

```
$ docker run -d \
  --name iot-gateway \
  -p 1880:1880 \
  -v $(pwd)/config-gateway/settings.js:/data/settings.js:ro \
  nodered/node-red
```

# Configure node-red settings
Securize node-red. Login into the container and create a new password
```
$ docker exec -it iot-gateway bash
```

Inside, create a admin password, executing this command.
```
$ node -e "console.log(require('bcryptjs').hashSync('password', 8));"
$2b$08$W6P6IKK1X2k8vDuNoSC5JOAMN7Bft7zBjahn69rFM.g.6.irqRIpu
```

Recover the default settings.js from host to be configured in our container
```
$ docker cp iot-gateway:/usr/src/node-red/node_modules/node-red/settings.js ./
```

# Inside container
When the container start the working folder is **/usr/src/node-red** but the data is saved in **/data**