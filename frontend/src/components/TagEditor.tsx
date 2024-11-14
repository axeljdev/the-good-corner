import { useState } from "react";
import axios from "axios";
import Button from "./Button";

function TagEditor({ onTagAdded }: { onTagAdded: (tag: { id: number, name: string }) => void }) {
    const [newTag, setNewTag] = useState("");

    const addCategory = async () => {
        if (newTag.trim() !== "") {
            try {
                const response = await axios.post("http://localhost:3000/tags", {
                    name: newTag
                });
                onTagAdded(response.data);
                setNewTag("");
            } catch (error) {
                console.error("Erreur lors de l'ajout du tag :", error);
            }
        }
    };

    return (
        <section>
            <label> Nom du tag :
                <input type="text" className="text-field adEditor" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
            </label>
            <Button onClick={addCategory} name="Ajouter"/>
        </section>
    );
}

export default TagEditor;