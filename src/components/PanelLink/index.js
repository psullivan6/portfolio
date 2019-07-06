import React, { useRef, useState } from 'react';
import { Back, TweenMax } from 'gsap';
// import CustomEase from '../../vendor/CustomEase';
// import TransitionLink from 'gatsby-plugin-transition-link';

// Styles
import { Background, StyledPanelLink, StyledText } from './styles';

const PanelLink = ({ active = false, children, ...props }) => {
  const [isActive, setIsActive] = useState(active);
  const root = useRef(null);

  const handleExit = ({ exit }) => {
    const { left, width } = root.current.getBoundingClientRect();
    const parent = root.current.parentElement;
    const clone = root.current.cloneNode();
    clone.classList.add('clone');
    parent.insertBefore(clone, root.current);

    setIsActive(!isActive);

    TweenMax.fromTo(
      root.current,
      exit.length,
      {
        position: 'absolute',
        zIndex: 2,
        left,
        width,
      },
      {
        left: 0,
        width: '100%',
        ease: Back.easeOut.config(1.7),
      }
    );
  };

  return (
    <StyledPanelLink
      {...props}
      innerRef={root}
      isActive={isActive}
      exit={{
        trigger: handleExit,
        length: 0.3
      }}
      entry={{
        delay: 0.2,
        // length: 0.3,
        trigger: ({ entry, node }) => {
          // TweenMax.from(node, entry.length, {
          //   xPercent: -5,
          //   opacity: 0,
          //   ease: Power1.easeIn
          // });
        }
      }}
    >
      <StyledText
        display="block"
        textAlign="center"
        fontSize={{ zero: 7, large: 6 }}
        lineHeight={1}
        color="text"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {
        props.data && (
          <Background
            image={props.data.poster}
          />
        )
      }
    </StyledPanelLink>
  );
};

export default PanelLink;
