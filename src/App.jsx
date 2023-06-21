import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  const clearAll = () => setPeople((people.data = {}));
  return (
    <>
      <section className="container">
        <h1>{people.length} birthdays today</h1>
        <List people={people} />
        <button className="btn btn-block" onClick={clearAll}>
          clear All
        </button>
      </section>
    </>
  );
};
export default App;
