import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.png";
import React from "./images/react.png";
import CSS from "./images/css.png";
import js from "./images/js.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">React Deneme</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={React}
                title="Angular"
                description="React ya da React.js, 2011 yılında Facebook tarafından geliştirilen, kullanıcı arayüzü oluşturmaya yarayan, açık kaynak kodlu bir Javascript kütüphanesidir. Popülerliği günden güne artarak günümüzde en fazla tercih edilen Javascript kütüphanesi haline gelmiştir."
              />
            </div>
            <div className="column">
              <Course
                image={React}
                title="CSharp"
                description="React ya da React.js, 2011 yılında Facebook tarafından geliştirilen, kullanıcı arayüzü oluşturmaya yarayan, açık kaynak kodlu bir Javascript kütüphanesidir. Popülerliği günden güne artarak günümüzde en fazla tercih edilen Javascript kütüphanesi haline gelmiştir."
              />
            </div>
            <div className="column">
              <Course
                image={React}
                title="Javascript"
                description="React ya da React.js, 2011 yılında Facebook tarafından geliştirilen, kullanıcı arayüzü oluşturmaya yarayan, açık kaynak kodlu bir Javascript kütüphanesidir. Popülerliği günden güne artarak günümüzde en fazla tercih edilen Javascript kütüphanesi haline gelmiştir."
              />
            </div>
            <div className="column">
              <Course
                image={React}
                title="React.js"
                description="React ya da React.js, 2011 yılında Facebook tarafından geliştirilen, kullanıcı arayüzü oluşturmaya yarayan, açık kaynak kodlu bir Javascript kütüphanesidir. Popülerliği günden güne artarak günümüzde en fazla tercih edilen Javascript kütüphanesi haline gelmiştir."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
