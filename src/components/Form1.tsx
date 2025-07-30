import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border-2 m-5 w-fit p-5 bg-white text-black rounded-[10px]"
    >
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitted}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </form>
  );
};

export default Form1;
