import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
// import landingImage from '../../images/me.svg';
import Draw from '../../components/Draw';
import SocialIcons from '../../components/SocialIcons';
// import landingImage from '../../images/akmaral.svg';
import landingImage from '../../images/akmaral.png';

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: 'calc(100% - 93px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '50px',
    },

    landingImage: {
      position: 'absolute',
      bottom: '0',
      opacity: '0.3',
      // mixBlendMode: 'lighten',
      height: '95%',
    },

    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      letterSpacing: '1px',
      textAlign: 'center',
      zIndex: '1',
      color: '#fff',
      textShadow: '1px 1px 3px #000',
    },

    name: {
      color: '#fff',
      fontWeight: '700',
      marginTop: '-100px',
      paddingBottom: '28px',
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <Draw />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString(" Hello, I'm a Front-End Developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString('Code. ')
                .pauseFor(500)
                .typeString('Create. ')
                .pauseFor(500)
                .typeString('Innovate.')

                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={styles.landingImage}
          src={landingImage}
          alt="Boronova Akmaral"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
