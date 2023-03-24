# react-nodebird-next13







## 요구사항

1. ✅ Next13 beta(app 디렉토리)으로 작성해서 결과물을 react-nodebird 강좌와 같게 만들것
2. ✅ 타입스크립트 적용하기
3. ✅ 강좌 내용처럼 서버사이드렌더링 되어야 함
4. ✅ saga 대신 redux-toolkit 적용하기
5. ✅ intersection-observer를 사용할 것  *(메인 페이지, 검색페이지, user페이지에 설정되어있음)*
6. ✅ 보너스항목: antd@5나 다른 UI 라이브러리 최신 버전으로 더 보기 좋게 만들기 *(MUI로 작업)*
7. ✅ 보너스항목: 데이터 로딩 시 react-query 적용하기
8. 보너스항목: 기타 추가사항들
   1. 게시글 댓글 작성시 완료 snackbar 노출
   2. 어설프지만 모바일 대응 추가(반응형)





## 초기 세팅

back 폴더의 env설정 local에 맞는 값을 설정해야한다.

```bash
COOKIE_SECRET=""
DB_PASSWORD=""
```

db생성

```bash
npx sequelize db:create
```

백엔드 실행

```bash
npm install
npm run dev
```

프론트엔드 실행

```bash
yarn install
yarn dev
```





## 노션 페이지

https://yoonhaemin.notion.site/1f98e509e37a4494af87d9c381aaac6b





