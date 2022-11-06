import styled from '@emotion/styled';
import { Button, Container, Icon, Tab } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { lightTheme } from '../../styles/design-system/theme';
import { PlanetDeck } from '../common/components/PlanetDeck';
import { LayoutWrapper } from '../common/layouts';

const NewPlanetButton = styled(Button)`
  background-color: transparent;
  color: ${lightTheme.primary.first};
  font-weight: bold;
`;

export default function Topics() {
  return (
    <Container padding='1rem' className={classNames('topics')}>
      <Container
        className={classNames('topics__header', 'flex', 'justify-end')}
      >
        <Tab
          width='100%'
          defaultActiveTab={{
            index: 0,
            tabId: 'first',
          }}
        >
          <Tab.List
            suffixContent={
              <NewPlanetButton shadow='none' preffix={<Icon name='plus' />}>
                Add new planet
              </NewPlanetButton>
            }
          >
            <Tab.ListItem label='All' tabId='first' />
            <Tab.ListItem label='Ignored' tabId='second' />
          </Tab.List>
          <Tab.Content>
            <Tab.ContentItem tabId='first'>
              <PlanetDeck />
            </Tab.ContentItem>
            <Tab.ContentItem tabId='second'>
              <p>Ignoreds</p>
            </Tab.ContentItem>
          </Tab.Content>
        </Tab>
      </Container>
      <Container></Container>
    </Container>
  );
}

Topics.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
