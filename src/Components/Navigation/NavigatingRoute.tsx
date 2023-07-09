import React, { lazy,useState } from "react";
import {Route, Routes, Navigate} from 'react-router-dom';

import{
    LANDING_ROUTE,
    HOME,
    AUTH,
    FAQ,
    FOOTER,
    ACCOUNT
} from '../Contents/Navigating';

const Home = lazy(() => import ('../Home'));
const Login = lazy(() => import ('../Auth/Login'));
const SignUp = lazy(() => import ('../Auth/Signup'));
const Work = lazy(() => import ('../Account/Work'));
const Faq =  lazy(() => import ('../Faq'));
const Footer = lazy(() => import ('../Footer'));

const NavigatingRoute = () =>{

    const faqData = [
        {
          question: "How does URL shortening work?",
          answer:
            "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
          open: true
        },
        {
          question: "Is it necessary to create an account to use the URL shortening service?",
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "Are the shortened links permanent? Will they expire?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Are there any limitations on the number of URLs I can shorten?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Can I customize the shortened URLs to reflect my brand or content?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Can I track the performance of my shortened URLs?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
          answer: "This many!",
          open: false
        }, {
          question:
            "What is a QR code and what can it do?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Is there an API available for integrating the URL shortening service into my own applications or websites?",
          answer: "This many!",
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
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "Are the shortened links permanent? Will they expire?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Are there any limitations on the number of URLs I can shorten?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Can I customize the shortened URLs to reflect my brand or content?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Can I track the performance of my shortened URLs?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
          answer: "This many!",
          open: false
        }, {
          question:
            "What is a QR code and what can it do?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Is there an API available for integrating the URL shortening service into my own applications or websites?",
          answer: "This many!",
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

    return(
        <>
        <Routes>
            <Route index element={<Navigate to='auth' />} />
            <Route path={HOME} element={< Home />} />
            <Route path={ACCOUNT} element={< Work />} />
            <Route path={AUTH} element={<SignUp />} />
            <Route path ={FAQ} element={<Faq faq={faqData} index={indexData} toggleFAQ={toggleFAQ} />} />
            <Route path={FOOTER} element={<Footer />} />
        </Routes>
        </>
    )
}