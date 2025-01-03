import { useStore } from "@nanostores/react";
import { $user, userLogin } from "../store/userStore";

export function Login() {
  const user = useStore($user);

  //   if (state) return <
  return (
    <section>
      <h1>Login</h1>
      <div>{JSON.stringify(user, null)}</div>
      <button
        onClick={() => {
          userLogin("steve@email.com");
        }}
      >
        submit
      </button>
    </section>
  );
}
