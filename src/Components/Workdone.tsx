import React, { ChangeEvent, useState } from 'react';
import { ImMagicWand } from "react-icons/im";
import axios from 'axios';

interface InputAlphaNumericProps {
    value: string;
    onChange: (newValue: string) => void;
  }
  
  const InputAlphaNumeric: React.FC<InputAlphaNumericProps> = ({ value, onChange }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/[^0-9a-zA-Z]+/ig, '');
      onChange(newValue);
    };

    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/shorten', { longUrl });
            setShortUrl(response.data.shortUrl);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    };

    return (
        <div className="trim-section">
            <div className="trim-content">
                <div className="trim-form">
                    <div className="form-content">
                        
                            <div className='url'>
                                <input
                                    placeholder='Paste URL here...'
                                    type="text"
                                    value={longUrl}
                                    onChange={(e) => setLongUrl(e.target.value)}
                                />
                            </div>
                            <div className='domains '>
                                <div className='drp-dwn'>
                                    <select name="domain" id="domain">
                                        <option value="">Choose Domain </option>
                                        <option value="saab">Saab</option>
                                    </select>
                                </div>
                                <div className='alas'>
                                    <input
                                        type="text"
                                        placeholder="Type alias here"
                                    />
                                </div>
                            </div>
                            <div className='button-section'>
                                <button className='trim-button' onSubmit={handleSubmit}>Trim URL < ImMagicWand /></button>
                            </div>
                        {shortUrl && (
                            <div>
                                <p>Shortened URL:</p>
                                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                                    {shortUrl}
                                </a>
                            </div>
                        )}
                        <p className='terms'>By clicking TrimURL, I agree to the <b>Terms of Service</b>, <b>Privacy Policy</b> and Use of Cookies.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

const YourComponent: React.FC = () => {
    const [custom, setCustom] = useState('');

    const handleCustomChange = (newValue: string) => {

        setCustom(newValue);
    };

    return (
        <form>
            
            <InputAlphaNumeric value={custom} onChange={handleCustomChange} />
        </form>
    );
};

export default YourComponent;
