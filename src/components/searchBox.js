import React, {useState} from 'react'


function SearchBox({searchTerm}) {

      const [text, setText] = useState('');

      const onSubmit = (e) => {
            e.preventDefault();
            searchTerm(text);
      }

      return (
            <div className='max-w-lg rounded overflow-hidden mx-auto '>
                  <form onSubmit={onSubmit} className="w-full max-w-lg">
                        <div className="flex items-center border-b-6 border-teal-500 py-2">
                              <input onChange={e => setText(e.target.value)}
                              className=" placeholder-black appearance-none border-4 bg-white text-black rounded-full py-3
                              w-full mr-3  px-5 leading-tight focus:outline-none border-black" 
                              type="text" placeholder="Search Images e.g birds,flower etc" />

                              <button className="flex-shrink-0 bg-white hover:bg-blue-200 border-black 
                              htext-lg border-4 text-black py-3 px-2 rounded-3xl" 
                              type="submit">
                              Search
                              </button>
                        </div>
                  </form>
		</div>
      )
}

export default SearchBox;
