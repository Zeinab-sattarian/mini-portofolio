import "../../style.css";
const ContactForm = () => {
  return (
    <form action="#" className="contact">
      <div>
        <input
          type="text"
          className="input"
          name="firstname"
          placeholder="Your Name"
        />
      </div>
      <div>
        <input
          type="text"
          className="input"
          name="lastname"
          placeholder="Your Lastname"
        />
      </div>
      <div>
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Your Email"
        />
      </div>
      <div>
        <textarea
          className="input"
          name="subject"
          placeholder="Write To Me"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="submit">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
