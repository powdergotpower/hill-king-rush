import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a57f006466954800bb6b00c38318324e',
  appName: 'Rock King',
  webDir: 'dist',
  server: {
    url: 'https://a57f0064-6695-4800-bb6b-00c38318324e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
