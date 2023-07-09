import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import LinkCard from './LinkCard';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { HOME } from '../Contents/Navigating';
import { ChangeEvent } from 'react';
import { app, firestore } from '../../Firebase';
import { collection, addDoc, serverTimestamp, doc, QuerySnapshot } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { getDocs } from 'firebase/firestore';
import { FieldValue } from 'firebase/firestore';
import { getDatabase, child, ref, set, get, onValue } from "firebase/database";
import QRCode from 'qrcode.react';




console.log(nanoid(6))
console.log(auth.currentUser?.uid);

const dummyData = [
    {
        id: '34rtyuip',
        createdAt: new Date(),
        name: "My website",
        longURL: 'https://goggle.com',
        shortCode: 'masdo',
        totalClicks: 315,
    },
    {
        id: '22rtyuip',
        createdAt: new Date(),
        name: "Reacty page",
        longURL: 'https://www.google.com/search?q=uppercase+css&oq=uppercase&aqs=chrome.5.',
        shortCode: 'masdo',
        totalClicks: 300,
    },
    {
        id: '68rtyuip',
        createdAt: new Date(),
        name: "The Experience",
        longURL: 'https://github.com/oyindamolaWbCode',
        shortCode: 'masdo',
        totalClicks: 499,
    }
]

// interface Link {
//     id: string;
//     createdAt?: FieldValue | Date;
//     name: string;
//     longURL?: string;
//     totalClicks?: number;
//     generatedURL: string;
// }


interface Link {
    id: string;
    createdAt?: Date | FieldValue | undefined;
    name: string;
    longURL?: string | undefined;
    totalClicks?: number | undefined;
    generatedURL: string;
}

interface LinkCardProps extends Link {
    generatedURL: string;
}


