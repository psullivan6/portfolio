import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

// Utilities
import remapValues from '../remapValues';

const agnosticMatchMedia = (query) => {
  if (typeof window === 'undefined') {
    return {
      matches: false
    };
  }

  return window.matchMedia(query);
};

const useMedia = () => {
  const { queries } = useContext(ThemeContext);
  const matchMediaList = Object.values(queries).map(value => agnosticMatchMedia(value));

  const [breakpointBooleans, setBreakpointBooleans] = useState({
    ...remapValues(queries, query => agnosticMatchMedia(query).matches)
  });

  const getQueryName = (query) => {
    const lookupIndex = Object.values(queries).indexOf(query);
    return Object.keys(queries)[lookupIndex];
  };

  const handleUpdate = ({ media, matches }) => {
    const keyName = getQueryName(media);

    setBreakpointBooleans(prevState => ({
      ...prevState,
      [keyName]: matches
    }));
  };

  useEffect(() => {
    matchMediaList.forEach(item => item.addListener(handleUpdate));
    return () => matchMediaList.forEach(item => item.removeListener(handleUpdate));
  }, []);

  return breakpointBooleans;
};

export default useMedia;
