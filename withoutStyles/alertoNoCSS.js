const alertQueue = [];
let currentAlert = null;
function processQueue() {
  null === currentAlert &&
    alertQueue.length > 0 &&
    (currentAlert = alertQueue.shift()).show();
}
class Alert {
  constructor(t, i, e, n, s, a = "bottom") {
    (this.text = t),
      (this.duration = i),
      (this.state = e),
      (this.animation = n),
      (this.animationDuration = s || "0.5s"),
      (this.position = a);
  }
  show() {
    if (
      !["primary", "success", "danger", "warning", "info"].includes(this.state)
    ) {
      console.error(
        `Invalid state: ${this.state}. State must be one of ["primary", "success", "danger", "warning", "info"].`
      );
      return;
    }
    if ("number" != typeof this.duration || this.duration <= 0) {
      console.error(
        `Invalid duration: ${this.duration}. Duration must be a positive number.`
      );
      return;
    }
    if (
      "string" != typeof this.animationDuration ||
      !/^(\d+(\.\d+)?s)$/.test(this.animationDuration)
    ) {
      console.error(
        `Invalid animationDuration: ${this.animationDuration}. Animation duration must be a string representing seconds (e.g., "0.5s").`
      );
      return;
    }
    if (!["bottom", "top"].includes(this.position)) {
      console.error(
        `Invalid position: ${this.position}. Position must be one of ["bottom", "top"].`
      );
      return;
    }
    let t = document.createElement("div");
    t.className = `alert-container ${this.position}`;
    let i = document.createElement("div");
    (i.innerHTML = this.text), (i.className = `alert alert-${this.state}`);
    let e = "fade-in-out" === this.animation ? "fade-in-in" : "fade-up-in";
    i.classList.add(e),
      (i.style.animationDuration = this.animationDuration),
      t.appendChild(i),
      document.body.appendChild(t),
      setTimeout(() => {
        this.hide(i);
      }, 1e3 * parseFloat(this.animationDuration) + this.duration);
  }
  hide(t) {
    let i = "fade-in-out" === this.animation ? "fade-in-out" : "fade-up-out";
    t.classList.replace(t.classList[t.classList.length - 1], i),
      setTimeout(() => {
        document.body.removeChild(t.parentElement),
          (currentAlert = null),
          processQueue();
      }, 1e3 * parseFloat(this.animationDuration));
  }
}
function showAlert(t, i, e, n, s, a) {
  let r = new Alert(t, i, e, n, s, a);
  alertQueue.push(r), processQueue();
}
