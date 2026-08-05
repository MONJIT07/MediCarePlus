<div align="center">

# 🏥 MediCare+

### *Redefining Healthcare Management for the Digital Age*

<br/>

> A production-grade, full-stack hospital management system enabling patients to discover doctors, book appointments, and pay online — while giving admins and doctors complete control over their workflows.

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

![GitHub Stars](https://img.shields.io/github/stars/MONJIT07/MediCarePlus?style=social)
![GitHub Forks](https://img.shields.io/github/forks/MONJIT07/MediCarePlus?style=social)
![GitHub Issues](https://img.shields.io/github/issues/MONJIT07/MediCarePlus)
![GitHub Last Commit](https://img.shields.io/github/last-commit/MONJIT07/MediCarePlus)
![Repo Size](https://img.shields.io/github/repo-size/MONJIT07/MediCarePlus)

</div>

---

## 📋 Table of Contents

- [📖 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ System Architecture](#️-system-architecture)
- [📁 Folder Structure](#-folder-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Installation Guide](#-installation-guide)
- [🔐 Environment Variables](#-environment-variables)
- [📡 API Documentation](#-api-documentation)
- [🗄️ Database Design](#️-database-design)
- [🔑 Authentication Flow](#-authentication-flow)
- [☁️ Image Upload Flow](#️-image-upload-flow)
- [💳 Payment Verification Flow](#-payment-verification-flow)
- [📱 Responsive Design](#-responsive-design)
- [🛡️ Security Features](#️-security-features)
- [📸 Screenshots](#-screenshots)
- [🚧 Future Improvements](#-future-improvements)
- [🤝 Contributing Guide](#-contributing-guide)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [💬 Support](#-support)
- [🙏 Acknowledgements](#-acknowledgements)

---

## 📖 Project Overview

### 🩺 Problem Statement

Healthcare accessibility and management remain fragmented in most institutions. Patients struggle to find verified doctors, book appointments efficiently, and pay securely online. Hospital administrators lack a unified dashboard to manage doctors, services, and analytics. Doctors have no dedicated portal to manage their schedule and availability.

### 💡 Solution

**MediCare+** is a comprehensive, three-panel hospital management ecosystem:

- **Patient Portal** — Discover doctors by specialty, book appointments, pay online, and manage health history
- **Admin Dashboard** — Full control over doctor onboarding, service management, appointment oversight, and analytics
- **Doctor Portal** — Dedicated workspace for managing availability, viewing appointments, and editing profiles

### 🎯 Objectives

- ✅ Digitize end-to-end patient–doctor interaction
- ✅ Provide role-based access for patients, doctors, and administrators
- ✅ Integrate secure online payments with real-time verification
- ✅ Build a scalable, maintainable MVC REST API backend
- ✅ Deliver a responsive, modern UI accessible on all devices

### 🌟 Why MediCare+?

Traditional hospital portals are either outdated, fragmented, or expensive to build. MediCare+ is an open-source alternative that demonstrates production-quality full-stack architecture — combining modern auth (Clerk + JWT), cloud image storage (Cloudinary), and a clean React SPA with Express/MongoDB on the backend.

---

## ✨ Key Features

### 🧑‍⚕️ Patient Features

| Feature | Description | Status |
|---|---|---|
| 🏠 Home Page | Hero banner, featured doctors, certifications, testimonials | ✅ Live |
| 🔍 Doctor Search | Search and filter doctors by specialty | ✅ Live |
| 📋 Doctor Listing | Browse paginated list of all verified doctors | ✅ Live |
| 👨‍⚕️ Doctor Details | View full doctor profile, availability, and qualifications | ✅ Live |
| 📅 Appointment Booking | Book doctor appointments with date/time selection | ✅ Live |
| 🛎️ Service Booking | Book hospital services (lab, radiology, etc.) | ✅ Live |
| 💳 Online Payment | Integrated payment with real-time verification | ✅ Live |
| 📂 Appointment History | View past and upcoming appointments | ✅ Live |
| ✏️ Profile Editing | Update personal info, photo, and contact details | ✅ Live |
| 🔐 Clerk Authentication | Secure sign-in/sign-up via Clerk | ✅ Live |
| 📞 Contact Page | Reach the hospital directly via contact form | ✅ Live |
| 📱 Responsive Design | Fully functional on mobile, tablet, and desktop | ✅ Live |

### 👨‍⚕️ Doctor Features

| Feature | Description | Status |
|---|---|---|
| 📊 Doctor Dashboard | Overview of appointments and profile stats | ✅ Live |
| ✏️ Edit Profile | Update bio, photo, specialization, and fee | ✅ Live |
| 📅 Manage Appointments | View, accept, or cancel patient bookings | ✅ Live |
| 🟢 Update Availability | Toggle availability status in real time | ✅ Live |

### 🛠️ Admin Features

| Feature | Description | Status |
|---|---|---|
| 📊 Admin Dashboard | System-wide stats and quick-action widgets | ✅ Live |
| ➕ Add Doctors | Onboard new doctors with profile photo upload | ✅ Live |
| 📋 Manage Doctors | Edit, activate, or remove doctor records | ✅ Live |
| 🛎️ Add Services | Create new hospital service offerings | ✅ Live |
| 📂 Manage Services | Edit or remove existing hospital services | ✅ Live |
| 📅 View Appointments | Monitor all doctor and service bookings | ✅ Live |
| 📈 Analytics Dashboard | Appointment trends and service utilization stats | ✅ Live |

---

## 🏗️ System Architecture

### 🧑‍💻 Patient & Doctor Application Flow

```
┌─────────────────────────────────────────────┐
│              Patient / Doctor Browser        │
│           (React + Vite Frontend)            │
└──────────────────────┬──────────────────────┘
                       │  HTTP / Axios
                       ▼
┌─────────────────────────────────────────────┐
│          Clerk Authentication Layer          │
│     (Session Tokens + Identity Mgmt)         │
└──────────────────────┬──────────────────────┘
                       │  Verified Requests
                       ▼
┌─────────────────────────────────────────────┐
│         Express.js REST API Server           │
│     (Routes → Controllers → Models)          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Doctor   │  │Appt.     │  │Service   │  │
│  │ Router   │  │Router    │  │Router    │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────┬─────────────────────────┬─────────┘
          │                         │
          ▼                         ▼
┌──────────────────┐    ┌──────────────────────┐
│  MongoDB Atlas   │    │  Cloudinary Storage   │
│  (Collections)   │    │  (Doctor Images /     │
│  - doctors       │    │   Service Assets)     │
│  - appointments  │    └──────────────────────┘
│  - services      │
│  - svcAppt.      │
└──────────────────┘
```

### 🛠️ Admin Panel Architecture

```
┌─────────────────────────────────────────────┐
│           Admin Browser (React SPA)          │
│          (Vite + Axios + Admin Auth)         │
└──────────────────────┬──────────────────────┘
                       │  HTTP / Axios
                       ▼
┌─────────────────────────────────────────────┐
│         Express.js REST API Server           │
│      (Protected Admin-Only Endpoints)        │
└─────────────┬───────────────────────────────┘
              │
    ┌─────────┴─────────┐
    ▼                   ▼
┌───────────┐    ┌──────────────────┐
│  MongoDB  │    │   Cloudinary     │
│  (Write   │    │   (Image CRUD    │
│   ops)    │    │    via Multer)   │
└───────────┘    └──────────────────┘
```

---

## 📁 Folder Structure

```
MediCarePlus/
│
├── 📁 Frontend/                    # Patient-facing React application
│   ├── 📁 public/                  # Static public assets
│   └── 📁 src/
│       ├── 📁 Components/          # Reusable UI components
│       │   ├── AppointmentPage.jsx # Patient appointment booking UI
│       │   ├── Banner.jsx          # Hero section with CTA
│       │   ├── Certification.jsx   # Hospital certifications display
│       │   ├── ContactPage.jsx     # Contact form and info
│       │   ├── DoctorsPage.jsx     # Doctor listing with filters
│       │   ├── EditProfilePage.jsx # Patient profile editor
│       │   ├── Footer.jsx          # Site-wide footer component
│       │   ├── HomeDoctors.jsx     # Featured doctors on homepage
│       │   ├── List.jsx            # Generic list component
│       │   ├── ListPage.jsx        # Paginated listing wrapper
│       │   ├── LoginPage.jsx       # Clerk-powered login UI
│       │   ├── Navbar.jsx          # Responsive navigation bar
│       │   ├── ServicePage.jsx     # Hospital services listing
│       │   └── Testimonial.jsx     # Patient testimonials carousel
│       │
│       ├── 📁 Doctor/              # Doctor-specific portal components
│       │   ├── DashboardPage.jsx   # Doctor stats and overview
│       │   ├── DoctorNavbar.jsx    # Dedicated doctor navigation
│       │   └── EditProfile.jsx     # Doctor profile editor
│       │
│       ├── 📁 Pages/               # Top-level route page components
│       │   ├── Appointment.jsx     # Full appointment booking page
│       │   ├── Contact.jsx         # Contact page route
│       │   ├── DHome.jsx           # Doctor home/landing page
│       │   ├── Doctors.jsx         # Doctors browse page
│       │   ├── DoctorsDetails.jsx  # Individual doctor detail page
│       │   ├── Home.jsx            # Patient homepage route
│       │   ├── Login.jsx           # Login route wrapper
│       │   ├── Service.jsx         # Services browse page
│       │   └── ServiceDetailPage.jsx # Individual service detail
│       │
│       ├── 📁 assets/              # Images, icons, and static media
│       ├── App.jsx                 # Root component with route definitions
│       ├── main.jsx                # React DOM entry point
│       ├── App.css                 # Global app styles
│       ├── index.css               # Root CSS variables and resets
│       ├── VerifyPaymentPage.jsx   # Doctor appointment payment verification
│       └── VerifyServicePaymentPage.jsx # Service payment verification
│
├── 📁 admin/                       # Hospital admin React dashboard
│   └── 📁 src/
│       ├── 📁 components/          # Admin reusable UI components
│       │   ├── AddPage.jsx         # Add doctor form component
│       │   ├── AddService.jsx      # Add hospital service form
│       │   ├── AppointmentsPage.jsx # Doctor appointments overview
│       │   ├── DashBoardPage.jsx   # Main analytics dashboard widget
│       │   ├── ListPage.jsx        # Doctor list management component
│       │   ├── ListServicePage.jsx # Service list management component
│       │   ├── ServiceAppointmentsPage.jsx # Service bookings view
│       │   ├── ServiceDashboard.jsx # Service-level analytics
│       │   └── navbar.jsx          # Admin navigation bar
│       │
│       ├── 📁 pages/               # Admin page routes
│       │   ├── Add.jsx             # Route: add a new doctor
│       │   ├── AddSer.jsx          # Route: add a new service
│       │   ├── Appointments.jsx    # Route: all doctor appointments
│       │   ├── Hero.jsx            # Admin hero/welcome screen
│       │   ├── Home.jsx            # Admin dashboard home
│       │   ├── List.jsx            # Route: manage doctor list
│       │   ├── ListService.jsx     # Route: manage service list
│       │   ├── ServiceAppointments.jsx # Route: service bookings
│       │   └── SetDashboard.jsx    # Dashboard configuration page
│       │
│       ├── App.jsx                 # Admin root component + routing
│       ├── main.jsx                # Admin React DOM entry
│       └── App.css                 # Admin-specific global styles
│
└── 📁 backend/                     # Node.js + Express REST API
    ├── 📁 config/
    │   └── db.js                   # MongoDB connection setup via Mongoose
    │
    ├── 📁 controllers/             # Business logic layer (MVC)
    │   ├── appointmentController.js    # Book, view, cancel appointments
    │   ├── doctorController.js         # Add, edit, delete, list doctors
    │   ├── serviceAppointmentController.js # Service booking logic
    │   └── serviceController.js        # Add, update, list services
    │
    ├── 📁 middlewares/
    │   ├── doctorAuth.js           # JWT middleware for doctor-protected routes
    │   └── multer.js               # File upload configuration (memory storage)
    │
    ├── 📁 models/                  # Mongoose schema definitions
    │   ├── appointment.js          # Appointment document schema
    │   ├── doctor.js               # Doctor profile schema
    │   ├── serviceAppointment.js   # Service booking schema
    │   └── services.js             # Hospital service schema
    │
    ├── 📁 routes/                  # Express router definitions
    │   ├── DoctorRouter.js         # /api/doctor/* route bindings
    │   ├── appointmentRouter.js    # /api/appointment/* route bindings
    │   ├── serviceAppointmentRouter.js # /api/service-appointment/* bindings
    │   └── serviceRouter.js        # /api/services/* route bindings
    │
    ├── 📁 utils/
    │   └── cloudinary.js           # Cloudinary SDK configuration
    │
    └── server.js                   # Express app bootstrap and middleware setup
```

---

## 🛠️ Technologies Used

### Frontend

| Technology | Purpose | Version |
|---|---|---|
| React.js | Component-based UI framework | ^18.x |
| Vite | Lightning-fast build tool & dev server | ^5.x |
| React Router DOM | Client-side routing & navigation | ^6.x |
| Axios | Promise-based HTTP client for API calls | ^1.x |
| Clerk | Managed authentication & user sessions | ^4.x |
| CSS3 | Custom styling, animations, and layouts | Native |

### Backend

| Technology | Purpose | Version |
|---|---|---|
| Node.js | JavaScript runtime environment | ^20.x |
| Express.js | Minimal and flexible web framework | ^4.x |
| MongoDB | NoSQL document database | ^7.x |
| Mongoose | ODM for MongoDB schema modeling | ^8.x |
| JSON Web Token (JWT) | Stateless doctor authentication tokens | ^9.x |
| Multer | Multipart form data / file upload middleware | ^1.x |
| Cloudinary | Cloud-based image storage and CDN | ^2.x |
| dotenv | Environment variable management | ^16.x |
| CORS | Cross-Origin Resource Sharing configuration | ^2.x |

### Admin Dashboard

| Technology | Purpose | Version |
|---|---|---|
| React | SPA framework for admin panel | ^18.x |
| Vite | Optimized build system | ^5.x |
| Axios | Backend API communication | ^1.x |

---

## 🚀 Installation Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js** v18+ → [Download](https://nodejs.org/)
- **npm** v9+ (bundled with Node)
- **MongoDB Atlas** account → [Sign Up](https://www.mongodb.com/cloud/atlas)
- **Cloudinary** account → [Sign Up](https://cloudinary.com/)
- **Clerk** account → [Sign Up](https://clerk.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MONJIT07/MediCarePlus.git
cd MediCarePlus
```

---

### 2️⃣ Setup & Run the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend` (see [Environment Variables](#-environment-variables)):

```bash
cp .env.example .env
# Fill in your values
```

Start the backend server:

```bash
npm run dev
# or
node server.js
```

> ✅ Backend running at `http://localhost:4000`

---

### 3️⃣ Setup & Run the Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

> ✅ Frontend running at `http://localhost:5173`

---

### 4️⃣ Setup & Run the Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

> ✅ Admin panel running at `http://localhost:5174`

---

## 🔐 Environment Variables

### Backend — `/backend/.env`

```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend — `/Frontend/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:4000
```

### Admin — `/admin/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

### 🔑 Variable Reference

| Variable | Location | Description |
|---|---|---|
| `PORT` | Backend | Port number the Express server listens on |
| `MONGODB_URI` | Backend | Full MongoDB Atlas connection string including credentials and cluster |
| `JWT_SECRET` | Backend | Secret key for signing and verifying JWT tokens for doctors |
| `CLOUDINARY_NAME` | Backend | Your Cloudinary cloud name (found in dashboard) |
| `CLOUDINARY_API_KEY` | Backend | Public API key from Cloudinary for upload authentication |
| `CLOUDINARY_SECRET` | Backend | Private API secret for signing Cloudinary upload requests |
| `CLERK_SECRET_KEY` | Backend | Backend secret key for verifying Clerk session tokens server-side |
| `VITE_CLERK_PUBLISHABLE_KEY` | Frontend | Publishable key for initializing Clerk SDK in the browser |
| `VITE_BACKEND_URL` | Frontend/Admin | Base URL pointing to the Express REST API |

---

## 📡 API Documentation

### 👨‍⚕️ Doctor Endpoints — `/api/doctor`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/doctor/login` | Doctor login; returns JWT token | None |
| `GET` | `/api/doctor/list` | Fetch all registered doctors | None |
| `GET` | `/api/doctor/:id` | Fetch single doctor by ID | None |
| `POST` | `/api/doctor/add` | Add a new doctor (with photo upload) | Admin |
| `PUT` | `/api/doctor/update/:id` | Update doctor profile details | Doctor JWT |
| `DELETE` | `/api/doctor/delete/:id` | Remove a doctor record | Admin |
| `PUT` | `/api/doctor/availability/:id` | Toggle doctor availability status | Doctor JWT |

<details>
<summary>📄 Example — POST /api/doctor/login</summary>

**Request Body:**
```json
{
  "email": "dr.smith@medicare.com",
  "password": "securePassword123"
}
```

**Response `200 OK`:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "doctor": {
    "_id": "64f8a2b3c9e77b001f3d9abc",
    "name": "Dr. Jane Smith",
    "speciality": "Cardiologist",
    "available": true
  }
}
```

**Error `401 Unauthorized`:**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```
</details>

---

### 📅 Appointment Endpoints — `/api/appointment`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/appointment/book` | Book a new doctor appointment | Clerk Session |
| `GET` | `/api/appointment/user/:userId` | Fetch all appointments for a patient | Clerk Session |
| `GET` | `/api/appointment/doctor/:doctorId` | Fetch all appointments for a doctor | Doctor JWT |
| `PUT` | `/api/appointment/cancel/:id` | Cancel an existing appointment | Clerk Session |
| `PUT` | `/api/appointment/verify-payment/:id` | Mark appointment payment as verified | Clerk Session |

<details>
<summary>📄 Example — POST /api/appointment/book</summary>

**Request Body:**
```json
{
  "doctorId": "64f8a2b3c9e77b001f3d9abc",
  "userId": "user_clerk_id_xyz",
  "date": "2025-09-15",
  "time": "10:30 AM",
  "amount": 500
}
```

**Response `201 Created`:**
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "appointment": {
    "_id": "64f9c1e7d0a44c001b2ef123",
    "status": "pending",
    "paymentStatus": "unpaid"
  }
}
```
</details>

---

### 🛎️ Service Endpoints — `/api/services`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/services/add` | Add a new hospital service | Admin |
| `GET` | `/api/services/list` | Fetch all available services | None |
| `GET` | `/api/services/:id` | Fetch a single service by ID | None |
| `PUT` | `/api/services/update/:id` | Update service details | Admin |
| `DELETE` | `/api/services/delete/:id` | Remove a service | Admin |

---

### 🗓️ Service Appointment Endpoints — `/api/service-appointment`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/service-appointment/book` | Book a hospital service slot | Clerk Session |
| `GET` | `/api/service-appointment/user/:userId` | User's service booking history | Clerk Session |
| `GET` | `/api/service-appointment/all` | All service bookings (admin view) | Admin |
| `PUT` | `/api/service-appointment/verify-payment/:id` | Verify service booking payment | Clerk Session |

---

### 📊 HTTP Status Code Reference

| Code | Meaning |
|---|---|
| `200` | OK — Request succeeded |
| `201` | Created — Resource created successfully |
| `400` | Bad Request — Validation failed or missing fields |
| `401` | Unauthorized — Missing or invalid token |
| `403` | Forbidden — Insufficient permissions |
| `404` | Not Found — Resource does not exist |
| `500` | Internal Server Error — Unexpected backend failure |

---

## 🗄️ Database Design

MediCare+ uses **MongoDB** with four primary collections:

### 👨‍⚕️ `doctors` Collection

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique identifier |
| `name` | String | Full name of the doctor |
| `email` | String | Login email (unique) |
| `password` | String | Hashed password for JWT auth |
| `speciality` | String | Medical specialization (e.g., Cardiologist) |
| `degree` | String | Academic qualification |
| `experience` | String | Years of experience |
| `about` | String | Bio and description |
| `fees` | Number | Consultation fee in currency units |
| `image` | String | Cloudinary image URL |
| `available` | Boolean | Availability toggle status |
| `address` | Object | `{ line1, line2 }` clinic address |
| `slots_booked` | Object | Map of booked date-time slots |
| `createdAt` | Date | Timestamp of record creation |

---

### 📅 `appointments` Collection

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique appointment ID |
| `userId` | String | Clerk user ID of the patient |
| `docId` | ObjectId | Reference to doctors collection |
| `slotDate` | String | Appointment date (DD_MM_YYYY) |
| `slotTime` | String | Appointment time slot |
| `userData` | Object | Snapshot of patient details at booking |
| `docData` | Object | Snapshot of doctor details at booking |
| `amount` | Number | Consultation fee charged |
| `paymentStatus` | String | `unpaid` / `paid` |
| `cancelled` | Boolean | Cancellation flag |
| `createdAt` | Date | Booking timestamp |

---

### 🛎️ `services` Collection

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique service ID |
| `name` | String | Service name (e.g., Blood Test) |
| `description` | String | Detailed service description |
| `price` | Number | Service cost |
| `image` | String | Cloudinary image URL |
| `category` | String | Service category (Lab, Radiology, etc.) |
| `available` | Boolean | Service availability status |
| `createdAt` | Date | Creation timestamp |

---

### 🗓️ `serviceappointments` Collection

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Unique booking ID |
| `userId` | String | Clerk user ID of the patient |
| `serviceId` | ObjectId | Reference to services collection |
| `date` | String | Booked date |
| `time` | String | Booked time slot |
| `serviceData` | Object | Snapshot of service details at booking |
| `amount` | Number | Amount charged |
| `paymentStatus` | String | `unpaid` / `paid` |
| `cancelled` | Boolean | Cancellation flag |
| `createdAt` | Date | Booking timestamp |

---

## 🔑 Authentication Flow

MediCare+ implements a **dual-authentication architecture** to handle two distinct user classes:

### 🔵 Clerk Authentication (Patients)

```
Patient visits site
       │
       ▼
Clerk Sign-Up / Sign-In
(Email, Google, Social)
       │
       ▼
Clerk issues Session Token
       │
       ▼
Frontend attaches token
to every API request header
       │
       ▼
Backend verifies token
using Clerk SDK
       │
       ▼
Request proceeds to controller
```

Clerk handles all patient identity — no passwords are stored in MongoDB for patients.

---

### 🟠 JWT Authentication (Doctors)

```
Doctor submits email + password
       │
       ▼
Backend verifies credentials
against MongoDB doctor record
       │
       ▼
JWT signed with JWT_SECRET
and returned to client
       │
       ▼
Frontend stores token in memory
       │
       ▼
doctorAuth.js middleware
validates token on every
protected doctor route
       │
       ▼
Decoded doctor ID available
in request context
```

---

### 🔴 Role-Based Route Protection

| Role | Authentication | Protected Routes |
|---|---|---|
| Guest | None | Doctor listing, service listing, home |
| Patient | Clerk Session | Appointment booking, payment, history |
| Doctor | JWT | Dashboard, edit profile, view appointments |
| Admin | Admin token | Add/remove doctors, manage services, analytics |

---

## ☁️ Image Upload Flow

Profile images and service assets follow this pipeline:

```
User selects image in React form
              │
              ▼
Axios multipart/form-data request
       sent to Express backend
              │
              ▼
      multer.js middleware
  (memory storage — no disk write)
     buffers file in req.file
              │
              ▼
   cloudinary.js utility
   uploads buffer to Cloudinary
   via uploader.upload_stream()
              │
              ▼
 Cloudinary returns secure_url
 (CDN-optimized public URL)
              │
              ▼
  URL saved in MongoDB document
    (doctor.image / service.image)
              │
              ▼
  Frontend renders image via URL
```

**Key advantage:** Images are never written to the server's local disk — Multer buffers them in memory and streams directly to Cloudinary, keeping the backend stateless and cloud-ready.

---

## 💳 Payment Verification Flow

MediCare+ implements a **callback-based payment verification** pattern:

### 🔵 Doctor Appointment — `VerifyPaymentPage.jsx`

```
Patient completes payment
on gateway checkout page
         │
         ▼
Payment gateway redirects to
/verify-payment?appointmentId=xxx
         │
         ▼
VerifyPaymentPage.jsx mounts
and reads query parameters
         │
         ▼
Axios PUT request sent to
/api/appointment/verify-payment/:id
         │
         ▼
Backend updates appointment
{ paymentStatus: "paid" }
         │
         ▼
Patient redirected to
Appointment History page
with success toast
```

---

### 🟠 Hospital Service — `VerifyServicePaymentPage.jsx`

```
Patient completes service payment
on gateway checkout page
         │
         ▼
Gateway redirects to
/verify-service-payment?bookingId=xxx
         │
         ▼
VerifyServicePaymentPage.jsx mounts
and reads query parameters
         │
         ▼
Axios PUT request to
/api/service-appointment/verify-payment/:id
         │
         ▼
Backend marks service booking
{ paymentStatus: "paid" }
         │
         ▼
Patient sees confirmed
service booking in history
```

---

## 📱 Responsive Design

MediCare+ is built mobile-first and tested across all breakpoints:

| Breakpoint | Target Devices | Behavior |
|---|---|---|
| `< 480px` | Small phones | Single-column layout, hamburger menu |
| `480px – 768px` | Tablets, large phones | Two-column grids, collapsed nav |
| `768px – 1024px` | Small laptops, iPad | Three-column doctor grid, side navbar |
| `> 1024px` | Desktops, large screens | Full layout with sidebar and multi-column |

Key responsive techniques used:
- CSS Flexbox and Grid for fluid layouts
- Viewport-relative units (`vw`, `vh`, `rem`)
- Media queries at standard breakpoints
- Responsive image sizing via `object-fit: cover`
- Touch-friendly tap targets (min 44×44px)
- Accessible hamburger menu for mobile navigation

---

## 🛡️ Security Features

| Feature | Implementation | Description |
|---|---|---|
| 🔐 JWT Authentication | `jsonwebtoken` + `doctorAuth.js` | Stateless token-based auth for doctor routes |
| 👤 Clerk Identity | `@clerk/clerk-sdk-node` | Managed, secure patient authentication |
| 🔒 Protected Routes | Middleware chain | All sensitive endpoints require valid tokens |
| 📁 Secure File Uploads | Multer memory storage | No files touch the server disk; streamed to Cloudinary |
| 🌐 CORS Policy | `cors` middleware in server.js | Only whitelisted origins can access the API |
| 🔑 Environment Secrets | `.env` + `dotenv` | No credentials ever hard-coded in source |
| 🛡️ Input Validation | Controller-level checks | Required fields validated before DB writes |
| 🔒 Password Hashing | `bcrypt` | Doctor passwords stored as salted hashes |
| ☁️ Cloud-Only Images | Cloudinary CDN | Image URLs served from Cloudinary, not the API server |

---

## 📸 Screenshots

> 📌 *Add your screenshots by replacing the placeholders below with actual image paths.*

### 🏠 Home Page
```
[ Place screenshot: Frontend/assets/screenshots/home.png ]
```

### 👨‍⚕️ Doctors Listing
```
[ Place screenshot: Frontend/assets/screenshots/doctors.png ]
```

### 🔍 Doctor Details
```
[ Place screenshot: Frontend/assets/screenshots/doctor-details.png ]
```

### 📅 Appointment Booking
```
[ Place screenshot: Frontend/assets/screenshots/appointment.png ]
```

### 🛎️ Services Page
```
[ Place screenshot: Frontend/assets/screenshots/services.png ]
```

### 🛠️ Admin Dashboard
```
[ Place screenshot: admin/assets/screenshots/admin-dashboard.png ]
```

### 👨‍⚕️ Doctor Dashboard
```
[ Place screenshot: Frontend/assets/screenshots/doctor-dashboard.png ]
```

### 📞 Contact Page
```
[ Place screenshot: Frontend/assets/screenshots/contact.png ]
```

### 🔐 Login Page
```
[ Place screenshot: Frontend/assets/screenshots/login.png ]
```

---

## 🚧 Future Improvements

MediCare+ is actively evolving. Here is the roadmap of planned enhancements:

| # | Feature | Priority | Description |
|---|---|---|---|
| 1 | 🤖 AI Symptom Chatbot | High | NLP-powered chatbot to suggest appropriate doctors based on symptoms |
| 2 | 📹 Video Consultation | High | WebRTC-based video calling between patients and doctors |
| 3 | 📧 Email Notifications | High | Transactional emails for booking confirmation and reminders |
| 4 | 📱 SMS Alerts | High | Twilio-powered appointment reminders via SMS |
| 5 | 💳 Full Payment Gateway | High | Razorpay / Stripe integration for live payment processing |
| 6 | ⭐ Doctor Ratings & Reviews | Medium | Patient-submitted reviews with 5-star rating system |
| 7 | 📋 Medical Records Upload | Medium | Patients can upload and share prescriptions/reports with doctors |
| 8 | 💊 Prescription Management | Medium | Digital prescription creation and PDF export by doctors |
| 9 | 🔍 Advanced Search Filters | Medium | Filter doctors by location, fee range, rating, gender, and language |
| 10 | ⏰ Appointment Reminders | Medium | Automated reminders 24h and 1h before scheduled appointments |
| 11 | 🐳 Docker Support | Medium | Containerize all three apps with `docker-compose` for one-command startup |
| 12 | ⚙️ CI/CD Pipeline | Medium | GitHub Actions for automated testing and Render/Vercel deployment |
| 13 | ⚡ Redis Caching | Medium | Cache frequently accessed doctor lists and service data |
| 14 | 📊 Analytics Dashboard | Low | Charts for booking trends, revenue, doctor performance |
| 15 | 🌙 Dark Mode | Low | System-preference-aware dark/light theme toggle |
| 16 | 📲 PWA Support | Low | Progressive Web App for offline access and home screen install |
| 17 | 🔔 Push Notifications | Low | Browser push notifications for appointment updates |
| 18 | 🏥 Multi-Hospital Support | Low | Extend the platform to support multiple hospital branches |
| 19 | 🧪 Testing Suite | High | Jest + Supertest for API unit tests; Playwright for E2E tests |
| 20 | 🌍 Localization (i18n) | Low | Multi-language support using `react-i18next` |

---

## 🤝 Contributing Guide

Contributions are warmly welcomed! Here's how to get involved:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/MediCarePlus.git
cd MediCarePlus
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

Follow the existing code style. Ensure:
- Controllers handle all business logic (no logic in routes)
- Models use proper Mongoose schema validation
- Frontend components are modular and reusable

### 4. Commit with Conventional Commits

```bash
git commit -m "feat: add email notification for appointment booking"
```

Common prefixes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Push and Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Open a PR against `main` with a clear description of your changes.

---

### 📋 Contribution Guidelines

- Follow the existing folder/file naming conventions
- Keep PRs focused — one feature or fix per PR
- Update documentation for any new API endpoints
- Test your changes locally before submitting
- Be respectful and constructive in all discussions

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Monjit Tamuli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

See the full [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### Monjit Tamuli

*Final Year B.Tech — Electrical Engineering | NIT Silchar*

*Full Stack Developer · Data/ML Engineer · Open Source Enthusiast*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-MONJIT07-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MONJIT07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/monjit-tamuli)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:monjittamuli7747@gmail.com)

</div>

---

## 💬 Support

If you encounter any issues, have questions, or want to request a feature:

- 🐛 **Bug Report** → [Open an Issue](https://github.com/MONJIT07/MediCarePlus/issues/new?template=bug_report.md)
- 💡 **Feature Request** → [Open an Issue](https://github.com/MONJIT07/MediCarePlus/issues/new?template=feature_request.md)
- 💬 **General Question** → [Start a Discussion](https://github.com/MONJIT07/MediCarePlus/discussions)
- 📧 **Direct Contact** → [monjittamuli7747@gmail.com](mailto:monjittamuli7747@gmail.com)

Response time is typically within **48 hours**.

---

## 🙏 Acknowledgements

This project would not have been possible without:

- **[Clerk](https://clerk.com/)** — For the beautifully simple authentication SDK that eliminated the complexity of session management
- **[Cloudinary](https://cloudinary.com/)** — For the generous free tier and powerful image transformation APIs
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** — For the free-tier cloud database that powers the entire data layer
- **[Vite](https://vitejs.dev/)** — For making the frontend development experience incredibly fast
- **[Shields.io](https://shields.io/)** — For the clean, customizable badges used in this README
- **The Open Source Community** — For the countless libraries, tutorials, and examples that accelerated development
- **NIT Silchar** — For the academic environment that sparked this project

---

<div align="center">

## ⭐ Support MediCare+

If this project helped you, inspired you, or you'd like to see it grow further —

**please consider giving it a star!**

Stars help this project reach more developers, students, and contributors.

[![Star this repo](https://img.shields.io/github/stars/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=Star%20This%20Repo&color=FFD700)](https://github.com/MONJIT07/MediCarePlus)

<br/>

[![Fork](https://img.shields.io/github/forks/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=Fork)](https://github.com/MONJIT07/MediCarePlus/fork)
[![Watch](https://img.shields.io/github/watchers/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=Watch)](https://github.com/MONJIT07/MediCarePlus)

<br/>

---

*Built with ❤️ by [Monjit Tamuli](https://github.com/MONJIT07) · MIT Licensed · Open to Contributions*

</div>
