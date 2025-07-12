const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if .env file exists and create a basic one if not
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('Creating default .env file...');
  fs.writeFileSync(envPath, 'PORT=3000\n# Add your email credentials below\n# EMAIL_USER=your-email@gmail.com\n# EMAIL_PASSWORD=your-app-password\n');
}

console.log('Starting Netflix Household Verify server...');

// Start server with nodemon for auto reload during development
const server = spawn('node', ['server.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

console.log('Server process started.');
