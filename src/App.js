import './App.scss'

// IMPORT Components
import Header from './components/Header/Header'

function App() {
  return (
    <div className="Mirza">
      <Header/>

      <section className="hero">
        <div className="left border">Left</div>
        <div className="right border">Right</div>
      </section>

      <section className="feature-images">feature-images</section>
      <section className="fashion-meets-design-i">ashion-meets-design-i</section>
      <section className="fashion">ashion</section>
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
