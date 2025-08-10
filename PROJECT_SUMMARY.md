# Heart Disease Risk Assessment - Project Summary

## Overview
A complete web application for heart disease risk assessment using machine learning, consisting of a FastAPI backend and Next.js frontend.

## Architecture

### Backend (FastAPI)
- **Location**: `../fastapi-backend/`
- **Framework**: FastAPI with Uvicorn
- **Deployment**: Railway
- **Features**:
  - RESTful API with CORS support
  - Machine learning model integration
  - Health check endpoint
  - Prediction endpoint

### Frontend (Next.js)
- **Location**: `./` (current directory)
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Features**:
  - Responsive form with 13 medical parameters
  - Real-time validation
  - API proxy to backend
  - Clean, accessible UI

## Key Files

### Backend Files
- `app.py` - Main FastAPI application
- `requirements.txt` - Python dependencies
- `Procfile` - Railway deployment configuration
- `.gitignore` - Git ignore rules

### Frontend Files
- `app/page.tsx` - Main form component
- `app/api/predict/route.ts` - API proxy route
- `package.json` - Node.js dependencies
- `next.config.ts` - Next.js configuration

## Environment Variables

### Backend (Railway)
- `ALLOWED_ORIGINS` - CORS origins (comma-separated)
- `MODEL_PATH` - Path to model file (optional)
- `MODEL_URL` - URL to download model (optional)

### Frontend (Vercel)
- `BACKEND_URL` - Railway backend URL

## Form Fields
1. **Age** (1-120 years)
2. **Sex** (0: Female, 1: Male)
3. **Chest Pain Type** (0-3)
4. **Resting Blood Pressure** (80-220 mm Hg)
5. **Serum Cholesterol** (100-600 mg/dl)
6. **Fasting Blood Sugar** (0: ≤120 mg/dl, 1: >120 mg/dl)
7. **Resting ECG** (0-2)
8. **Max Heart Rate** (60-220)
9. **Exercise Induced Angina** (0: No, 1: Yes)
10. **ST Depression** (0.0-6.0)
11. **ST Slope** (0-2)
12. **Major Vessels** (0-4)
13. **Thalassemia** (1-3)

## API Endpoints

### Backend
- `GET /health` - Health check
- `POST /predict` - Heart disease prediction

### Frontend
- `POST /api/predict` - Proxy to backend

## Development

### Backend
```bash
cd ../fastapi-backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

### Frontend
```bash
npm install
npm run dev
```

## Deployment Status
- ✅ Frontend build successful
- ✅ TypeScript compilation passed
- ✅ ESLint checks passed
- ⏳ Backend ready for deployment
- ⏳ Environment configuration needed

## Next Steps
1. Add model file to backend
2. Deploy backend to Railway
3. Deploy frontend to Vercel
4. Configure environment variables
5. Test end-to-end functionality

## Security Notes
- Backend URL is not exposed to client-side
- CORS is configured for production domains
- Input validation on both frontend and backend
- Error handling implemented 