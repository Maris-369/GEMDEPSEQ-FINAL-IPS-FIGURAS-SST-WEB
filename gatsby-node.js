const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

exports.onCreateNode = async ({ node }) => {
  if (node.internal.type === 'File' && /\.(jpg|jpeg|png)$/i.test(node.relativePath)) {
    const texturePath = node.absolutePath;
    const outputDir = path.join(process.cwd(), 'public', 'textures');
    
    await fs.ensureDir(outputDir);

    // Generar versión KTX2 (WebGL optimizado)
    await sharp(texturePath)
      .resize(2048, 2048, { fit: 'inside' })
      .toFormat('ktx2')
      .toFile(path.join(outputDir, `${node.name}.ktx2`));

    // Generar versión WebP (fallback)
    await sharp(texturePath)
      .resize(1024, 1024)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${node.name}.webp`));
  }
};