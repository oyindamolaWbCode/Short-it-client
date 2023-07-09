import format from "date-fns/format";
import { FieldValue } from 'firebase/firestore';
import { useState } from "react";



interface LinkCardProps {
    id: string;
    createdAt?: Date | FieldValue | undefined;
    name: string;
    longURL?: string | undefined;
    totalClicks?: number | undefined;
     generatedURL: string;
  }
  

  const LinkCard: React.FC<LinkCardProps> = ({
    id,
    createdAt,
    name,
    longURL,
    totalClicks,
     generatedURL
  }) => {
    const formatDate = (date: Date | FieldValue | undefined) => {
      if (date instanceof FieldValue) {
        // Handle FieldValue case (if needed)
        return ''; // Replace with appropriate value
      } else if (date instanceof Date) {
        // Handle Date case
        return date.toDateString(); // Example: Format the date as a string
      } else {
        // Handle undefined case (if needed)
        return ''; // Replace with appropriate value
      }
    };
    const formattedDate = createdAt instanceof Date ? createdAt.toDateString() : "";

    const [toolTipMessage, setToolTipMessage] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedURL);
        setToolTipMessage('Copied!');
      };


    return(
        <div className="box d-flex justify-content-md-between align-items-center" style={{fontFamily: 'poppins, sans-serif'}}>
            <div className="left-side">
            {/* <p style={{ textTransform: "uppercase" }}>
          Created At {createdAt ? format(createdAt, 'd MMM, HH:mm') : ""}
        </p> */}
        <p>Created at: {formattedDate}</p>
         {/* <p>Created at: {formatDate(createdAt)}</p> */}
            <div className="nameAndLong my-2">
                <h4 style={{fontWeight: 'bolder'}}>{name}</h4>
            <p style={{fontSize: '20px'}}>{longURL}</p>
            </div>
            <div className="button-short d-flex align-items-center">
               {/* <p  style={{fontSize: '20px', color: '#005AE2', marginRight: '10px'}}>{window.location.host}/{generatedURL}</p> */}
               <p  style={{fontSize: '20px', color: '#005AE2', marginRight: '10px'}}>{generatedURL}</p>
               <button onClick={copyToClipboard} className="new-button" style={{ color: '#005AE2'}}>Copy</button>
            </div>
            </div>
            <div className="right-side">
                <div className="right-content">
                <h4>{totalClicks}</h4>
                <p>Total Clicks</p>
                </div>
            </div>
        </div>
    )
}

export default LinkCard