interface ContactInputItemProps {
  type: string;
  className: string;
  name: string;
  placeholder: string;
}

const ContactInputItem = ({
  type,
  className,
  name,
  placeholder,
}: ContactInputItemProps) => {
  if (type !== "textarea") {
    return (
      <div>
        {
          <input
            type={type}
            className={className}
            name={name}
            placeholder={placeholder}
          />
        }
      </div>
    );
  } else {
    return (
      <div>
        <textarea
          className={className}
          name={name}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
};

export default ContactInputItem;
