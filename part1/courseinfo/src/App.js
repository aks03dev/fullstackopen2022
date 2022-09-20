import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "State of a component",
        exercises: 14,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "Fundamentals Of React",
        exercises: 10,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
