import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import AOS from "aos";
import TeamIllustrationSrc from "images/codetoschool.JPG";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import "./Typing.scss";
const Container = tw.div`relative bg-gray-900 -m-8`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between left-0 max-w-screen-xl mx-8 py-20 md:py-24 items-center px-10 xl:px-0`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-blue-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-500`;
const Heading = tw(
  SectionHeading
)`md:text-left text-white mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const AboutC2S = ({
  subheading = "An Initiative by D_CODER",
  heading = <h1 className="typing-h1 typing">Code To School</h1>,
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) => {
  const defaultFeatures = [];
  AOS.init({
    duration: 1000,
  });
  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn
        style={{
          marginTop: "32px",
          margin: "auto",
        }}
      >
        <ImageColumn>
          <div data-aos="fade-up">
            <Image
              src={imageSrc}
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
              style={{
                boxShadow: "10px 10px 5px -3px #000",
                webkitBoxShadow: "10px 10px 5px -3px #000",
                borderRadius: "15px",
              }}
            />
          </div>
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>
              <ul>
                <li>
                  CODE TO SCHOOL is an initiative by D_CODER that helps budding
                  programmers gain fluency in programming. It aims to assist
                  school students to design, create and express themselves
                  through digital technologies.
                </li>
                <br />
                <li>
                  Our members of D_CODER put in their efforts to teach and
                  educate school students about the importance of technical
                  innovation and how the students can think to innovate in the
                  future.
                </li>
                <br />
                <li>
                  Since coding is today???s language of creativity, the school
                  students were taught programming by our team members which
                  gave the students an opportunity to understand how beautiful
                  the world of coding is. They got a chance to become creators
                  instead of consumers of computer science.
                </li>
              </ul>
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default AboutC2S;
