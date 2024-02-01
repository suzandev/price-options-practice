import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarksData = [
    {
      id: 1,
      name: "Student 1",
      mathMarks: 85,
      physicsMarks: 75,
      chemistryMarks: 90,
    },
    {
      id: 2,
      name: "Student 2",
      mathMarks: 78,
      physicsMarks: 80,
      chemistryMarks: 85,
    },
    {
      id: 3,
      name: "Student 3",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 92,
    },
    {
      id: 4,
      name: "Student 4",
      mathMarks: 65,
      physicsMarks: 70,
      chemistryMarks: 75,
    },
    {
      id: 5,
      name: "Student 5",
      mathMarks: 88,
      physicsMarks: 82,
      chemistryMarks: 78,
    },
    {
      id: 6,
      name: "Student 6",
      mathMarks: 70,
      physicsMarks: 68,
      chemistryMarks: 72,
    },
    {
      id: 7,
      name: "Student 7",
      mathMarks: 95,
      physicsMarks: 90,
      chemistryMarks: 94,
    },
    {
      id: 8,
      name: "Student 8",
      mathMarks: 82,
      physicsMarks: 85,
      chemistryMarks: 80,
    },
    {
      id: 9,
      name: "Student 9",
      mathMarks: 75,
      physicsMarks: 78,
      chemistryMarks: 85,
    },
    {
      id: 10,
      name: "Student 10",
      mathMarks: 90,
      physicsMarks: 88,
      chemistryMarks: 92,
    },
  ];

  return (
    <div>
      <h3 className="mt-7 text-center">Line Chart</h3>
      <LChart width={500} height={300} data={studentMarksData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" />
        <Line type="monotone" dataKey="physicsMarks" stroke="red" />
        <Line type="monotone" dataKey="chemistryMarks" stroke="green" />
      </LChart>
    </div>
  );
};

export default LineChart;
