import React, { useState, useEffect } from "react";
import Navbars from "./navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './a1carddetails.js';

import './home.css'

const CodePage = ({ code, handleClose }) => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="code-page bg-white" style={{ width: '100%', padding: '20px' }}>
            <h2>Code:</h2>
            <pre style={{ width: '100%', overflowX: 'auto' }}>{code}</pre>
            <div> {/* Wrap buttons in a div */}
                <Button className='mx-2' onClick={handleClose}>Close</Button>
                <Button className="mx-2" onClick={copyToClipboard}>
    {copied ? <span>&#10003;</span> : "Copy"}
</Button>
            </div>
        </div>
    );
};

const Home = () => {
    const [cardData, setCardData] = useState([]);
    const [selectedCode, setSelectedCode] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        setCardData(data);
    }, []);

    const handleClick = (code, index) => {
        setSelectedCode(code);
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setSelectedCode('');
        setSelectedIndex(null);
    };

    return (
        <div style={{ width: '100%' }}>
            <Navbars />
            <h1 className="text-center mt-2 myprojects"> My Projects</h1>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 justify" style={{ height: '100vh' }}>
                {cardData.map((card, index) => (
                    <div key={index} className="col">
                        <Card style={{ width: '18rem', background: 'white' }} className="mt-4 mx-4">
                            <Card.Img variant="top" src={card.imgs} />
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title className="text-center">{card.title}</Card.Title>
                                <Card.Text className="text">{card.des}</Card.Text>
                                {card.link && <Button className="mx-4 dark" href={card.link}>See Page</Button>}
                                {card.code && <Button className="mx-4 mt-2 dark" onClick={() => handleClick(card.code, index)}> View code</Button>}
                                {card.github && <Button className="mx-4 mt-2 dark" href={card.github}>github</Button>}
                            </Card.Body>
                        </Card>
                        {selectedIndex === index && selectedCode && (
                            <CodePage code={selectedCode} handleClose={handleClose} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
