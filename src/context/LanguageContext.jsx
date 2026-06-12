import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null); // null = not chosen yet
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const selectLanguage = (lang) => {
    setLanguage(lang); // 'soninke' or 'english'
    setShowWelcomeModal(false);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      showWelcomeModal,
      selectLanguage,
      setShowWelcomeModal
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}