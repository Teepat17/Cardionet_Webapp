# Deployment Guide

## Backend Deployment (Railway)

### 1. Prepare Backend Repository
```bash
cd ../fastapi-backend
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub
- Create a new repository on GitHub
- Push your backend code:
```bash
git remote add origin https://github.com/yourusername/fastapi-backend.git
git push -u origin main
```

### 3. Deploy on Railway
1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `fastapi-backend` repository
4. Railway will automatically detect the Python project and deploy

### 4. Configure Environment Variables
In Railway dashboard, add these environment variables:
- `ALLOWED_ORIGINS`: `https://your-vercel-app.vercel.app,http://localhost:3000`
- `MODEL_URL`: (if you don't commit the model file) URL to your model file

### 5. Add Model File
Either:
- Upload `heart_disease_ann_model.pkl` to Railway, OR
- Set `MODEL_URL` to point to your model file

### 6. Get Backend URL
Railway will provide a URL like: `https://your-app-name.up.railway.app`

## Frontend Deployment (Vercel)

### 1. Prepare Frontend Repository
```bash
cd cardio-frontend
git add .
git commit -m "Add heart disease risk assessment form"
```

### 2. Push to GitHub
- Create a new repository on GitHub
- Push your frontend code:
```bash
git remote add origin https://github.com/yourusername/cardio-frontend.git
git push -u origin main
```

### 3. Deploy on Vercel
1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your `cardio-frontend` repository
4. Vercel will automatically detect Next.js and deploy

### 4. Configure Environment Variables
In Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add: `BACKEND_URL` = `https://your-railway-app.up.railway.app`
3. Redeploy the project

## Testing

### Test Backend
```bash
# Health check
curl https://your-railway-app.up.railway.app/health

# Prediction test
curl -X POST https://your-railway-app.up.railway.app/predict \
  -H "Content-Type: application/json" \
  -d '{"age":55,"sex":1,"cp":2,"trestbps":130,"chol":250,"fbs":0,"restecg":0,"thalach":150,"exang":0,"oldpeak":1.0,"slope":1,"ca":0,"thal":2}'
```

### Test Frontend
1. Open your Vercel URL
2. Fill in the form with test data
3. Click "Predict Risk"
4. Verify you get a response

## Troubleshooting

### Backend Issues
- Check Railway logs for errors
- Verify model file is accessible
- Test CORS settings

### Frontend Issues
- Check Vercel logs
- Verify `BACKEND_URL` is set correctly
- Test API route locally with `npm run dev`

### CORS Issues
If you get CORS errors:
1. Update `ALLOWED_ORIGINS` in Railway to include your Vercel domain
2. Redeploy backend
3. Test again

## Final URLs
- Backend: `https://your-railway-app.up.railway.app`
- Frontend: `https://your-vercel-app.vercel.app` 