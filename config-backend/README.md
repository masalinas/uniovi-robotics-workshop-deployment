## Create Backend Service

Scaffolding a loopback 4 project called **uniovi-robotics-workshop-backend**
```
lb4 uniovi-robotics-workshop-backend

? Descripción de proyecto: uniovi-robotics-workshop-backend
? Directorio raíz de proyecto: uniovi-robotics-workshop-backend
? Nombre de clase de aplicación: UnioviRoboticsWorkshopBackendApplication
? Seleccionar características para habilitarlas en el proyecto Enable eslint, Enable prettier, Enable mocha, Enable loopbackBuild,
Enable editorconfig, Enable vscode, Enable docker, Enable repositories, Enable services
    force uniovi-robotics-workshop-backend\.yo-rc.json
   create uniovi-robotics-workshop-backend\.editorconfig
   create uniovi-robotics-workshop-backend\.eslintignore
   create uniovi-robotics-workshop-backend\.eslintrc.js
   create uniovi-robotics-workshop-backend\.mocharc.json
   create uniovi-robotics-workshop-backend\.prettierignore
   create uniovi-robotics-workshop-backend\.prettierrc
   create uniovi-robotics-workshop-backend\DEVELOPING.md
   create uniovi-robotics-workshop-backend\package.json
   create uniovi-robotics-workshop-backend\tsconfig.json
   create uniovi-robotics-workshop-backend\.vscode\launch.json
   create uniovi-robotics-workshop-backend\.vscode\settings.json
   create uniovi-robotics-workshop-backend\.vscode\tasks.json
   create uniovi-robotics-workshop-backend\.gitignore
   create uniovi-robotics-workshop-backend\.dockerignore
   create uniovi-robotics-workshop-backend\Dockerfile
   create uniovi-robotics-workshop-backend\README.md
   create uniovi-robotics-workshop-backend\public\index.html
   create uniovi-robotics-workshop-backend\src\application.ts
   create uniovi-robotics-workshop-backend\src\index.ts
   create uniovi-robotics-workshop-backend\src\migrate.ts
   create uniovi-robotics-workshop-backend\src\openapi-spec.ts
   create uniovi-robotics-workshop-backend\src\sequence.ts
   create uniovi-robotics-workshop-backend\src\controllers\index.ts
   create uniovi-robotics-workshop-backend\src\controllers\ping.controller.ts
   create uniovi-robotics-workshop-backend\src\controllers\README.md
   create uniovi-robotics-workshop-backend\src\datasources\README.md
   create uniovi-robotics-workshop-backend\src\models\README.md
   create uniovi-robotics-workshop-backend\src\repositories\README.md
   create uniovi-robotics-workshop-backend\src\__tests__\README.md
   create uniovi-robotics-workshop-backend\src\__tests__\acceptance\home-page.acceptance.ts
   create uniovi-robotics-workshop-backend\src\__tests__\acceptance\ping.controller.acceptance.ts
   create uniovi-robotics-workshop-backend\src\__tests__\acceptance\test-helper.ts

No change to package.json was detected. No package manager install will be executed.
npm warn config cache-min This option has been deprecated in favor of `--prefer-offline`.
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 635 packages in 59s

114 packages are looking for funding
  run `npm fund` for details
```

Now using the lb4 CLI we will add all layers to our service to manage the measures status using a MongoDB Database:

- **STEP01**: Using the lb4 CLI, create a mongoDB datasource called **uniovi** with this data to connect to MongoDB
```
lb4 datasource

? Nombre de Datasource: iot
? Seleccione el conector para uniovi:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? port: 27017
? user: iotuser
? password: [hidden]
? database: iotdb
? Feature supported by MongoDB v3.1.0 and above: Yes
   create src\datasources\uniovi.datasource.ts

No change to package.json was detected. No package manager install will be executed.
npm warn config cache-min This option has been deprecated in favor of `--prefer-offline`.

added 23 packages in 15s

115 packages are looking for funding
  run `npm fund` for details
   update src\datasources\index.ts

Datasource Uniovi se ha/han creado en src\datasources
```

- **STEP02**: Using the lb4 CLI, create a entity model called **Measure**
```
lb4 model

? Nombre de clase Model: Measure
? Seleccione la clase base de modelo Entity (A persisted model with an ID)
? ¿Desea permitir propiedades (de formato libre) adicionales? Yes
Model Measure se creará en src/models/measure.model.ts

Vamos a añadir una propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: id
? Tipo de propiedad: string
? ¿Es id la propiedad de ID? Yes
? ¿id se genera automáticamente? Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: device
? Tipo de propiedad: string
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: sensor
? Tipo de propiedad: string
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: value
? Tipo de propiedad: number
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: datetime
? Tipo de propiedad: date
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad:
   create src\models\measure.model.ts

No change to package.json was detected. No package manager install will be executed.
   update src\models\index.ts

Model Measure se ha/han creado en src\models
```

- **STEP03**: Using the lb4 CLI, create a mongoDB repository to bind the previous Datasoure with the entity model
```
lb4 repository

? Select the datasource UnioviDatasource
? Seleccione el modelo o modelos para los que desea generar un repositorio Measure
   create src\repositories\measure.repository.ts

No change to package.json was detected. No package manager install will be executed.
   update src\repositories\index.ts

Repository MeasureRepository se ha/han creado en src\repositories
```

- **STEP04**: Finally Using the lb4 CLI, create a CRUD controller called **MeasureController** to expose the repository from http:
```
lb4 controller

? Nombre de clase Controller: MeasureController
Controller MeasureController se creará en src/controllers/measure-controller.controller.ts

? ¿Qué especie de controlador desea generar? Controlador REST con funciones CRUD
? ¿Cuál es el nombre del modelo que se va a utilizar con este repositorio CRUD? Measure
? ¿Cuál es el nombre del repositorio CRUD? MeasureRepository
? ¿Cuál es el nombre de la propiedad de ID? id
? ¿Cuál es el tipo del ID? string
? ¿Se omite el ID cuando se crea una instancia nueva? Yes
? ¿Cuál es el nombre de la vía de acceso HTTP base de las operaciones CRUD? /measures
   create src\controllers\measure-controller.controller.ts

No change to package.json was detected. No package manager install will be executed.
   update src\controllers\index.ts

Controller MeasureController se ha/han creado en src\controllers
```

## Start service
```
npm run start
```

![LB4 Swagger](../captures/iot_swagger.png "LB4 Swagger")