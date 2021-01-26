import React, { useEffect, useState } from "react";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/social-links")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data));
  });

  const SocialIcon = ({icon, link}) => (
    <li>
      <a href={link}>
        <i className={icon} />
      </a>
    </li>
  );

  return (
    <div className="header-menu-extra">
      <ul className="list-inline">
        {
          socialLinks.length ? socialLinks.map((item, key) => (
            <SocialIcon key={key} icon={item.Icon} link={item.Link} />
          ) ) : null
        }
      </ul>
    </div>
  );
};

export default SocialLinks;
