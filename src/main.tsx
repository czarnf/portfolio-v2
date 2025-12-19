import { createRoot } from 'react-dom/client'

// Easter egg for fellow professionals
console.log('👋 Hello! Thanks for taking a look under the hood. Open to connecting on strategic IT initiatives. Feel free to reach out!');
import App from './App.tsx'
import './index.css'

// Easter egg for fellow developers
console.log('%c👋 Hello fellow developer!', 'font-size: 24px; font-weight: bold; color: #9b87f5;');
console.log('%cThanks for checking under the hood. Feel free to reach out!', 'font-size: 14px; color: #888;');
console.log('%c📧 Connect with me on LinkedIn or GitHub', 'font-size: 12px; color: #666;');

createRoot(document.getElementById("root")!).render(<App />);
