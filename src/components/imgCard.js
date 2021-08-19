import React from 'react'

function ImgCard(props) {
      const {image} =props;
      const tags = image.tags.split(",");
      return (
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-green-700 border-2 border-black">
                        <img src={image.webformatURL} alt="" className="w-full"/>     

                        <div className="px-6 py-4">
                              <div className="font-light text-white text-xl">
                                    Photo by:-{image.user}
                              </div>
                              <ul className="grid grid-cols-1 text-gray-300" >
                                    <li><strong>Views:</strong>{image.views}</li>
                                    <li><strong>Downloads:</strong>{image.downloads}</li>
                                    <li><strong>Likes:</strong>{image.likes}</li>
                              </ul>
                        </div>
                        
                        <div className="px-6">
                              {tags.map((tag,index)=>
                              <span key={index} className="inline-block bg-white rounded-full
                              px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
                              #{tag}
                              </span>)}
                        </div>
                  </div>
      );
}

export default ImgCard;