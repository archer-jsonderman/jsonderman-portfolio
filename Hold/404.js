import React from "react";
import Contact from "components/contact";
import Header from "components/header";
import Footer from "components/footer";

const NotFoundPage = () => {
    return(
      <>
        <Header/>
          <div>
            <main>
              <div className="site-container">
                <section className="container" id="error">
                  <div className="site-container not-found-page">
                    <div className="container text-center">
                      <h1>NOT FOUND</h1>
                      <p>You just hit a route that doesn't exist... the sadness.</p>
                    </div>
                  </div>
                  <Contact/>
                </section>
              </div>
            </main>
          </div>
        <Footer/>
      </>
    );
  }

export default NotFoundPage;
