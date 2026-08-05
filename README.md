<div align="center">

# 🏥 MediCare+

### *Full-Stack Hospital Management System*

<br/>

> A production-grade, three-panel healthcare platform — Patient Portal, Doctor Workspace, and Admin Dashboard — powered by React 19, Express 5, MongoDB, Stripe, Clerk, and Cloudinary. Patients discover doctors, book appointments, and pay online via Stripe in real time. Doctors manage their schedules and profile. Admins control the entire hospital ecosystem from a dedicated dashboard.

<br/>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
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
- [💳 Payment & Verification Flow](#-payment--verification-flow)
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

Healthcare management in most institutions remains fragmented and paper-heavy. Patients struggle to discover verified doctors, book appointments without calling in, and pay securely online. Doctors have no unified workspace to manage their schedule, availability, and patient list. Hospital administrators lack a real-time dashboard to onboard doctors, publish services, and track analytics — all from one place.

### 💡 Solution

**MediCare+** is a comprehensive, three-panel hospital management ecosystem:

- **Patient Portal** (`/Frontend`) — Browse doctors by specialization, book time slots, pay online via Stripe, and manage appointment history
- **Doctor Workspace** (nested in `/Frontend` under `/doctor-admin/*` routes) — Dedicated portal for doctors to manage availability, view appointments, and edit their profile
- **Admin Dashboard** (`/admin`) — Protected control panel for onboarding doctors, publishing hospital services, viewing all bookings, and monitoring analytics

### 🎯 Objectives

- ✅ End-to-end digitization of patient–doctor–admin interaction
- ✅ Real payment processing via Stripe Checkout (INR, card payments)
- ✅ Role-based access: Clerk for patients/admin, JWT for doctors
- ✅ Cloud-native image pipeline: Multer → Cloudinary → MongoDB URL
- ✅ Duplicate booking prevention and idempotent payment confirmation
- ✅ Scalable MVC backend with aggregation-powered analytics

### 🌟 Why MediCare+?

MediCare+ combines the best of modern open-source tooling — Clerk for zero-friction authentication, Stripe for production-grade payments, Cloudinary for optimized image delivery — into a single, cohesive full-stack system that is deployable, extensible, and recruiter-ready.

---

## ✨ Key Features

### 🧑‍⚕️ Patient Features

| Feature | Details | Status |
|---|---|---|
| 🏠 Home Page | Hero banner, featured doctors (`HD1–HD8`), certifications (`C1–C7`), testimonials carousel | ✅ Live |
| 🔍 Doctor Search | Real-time search with regex matching on name and specialization, paginated results | ✅ Live |
| 📋 Doctor Listing | Browse all verified doctors sorted alphabetically with MongoDB aggregation | ✅ Live |
| 👨‍⚕️ Doctor Details | Full profile: specialization, experience, qualifications, location, fee, schedule, rating | ✅ Live |
| 📅 Appointment Booking | Select date/time from doctor's schedule map; duplicate slot prevention built-in | ✅ Live |
| 💳 Online Payment | Stripe Checkout (INR); `session_id` tracked for reliable confirmation | ✅ Live |
| 💵 Cash Payment | Alternative offline payment option; appointment created with `Pending` status | ✅ Live |
| 🛎️ Service Booking | Book hospital services (labs, radiology, etc.) with time slot parsing (AM/PM) | ✅ Live |
| 📂 Appointment History | Unified view of doctor appointments and service bookings filtered by Clerk user ID | ✅ Live |
| ✏️ Profile Editing | Update personal info, contact details via `EditProfilePage.jsx` | ✅ Live |
| 🔐 Clerk Login | Social & email sign-in via Clerk; `ClerkProvider` wraps the entire React app | ✅ Live |
| 📞 Contact Page | Contact form with hospital address and details | ✅ Live |
| ⬆️ Scroll To Top | Floating scroll-to-top button with smooth transition on all pages | ✅ Live |
| 📱 Responsive Design | Tailwind CSS v4 utility classes; fully functional on mobile and desktop | ✅ Live |

### 👨‍⚕️ Doctor Features

| Feature | Details | Status |
|---|---|---|
| 🔐 Doctor Login | JWT-based login at `/doctor-admin/login`; 7-day token with role claim | ✅ Live |
| 📊 Doctor Dashboard | Aggregated stats: total appointments, completed, canceled, earnings via MongoDB `$lookup` | ✅ Live |
| 📅 View Appointments | Filterable list of own appointments with search on patient name and mobile | ✅ Live |
| ✏️ Edit Profile | Update specialization, fee, experience, qualifications, location, about, and photo | ✅ Live |
| 🟢 Toggle Availability | Flip between `Available` / `Unavailable` via `POST /:id/toggle-availability` | ✅ Live |
| 🗓️ Schedule Management | Date → time slot map stored as Mongoose `Map`; deduped and sorted on save | ✅ Live |

### 🛠️ Admin Features

| Feature | Details | Status |
|---|---|---|
| 🔐 Clerk Auth Guard | `RequireAuth` HOC using `useUser()` — all admin routes are Clerk-protected | ✅ Live |
| 📊 Admin Dashboard | Real-time counts: total appointments, revenue (paid only), last-7-days bookings | ✅ Live |
| ➕ Add Doctors | Full form with image upload; `POST /api/doctors` with Multer + Cloudinary pipeline | ✅ Live |
| 📋 Manage Doctors | List, edit, delete doctors; Cloudinary image deletion on doctor removal | ✅ Live |
| 🛎️ Add Services | Create services with slots, instructions, price, and image | ✅ Live |
| 📂 Manage Services | List, update, and delete hospital services | ✅ Live |
| 📅 Doctor Appointments | Admin view of all doctor bookings with status and payment filters | ✅ Live |
| 🗓️ Service Appointments | Admin view of all service bookings with per-service stats via aggregation | ✅ Live |
| 📈 Service Analytics | Per-service breakdown: total appointments, completed, canceled, earnings | ✅ Live |

---

## 🏗️ System Architecture

### 🧑‍💻 Patient & Doctor Application Flow

```
┌─────────────────────────────────────────────────────┐
│        Patient / Doctor Browser                      │
│    React 19 + Vite 8 + Tailwind CSS 4               │
│    ClerkProvider wraps entire app (main.jsx)         │
└─────────────────────────┬───────────────────────────┘
                          │  Axios HTTP requests
                          ▼
┌─────────────────────────────────────────────────────┐
│           Clerk Authentication Layer                  │
│  Patient: ClerkMiddleware + requireAuth()             │
│  Doctor:  JWT Bearer token (doctorAuth.js)           │
└─────────────────────────┬───────────────────────────┘
                          │  Verified requests
                          ▼
┌─────────────────────────────────────────────────────┐
│            Express 5 REST API  (server.js)           │
│  ┌────────────┐ ┌────────────┐ ┌──────────────────┐ │
│  │/api/doctors│ │/api/appts  │ │/api/services     │ │
│  │            │ │            │ │/api/svc-appts    │ │
│  └─────┬──────┘ └─────┬──────┘ └────────┬─────────┘ │
│        │  Controllers (MVC business logic)│          │
│        └─────────────┬────────────────────┘          │
└──────────────────────┼──────────────────────────────┘
              ┌─────────┴──────────┐
              ▼                    ▼
┌──────────────────────┐  ┌────────────────────────┐
│   MongoDB Atlas      │  │   Stripe Checkout       │
│  - doctors           │  │  (INR card payments)    │
│  - appointments      │  │  session_id tracked in  │
│  - services          │  │  MongoDB for idempotent │
│  - serviceAppts      │  │  confirmation           │
└──────────────────────┘  └────────────────────────┘
              │
              ▼
┌──────────────────────┐
│  Cloudinary CDN      │
│  (Doctor + Service   │
│   images via Multer) │
└──────────────────────┘
```

### 🛠️ Admin Dashboard Architecture

```
┌─────────────────────────────────────────────────────┐
│           Admin Browser (React 19 SPA)               │
│    Clerk RequireAuth HOC on all protected routes     │
└─────────────────────────┬───────────────────────────┘
                          │  Axios (no auth header needed —
                          │  Clerk session cookie sent)
                          ▼
┌─────────────────────────────────────────────────────┐
│         Express 5 REST API  (same backend)           │
│         Admin calls same endpoints as Frontend       │
│         (no separate admin auth layer yet)           │
└────────────┬──────────────────────────┬─────────────┘
             ▼                          ▼
┌─────────────────────┐     ┌──────────────────────┐
│   MongoDB (writes)  │     │  Cloudinary (CRUD)   │
│   Doctor CRUD       │     │  uploadToCloudinary() │
│   Service CRUD      │     │  deleteFromCloudinary │
│   Aggregation stats │     │  on update/delete     │
└─────────────────────┘     └──────────────────────┘
```

---

## 📁 Folder Structure

```
MediCarePlus/
│
├── 📁 Frontend/                         # Patient-facing React 19 application
│   ├── 📁 public/
│   │   ├── favicon.svg                  # Custom hospital favicon
│   │   └── icons.svg                    # SVG icon sprite
│   ├── 📁 src/
│   │   ├── 📁 Components/               # Reusable page-level UI components
│   │   │   ├── AppointmentPage.jsx      # Unified history: doctor appts + service appts, filtered
│   │   │   │                            # by Clerk userId; shows payment status badges
│   │   │   ├── Banner.jsx               # Hero section with CTA buttons and BannerImg.png
│   │   │   ├── Certification.jsx        # Hospital certification logos carousel (C1–C7 assets)
│   │   │   ├── ContactPage.jsx          # Contact form + hospital map and info
│   │   │   ├── DoctorsPage.jsx          # Doctor listing with real-time search (regex, paginated)
│   │   │   ├── EditProfilePage.jsx      # Patient profile editor (name, phone, address, image)
│   │   │   ├── Footer.jsx               # Site-wide footer with navigation links
│   │   │   ├── HomeDoctors.jsx          # Featured doctors grid on homepage (HD1–HD8 assets)
│   │   │   ├── List.jsx                 # Doctor's appointment list wrapper component
│   │   │   ├── ListPage.jsx             # Full paginated doctor appointment table for doctor portal
│   │   │   ├── LoginPage.jsx            # Clerk-powered sign-in/sign-up UI
│   │   │   ├── Navbar.jsx               # Responsive navigation with Clerk UserButton integration
│   │   │   ├── ServicePage.jsx          # Hospital services grid (S1–S8 assets)
│   │   │   └── Testimonial.jsx          # Patient testimonials carousel
│   │   │
│   │   ├── 📁 Doctor/                   # Doctor portal UI (accessed via /doctor-admin/* routes)
│   │   │   ├── DashboardPage.jsx        # Doctor stats: total/completed/canceled appts, earnings
│   │   │   │                            # Populated via GET /api/appointments/doctor/:id
│   │   │   ├── DoctorNavbar.jsx         # Separate navbar shown on doctor portal pages
│   │   │   └── EditProfile.jsx          # Thin wrapper that renders EditProfile component
│   │   │
│   │   ├── 📁 Pages/                    # React Router v7 route-level page components
│   │   │   ├── Appointment.jsx          # Route wrapper → renders AppointmentPage component
│   │   │   ├── Contact.jsx              # Route wrapper → renders ContactPage component
│   │   │   ├── DHome.jsx                # Doctor home: renders DashboardPage for /doctor-admin/:id
│   │   │   ├── Doctors.jsx              # Route wrapper → renders DoctorsPage component
│   │   │   ├── DoctorsDetails.jsx       # Full doctor detail page: profile, schedule picker,
│   │   │   │                            # booking form, Stripe checkout flow
│   │   │   ├── Home.jsx                 # Patient homepage: Banner + HomeDoctors + Certification
│   │   │   │                            # + ServicePage + Testimonial
│   │   │   ├── Login.jsx                # Route wrapper → renders LoginPage (doctor JWT login)
│   │   │   ├── Service.jsx              # Route wrapper → renders ServicePage component
│   │   │   └── ServiceDetailPage.jsx    # Full service detail: info, slot picker, booking form,
│   │   │                                # Stripe checkout flow for services
│   │   │
│   │   ├── 📁 assets/                   # Static image and data assets
│   │   │   ├── BannerImg.png            # Hero section background image
│   │   │   ├── C1–C7.(png|svg)          # Hospital certification logos
│   │   │   ├── D1–D12.png              # Doctor profile placeholder images
│   │   │   ├── HD1–HD8.png             # Featured doctor images for homepage
│   │   │   ├── S1–S8.png               # Hospital service images
│   │   │   ├── logo.png                 # MediCare+ brand logo
│   │   │   └── dummyStyles.js           # Static doctor/service data for UI prototyping
│   │   │
│   │   ├── App.jsx                      # Root component: all React Router v7 routes defined here
│   │   │                                # Includes ScrollToTop + floating ScrollButton (lucide-react)
│   │   ├── main.jsx                     # Entry: ClerkProvider → BrowserRouter → App
│   │   ├── App.css                      # Global app-level styles
│   │   └── index.css                    # Tailwind CSS base/reset
│   │
│   ├── VerifyPaymentPage.jsx            # Stripe success/cancel handler for doctor appointments
│   │                                    # Reads ?session_id, calls GET /api/appointments/confirm
│   │                                    # Redirects to /appointments?payment_status=Paid|Failed
│   └── VerifyServicePaymentPage.jsx     # Stripe success/cancel handler for service bookings
│                                        # Reads ?session_id, calls GET /api/service-appointments/confirm
│                                        # Redirects to /appointments?service_payment=Paid|Failed
│
├── 📁 admin/                            # Admin React 19 SPA (Clerk-protected dashboard)
│   └── 📁 src/
│       ├── 📁 assets/
│       │   ├── logo.png                 # Shared MediCare+ brand logo
│       │   └── dummyStyles.js           # Static data for admin UI prototyping
│       │
│       ├── 📁 components/               # Reusable admin UI widgets
│       │   ├── AddPage.jsx              # Full doctor onboarding form: name, specialization,
│       │   │                            # experience, qualifications, location, fee, schedule,
│       │   │                            # image upload → POST /api/doctors
│       │   ├── AddService.jsx           # Service creation form: name, description, price,
│       │   │                            # slots, instructions, image → POST /api/services
│       │   ├── AppointmentsPage.jsx     # All doctor appointments: paginated table with status,
│       │   │                            # payment method, patient info filters
│       │   ├── DashBoardPage.jsx        # Analytics: total appts, revenue (paid only),
│       │   │                            # last-7-days appts via GET /api/appointments/stats/summary
│       │   ├── ListPage.jsx             # Doctor management: list, edit inline, delete
│       │   │                            # (Cloudinary image auto-deleted on doctor removal)
│       │   ├── ListServicePage.jsx      # Service management: list, edit, toggle availability,
│       │   │                            # delete
│       │   ├── ServiceAppointmentsPage.jsx # All service bookings: filter by service, status,
│       │   │                               # patient search
│       │   ├── ServiceDashBoard.jsx     # Per-service analytics via aggregation:
│       │   │                            # totalAppointments, completed, canceled, earnings
│       │   └── navbar.jsx               # Admin top navigation bar with Clerk UserButton
│       │
│       ├── 📁 pages/                    # Thin route wrappers for admin pages
│       │   ├── Add.jsx                  # Route: /add → renders AddPage component
│       │   ├── AddSer.jsx               # Route: /add-service → renders AddService component
│       │   ├── Appointments.jsx         # Route: /appointments → renders AppointmentsPage
│       │   ├── Hero.jsx                 # Public landing at / — sign-in prompt for admins
│       │   ├── Home.jsx                 # Route: /h → admin home (requires Clerk sign-in)
│       │   ├── List.jsx                 # Route: /list → renders ListPage (empty wrapper)
│       │   ├── ListService.jsx          # Route: /list-service → renders ListServicePage
│       │   ├── ServiceAppointments.jsx  # Route: /service-appointments → service bookings
│       │   └── SetDashboard.jsx         # Route: /service-dashboard → renders ServiceDashBoard
│       │
│       ├── App.jsx                      # Admin root: RequireAuth HOC + all admin Routes
│       ├── main.jsx                     # Entry: ClerkProvider → BrowserRouter → App
│       └── App.css                      # Admin global styles
│
└── 📁 backend/                          # Node.js + Express 5 REST API (ES Modules)
    ├── 📁 config/
    │   └── db.js                        # Mongoose.connect() using MONGODB_URI env variable
    │
    ├── 📁 controllers/                  # MVC business logic layer
    │   ├── appointmentController.js     # Handles:
    │   │                                # • createAppointment (free / cash / Stripe flow)
    │   │                                # • getAppointments (admin view, paginated + filtered)
    │   │                                # • getAppointmentsByPatient (by Clerk userId)
    │   │                                # • getAppointmentsByDoctor (by doctorId)
    │   │                                # • confirmPayment (Stripe session retrieval + 3-step match)
    │   │                                # • updateAppointment (status, notes, reschedule)
    │   │                                # • cancelAppointment
    │   │                                # • getStats (total, revenue, last-7-days)
    │   │                                # • getRegisterUserCount (via Clerk API)
    │   │
    │   ├── doctorController.js          # Handles:
    │   │                                # • createDoctor (with Cloudinary upload + JWT issued)
    │   │                                # • getDoctors (MongoDB aggregation with $lookup for stats)
    │   │                                # • getDoctorById
    │   │                                # • updateDoctor (JWT-protected; old image deleted)
    │   │                                # • deleteDoctor (Cloudinary image auto-deleted)
    │   │                                # • toggleAvailability (Available ↔ Unavailable)
    │   │                                # • doctorLogin (plain-text match → JWT signed, 7d expiry)
    │   │
    │   ├── serviceAppointmentController.js # Handles:
    │   │                                # • createServiceAppointment (cash / Stripe flow)
    │   │                                # • confirmServicePayment (Stripe session + metadata match)
    │   │                                # • getServiceAppointments (admin view)
    │   │                                # • getServiceAppointmentById
    │   │                                # • updateServiceAppointment (reschedule, status, payment)
    │   │                                # • cancelServiceAppointment
    │   │                                # • getServiceAppointmentStats (per-service aggregation)
    │   │                                # • getAppointmentForPatient (by Clerk userId)
    │   │
    │   └── serviceController.js         # Handles:
    │                                    # • createService (slots normalized to date → time map)
    │                                    # • getservices
    │                                    # • getServiceById
    │                                    # • updateService (Cloudinary old image deleted)
    │                                    # • deleteService (Cloudinary image auto-deleted)
    │
    ├── 📁 middlewares/
    │   ├── doctorAuth.js                # JWT Bearer middleware: verifies token, checks role=doctor,
    │   │                                # fetches doctor from DB, attaches req.doctor for controllers
    │   └── multer.js                    # Disk storage to /uploads/; unique timestamped filename;
    │                                    # MIME filter: jpeg/png/jpg/webp only; 5MB size limit
    │
    ├── 📁 models/                       # Mongoose schema definitions
    │   ├── doctor.js                    # Doctor schema (see Database Design section)
    │   ├── appointment.js               # Appointment schema with embedded payment subdocument
    │   ├── serviceAppointment.js        # Service appointment schema with time (hour/minute/ampm)
    │   └── services.js                  # Hospital service schema with slots Map
    │
    ├── 📁 routes/                       # Express Router definitions
    │   ├── DoctorRouter.js              # Binds /api/doctors/* endpoints
    │   ├── appointmentRouter.js         # Binds /api/appointments/* endpoints
    │   ├── serviceAppointmentRouter.js  # Binds /api/service-appointments/* endpoints
    │   └── serviceRouter.js             # Binds /api/services/* endpoints
    │
    ├── 📁 utils/
    │   └── cloudinary.js               # Cloudinary SDK config + uploadToCloudinary(filePath, folder)
    │                                    # + deleteFromCloudinary(publicId); local file unlinked after upload
    │
    └── server.js                        # Express bootstrap: CORS whitelist (5173, 5174),
                                         # clerkMiddleware(), 20MB JSON body limit,
                                         # route mounts, DB connect, listen on port 4000
```

---

## 🛠️ Technologies Used

### Frontend & Admin

| Technology | Purpose | Version |
|---|---|---|
| React | Component-based SPA framework | ^19.2.7 |
| Vite | Build tool and dev server | ^8.1.1 |
| React Router DOM | Client-side routing (v7 API) | ^7.11.0 |
| Tailwind CSS | Utility-first styling framework | ^4.3.2 |
| Axios | Promise-based HTTP client | ^1.19.0 |
| Clerk React | Patient and admin authentication SDK | ^5.61.8 |
| Lucide React | Icon library (scroll button, UI icons) | ^1.23.0 |
| React Hot Toast | In-app toast notification system | ^2.6.0 |
| React Toastify | Alert and notification system | ^11.1.0 |

### Backend

| Technology | Purpose | Version |
|---|---|---|
| Node.js | JavaScript server runtime | ^20.x |
| Express | Minimal web framework (v5) | ^5.2.1 |
| MongoDB | NoSQL document database | — |
| Mongoose | ODM for MongoDB schema modeling | ^9.7.3 |
| Stripe | Payment processing (Checkout Sessions, INR) | ^22.3.0 |
| JSON Web Token | Stateless doctor authentication tokens | ^9.0.3 |
| Multer | Multipart file upload middleware (disk storage) | ^2.2.0 |
| Cloudinary | Cloud image storage and CDN delivery | ^2.10.0 |
| @clerk/express | Backend Clerk middleware + `requireAuth()` | ^2.1.35 |
| dotenv | Environment variable management | ^17.4.2 |
| cors | Cross-Origin Resource Sharing | ^2.8.6 |
| nodemon | Auto-restart on file changes (dev) | ^3.1.14 |
| validator | Input validation helpers | ^13.15.35 |

---

## 🚀 Installation Guide

### Prerequisites

- **Node.js** v18+ — [Download](https://nodejs.org/)
- **MongoDB Atlas** account — [Sign Up](https://www.mongodb.com/cloud/atlas)
- **Cloudinary** account — [Sign Up](https://cloudinary.com/)
- **Clerk** account — [Sign Up](https://clerk.com/)
- **Stripe** account — [Sign Up](https://stripe.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MONJIT07/MediCarePlus.git
cd MediCarePlus
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` in `/backend/` (see [Environment Variables](#-environment-variables)):

```bash
# Start in development mode (nodemon)
npm start

# Or directly
node server.js
```

> ✅ API running at `http://localhost:4000`

---

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
```

Create `.env` in `/Frontend/`:

```bash
npm run dev
```

> ✅ Patient portal at `http://localhost:5173`

---

### 4️⃣ Admin Setup

```bash
cd ../admin
npm install
```

Create `.env` in `/admin/`:

```bash
npm run dev
```

> ✅ Admin dashboard at `http://localhost:5174`

---

## 🔐 Environment Variables

### Backend — `/backend/.env`

```env
# Server
PORT=4000

# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/medicare

# Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Clerk (backend)
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Frontend URL (for Stripe redirect URLs)
FRONTEND_URL=http://localhost:5173

# Optional: Admin user ID for appointment ownership
MAJOR_ADMIN_ID=your_clerk_user_id
```

### Frontend — `/Frontend/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:4000
```

### Admin — `/admin/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:4000
```

---

### 🔑 Variable Reference

| Variable | Where | Description |
|---|---|---|
| `PORT` | Backend | Express listen port (default 4000) |
| `MONGODB_URI` | Backend | Full Atlas connection string with credentials and DB name |
| `JWT_SECRET` | Backend | HMAC secret for signing/verifying doctor JWT tokens (HS256) |
| `CLOUDINARY_CLOUD_NAME` | Backend | Cloud name shown in Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | Backend | Public API key for Cloudinary upload authentication |
| `CLOUDINARY_API_SECRET` | Backend | Private secret for signing Cloudinary requests |
| `CLERK_SECRET_KEY` | Backend | Secret key for `@clerk/express` middleware to verify sessions |
| `STRIPE_SECRET_KEY` | Backend | Stripe secret key to create Checkout Sessions and retrieve them |
| `FRONTEND_URL` | Backend | Used to build Stripe `success_url` and `cancel_url` redirect targets |
| `MAJOR_ADMIN_ID` | Backend | Optional Clerk user ID stamped as `owner` on appointments |
| `VITE_CLERK_PUBLISHABLE_KEY` | Frontend/Admin | Browser-safe Clerk key to initialize `ClerkProvider` |
| `VITE_BACKEND_URL` | Frontend/Admin | Base URL for all Axios API calls |

---

## 📡 API Documentation

> Base URL: `http://localhost:4000`

---

### 👨‍⚕️ Doctor Endpoints — `/api/doctors`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/doctors` | List all doctors (aggregated stats, search `?q=`, paginated) | None |
| `GET` | `/api/doctors/:id` | Get single doctor by MongoDB ID | None |
| `POST` | `/api/doctors` | Create a doctor (with image upload) | None (Admin calls) |
| `POST` | `/api/doctors/login` | Doctor login — returns JWT token (7d) | None |
| `PUT` | `/api/doctors/:id` | Update doctor profile / image | Doctor JWT |
| `POST` | `/api/doctors/:id/toggle-availability` | Flip Available ↔ Unavailable | Doctor JWT |
| `DELETE` | `/api/doctors/:id` | Delete doctor (Cloudinary image auto-deleted) | Doctor JWT |

<details>
<summary>📄 POST /api/doctors/login — Request & Response</summary>

**Request Body:**
```json
{
  "email": "dr.priya@medicare.com",
  "password": "SecurePass123"
}
```

**Response `200 OK`:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "_id": "64f8a2b3c9e77b001f3d9abc",
    "name": "Dr. Priya Sharma",
    "specialization": "Cardiologist",
    "availability": "Available",
    "fee": 800,
    "rating": 4.8
  }
}
```

**Response `401 Unauthorized`:**
```json
{ "success": false, "message": "Invalid Creds" }
```
</details>

<details>
<summary>📄 GET /api/doctors — Query Params & Response</summary>

**Query Params:**

| Param | Type | Default | Description |
|---|---|---|---|
| `q` | string | `""` | Regex search on name, specialization |
| `limit` | number | `200` | Max results (capped at 500) |
| `page` | number | `1` | Pagination page |

**Response `200 OK`:**
```json
{
  "success": true,
  "doctors": [
    {
      "_id": "64f8a2b3c9e77b001f3d9abc",
      "name": "Dr. Priya Sharma",
      "specialization": "Cardiologist",
      "fee": 800,
      "imageUrl": "https://res.cloudinary.com/.../doctors/...",
      "appointmentsTotal": 124,
      "appointmentsCompleted": 98,
      "appointmentsCanceled": 5,
      "earnings": 78400,
      "availability": "Available"
    }
  ],
  "meta": { "page": 1, "limit": 200, "total": 12 }
}
```
</details>

---

### 📅 Appointment Endpoints — `/api/appointments`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/appointments` | All appointments (admin; filterable by doctorId, status, search) | None |
| `GET` | `/api/appointments/confirm` | Confirm Stripe payment via `?session_id=` | None |
| `GET` | `/api/appointments/stats/summary` | Total count, paid revenue, last-7-days count | None |
| `POST` | `/api/appointments` | Create appointment (free / cash / Stripe flow) | Clerk `requireAuth()` |
| `GET` | `/api/appointments/me` | Patient's own appointments (by Clerk userId) | Clerk `requireAuth()` |
| `GET` | `/api/appointments/doctor/:doctorId` | Doctor's appointments (filterable) | None |
| `POST` | `/api/appointments/:id/cancel` | Cancel an appointment | None |
| `GET` | `/api/appointments/patients/count` | Registered user count from Clerk API | None |
| `PUT` | `/api/appointments/:id` | Update status, notes, or reschedule | None |

<details>
<summary>📄 POST /api/appointments — Request & Response</summary>

**Request Body:**
```json
{
  "doctorId": "64f8a2b3c9e77b001f3d9abc",
  "patientName": "Rahul Das",
  "mobile": "9876543210",
  "age": 32,
  "gender": "Male",
  "date": "2025-10-15",
  "time": "10:30 AM",
  "fee": 800,
  "paymentMethod": "Online",
  "email": "rahul@example.com"
}
```

**Response `201 Created` (Online/Stripe):**
```json
{
  "success": true,
  "appointment": {
    "_id": "64f9c1e7d0a44c001b2ef123",
    "status": "Pending",
    "payment": { "method": "Online", "status": "Pending", "amount": 800 },
    "sessionId": "cs_test_a1b2c3..."
  },
  "checkoutUrl": "https://checkout.stripe.com/pay/cs_test_a1b2c3..."
}
```

**Duplicate Slot Response `409 Conflict`:**
```json
{
  "success": false,
  "message": "You already have an appointment with this doctor at the selected slot."
}
```
</details>

---

### 🛎️ Service Endpoints — `/api/services`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/services` | List all services (sorted by newest) | None |
| `GET` | `/api/services/:id` | Get single service by ID | None |
| `POST` | `/api/services` | Create service (with image upload, slot normalization) | None (Admin calls) |
| `PUT` | `/api/services/:id` | Update service details / image | None (Admin calls) |
| `DELETE` | `/api/services/:id` | Delete service (Cloudinary image auto-deleted) | None (Admin calls) |

---

### 🗓️ Service Appointment Endpoints — `/api/service-appointments`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/service-appointments` | All service bookings (admin; filterable) | None |
| `GET` | `/api/service-appointments/confirm` | Confirm Stripe service payment via `?session_id=` | None |
| `GET` | `/api/service-appointments/stats/summary` | Per-service aggregation (totalAppts, earnings) | None |
| `POST` | `/api/service-appointments` | Create service booking (cash / Stripe) | Clerk `requireAuth()` |
| `GET` | `/api/service-appointments/me` | Patient's own service bookings | Clerk `requireAuth()` |
| `GET` | `/api/service-appointments/:id` | Get single service appointment | None |
| `PUT` | `/api/service-appointments/:id` | Update status, notes, payment, reschedule | None |
| `POST` | `/api/service-appointments/:id/cancel` | Cancel a service booking | None |

---

### 📊 HTTP Status Code Reference

| Code | Meaning |
|---|---|
| `200` | OK — Request succeeded |
| `201` | Created — Resource created successfully |
| `400` | Bad Request — Missing fields or invalid data |
| `401` | Unauthorized — Missing or invalid token / Clerk session |
| `403` | Forbidden — Valid token but insufficient role (e.g., wrong doctor) |
| `404` | Not Found — Resource does not exist |
| `409` | Conflict — Duplicate booking or email already in use |
| `500` | Internal Server Error — Unexpected backend failure |
| `502` | Bad Gateway — Stripe API error |

---

## 🗄️ Database Design

MediCare+ uses **MongoDB** with four collections:

### 👨‍⚕️ `doctors` Collection

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | Auto-generated |
| `email` | String | Unique, lowercase, indexed |
| `password` | String | `select: false` — excluded from queries by default |
| `name` | String | Required, trimmed |
| `specialization` | String | e.g., "Cardiologist", "Dermatologist" |
| `imageUrl` | String | Cloudinary `secure_url` |
| `imagePublicId` | String | Cloudinary `public_id` for deletion |
| `experience` | String | e.g., "8 years" |
| `qualifications` | String | e.g., "MBBS, MD" |
| `location` | String | Clinic/hospital address |
| `about` | String | Doctor bio |
| `fee` | Number | Consultation fee (INR) |
| `availability` | String | Enum: `Available` / `Unavailable` |
| `schedule` | Map\<String, \[String\]\> | `{ "2025-10-15": ["09:00 AM", "10:30 AM"] }` — deduped and sorted |
| `patients` | String | Displayed patient count (string label) |
| `rating` | Number | 0–5 star rating |
| `success` | String | Success metric label |
| `createdAt` | Date | Auto-timestamp |
| `updatedAt` | Date | Auto-timestamp |

**Indexes:** `email` (unique), text index on `name` + `specialization`

---

### 📅 `appointments` Collection

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | Auto-generated |
| `owner` | String | Clerk user ID of admin/owner; required, indexed |
| `createdBy` | String | Clerk user ID of patient; indexed |
| `patientName` | String | Required |
| `mobile` | String | Required |
| `age` | Number | Optional |
| `gender` | String | Optional |
| `doctorId` | ObjectId | Ref: `Doctor`; indexed |
| `doctorName` | String | Snapshot at booking time |
| `speciality` | String | Snapshot at booking time |
| `doctorImage` | Object | `{ url, publicId }` snapshot |
| `date` | String | ISO date string |
| `time` | String | e.g., "10:30 AM" |
| `fees` | Number | Consultation fee charged; min 0 |
| `status` | String | Enum: `Pending` / `Confirmed` / `Completed` / `Canceled` / `Rescheduled` |
| `rescheduledTo` | Object | `{ date, time }` on reschedule |
| `payment.method` | String | Enum: `Cash` / `Online` |
| `payment.status` | String | Enum: `Pending` / `Paid` / `Failed` / `Refunded` |
| `payment.amount` | Number | Payment amount |
| `payment.providerId` | String | Stripe `payment_intent` ID |
| `sessionId` | String | Stripe `checkout.session.id`; indexed |
| `paidAt` | Date | Timestamp when payment confirmed |
| `createdAt` | Date | Auto-timestamp |

---

### 🛎️ `services` Collection

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | Auto-generated |
| `about` | String | Full service description |
| `shortDescription` | String | Summary for cards |
| `price` | Number | Service cost (INR) |
| `available` | Boolean | Availability flag |
| `imageUrl` | String | Cloudinary secure URL |
| `imagePublicId` | String | For deletion |
| `dates` | \[String\] | Available date strings |
| `slots` | Map\<String, \[String\]\> | `{ "2025-10-15": ["09:00 AM", "11:00 AM"] }` |
| `instructions` | \[String\] | Preparation instructions for patients |
| `totalAppointments` | Number | Counter (denormalized) |
| `completed` | Number | Completed booking count |
| `canceled` | Number | Canceled booking count |
| `createdAt` | Date | Auto-timestamp |

**Indexes:** Text index on `about` + `shortDescription`

---

### 🗓️ `serviceappointments` Collection

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | Auto-generated |
| `createdBy` | String | Clerk user ID; indexed |
| `patientName` | String | Required |
| `mobile` | String | Required |
| `age` | Number | Optional |
| `gender` | String | Enum: `Male` / `Female` / `Other` / `""` |
| `serviceId` | ObjectId | Ref: `Service`; indexed |
| `serviceName` | String | Required snapshot |
| `serviceImage` | Object | `{ url, publicId }` snapshot |
| `fees` | Number | Required; min 0 |
| `date` | String | YYYY-MM-DD; indexed |
| `hour` | Number | 12h hour |
| `minute` | Number | Minutes |
| `ampm` | String | Enum: `AM` / `PM` |
| `status` | String | Enum: `Pending` / `Confirmed` / `Rescheduled` / `Completed` / `Canceled` |
| `payment.method` | String | `Cash` / `Online` |
| `payment.status` | String | `Pending` / `Confirmed` / `Paid` / `Failed` / `Refunded` / `Canceled` |
| `payment.sessionId` | String | Stripe session ID; indexed |
| `payment.paidAt` | Date | Payment confirmation timestamp |
| `createdAt` | Date | Auto-timestamp |

**Compound Indexes:** `{ date: 1, status: 1 }`, `{ serviceId: 1 }`

---

## 🔑 Authentication Flow

MediCare+ uses a **dual-authentication architecture** for two distinct user classes:

### 🔵 Clerk Authentication (Patients & Admin)

```
Patient/Admin visits site
         │
         ▼
ClerkProvider initialized (main.jsx)
with VITE_CLERK_PUBLISHABLE_KEY
         │
         ▼
User signs in via Clerk UI
(Email, Google, Social OAuth)
         │
         ▼
Clerk issues session token
automatically managed in browser
         │
         ▼
React Router routes render normally
(Admin: RequireAuth HOC checks isSignedIn)
         │
         ▼
Axios requests to backend
Clerk attaches session automatically
(via @clerk/express clerkMiddleware)
         │
         ▼
Protected routes use:
clerkMiddleware() + requireAuth()
→ req.auth.userId = Clerk user ID
         │
         ▼
Controllers use resolveClerkUserId(req)
to extract userId for DB queries
```

---

### 🟠 JWT Authentication (Doctors)

```
Doctor visits /doctor-admin/login
         │
         ▼
LoginPage.jsx sends:
POST /api/doctors/login
{ email, password }
         │
         ▼
doctorController.doctorLogin()
finds doctor by email
checks password match
         │
         ▼
jwt.sign({ id, email, role: "doctor" }, JWT_SECRET, { expiresIn: "7d" })
JWT returned in response body
         │
         ▼
Frontend stores JWT in state/localStorage
sends as Authorization: Bearer <token>
on every doctor portal API call
         │
         ▼
doctorAuth.js middleware:
1. Extracts Bearer token from header
2. jwt.verify(token, JWT_SECRET)
3. Checks payload.role === "doctor"
4. Doctor.findById(payload.id)
5. Attaches to req.doctor
6. Calls next()
         │
         ▼
Controller has req.doctor for authorization
(e.g., updateDoctor checks req.doctor._id === id)
```

---

### 🔴 Role-Based Route Reference

| Role | Auth Method | Key Routes |
|---|---|---|
| Guest | None | `GET /api/doctors`, `GET /api/services`, Frontend browse pages |
| Patient | Clerk Session (`requireAuth()`) | `POST /api/appointments`, `GET /api/appointments/me`, `GET /api/service-appointments/me` |
| Doctor | JWT Bearer (`doctorAuth` middleware) | `PUT /api/doctors/:id`, `POST /api/doctors/:id/toggle-availability`, `DELETE /api/doctors/:id` |
| Admin | Clerk Session (RequireAuth HOC) | All admin dashboard routes (`/dashboard`, `/add`, `/list`, etc.) |

---

## ☁️ Image Upload Flow

Doctor and service images follow this pipeline:

```
Admin/Doctor selects image in React form
                │
                ▼ multipart/form-data via Axios
Express backend receives request
                │
                ▼
multer.js middleware (disk storage)
• Saves to /uploads/<timestamp>-<random><ext>
• MIME filter: jpeg/png/jpg/webp only
• Max file size: 5 MB
• Populates req.file.path
                │
                ▼
Controller calls uploadToCloudinary(req.file.path, "doctors")
                │
                ▼
cloudinary.uploader.upload(filePath, { folder, resource_type: "image" })
                │
                ▼
fs.unlinkSync(filePath)      ← local file deleted after upload
                │
                ▼
Cloudinary returns:
{ secure_url, public_id }
                │
                ▼
Both saved to MongoDB document:
doctor.imageUrl = secure_url
doctor.imagePublicId = public_id
                │
                ▼
Frontend renders image via Cloudinary CDN URL
(globally cached, optimized delivery)
```

**On Update/Delete:** `deleteFromCloudinary(existing.imagePublicId)` is called before saving the new URL, ensuring no orphaned images accumulate in Cloudinary storage.

---

## 💳 Payment & Verification Flow

MediCare+ uses **Stripe Checkout Sessions** for all online payments. The `session_id` is stored in MongoDB at booking time, enabling idempotent, reliable payment confirmation.

### 🔵 Doctor Appointment Online Payment

```
Patient fills booking form
(DoctorsDetails.jsx)
        │
        ▼
POST /api/appointments
{ paymentMethod: "Online", fee: 800, ... }
        │
        ▼
Backend creates Stripe Checkout Session
stripe.checkout.sessions.create({
  currency: "inr",
  unit_amount: fee * 100,
  success_url: FRONTEND_URL + "/appointment/success?session_id={CHECKOUT_SESSION_ID}",
  cancel_url:  FRONTEND_URL + "/appointment/cancel",
  metadata: { doctorId, patientName, mobile, clerkUserId }
})
        │
        ▼
Appointment created in MongoDB:
{ status: "Pending", sessionId: session.id,
  payment: { status: "Pending" } }
        │
        ▼
checkoutUrl returned to frontend
→ window.location.href = checkoutUrl
        │
        ▼
Patient completes payment on Stripe hosted page
        │
        ▼
Stripe redirects to:
/appointment/success?session_id=cs_test_...
        │
        ▼
VerifyPaymentPage.jsx mounts (renders null — invisible)
reads session_id from URL
GET /api/appointments/confirm?session_id=cs_test_...
        │
        ▼
Backend: stripe.checkout.sessions.retrieve(session_id)
Verifies payment_status === "paid"
Updates MongoDB: { status: "Confirmed", payment.status: "Paid", paidAt: now }
(3-step match: sessionId → metadata → amount+time fallback)
        │
        ▼
navigate("/appointments?payment_status=Paid")
Patient sees confirmed appointment in history
```

### 🟠 Service Appointment Online Payment

Identical flow via `VerifyServicePaymentPage.jsx`:

- Success → `GET /api/service-appointments/confirm?session_id=`
- MongoDB updated: `{ status: "Confirmed", payment.status: "Confirmed", paidAt: now }`
- Redirect → `/appointments?service_payment=Paid`

### 🟢 Cash Payment Flow

```
Patient selects "Cash" payment
        │
        ▼
POST /api/appointments
{ paymentMethod: "Cash" }
        │
        ▼
Appointment created:
{ status: "Pending", payment: { method: "Cash", status: "Pending" } }
No Stripe session created — checkoutUrl: null
        │
        ▼
Patient pays at clinic
Doctor/Admin manually marks as Confirmed
via PUT /api/appointments/:id { status: "Confirmed" }
```

---

## 📱 Responsive Design

MediCare+ is built with **Tailwind CSS v4** using a mobile-first approach:

| Breakpoint | Target | Layout Behavior |
|---|---|---|
| `< 640px` | Mobile phones | Single column, hamburger nav, stacked cards |
| `640px–768px` | Large phones | Two-column doctor/service grids |
| `768px–1024px` | Tablets, small laptops | Three-column grids, expanded navigation |
| `> 1024px` | Desktops | Full multi-column layout with sidebars |

Key techniques used:

- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) for breakpoint-aware layouts
- `overflow-x: hidden` applied globally in `App.jsx` to prevent horizontal scroll
- `object-fit: cover` for consistent image rendering across screen sizes
- Touch-friendly interactive targets (minimum 44×44px tap areas)
- Floating scroll-to-top button (`ScrollButton` in `App.jsx`) with smooth visibility transition based on `window.scrollY > 200`
- Auto scroll-to-top on every route change via `ScrollToTop` component using React Router's `useLocation`

---

## 🛡️ Security Features

| Feature | Implementation | Details |
|---|---|---|
| 🔐 Doctor JWT Auth | `jsonwebtoken` + `doctorAuth.js` | HS256, 7-day expiry, `role: "doctor"` claim, doctor fetched from DB on every request |
| 👤 Clerk Patient Auth | `@clerk/express` `clerkMiddleware()` + `requireAuth()` | Managed sessions, social OAuth, no passwords stored for patients |
| 🔒 Role Authorization | Controller-level check | `updateDoctor` verifies `req.doctor._id === params.id` before any mutation |
| 🚫 Duplicate Booking | Controller pre-check | `Appointment.findOne({ doctorId, createdBy, date, time, status: { $ne: "Canceled" } })` before creating |
| 📁 File Type Filter | `multer.js` MIME check | Only `image/jpeg`, `image/png`, `image/jpg`, `image/webp` accepted; all others rejected |
| 📏 File Size Limit | `multer.js` limits | Maximum 5 MB per upload |
| 🌐 CORS Whitelist | `server.js` | Only `localhost:5173` and `localhost:5174` allowed (update for production) |
| 🔑 Env Secrets | `dotenv` | Zero credentials in source code; `.env` in `.gitignore` |
| ☁️ No Local Storage | Cloudinary pipeline | Images removed from disk (`fs.unlinkSync`) immediately after Cloudinary upload |
| 💳 Stripe Session Match | `confirmPayment` | 3-step match (sessionId → metadata → amount+time) prevents mismatched payment confirmation |
| 🔒 Password Hidden | Mongoose `select: false` | Doctor `password` field excluded from all queries unless explicitly selected |
| 🛡️ Admin Route Guard | `RequireAuth` HOC | `useUser()` from Clerk; redirects to Hero page if not signed in |

---

## 📸 Screenshots

> 📌 *Replace placeholders with actual screenshots from your deployed app.*

### 🏠 Home Page
```
[ public/screenshots/home.png ]
Hero banner → Featured Doctors grid → Hospital Certifications → Services → Testimonials
```

### 👨‍⚕️ Doctors Listing
```
[ public/screenshots/doctors.png ]
Real-time search bar → Paginated doctor cards with specialization and fee
```

### 🔍 Doctor Details
```
[ public/screenshots/doctor-detail.png ]
Full profile → Schedule date picker → Time slot grid → Booking form → Stripe CTA
```

### 📅 Appointment History
```
[ public/screenshots/appointments.png ]
Unified doctor + service booking history with payment status badges
```

### 🛎️ Service Detail
```
[ public/screenshots/service-detail.png ]
Service info → Instructions → Date/time picker → Booking form → Stripe CTA
```

### 🛠️ Admin Dashboard
```
[ public/screenshots/admin-dashboard.png ]
Total appointments count → Revenue (paid) → Last-7-days bookings
```

### ➕ Add Doctor (Admin)
```
[ public/screenshots/add-doctor.png ]
Full onboarding form with schedule builder and image upload
```

### 📊 Service Analytics (Admin)
```
[ public/screenshots/service-analytics.png ]
Per-service table: totalAppointments, completed, canceled, earnings
```

### 👨‍⚕️ Doctor Dashboard
```
[ public/screenshots/doctor-dashboard.png ]
Doctor's stats: total/completed/canceled appointments, earnings
```

### 📞 Contact Page
```
[ public/screenshots/contact.png ]
Contact form + hospital info
```

---

## 🚧 Future Improvements

| # | Feature | Priority | Description |
|---|---|---|---|
| 1 | 🔒 Password Hashing | Critical | Replace plain-text doctor passwords with `bcrypt` hashing |
| 2 | 🤖 AI Symptom Chatbot | High | NLP-powered chatbot to recommend specialists based on symptoms |
| 3 | 📹 Video Consultation | High | WebRTC peer-to-peer video calling between patients and doctors |
| 4 | 📧 Email Notifications | High | Transactional emails (Nodemailer/SendGrid) for booking confirmation and reminders |
| 5 | 📱 SMS Alerts | High | Twilio-powered appointment reminders via SMS |
| 6 | 🌐 Deploy to Production | High | Frontend/Admin → Vercel; Backend → Render; update CORS origins and `FRONTEND_URL` |
| 7 | ⭐ Doctor Ratings & Reviews | Medium | Patient-submitted star ratings and text reviews after completed appointments |
| 8 | 📋 Medical Records Upload | Medium | Patients can upload and share prescriptions/test reports with doctors |
| 9 | 💊 Digital Prescriptions | Medium | Doctors create prescriptions; patients download as PDF |
| 10 | 🔍 Advanced Filters | Medium | Filter doctors by fee range, gender, rating, experience, language |
| 11 | ⏰ Appointment Reminders | Medium | Automated 24h and 1h push/email reminders |
| 12 | 🐳 Docker Support | Medium | `docker-compose.yml` for one-command dev setup (mongo, backend, frontend, admin) |
| 13 | ⚙️ CI/CD Pipeline | Medium | GitHub Actions: lint → test → deploy on push to `main` |
| 14 | ⚡ Redis Caching | Medium | Cache doctor lists and service data to reduce MongoDB load |
| 15 | 🌙 Dark Mode | Low | System-preference-aware dark/light toggle across all three apps |
| 16 | 📲 PWA Support | Low | Service worker + manifest for offline access and home screen install |
| 17 | 🔔 Push Notifications | Low | Browser push notifications for appointment status updates |
| 18 | 🏥 Multi-Hospital Support | Low | Multi-tenant architecture to support multiple hospital branches |
| 19 | 🧪 Testing Suite | High | Jest + Supertest for API unit/integration tests; Playwright for E2E |
| 20 | 🌍 Localization (i18n) | Low | Multi-language support using `react-i18next` |

---

## 🤝 Contributing Guide

Contributions are warmly welcomed!

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

Follow the existing patterns:
- All business logic belongs in **controllers**, not routes
- Models define schema only — no business logic
- Frontend components should be modular and reusable
- Use `async/await` with try/catch in all controllers

### 4. Commit with Conventional Commits

```bash
git commit -m "feat: add email notification for appointment confirmation"
git commit -m "fix: resolve duplicate booking check for service appointments"
git commit -m "docs: update API table for service endpoints"
```

Prefixes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Push and Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Open a PR against `main` with a clear description of changes and screenshots if UI-related.

---

### 📋 Code Conventions

- ES Modules (`import`/`export`) throughout — `"type": "module"` in all `package.json`
- Controllers export named functions; default export is an object collecting all
- Mongoose models guard against duplicate model registration: `mongoose.model.Doctor || mongoose.model("Doctor", schema)`
- Middleware attached as named exports for testability

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License — Copyright (c) 2025 Monjit Tamuli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

## 👨‍💻 Author

<div align="center">

### Monjit Tamuli

*Final Year B.Tech — Electrical Engineering | NIT Silchar*

*Full Stack Developer · Data / ML Engineer · Open Source Contributor*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-MONJIT07-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MONJIT07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/monjit-tamuli)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-monjittamuli7747@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:monjittamuli7747@gmail.com)

</div>

---

## 💬 Support

Encountering a bug or have a question?

- 🐛 **Bug Report** → [Open an Issue](https://github.com/MONJIT07/MediCarePlus/issues/new)
- 💡 **Feature Request** → [Start a Discussion](https://github.com/MONJIT07/MediCarePlus/discussions)
- 📧 **Direct Contact** → [monjittamuli7747@gmail.com](mailto:monjittamuli7747@gmail.com)

Response time: typically within **48 hours**.

---

## 🙏 Acknowledgements

- **[Stripe](https://stripe.com/)** — For the developer-friendly Checkout Sessions API that powers all payments in MediCare+
- **[Clerk](https://clerk.com/)** — For eliminating the complexity of auth with a beautiful, managed identity layer
- **[Cloudinary](https://cloudinary.com/)** — For the generous free tier and the seamless Node.js upload SDK
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** — For the free-tier cloud database and the powerful aggregation pipeline
- **[Vite](https://vitejs.dev/)** — For making frontend development blazingly fast
- **[Tailwind CSS](https://tailwindcss.com/)** — For the utility-first CSS system that made responsive design a breeze
- **[Lucide React](https://lucide.dev/)** — For the clean, consistent icon set used throughout the UI
- **NIT Silchar** — For the academic environment that made this project possible
- **The Open Source Community** — For every library, tutorial, and Stack Overflow answer that contributed

---

<div align="center">

## ⭐ Support MediCare+

If this project helped, inspired, or impressed you —

**a star goes a long way toward keeping it alive.**

Stars signal to other developers, learners, and recruiters that this project is worth their time.

[![Star this repo](https://img.shields.io/github/stars/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=⭐%20Star%20This%20Repo&color=FFD700)](https://github.com/MONJIT07/MediCarePlus)

<br/>

[![Fork](https://img.shields.io/github/forks/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=Fork)](https://github.com/MONJIT07/MediCarePlus/fork)
[![Watch](https://img.shields.io/github/watchers/MONJIT07/MediCarePlus?style=for-the-badge&logo=github&label=Watch)](https://github.com/MONJIT07/MediCarePlus)

<br/>

---

*Built with ❤️ by [Monjit Tamuli](https://github.com/MONJIT07) · MIT Licensed · Open to Contributions*

</div>
