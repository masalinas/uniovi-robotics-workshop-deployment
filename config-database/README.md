# Execute mongoDB with some configurations:
This MongoDB data:

- **Port**: 27017
- **Admin account**: admin/password
- **Init database**: iotdb
- **Creare a default iotdb account**: maiind/password
```
$ docker run -d \
  --name iot-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  -e MONGO_INITDB_DATABASE=iotdb \
  -v $(pwd)/config-database/init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro \
  -v iot_db:/data/db \
  mongo
```

# Connect to DB
Using Mongo Compass UI we can connect using **admin** or **maiind** accounts. The first one will have access to all databases, the second one only to **iotdb** database.

Mongo URI string for **admin** account for any database
```
mongodb://admin:password@localhost:27017?authSource=admin&readPreference=primary&ssl=false
```

Mongo URI string for **maiind** account for **iotdb** database.
```
mongodb://maiind:password@localhost:27017/iotdb?readPreference=primary&ssl=false
```