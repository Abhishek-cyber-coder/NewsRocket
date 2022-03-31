import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: "flex", position: "absolute", right: 0 }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/10/google-pixel-6-and-6-pro-us-carriers/-952x498w6/gsmarena_000.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
