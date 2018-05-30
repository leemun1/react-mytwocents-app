import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUsernameById = (uid) =>
  db.ref(`users/${uid}/username`).once('value');

export const doCreateJar = (uid, title, content, createdAt, likes) =>
  db.ref(`jars`).push({
    uid,
    title,
    content,
    createdAt,
    likes,
  });

export const onceGetJars = () =>
  db.ref('jars').once('value');