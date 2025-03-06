import ContactInputItem from "./ContactInputItem";

const items = [
  {
    type: "text",
    className: "input",
    name: "firstname",
    placeholder: "Your Name",
  },
  {
    type: "text",
    className: "input",
    name: "lastname",
    placeholder: "Your Lastname",
  },
  {
    type: "email",
    className: "input",
    name: "email",
    placeholder: "Your Email",
  },
  {
    type: "textarea",
    className: "input",
    name: "subject",
    placeholder: "Write To Me",
  },
];

const ContactForm = () => {
  return (
    <form action="#" className="contact">
      {items.map((item, index) => (
        <ContactInputItem key={index} {...item} />
      ))}
      <div>
        <button type="submit" className="submit">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
