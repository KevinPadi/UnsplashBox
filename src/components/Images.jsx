/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { DownloadIcon } from "../assets/Icons"
import { Blurhash } from "react-blurhash"

const Images = ({ photo }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const downloadImage = (downloadUrl, imageDescription) => {
    const forcedDownloadUrl = `${downloadUrl}&force=true`
    const imageName = imageDescription.trim().replaceAll(' ', '-')
    const a = document.createElement("a")
    a.href = forcedDownloadUrl
    a.download = `${imageName}.jpg`
    document.body.appendChild(a);
    a.click()
    a.remove()
  }

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = photo.imageUrl
  }, [photo.imageUrl])

  return (
    <article className="relative w-full h-auto rounded-md overflow-hidden mb-4">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 p-4 size-full">
        <div className="absolute bottom-4 left-0 p-4 w-full flex justify-between">
          <a href={photo.photographer.unsplashProfile} className="flex items-center gap-3 text-white font-medium hover:underline">
            <img className="size-10 rounded-full" src={photo.photographer.profileImage} alt={photo.photographer.name} />
            {photo.photographer.name}
          </a>
          <button onClick={() => downloadImage(photo.download, photo.description)} className="size-9 bg-white rounded-full active:scale-95 transition-all ease-in hover:bg-white/90 flex items-center justify-center">
            <DownloadIcon />
          </button>
        </div>
      </div>

      <div className={`${imageLoaded ? 'hidden' : 'block'}`}
        style={{
          width: '100%',
          aspectRatio: `${photo.width} / ${photo.height}`,
        }}>
        <Blurhash
          className="rounded scale-105"
          width='100%'
          height='100%'
          resolutionX={32}
          resolutionY={32}
          hash={photo.blurHash}
          punch={1}
        />
      </div>

      <img
        className="w-full object-cover"
        src={photo.imageUrl}
        alt={photo.description}
        style={{ display: !imageLoaded ? 'none' : 'block' }}
      />
    </article>
  )
}

export default Images
