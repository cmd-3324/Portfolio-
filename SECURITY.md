# Security Policy

## Implemented Security Measures

1. **Content Security Policy (CSP)**
   - Restricts script execution to trusted sources
   - Allows only necessary third-party services

2. **Security Headers**
   - X-Frame-Options: SAMEORIGIN (prevents clickjacking)
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: 1; mode=block

3. **HTTPS Only**
   - Automatic redirect to HTTPS
   - Strict-Transport-Security on production

4. **EmailJS Integration**
   - Public key only (safe to expose)
   - Private keys never in repository
   - Form data validated before sending

---

## Reporting Security Issues

**DO NOT** open public issues.

Email: programmers378@gmail.com

Include:
- Description of vulnerability
- Steps to reproduce
- Potential impact

**Response time:** 48 hours

---

## What NOT to Do

- ❌ Do NOT commit API keys to Git
- ❌ Do NOT store sensitive data in localStorage
- ❌ Do NOT disable HTTPS
- ❌ Do NOT expose EmailJS private key

---

## Self-Hosted VPS Security

```bash
# Enable firewall
ufw allow 22  # SSH
ufw allow 80  # HTTP
ufw allow 443 # HTTPS
ufw enable

# SSL Certificate (Let's Encrypt)
certbot certonly --standalone -d yourdomain.com

# Auto updates
apt-get update && apt-get upgrade -y
```

---

## Docker Security

✅ Non-root user (nginx_user)  
✅ Read-only filesystem  
✅ Health checks  
✅ Security scanning

---

Last updated: 2025
