import { useState } from "react";
import { Btn } from "../buttons/buttons";
import { Form } from "./filterSearch-styled";

const FilterSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <Form>
      <div className="src">
        <img src="../../../public/icons/search.svg" alt="" />
        <input
          type="text"
          name="search"
          placeholder="Я шукаю ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Btn>Знайти</Btn>
    </Form>
  );
};

export default FilterSearch;
