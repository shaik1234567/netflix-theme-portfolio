import React, { useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaCertificate } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiHackerrank, SiMicrosoft } from 'react-icons/si';
import { Certification } from '../types';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'hackerrank': <SiHackerrank />,
  'university': <FaUniversity />,
  'certificate': <FaCertificate />,
  'microsoft': <SiMicrosoft />,
  'unstop': <FaCertificate />,
  'istudio': <FaUniversity />
};

const Certifications: React.FC = () => {

  const [certifications] = useState<Certification[]>([
    {
      title: "Cognitive Class Certification",
      issuer: "Cognitive Class",
      issuedDate: "2024",
      link: "https://courses.cognitiveclass.ai/certificates/c1e9b63e8e8244f5b9de0c06516e682a",

      iconName: "microsoft"
    },
    {
      title: "Machine learning",
      issuer: "Istudio",
      issuedDate: "2024",
      link: "https://drive.google.com/file/d/1_OtRQXSAxgXbnJUntYVRR4vzVRNj9Jqf/view",

      iconName: "istudio"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      issuedDate: "2024",
      link: "https://www.hackerrank.com/certificates/5ebad1b7c49d",

      iconName: "hackerrank"
    },
    {
      title: "CSS (Basic)",
      issuer: "HackerRank",
      issuedDate: "2024",
      link: "https://www.hackerrank.com/certificates/cbcdc9c3063f",

      iconName: "hackerrank"
    },
    {
      title: "NHAI Participation",
      issuer: "UNSTOP",
      issuedDate: "2024",
      link: "https://drive.google.com/file/d/1DG4AVkOQqzcQjUF3gXerO0FgZCA2RLKf/view?usp=sharing",

      iconName: "unstop"
    },
    {
      title: "HP POWERLAB Participation",
      issuer: "UNSTOP",
      issuedDate: "2025",
      link: "https://drive.google.com/file/d/17BxanwFq6qYS-xGPXwn5HqpoHTruGCji/view?usp=sharing",

      iconName: "unstop"
    }
  ]);

  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
