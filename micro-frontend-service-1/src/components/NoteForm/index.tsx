import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTE, ALL_NOTES } from "../../queries";

const NoteForm = () => {
  const initialFormData = {
    title: "",
    content: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [addNote, result] = useMutation(ADD_NOTE, {
    refetchQueries: [{ query: ALL_NOTES }],
  });

  const handleChange = ({ target }: any) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("Form submitted");

    addNote({ variables: { ...formData } });

    setFormData(initialFormData);
  };

  return (
    <div>
      <h2>Add New Note:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          Content:
          <input
            type="text"
            value={formData.content}
            name="content"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
