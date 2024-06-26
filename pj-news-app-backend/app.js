const express = require('express');
const path = require('path');
const app = express();
const port = 4000

// build 폴더를 static 폴더로 사용하도록 수정
// (build 폴더의 경로는 이름 바꾸거나 수정이 가능함)
app.use(express.static(path.join(__dirname, '/build')));

// 그 외 요청은 모두 리액트에서 빌드한 폴더의 index.html 보내기
app.get("/api/users", (req, res) => {
    res.json([{ name: "John", age: 20 }, { name: "Sally", age: 30 }]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});