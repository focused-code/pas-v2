import { memo, useState } from "react";
import PropTypes from "prop-types";
import { FirstSection, PageTitle, SecondSection, ThirdSection } from "./styles";
import { Breadcrumbs } from "../breadcrumbs";
import { toJS } from "mobx";
import properties from "../../services/properties";
import { inject, observer } from "mobx-react";
import { ButtonLink } from "../../common/styles";
import { VideoModal } from "../video-modal";

const Overview = inject("properties")(
  observer((props) => {
    const {
      firstSection,
      pageTitle,
      secondSection,
      thirdSection,
      bottomSection,
      saveAdvisor,
    } = props;
    const user = toJS(properties.user);

    const [showStep1Video,setShowStep1Video] = useState(false);
    const [showStep5Video,setShowStep5Video] = useState(false);
    
    const closeStep1VideoModal = () => {
        setShowStep1Video(false);
    };

    const closeStep5VideoModal = () => {
      setShowStep5Video(false);
    };

    const handleSaveAdvisor = (advisor_id) => {
      setTimeout(() => {
        saveAdvisor(user.id, advisor_id);
      }, 100);
    };

    const videos = [
      {
        image: '',
        video:'https://karlbryan.s3.amazonaws.com/lead-generation-strategy-training/lead-generation-intro-2023-06-16.mp4'
      },
      {
        image: '',
        video:'https://karlbryan.s3.amazonaws.com/lead-generation-strategy-training/lead-generation-strategy-training-2023-06-16.mp4'
      }
    ]

    return (
      <div className="d-block overview">
        <div className="p-4 shadowed">
          <h1 className="text-center">YOUR STEP-BY-STEP</h1>
          <h2 className="text-center">LEAD GENERATION TRAINING</h2>
        </div>

        <div className="lg-step d-flex blue p-4 shadowed">
          <div className="text-center w-50 align-self-center">
            <h2>STEP 1</h2>
            <p className="body">
              Watch Our Introduction Video
              <br />
              From Patrick Bell
            </p>
            <ButtonLink
              className={"btn btn-prime"}
              onClick={()=>{
                setShowStep1Video(true)
              }}
            >
              WATCH NOW
            </ButtonLink>
            <VideoModal video={videos[0]} status={showStep1Video} close={closeStep1VideoModal} />
          </div>
          <div className="w-50 text-center align-self-center">
            <div
              style={{
                background:
                  "url('https://focused.com/lead-generation/wp-content/uploads/patrick-bell.jpg')",
                width: "300px",
                height: "300px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                margin: "auto",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </div>

        <div className="text-center p-4 shadowed mb-1 bg-white">
          <div className="lg-step">
            <h2>STEP 2</h2>
            <h3>
                Watch the 4 Lead Generation <br /> Overview Videos
            </h3>
            <p className="py-4">
              After watching each overview, select which lead generation
              strategy resonates most as one you feel you would easily excel in
              and would like to focus on first. Select that option from the left
              hand menu within the Lead Generation section, where you will find
              action steps and supplemental resources to support your efforts
              with this strategy. You may also continue through steps 3 - 5 at
              this time.
            </p>
          </div>

          {secondSection}
        </div>
        <div className="d-flex lg-step p-4 blue shadowed">
          <div className="text-center w-50 align-self-center f-1">
            <h2>STEP 3</h2>
            <p>
              Sign Up for Lead Generation Training with Anton Oliver and Jarvis
              Gray
           <br/>
              In these group calls, Anton and Jarvis will help you become
              confident to get leads in the following areas of focus:
           <br/>
              <b>
                <i className="fa fa-calendar"></i>MONDAYS:
              </b>{" "}
              Networking Scripts (Anton)
           <br/>
              <b>
                <i className="fa fa-calendar"></i>TUESDAYS:
              </b>{" "}
              Joint Ventures (Anton)
           <br/>
              <b>
                <i className="fa fa-calendar"></i>WEDNESDAYS:
              </b>{" "}
              Live Event Training (Jarvis)
           <br/>
              You’ll receive insider secrets to generating leads, have a chance
              to practice your scripts, and examine your lead generation
              strategies.
            </p>
            <ButtonLink
              to={
                "https://us02web.zoom.us/meeting/register/tZ0ucOqgpzwiHtXc-zVuYN_q54Dr_Ii2rHBe#/registration"
              }
              target="_blank"
              className={"btn btn-prime"}
            >
              SIGN UP NOW
            </ButtonLink>
          </div>
          <div className="w-50 text-center align-self-center">
            <img
              width="300"
              height="300"
              src="https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-3-immersion.jpg"
              className="attachment-large size-large"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg-step p-4 shadowed mb-1 bg-white">
          <div className="text-center ">
            <h2>STEP 4</h2>
            <h3>
              Book Your 3 One-On-One Sessions with a Lead Generation Specialist
              In Your Preferred Lead Generation Area (Networking, JV's, Live
              Events)
            </h3>
            <p className="py-4">
              <strong>
                Note: you MUST have completed PAS Software Training, <br/><u>prior</u> to
                booking your lead generation calls.
              </strong>
            </p>
          </div>
          <section className="d-flex lg-step">
            <section className="w-50 text-center">
              <img
                width="200"
                src="https://focused.com/lead-generation/wp-content/uploads/roleplay-specialist-anton-oliver.png"
                className="attachment-large size-large"
                alt=""
                loading="lazy"
              />
              <h5>
                <b>Anton Oliver</b>
              </h5>
              <p>
                <em>Networking / JV's - Lead Generation Specialist</em>
              </p>
              <ButtonLink
                to={"https://calendly.com/oliveranton/lead-generation-coaching"}
                target="_blank"
                className={"btn btn-prime"}
                onClick={() => {
                  handleSaveAdvisor(302);
                }}
              >
                BOOK NOW
              </ButtonLink>
              <p className="text-left px-4 mb-0">
                Anton has been part of Focused.com for almost six years, and is
                currently a PAS trainer for level 3 as a role-play specialist.
                Having the experience and understanding of the challenges
                coaches face everyday, his goal is to help you understand and
                utilize the resources available to you. You will learn how to
                use 4 key strategies effectively to generate quality leads
                consistently.
                <br />
                <br />
                These are the same strategies that helped Anton recently be
                awarded the SME UK Enterprise Awards 2022 for The Strategic
                Marketing Coach of the year 2022.
              </p>
            </section>
            <section className="w-50 text-center">
              <img
                width="200"
                src="https://focused.com/lead-generation/wp-content/uploads/jarvis-gray.png"
                className="attachment-large size-large"
                alt=""
                loading="lazy"
              />
              <h5>
                <b>Jarvis T. Gray</b>
              </h5>
              <p>
                <em>Live Events - Lead Generation Specialist</em>
              </p>
              <ButtonLink
                to={
                  "https://calendly.com/theqcc-jarvisgray/live-event-strategy-session"
                }
                target="_blank"
                className={"btn btn-prime"}
                onClick={() => {
                  handleSaveAdvisor(1431);
                }}
              >
                BOOK NOW
              </ButtonLink>
              <p className="text-left px-4 mb-0">
                Jarvis brings nearly 20 years of strategic planning, process
                improvement, and business coaching leadership experience to
                Focused.com. Jarvis has been a reliable partner with highly
                notable organizations across healthcare, utility, and small
                business industries; earning a reputation as a go-to resource
                for facilitating strategy sessions, training workshops and group
                events. Jarvis has a passion for guiding business leaders in the
                fundamentals of business and operational excellence; his
                effectiveness in directly coaching executives on business growth
                principles has generated $10.6M+ in new revenue opportunities
                for his small business clients in 2022 alone. When he is not
                coaching leaders, he can be found constantly developing content,
                providing training, and/or organizing networking events that
                promote the foundations for building a world-class organization.
              </p>
            </section>
            <section></section>
          </section>
        </div>
        <div className="lg-step d-flex blue p-4 shadowed">
        <div className="text-center w-50 align-self-center">
            <h2>STEP 5</h2>
            <h3>
                Watch Our Lead Generation <br />
                Mindset Training
            </h3>
            <ButtonLink 
              className={"btn btn-prime"}
              onClick={()=>{
                setShowStep5Video(true)
              }}
            >
              WATCH NOW
            </ButtonLink>
            <VideoModal video={videos[1]} status={showStep5Video} close={closeStep5VideoModal} />
          </div>
          <div className="w-50 align-self-center text-center">
            <img
              width="300"
              height="300"
              src="https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-1.jpg"
              className="attachment-large size-large"
              alt=""
              loading="lazy"
              srcSet="https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-1.jpg 1000w, https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-1-300x300.jpg 300w, https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-1-150x150.jpg 150w, https://focused.com/lead-generation/wp-content/uploads/lead-gen-training-step-1-768x768.jpg 768w"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
          
        </div>
        <div className="lg-step pt-5 p-4 shadowed bg-white">
          <div className={"mt-1"}></div>
          <h1 className="quote py-0 px-4 pt-4">“</h1>
          <blockquote className="px-4 py-0 mb-0">
            <p className="mb-0">
              <i>
                I met Anton Oliver through attending the Immersion Training Zoom
                meetings. In those meetings he always provides really clear and
                concise direction for everyone that needs help figuring out what
                to do next, etc. Because of that experience, I booked a call
                with him so he could help me with my marketing message. In a
                very short amount of time, he was able to help me create a
                message that was really effective and perfect for me. The first
                time I used it at a networking event someone booked time with
                me. They are a small business lender and have now decided to
                form a joint venture with me and send their clients to me for a
                free assessment before a loan is made. Anyone in this business
                can benefit from getting direction from Anton, whether through
                the Immersion Training that he runs or through booking a call
                with him.
              </i>
              <br />
              <br />
              <b>Carlyle Cain</b>
            </p>
          </blockquote>
        </div>
        <div className="lg-step p-4 dark-blue text-center text-white">
          <h1 className="capitalize">Already completed your 3 Lead Generation Calls?</h1>

          <p className="f-1">You can purchase an additional 3 calls here:</p>

          <ButtonLink
            to={
              "https://leaderpublishingworldwide.chargeover.com/r/signup/svhjfz0w89rp/a98150f8a91b?currency=USD"
            }
            target="_blank"
            className={"btn btn-prime"}
          >
            BUY NOW
          </ButtonLink>
        </div>
      </div>
    );
  })
);

export default memo(Overview);

Text.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  firstSection: PropTypes.element,
};
