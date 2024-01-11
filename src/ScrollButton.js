import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '50px',
        zIndex: visible ? '999' : '-1',
        display: visible ? 'block' : 'none',
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={scrollToTop}
        style={{
          padding: '5px',
          zIndex: '1',
          // height: '40px',
          // width: '40px',
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </div>
  );
};

export default ScrollButton;
