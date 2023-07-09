import React from 'react';
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import './index.css';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import Signup from '../src/Components/Auth/Signup'
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Work from "./Components/Account/Work";
import { useState, useEffect } from 'react';
import { ACCOUNT } from '../src/Components/Contents/Navigating';
import { HOME } from '../src/Components/Contents/Navigating';
import { auth } from './Firebase';

// import { LinkProvider } from './Components/Account/LinkContent';

interface UserData {
  username: string;
  password: string;
  email: string;

}

function App() { 

  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  
  const toUserDash = () =>{
    navigate(`/${ACCOUNT}`);
};

const toHome = () =>{
    navigate(`/${HOME}`)
}

  useEffect(() => {
    auth.onAuthStateChanged((userData) => {
      if (userData) {
        console.log('User authenticated:', userData);
        // toUserDash()
      } else {
        console.log('User not authenticated');
         setUser(null);
        //  toHome();
      }
    });
  }, []);

  const faqData = [
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      open: true
    },
    {
      question: "Is it necessary to create an account to use the URL shortening service?",
      answer: "Yes, you have to",
      open: false
    },
    {
      question:
        "Are the shortened links permanent? Will they expire?",
      answer: "Yes, they are permanent",
      open: false
    },
    {
      question:
        "Are there any limitations on the number of URLs I can shorten?",
      answer: "No there aren't",
      open: false
    },
    {
      question:
        "Can I customize the shortened URLs to reflect my brand or content?",
      answer: "Yes, you can",
      open: false
    },
    {
      question:
        "Can I track the performance of my shortened URLs?",
      answer: "Yes, of course. you can do that by logging into your account",
      open: false
    },
    {
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer: "Yes they are",
      open: false
    }, {
      question:
        "What is a QR code and what can it do?",
      answer: "A barcode is a machine-readable optical image that contains information specific to the labelled item. In practice, QR codes contain data for a locator, an identifier, and a website visitor tracking. ",
      open: false
    },
    {
      question:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer: "Not yet",
      open: false
    }

  ]

  const indexData = 0;

  const [faqs, setFaqs] = useState([
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      open: true
    },
    {
      question: "Is it necessary to create an account to use the URL shortening service?",
      answer: "Yes, you have to",
      open: false
    },
    {
      question:
        "Are the shortened links permanent? Will they expire?",
      answer: "Yes, they are permanent",
      open: false
    },
    {
      question:
        "Are there any limitations on the number of URLs I can shorten?",
      answer: "No there aren't",
      open: false
    },
    {
      question:
        "Can I customize the shortened URLs to reflect my brand or content?",
      answer: "Yes, you can",
      open: false
    },
    {
      question:
        "Can I track the performance of my shortened URLs?",
      answer: "Yes, of course. you can do that by logging into your account",
      open: false
    },
    {
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer: "Yes they are",
      open: false
    }, {
      question:
        "What is a QR code and what can it do?",
      answer: "A barcode is a machine-readable optical image that contains information specific to the labelled item. In practice, QR codes contain data for a locator, an identifier, and a website visitor tracking. ",
      open: false
    },
    {
      question:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer: "Not yet",
      open: false
    }

  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq: any, i: number) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="App">
      <div className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />
        
          <Route path="/Work" element={<Work />} />
          
          <Route path="/Login" element={<Login />} />

          <Route path="/SignUp" element={<Signup />} />

          <Route path="/Footer" element={<Footer />} />

          <Route path="/Faq" element={<Faq faq={faqData} index={indexData} toggleFAQ={toggleFAQ} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
