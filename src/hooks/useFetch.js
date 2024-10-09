import { useEffect } from "react";
import { useStore } from "../store/useStore.js"

const useFetch = (url, searchQuery) => {
  const data = useStore((state) => state.data)
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const setData = useStore((state) => state.setData)
  const setLoading = useStore((state) => state.setLoading)
  const setError = useStore((state) => state.setError)

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery !== "") {
        setLoading(true);
        try {
          const res = await fetch(`${url}/search/photos?order_by=popular&query=${searchQuery}`, {
            method: "GET",
            headers: {
              "Accept-Version": "v1",
              Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
            },
          });
          const result = await res.json();
          const formattedData = result.results.map((photo) => ({
            id: photo.id,
            imageUrl: photo.urls.regular,
            description: photo.alt_description || "No description",
            blurHash: photo.blur_hash,
            photographer: {
              name: photo.user.name,
              unsplashProfile: photo.user.links.html,
              profileImage: photo.user.profile_image.small,
            },
            download: photo.links.download,
            downloadLocation: photo.links.download_location,
          }));
          setData(formattedData);
          console.log(formattedData)
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url, searchQuery, setData, setError, setLoading]);

  return { data, loading, error };
};

export default useFetch;
