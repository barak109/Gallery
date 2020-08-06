import {getUserData} from "../api/randomuser";
import {convertUser} from "./conversions";
import {User} from "../types/user";

export const getUser = (cb: (user: User | null) => void) => {
  getUserData()
    .then((newUser: any) => {
      const user = convertUser(newUser);
      cb(user);
    })
    .catch(err => {
      console.log(err.message);
      cb(null);
    });
};

export const handleUsers = (i: number, retries: number, cb: (user: User) => void) => {
  if (i < 10)
    getUser(user => {
      if (user) {
        cb(user);
        handleUsers(i + 1, 0, cb);
      } else {
        // handle common 503 overloaded response
        if (retries < 5) {
          handleUsers(i, retries + 1, cb);
        }
      }
    });
};
