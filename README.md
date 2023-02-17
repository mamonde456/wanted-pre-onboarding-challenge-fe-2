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

>  [Alexis1226 님의 구현 후 피드백](https://github.com/Alexis1226/wanted-pre-onboarding-challenge-fe-2/tree/assign_3)

- ITags > ITag로 변경.
  - 하나의 태그를 설명해주는 인터페이스 이므로 복수형 보단 단수형이 알맞을 것 같습니다.

- readToDo
  - 기존의 인자로 받던 id를 todo로 변경했습니다. 따라서 id.id로 사용하지 않고 todo.id로 사용할 수 있게 만들었습니다.

- updateToDo
  - id를 받아와 내부에서 비동기 통신으로 데이터를 불러오고 해당 값을 수정하는 것을 생각하며 구현하였으나 현재 상황과는 맞지 않는 것 같습니다. 또한 수정할 속성이 필요할 것 같아 모든 속성을 불러오고 id를 제외한 속성들은 option 값으로 변경하였습니다. 

- deleteToDo
  - isAll 이라는 boolean 타입의 인자를 받아 전체 할 일을 삭제할 수 있도록 하였습니다.
  - todo를 option으로 받아 todo.id가 존재한다면 특정 할 일을 삭제할 수 있습니다.
  - 태그 내용을 포함하지 않고 특정 태그의 id만 타입에 남겨놓아 쓸 일 없는 타입을 삭제하였습니다.

피드백 감사합니다!

#### Reference

- [jsdoc.app](https://jsdoc.app)
