#!/bin/bash

# Namecheap Deployment Script for React SPA
# This script builds and deploys your React app to Namecheap hosting via FTP

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Namecheap Deployment Script${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if .env.namecheap exists
if [ ! -f .env.namecheap ]; then
    echo -e "${RED}Error: .env.namecheap file not found!${NC}"
    echo -e "${YELLOW}Please create .env.namecheap with the following content:${NC}\n"
    echo "FTP_HOST=\"ftp.yourdomain.com\""
    echo "FTP_USER=\"your_ftp_username\""
    echo "FTP_PASS=\"your_ftp_password\""
    echo "FTP_DIR=\"/public_html\""
    echo ""
    exit 1
fi

# Load environment variables
source .env.namecheap

# Validate required variables
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ] || [ -z "$FTP_DIR" ]; then
    echo -e "${RED}Error: Missing required FTP credentials in .env.namecheap${NC}"
    exit 1
fi

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo -e "${RED}Error: lftp is not installed!${NC}"
    echo -e "${YELLOW}Install it with:${NC}"
    echo "  macOS: brew install lftp"
    echo "  Ubuntu/Debian: sudo apt-get install lftp"
    echo "  CentOS/RHEL: sudo yum install lftp"
    exit 1
fi

# Step 1: Clean previous build
echo -e "${YELLOW}Step 1: Cleaning previous build...${NC}"
if [ -d "dist" ]; then
    rm -rf dist
    echo -e "${GREEN}✓ Previous build cleaned${NC}\n"
else
    echo -e "${GREEN}✓ No previous build found${NC}\n"
fi

# Step 2: Install dependencies (optional, comment out if not needed)
echo -e "${YELLOW}Step 2: Checking dependencies...${NC}"
if [ -f "package.json" ]; then
    # Only run if node_modules doesn't exist or package.json is newer
    if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
        echo "Installing dependencies..."
        npm install
        echo -e "${GREEN}✓ Dependencies installed${NC}\n"
    else
        echo -e "${GREEN}✓ Dependencies up to date${NC}\n"
    fi
fi

# Step 3: Build the project
echo -e "${YELLOW}Step 3: Building production bundle...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed - dist folder not created${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}\n"

# Step 4: Create .htaccess file for React Router
echo -e "${YELLOW}Step 4: Creating .htaccess file...${NC}"
cat > dist/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle React Router - send all requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Set cache control headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

echo -e "${GREEN}✓ .htaccess file created${NC}\n"

# Step 5: Upload to Namecheap via FTP
echo -e "${YELLOW}Step 5: Uploading to Namecheap hosting...${NC}"
echo "Connecting to $FTP_HOST..."

# Use lftp to upload files
lftp -c "
set ftp:ssl-allow no;
set ftp:passive-mode on;
open -u $FTP_USER,$FTP_PASS $FTP_HOST;
lcd dist;
cd $FTP_DIR;
mirror --reverse --delete --verbose --parallel=5;
bye;
"

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ Upload completed successfully!${NC}\n"
else
    echo -e "\n${RED}Error: Upload failed${NC}"
    exit 1
fi

# Step 6: Summary
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}  Deployment Successful! 🎉${NC}"
echo -e "${BLUE}========================================${NC}\n"
echo -e "Your React app has been deployed to:"
echo -e "${GREEN}Host: $FTP_HOST${NC}"
echo -e "${GREEN}Directory: $FTP_DIR${NC}\n"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Visit your domain to verify the deployment"
echo "2. Clear your browser cache if needed (Ctrl+Shift+R)"
echo "3. Test all routes to ensure React Router is working"
echo ""
echo -e "${BLUE}Happy deploying! 🚀${NC}\n"

