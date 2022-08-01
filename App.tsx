import * as React from 'react';
import './App.css';

import {
  provideFASTDesignSystem,
  fastAnchor,
  fastButton,
  fastAnchoredRegion,
  fastAvatar,
  fastBadge,
  fastBreadcrumb,
  fastBreadcrumbItem,
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

//Register and Wrap For React
export const FastAnchor = wrap(fastAnchor());
export const FastButton = wrap(fastButton());
export const FastAnchoredRegion = wrap(fastAnchoredRegion());
export const FastAvatar = wrap(fastAvatar());
export const FastBadge = wrap(fastBadge());

export const FastBreadcrumbItem = wrap(fastBreadcrumbItem());
export const FastBreadcrumb = wrap(fastBreadcrumb());

function App() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>Anchor</h1>
        <FastAnchor href="https://google.com">
          <h1 slot="start">start slot</h1>
          <h2 slot="end">end slot</h2>
          Anchor
        </FastAnchor>
      </div>
      <div>
        <h1>Anchor Region</h1>
        <FastButton
          appearance="stealth"
          id="anchor-center"
          style={{ marginLeft: '200px', marginTop: '200px' }}
        >
          Fast Button
        </FastButton>
        <FastAnchoredRegion
          id="region-anchor-attributes"
          anchor="anchor-center"
          vertical-positioning-mode="dynamic"
          horizontal-positioning-mode="dynamic"
          horizontal-default-position="center"
          // horizontalDefaultPosition='center'
          // horizontalPositioningMode='dynamic'
          // verticalPositioningMode='dynamic'
        >
          <div
            style={{
              backgroundColor: 'yellow',
              width: '200px',
              height: '200px',
            }}
          >
            Anchored Region - Center
          </div>
        </FastAnchoredRegion>
      </div>

      <div>
        <h1>Avatar</h1>
        <FastAvatar color="blue" fill="accent-primary">
          Avatar
        </FastAvatar>
      </div>

      <div>
        <h1>Badge</h1>
        <FastBadge fill="primary" color="white" circular>
          Avatar
        </FastBadge>
      </div>

      <div>
        <h1>Breadcrumb</h1>
        <FastBreadcrumb>
          <FastBreadcrumbItem href="#">Breadcrumb item 1</FastBreadcrumbItem>
          <FastBreadcrumbItem href="#">Breadcrumb item 2</FastBreadcrumbItem>
          <FastBreadcrumbItem>Breadcrumb item 3</FastBreadcrumbItem>
        </FastBreadcrumb>
      </div>
    </div>
  );
}

export default App;
