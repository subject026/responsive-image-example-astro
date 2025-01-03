import { atom } from "nanostores";

type UserStateLoggedIn = {
  status: "logged_in";
  email: string;
};

type UserStateLoggedOut = {
  status: "logged_out";
};

// type UserState = UserStateLoggedOut | UserStateLoggedIn;

type UserState = {
  state: UserStateLoggedIn | UserStateLoggedOut;
  setLoggedIn: (email: string) => void;
  setLoggedOut: () => void;
};

export const $user = atom<UserStateLoggedIn | UserStateLoggedOut>({
  status: "logged_out",
});

export function userLogin(email: string) {
  $user.set({ status: "logged_in", email });
}

export function userLogout() {
  $user.set({ status: "logged_out" });
}
