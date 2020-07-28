import React, { Fragment } from "react";

const AirClearBlog = () => {
  return (
    <Fragment>
      <main>
        <div class="innerWrapper">
          <h4>AirClear</h4>
          <p>
            I was nervous going into a our paired group assignment. After being
            quite confident that I had studied enough beginner JavaScript prior
            to bootcamp, my self-satisfaction had been abruptly returned to it's
            correct position, as I tried to soak up enough jQuery that week to
            put together a decent project. I didn't learn enough, so I was
            feeling a little behind as our partnerships were announced.
          </p>
          <p>
            I had not spoken to Oksana much - maybe not at all - in the last
            four weeks of bootcamp, but it did not take long to realize she
            meant business. Straight away we were bouncing ideas back and forth,
            narrowing down results by testing APIs, setting up a framework, and
            planning our goals.
          </p>
          <p>
            Project 4 would rely on API's for the content in our app. We had
            decided to get scientific and serve the user live information on the
            air quality around them. Ideally, we would use a map (our stretch
            goal), allowing the user to click through locations and receive
            relevant air quality data.
          </p>
          <p>
            We were getting good early results from AirVisual (IQAir), and
            thought "hey, why <em>not</em> attempt the map then?" This decision
            would send us down a path of no return.
          </p>
          <div class="imgBlock">
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-5.png"
                title="With the AirClear API we could make up to 10,000 calls per month, and the ability to use city names or coordinates - this was key to using maps"
                alt="With the AirClear API we could make up to 10,000 calls per month, and the ability to use city names or coordinates - this was key to using maps"
              />
              <figcaption>
                The AirClear API allowed the use of city names or coordinates in
                a call.
              </figcaption>
            </figure>
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-6-openStreetMaps.jpg"
                title="we would be using openStreetMaps 'tiles' so the map would look like this"
                alt="we would be using openStreetMaps 'tiles' so the map would look like this"
              />
              <figcaption>
                And OpenStreetMaps 'tiles' would be the map base
              </figcaption>
            </figure>
          </div>
          <p>The plan was this:</p>
          <ol>
            <li>
              On page load, serve up a map with provinces that a user can click
              on for more information
            </li>
            <li>
              OnClick of province, send an API call to AirVisual; receiving back
              location data of the sensors in that province
            </li>
            <li>Display those sensor locations on a map layer</li>
            <li>
              Allow a user to click on a sensor location; receive back relevant
              data
            </li>
          </ol>
          <p>-- easy peasy!</p>
          <br />
          <p>
            It was now Saturday morning, and we had discovered late Friday that
            mapQuest was not exactly the easiest API to work with for displaying
            an interactive map. I felt I had <em>some</em> time to look into
            alternatives before we would have to leave maps alone and work on
            the core product.
          </p>
          <p>In steps Leaflet</p>
          <h4>What is Leaflet?</h4>
          <p>
            <a href="https://leafletjs.com/" target="_blank">
              Leaflet
            </a>{" "}
            is basically an openSource JavaScript library that allows
            integration of advanced features onto a map of your choosing. The
            docs are robust, and there are plenty of developers putting content
            on Youtube to help get you up and running.
          </p>
          <p>
            First things first - we gotta install. Check out the following code
            block for where the stylesheet and script tags are placed.
          </p>
          <div class="codeBlock">
            <figure>
              <p
                class="codepen"
                data-height="265"
                data-theme-id="dark"
                data-default-tab="html"
                data-user="michacurri"
                data-slug-hash="VweMaMo"
                style="
                  height: 265px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
                data-pen-title="leaflet-scripts"
              >
                <span>
                  See the Pen
                  <a href="https://codepen.io/michacurri/pen/VweMaMo">
                    leaflet-scripts
                  </a>
                  by michacurri (
                  <a href="https://codepen.io/michacurri">@michacurri</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </span>
              </p>
              <figcaption>
                Leaflet installs it's package as two components: the first is a
                stylesheet; the second a JavaScript library. Remember, if you're
                using jQuery, load the Leaflet script
                <strong>below jQuery</strong>, and
                <strong>above your app.js</strong>.
              </figcaption>
            </figure>
          </div>
          <p>
            Now we can initialize the map in our JavaScript. We can set the
            initial view on particular coordinates, [60, -95] and at a zoom
            level of (4)
          </p>
          <p>
            It is then necessary to add a <strong>tileLayer</strong> onto the
            Leaflet Map. See how the url is written? A tile is simply an image
            (.png), usually 256px x 256px, that is literally a piece of the
            World map. Think about how you see blocks loading as you move around
            a map, or zoom in and out. I wonder how many tiles it would take to
            cover Toronto?
          </p>
          <p>
            This URL allows leaflet to pass coordinates to OpenStreetMaps and
            receive back a tile that will be placed on our screen. Then, it
            repeats this process until our view is filled.
          </p>
          <div class="codeBlock">
            <figure>
              <p
                class="codepen"
                data-height="265"
                data-theme-id="dark"
                data-default-tab="js"
                data-user="michacurri"
                data-slug-hash="QWyqNgv"
                style="
                  height: 265px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
                data-pen-title="leaflet-example"
              >
                <span>
                  See the Pen
                  <a href="https://codepen.io/michacurri/pen/QWyqNgv">
                    leaflet-example
                  </a>
                  by michacurri (
                  <a href="https://codepen.io/michacurri">@michacurri</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </span>
              </p>
              <figcaption>
                In app.js we can place this small block of code to initialize
                the map on with particular coordinates [60, -95] and zoom (4).
                As well, We must provide attribution to OpenStreetMaps (or the
                service you decide upon) as those are the terms of use.
              </figcaption>
            </figure>
          </div>
          <h4>Map Layers and GeoJSON data</h4>
          <p>
            Now this is where things got a little complicated. If you're keeping
            track, we haven't left step 1 yet.
          </p>
          <p>
            We knew from Leaflet documentation that everything was a layer:
            markers, labels, etc. If only we could utilize
            <em>something</em> that could separate each province into clickable
            pieces that could return a value, that we could pass to the
            AirVisual API, to return the sensor locations, so that we can place
            markers back on the map!
          </p>
          <p>
            That's where we fell down a deep dark hole into GeoJSON and
            shapefiles... I'm not sure we have time for that here, but for a
            Cole's Notes version, here was the process:
          </p>
          <ol>
            <li>
              <a
                href="https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2016-eng.cfm"
                target="_blank"
              >
                Use the Canadian Government Census website
              </a>
              to get a boundary file in .shp format
            </li>
            <li>
              Convert your (zipped) shapefile into GeoJSON using a converter
              like
              <a href="https://ogre.adc4gis.com/">Ogre</a>, or
              <a href="https://2geojson.com/" target="_blank">
                2GeoJSON
              </a>
            </li>
            <li>
              Reduce the size of the file for web applications (Ours was over
              500 MB)
            </li>
            <li>Place your new geoJSON (.json format) into your project</li>
          </ol>
          <h5>The Result</h5>
          <p>
            Our journey was a tough one. With just one week to complete a
            project like this start to finish we did not get much sleep.
            However, learning how JS libraries like Leaflet can be implemented
            into a project; how GeoJSON and shapefiles can bring additional
            functionality and user experience to an application; and especially
            how having a partner to pick up the slack and keep us both moving
            forward can be a lifesaver.
          </p>
          <div class="imgBlock">
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-1.png"
                alt="AirClear air quality application landing page with loaded GeoJSON layer"
              />
              <figcaption>
                The landing page with loaded GeoJSON layer
              </figcaption>
            </figure>
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-2.png"
                alt="AirClear air quality application in action - Zooming in to provincial level"
              />
              <figcaption>Zooming in to provincial level</figcaption>
            </figure>
          </div>
          <div class="imgBlock">
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-3.png"
                alt="AirClear air quality application in action - finding sensor location data from provincial boundary onClick events"
              />
              <figcaption>
                Clicking anywhere within the provincial boundary ith activate
                the onClick, sending a request to the API for that province's
                sensor locations
              </figcaption>
            </figure>
            <figure>
              <img
                src="../../../../assets/images/blog/AirClear/airclear-4.png"
                alt="AirClear air quality application in action"
              />
              <figcaption>
                After clicking on a particular marker that is populated after
                the API call, a second API call is made for the data from that
                sensor. It is then displayed in an Aside
              </figcaption>
            </figure>
          </div>

          <h5>See it in action</h5>
          <p>
            You can find our project live at
            <a href="https://airclear.netlify.app/" target="_blank">
              AirClear App
            </a>
          </p>
          <p>
            You can find
            <a href="https://github.com/OksanaSam" target="_blank">
              Oksana on Github
            </a>
          </p>
          <p>
            And you can find
            <a href="https://github.com/michacurri" target="_blank">
              me on Github
            </a>
          </p>

          <h4>Further Reading</h4>
          <p>
            For information on
            <a href="https://leafletjs.com/" target="_blank">
              Leaflet
            </a>
          </p>
          <p>
            For more in-depth reading on this topic I suggest
            <a
              href="https://medium.com/@sumit.arora/what-is-geojson-geojson-basics-visualize-geojson-open-geojson-using-qgis-open-geojson-3432039e336d"
              target="_blank"
            >
              this article on Medium.com
            </a>
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default AirClearBlog;
