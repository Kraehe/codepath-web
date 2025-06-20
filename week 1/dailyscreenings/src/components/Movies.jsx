import React from "react"
import Cards from "./Cards"

const movies = [
    {
    src: "src/imgs/prettyinpink.png",
    alt: "Pretty in Pink (1986)",
    title: "Pretty in Pink (1986)",
    date: "June 9, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-06-09",
  },
  {
    src: "src/imgs/thewood.png",
    alt: "The Wood (1999)",
    title: "The Wood (1999)",
    date: "June 16, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-06-16",
  },
  {
    src: "src/imgs/kinkyboots.png",
    alt: "Kinky Boots (2005)",
    title: "Kinky Boots (2005)",
    date: "June 23, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-06-23",
  },
  {
    src: "src/imgs/standbyme.png",
    alt: "Stand by Me (1986)",
    title: "Stand by Me (1986)",
    date: "June 30, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-06-30",
  },
  {
    src: "src/imgs/goodwillhunting.png",
    alt: "Good Will Hunting (1997)",
    title: "Good Will Hunting (1997)",
    date: "July 7, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-07-07",
  },
  {
    src: "src/imgs/interstellar.png",
    alt: "Interstellar (2014)",
    title: "Interstellar (2014)",
    date: "July 14, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-07-14",
  },
  {
    src: "src/imgs/ghost.png",
    alt: "Ghost (1990)",
    title: "Ghost (1990)",
    date: "July 21, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-07-21",
  },
  {
    src: "src/imgs/pulpfiction.png",
    alt: "Pulp Fiction (1994)",
    title: "Pulp Fiction (1994)",
    date: "June 28, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-07-28",
  },
  {
    src: "src/imgs/bladesofglory.png",
    alt: "Blades of Glory (2007)",
    title: "Blades of Glory (2007)",
    date: "August 4, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-08-04",
  },
  {
    src: "src/imgs/thegodfather.png",
    alt: "The Godfather (1972)",
    title: "The Godfather (1972)",
    date: "August 11, 2025",
    link: "https://bryantpark.org/calendar/event/2023-movie-nights/2025-08-11",
  },
]

const Movies = () => {
  return (
    <div className='Movie'>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
        {movies.map((movie, idx) => (
          <Cards
            key={movie.title}
            src={movie.src}
            alt={movie.alt}
            title={movie.title}
            date={movie.date}
            link={movie.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies