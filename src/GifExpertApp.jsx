import { useState } from "react";
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Nirvana']);

  const onAddCategory = (event) => {
    if (categories.includes(event)) return;
    setCategories([event, ...categories]);
    // setCategories(cat => [...cat, 'REM'])
  }

  return (
    <>
      <h1>Find a Gif</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map(category => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </>

  )
}