function Work() {

    const navigate = useNavigate();

    const toHome = () => {
        navigate(`/${HOME}`);
    }


    const [links, setLinks] = useState<Link[]>(() => {

        const storedLinks = localStorage.getItem('links');
        return storedLinks ? JSON.parse(storedLinks) : [];
    });

    useEffect(() => {
        // Save links to localStorage whenever it changes
        localStorage.setItem('links', JSON.stringify(links));
    }, [links]);


    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: '',
        longURL: '',
        // preferedAlias: '',
    })
    const [newLink, setNewLink] = useState<Link | null>(null);

    const handleCreateShortenLink = async (name: string, longURL: string) => {
        let generatedKey = nanoid(5);
        let generatedURL = `${window.location.host}/link/${generatedKey}`;

        // if (form.preferedAlias !== '') {
        //     generatedKey = form.preferedAlias;
        //     generatedURL = `minilinkit.com/${form.preferedAlias}`;
        // }

        const link: Link = {
            id: generatedKey,
            createdAt: serverTimestamp(),
            name,
            longURL,
            totalClicks: 0,
            generatedURL: generatedURL
        };

        try {
            const docRef = await addDoc(collection(firestore, 'links'), link);
            setLinks((prevLinks) => [...prevLinks, { ...link, id: docRef.id }]);
            setOpen(false);
            // Set the shortened URL in Firebase Realtime Database

            // let generatedKey = nanoid(5);
            // let generatedURL = "minilinkit.com/" + generatedKey;

            // console.log(generatedKey)
            // console.log(generatedURL)

            // if (form.preferedAlias !== '') {
            //     generatedKey = form.preferedAlias;
            //     generatedURL = "minilinkit.com/" + form.preferedAlias;
            // }

            const currentUser = auth.currentUser;
            if (currentUser) {
                const db = getDatabase();
                const userLinksRef = ref(db, `users/${currentUser.uid}/links`);

                onValue(userLinksRef, (snapshot) => {
                    const data = snapshot.val();
                    // Process the retrieved links data and update the frontend state accordingly
                });
            } else {
                // Handle the case when currentUser is null
            }

            const db = getDatabase();

            set(ref(db, '/' + generatedKey), {
                generatedKey: generatedKey,
                longURL: form.longURL,
                // preferedAlias: form.preferedAlias,
                generatedURL: generatedURL,
            })
                .then(() => {
                    setForm((oldForm) => ({
                        ...oldForm,
                        generatedURL: generatedURL,
                        loading: false,
                    }));
                })
                .catch((error) => {
                    console.error('Error adding document: ', error);
                });


        } catch (error) {
            console.error('Error adding document: ', error);
        }

        addDoc(collection(firestore, 'links'), link)
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
    };


    useEffect(() => {

        const fetchData = async () => {
            if (!auth.currentUser || !auth.currentUser.uid) {
                // User not logged in or UID not available
                // Handle this case (e.g., redirect to login page or show an error message)
                return;
            }

            const userDocRef = doc(collection(firestore, 'users'), auth.currentUser.uid);
            const linksCollectionRef = collection(userDocRef, 'links');

            try {
                const querySnapshot = await getDocs(linksCollectionRef);
                const fetchedLinks: Link[] = [];

                querySnapshot.forEach((doc) => {
                    const linkData = doc.data();
                    const createdAt = linkData.createdAt ? linkData.createdAt.toDate() : undefined;
                    fetchedLinks.push({
                        id: doc.id,
                        ...linkData,
                        name: linkData.name || "",
                        createdAt,
                        generatedURL: ""
                    });
                });

                setLinks(fetchedLinks);

            } catch (error) {
                // Handle any errors that occur during data fetching
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        if (newLink) {
            setLinks((prevLinks) => [...prevLinks, newLink]);
            setOpen(false);
        }
    }, [newLink]);

    console.log(newLink);

    const handleSubmitLink = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCreateShortenLink(form.name, form.longURL)
       
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setForm((oldForm) => ({
            ...oldForm,
            [event.target.name]: event.target.value,
        }));

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [openQR, setOpenQR] = useState(false);

    const handleQROpen = () => {
        setOpenQR(true);
    };


    const handleQRClose = () => {
        setOpenQR(false);
    };

    const style = {
        backgroundColor: 'white',
        margin: '100px auto',
        padding: "10px 20px",
        borderRadius: "10px",

    };

    const signOutUser = () => {
        signOut(auth).then(() => {
            console.log('user signed out');
            toHome();
        })
            .catch((error) => {
                console.log(error)
            })
    }

    // QRcode
    const [url, setUrl] = useState('');

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleDownload = () => {
        if (url.trim() !== '') {
          const canvas = document.querySelector('canvas');
          if (canvas) {
            const downloadLink = document.createElement('a');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.download = 'qrcode.png';
            downloadLink.click();
          }
        }
      };
    

    return (
        <div className="Work-section">
            <div className="work-content">
                <h1>User Dashboard</h1>
                <div className='HomeNdsignout'>
                    <div className='button-Home'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='button-SignOut'>
                        <button onClick={signOutUser}>Sign Out</button>
                    </div>
                </div>
                <div className="create-link d-flex align-items-center mb-3">
                    <h4 style={{ marginRight: "15px" }}>Links</h4>
                    <div className='creating'>
                        <p className="new-link mx-2" onClick={handleOpen}>Create New Link</p>
                        <p className="new-link" onClick={handleQROpen}>Create QR</p>
                    </div>

                    <>
                        <Modal

                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 500, height: 450 }}>
                                <h5 id="parent-modal-title">Shorten URL</h5>

                                <form onSubmit={handleSubmitLink} className='URL_Form m-5'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        value={form.name}
                                        name='name'
                                        onChange={handleChange}
                                    />
                                    <input
                                        type='text'
                                        placeholder='Long URL'
                                        value={form.longURL}
                                        name='longURL'
                                        onChange={handleChange}

                                    />

                                    <div className='URL-button'>
                                        <button type="submit" className='Short-it'> Shorten URL</button>
                                    </div>
                                </form>


                            </Box>
                        </Modal>
                    </>

                    <>
                        <Modal

                            open={openQR}
                            onClose={handleQRClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 500, height: 450 }}>
                                <h5 id="parent-modal-title">Shorten URL</h5>

                                <div>
                                    <h1>QR Code Generator</h1>
                                    <form onSubmit={(event) => event.preventDefault()}>
                                        <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL" />
                                    </form>
                                    <div>
                                        <div className='qrCenter'>
                                            {url && <QRCode value={url} className='Qrcode'/>}
                                        </div>
                                        
                                    {url && <button className='Qrcode-download' onClick={handleDownload}>Download QR Code</button>}
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </>
                </div>
                <div className='links-map'>
                    {/* {links.map(link => <LinkCard key={link.id} {...link} />)} */}
                    <div className='links-map'>
                        {/* {links.map(link => {
                            const generatedURL = link.shortCode
                                ? `minilinkit.com/${link.shortCode}`
                                : '';

                            return <LinkCard key={link.id} {...link} generatedURL={generatedURL} />;
                        })} */}
                        {links.map(link => {
                            return <LinkCard key={link.id} {...link} generatedURL={link.generatedURL} />;
                        })}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work;