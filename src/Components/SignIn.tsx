import Button from "./shared/Button";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div
      className="w-[343px] rounded-[4px] bg-100 p-6  dark:bg-900"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="font-serif text-h4 text-700 dark:text-100">
        <div className="mx-auto w-fit">Login</div>

        <Button
          type="submit"
          className="mt-4 w-[295px]"
          onClick={() => signIn()}
        >
          Sign in with discord
        </Button>
        <Button
          type="submit"
          className="mt-4 w-[295px] transition "
          onClick={() => signIn()}
        >
          Sign in with Github
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
