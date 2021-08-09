import './App.scss'

// IMPORT Components
import Header from './components/Header/Header'

function App() {
  return (
    <div className="Mirza">
      <Header/>

      {/* Hero Section */}
      <section className="hero">
        {/* Foreground */}
        <div className="foreground">

        {/* Splits */}
          {/* LEFT */}
          <div className="left  border">
            <div className="border hi">Hi</div>
            <div className="border intro">Intro</div>
            <div className="border social">Social</div>
            <div className="border cta">CTA</div>
          </div>
          
          {/* RIGhT */}
          <div className="right border">
              <div className="border hero-image">Hero Image</div>
            </div>
          </div>

        {/* Foreground */}
        <div className="background"></div>
      </section>

      <section className="feature-images">
        <div className="image-strip">
          <div className="border image"></div>
          <div className="border image"></div>
          <div className="border image"></div>
        </div>
      </section>
      <section className="fashion-meets-design-i">
        <div className="text-content border">Lorem ipsum dolor sit.</div>
      </section>
      <section className="fashion">
        <div className="border left">Left</div>
        <div className="border right">Left</div>
      </section>
      <section className="design">design</section>
      <section className="fashion-meets-design-ii">fashion-meets-design-ii</section>
      <section className="bio-brief">bio-brief</section>
      <section className="mirza-gallery">mirza-gallery</section>
      <section className="clients">clients</section>
      <section className="cta">cta</section>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
