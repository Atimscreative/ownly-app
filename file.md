📂 ownly-wallet
├── 📂 app
│   ├── 📂 (auth)                # Authentication Flow (Onboarding, Wallet Creation)
│   │   ├── onboarding.tsx       # Splash & Onboarding screen with sliders
│   │   ├── create-wallet.tsx    # Screen for creating a new wallet
│   │   ├── backup-phrase.tsx    # Screen for backing up phrase
│   │   ├── confirm-phrase.tsx   # Screen for confirming phrase
│   │   ├── success.tsx          # Success screen after wallet creation
│   │   ├── _layout.tsx          # Layout for the (auth) group
│   │
│   ├── 📂 (tabs)                # Main App Screens (with bottom navigation)
│   │   ├── index.tsx            # Default home screen
│   │   ├── wallet.tsx           # Wallet screen
│   │   ├── transactions.tsx     # Transactions screen
│   │   ├── settings.tsx         # Settings screen (with list of options)
│   │   ├── _layout.tsx          # Layout for the bottom tab navigation
│   │
│   ├── 📂 settings              # Settings screens (no bottom tab navigation)
│   │   ├── security.tsx         # Security settings screen
│   │   ├── preferences.tsx      # Preferences screen
│   │   ├── about.tsx            # About the app
│   │   ├── _layout.tsx          # Layout for settings (no bottom nav)
│   │
│   ├── _layout.tsx              # Global layout wrapper for Expo Router
│
├── 📂 components                # Reusable components
│   ├── Button.tsx               # Custom button component
│   ├── Input.tsx                # Custom input field
│   ├── PhraseBackup.tsx         # Backup phrase UI component
│
├── 📂 assets                     # Images, icons, fonts
│   ├── logo.png
│   ├── onboarding1.png
│   ├── onboarding2.png
│
├── 📂 utils                      # Helper functions
│   ├── storage.ts                # AsyncStorage helpers
│   ├── crypto.ts                 # Encryption functions for private keys
│
├── app.json                      # Expo config
├── package.json                  # Dependencies
├── tsconfig.json                  # TypeScript config
