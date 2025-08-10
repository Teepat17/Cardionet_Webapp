# Cardio Frontend - Heart Disease Risk Assessment

A Next.js 14+ application for heart disease risk assessment using machine learning.

## Features

- Responsive form with 13 medical parameters
- Real-time validation
- Integration with FastAPI backend
- Clean, accessible UI with Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
BACKEND_URL=https://<your-railway-subdomain>.up.railway.app
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Form Fields

- **Age**: Patient age (1-120 years)
- **Sex**: Gender (0: Female, 1: Male)
- **Chest Pain Type**: Type of chest pain (0-3)
- **Resting Blood Pressure**: Blood pressure in mm Hg (80-220)
- **Serum Cholesterol**: Cholesterol level in mg/dl (100-600)
- **Fasting Blood Sugar**: Blood sugar level (0: ≤120 mg/dl, 1: >120 mg/dl)
- **Resting ECG**: ECG results (0-2)
- **Max Heart Rate**: Maximum heart rate achieved (60-220)
- **Exercise Induced Angina**: Angina during exercise (0: No, 1: Yes)
- **ST Depression**: ST depression induced by exercise (0.0-6.0)
- **ST Slope**: Slope of peak exercise ST segment (0-2)
- **Major Vessels**: Number of major vessels colored by fluoroscopy (0-4)
- **Thalassemia**: Thalassemia type (1: Fixed defect, 2: Normal, 3: Reversible defect)

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variable `BACKEND_URL` in Vercel dashboard
4. Deploy automatically

## API Routes

- `POST /api/predict`: Proxies requests to the backend API

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- FastAPI Backend (separate repository)
"# Cardionet_Webapp" 
