import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./__helper__/formSchema";

export const Login = () => {
  const {
    formState: { errors, isValid, isSubmitting },
    register,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", username: "", password: "" },
  });

  const isSubmitEnabled = isValid && !isSubmitting;

  return (
    <form onSubmit={() => console.log("logging in")}>
      <label>Username or Email</label>
      <input {...register("username")} />
      {errors.username?.message && <p>{errors.username.message}</p>}

      <label>Password</label>
      <input type="password" {...register("password")} />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <input disabled={!isSubmitEnabled} type="submit" />
    </form>
  );
};
