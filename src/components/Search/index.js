import { useState } from "react";
import { Button } from "react-bootstrap";

function Search({ setSearchName }) {
  // setSearchName("TSLA")
  const [formState, setFormState] = useState({ search: "" });
  const portfolioList = [ "AAPL", "CMG", "BYND","TSLA", "IBM"
    ]
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log("formState:", formState);
  };
  const handleFormSubmit = async (event) => {
    console.log("submittttt", formState["search"]);
    event.preventDefault();

    try {
      setSearchName(formState["search"]);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      search: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <select
        name="search"
        className="close-button"
        id="search"
        value={formState.search}
        onChange={handleChange}
        // onChange={handleDropCropChange}
      >
        <option defaultValue={"Select Plant"}>Select from Portfolio</option>
        {portfolioList?.map((data) => (
          <option value={data} key={data._id}>
            {data}
          </option>
        ))}
      </select>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Search;
