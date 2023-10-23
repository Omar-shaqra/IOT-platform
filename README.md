# IoT

This project provides a backend for an IoT application with the following functionality:

- Project management
- Sensor management
- User management
- Sensor data collection

## Schemas

The project uses MongoDB and Mongoose for data modeling and storage. The following schemas are defined:

### Project Schema

The `Project` schema models an IoT project with sensors and users. It has the following fields:

- `owner` - The user ID of the project owner
- `sensors` - An array of sensor IDs associated with the project
- `project_type` - A string denoting the project type
- `users` - An array of user objects with user ID and role for the project

### Sensor Schema

The `Sensor` schema models a sensor device. It has:

- `key` - A unique string identifier for the sensor
- `project` - The project ID this sensor belongs to
- `job_description` - A description of what this sensor measures

### Status Schema

The `Status` schema tracks sensor status updates. It contains:

- `sensorID` - The sensor this status update is for
- `userID` - The user that created this status
- `status_type` - A string for the status (e.g. online, offline)
- `timestamp` - When the status was logged

### User Schema

The `User` schema stores user profiles with:

- `fullname`
- `email`
- `password`
- `phone`

### Value Schema

The `Value` schema collects sensor data readings with:

- `sensor` - The sensor that produced this reading
- `topic` - The metric/variable measured (e.g. temperature)
- `value` - The actual reading
