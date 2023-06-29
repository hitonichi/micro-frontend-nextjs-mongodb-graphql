import TextInput from "../../../common/TextInput";

type Props = {
  onSave: any;
  onChange: Function;
};

const NoteForm = ({ onSave, onChange }: Props) => {
  return (
    <form onSubmit={onSave}>
      <h2>Add Note</h2>
      {/* TODO: Add validate (error...) */}
      <TextInput
        name="content"
        label="content"
        value=""
        placeholder="Enter the content of the note"
        onChange={onChange}
      ></TextInput>
    </form>
  );
};

export default NoteForm;
