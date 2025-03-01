const AboutClientSingle = ({ title, image }) => {
	return (
	  <div className="client-card">
		<div className="client-image-container">
		  <img
			src={image}
			alt={title}
			className="client-image"
		  />
		</div>
	  </div>
	);
  };
  
  export default AboutClientSingle;