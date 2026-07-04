# 🏥 MediCare+

A full-stack healthcare appointment booking platform built with the **MERN Stack**. MediCare+ enables patients to book appointments, doctors to manage schedules, and administrators to oversee the platform through dedicated dashboards.

## Features

- Secure authentication with Clerk
- Patient, Doctor, and Admin dashboards
- Doctor search and appointment booking
- Secure payments with Stripe
- Appointment management
- Responsive user interface
- Image upload with Cloudinary

## Tech Stack

**Frontend**
- React.js
- React Router
- Axios
- CSS Modules

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Services**
- Clerk Authentication
- Stripe
- Cloudinary

## Installation

### Clone the repository

```bash
git clone https://github.com/MONJIT07/MediCarePlus.git
cd MediCarePlus
```

### Backend

```bash
cd Backend
npm install
npm run server
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Environment Variables

### Backend

```env
MONGODB_URI=
JWT_SECRET=
CLERK_SECRET_KEY=
STRIPE_SECRET_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend

```env
VITE_BACKEND_URL=
VITE_CLERK_PUBLISHABLE_KEY=
VITE_STRIPE_PUBLISHABLE_KEY=
```

## Project Status

🚧 Currently under development. New features and improvements are being added regularly.

## Author

**Monjit Tamuli**

- GitHub: https://github.com/MONJIT07

---

⭐ If you found this project helpful, consider giving it a star.
