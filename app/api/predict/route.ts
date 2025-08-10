import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate mode
    if (!body.mode || !['detailed', 'coarse'].includes(body.mode)) {
      return NextResponse.json(
        { error: 'Mode must be "detailed" or "coarse"' },
        { status: 400 }
      );
    }

    // Validate required fields based on mode
    if (body.mode === 'detailed') {
      const requiredFields = [
        'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 
        'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
      ];
      
      for (const field of requiredFields) {
        if (!(field in body)) {
          return NextResponse.json(
            { error: `Missing required field: ${field}` },
            { status: 400 }
          );
        }
      }
    } else if (body.mode === 'coarse') {
      const requiredFields = [
        'age', 'sex_cat', 'cp_cat', 'trestbps_bin', 'chol_bin', 'fbs_cat',
        'restecg_cat', 'thalach_bin', 'exang_cat', 'oldpeak_bin', 'slope_cat', 'ca_bin', 'thal_cat'
      ];
      
      for (const field of requiredFields) {
        if (!(field in body)) {
          return NextResponse.json(
            { error: `Missing required field: ${field}` },
            { status: 400 }
          );
        }
      }
    }

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { error: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    const url = `${backendUrl}/predict`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 