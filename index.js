const { encryptFile, decryptFile } = require('./encryption');

const inputFile = 'example.pdf';
const encryptedFile = 'encrypted.pdf';
const decryptedFile = 'decrypted.pdf';

// // Encryption
encryptFile(inputFile, encryptedFile);
console.log('File encrypted successfully.');

// Decryption
decryptFile(encryptedFile, decryptedFile);
console.log('File decrypted successfully.');