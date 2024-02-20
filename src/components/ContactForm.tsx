import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mySchema } from "../validationFolder/UserValidation";
import { useState } from "react";

interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
}

function ContactForm() {
  const [user, setUser] = useState<UserInput>();
  const [userInfo, setUserInfo] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<UserInput>({
    resolver: yupResolver(mySchema),
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    setUser(data);
    reset();
    setUserInfo(true);
  };

  return (
    <div className="border border-gray-300 flex flex-col justify-evenly items-center md:flex-row w-full md:w-6/12 ">
      <div className="p-3 w-full  md:w-6/12 flex flex-col gap-4 ">
        <h1 className="text-center text-lg font-bold mb-6">
          Come to our store or ask a question right now
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col justify-evenly items-center w-full "
        >
          <div className="w-[300px] ">
            <label>First Name:</label>
            <input
              {...register("firstName")}
              type="text"
              className="w-full border-b-[1px] border-gray-600 block outline-none mb-2 "
            />
            <p className="text-red-700 mb-2">{errors.firstName?.message}</p>
          </div>
          <div className="w-[300px]">
            <label>Last Name:</label>
            <input
              {...register("lastName")}
              type="text"
              className="w-full border-b-[1px] border-gray-600 block outline-none mb-2"
            />
            <p className="text-red-700 mb-2">{errors.lastName?.message}</p>
          </div>
          <div className="w-[300px]">
            <label>E-mail:</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border-b-[1px] border-gray-600 block outline-none mb-2"
            />
            <p className="text-red-700 mb-2">{errors.email?.message}</p>
          </div>
          <div className="w-[300px]">
            <label>Phone:</label>
            <input
              {...register("phone")}
              type="number"
              className="w-full border-b-[1px] border-gray-600 block outline-none mb-2"
            />
            <p className="text-red-700 mb-2">{errors.phone?.message}</p>
          </div>
          <div className="w-[300px]">
            <label>Message:</label>
            <textarea
              {...register("message")}
              rows={4}
              cols={40}
              className="w-full border-b-[1px] border-gray-600 block outline-none mb-4"
            />
            <p className="text-red-700 mb-2">{errors.message?.message}</p>
          </div>
          <input
            type="submit"
            className="px-2 py-1 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer border border-gray-600 mb-4 rounded-2xl"
          />
          {userInfo && (
            <p>
              Thank you ${user?.firstName}! we will contact you as soon as
              possible
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
