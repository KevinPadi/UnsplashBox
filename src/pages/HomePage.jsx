import SearchInput from "../components/SearchInput"

const HomePage = () => {
  return (
    <section className="relative max-h-screen">
      <div className="mx-auto pt-40 max-w-xl flex flex-col items-center gap-5 px-5 animate-text-blur-in">
        <h3 className="text-gray-300 font-medium text-center text-balance" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          UnsplashBox
        </h3>

        <p className="text-neutral-500 text-center" style={{ fontSize: "clamp(0.75rem, 5vw, 1.1rem" }}>
          Search high-resolution images from Unsplash
        </p>

        <SearchInput />

      </div>
    </section >
  )
}

export default HomePage