db.createUser({
    user: "iotuser",
    pwd: "password",
    roles: [
      {
        role: "dbOwner",
        db: "iotdb"
      }
    ]
  })

db.createCollection("Measure")  