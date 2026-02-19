# 🛡️ RapidAuth | The Immutable Trust Ecosystem
### *Winner of the Algorand Global Hackathon - Concept Track*

RapidAuth is a decentralized ecosystem that bridges the gap between traditional academic records and the digital future. Built on **Algorand**, it provides institutions, students, and recruiters with a single source of truth that is tamper-proof, instantly verifiable, and 100% user-owned.

---

## 💎 Why RapidAuth Wins?
- **Unlimited Scalability**: Uses the "Note Anchoring" pattern to bypass App Storage limits.
- **Zero-Trust Security**: Authenticated via institutional OTP and secured by SHA-256.
- **Human-First UX**: Live Camera QR Scanning, Unicode-safe Magic Links, and PDF-ready Printables.
- **Production Ready**: Fully isolated Frontend/Backend architecture with complete environment variable support.

---

## 📂 Repository Resources
Explore our technical depth:
- [🏗️ Architecture Deep-Dive](./docs/ARCHITECTURE.md) - Scalable Note Anchoring & Vault Logic.
- [🔐 Security Analysis](./docs/SECURITY.md) - Cryptographic Integrity & Privacy Salting.
- [🚀 Future Roadmap](./docs/ROADMAP.md) - IPFS, ZKPs, and Institutional DAOs.

---

## 🚀 One-Minute Quick Start

### 1. Identity Hub (Frontend)
```bash
cd frontend
npm install
npm run dev
```

### 2. Auth Service (Backend)
```bash
cd backend
npm install
npm run start
```

## 📋 Hackathon Demo Personas
| Persona | Email | OTP | Use Case |
| :--- | :--- | :--- | :--- |
| **Authority** | Institutional Link | N/A | Connect Pera Wallet to Mint/Revoke. |
| **Student** | `ravi@campusvault.ai` | `123456` | Manage Vault & Share Proof. |
| **Recruiter** | `hr@campusvault.ai` | `123456` | Scan QR for Instant Verification. |

---

## ☁️ Deployment Guide
- **Frontend**: Deploy `frontend/` to **Vercel** (Set Root: `frontend`).
- **Backend**: Deploy `backend/` to **Render** or **Railway** (Set Root: `backend`).

---
### 🔗 Technical Spec
- **L1 Network**: Algorand Testnet (Application ID: `755797878`)
- **Technology**: React 19, Node.js, Pera Wallet, Lucid-React.
