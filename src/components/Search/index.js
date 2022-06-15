import { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css"

function Search({ setSearchName }) {
  // setSearchName("TSLA")
  const [formState, setFormState] = useState({ search: "" });
  const portfolioList = ["AAPL", "CMG", "BYND", "TSLA", "IBM"];
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
    <form id ={"form-search"} onSubmit={handleFormSubmit}>
      <select
        name="search"
        className="search"
        id="search"
        value={formState.search}
        onChange={handleChange}
      >
        <option value="" disabled selected>Stock</option>
        {portfolioList?.map((data) => (
          <option  value={data} key={data._id}>
            {data}
          </option>
        ))}
      </select>
      <Button className= "button-select" type="submit">Submit</Button>
    </form>
  );
}

export default Search;
