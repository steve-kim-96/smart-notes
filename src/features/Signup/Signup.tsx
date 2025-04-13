import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { signupFormSchema } from "./__helper__/formSchema";

export const Signup = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupFormSchema),
  });

  return (
    <div className="signup-container">
      <Form>
        <input {...register("username")} />
        {errors.username?.message && <p>{errors.username.message}</p>}
      </Form>
    </div>
  );
};
