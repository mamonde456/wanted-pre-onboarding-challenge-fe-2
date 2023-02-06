/** @function createToDo
 * 할 일을 추가할 수 있습니다.
 * 내용 없이는 추가할 수 없습니다.
 * @param {Object} toDo - toDo에는 아이디, 내용, 카테고리, 완료여부가 필요합니다.
 * @param {string} toDo.id - toDo의 id
 * @param {string} toDo.content - toDo의 내용
 * @param {string} toDo.category - toDo의 카테고리
 * @param {string} [toDo.tags] - toDo의 태그
 * @param {boolean} isFinish - 완료 여부(done/doing)
 */
function createToDo(toDo, isFinish) {}

/** @function readToDo
 * 모든 할 일을 조회할 수 있습니다.
 * ID를 기반으로 특정 할 일을 조회할 수 있습니다.
 * @param {Object} toDo
 * @param {string} [toDo.id]
 */
function readToDo(toDo) {}

/** @function updateToDo
 * ID를 제외한 모든 속성을 수정할 수 있습니다.
 * 특정 할 일의 특정 태그를 수정할 수 있습니다.
 * @param {Object} toDo
 * @param {string} toDo.id - 업데이트하기 위해서는 필수 요소입니다.
 * @param {string} [toDo.content]
 * @param {string} [toDo.category]
 * @param {string} [toDo.tags]
 */
function updateToDo(toDo) {}

/** @function deleteToDo
 * ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
 * 모든 할 일을 제거할 수 있습니다.
 * 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 * 특정 할 일의 모든 태그를 제거할 수 있습니다.
 * @param {Object} toDo
 * @param {string} toDo.id - Todo를 제거하기 위해서 필수 요소입니다.
 * @param {string} [toDo.tags.id] - 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 * @param {boolean} [toDo.tags.isAllRemove=false] - 특정 할 일의 모든 태그를 삭제할 수 있습니다.
 * @param {boolean} [isAllRemove=false] - 모든 할 일을 제거합니다. 기본값은 false입니다.
 */
function deleteToDo(toDo, isAllRemove) {}
