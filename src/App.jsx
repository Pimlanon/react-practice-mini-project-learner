import Card from './Card/Card';
import './App.css'
import { useState } from 'react';

const movies = [
  {
    title: 'The Matrix',
    image:
      'https://i.pinimg.com/736x/cb/82/6d/cb826d2fc3b9fbc4920cdd7dabb53555.jpg',
  },
  {
    title: 'Inception',
    image:
      'https://images.theconversation.com/files/353512/original/file-20200818-14-1yd1myr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
  },
  {
    title: 'The Dark Knight',
    image:
      'https://www.wallpapermania.eu/images/lthumbs/2012-04/2487_Batman-The-Dark-Knight-Poster-HD-Wallpaper.jpg',
  }
];

export default function App() {

  const [selectedMovie, setSelectedMovie] = useState([])
  // const [movieTitle, setMovieTitle] = useState('aa');

  const handleClick = (movieTitle) => {
    // setMovieTitle(movieTitle)

    //เช็คว่ามี movieTitle ที่ซ้ำมั้ย
    if(selectedMovie.includes(movieTitle)) {
      setSelectedMovie(prev => {
        //filter เอาอันที่ไม่ได้มี movieTitle ซ้ำอยู่ต่อ อันซ้ำจะไม่เอา
        return prev.filter(ele => ele !== movieTitle)
      })
    } else {
      setSelectedMovie(prev => {
        return [...prev, movieTitle]
      })
    }
    }

    

  return (
    <>
    
    <div className='card-container'>
    <ul>
      {selectedMovie.map((movieTitle) => 
        <li key={movieTitle}>{movieTitle}</li>
        ) 
      }
    </ul>
      {/* วน render card ออกมาตามจำนวน array */}
      {movies.map((ele) =>
        <Card key={ele.title} movieData={ele} handleClick={handleClick}  />
      )}
        
    </div>
    </>
  );
}
