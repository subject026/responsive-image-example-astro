import { useStore } from "@nanostores/react";

import { $user } from "../store/userStore";

export function Header() {
  const user = useStore($user);

  return (
    <header>
      <div className="max-w-4xl m-auto flex justify-between">
        <span>logo</span>
        <nav>
          <a href="/">home</a>
          {user.status === "logged_in" && <div>logged In: {user.email}</div>}
          <a href="/dashboard/login">login</a>
        </nav>
      </div>
    </header>
  );
}
