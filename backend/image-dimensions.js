const fs = require('fs');

function getJpgSize(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let i = 0;
    if (buffer[0] !== 0xFF || buffer[1] !== 0xD8) {
      console.log("Not a valid JPEG");
      return;
    }
    i += 2;
    while (i < buffer.length) {
      while (buffer[i] === 0xFF) i++;
      const marker = buffer[i];
      i++;
      if (marker === 0xD9 || marker === 0xDA) break; // End of image or Start of scan
      const size = buffer.readUInt16BE(i);
      if (marker >= 0xC0 && marker <= 0xC3) { // SOF0, SOF1, SOF2 markers
        const height = buffer.readUInt16BE(i + 3);
        const width = buffer.readUInt16BE(i + 5);
        console.log(`JPEG dimensions: ${width}x${height}`);
        return;
      }
      i += size;
    }
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

getJpgSize("C:\\Users\\Sujit singh\\Downloads\\WhatsApp Image 2026-07-14 at 15.47.27.jpeg");
