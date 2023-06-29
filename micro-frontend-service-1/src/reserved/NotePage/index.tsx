import * as React from "react";
import { useState } from "react";
import NoteForm from "./sections/NoteForm";
import NoteList from "./sections/NoteList";

const NotePage = () => {
  const [note, setNote] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSave = () => {};

  return (
    <>
      <NoteForm onChange={handleChange} onSave={handleSave}></NoteForm>
      <NoteList></NoteList>
    </>
  );
};

export default NotePage;
