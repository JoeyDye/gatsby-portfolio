import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { darken, lighten } from 'polished'
import ThemeWrapper from '../components/ThemeWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import heroImg from '../images/nashville-skyline-compressed.jpg'
import aboutImg from '../images/joey-dye-sf.jpg'
import Project from '../components/Project'
import Form from '../components/Form'
import SEO from '../components/SEO'
import projects from '../data/projects'
import { media } from '../styles/mixins'

library.add(faArrowAltCircleRight, fab)

const Showcase = styled.section`
  padding: 10vw 10vw;
  height: calc(100vh - 88px);
  width: 100%;
  background: linear-gradient(
      150deg,
      ${props => props.theme.colorSecondary} 50%,
      ${props => props.theme.colorPrimary} 50%
    ),
    url(${heroImg});
  background-blend-mode: multiply;

  ${media.phone`
  background: linear-gradient(
      to right,
      ${props => props.theme.colorSecondary} 0,
      ${props => props.theme.colorSecondary} 100%
    ),
    url(${heroImg});
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  `}
`

const ShowcaseContent = styled.div`
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    color: #fff;
    width: 50%;
    line-height: 1.5;

    ${media.phone`width: 100%;`}
  }
`

const HeadingPrimary = styled.h1`
  font-size: 4.209rem;
  line-height: 1;
  color: ${props => props.color};
`

const HeadingSecondary = styled.h2`
  font-size: 50.52px;
  color: ${props => props.color};
  text-align: ${(props: any) => props.position};
`

const Btn = styled.a`
  padding: 7px 15px;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;
  text-transform: uppercase;
  color: #111;
  text-decoration: none;
  transition: all 0.2s linear;

  ${media.phone`
    margin: 0 auto;
  `}

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

const Prefooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  background: ${props => props.theme.colorPrimary};
  padding: 2.5rem;

  ${media.phone`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;

    svg {
      margin-bottom: 1.25rem;
    }
  `}
`

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: #000;

  ${media.phone`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  a {
    align-self: flex-start;
  }

  h2 {
    position: relative;

    span {
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -10px;
        width: calc(100% + 20px);
        z-index: -1;
        height: 40%;
        background: ${props => props.theme.colorPrimary};
        opacity: 0.5;
        transform: skewX(30deg);
      }
    }

    ${media.phone`
    text-align: center;
  `}
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${props => props.theme.defaultPadding} * 2)
    calc(${props => props.theme.defaultPadding} * 1.5);
  height: fit-content;

  ${media.phone`
  padding: ${props => props.theme.defaultPadding} 3rem;
  `};
`

const AboutImg = styled.div`
  display: flex;
  background: center 20% url(${aboutImg});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  min-height: 400px;
`
const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: calc(${props => props.theme.defaultPadding} / 2);
  grid-row-gap: ${props => props.theme.defaultPadding};
  padding: ${props => props.theme.defaultPadding};
  text-align: center;
  background: ${props => props.theme.colorSecondary};

  ${media.phone`
    grid-template-columns: 1fr;
  `}

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
    color: #fff !important;
  }
`

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.defaultPadding};
  color: #f3f3f3;
  position: relative;

  ${media.phone`
    grid-row: 1 / 2;
    padding: 0;
  `}

  ${media.phone`
    position: initial;
  `}

  h2 {
    position: relative;
    line-height: 1;
  }
`

const FormWrapper = styled.div`
  padding: calc(${props => props.theme.defaultPadding});
  background: ${props => props.theme.colorSecondary};
  border: 5px solid ${props => props.theme.colorPrimary};
  width: 40vw;

  ${media.phone`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  `}
`

const GoogleMap = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  margin-bottom: 0;

  ${media.phone`
    position: static;
    height: 350px;
  `}
`

const IndexPage: React.SFC = () => (
  <ThemeWrapper>
    <div>
      <SEO title="Joey Dye | Web Developer" />
      <Header />
      <Showcase>
        <ShowcaseContent>
          <HeadingPrimary color="white">Full Stack Developer</HeadingPrimary>
          <p>
            Nashvile Web Developer with experience in React, Angular, and
            project management.
          </p>
          <Btn href="#about">
            Learn More &nbsp;
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Btn>
        </ShowcaseContent>
      </Showcase>
      <AboutSection id="about">
        <AboutImg />
        <AboutContent>
          <HeadingSecondary className="underline" color="black" position="left">
            <span>About Me</span>
          </HeadingSecondary>
          <p>
            I am a full stack developer located in Nashville. Hire me to build
            your next website or app! I have worked in the advertising and
            marketing industry for more than 4 years, gaining experience in web
            development, project management, inbound marketing, content writing
            and SEO. As a Marketing and Web Development Project Manager, I take
            pride in empowering my project team to deliver the best possible
            work.
          </p>
          <Btn href="#projects">View Projects</Btn>
        </AboutContent>
      </AboutSection>
      <ProjectsSection id="projects">
        <HeadingSecondary color="white" position="center">
          <span>Projects</span>
        </HeadingSecondary>
        {projects.map(project => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            source={project.source}
            demo={project.demo}
            img={project.img}
          />
        ))}
      </ProjectsSection>
      <FormSection id="contact">
        <GoogleMap src={mapUrl} />
        <FormWrapper>
          <HeadingSecondary color="white" position="center">
            Contact Me
          </HeadingSecondary>
          <Form />
        </FormWrapper>
      </FormSection>
      <Prefooter>
        {faIcons.map((iconClass, i) => (
          <FontAwesomeIcon
            key={i}
            icon={['fab', iconClass]}
            color="black"
            size="6x"
          />
        ))}
      </Prefooter>
      <Footer />
    </div>
  </ThemeWrapper>
)

export default IndexPage

const faIcons: Array<string> = [
  'js',
  'css3',
  'html5',
  'react',
  'angular',
  'sass',
]

const mapUrl =
  'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyD9uWFF2vnINFaBF_thHkVNEfurgRc-4Jo &center=-33.9,151.14999999999998&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=1600x500'
