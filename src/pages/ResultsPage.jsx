import { useParams, useLocation } from "react-router-dom"
import Images from "../components/Images"
import useFetch from "../hooks/useFetch"

// const data = [
//   {
//     "id": "IPRFX7CVVoU",
//     "imageUrl": "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "lion in close up shot",
//     "blurHash": "LDCYmwE29Z-o-nofWCWB0fxaxtRj",
//     "photographer": {
//       "name": "Luke Tanis",
//       "unsplashProfile": "https://unsplash.com/@saluken",
//       "profileImage": "https://images.unsplash.com/profile-1509137983951-c17c41bf2945?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/IPRFX7CVVoU/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/IPRFX7CVVoU/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 2848,
//     "height": 4272
//   },
//   {
//     "id": "2vbhN2Yjb3A",
//     "imageUrl": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwyfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "lion lying on ground",
//     "blurHash": "LKLppb9HD*-..7%KoJWA0M%1IpNH",
//     "photographer": {
//       "name": "Arleen wiese",
//       "unsplashProfile": "https://unsplash.com/@krummel",
//       "profileImage": "https://images.unsplash.com/profile-1581085461333-00f195b61117image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/2vbhN2Yjb3A/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwyfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/2vbhN2Yjb3A/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwyfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 3351,
//     "height": 5027
//   },
//   {
//     "id": "BpH--upRlCs",
//     "imageUrl": "https://images.unsplash.com/photo-1562569633-622303bafef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwzfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "photo of brown lion",
//     "blurHash": "LA8ga1xa0LRk%1oLNHWB0LR*-;s:",
//     "photographer": {
//       "name": "Matthew Kerslake",
//       "unsplashProfile": "https://unsplash.com/@mattkerslake",
//       "profileImage": "https://images.unsplash.com/profile-1683876382142-100590baec92image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/BpH--upRlCs/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwzfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/BpH--upRlCs/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwzfHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 1982,
//     "height": 2973
//   },
//   {
//     "id": "MMKAbQPIXg8",
//     "imageUrl": "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw0fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "brown lion looking up in macro lens photography",
//     "blurHash": "L56[28R+IUoL0fs:xuWVEMR*ayoe",
//     "photographer": {
//       "name": "Prince David",
//       "unsplashProfile": "https://unsplash.com/@bravoprince",
//       "profileImage": "https://images.unsplash.com/profile-1511635639847-576433b73683?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/MMKAbQPIXg8/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw0fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/MMKAbQPIXg8/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw0fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 1964,
//     "height": 2641
//   },
//   {
//     "id": "xHnb8UeZnmg",
//     "imageUrl": "https://images.unsplash.com/photo-1496368047060-2225dc0a96b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw1fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "lion on ground during daytime",
//     "blurHash": "LvJko=t7R-WV.TRjRjj[D%aejEbH",
//     "photographer": {
//       "name": "Mike Holford",
//       "unsplashProfile": "https://unsplash.com/@holfy",
//       "profileImage": "https://images.unsplash.com/profile-1624111880258-2f03fdd628c7image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/xHnb8UeZnmg/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw1fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/xHnb8UeZnmg/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw1fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 5184,
//     "height": 3456
//   },
//   {
//     "id": "FC4GY9nQuu0",
//     "imageUrl": "https://images.unsplash.com/photo-1516642499105-492ff3ac521b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw2fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "shallow focus photography of lion at the wildlife",
//     "blurHash": "LvM?^^%2xZNH?wWEj[j[yENHRkxZ",
//     "photographer": {
//       "name": "jean wimmerlin",
//       "unsplashProfile": "https://unsplash.com/@jwimmerli",
//       "profileImage": "https://images.unsplash.com/profile-1516625071166-5e4057b57f8d?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/FC4GY9nQuu0/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw2fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/FC4GY9nQuu0/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw2fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 3272,
//     "height": 4908
//   },
//   {
//     "id": "YpttEdPWpGs",
//     "imageUrl": "https://images.unsplash.com/photo-1517649281203-dad836b4abe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw3fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "grayscale photo of lion",
//     "blurHash": "LVPGmh~q-;D%t7t7WBWB?bIUM{t7",
//     "photographer": {
//       "name": "Glen Carrie",
//       "unsplashProfile": "https://unsplash.com/@glencarrie",
//       "profileImage": "https://images.unsplash.com/profile-1576432292156-b6d019b86ec1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/YpttEdPWpGs/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw3fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/YpttEdPWpGs/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw3fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 5472,
//     "height": 3648
//   },
//   {
//     "id": "gi6T2ktnpnE",
//     "imageUrl": "https://images.unsplash.com/photo-1516109829485-81f3640777bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw4fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "lioness closeup photography",
//     "blurHash": "LCFOlj%M0Ljt-5IVIpoJ9tNGE1s.",
//     "photographer": {
//       "name": "Omer Salom",
//       "unsplashProfile": "https://unsplash.com/@osalom",
//       "profileImage": "https://images.unsplash.com/profile-1515681811260-ed985aad2f3a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/gi6T2ktnpnE/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw4fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/gi6T2ktnpnE/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw4fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 2112,
//     "height": 2574
//   },
//   {
//     "id": "sAGXVK6bNFc",
//     "imageUrl": "https://images.unsplash.com/photo-1470848051974-964b789cb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw5fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "brown lion",
//     "blurHash": "LAF;QEkqIq0f=x$$I=s.59jFR+%1",
//     "photographer": {
//       "name": "Amar Yashlaha",
//       "unsplashProfile": "https://unsplash.com/@pictagramar",
//       "profileImage": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/sAGXVK6bNFc/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw5fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "downloadLocation": "https://api.unsplash.com/photos/sAGXVK6bNFc/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw5fHxsaW9ufGVufDB8fDF8fDE3Mjg5NTU1MzB8MA",
//     "width": 3723,
//     "height": 2481
//   },
//   {
//     "id": "fJ8gSvKDHUo",
//     "imageUrl": "https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxMHx8bGlvbnxlbnwwfHwxfHwxNzI4OTU1NTMwfDA&ixlib=rb-4.0.3&q=80&w=1080",
//     "description": "brown lion in close up photography",
//     "blurHash": "LCAS}HxZ0fI;xCbHW=WBNHR*xZs.",
//     "photographer": {
//       "name": "Rob Potter",
//       "unsplashProfile": "https://unsplash.com/@robpotter",
//       "profileImage": "https://images.unsplash.com/profile-1687817669280-9dcfc711e57fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/fJ8gSvKDHUo/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxMHx8bGlvbnxlbnwwfHwxfHwxNzI4OTU1NTMwfDA",
//     "downloadLocation": "https://api.unsplash.com/photos/fJ8gSvKDHUo/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxMHx8bGlvbnxlbnwwfHwxfHwxNzI4OTU1NTMwfDA",
//     "width": 2917,
//     "height": 4372
//   }
// ]

const ResultsPage = () => {
  const location = useLocation()
  console.log(location)
  const { query } = useParams()
  const URL = import.meta.env.VITE_URL
  const { data } = useFetch(URL, query)

  return (
    <main className='w-full min-h-screen bg-neutral-950 p-4'>
      <div className="columns-xs gap-3 w-full">
        {data.map((photo) => (
          <Images key={photo.id} photo={photo} />
        ))}
      </div>
    </main>

  )
}

export default ResultsPage
