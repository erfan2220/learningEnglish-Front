import React from "react";
import Layout from "../Layout/Layout";

const ContactUs = () => {
  return (
    <div className="p-2 pt-6 md:p-12 max-w-[1320px] mx-auto">
      {/* ====================header section==================== */}

      <div className="mt-[60px] ">
        <h1 className="text-[#45444A] text-2xl sm:text-3xl font-bold">
          Contact Us
        </h1>
        <Layout marginTop="mt-8">
          <div className="p-6 sm:p-12 sm:pt-8 text-sm sm:text-base text-[#5C5A60] leading-[30px]">
            <p className="mb-4">
              We’re always excited to hear from you! At <b>FluentDoor</b>, our
              goal is to make language learning engaging, effective, and
              personalized. Whether you’re a student looking to improve your
              skills, a teacher wanting to collaborate, or just have a question
              about our services, our team is here to help.
            </p>
            <h4 className="text-[#45444A] text-base sm:text-xl font-bold mt-6 mb-1">
              How to Reach Us:
            </h4>
            <ul className="list-disc px-4">
              <li >
                <b>Email: </b>
                <u>abriliantteacher19@gmail.com</u>
              </li>
              <li >
                <b>Phone: </b>
                <u>+98 912 222 2222</u>
              </li>
              <li >
                <b>Telegram: </b>
                <u>
                  <a href="https://t.me/English_tutor" target="_blank">
                    @English_tutor
                  </a>
                </u>
              </li>
            </ul>
              <h4 className="text-[#45444A] text-base sm:text-xl font-bold mt-6 mb-1">What You Can Contact Us About:</h4>
            <ul className="list-disc pl-4">
              <li>
                <b>General Inquiries: </b> Any questions about our platform,
                courses, or features.
              </li>
              <li>
                <b>Support: </b> Experiencing technical issues or need help
                navigating your account.
              </li>
              <li>
                <b>Collaboration & Partnerships: </b> Interested in becoming a
                tutor or partnering with us.
              </li>
              <li>
                <b>Feedback & Suggestions: </b> Your thoughts help us improve
                and create better learning experiences.
              </li>
            </ul>
            <p className="mt-2">
              Our team strives to respond to every inquiry within 24 hours. We
              value every message and look forward to helping you achieve your
              language learning goals.
            </p>
            <h4 className="text-[#45444A] text-base sm:text-xl font-bold mt-6 mb-1">
              Stay Connected:
            </h4>
            <p>
              Follow us on social media and subscribe to our newsletter for the
              latest updates, tips, and learning resources. Your journey to
              becoming a confident language learner starts here!
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default ContactUs;
