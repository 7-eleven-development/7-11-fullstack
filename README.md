# 🌍 7-11 Fullstack Sensor API

This project is a backend REST API for sensor data collection, built using **Node.js**, **Express**, and **Swagger**. It serves as a foundational platform for working with various environmental sensors like air quality, GPS, pulse, sound, and temperature.

---

=======
## 😎 Developers

- Sebastian Ritschewald
- Andreas Zetterlund
- Frank Norqvist

---

## 📁 Project Structure

```
7-11-fullstack/
├── api/
│   └── routes/
│       ├── airQualitySensor.js     # Routes for air quality sensors
│       ├── company.js              # Company-related routes
│       ├── device.js               # Device routes (GET/POST/device data)
│       ├── gpsSensor.js            # GPS sensor data routes
│       ├── pulseSensor.js          # Pulse sensor data routes
│       ├── soundSensor.js          # Sound sensor data routes
│       ├── tempSensor.js           # Temperature sensor routes
│       ├── testErrorRoute.js       # Test route for triggering errors
│       └── users.js                # User auth and registration routes
│
├── controllers/
│   └── middleware/
│       ├── deviceAccessMiddleware.js # Auth logic for device-level access
│       ├── errorHandler.js           # Global error handler
│       ├── helper.js                 # Utility/helper functions
│       ├── logger.js                 # Custom request logger middleware
│       └── verifyJWT.js              # JWT authentication middleware
│
├── docs/
│   ├── airQualitySwagger.js       # Swagger docs for air quality
│   ├── deviceSwagger.js           # Swagger docs for devices
│   ├── gpsSwagger.js              # Swagger docs for GPS
│   ├── pulseSwagger.js            # Swagger docs for pulse
│   ├── soundSwagger.js            # Swagger docs for sound
│   ├── tempSwagger.js             # Swagger docs for temperature
│   ├── userSwagger.js             # Swagger docs for user routes
│   └── swagger.js                 # Swagger base setup file
│
├── models/
│   ├── db.js                      # DB connection or logic
│   └── setupDB.js                 # DB setup/initialization script
│
├── node_modules/                  # Installed dependencies
├── .env                           # Environment variables
├── .gitignore                     # Files/folders to ignore in Git
├── access.log                     # Request log (generated)
├── app.js                         # Main Express app setup
├── error.log                      # Error log (generated)
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Exact dependency versions
├── README.md                      # Project documentation
└── server.js                      # Server entry point and Swagger loader

```

---

## 🚀 Getting Started

### ✅ Prerequisites

=======
- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### 💾 Installation

```bash
git clone https://github.com/7-eleven-development/7-11-fullstack.git
cd 7-11-fullstack
add .env file with JWT_SECRET
npm install
```

---

## ▶️ Running the Server

```bash
node server.js
```

Visit: [http://localhost:8000](http://localhost:8000)  
Swagger Docs: [http://localhost:8000/api-docs](http://localhost:8000/api-docs)

---

## 📡 Available Endpoints

| Sensor      | Endpoint          | Methods       |
| ----------- | ----------------- | ------------- |
| Air Quality | `/api/airQuality` | `GET`, `POST` |
| GPS         | `/api/gps`        | _Pending_     |
| Pulse       | `/api/pulse`      | _Pending_     |
| Sound       | `/api/sound`      | _Pending_     |
| Temperature | `/api/temp`       | _Pending_     |
=======
| Sensor          | Endpoint              | Methods |
|-----------------|------------------------|---------|
| Company         | `/api/company`         | `GET`, `POST` |
| User            | `/api/users/register ` | `POST`    |
| User            | `/api/users/login `    | `POST`    |
| Device          | `/api/device/:id/latest-data OR /:id/trend`| `GET`  |
| Air Quality     | `/api/airQuality`      | `GET`, `POST` |
| GPS             | `/api/gps`             | _Pending_ |
| Pulse           | `/api/pulse`           | _Pending_ |
| Sound           | `/api/sound`           | _Pending_ |
| Temperature     | `/api/temp`            | _Pending_ |

Each endpoint supports `GET` for retrieving sensor values and `POST` for submitting new ones (air quality route implemented as example).

---

## 📘 Example: Air Quality API

### ➕ POST `/api/airQuality`

```json
{
  "smoke": 5.2,
  "propane": 3.1,
  "co2": 2.7
}
```

**Response:**

```json
{
  "message": "values recieved",
  "data": {
    "id": "2025-04-25T12:34:56.789Z",
    "smoke": 5.2,
    "propane": 3.1,
    "co2": 2.7
  }
}
```

---

## 📄 API Documentation

Swagger UI is available at:

```
http://localhost:8000/api-docs
```

It includes visual exploration and interaction with the available API routes.

---

## 🧰 Scripts


| Command     | Description          |
| ----------- | -------------------- |
| `npm start` | Start the API server |
=======
| Command      | Description           |
|--------------|-----------------------|
| `npm start`  | Start the API server  |


---

## 🛠️ Tech Stack

- Node.js
- Express
- Swagger (OpenAPI)
- ES Modules
- JSON-based mock data
