import React from "react";
import styles from "../_styles/components.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <p>Check our reviews: </p>
      <a
        target={"_blank"}
        href="https://www.tripadvisor.co.uk/Attraction_Review-g482884-d23183731-Reviews-MAGICA_ZANZIBAR-Zanzibar_Island_Zanzibar_Archipelago.html"
      >
        <img src="/tripadvisor.png" alt="Tripadvisor Reviews" width={200} />
      </a>
      <a
        target={"_blank"}
        href="https://www.google.com/search?sa=X&sca_esv=6449538529ffda2f&tbm=lcl&sxsrf=ADLYWIJWTe_b_Fmg1SmFBR5KJBGkvD-Jcg:1728136108171&q=MAGICA+ZANZIBAR+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2sDAyMTMysDSxMLE0tLQwsTAz2MDI-IpR3NfR3dPZUSHK0S_K08kxSCEotSwztbx4ESsuGQBTE5kATgAAAA&rldimm=8824620948491984860&hl=en-IT&ved=2ahUKEwj-l-fWsPeIAxWL6wIHHVpqBIsQ9fQKegQIPRAF&biw=1440&bih=678&dpr=2#lkt=LocalPoiReviews"
      >
        <img src="/google.png" alt="Google Reviews" width={200} />
      </a>
    </div>
  );
};

export default Socials;
