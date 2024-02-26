
import styles from "./Location.module.css";
import image from "../../assets/landingbg.png";
import { Footer } from "../../components/footer/Footer";
import { Email, Fax, Msg } from "./svg.tsx";
import { Navbars } from "../../components/navbar/Navbar.tsx";
type Props = {};

export const Locations = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
  <Navbars />
      <div>
        <img src={image} alt="" />
        <h1>Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7385437942385!2d76.22204117573409!3d10.521247363847355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef88b15ff21f%3A0xa8d9a1903c6873c3!2sThomson&#39;s%20Casa!5e0!3m2!1sen!2sin!4v1708967919303!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1>What would you like to know?</h1>
        <div className={styles.Container}>
          <div>
            <h3>
              Morbi accumsan ipsum velit. Nam nec tellus. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin.
            </h3>
            <p>
              Auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt odio
              sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan.
            </p>
          </div>
          <div>
            <div>
              <input type="text" placeholder="Your NAme" />
              <input type="text" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" placeholder="Message"></textarea>
            <button>Send a Message</button>
          </div>
          <div>
            <a href="mailto:noreply@envato.com">
              <Email />
              <div>
                <h2>noreply@envato.com</h2>
                <p>Have any questions?</p>
              </div>
            </a>
            <a href="tel:+61 (0) 3 8376 6284">
              {" "}
              <Msg />
              <div>
                <h2>+61 (0) 3 8376 6284</h2>
                <p>Call us</p>
              </div>
            </a>
            <a href="">
              {" "}
              <Fax />
              <div>
                <h2>+61 (0) 3 8376 6284</h2>
                <p>Fax</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
