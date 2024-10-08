import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

// const data = [
//   {
//     "id": "9l_326FISzk",
//     "imageUrl": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "Apple MacBook beside computer mouse on table",
//     "blurHash": "LIBpa]NG00t7?HIVIU%MxZs:IoRj",
//     "photographer": {
//       "name": "Luca Bravo",
//       "unsplashProfile": "https://unsplash.com/@lucabravo",
//       "profileImage": "https://images.unsplash.com/profile-1585521746678-1988925483d3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/9l_326FISzk/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "KdeqA3aTnBY",
//     "imageUrl": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "people sitting on chair in front of table while holding pens during daytime",
//     "blurHash": "LLH2K8Dh0L%h-:XUem%2E2r;xFW=",
//     "photographer": {
//       "name": "Dylan Gillis",
//       "unsplashProfile": "https://unsplash.com/@dylandgillis",
//       "profileImage": "https://images.unsplash.com/profile-1695938795840-75b07d152aecimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/KdeqA3aTnBY/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "VWcPlbHglYc",
//     "imageUrl": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "turned off laptop computer on top of brown wooden table",
//     "blurHash": "LTKeG.00Rj%3%ND%oLxuWAaxaeof",
//     "photographer": {
//       "name": "Alesia Kazantceva",
//       "unsplashProfile": "https://unsplash.com/@alesiaskaz",
//       "profileImage": "https://images.unsplash.com/profile-1596578750003-cc29df35976eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/VWcPlbHglYc/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "yWwob8kwOCk",
//     "imageUrl": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "hallway between glass-panel doors",
//     "blurHash": "LFEMB;?w-=~qtmozxaxvRiaJWBNG",
//     "photographer": {
//       "name": "Nastuh Abootalebi",
//       "unsplashProfile": "https://unsplash.com/@sunday_digital",
//       "profileImage": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/yWwob8kwOCk/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "eHD8Y1Znfpk",
//     "imageUrl": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw1fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "photo of dining table and chairs inside room",
//     "blurHash": "LQDl~9_NS%fkV?s-t7t74.M{xtxu",
//     "photographer": {
//       "name": "Nastuh Abootalebi",
//       "unsplashProfile": "https://unsplash.com/@sunday_digital",
//       "profileImage": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/eHD8Y1Znfpk/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw1fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "FlPc9_VocJ4",
//     "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw2fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "person using laptop",
//     "blurHash": "LOFFX0579Zw]%Ma$t7M{0L-pxaae",
//     "photographer": {
//       "name": "John Schnobrich",
//       "unsplashProfile": "https://unsplash.com/@johnishappysometimes",
//       "profileImage": "https://images.unsplash.com/profile-1617661213250-99188e034318image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/FlPc9_VocJ4/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw2fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "CPs2X8JYmS8",
//     "imageUrl": "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "man sitting on chair wearing gray crew-neck long-sleeved shirt using Apple Magic Keyboard",
//     "blurHash": "LXM7cH_39EIA~qI:RiaKxZ%LR*S1",
//     "photographer": {
//       "name": "Tim van der Kuip",
//       "unsplashProfile": "https://unsplash.com/@timmykp",
//       "profileImage": "https://images.unsplash.com/profile-1624467387516-698533a01692image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/CPs2X8JYmS8/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "Lks7vei-eAg",
//     "imageUrl": "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw4fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "man using MacBook",
//     "blurHash": "LRGIo.?b9FIU~qofM{IUofRjayof",
//     "photographer": {
//       "name": "charlesdeluvio",
//       "unsplashProfile": "https://unsplash.com/@charlesdeluvio",
//       "profileImage": "https://images.unsplash.com/profile-1515694660956-9133b2f53e3b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/Lks7vei-eAg/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw4fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "hrhjn6ZTgrM",
//     "imageUrl": "https://images.unsplash.com/photo-1507207611509-ec012433ff52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw5fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "two men sitting on sofa",
//     "blurHash": "LUK^o[${XTE40.N{ofE4t6ERsSox",
//     "photographer": {
//       "name": "LinkedIn Sales Solutions",
//       "unsplashProfile": "https://unsplash.com/@linkedinsalesnavigator",
//       "profileImage": "https://images.unsplash.com/profile-1512057451434-f1b6a066b2ec?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/hrhjn6ZTgrM/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHw5fHxvZmZpY2V8ZW58MHx8fHwxNzI4MzM1MTgzfDA"
//   },
//   {
//     "id": "5U_28ojjgms",
//     "imageUrl": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxMHx8b2ZmaWNlfGVufDB8fHx8MTcyODMzNTE4M3ww&ixlib=rb-4.0.3&q=80&w=200",
//     "description": "people sitting on chair",
//     "blurHash": "LSF=m#~qE1Z~_3-;xFV@E1RjofR*",
//     "photographer": {
//       "name": "Redd F",
//       "unsplashProfile": "https://unsplash.com/@raddfilms",
//       "profileImage": "https://images.unsplash.com/profile-1651635111298-b88086877026image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32"
//     },
//     "download": "https://unsplash.com/photos/5U_28ojjgms/download?ixid=M3w2NjEzNTJ8MHwxfHNlYXJjaHwxMHx8b2ZmaWNlfGVufDB8fHx8MTcyODMzNTE4M3ww"
//   }

// ]

const ResultsPage = () => {
  const { query } = useParams()
  const URL = import.meta.env.VITE_URL
  const { data } = useFetch(URL, query)
  return (
    <main className='w-full min-h-screen bg-neutral-950'>
      <div className="grid grid-cols-3 gap-4">
        {
          data.map((photo) => (
            <article key={photo.id} className="relative rounded-md overflow-hidden">
              <div className="absolute size-full bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-80 p-4">
                <a href={photo.photographer.unsplashProfile} className="flex items-center gap-3 text-white font-medium hover:decoration-solid hover:underline absolute bottom-4 hover:cursor-pointer">
                  <img className="size-10 rounded-full" src={photo.photographer.profileImage} alt={photo.photographer.name} />
                  {photo.photographer.name}
                </a>
              </div>
              <img className="size-full" src={photo.imageUrl} alt={photo.description} />
            </article>
          ))
        }
      </div>
    </main>
  )
}

export default ResultsPage