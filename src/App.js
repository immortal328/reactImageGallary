import React, {useState, useEffect} from 'react';
import ImgCard from './components/imgCard';
import SearchBox from './components/searchBox';
import Header  from './pages/header';
import Footer from './pages/footer'

function App() {

  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [search, setSearch] = useState('');


  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=22994142-9a6b50ab3b26096e62b69e406&q=${search}&image_type=photo&pretty=true`)
    .then(resp => resp.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(error => console.log(error));
  },[search]);

  
  return (
    <div>
      <Header/>
      <div className="bg-green-600 pb-3">
        <div className="container mx-auto">
          <SearchBox searchTerm={(text) => setSearch(text)}/>

          {!isLoading && images.length === 0 && 
          <div className="h-screen text-center items-center ">
            <h1 className="text-6xl font-extrabold mt-32 ">No Images Found</h1>
          </div> }

          {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-4 gap-6 ">
            {images.map(image => (
              <ImgCard key={image.id} image={image} />
            ))}
          </div>}
        </div> 
      </div>
      <Footer/>
    </div>   
  );
}

export default App;
