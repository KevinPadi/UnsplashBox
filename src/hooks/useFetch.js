import { useState, useEffect } from "react"

const useFetch = (url, searchQuery) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if(searchQuery !== '') {
        try {
          const res = await fetch(`${url}/search/photos?query=${searchQuery}`, {
            method: "GET",
            headers: {
              "Accept-Version": "v1",
              "Authorization": `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
            }
          })
          const result = await res.json()
          const formattedData = result.results.map((photo) => ({
            id: photo.id,
            imageUrl: photo.urls.thumb,
            description: photo.alt_description || "No description",
            blurHash: photo.blur_hash,
            photographer: {
              name: photo.user.name,
              unsplashProfile: photo.user.links.html,
              profileImage: photo.user.profile_image.small,
            },
            download: photo.links.download
          }))
          setData(formattedData)
          console.log(formattedData)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [url, searchQuery])

  return { data, loading, error }
}

export default useFetch
