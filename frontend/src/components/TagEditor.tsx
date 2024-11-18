import { useState } from "react";
import Button from "./Button";
import { useMutation } from "@apollo/client";
import { CREATE_TAG } from "../api/createTag";
import { GET_TAGS } from "../api/tags";

function TagEditor({
  onTagAdded,
}: {
  onTagAdded: (tag: { id: number; name: string }) => void;
}) {
  const [newTag, setNewTag] = useState("");

  const [createTag] = useMutation(CREATE_TAG, {
    refetchQueries: [GET_TAGS],
  });

  const addCategory = async () => {
    if (newTag.trim() !== "") {
      try {
        const { data } = await createTag({
          variables: {
            data: {
              name: newTag,
            },
          },
        });
        onTagAdded(data.createTag);
        setNewTag("");
      } catch (error) {
        console.error("Erreur lors de l'ajout du tag :", error);
      }
    }
  };

  return (
    <section>
      <label>
        {" "}
        Nom du tag :
        <input
          type="text"
          className="text-field adEditor"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
      </label>
      <Button onClick={addCategory} name="Ajouter" />
    </section>
  );
}

export default TagEditor;
