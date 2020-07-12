import React, { Fragment } from "react";

const Blog = () => {
  return (
    <Fragment>
      <main>
        <div className="innerWrapper">
          <h2>this.blog</h2>
          <div className="blogRoll">
            <div className="blogFirst">
              <h3>
                learning to code: <br />
                first paired project
              </h3>
              <h5>
                This is a part of my journey through Juno College's Web
                Development Bootcamp, Cohort #27, May - July 2020
              </h5>
              {/* <a href="./blog/2020/06/airClear.html"> */}
              <h2>AirClear</h2>
              {/* </a> */}
              <p>
                I was nervous going into a our paired group assignment. After
                being quite confident that I had studied enough beginner
                JavaScript prior to bootcamp, my self-satisfaction had been
                abruptly returned to it's correct position...[read more]
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

export default Blog