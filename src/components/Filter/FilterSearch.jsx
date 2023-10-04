import { useState } from "react";
import { Form, Input, Button, Img } from "./filterSearch-styled";

const FilterSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <Form>
      <Img></Img>
      <Input
        type="text"
        name="search"
        placeholder="Я шукаю"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button>Знайти</Button>
    </Form>
  );
};

export default FilterSearch;
