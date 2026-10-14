(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  var rises = document.querySelectorAll(".rise");
  if (reduce || !("IntersectionObserver" in window)) {
    rises.forEach(function (node) { node.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
    rises.forEach(function (node) { io.observe(node); });
  }

  var rig = document.querySelector("[data-rig]");
  if (rig && fine && !reduce && window.matchMedia("(min-width: 1041px)").matches) {
    rig.addEventListener("pointermove", function (event) {
      var box = rig.getBoundingClientRect();
      var px = (event.clientX - box.left) / box.width - 0.5;
      var py = (event.clientY - box.top) / box.height - 0.5;
      rig.style.setProperty("--ry", (-8 + px * 6).toFixed(2) + "deg");
      rig.style.setProperty("--rx", (5 - py * 5).toFixed(2) + "deg");
    });
    rig.addEventListener("pointerleave", function () {
      rig.style.removeProperty("--ry");
      rig.style.removeProperty("--rx");
    });
  }

  var parallax = document.querySelector("[data-parallax]");
  if (parallax && !reduce) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 800);
        parallax.style.transform = "translate3d(0," + (y * 0.06).toFixed(1) + "px,0)";
        ticking = false;
      });
    }, { passive: true });
  }

  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      var menu = document.getElementById("menu");
      if (menu) menu.checked = false;
    });
  });

  var filters = document.querySelectorAll("[data-filter]");
  var items = document.querySelectorAll(".faq[data-cat]");
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var cat = button.getAttribute("data-filter");
      filters.forEach(function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      items.forEach(function (item) {
        var show = cat === "all" || item.getAttribute("data-cat") === cat;
        item.hidden = !show;
      });
    });
  });

  var copyBtn = document.querySelector("[data-copy]");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var value = copyBtn.getAttribute("data-copy");
      var done = function () {
        copyBtn.textContent = "Copiat";
        window.setTimeout(function () { copyBtn.textContent = "Copiază"; }, 2500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else {
        done();
      }
    });
  }

  var form = document.querySelector("[data-contact]");
  if (!form) return;
  var error = form.querySelector("[data-error]");
  var success = document.querySelector("[data-success]");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var email = String(data.get("email") || "").trim();
    var message = String(data.get("message") || "").trim();
    var law = String(data.get("law") || "").trim();
    var category = String(data.get("category") || "general");
    var consent = form.querySelector("#consent").checked;
    var fail = function (text) {
      error.textContent = text;
      error.hidden = false;
    };
    if (!name) return fail("Vă rugăm să introduceți numele dumneavoastră.");
    if (!email || email.indexOf("@") === -1) return fail("Vă rugăm să introduceți o adresă de e-mail validă.");
    if (message.length < 10) return fail("Mesajul trebuie să conțină cel puțin 10 caractere.");
    if (!consent) return fail("Vă rugăm să confirmați că ați luat la cunoștință Politica de Confidențialitate.");
    error.hidden = true;
    var body = "Nume: " + name + "\nE-mail: " + email + "\nCategorie: " + category + "\nReferință legislativă: " + (law || "-") + "\n\n" + message;
    window.location.href = "mailto:vladticu100@gmail.com?subject=" + encodeURIComponent("Feedback JAC") + "&body=" + encodeURIComponent(body);
    form.hidden = true;
    success.hidden = false;
  });
  var again = document.querySelector("[data-again]");
  if (again) {
    again.addEventListener("click", function () {
      form.reset();
      form.hidden = false;
      success.hidden = true;
      error.hidden = true;
    });
  }
})();
