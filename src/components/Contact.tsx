import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="mt-7 p-3 mx-auto w-11/12">
      <div>
        <p className="font-bold text-3xl md:text-4xl mb-3">Contact</p>
        <div className="flex justify-between items-center w-[120px] mb-7">
          <p>Home</p>
          <span>{"\u003E"}</span>
          <p className="font-bold">Contact</p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-3">Fill up a Form</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
