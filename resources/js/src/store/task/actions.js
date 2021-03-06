import * as TYPE from "./types";

/**
 * Получить все предметы
 * @return { Object }
 **/
export function fetchRequest() {
  return { type: TYPE.FETCH_REQUEST };
}

/**
 * Задания получены успешно
 * @param { Array } data
 * @return { Object }
 **/
export function fetchSuccess( data ) {
  return { type: TYPE.FETCH_SUCCESS, payload: data };
}

/**
 * Ошибка при получении данных
 * @param { any } error
 * @return { Object }
 **/
export function fetchError( error ) {
  return { type: TYPE.FETCH_ERROR, payload: error };
}

/**
 * Преобразование денных о задачах, в обекты задачи
 * @param { String } slug
 * @param { Array } tasks
 * @return { Object }
 **/
export function prepareTasks( slug, tasks ) {
  return {
    type: TYPE.PREPARE_TASKS,
    payload: { slug, tasks }
  };
}

/**
 * Установить список задач в store
 * @param { Array } tasks
 * @return { Object }
 **/
export function setTasksList( tasks ) {
  return { type: TYPE.SET_TASKS_LIST, payload: tasks };
}

/**
 * Ошибка при получении данных
 * @param { Number } taskID
 * @return { Object }
 **/
export function solveTask( taskID ) {
  return { type: TYPE.SOLVE_TASK, payload: taskID };
}

/**
 * Ошибка при получении данных
 * @return { Object }
 **/
export function solveTaskSuccess() {
  return { type: TYPE.SOLVE_TASK_SUCCESS};
}

/**
 * Ошибка при получении данных
 * @param { String } error
 * @return { Object }
 **/
export function solveTaskError( error ) {
  return { type: TYPE.SOLVE_TASK_ERROR, payload: error };
}

