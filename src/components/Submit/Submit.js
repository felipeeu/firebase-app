import { writeUserData } from "../../database/database";
const Submit = ({ inputValue }) => {
  const userId = "2ECc5CIzDbgBqYr9O0I71Oeu19R3";
  return (
    <>
      <button
        disabled={!inputValue}
        onClick={() => writeUserData(userId, inputValue)}
      >
        Submit
      </button>
    </>
  );
};
export { Submit };
