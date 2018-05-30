import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });


export const onceGetUsers = () =>
  db.ref('users').once('value');


export const doCreateJar = (uid, title) =>
  db.ref(`jars`).push({
    openBy: uid,
    title
  });

export const onceGetJars = () =>
  db.ref('jars').once('value');