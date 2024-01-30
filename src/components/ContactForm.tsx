import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mySchema } from "../validationFolder/UserValidation";
import { useEffect } from "react";

interface UserInput {
  firstName: "";
  lastName: string;
  email: string;
  phone: number;
  message: string;
}
function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm<UserInput>({
    resolver: yupResolver(mySchema),
  });

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-evenly items-center h-[400px] w-full"
    >
      <div>
        <label>First Name:</label>{" "}
        <input
          {...register("firstName")}
          type="text"
          className="w-[380px] border-b-[1px] border-gray-600 block outline-none mb-2"
        />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>Last Name:</label>
        <input
          {...register("lastName")}
          type="text"
          className="w-[380px] border-b-[1px] border-gray-600 block outline-none mb-2"
        />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <label>E-mail:</label>
        <input
          {...register("email")}
          type="email"
          className="w-[380px] border-b-[1px] border-gray-600 block outline-none mb-2"
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Phone:</label>
        <input
          {...register("phone")}
          type="number"
          className="w-[380px] border-b-[1px] border-gray-600 block outline-none mb-2"
        />
        <p>{errors.phone?.message}</p>
      </div>
      <div>
        <label>Message:</label>
        <input
          {...register("message")}
          type="text"
          className="w-[380px] border-b-[1px] border-gray-600 block outline-none mb-2"
        />
        <p>{errors.message?.message}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default ContactForm;
