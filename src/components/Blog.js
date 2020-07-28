import React, { Fragment } from "react";

import blogAirClear from './blog/AirClearBlog'

const Blog = () => {
  return (
    <Fragment>
      <main className="blogBackground">
        <div className="innerWrapper">
          <h3>this.blog</h3>
          <div className="blogRoll">
            <div className="blogFirst">
            <a href={blogAirClear}  />             
            <h2>AirClear</h2>
              {/* <h3>
                learning to code: <br />
                first paired project
              </h4> */}
              <h5>
                This is a part of my journey through Juno College's Web
                Development Bootcamp, Cohort #27, May - July 2020
              </h5>
              <p>
                "I was nervous going into a our paired group assignment.
                Studying JavaScript fundamentals for six weeks prior to bootcamp
                left me feeling quite confident, but my self-satisfaction was about to be
                abruptly returned to it's correct position...[
                <a href={blogAirClear}>read more</a>]"
              </p>
              {/* <!-- end Div --> */}
            </div>
            {/* <!-- end Div --> */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Blog;
