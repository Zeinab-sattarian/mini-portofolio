import ExperienceItem from "./ExperienceItem";

const items = [
  {
    title: "Senior Python Developer",
    company: "Fresh Work",
    startDate: "Oct, 2022",
    finishDate: "Dec, 2023",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Magna phasellus className tellus finibus lacinia. Montes elit metus velit torquent duis facilisis. Mus vel dictum tempor hendrerit malesuada maecenas congue hac. Turpis quis facilisis habitant id aenean consectetur?",
  },
  {
    title: "Database Developer",
    company: "Fresh Work",
    startDate: "Oct, 2022",
    finishDate: "Dec, 2023",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Magna phasellus className tellus finibus lacinia. Montes elit metus velit torquent duis facilisis. Mus vel dictum tempor hendrerit malesuada maecenas congue hac. Turpis quis facilisis habitant id aenean consectetur?",
  },
  {
    title: "Full Stack Web Developer",
    company: "Fresh Work",
    startDate: "Oct, 2022",
    finishDate: "Dec, 2023",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Magna phasellus className tellus finibus lacinia. Montes elit metus velit torquent duis facilisis. Mus vel dictum tempor hendrerit malesuada maecenas congue hac. Turpis quis facilisis habitant id aenean consectetur?",
  },
];

const Experiences = () => {
  return (
    <section className="experiences">
      {items.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Experiences;
