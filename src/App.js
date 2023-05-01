import List from "./List";
import Search from "./Search";
import useSemiPersistentState from "./util/PersistentState";

const section = () => "F1";

function App() {
  const techs = [
    {
      title: "ReactJS",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "REACT");
  const [dup, setDup] = useSemiPersistentState("dup", "DUP");

  const searchOnChangeHandler = (event) => {
    console.log(event.target.value);

    setSearchTerm(event.target.value);
    setDup(event.target.value + "_DUPLICATE");
  };

  let filteredTechs = techs.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <div>Hello {section()}!</div>
      <hr />
      <h1>Technologies</h1>

      <Search
        searchTerm={searchTerm}
        onSearchTermChange={searchOnChangeHandler}
      />
      <List list={filteredTechs} />
    </>
  );
}

export default App;
