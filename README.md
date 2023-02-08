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

#### Reference

- [jsdoc.app](https://jsdoc.app)
