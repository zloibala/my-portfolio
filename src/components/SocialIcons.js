const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '22px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/zloibala">
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Akmaral Boronova' GitHub Profile"
        ></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/zloibala/">
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Akmaral Boronova' LinkedIn Profile"
        ></i>
      </a>
      <a className="icon" style={styles.icon} href="">
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Akmaral Boronova' Instagram Profile"
        ></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/boronovaa">
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Akmaral Boronova' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
