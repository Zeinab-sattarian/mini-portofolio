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
  return (
    <div>
      if (type !== "textarea")
      {
        <input
          type={type}
          className={className}
          name={name}
          placeholder={placeholder}
        />
      }
      else
      {
        <textarea
          className={className}
          name={name}
          placeholder={placeholder}
        ></textarea>
      }
    </div>
  );
};

export default ContactInputItem;
