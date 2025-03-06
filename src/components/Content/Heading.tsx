interface HeadingProps {
  prop: string;
}

const Heading = ({ prop }: HeadingProps) => {
  return (
    <h2>
      My <span className="colored">{prop}</span>
    </h2>
  );
};

export default Heading;
