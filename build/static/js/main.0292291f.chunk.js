(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function(e, a, t) {},
    15: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        i = t(7),
        r = t.n(i),
        c = (t(13), t(1)),
        s = t(2),
        o = t(4),
        m = t(3),
        u = t(5),
        p = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "header",
                      { id: "home" },
                      l.a.createElement(
                        "nav",
                        { id: "nav-wrap" },
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#nav-wrap",
                            title: "Show navigation",
                          },
                          "Show navigation"
                        ),
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#",
                            title: "Hide navigation",
                          },
                          "Hide navigation"
                        ),
                        l.a.createElement(
                          "ul",
                          { id: "nav", className: "nav" },
                          l.a.createElement(
                            "li",
                            { className: "current" },
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#home" },
                              "Home"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#about" },
                              "About"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#resume" },
                              "Resume"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#testimonials",
                              },
                              "Testimonials"
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "row banner" },
                        l.a.createElement(
                          "div",
                          { className: "banner-text" },
                          l.a.createElement(
                            "h1",
                            { className: "responsive-headline" },
                            "I am ",
                            e.name,
                            "."
                          ),
                          l.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#fff",
                                fontFamily: "sans-serif ",
                              },
                            },
                            "I am a ",
                            e.role,
                            ".",
                            e.roleDescription
                          ),
                          l.a.createElement("hr", null),
                          l.a.createElement(
                            "ul",
                            { className: "social" },
                            e.socialLinks &&
                              e.socialLinks.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  { key: e.name },
                                  l.a.createElement(
                                    "a",
                                    { href: e.url, target: "_blank" },
                                    l.a.createElement("i", {
                                      className: e.className,
                                    })
                                  )
                                );
                              })
                          )
                        )
                      ),
                      l.a.createElement(
                        "p",
                        { className: "scrolldown" },
                        l.a.createElement(
                          "a",
                          { className: "smoothscroll", href: "#about" },
                          l.a.createElement("i", {
                            className: "icon-down-circle",
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        d = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "about" },
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "three columns" },
                        l.a.createElement("img", {
                          className: "profile-pic",
                          src: "images/profilepic.jpeg",
                          alt: "",
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        l.a.createElement("h2", null, "About Me"),
                        l.a.createElement("p", null, e.aboutme)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        h = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "resume" },
                    l.a.createElement(
                      "div",
                      { className: "row education" },
                      l.a.createElement(
                        "div",
                        { className: "three columns header-col" },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Education")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        e.education &&
                          e.education.map(function(e) {
                            return l.a.createElement(
                              "div",
                              { className: "row item" },
                              l.a.createElement(
                                "div",
                                { className: "twelve columns" },
                                l.a.createElement("h3", null, e.UniversityName),
                                l.a.createElement(
                                  "p",
                                  { className: "info" },
                                  e.specialization,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    { className: "date" },
                                    e.MonthOfPassing,
                                    " ",
                                    e.YearOfPassing
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "row skill" },
                      l.a.createElement(
                        "div",
                        { className: "three columns header-col" },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Skills")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        l.a.createElement("p", null, e.skillsDescription),
                        l.a.createElement(
                          "div",
                          { className: "bars" },
                          l.a.createElement(
                            "ul",
                            { className: "skills" },
                            e.skills &&
                              e.skills.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement("span", {
                                    className: "bar-expand ".concat(
                                      e.skillname.toLowerCase()
                                    ),
                                  }),
                                  l.a.createElement("em", null, e.skillname)
                                );
                              })
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        E = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "portfolio" },
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "twelve columns collapsed" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Check Out Some of My Works."
                        ),
                        l.a.createElement(
                          "div",
                          {
                            id: "portfolio-wrapper",
                            className: "bgrid-quarters s-bgrid-thirds cf",
                          },
                          e.portfolio &&
                            e.portfolio.map(function(e) {
                              return l.a.createElement(
                                "div",
                                { className: "columns portfolio-item" },
                                l.a.createElement(
                                  "div",
                                  { className: "item-wrap" },
                                  l.a.createElement(
                                    "a",
                                    { href: "#modal-01" },
                                    l.a.createElement("img", {
                                      src: "".concat(e.imgurl),
                                      className: "item-img",
                                    }),
                                    l.a.createElement(
                                      "div",
                                      { className: "overlay" },
                                      l.a.createElement(
                                        "div",
                                        { className: "portfolio-item-meta" },
                                        l.a.createElement("h5", null, e.name),
                                        l.a.createElement(
                                          "p",
                                          null,
                                          e.description
                                        )
                                      )
                                    )
                                  )
                                )
                              );
                            })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        f = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "testimonials" },
                    l.a.createElement(
                      "div",
                      { className: "text-container" },
                      l.a.createElement(
                        "div",
                        { className: "row" },
                        l.a.createElement(
                          "div",
                          { className: "two columns header-col" },
                          l.a.createElement(
                            "h1",
                            null,
                            l.a.createElement(
                              "span",
                              null,
                              "Client Testimonials"
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "ten columns flex-container" },
                          l.a.createElement(
                            "div",
                            { className: "flexslider" },
                            l.a.createElement(
                              "ul",
                              { className: "slides" },
                              e.testimonials &&
                                e.testimonials.map(function(e) {
                                  return l.a.createElement(
                                    "li",
                                    null,
                                    l.a.createElement(
                                      "blockquote",
                                      null,
                                      l.a.createElement(
                                        "p",
                                        null,
                                        e.description
                                      ),
                                      l.a.createElement("cite", null, e.name)
                                    )
                                  );
                                })
                            )
                          ),
                          " "
                        ),
                        " "
                      ),
                      " "
                    ),
                    "  "
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        v = (n.Component,
        (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "footer",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "twelve columns" },
                        l.a.createElement(
                          "ul",
                          { className: "social-links" },
                          e.socialLinks &&
                            e.socialLinks.map(function(e) {
                              return l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(
                                  "a",
                                  { href: e.url },
                                  l.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { id: "go-top" },
                        l.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home",
                          },
                          l.a.createElement("i", { className: "icon-up-open" })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component)),
        b = {
          imagebaseurl: "https://github.com/mraduldixit",
          name: "Mradul Dixit",
          role: "Frontend Developer and Competitive Coder",
          linkedinId: "https://www.linkedin.com/in/mradul-dixit-144b621b2/",
          skypeid: "http://github.com/patelsudhir",
          roleDescription: "",
          socialLinks: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/mradul-dixit-144b621b2/",
              className: "fa fa-linkedin",
            },
            {
              name: "github",
              url: "https://github.com/mraduldixit",
              className: "fa fa-github",
            },
            {
              name: "skype",
              url: "https://twitter.com/Mraduldixit111",
              className: "fa fa-twitter",
            },
          ],
          aboutme:
            "I am currently a final year student at Institute of Engineering and Technology, Lucknow and pursuing my Bachelors in Mechanical Engineering. I am a Competitive Coder and an enthusiast Web developer with knowledge of technology like HTML, CSS, JavaScript, React.js, Node.js.",
          website: "Phone no : (+91) 7023347772",
          education: [
            {
              UniversityName:
                "Institute of Engineering and Technology, Lucknow",
              specialization: "Mechanical Engineering",
              MonthOfPassing: "May",
              YearOfPassing: "2023",
              Achievements: "CGPA : 8.3",
            },
            {
              UniversityName: "Indra K S iNTER College",
              specialization: "PCM",
              MonthOfPassing: "Apr",
              YearOfPassing: "2018",
              Achievements: "Percentage : 85%",
            },
          ],
          work: [
            {
              CompanyName: "SoftPro India",
              specialization: "C, C++, Python, Matlab, Autocad",
              MonthOfLeaving: "Jan",
              YearOfLeaving: "2020",
              Achievements: "",
            },
          ],
          skillsDescription: "",
          skills: [
            { skillname: "HTML5" },
            { skillname: "CSS" },
            { skillname: "JAVASCRIPT" },
            { skillname: "REACTJS" },
          ],
          portfolio: [
            {
              name: "Playing Pogo",
              description: "Web Game",
              imgurl: "images/portfolio/pogo-game.jpg",
              projectlink: "https://mradul-dixit.vercel.app/",
            },
            {
              name: "Chrome Extension",
              description: "Web Application",
              imgurl: "images/portfolio/chrome-extension.jpg",
              projectlink: "https://github.com/mraduldixit",
            },
          ],
          testimonials: [
            { description: "I am 3 star at codechef.", name: "" },
            {
              description:
                "I have done 200+ Questions on various coding platforms.",
              name: "",
            },
          ],
        },
        N = (function(e) {
          function a() {
            return (
              Object(c.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(s.a)(a, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "App" },
                    l.a.createElement(p, { resumeData: b }),
                    l.a.createElement(d, { resumeData: b }),
                    l.a.createElement(h, { resumeData: b }),
                    l.a.createElement(E, { resumeData: b }),
                    l.a.createElement(f, { resumeData: b }),
                    l.a.createElement(v, { resumeData: b })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(l.a.createElement(N, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    8: function(e, a, t) {
      e.exports = t(15);
    },
  },
  [[8, 2, 1]],
]);
//# sourceMappingURL=main.0292291f.chunk.js.map
