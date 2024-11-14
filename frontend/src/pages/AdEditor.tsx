import axios from "axios";
import { useEffect, useState } from "react";
import { AdsType, CategoriesType, TagsType } from "../types";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import CategoryEditor from "../components/CategoryEditor";
import TagEditor from "../components/TagEditor";

function AdEditor() {
  const params = useParams<{ id: string }>();
  const id = params.id && Number(params.id);

  const [ad, setAd] = useState<AdsType>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>();
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [owner, setOwner] = useState("");
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [tagsIds, setTagsIds] = useState<number[]>([]);
  const [showCategoryEditor, setShowCategoryEditor] = useState(false);
  const [showTagEditor, setShowTagEditor] = useState(false);

  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const [tags, setTags] = useState<TagsType[]>([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await axios.get<AdsType>(
          `http://localhost:3000/ads/${id}`
        );
        setAd(result.data);
      };
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      {
        const result = await axios.get<CategoriesType[]>(
          "http://localhost:3000/categories"
        );
        setCategories(result.data);
      }

      {
        const result = await axios.get<TagsType[]>(
          "http://localhost:3000/tags"
        );
        setTags(result.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (ad && Array.isArray(ad) && ad.length > 0) {
      const {
        title,
        description,
        price,
        location,
        picture,
        owner,
        category,
        tags,
      } = ad[0];
      setTitle(title);
      setDescription(description);
      setPrice(price / 100);
      setLocation(location);
      setPicture(picture);
      setOwner(owner);
      setCategoryId(category.id);
      setTagsIds(tags.map((tag: { id: number }) => tag.id));
    }
  }, [ad]); // Assurez-vous que cet effet est bien déclenché après la mise à jour de `ad`

  type Inputs = {
    title: string;
    description: string;
    price: number;
    location: string;
    picture: string;
    owner: string;
    categoryId: number;
    tags: number[];
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  async function onSubmit() {
    try {
      if (ad) {
        const result = await axios.put<AdsType>(
          `http://localhost:3000/ads/${id}`,
          {
            title,
            description,
            price: price ? price * 100 : 0,
            location,
            picture,
            owner,
            category: categoryId ? { id: categoryId } : null,
            tags: tagsIds.map((id) => ({ id })),
          }
        );
        navigate(`/ad/${result.data.id}`, { replace: true });
      } else {
        const result = await axios.post<AdsType>("http://localhost:3000/ads", {
          title,
          description,
          price: price ? price * 100 : 0,
          location,
          picture,
          owner,
          category: categoryId ? { id: categoryId } : null,
          tags: tagsIds.map((id) => ({ id })),
        });
        navigate(`/ad/${result.data.id}`, { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }

//probleme de champs requis a la modification a corriger
  return (
    <main className="main-content">
      <form className="adEditor" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Titre:
          <p className={`error-message ${errors.description ? "visible" : ""}`}>
            {errors.title?.message}
          </p>
          <input
            {...register("title", { required: "Champs requis" })}
            type="text"
            className="text-field adEditor"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="titre de l'annonce"
          />
        </label>
        <label>
          Description:
          <p className={`error-message ${errors.description ? "visible" : ""}`}>
            {errors.description?.message}
          </p>
          <input
            {...register("description", { required: "Champs requis" })}
            type="text"
            className="text-field adEditor"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description de l'annonce"
          />
        </label>
        <label>
          Prix:
          <p className={`error-message ${errors.price ? "visible" : ""}`}>
            {errors.price?.message}
          </p>
          <input
            {...register("price", { required: "Champs requis" })}
            type="number"
            className="text-field adEditor"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="prix de l'annonce"
          />
        </label>
        <label>
          Localisation:
          <p className={`error-message ${errors.location ? "visible" : ""}`}>
            {errors.location?.message}
          </p>
          <input
            {...register("location", { required: "Champs requis" })}
            type="text"
            className="text-field adEditor"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="localisation de l'annonce"
          />
        </label>
        <label>
          Photo(URL):
          <p className={`error-message ${errors.picture ? "visible" : ""}`}>
            {errors.picture?.message}
          </p>
          <input
            {...register("picture", { required: "Champs requis" })}
            type="text"
            className="text-field adEditor"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            placeholder="photo de l'annonce"
          />
        </label>
        <label>
          Owner(mail):
          <p className={`error-message ${errors.owner ? "visible" : ""}`}>
            {errors.owner?.message}
          </p>
          <input
            {...register("owner", { required: "Champs requis" })}
            type="text"
            className="text-field adEditor"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="propriétaire de l'annonce"
          />
        </label>
        <label>
          Categorie:
          <p className={`error-message ${errors.categoryId ? "visible" : ""}`}>
            {errors.categoryId?.message}
          </p>
          <select
            {...register("categoryId", { required: "Champs requis" })}
            className="text-field adEditor"
            value={categoryId} // Utilisez value ici
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            <option value="Choisissez une catégorie" disabled>
              Choisissez une catégorie
            </option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <Button
            name={showCategoryEditor ? "Fermer" : "Ajouter une catégorie"}
            onClick={() => setShowCategoryEditor(!showCategoryEditor)}
          />
        </label>
        {showCategoryEditor && (
          <CategoryEditor
            onCategoryAdded={(newCategory) =>
              setCategories([...categories, newCategory])
            }
          />
        )}
        {tags.map((tag) => (
          <label key={tag.id}>
            <input
              type="checkbox"
              checked={tagsIds.includes(tag.id)}
              onChange={() => {
                if (tagsIds.includes(tag.id)) {
                  setTagsIds(tagsIds.filter((id) => id !== tag.id));
                } else {
                  setTagsIds([...tagsIds, tag.id]);
                }
              }}
            />
            {tag.name}
          </label>
        ))}
        <Button
          name={showTagEditor ? "Fermer" : "Ajouter un tag"}
          onClick={() => setShowTagEditor(!showTagEditor)}
        />
        {showTagEditor && (
          <TagEditor
            onTagAdded={(newTag) => {
              setTags([...tags, newTag]);
              setTagsIds([...tagsIds, newTag.id]);
            }}
          />
        )}
        <button type="submit" className="button">{ad ? "Modifier" : "Créer"}</button>
      </form>
    </main>
  );
}

export default AdEditor;
