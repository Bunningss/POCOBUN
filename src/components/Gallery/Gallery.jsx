import './Gallery.scss';

const Gallery = ({ setModalImg, images }) => {
  return (
    <div className='gallery'>
        <div className="galleryWrapper">
            {
                images.map((image, index) => (
                    <img src={image} key={index} alt="" onClick={() => setModalImg(image)} />
                ))
            }
        </div>
    </div>
  )
}

export default Gallery