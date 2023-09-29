gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

// loader
tlLoader
  .set(".loader__item", { yPercent: -100 })
  .set(".loader__title", { opacity: 0 })
  .to(".loader__item", { yPercent: 0, duration: 0.5, stagger: 0.25 })
  .to(".loader__item", { yPercent: 100, duration: 0.5, stagger: 0.25 })
  .to(".loader__title", {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .to(".loader__title", {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to(
    ".loader",
    {
      yPercent: 100,
      duration: 1,
    },
    "-=0.2"
  );

// Laptop animations
const laptopScreen = window.matchMedia("(min-width:992px)");
let sectionHero = document.querySelector(".section__hero");

if (laptopScreen.matches) {
  gsap.to(".section__hero", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "top top",
      scrub: true,
    },
    css: {
      backgroundColor: "#10895a",
    },
  });

  gsap.to(".title__row-1", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "-100 top",
      scrub: true,
    },
    yPercent: -100,
  });

  gsap.to(".title__row-2", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "-100 top",
      scrub: true,
    },
    yPercent: -170,
  });

  gsap.to(".hero__svg", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "-100 top",
      scrub: true,
    },
    scale: 0.5,
    y: 50,
  });

  gsap.to(".hero__image", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "-100 top",
      scrub: true,
    },
    scale: 1.2,
    y: -50,
  });

  gsap.to(".hero__buttons", {
    scrollTrigger: {
      trigger: sectionHero,
      start: "-100 top",
      scrub: true,
    },
    y: 150,
    xPercent: 50,
    scale: 1.2,
  });

  // section materials
  let sectionMaterials = document.querySelector(".section__materials");
  gsap.from(".materials__title", {
    scrollTrigger: {
      trigger: sectionMaterials,
      start: "-300 top",
    },
    y: 100,
    autoAlpha: 0,
    duration: 1,
  });

  gsap.from(".materials__text", {
    scrollTrigger: {
      trigger: sectionMaterials,
      start: "-300 top",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".materials__btn", {
    scrollTrigger: {
      trigger: sectionMaterials,
      start: "-250 top",
    },
    y: 50,
    autoAlpha: 0,
    duration: 1,
  });

  gsap.from(".products__img", {
    scrollTrigger: {
      trigger: sectionMaterials,
      start: "-300 top",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  gsap.from(".products__info", {
    scrollTrigger: {
      trigger: sectionMaterials,
      start: "-300 top",
    },
    x: 50,
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  // Choose section

  const tlChoose = gsap.timeline();

  tlChoose
    .from(".section__choose", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
        pin: true,
      },
    })
    .from(".choose__title", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-150 0",
        scrub: true,
      },
      y: 30,
    })
    .from(".choose__text", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-150 0",
        scrub: true,
      },
      y: 60,
    })
    .from(".why__svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      scale: 0,
    })
    .from(".why__image", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      css: {
        width: 0,
        height: "100%",
      },
    })
    .from(".why__item", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      stagger: 0.25,
      y: 50,
      autoAlpha: 0,
    })
    .from(".why__icon circle", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-200 0",
        scrub: true,
      },
      stagger: 0.25,
      css: {
        fill: "#f9bf29",
        fillOpacity: 1,
      },
    })
    .from(".why__icon svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-200 0",
        scrub: true,
      },
      scale: 2,
    })
    // help
    .from(".help__img-1", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=300",
        scrub: true,
      },
      xPercent: 30,
    })
    .from(".help__img-2", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=300",
        scrub: true,
      },
      scale: 0.5,
      yPercent: -80,
      xPercent: -100,
    })
    .from(".help__img-3", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        end: "+=400",
        scrub: true,
      },
      xPercent: -130,
      scale: 0.8,
    })
    .from(".help__title", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        end: "+=150",
        scrub: true,
      },
      y: 50,
      autoAlpha: 0,
    })
    .from(".help__text", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        end: "+=150",
        scrub: true,
      },
      y: 80,
      autoAlpha: 0,
    })
    .from(".help__list li", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        end: "+=200",
        scrub: true,
      },
      y: 80,
      x: 80,
      stagger: 0.25,
      opacity: 0,
    })
    .from(".help__btn", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "100 center",
        end: "+=150",
        scrub: true,
      },
      y: 80,
      autoAlpha: 0,
    })
    // exapmle
    .from(".examples__item", {
      scrollTrigger: {
        trigger: ".section__examples",
        start: "0 center",
        end: "+=250",
        scrub: true,
      },
      x: -100,
      autoAlpha: 0,
      stagger: 0.2,
    })
    // testimonials
    .from(".section__testimonials", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        end: "+=250",
        scrub: true,
      },
      css: {
        backgroundColor: "#578573",
      },
    })
    .from(".testimonials__title", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      css: {
        color: "#fff",
      },
    })
    .from(".testimonials__text", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      css: {
        color: "#fff",
      },
    })
    // blog
    .from(".section__blog-title", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      css: {
        xPercent: -100,
        backgroundColor: "#3b5d50",
        color: "#3b5d50",
      },
    })
    .from(".blog__img img", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      css: {
        height: 0,
      },
    })
    .from(".blog__title", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      autoAlpha: 0,
      y: -50,
    })
    .from(".blog__info", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        end: "+=150",
        scrub: true,
      },
      autoAlpha: 0,
      x: -350,
      stagger: 0.25,
    })
    .from(".blog__link", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 350",
        end: "+=150",
        scrub: true,
      },
      x: 150,
    })
    // subscribe
    .from(".subscribe__image", {
      scrollTrigger: {
        trigger: ".section__subscribe",
        start: "30% center",
        scrub: 1,
      },
      x: 120,
      y: -30,
    });
}
