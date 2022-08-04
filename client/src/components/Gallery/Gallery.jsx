import './Gallery.scss';

const Gallery = ({ setModalImg, images }) => {
  return (
    <div className='gallery'>
        <div className="galleryWrapper">
            {
                images.map((image) => (
                    <img src={image} alt="" onClick={() => setModalImg(image)} />
                ))
            }
        </div>
    </div>
  )
}

export default Gallery