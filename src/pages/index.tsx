import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Projects from '../components/Projects'
import Carousel from '../components/Carousel'
import Form from '../components/Form'
import Layout from '../components/Layout'
import {
  GoogleMap,
  FormWrapper,
  FormSection,
  Grid3Col,
  AboutImg,
  AboutContent,
  AboutSection,
  Prefooter,
  Btn,
  ShowcaseContent,
  Showcase,
  ReadMoreBtn,
} from '../elements'
import { colorSecondary } from '../utilities'

library.add(faArrowAltCircleRight, fab)

const indexPaige: React.SFC = () => (
  <>
    <Layout>
      <div>
        <Showcase>
          <ShowcaseContent>
            <h1>Full Stack Developer</h1>
            <p>
              Nashvile Web Developer with experience in React, Angular, and
              project management.
            </p>
            <Btn mr="0" href="#about">
              Learn More &nbsp;
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Btn>
          </ShowcaseContent>
        </Showcase>
        <AboutSection id="about">
          <AboutImg />
          <AboutContent>
            <h2 className="underline">
              <span>About Me</span>
            </h2>
            <p>
              I am a full stack developer located in Nashville. Hire me to build
              your next website or app! I have worked in the advertising and
              marketing industry for more than 4 years, gaining experience in
              web development, project management, inbound marketing, content
              writing and SEO. As a Marketing and Web Development Project
              Manager, I take pride in empowering my project team to deliver the
              best possible work.
            </p>
            <Btn mr="0" href="#projects">
              View Projects
            </Btn>
          </AboutContent>
        </AboutSection>
        <Grid3Col rowGap="4" color={colorSecondary} id="projects">
          <h2>Projects</h2>
          <Projects />
        </Grid3Col>
        <Grid3Col rowGap="2" imgHeight="250px" color="#f7f7f7">
          <h2>Blog</h2>
          <Carousel />
          <ReadMoreBtn
            style={{
              margin: '0 auto',
              gridColumn: '1 / -1',
              textDecoration: 'none',
            }}
            to="/blog"
          >
            Read More
          </ReadMoreBtn>
        </Grid3Col>
        <FormSection id="contact">
          <GoogleMap src={mapUrl} />
          <FormWrapper>
            <h2>Contact Me</h2>
            <Form />
          </FormWrapper>
        </FormSection>
        <Prefooter>
          {faIcons.map((iconClass, i) => (
            <FontAwesomeIcon
              className="prefooter__icon"
              key={i}
              icon={['fab', iconClass]}
              color="black"
              size="6x"
            />
          ))}
        </Prefooter>
      </div>
    </Layout>
  </>
)

export default indexPaige

const faIcons: any = ['js', 'css3', 'html5', 'react', 'angular', 'sass']

const mapUrl =
  'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyD9uWFF2vnINFaBF_thHkVNEfurgRc-4Jo &center=-33.9,151.14999999999998&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=1600x500'
