# MediPriceWatch

## Overview
MediPriceWatch is a comprehensive web platform dedicated to pharmaceutical price transparency. It empowers patients, healthcare providers, and policymakers by providing access to fair, market-driven pricing information for medications. It is designed to act as a complete medication affordability tool, highlighting price variations between brand-name and generic drugs, tracking pharmacy compliance, and optimizing prescription savings.

---

## Tech Stack
- **Frontend Framework:** React.js (v18+) powered by Vite.
- **Styling:** Tailwind CSS for a modern, responsive, and fully customizable design system.
- **Routing:** React Router DOM.
- **Backend Environment:** Node.js with Express.js.
- **Database:** MongoDB via Mongoose ODM.
- **Map Integration:** Interactive mapping components for pharmacy location.
- **Build Tooling:** npm, Vite.

---

## Core Features & Modules

### 1. SmartRx Optimizer™ (AI Savings Advisor)
An intelligent module that analyzes a user's current prescriptions and recommends cost-effective generic alternatives. It cross-references government schemes (like Jan Aushadhi) and local pharmacy availability to generate a personalized **Cost-Savings Report**.

### 2. Medication Price Comparison
Real-time comparison engine that highlights price discrepancies between top brand-name medications and their generic equivalents across different regions and pharmacies.

### 3. Interactive Store Locator
An integrated map allowing users to find the nearest certified generic pharmacies (e.g., Jan Aushadhi Kendras) and verify their stock availability in real-time.

### 4. Regulatory Compliance & Violation Reporting
- **Report Violation:** A dedicated portal for consumers to anonymously or securely report instances of price gouging, overcharging, or medication unavailability.
- **Regulatory Dashboard:** Administrative tools to monitor reported violations, track pharmacy compliance scores, and escalate severe cases to relevant authorities.

### 5. Price Alerts Subscription
Users can subscribe to specific medications and receive instant notifications (via email or SMS) when prices drop or generic alternatives become available locally.

### 6. Educational Guides & Insights
- **Generic Guide:** Educational content aimed at destigmatizing generic medications, explaining bioequivalence, and empowering patients with knowledge.
- **News & Insights:** A curated feed of the latest updates in healthcare policies, pharmaceutical pricing, and market trends.

---

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas cluster)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd "FIGMA project"
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables
 
Before starting the servers, you will need to set up your environment variables.
Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Add other keys (e.g., Map API keys, Email service keys) as needed
```

---

## Running the Application

For a full local development experience, you need to run both the backend API server and the frontend Vite development server.

**Start the Backend Server:**
Open a terminal, navigate to the backend directory, and run:
```bash
cd backend
npm run dev
# The server typically runs on http://localhost:5000
```

**Start the Frontend Server:**
Open a separate terminal window, navigate to the frontend directory, and run:
```bash
cd frontend
npm run dev
# The Vite server typically runs on http://localhost:5173
```

---

## Future Roadmap
- Integration with National Health Authority APIs.
- Mobile application wrappers (React Native/Expo).
- Machine learning models to predict medication price fluctuations.
- Multi-lingual support for wider accessibility across rural regions.

## Contributing
We welcome contributions! Please review the project structure, raise an issue to discuss your proposed changes, and submit a pull request against the `main` branch. Ensure your code adheres to our standard ESLint and Prettier configurations.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
