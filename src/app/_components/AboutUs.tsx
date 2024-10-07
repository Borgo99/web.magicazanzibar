import React from "react";
import styles from "../_styles/components.module.css";
import BookButton from "./BookButton";
import Socials from "./Socials";

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <h1>Why Choose Us</h1>
      <p>
        Enjoy a personalized experience in <b>intimate groups</b>, ensuring you
        get the most out of your tour.
      </p>
      <p>
        We are committed to <b>sustainable tourism</b> practices that benefit
        local communities and preserve cultural heritage.
      </p>
      <Socials />
      <div>
        <BookButton text="Contact us" />
      </div>
    </div>
  );
};

export default AboutUs;
