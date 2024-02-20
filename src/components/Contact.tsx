import { useState } from "react";
import { UserDetail } from "../types/Types";

function Contact() {
  const [formData, setFormData] = useState<UserDetail>({
    userName: "",
    email: "",
    Message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-7 p-3 mx-auto w-11/12">
      <div>
        <p className="font-bold text-3xl md:text-4xl mb-3">About</p>
        <div className="flex justify-between items-center w-[120px] mb-7">
          <p>Home</p>
          <span>{"\u003E"}</span>
          <p className="font-bold">About</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <textarea
              className="text border-b-2 border-gray-300"
              value={formData.userName}
            />
          </label>
          <label>
            Email:
            <input
              className="text border-b-2 border-gray-300"
              value={formData.email}
              placeholder="Enter your email here"
            />
          </label>
          <label>
            Write your post:
            <textarea
              className="text border-b-2 border-gray-300"
              value={formData.Message}
              placeholder="Enter your Message here"
              rows={4}
              cols={40}
            />
          </label>
          <button
            className="bg-gray-800/90 text-slate-100 max-w-2/6 h-[50px]  text-sm md:text-base text-center p-2 md:p-3 rounded-lg mb-6 hover:bg-gray-800"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
