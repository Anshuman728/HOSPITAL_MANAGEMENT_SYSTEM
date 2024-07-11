import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Zee Institute of Medical Sciences, established in 1995, 
          stands as a beacon of excellence in healthcare education and research.
           Nestled in the heart of the city, Zee Institute has grown from a modest beginning into a premier institution,
         renowned for its commitment to shaping the future of medical professionals. Our state-of-the-art campus,
          equipped with cutting-edge technology and modern facilities, fosters an environment conducive to learning and innovation.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          We believe in a holistic approach to medical education,
           nurturing not only the intellectual growth of our students but also their ethical and compassionate understanding of patient care.
            Our graduates leave Zee Institute as well-rounded professionals, equipped with the knowledge, 
            skills, and empathy required to make a meaningful impact in the healthcare industry.
          </p>
          <p>Stay fit Stay Healthy!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
