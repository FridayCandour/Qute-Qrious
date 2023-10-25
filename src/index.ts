const Ready = () => {
  return new Promise(async (r, j) => {
    document.addEventListener("DOMContentLoaded", async function () {
      let p = localStorage.getItem("qrious-code");
      if (!p) {
        const a = await fetch(
          "https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"
        );
        if (a.ok) {
          p = await a.text();
          localStorage.setItem("qrious-code", p);
        }
      }
      if (p) {
        const s = document.createElement("script");
        s.innerHTML = p;
        document.head.appendChild(s);
        r(true);
      } else {
        j(new Error("Faild to load QRious"));
      }
    });
  });
};

const QuteQRious = {
  async load() {
    await Ready();
  },
  create(config: {
    canvas: HTMLCanvasElement;
    bgColor?: string;
    text: string;
    Color?: string;
    image?: string;
  }) {
    config.canvas.style.backgroundColor = config.bgColor || "#fff"; // Set background color
    const ctx = config.canvas.getContext("2d")!;
    // @ts-ignore
    new QRious({
      value: config.text || "https://google.com",
      background: config.bgColor || "#fff",
      backgroundAlpha: 0.9,
      foreground: config.Color,
      foregroundAlpha: 0.9,
      level: "H",
      size: window.innerHeight * 0.27,
      element: config.canvas,
    });
    if (config.image) {
      const logoImage = new Image();
      logoImage.src = config.image;
      const logoSize = 90;
      const centerX = config.canvas.width / 2 - logoSize / 2;
      const centerY = config.canvas.height / 2 - logoSize / 2;
      logoImage.onload = function () {
        ctx.drawImage(logoImage, centerX, centerY, logoSize, logoSize);
      };
    }
  },
};
