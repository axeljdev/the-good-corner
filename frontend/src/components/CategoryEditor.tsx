import { useState } from "react";
import axios from "axios";
import Button from "./Button";

function CategoryEditor({ onCategoryAdded }: { onCategoryAdded: (category: { id: number, name: string }) => void }) {
    const [newCategory, setNewCategory] = useState("");

    const addCategory = async () => {
        if (newCategory.trim() !== "") {
            try {
                const response = await axios.post("http://localhost:3000/categories", {
                    name: newCategory
                });
                onCategoryAdded(response.data);
                setNewCategory("");
            } catch (error) {
                console.error("Erreur lors de l'ajout de la catégorie :", error);
            }
        }
    };

    return (
        <section>
            <label> Nom de la catégorie :
                <input type="text" className="text-field adEditor" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            </label>
            <Button onClick={addCategory} name="Ajouter"/>
        </section>
    );
}

export default CategoryEditor;
