import { useStore } from "@nanostores/react";

import { $user } from "../store/userStore";

export function UserPanel() {
  const user = useStore($user);

  return (
    <div>
      {user.status === "logged_in" && <div>logged In: {user.email}</div>}
      <a href="/dashboard/login" data-astro-prefetch>
        login
      </a>
    </div>
  );
}
