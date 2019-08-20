import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import PostsList from "./PostsList";

export const BlogDashboardPage = () => {
  return (
    <div>
      <Header />
      <div id="landing">
        <div className="primary-overlay">
          <div className="container h-100">
            <div className="row hero-text">
              <div className="col-lg-7">
                <h1 className="text-white mb-5">
                  UNSHIFT Blog - Responsive blog styled by Michael Feninets
                </h1>
                <a
                  href="https://github.com/kopenhamn/study/tree/master/projects/unshift-blog"
                  target="_blank"
                  className="text-uppercase text-white hero-link"
                >
                  <u>Learn More</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PostsList />
      </div>
    </div>
  );
};

export default BlogDashboardPage;
