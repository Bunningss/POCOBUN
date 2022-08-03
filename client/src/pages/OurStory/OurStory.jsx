import './OurStory.scss';
import fashion from '../../img/fashion (1).jpg';
import fashion2 from '../../img/fashion (2).jpg';

const OurStory = () => {
  return (
    <div className='story default'>
        <div className="storyWrapper defaultPadding">
            <div className="storyBg"></div>
            <div className="storyLeft">
                <h2 className="storyHeader">About Us</h2>
                <p className="storyText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit soluta quis voluptatem? Porro, autem adipisci? Laboriosam pariatur autem quas?
                </p>
                <div className="storyImgWrapper">
                    <div className="leftImgShape"></div>
                    <div className="leftImg">
                        <img src={fashion2} alt="" className="image" />
                    </div>
                </div>
                <div className="textZone">
                    <p className="storyText">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, reiciendis nam! Nobis nesciunt facere quos nam quam ipsa ex voluptatum saepe natus, iure dignissimos rem nihil sapiente. Labore nemo quas asperiores corporis numquam quaerat architecto officiis, perspiciatis obcaecati voluptates, dignissimos, dolor doloribus! Deleniti saepe eius consequatur accusamus. Rem perspiciatis esse iusto quasi incidunt dignissimos, a nam mollitia ullam vitae aperiam, tenetur quod iure necessitatibus! Laboriosam nisi perspiciatis expedita saepe, rem dignissimos nihil tempore nesciunt sed cupiditate. Quidem tenetur nam optio suscipit, incidunt quasi repellendus accusamus eveniet cupiditate praesentium libero quas sit perspiciatis veritatis veniam ratione molestiae delectus at nisi consequuntur! Inventore numquam beatae error, eius dolorum doloremque tenetur similique soluta ea rem temporibus praesentium quisquam omnis minus voluptates aspernatur dolorem architecto velit fugit ipsa, fuga amet et maiores. Optio, a blanditiis aspernatur vitae deleniti earum inventore cupiditate? Illum iste labore iusto? Ab dolor neque culpa error atque provident dignissimos deleniti aperiam eius ipsam deserunt, eos vero a maxime dolorum quasi eveniet soluta itaque? Corporis animi tempora deleniti voluptatibus tempore, delectus quibusdam a aut labore nulla blanditiis praesentium excepturi repellat esse quam eos itaque quis commodi enim dolorum. Laborum vel similique officia voluptatibus neque, nam vero dolores fuga cumque. Quisquam, accusamus.
                    </p>
                </div>
            </div>
            <div className="storyRight">
                <h2 className="storyHeader">What we do?</h2>
                <p className="storyText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti facere consequatur earum veritatis neque delectus est eveniet eligendi officia!
                </p>
                <div className="rightImgWrapper">
                    <div className="rightImgShape"></div>
                    <div className="rightImg">
                        <img src={fashion} alt="" className="img" />
                    </div>
                </div>
                <div className="textZone">
                    <p className="storyText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam, consequatur pariatur reiciendis corrupti magnam ea quasi aut sint dolorem incidunt facilis itaque fuga aspernatur nesciunt id quod dolorum eaque vitae nam ducimus accusantium voluptatum tempora! Consequatur suscipit porro consectetur necessitatibus distinctio assumenda odit et sed, sequi iste veritatis aliquam.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory