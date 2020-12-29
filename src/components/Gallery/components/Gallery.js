import React from 'react'

import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

const Gallery = ({ images = DEFAULT_IMAGES }) => {

  return (
    <div>
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          href={obj.href}
          target={obj.target}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          position={obj.position}
          position={i}
        />); 
        })}
        </div>
      )}
    </div>
  )
}

Gallery.displayName = 'Gallery'

export default Gallery
