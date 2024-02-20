import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="my-7 p-3 mx-auto w-11/12">
      <div>
        <p className="font-bold text-3xl md:text-4xl mb-3">About</p>
        <div className="flex justify-between items-center w-[130px] mb-7">
          <p>Home</p>
          <span>{"\u003E"}</span>
          <p className="font-bold">Contact</p>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center w-full">
        <h1 className="text-2xl font-bold mb-3">Fill up a Form</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
