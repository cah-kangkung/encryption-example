const fs = require('fs');
const crypto = require('crypto');

const key = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'
const algorithm = 'aes-256-ctr'
const iv = '1234567890123456';

function encryptFile(inputFilePath, outputFilePath) {
  console.log('Starter IV', iv);

  const iv = crypto.randomBytes(16);
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  output.write(iv);

  input.pipe(cipher).pipe(output);
}

function decryptFile(inputFilePath, outputFilePath) {
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  input.pipe(decipher).pipe(output);
}

module.exports = { encryptFile, decryptFile };