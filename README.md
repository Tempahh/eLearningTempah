# **E-learning Platform RESTful API**

![GitHub](https://img.shields.io/badge/License-MIT-blue)
![GitHub](https://img.shields.io/badge/Node.js-v16.x-green)
![GitHub](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![GitHub](https://img.shields.io/badge/Deployed-Render-blueviolet)

A RESTful API for managing online courses and students. This platform allows course providers to create, update, and delete courses, while students can enroll in courses and manage their enrollments.

---

## **Features**
- User authentication (Register, Login) with JWT.
- Role-based access control (Admin, Student).
- CRUD operations for courses.
- Student enrollment in courses.
- MongoDB Atlas for database management.
- Deployed on Render.com.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render.com
- **API Documentation**: Postman

---

## **API Endpoints**

### **User Routes**
| **Endpoint**               | **Method** | **Description**                     | **Access**       |
|----------------------------|------------|-------------------------------------|------------------|
| `/api/users/register`      | POST       | Register a new user                 | Public           |
| `/api/users/login`         | POST       | Login and get JWT token             | Public           |

### **Course Routes**
| **Endpoint**               | **Method** | **Description**                     | **Access**       |
|----------------------------|------------|-------------------------------------|------------------|
| `/api/courses`             | POST       | Create a new course                 | Admin            |
| `/api/courses/:id`         | PUT        | Update a course by ID               | Admin            |
| `/api/courses/:id`         | DELETE     | Delete a course by ID               | Admin            |
| `/api/courses/:id/enroll`  | POST       | Enroll in a course                  | Student          |

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v16.x or higher)
- MongoDB Atlas account
- Postman (for testing)

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/e-learning-api.git
cd e-learning-api
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret>
```

### **4. Run the Application**
```bash
npm start
```
The server will start at `http://localhost:5000`.

---

## **Deployment**
The API is deployed on **Render.com**. You can access it at:
```
https://thescribe.onrender.com
```

---

## **API Documentation**
The API is documented using Postman. You can access the Postman collection below:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/26287494-ea68ad85-caef-4e87-8d9b-36cae57d2ecc?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D26287494-ea68ad85-caef-4e87-8d9b-36cae57d2ecc%26entityType%3Dcollection%26workspaceId%3Dc98a2062-634c-46d9-8a54-e9fbeecd775d)

---

## **Testing the API**
1. Use Postman to test the endpoints.
2. Start by registering a user and logging in to get a JWT token.
3. Use the token to access protected routes (e.g., creating a course).

---

## **Sample Requests**

### **Register a User**
```bash
POST /api/users/register
Content-Type: application/json

{
  "username": "student1",
  "password": "password123",
  "role": "student"
}
```

### **Login a User**
```bash
POST /api/users/login
Content-Type: application/json

{
  "username": "student1",
  "password": "password123"
}
```

### **Create a Course**
```bash
POST /api/courses
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "title": "Introduction to Node.js",
  "instructor": "John Doe",
  "duration": 10,
  "price": 49.99
}
```

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Author**
- Tempah
- GitHub: [your-username](https://github.com/tempahh)
- Email: plance991@gmail.com

---

## **Acknowledgments**
- MongoDB Atlas for database hosting.
- Render.com for deployment.
- Postman for API documentation.

---

### **How to Use the Postman Button**
1. Click the **"Run in Postman"** button above.
2. It will redirect you to Postman, where you can fork the collection into your workspace.
3. Use the collection to test the API endpoints.

---