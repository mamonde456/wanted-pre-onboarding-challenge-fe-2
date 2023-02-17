# JSDoc Boilerplate

Todo 앱을 JSDoc 문서화 챌린지

## Usage

### Install

```bash
npm install
or
yarn
```

### Build

```bash
npm run docs
or
yarn docs
```

## 요구 사항

```
Todo {
    아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

## 개선 사항

### 1차

- `Todo` 앱을 `Interface`로 설계하고 모델링

### 2차

- `return` 값 제거.
  (함수에서 return 하는 값이 없다면 제거해준다. return 값이 있다면, return 타입을 명시해주어야 typescript가 void로 추론하지 않는다.)

### 3차

>[Alexis1226 님의 구현 후 피드백](https://github.com/Alexis1226/wanted-pre-onboarding-challenge-fe-2/tree/assign_3)을 통해 수정했습니다.

- interface ITags > interface ITag
  - 하나의 태그를 설명해주는 인터페이스라서 단수형이 더 알맞는 것 같습니다.

- readToDo
  - 함수의 인자를 id 대신 todo로 수정하여 id.id 사용이 아닌 todo.id 사용으로 바꿨습니다.

- updateToDo
  - id를 통해 내부에서 비동기 방식으로 데이터를 불러오는 로직을 생각하고 짠 코드라 인자로 id만을 작성했습니다. 생각을 해보니 다른 속성들을 받아야 해당 속성으로 수정할 수 있을 것 같아 id를 제외한 나머지 타입을 option으로 바꾸고 모두 받아오게 하였습니다.

- deleteToDo
  - 모든 할 일을 제거하기 위해 boolean 타입의 인자를 추가하였습니다.
  - 추가적으로 todo 인자를 받고 todo.id를 통해 특정 할 일을 삭제할 수 있습니다.
  - tags의 id만을 받아 특정 태그만 삭제할 수 있도록 하였습니다.

피드백 감사합니다!

#### Reference

- [jsdoc.app](https://jsdoc.app)
