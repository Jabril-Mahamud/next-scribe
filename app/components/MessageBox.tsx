'use client'
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MessageBox = () => {
    // State to hold the user's input text
    const [message, setMessage] = useState('');

    // Function to handle sending the message
    const sendMessage = () => {
        console.log("Message:", message);
        // You can do further processing or send the message to a server here
    };

    return (
        <div className='grid w-full gap-2 border-solid border-2 border-sky-700'>
            {/* Textarea for user input */}
            <Textarea
                placeholder='Type your message here.'
                // Update the message state on input change
                onChange={(e) => setMessage(e.target.value)}
            />
            {/* Button to send the message */}
            <Button onClick={sendMessage}>Send message</Button>
        </div>
    );
};

export default MessageBox;
