import React from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="shane_tm_all_wrap">
      <Header />

      <div className="shane_tm_hero_case_study" id="privacy-policy-home">
        <div></div>
        <div className="container">
          <div>
            <div>
              <Link to="/" className="back_button">
                ← BACK
              </Link>
            </div>
          </div>
          <div className="content">
            <div
              className="shane_tm_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="container">
          <div
            className="hero_description"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "60px",
              }}
            >
              Last Updated:{" "}
              <span className="timeline-fine">10 August 2025</span>
            </p>
          </div>
        </div>
      </div>

      <div className="shane_tm_section">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="right" style={{ width: "100%" }}>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Overview</h3>
                  <p>
                    This Privacy Policy describes how your personal information
                    is collected, used, and shared when you visit this portfolio
                    website (the "Site").
                  </p>
                  <p>
                    This is my professional portfolio website, used to present
                    my skills and experience.
                  </p>

                  <h3>Responsible for this website:</h3>
                  <p>
                    Kalina Iwaszko Rupprechtstr. 28 10317 Berlin, Germany 📧
                    kalina.iwaszko@gmail.com
                  </p>

                  <h3>1. Hosting & Deployment</h3>
                  <p>
                    This site is hosted and deployed via Netlify. When you visit
                    this website, technical data (such as your IP address,
                    browser type, operating system, referrer URL, and access
                    time) is automatically transmitted to Netlify's servers.
                    Netlify may store and process these data in accordance with
                    their own Privacy Policy.
                  </p>

                  <h3>2. Personal Information I Collect</h3>
                  <p>
                    When you visit the Site, I automatically collect certain
                    information about your device, including information about
                    your web browser, IP address, time zone, and some of the
                    cookies installed on your device.
                  </p>
                  <p>
                    Additionally, as you browse the Site, I collect information
                    about the individual pages you view, what websites or search
                    terms referred you, and how you interact with the Site. This
                    automatically-collected information is referred to as
                    "Device Information."
                  </p>

                  <h3>3. Cookies & Analytics</h3>
                  <p>
                    To better understand how visitors interact with this site
                    and to gain marketing insights, cookies and analytics tools
                    may be used. These may store anonymous information such as
                    pages visited, time spent on pages, and general geographic
                    region. I may also use Device Information to screen for
                    potential risk and fraud, and to improve and optimize my
                    Site.
                  </p>
                  <p>
                    By continuing to browse this site, you consent to the use of
                    such cookies and tracking technologies.
                  </p>

                  <h3>4. Google Fonts</h3>
                  <p>
                    This website uses Google Fonts for improved typography. When
                    loading a page, your browser requests the required fonts
                    from Google's servers, which may process your IP address.
                    For details, see Google's Privacy Policy.
                  </p>

                  <h3>5. Contact Form Information</h3>
                  <p>
                    When you submit the contact form, the following personal
                    data will be collected:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Message content</li>
                  </ul>
                  <p>
                    This data is transmitted via Netlify Forms and forwarded to
                    my Gmail account. It will be used solely to respond to your
                    inquiry, kept only as long as necessary for that purpose,
                    and deleted when no longer relevant or upon request.
                  </p>

                  <h3>6. Sharing Your Information</h3>
                  <p>
                    I do not share your personal information with third parties
                    except as described in this Privacy Policy or with your
                    permission. I may share your information to comply with
                    applicable laws, respond to lawful requests, or protect my
                    rights.
                  </p>

                  <h3>7. Data Retention</h3>
                  <p>
                    Information submitted through the contact form will be
                    stored only as long as it is relevant or until you request
                    its deletion.
                  </p>

                  <h3>8. Your Rights</h3>
                  <p>Under GDPR, you have the right to:</p>
                  <ul>
                    <li>Request information about stored data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to the processing of your data</li>
                  </ul>
                  <p>
                    You can exercise these rights by contacting me at{" "}
                    <a href="mailto:kalina.iwaszko@gmail.com">
                      kalina.iwaszko@gmail.com
                    </a>
                    .
                  </p>

                  <h3>9. Changes</h3>
                  <p>
                    I may update this Privacy Policy from time to time to
                    reflect changes to my practices or for legal and regulatory
                    reasons.
                  </p>

                  {/* German Version */}
                  <div
                    className="german-version"
                    style={{
                      marginTop: "80px",
                      paddingTop: "40px",
                      borderTop: "1px solid #eee",
                    }}
                  >
                    <h2>Datenschutzerklärung</h2>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "14px",
                        marginBottom: "30px",
                      }}
                    >
                      Aktualisiert am: 10. August 2025
                    </p>

                    <h3>Überblick</h3>
                    <p>
                      Diese Datenschutzerklärung beschreibt, wie Ihre
                      personenbezogenen Daten erfasst, verwendet und
                      weitergegeben werden, wenn Sie diese Portfolio-Website
                      (die „Website") besuchen.
                    </p>
                    <p>
                      Dies ist meine professionelle Portfolio-Website, die dazu
                      dient, meine Fähigkeiten und Erfahrungen zu präsentieren.
                    </p>

                    <h3>Verantwortlich für diese Website:</h3>
                    <p>
                      Kalina Iwaszko Rupprechtstr. 28 10317 Berlin, Deutschland
                      📧 kalina.iwaszko@gmail.com
                    </p>

                    <h3>1. Hosting & Bereitstellung</h3>
                    <p>
                      Diese Website wird über Netlify gehostet und
                      bereitgestellt. Beim Besuch dieser Website werden
                      automatisch technische Daten (z. B. IP-Adresse,
                      Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeit) an
                      die Server von Netlify übermittelt. Netlify kann diese
                      Daten gemäß seiner eigenen Datenschutzerklärung speichern
                      und verarbeiten.
                    </p>

                    <h3>2. Erhobene personenbezogene Daten</h3>
                    <p>
                      Beim Besuch der Website werden automatisch bestimmte
                      Informationen über Ihr Gerät erfasst, einschließlich
                      Informationen zu Ihrem Webbrowser, Ihrer IP-Adresse, Ihrer
                      Zeitzone und einigen der auf Ihrem Gerät installierten
                      Cookies.
                    </p>
                    <p>
                      Zusätzlich werden beim Durchsuchen der Website
                      Informationen zu den einzelnen von Ihnen besuchten Seiten,
                      den Websites oder Suchbegriffen, die Sie auf die Website
                      geführt haben, sowie zu Ihrer Interaktion mit der Website
                      erfasst. Diese automatisch erhobenen Informationen werden
                      als „Geräteinformationen" bezeichnet.
                    </p>

                    <h3>3. Cookies & Analyse</h3>
                    <p>
                      Um besser zu verstehen, wie Besucher mit dieser Website
                      interagieren und um Marketing-Einblicke zu gewinnen,
                      werden Cookies und Analysetools eingesetzt. Diese können
                      anonyme Informationen speichern, wie z. B. besuchte
                      Seiten, Verweildauer und allgemeine geografische Region.
                      Geräteinformationen können auch verwendet werden, um
                      potenzielle Risiken und Betrug zu erkennen sowie die
                      Website zu verbessern und zu optimieren.
                    </p>
                    <p>
                      Durch die weitere Nutzung dieser Website stimmen Sie der
                      Verwendung solcher Cookies und Tracking-Technologien zu.
                    </p>

                    <h3>4. Google Fonts</h3>
                    <p>
                      Zur Verbesserung der Typografie nutzt diese Website Google
                      Fonts. Beim Aufruf einer Seite lädt Ihr Browser die
                      erforderlichen Schriftarten von den Servern von Google,
                      wobei Ihre IP-Adresse verarbeitet werden kann. Weitere
                      Informationen finden Sie in der Datenschutzerklärung von
                      Google.
                    </p>

                    <h3>5. Kontaktformular</h3>
                    <p>
                      Wenn Sie das Kontaktformular verwenden, werden folgende
                      personenbezogene Daten erhoben:
                    </p>
                    <ul>
                      <li>Name</li>
                      <li>E-Mail-Adresse</li>
                      <li>Inhalt der Nachricht</li>
                    </ul>
                    <p>
                      Diese Daten werden über Netlify Forms übertragen und an
                      mein Gmail-Konto weitergeleitet. Sie werden ausschließlich
                      zum Zweck der Beantwortung Ihrer Anfrage verwendet, nur so
                      lange wie notwendig gespeichert und gelöscht, wenn sie
                      nicht mehr relevant sind oder auf Ihre Anfrage hin.
                    </p>

                    <h3>6. Weitergabe Ihrer Daten</h3>
                    <p>
                      Ich gebe Ihre personenbezogenen Daten nicht an Dritte
                      weiter, außer wie in dieser Datenschutzerklärung
                      beschrieben oder mit Ihrer Einwilligung. Eine Weitergabe
                      kann erfolgen, um geltende Gesetze einzuhalten, auf
                      rechtmäßige Anfragen zu reagieren oder meine Rechte zu
                      schützen.
                    </p>

                    <h3>7. Speicherdauer</h3>
                    <p>
                      Über das Kontaktformular übermittelte Informationen werden
                      nur so lange gespeichert, wie sie relevant sind, oder bis
                      Sie deren Löschung verlangen.
                    </p>

                    <h3>8. Ihre Rechte</h3>
                    <p>Gemäß DSGVO haben Sie das Recht:</p>
                    <ul>
                      <li>Auskunft über gespeicherte Daten zu erhalten</li>
                      <li>Berichtigung unrichtiger Daten zu verlangen</li>
                      <li>Löschung Ihrer Daten zu beantragen</li>
                      <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
                    </ul>
                    <p>
                      Zur Ausübung dieser Rechte können Sie mich jederzeit unter{" "}
                      <a href="mailto:kalina.iwaszko@gmail.com">
                        kalina.iwaszko@gmail.com
                      </a>{" "}
                      kontaktieren.
                    </p>

                    <h3>9. Änderungen</h3>
                    <p>
                      Ich kann diese Datenschutzerklärung von Zeit zu Zeit
                      aktualisieren, um Änderungen meiner Verfahren oder aus
                      rechtlichen bzw. regulatorischen Gründen zu
                      berücksichtigen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
