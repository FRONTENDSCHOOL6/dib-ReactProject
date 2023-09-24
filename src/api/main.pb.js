// routerAdd('GET', '/api/v1/search', (c) => {
//   try {
//     const response = $http.send({
//       url: 'https://openapi.naver.com/v1/search/book.json&query=deepdive',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
//         'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
//       },
//     });

//     if (response.statusCode === 200) {
//       return c.json(200, { response });
//     }
//   } catch (error) {
//     return c.json(400, { message: '요청에 실패했습니다.' });
//   }
// });

routerAdd('GET', '/api/v1/weather', (c) => {
  try {
    const response = $http.send({
      url: 'https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m',
    });

    if (response.statusCode === 200) {
      return c.json(200, { response });
    }
  } catch (error) {
    return c.json(400, { message: '요청에 실패했습니다.' });
  }
});
