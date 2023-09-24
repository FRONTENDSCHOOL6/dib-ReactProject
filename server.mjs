import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인에서 요청 허용 (*)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// 클라이언트에서의 요청을 처리할 엔드포인트
app.get('/api/v1/search/book.json', async (req, res) => {
  const { query } = req.query;

  try {
    // Naver API에 대한 요청
    const naverResponse = await fetch(
      `https://openapi.naver.com/v1/search/book.json?query=${query}&display=4`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Naver-Client-Id': 'YOUR_NAVER_CLIENT_ID', // 여기에 Naver API 클라이언트 ID를 넣어야 합니다.
          'X-Naver-Client-Secret': 'YOUR_NAVER_CLIENT_SECRET', // 여기에 Naver API 클라이언트 시크릿을 넣어야 합니다.
        },
      }
    );

    if (naverResponse.ok) {
      const data = await naverResponse.json();
      res.json(data);
    } else {
      res.status(naverResponse.status).json({
        message: '네이버 API 요청에 실패했습니다.',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '서버 오류가 발생했습니다.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
