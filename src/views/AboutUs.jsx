import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Natalie Wattson',
      designation: 'Founder & CEO',
      image: 'https://i.pinimg.com/736x/1a/ab/ef/1aabefe0809dd454d892d5337a470514.jpg'
    },
    {
      name: 'Suzume Iwato',
      designation: 'Adoption Specialist',
      image: 'https://images4.alphacoders.com/129/1290387.jpg'
    },
    {
      name: 'Ash Ketchum',
      designation: 'Veterinarian',
      image: 'https://d2u0ktu8omkpf6.cloudfront.net/b0883d4ac81501aa04f8f7864783a640333b5830b52e7cf4.png'
    }
  ];

  return (
    <div className="about-us">
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Our Mission</h2>
      <p style={{ fontSize: '1.2rem' }}>
        At Purrfect Adoption, our mission is to connect loving homes with cats in need, ensuring every feline finds a safe, caring family to call their own.
      </p>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Our Goal</h2>
        <p style={{ fontSize: '1.2rem' }}>
          Our goal at Purrfect Adoption is to make the adoption process simple and accessible, helping as many cats as possible find their forever homes while promoting a compassionate and responsible approach to pet adoption.
        </p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Our Team</h2>
        <section className="mt-5">
          <div className="mt-2 row g-4" id="team-container">
            {teamMembers.map((member, i) => (
              <div key={i} className="col-md-4">
                <div className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid mb-2"
                    style={{ borderRadius: '50%', height: '150px', objectFit: 'cover' }}
                  />
                  <div className="team-info">
                    <h3 className="h5 mb-1">{member.name}</h3>
                    <p className="mb-0">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;



