const express = require('express');
const app = express();
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인에서 요청 허용 (*)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/v1/search/book.json', async (req, res) => {
  try {
    const naverResponse = await fetch(
      'https://openapi.naver.com/v1/search/book.json' + req.url
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
    res.status(500).json({
      message: '서버 오류가 발생했습니다.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
