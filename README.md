# Qute QRious

     .d88888b.  8888888b.  d8b
    d88P" "Y88b 888   Y88b Y8P
    888     888 888    888
    888     888 888   d88P 888  .d88b.  888  888 .d8888b
    888     888 8888888P"  888 d88""88b 888  888 88K
    888 Y8b 888 888 T88b   888 888  888 888  888 "Y8888b.
    Y88b.Y8b88P 888  T88b  888 Y88..88P Y88b 888      X88
     "Y888888"  888   T88b 888  "Y88P"   "Y88888  88888P'
           Y8b

[QRious QRious](https://github.com/FridayCandour/Qute-Qrious) Qute-QRious is a customisable QRious based library for generating QR codes free.

[![License](https://img.shields.io/npm/l/qute-qrious.svg?style=flat-square)](https://github.com/FridayCandour/Qute-Qrious/blob/master/LICENSE.md)
[![Release](https://img.shields.io/npm/v/qute-qrious.svg?style=flat-square)](https://www.npmjs.com/package/qrious)

## Install

Install using the package manager for your desired environment(s):

```bash
$ npm install --save qute-qrious
```

## Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
...


    </div>
    <script src="./link/to/qute-qrious"></script>
    <script>
      // Event listener for generating the QR code
      const inputText = document.getElementById("inputText");
      const generateQR = document.getElementById("generateQR");
      const canvas = document.getElementById("qrcode");
      const bgColorInput = document.getElementById("bgColor");
      const ColorInput = document.getElementById("Color");
      const ctx = canvas.getContext("2d");
      const bgImageInput = document.getElementById("bgImage");
      let link;
      QuteQRious.load().then(() => {
        generateQR.addEventListener("click", function () {
          const text = inputText.value;
          QuteQRious.create({
            canvas,
            text,
            bgColor: bgColorInput.value,
            Color: ColorInput.value,
            image: link,
          });
        });

        // Event listener for changing the background image
        bgImageInput.addEventListener("change", function () {
          const file = bgImageInput.files[0];
          const text = inputText.value;
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              // Position the logo in the center of the QR code
              QuteQRious.create({
                canvas,
                text,
                image: e.target.result,
                bgColor: bgColorInput.value,
                Color: ColorInput.value,
              });
              link = e.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      });
    </script>

...
  </body>
</html>
```

Open up `/example/index.html` in your browser to play around a bit.

## API

Simply call `QuteQRious` You can control many aspects of the QR code
using the following fields:

| Field   | Type    | Description                      | Default    | Read Only |
| ------- | ------- | -------------------------------- | ---------- | --------- |
| bgColor | String  | Background color of the QR code  | `"white"`  | No        |
| Color   | Number  | Background alpha of the QR code  | `black`    | No        |
| canvas  | Element | Element to render the QR code    | `<canvas>` | Yes       |
| text    | String  | Value encoded within the QR code | `""`       | No        |
| image   | String  | Value encoded within the QR code | `""`       | No        |

## License

Copyright © 2017 Alasdair Mercer  
Copyright © 2010 Tom Zerucha

See [LICENSE.md](https://github.com/FridayCandour/Qute-Qrious/blob/master/LICENSE.md) for more information on the GPLv3 license.
