<div align="center">

# POS System — Frontend

**The web interface for a point-of-sale system, built with Vue.js and PrimeVue.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Overview

POS System Frontend is the staff-facing dashboard for a retail point-of-sale system. Staff sign in to manage products, stock, and staff accounts, and to review sales reports through a clean sidebar layout. It is designed to work with the [POS System Backend](https://github.com/RithyBondeth/Pos-System-Backend).

## Features

- **Authentication:** sign-in and sign-up pages with a separate auth layout.
- **Dashboard** with information cards and Chart.js charts.
- **Product management** with category and product cards.
- **Stock management** for inventory levels.
- **Staff management,** with a list and detail views.
- **Sales reports.**
- **Profile and settings pages.**
- **Image upload** through drag and drop.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Vue 3 |
| Language | TypeScript |
| UI | PrimeVue, PrimeIcons, Tailwind CSS |
| Charts | Chart.js (vue-chartjs) |
| Routing | Vue Router |
| Build | Vite, vue-tsc |

## Getting Started

### Prerequisites

- Node.js and npm
- A running [POS System Backend](https://github.com/RithyBondeth/Pos-System-Backend) (optional for UI work)

### Installation

```bash
git clone https://github.com/RithyBondeth/Pos-System-Frontend.git
cd Pos-System-Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |

## Project Structure

```text
Pos-System-Frontend/
└── src/
    ├── pages/
    │   ├── auth/       # signin, signup
    │   ├── main/       # dashboard, product, manage-stock, manage-staff,
    │   │               # sale-reports, setting, logout
    │   └── sub/        # profile
    ├── layouts/        # Auth and default layouts
    ├── components/     # Sidebar, cards, profile, utilities
    ├── routers/        # Vue Router configuration
    └── utils/
```

## Related Repositories

- [Pos-System-Backend](https://github.com/RithyBondeth/Pos-System-Backend): the NestJS API

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
