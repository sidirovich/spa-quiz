import { createStore, createEffect } from "effector";
import { createStoreConsumer } from "effector-react";
import { createEvent } from "effector";

import { LoginUser } from '../../api';
import { saveStorageJWT, getStorageJWT } from '../../utils/session';

export const JsonQuiz = createStore(null);
export const WithJson = createStoreConsumer({ JsonQuiz });
export const EventGetJson = createEvent("get json");
export const GetJson = createEffect({
  async handler() {
    let linkJSON = document.getElementById('root').getAttribute('quiz-src');
    const res = fetch('https://quiz.joint-studio.ru/api.v1/?link=' + linkJSON).then(response => response.json()).then(data => {return data});
    console.log(res);
    return res;
  },
});

JsonQuiz.on(GetJson.doneData, (_, data) => data);

GetJson.done.watch(({params, result}) => {
  EventGetJson(result);
});

export const ExitApp = createEvent("UserExitApp");
export const LocalUserCredentials = createEvent("LocalUserCredentials");
export const GetUserCredentials = createEffect({
  async handler(userObject) {
    return await LoginUser(userObject).then(t => {
      console.log('t: ', t);
      if (t && t.token) {
        saveStorageJWT(t.token);
        return t.token;
      } return null;
    })
  }
});

GetUserCredentials.done.watch(({params, result}) => result);

export const UserCredentials = createStore(null)
  .on(LocalUserCredentials, (_state, data) => {
    console.log('LocalUserCredentials: ', data);
    return data;
  })
  .on(GetUserCredentials.done, (_state, data) => data)
  .reset(ExitApp);

export const consumerUserCredentials = createStoreConsumer({ UserCredentials });