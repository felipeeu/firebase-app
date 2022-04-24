import { getDatabase, ref, set } from "firebase/database";

const writeUserData = (userId, name) => {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
  });
};

export { writeUserData };
