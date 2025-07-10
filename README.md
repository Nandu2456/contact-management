# Contact Management App

A full-stack **MERN** Contact Management system:

- **MongoDB** for database
- **Express.js** for backend API
- **React.js** for frontend UI
- **Node.js** as runtime

Users can:

✅ Add a new contact  
✅ View contact details  
✅ Edit a contact  
✅ Delete a contact

---

## 🚀 Tech Stack

- **Frontend:** React, Axios, React Router, CSS / Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Notifications:** react-toastify

---

## 🔧 How to Run This Project

Clone the repo:

```bash
git clone https://github.com/Nandu2456/contact-management.git
cd contact-management

Navigate to backend folder:
cd backend
Install dependencies:
npm install
Create a .env file
Inside backend/ folder:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mern_data?retryWrites=true&w=majority
PORT=5000
Replace <username> and <password> with your MongoDB credentials.

Start backend server:
npm start

Backend runs at:
http://localhost:5000
Test the backend
Example: Fetch all contacts with CURL
curl http://localhost:5000/api/contacts
Or using Postman, hit:
GET http://localhost:5000/api/contacts
