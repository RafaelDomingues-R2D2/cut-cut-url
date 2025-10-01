# Cut Cut URL 💻

[![Build Status](https://img.shields.io/badge/build-success-brightgreen)](https://github.com/rafael/cut-cut-url/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A simple and efficient RESTful API service for URL shortening and redirection.

---

## 🚀 Technologies Used

- **Language:** Node.js
- **Framework:** NestJS
- **Database:** PostgreSQL
- **Containers/Orchestration:** Docker
- **Other Libraries:** TypeORM, JWT

---

## 🛠 Prerequisites

Make sure you have the following installed:

- Node.js (version 18.x or higher)
- Docker (optional, for containerized setup)
- PostgreSQL instance

---

## ⚙ Installation

1.  **Clone the repository:**

```bash
git clone https://github.com/RafaelDomingues-R2D2/cut-cut-url.git
cd cut-cut-url
```

2.  **Install dependencies:**

```bash
npm install
# or
yarn install
```

3.  **Initialize the Database (if applicable):**

```bash
# Run migrations
npm prisma migrate dev
# or
yarn prisma migrate dev
```

---

## ▶️ How to Run the Project

Start the backend server after installation:

```bash
# Using Node/npm
npm run start:dev

# Using Docker (Recommended!)
docker-compose up --build
```
