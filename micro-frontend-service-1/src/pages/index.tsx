import Header from "../components/ExposedComponent";
import Counter from "../components/Counter";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Counter></Counter>
      <NoteForm></NoteForm>
      <NoteList></NoteList>
    </>
  );
}
