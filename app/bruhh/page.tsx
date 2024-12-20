'use client';  // Mark the component as client-side

import React from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for newer Next.js versions
import Image from 'next/image'; // Import Next.js Image component

function Bruhpage() {
  const router = useRouter(); // Initialize the router hook

  const handleGoBack = () => {
    router.push('/');  // Navigate back to the home page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#202020',
        color: '#ffffff',
      }}
    >
      <Image
        src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" // Replace with your desired GIF URL
        alt="Bruh moment"
        width={500} // You can adjust the width as needed
        height={500} // You can adjust the height as needed
        style={{ borderRadius: '10px' }}
      />
      <h1 style={{ marginTop: '20px', fontSize: '2rem', textAlign: 'center' }}>
        Bruh Moment
      </h1>
      <button
        onClick={handleGoBack}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Bruhpage;
