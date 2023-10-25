"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Ready = () => {
    return new Promise((r, j) => __awaiter(void 0, void 0, void 0, function* () {
        document.addEventListener("DOMContentLoaded", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let p = localStorage.getItem("qrious-code");
                if (!p) {
                    const a = yield fetch("https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js");
                    if (a.ok) {
                        p = yield a.text();
                        localStorage.setItem("qrious-code", p);
                    }
                }
                if (p) {
                    const s = document.createElement("script");
                    s.innerHTML = p;
                    document.head.appendChild(s);
                    r(true);
                }
                else {
                    j(new Error("Faild to load QRious"));
                }
            });
        });
    }));
};
const QuteQRious = {
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Ready();
        });
    },
    create(config) {
        config.canvas.style.backgroundColor = config.bgColor || "#fff"; // Set background color
        const ctx = config.canvas.getContext("2d");
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
