import React, { Fragment, useEffect, useState } from 'react'

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/Box';
import Panel from '../components/Panel';

// Utilities
import useMedia from '../utilities/hooks/useMedia';

const images = [
  'https://images.unsplash.com/photo-1560814433-6555634952b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560971501-4c1cbc01f36c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1559852865-f4ead0b3d8e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1559735614-e35ef860a156?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560987617-6de57e3d0574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1561297437-e3d7c364be46?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1561271657-fbad0db4caaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1561983273-584475c50236?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560932992-a93e9ca8a0c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1561963280-2528183d7937?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560521698-5b8c79f425c1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1562186134-7fcf89b7507c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560327636-003a959356e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1561229557-df71d15614e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'https://images.unsplash.com/photo-1560750174-8c2095103e47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
];

const getItemsArray = string => (
  string.split('').map((item, index) => ({
    letter: (item) === ' ' ? '&nbsp;' : item,
    image: images[index]
  }))
)

const IndexPage = () => {
  const { large: isLarge } = useMedia();
  const [items, setItems] = useState(isLarge ? getItemsArray('Patrick Sullivan') : getItemsArray('Patrick'));

  useEffect(() => {
    setItems(isLarge ? getItemsArray('Patrick Sullivan') : getItemsArray('Patrick'))
  }, [isLarge]);

  return (
    <Fragment>
      <SEO title="Home" />
      <Box
        as="main"
        display="flex"
        height="100%"
      >
        {
          items.map((item, index) => (
            <Panel
              key={`${index}-${item.letter}`}
              image={item.image}
              to="/projects/one"
            >
              {item.letter}
            </Panel>
          ))
        }
      </Box>
    </Fragment>
  );
}

const WrappedPage = (props) => (
  <Layout>
    <IndexPage {...props} />
  </Layout>
)

export default WrappedPage
