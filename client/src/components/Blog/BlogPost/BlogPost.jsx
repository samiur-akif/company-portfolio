import React, { useEffect, useState } from "react";

const imgAPI = "http://localhost:1337";

const BlogPost = ({
  id,
  imgUrl,
  category,
  publishDate,
  title,
  description,
}) => {
  const event = new Date(publishDate);

  const sortedDescription = (description) => {
    if(description.length > 220){
      return `${description.slice(0, 220)}...`
    }
    else{
      return description
    }
  }
  
  const [newDescription, setNewDescription] = useState("");

  const replaceLineBreak = (current) => {
    const regex = /([A-Za-z])\w+/g;
    const result = current.match(regex);
    return result.join(" ");
  };

  useEffect(() => {
    setNewDescription(sortedDescription(replaceLineBreak(description)))
  }, [description])

  

  return (
    <div className="margin-bottom-50">
      <div className="hoverbox-8">
        <a href={`/blog/${id}`}>
          <img src={`${imgAPI}${imgUrl}`} alt="" />
        </a>
      </div>
      <div className="margin-top-30">
        <div className="d-flex justify-content-between margin-bottom-10">
          <div className="d-inline-flex">
            <a
              className="font-family-tertiary font-small font-weight-normal uppercase"
              href={`/blog/${id}`}
            >
              {category.map((item, key) => {
                if (category.length - 1 === key) {
                  return `${item.Name}`;
                } else {
                  return `${item.Name},  `;
                }
              })}
            </a>
          </div>
          <div className="d-inline-flex">
            <span className="font-small">{event.toDateString()}</span>
          </div>
        </div>
        <h5>
          <a href={`/blog/${id}`}>{title}</a>
        </h5>
        <p href={`/blog/${id}`}>{newDescription}</p>
        <div className="margin-top-20">
          <a className="button-text-1" href={`/blog/${id}`}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
