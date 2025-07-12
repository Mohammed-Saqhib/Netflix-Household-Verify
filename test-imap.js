require('dotenv').config();
const Imap = require('imap');

console.log('Testing IMAP connection with provided credentials...');

// Validate required environment variables
if (!process.env.EMAIL_USER) {
  console.error('❌ ERROR: EMAIL_USER is not defined in .env file');
  console.log('Please add EMAIL_USER=your-email@gmail.com to your .env file');
  process.exit(1);
}

if (!process.env.EMAIL_PASSWORD) {
  console.error('❌ ERROR: EMAIL_PASSWORD is not defined in .env file');
  console.log('Please add EMAIL_PASSWORD=your-app-password to your .env file');
  process.exit(1);
}

const imapConfig = {
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
};

console.log(`Attempting to connect to ${imapConfig.host} as ${imapConfig.user}...`);
console.log(`Password length: ${imapConfig.password?.length || 0} characters`);

// Set a timeout to detect hanging connections
const connectionTimeout = setTimeout(() => {
  console.error('❌ Connection attempt timed out after 30 seconds');
  console.log('Please check:');
  console.log('1. Your internet connection');
  console.log('2. If you\'re using Gmail, ensure you\'re using an App Password');
  console.log('3. Check if your email provider allows IMAP access');
  process.exit(1);
}, 30000);

const imap = new Imap(imapConfig);

imap.once('ready', function() {
  clearTimeout(connectionTimeout);
  console.log('✅ IMAP Connection successful!');
  console.log('Opening inbox...');
  
  imap.openBox('INBOX', false, function(err, box) {
    if (err) {
      console.error('❌ Error opening inbox:', err);
      imap.end();
      return;
    }
    
    console.log('✅ Successfully opened inbox');
    console.log(`Mailbox has ${box.messages.total} messages`);
    
    // Try to search for recent messages as a more thorough test
    const since = new Date();
    since.setDate(since.getDate() - 1); // Look for messages from the last 24 hours
    
    console.log('Searching for recent messages...');
    imap.search(['ALL', ['SINCE', since.toISOString()]], function(err, results) {
      if (err) {
        console.error('❌ Error searching messages:', err);
      } else {
        console.log(`✅ Found ${results.length} messages from the last 24 hours`);
        
        // Sort results to process newest messages first
        if (results.length > 0) {
          console.log('Processing messages in reverse chronological order (newest first)');
        }
      }
      
      console.log('Testing completed successfully.');
      imap.end();
    });
  });
});

imap.once('error', function(err) {
  clearTimeout(connectionTimeout);
  console.error('❌ IMAP Connection error:', err);
  
  if (err.textCode === 'AUTHENTICATIONFAILED') {
    console.log('\nAuthentication failed. If using Gmail:');
    console.log('1. Make sure 2-Step Verification is enabled on your Google account');
    console.log('2. Use an App Password from https://myaccount.google.com/apppasswords');
    console.log('3. Double-check for typos in your email or password');
  } else if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
    console.log('\nCould not connect to email server:');
    console.log('1. Check your internet connection');
    console.log('2. Verify the email host is correct');
  }
  
  process.exit(1);
});

imap.once('end', function() {
  console.log('IMAP connection ended.');
});

imap.connect();
