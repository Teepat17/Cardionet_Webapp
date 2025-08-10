# Cardio Frontend - Heart Disease Risk Assessment

A modern Next.js 14+ application for heart disease risk assessment using machine learning with an interactive question-by-question interface.

## Features

- **Interactive Question Flow**: Step-by-step questionnaire with smooth animations
- **Modern Dark Theme**: Deep blue gradient background with glassmorphism effects
- **Progress Tracking**: Visual progress bar showing completion status
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Validation**: Input validation with helpful error messages
- **Accessible UI**: Clean, modern interface with proper contrast and readability
- **Integration with FastAPI backend**: Seamless API communication

## UI/UX Highlights

### Design Theme
- **Color Scheme**: Deep dark blue gradient (`from-slate-900 via-blue-900 to-slate-900`)
- **Glassmorphism**: Semi-transparent cards with backdrop blur effects
- **Smooth Animations**: Fade-in effects and transition animations
- **Modern Typography**: Clean, readable fonts with proper hierarchy

### Question Interface
- **One Question at a Time**: Focused, distraction-free experience
- **Progress Indicator**: Shows current question and completion percentage
- **Multiple Choice Options**: Easy-to-select buttons for categorical data
- **Number Inputs**: Validated numeric inputs with helpful hints
- **Navigation**: Previous/Next buttons with smooth transitions

### User Experience
- **Loading States**: Animated loading indicators during API calls
- **Error Handling**: Clear error messages with helpful guidance
- **Result Display**: Beautiful result cards with color-coded risk levels
- **Reset Functionality**: Easy way to start over with example values

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

## Question Flow

The application presents 13 medical questions in sequence:

1. **Age** - Numeric input (1-120 years)
2. **Gender** - Male/Female selection
3. **Chest Pain Type** - 4 options from typical angina to asymptomatic
4. **Resting Blood Pressure** - Numeric input (80-220 mm Hg)
5. **Serum Cholesterol** - Numeric input (100-600 mg/dl)
6. **Fasting Blood Sugar** - Yes/No for >120 mg/dl
7. **Resting ECG** - 3 options from normal to left ventricular hypertrophy
8. **Max Heart Rate** - Numeric input (60-220 bpm)
9. **Exercise Induced Angina** - Yes/No selection
10. **ST Depression** - Numeric input with decimal precision (0.0-6.0)
11. **ST Slope** - 3 options: upsloping, flat, downsloping
12. **Major Vessels** - 5 options (0-4 vessels)
13. **Thalassemia** - 3 options: fixed defect, normal, reversible defect

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
- React Hooks (useState, useEffect)
- FastAPI Backend (separate repository)

## Accessibility Features

- High contrast color scheme
- Clear visual hierarchy
- Keyboard navigation support
- Screen reader friendly
- Responsive design for all screen sizes

## Performance Optimizations

- Optimized build process
- Efficient state management
- Smooth animations with CSS transitions
- Minimal bundle size
- Fast loading times 
