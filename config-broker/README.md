# Execute mosquitto with some configurations:
This mosquitto data:

# Configure mosquitto
Securize mosquitto. Login into the container and create a new password
```
$ docker exec -it iot-broker sh
```

Inside, create a admin user with password password, executing this command.
```
$ mosquitto_passwd -c mosquitto.passwd admin
```

This will create a password file called mosquitto.passwd we can edit or download to be used in docker compose
```
$ docker cp iot-broker:/mosquitto.passwd ./
```

# MQTT Clients
Install the MQTT Clients in ubuntu ot make tests
```
$ sudo apt-get install mosquitto mosquitto-clients
```

Subscribe to broker to T01 topic
```
$ mosquitto_sub -d -h localhost -p 1883 -u admin -P password -t T01
```

Publish to broker to T01 topic
```
$ mosquitto_pub -d -h localhost -p 1883 -u admin -P password -t T01 -m 16.89
```