import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {
  // Hardcoded profile data
  const bannerData = {
    headline: "Shaik Shivaji - Software and AI/ML Engineer",
    profileSummary: "Passionate Software Developer specializing in AI/ML technologies with expertise in building scalable applications and intelligent systems. Experienced in full-stack development, machine learning model deployment, and creating innovative solutions that bridge the gap between traditional Software Developering and artificial intelligence. Committed to leveraging cutting-edge technologies to solve complex problems and deliver impactful results. Strong collaborator with proven ability to work effectively in cross-functional teams, translating business requirements into robust technical solutions. Continuously learning and adapting to emerging technologies in the rapidly evolving AI/ML landscape.",
    resumeLink: "https://drive.google.com/file/d/1FfZngs9JekoKCvJnb74KhXF2sCrCSui2/view?usp=sharing",
    linkedinLink: "https://www.linkedin.com/in/shivaji-shaik-b92b19270/"
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
