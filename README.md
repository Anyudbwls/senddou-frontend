다음과 같이 입력하여 json-server를 실행할 수 있습니다.
```shell
$ json-server --watch db.json --port 3001
```

# 컴포넌트 추가 하는법
1. /src/templates/{컴포넌트타입}/{컴포넌트이름}.js로 컴포넌트 작성
2. /src/templates/PickTemplate.js에 (1)에서 작성한 컴포넌트를 import하고 template 변수에 추가
3. API(/fake-server/db.json)의 resume(디자인)에 {id, type, name}으로 디자인 추가
4. API(/fake-server/db.json)의 users_1_resume(사용자이력서글)에 해당 type 추가
5. API(/fake-server/db.json)의 display(사용자이력서)에 해당 type과 name으로 컴포넌트 추가 
