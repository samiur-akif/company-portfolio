import React from "react";

const BlogPost = ({imgUrl, category, publishDate, title, description }) => {
  return (
    <div className="margin-bottom-50">
      <div className="hoverbox-8">
        <a href="#">
          <img src="../assets/images/col-1.jpg" alt="" />
        </a>
      </div>
      <div className="margin-top-30">
        <div className="d-flex justify-content-between margin-bottom-10">
          <div className="d-inline-flex">
            <a
              className="font-family-tertiary font-small font-weight-normal uppercase"
              href="#"
            >
              Lifestyle
            </a>
          </div>
          <div className="d-inline-flex">
            <span className="font-small">Jan 24, 2019</span>
          </div>
        </div>
        <h5>
          <a href="#">Benefits of Minimalism</a>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <div className="margin-top-20">
          <a className="button-text-1" href="#">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
