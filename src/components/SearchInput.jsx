import { useState } from "react"
import { SearchIcon } from "../assets/Icons"
import useFetch from "../hooks/useFetch"

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const URL = import.meta.env.VITE_URL

  const { data, loading, error } = useFetch(URL, searchQuery)

  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.elements.SearchQuery.value)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <label htmlFor="SearchQuery" className="sr-only"> Search </label>

      <input
        type="text"
        name="SearchQuery"
        id="SearchQuery"
        placeholder="Enter your keywords..."
        className="text-sm sm:text-base w-full rounded-full border border-gray-200 pe-10 py-3 sm:p-3 dark:border-neutral-900 dark:bg-neutral-900 dark:text-gray-300 focus:ring-0 focus:outline-none focus:border-neutral-500 transition-colors"
      />

      <span
        className="pointer-events-none absolute inset-y-0 end-0 grid w-14 place-content-center text-gray-500 dark:text-gray-400"
      >
        <SearchIcon />
      </span>

      {/* <div className="w-full h-fit">
        {data ? data.map((photo) => (
          <article key={photo}>

          </article>
        ))}
      </div> */}
    </form>
  )
}

export default SearchInput