import { useState } from "react";
import { Form, Input, Button } from "./filter-styled";

const Filter = () => {
  const [query, setQuery] = useState("");

  return (
    <Form>
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

export default Filter;
