# CardioNet - การประเมินความเสี่ยงโรคหัวใจ

แอปพลิเคชันประเมินความเสี่ยงโรคหัวใจด้วยปัญญาประดิษฐ์ สร้างด้วย Next.js, TypeScript และ Tailwind CSS

## คุณสมบัติ

- **สองโหมดการประเมิน:**
  - **Detailed Mode**: 13 ฟีเจอร์ (ข้อมูลตัวเลขละเอียด)
  - **Coarse Mode**: 11 ฟีเจอร์ (ตัวเลือกง่าย เหมาะสำหรับผู้สูงอายุ)

- **UI ที่เหมาะสำหรับผู้สูงอายุ:**
  - ฟอนต์ขนาดใหญ่ (≥16px)
  - ปุ่มขนาดใหญ่
  - คำอธิบายใต้ช่องกรอกข้อมูล
  - ภาษาไทยชัดเจน

- **ฟีเจอร์:**
  - Onboarding ขั้นตอนแรก
  - สวิตช์เปลี่ยนโหมดได้ตลอด
  - ปุ่มกรอกตัวอย่างและล้างค่า
  - แสดงผลลัพธ์พร้อม risk score
  - Validation แบบ real-time

## การติดตั้ง

1. Clone โปรเจกต์:
```bash
git clone <repository-url>
cd cardio-frontend
```

2. ติดตั้ง dependencies:
```bash
npm install
```

3. สร้างไฟล์ `.env.local`:
```bash
cp env.example .env.local
```

4. แก้ไข `BACKEND_URL` ใน `.env.local` ให้ชี้ไปยัง backend ของคุณ:
```env
BACKEND_URL=https://your-railway-app.up.railway.app
```

5. รันโปรเจกต์:
```bash
npm run dev
```

## โครงสร้างโปรเจกต์

```
app/
├── api/
│   └── predict/
│       └── route.ts          # API proxy ไปยัง backend
├── components/
│   ├── DetailedForm.tsx      # ฟอร์มโหมดละเอียด (13 ฟีเจอร์)
│   ├── CoarseForm.tsx        # ฟอร์มโหมดหยาบ (11 ฟีเจอร์)
│   └── Summary.tsx           # แสดงสรุปข้อมูล
├── types.ts                   # TypeScript types
├── page.tsx                   # หน้าหลัก
└── layout.tsx                 # Layout หลัก
```

## โหมดการประเมิน

### Detailed Mode (13 ฟีเจอร์)
- `age`: อายุ (ปี)
- `sex`: เพศ (0=หญิง, 1=ชาย)
- `cp`: ประเภทเจ็บหน้าอก (0-3)
- `trestbps`: ความดันพัก (mmHg)
- `chol`: โคเลสเตอรอล (mg/dL)
- `fbs`: น้ำตาลขณะอดอาหาร (0/1)
- `restecg`: Resting ECG (0-2)
- `thalach`: ชีพจรสูงสุด (bpm)
- `exang`: เจ็บหน้าอกจากออกแรง (0/1)
- `oldpeak`: ST depression (0-10)
- `slope`: ST slope (0-2)
- `ca`: จำนวนเส้นเลือดตีบ (0-4)
- `thal`: Thalassemia (1-3)

### Coarse Mode (11 ฟีเจอร์)
- `age`: อายุ (ปี) - backend จะจัดกลุ่มให้
- `sex_cat`: เพศ (หญิง/ชาย)
- `cp_cat`: ประเภทเจ็บหน้าอก (4 ตัวเลือก)
- `trestbps_bin`: ช่วงความดัน (4 ช่วง)
- `chol_bin`: ช่วงโคเลสเตอรอล (3 ช่วง)
- `fbs_cat`: น้ำตาล (ปกติ/สูง)
- `restecg_cat`: ECG (3 ค่า)
- `thalach_bin`: ช่วงชีพจร (4 ช่วง)
- `exang_cat`: เจ็บหน้าอกออกแรง (2 ค่า)
- `ca_bin`: เส้นเลือดตีบ (2 ค่า)
- `thal_cat`: Thalassemia (3 ค่า)

## API Endpoints

### POST /api/predict
ส่งข้อมูลไปยัง backend เพื่อประเมินความเสี่ยง

**Request Body:**
```json
{
  "mode": "detailed" | "coarse",
  // ... ข้อมูลตามโหมดที่เลือก
}
```

**Response:**
```json
{
  "prediction": "มีความเสี่ยง" | "ความเสี่ยงต่ำ",
  "risk_score": 0.75
}
```

## การพัฒนา

```bash
# รันในโหมด development
npm run dev

# Build สำหรับ production
npm run build

# รัน production build
npm start

# ตรวจสอบ linting
npm run lint
```

## การ Deploy

โปรเจกต์นี้พร้อมสำหรับการ deploy บน Vercel, Netlify หรือ platform อื่นๆ ที่รองรับ Next.js

## หมายเหตุสำคัญ

- Backend ต้องรองรับ `mode` parameter
- Coarse mode ไม่ส่ง `oldpeak`, `slope`, `thal` แบบตัวเลข
- Backend จะทำ monotonic constraint ที่ `ca` field
- อายุใน coarse mode ยังเป็นตัวเลข (backend จะ bin เอง)

## License

MIT 
