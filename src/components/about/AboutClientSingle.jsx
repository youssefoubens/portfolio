import PropTypes from 'prop-types';

const AboutClientSingle = ({ title, image }) => {
  return (
    <div className="client-card" title={title}>
      <div className="client-image-container">
        <img
          src={image}
          alt={title}
          className="client-image"
          loading="lazy"  // Add lazy loading
          width="100%"    // Add responsive width
          height="auto"   // Maintain aspect ratio
        />
      </div>
    </div>
  );
};

AboutClientSingle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AboutClientSingle;