import React, { useRef, useState, useEffect } from 'react';
import { Power2, TweenMax } from 'gsap/all';

// Components
import Text from '../Text';

// Styles
import { StyledPanel } from './styles';


const Panel = ({ children, image }) => {
  const root = useRef(null);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  // [TODO] Make this a helluva lot cleaner
  useEffect(() => {
    if (!active) { return; }

    const { left, width } = root.current.getBoundingClientRect();
    const clone = root.current.cloneNode(true);
    clone.classList.add('clone');
    clone.style = `position: absolute; left: ${left}px; width: ${width}px;`;
    clone.addEventListener('click', handleClick);
    root.current.parentElement.appendChild(clone);
    TweenMax.to(clone, 0.4, {
      left: 0,
      width: '100%',
      ease: Power2.easeOut,
    });
  }, [active]);

  return (
    <StyledPanel
      ref={root}
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      bgImg={image}
      onClick={handleClick}
      active={active}
    >
      <Text
        display="block"
        textAlign="center"
        fontSize={{ zero: 7, large: 6 }}
        lineHeight={1}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </StyledPanel>
  );
};

export default Panel;
