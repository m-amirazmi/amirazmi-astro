interface IProps {
  date: any;
}

const Date: React.FC<IProps> = ({ date }) => {
  console.log(date);

  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
};

export default Date;
