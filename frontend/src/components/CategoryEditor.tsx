import { useState } from "react";
import { useMutation } from "@apollo/client";
import Button from "./Button";
import { CREATE_CATEGORY } from "../api/createCategory";
import { GET_CATEGORIES } from "../api/categories";
import { CategoriesType } from "../types";

export function CategoryEditor(props: {
  onCategoryCreated: (newId: number) => void;
}) {
  const [name, setName] = useState("");

  const [doCreateCategory] = useMutation<{ createCategory: CategoriesType }>(
    CREATE_CATEGORY,
    {
      refetchQueries: [GET_CATEGORIES],
    }
  );
  async function doSubmit() {
    try {
      const { data } = await doCreateCategory({
        variables: {
          data: {
            name,
          },
        },
      });
      setName("");
      if (data) {
        props.onCategoryCreated(data.createCategory.id);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <section>
      <label>
        {" "}
        Nom de la catégorie :
        <input
          className="text-field adEditor"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Button onClick={doSubmit} name="Ajouter" />
    </section>
  );
}

export default CategoryEditor;
