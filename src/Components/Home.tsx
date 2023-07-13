import Logo from "../assets/Real Logo.png";
import line from '../assets/line.png';
import shape from "../assets/shape.png";
import frame from "../assets/frame chain.png";
import floor from "../assets/floor.png";
import oval from "../assets/oval.png";
import liney from "../assets/Line 70.png";
import custom from '../assets/custom.png';
import data from '../assets/dataA.png';
import url from '../assets/url.png';
import qr from '../assets/QR.png'
import { FiCheckCircle } from 'react-icons/fi';
import { useState, useRef, useEffect} from 'react';
import Faq from './Faq';
import { FiPlus } from "react-icons/fi";
import Footer from "./Footer";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { AUTH } from "./Contents/Navigating";


function Home() {
    interface UserData {

        username: string;
        password: string;
        email: string;
      
      }

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

    const toggleFAQ = (index: number )=> {
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

    const [user, setUser] = useState<UserData | null>(null);

    const navigate = useNavigate();

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

      const toUserAuth = () =>{
        navigate(`/${AUTH}`);
    };

      const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (user === null) {
          event.preventDefault();
          window.location.href = '/signup';
        }
        else{
            event.preventDefault();
            window.location.href = '/Work';
        }
      };

    return (

        <div className="Homepage">
            <div className="Nav d-flex">
                <div className="logo px-5">
                    <img src={Logo}
                        alt=""
                    />
                </div>
                <div className="features d-flex">
                    <ul className="d-flex justify-content-between">
                        <a href="/Work">
                            <li style={{ color: '#0065FE' }}>My URLs</li>
                            </a>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Analytics</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="Logs d-flex justify-content-end px-5">
                    <ul>
                        <a href="/Login"><li style={{ color: '#0065FE' }}>Log In</li></a>
                    </ul>
                    <button style={{ backgroundColor: '#0065FE', color: 'white', border: 'none', borderRadius: "100px", width: '120px', height: '40px', fontWeight: 'bold' }}>Try for free</button>
                </div>
            </div>
            <div className="optimize mt-5">
                <h2 style={{ textAlign: 'center', lineHeight: '1.5cm', fontFamily: 'Lato', fontWeight: 'bolder' }}> Optimize Your Online Experience with Our <br />Advanced <b>URL Shortening</b> Solution</h2>
                <img src={line}
                    alt=""
                    className="line-shorter"
                />
                <div className="brief">
                    <p style={{ color: '#141414', textAlign: 'center' }}>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
                </div>
            </div>
            <div className="sign-part d-flex justify-content-center m-5">
               <a href="/Signup"><button style={{ backgroundColor: '#0065FE', color: 'white', border: 'none', borderRadius: "100px", width: '120px', height: '40px', fontWeight: 'bold' }}>Sign Up</button></a>
                <p style={{ color: '#0065FE', marginTop: "10px", paddingLeft: '50px' }}>Learn More</p>
            </div>
            <div className="chain-process m-3">
                <div className="shape-process">
                    <img src={shape}
                        alt=""
                        className="imgProcess"
                    />
                </div>
                <div className="frame-process">
                    <img src={frame}
                        alt=""
                        style={{}}
                    />
                    <p style={{ textAlign: "center" }}>Seamlessly transform your long URLs into concise <br /> and shareable links with just few clicks.</p>
                </div>
            </div>
            <div className="ecllipse p-3">
                <div className="floor">
                    <img src={floor}
                        alt=""
                    />
                </div>
                <div className="eclipse">
                    <img src={oval}
                        alt=""
                        style={{ position: 'absolute', top: '30px', left: "256px" }}
                    />
                </div>
            </div>
            <div className="client-figures">
                <div className="row">
                    <div className="figuresInBold col-md">
                        <h3 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>One Stop</h3>
                        <h3 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>Four <b>Posibilities</b></h3>
                    </div>
                    <div className="figures col-md">
                        <h4 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>3M</h4>
                        <p style={{ lineHeight: '1.1em', letterSpacing: "0.15em" }}>Active Users</p>
                    </div>
                    <div className="figures col-md">
                        <h4 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>60M</h4>
                        <p style={{ lineHeight: '1.1em', letterSpacing: "0.15em" }}>Links &amp; QR <br /> codes created</p>
                    </div>
                    <div className="figures col-md">
                        <h4 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>1B</h4>
                        <p style={{ lineHeight: '1.1em', letterSpacing: "0.15em" }}>Clicked  &amp; Scanned < br /> connections</p>
                    </div>
                    <div className="figures col-md">
                        <h4 style={{ fontFamily: 'Manrope', fontWeight: "bolder" }}>300k</h4>
                        <p style={{ lineHeight: '1.1em', letterSpacing: "0.15em" }}>App Integration</p>
                    </div>
                </div>
                
            </div>
            <div className="whychoose">
                <div className="row">
                    <div className="why-choose-header col-md-4">
                        <div className="choose-header">
                            <img src={liney}
                                alt=""
                                style={{}}
                            />
                            <h2 style={{ position: "absolute", bottom: "-430px", left: "140px" }}>Why choose <b>Scissors</b></h2>
                        </div>
                        <div className="choose-brief">
                            <p className="p-3">Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
                        </div>
                    </div>
                    <div className="URL & QR col-md-4">
                        <div className="URL">
                            <img src={url}
                                alt=""
                                style={{ marginBottom: "35px", marginTop: "20px" }}
                            />
                            <h2>URL Shortening</h2>
                            <p style={{ marginBottom: "35px", lineHeight: '1.1em', marginTop: "20px" }}>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                        </div>
                        <div className="QR">
                            <img src={qr}
                                alt=""
                                style={{ marginBottom: "35px", marginTop: "20px", lineHeight: '1.1em', letterSpacing: "0.15em" }}
                            />
                            <h2>QR Codes</h2>
                            <p style={{ marginBottom: "35px", marginTop: "20px", lineHeight: '1.1em' }}>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                        </div>
                    </div>
                    <div className="custom & data col-md-4">
                        <div className="custom">
                            <img src={custom}
                                alt=""
                                style={{ marginBottom: "35px", marginTop: "20px", lineHeight: '1.1em' }}
                            />
                            <h2>Custom URLs</h2>
                            <p style={{ marginBottom: "35px", lineHeight: '1.1em', marginTop: "20px" }}>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                        </div>
                        <div className="data">
                            <img src={data}
                                alt=""
                                style={{ marginBottom: "35px" }}
                            />
                            <h2>Data Analytics</h2>
                            <p style={{ marginBottom: "35px", marginTop: "20px", lineHeight: '1.1em' }}>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="plans-categories">
                <div className="plans-price-header">
                    <img src={liney}
                        alt=""
                        style={{ position: "absolute", left: "440px" }}
                    />
                    <h4 style={{ fontSize: "40px" }}>A <b>price perfect</b> for your needs.</h4>
                    <p style={{ width: "550px", margin: "auto", paddingBottom: "40px" }}>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
                </div>
                <div className="plans d-flex justify-content-between">
                    <div className="plan-one">
                        <div className="plan-one-content">
                            <p style={{ fontSize: "20px" }}>Basic</p>
                            <h4 style={{ fontWeight: "bolder" }}>Free</h4>
                            <p style={{ fontSize: "23px" }}>Free plan for all users</p>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Unlimited URL Shortening</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Basic Link Analytics</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Customizable Short Links</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Standard Support</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Ad-supported</p>
                            </div>
                        </div>
                    </div>
                    <div className="plan-two">
                        <div className="plan-two-content">
                            <p style={{ fontSize: "20px" }}>Professional</p>
                            <h4 style={{ fontWeight: "bolder" }}> &#36;15/month</h4>
                            <p style={{ fontSize: "23px" }}>Ideal for business creators</p>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check-tick" />
                                <p style={{ marginLeft: "10px" }}>Enhanced Link Analytics</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check-tick" />
                                <p style={{ marginLeft: "10px" }}>Custom Branded Domains</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check-tick" />
                                <p style={{ marginLeft: "10px" }}>Advanced Link Customization</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check-tick" />
                                <p style={{ marginLeft: "10px" }}>Priority Support</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check-tick" />
                                <p style={{ marginLeft: "10px" }}>Ad-free Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="plan-one">
                        <div className="plan-one-content">
                            <p style={{ fontSize: "20px" }}>Teams</p>
                            <h4 style={{ fontWeight: "bolder" }}>&#36;25/month</h4>
                            <p style={{ fontSize: "23px" }}>Share with up to 10 users</p>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Team Collaboration</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>User Roles and Permissions</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Enhanced Security</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>API Access</p>
                            </div>
                            <div className="flexy d-flex ">
                                < FiCheckCircle className="check" />
                                <p style={{ marginLeft: "10px" }}>Dedicated Account Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-button ">
                <div className="pricing-categories d-flex justify-content-center">
                    <button className="custom-price">
                        Get Custom Pricing
                    </button>
                    <button className="select-price">
                        Select Price
                    </button>
                </div>
            </div>
            {/* <div className="trim-section">
                < Workdone />
            </div> */}
            <div className="FAQ-section">
                <div className="FAQ-content">
                    <div className="Faq-header">
                        <img src={liney}
                        alt=""
                        style={{marginRight: "10px"}}
                        />
                        <h3>FAQs</h3>
                    </div>
                    <div className="faqs">
                        {faqs.map((faq, index) => (
                            <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
