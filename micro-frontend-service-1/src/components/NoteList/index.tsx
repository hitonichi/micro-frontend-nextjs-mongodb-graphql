import { useQuery } from "@apollo/client";

import { ALL_NOTES } from "../../queries";

const notes = [
  {
    title: "Buy pet food",
    content: "Buy something for Mr. Pickles",
  },
  {
    title: "Buy food",
    content: "Buy Broth Bone n Pasta",
  },
  {
    title: "Buy new PC",
    content: "Buy a core-i9 PC with new GTX",
  },
  {
    title: "Pay tuition fee",
    content: "Your debt has just been increased..",
  },
];

const NoteList = () => {
  const result = useQuery(ALL_NOTES);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Note list:</h2>
      {result.data.allNotes.map((n: any) => (
        <div key={n.title}>
          {n.title}
          <br />
          <em>{n.content}</em>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
