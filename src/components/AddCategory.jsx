import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories])
    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" placeholder="Find a Gif" value={inputValue}
        onChange={(event) => onInputChange(event)} />
    </form>
  )

}