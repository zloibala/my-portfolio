// import aboutMeImg from "../images/aboutme.jpeg";
// import { motion } from "framer-motion";
// import SocialIcons from "../components/SocialIcons";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";
// import resume from "../pages/about/michael-yeates-resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  //   triggerOnce: true,
  // });

  // const [downloading, setDownloading] = useState(false);

  // useEffect(() => {
  //   setDownloading(false);
  // }, [downloading]);

  // const handleDownload = () => {
  //   setDownloading(true);
  //   const link = document.createElement("a");
  //   link.href = resume;
  //   link.download = "Michael-Yeates-Resume.pdf";
  //   link.onload = () => {
  //     link.remove();
  //     setDownloading(false);
  //   };
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <p style={{ color: 'grey', textAlign: 'center', width: '700px' }}>
      I'm Akmaral, the friendly neighborhood front-end developer and UX designer with a sprinkle of
      humor. With a passion for crafting pixel-perfect interfaces and making websites come alive,
      I've been rocking the coding cosmos for a stellar 3 years. When I'm not battling bugs or
      diving deep into the realms of CSS and JavaScript, you'll often find me juggling pixels like a
      circus performer or brainstorming user experiences with a mischievous twinkle in my eye. I
      believe in creating designs that not only look out-of-this-world but also bring joy and
      usability to the digital galaxy. In my cosmic quest for the perfect user interface, I've
      mastered the art of making websites sing and dance, all while keeping users on the edge of
      their seats. My mission? To make the online world a brighter, more intuitive place, one line
      of code at a time. Off the clock, I'm a part-time stargazer and full-time aficionado of all
      things sci-fi. From warp-speed coding sessions to debating the existence of parallel
      universes, I'm always ready for an intergalactic adventure. So, if you're looking to blast off
      with a front-end developer and UX designer who knows how to code with a sense of humor, don't
      hesitate to launch a message my way. Let's create digital experiences that are not only
      mind-blowing but also bring a smile to your face. Together, we'll make the web a fun and
      functional playground for everyone!
    </p>
    // <div className="aboutContainer container">
    //   <div className="row">
    //     <motion.div
    //       className="personalImage col-12 col-lg-4"
    //       ref={ref}
    //       initial={{ x: "-10vw", opacity: 0 }}
    //       animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
    //       transition={{ duration: 0.4, ease: "easeInOut" }}
    //     >
    //       <img src={aboutMeImg} alt={name} />
    //     </motion.div>
    //     <motion.div
    //       className="personalInfo col-12 col-lg-8"
    //       ref={ref}
    //       initial={{ x: "10vw", opacity: 0 }}
    //       animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
    //       transition={{ duration: 0.4, ease: "easeInOut" }}
    //     >
    //       <div className="contentContainer">
    //         <h4>Nice to meet you</h4>
    //         <h5>I'm a Software Engineer who crafts amazing digital experiences!</h5>
    //         <div className="contentDescription">
    //           <p>{brand}</p>
    //         </div>
    //         <div className="infoContainer">
    //           <div className="row">
    //             <div className="col-12 col-md-6 info">
    //               <span>Name:</span>
    //               <p>Michael Yeates</p>
    //             </div>
    //             <div className="col-12 col-md-6 info">
    //               <span>Email:</span>
    //               <p>
    //                 <a href={`mailto:${email}`}>{email}</a>
    //               </p>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-12 col-md-6 info">
    //               <span>Location:</span>
    //               <p>{location}</p>
    //             </div>
    //             <div className="col-12 col-md-6 info">
    //               <span>Availability:</span>
    //               <p>{availability}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="buttonContainer">
    //           <button className="btn downloadCV" /*onClick={handleDownload}*/ disabled={downloading}>
    //             {downloading ? "Downloading..." : "Download Resume"}
    //           </button>{" "}
    //           <SocialIcons />
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default AboutMe;
