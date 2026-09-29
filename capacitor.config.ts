export interface CapacitorConfig {
  appId: string;
  appName: string;
  webDir: string;
  server?: {
    url?: string;
    cleartext?: boolean;
  };
  ios?: {
    contentInset?: 'automatic' | 'scrollable' | 'never' | 'always';
    preferredContentMode?: 'mobile' | 'desktop';
    scheme?: string;
  };
  android?: {
    buildOptions?: {
      keystorePath?: string;
    };
  };
}

const config: CapacitorConfig = {
  appId: 'com.zuhre.pattern',
  appName: 'Zühre',
  webDir: 'out',
  server: {
    // For live on-device debugging via Wi-Fi, uncomment and put your Mac's local IP:
    // url: 'http://192.168.1.50:3000',
    // cleartext: true,
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'Zühre',
  },
};

export default config;
