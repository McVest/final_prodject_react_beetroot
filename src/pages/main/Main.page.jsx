import React from "react";
import MainBunner from "../../components/main_bunner/MainBunner";
import Experience from "../../components/experience/Experience";
import styles from './main.module.scss'
import MidSection from "../../components/midSection/MidSection";
import Skillset from "../../components/skillset/Skillset";
import MainProject from "../../components/mainProject/MainProject";
import img from '../../assets/image/mid_section.png'
import inst from '../../assets/image/inst.png'
import Comments from "../../components/comments/Comments";
import Slider from "../../components/sliders/Slide";
import ContactForm from "../../components/contactForm/ContactForm";


const MainPage = () => {

  const slideData = [
    {
      index: 0,
      headline: "New Fashion Apparel",
      button: "Shop now",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
    },
    {
      index: 1,
      headline: "In The Wilderness",
      button: "Book travel",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
    },
    {
      index: 2,
      headline: "For Your Current Mood",
      button: "Listen",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg"
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      button: "Get Focused",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
    }
  ];

  return (
    <main className={styles.main}>
      <MainBunner />
      <Experience />
      <MidSection title="Philosophy & values" text='I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.' link='/about' text_link='More about' img={img} />
      <Skillset />
      <MainProject link={true}/>
      <MidSection title="Instagram" text='If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world' link='https://www.instagram.com/mig_vol_/?hl=ru' text_link='Follow me on IG' img={inst} />
      <Comments limit={5} pagination={false} text={true} />
      <Slider heading="Example Slider" slides={slideData} />
      <ContactForm />
    </main>
  )
}
export default MainPage;