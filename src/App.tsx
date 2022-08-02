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
  fastCard,
  fastCheckbox,
  fastAccordion,
  fastAccordionItem,
  fastDataGrid,
  fastDataGridCell,
  fastDataGridRow,
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

export const FastCheckbox = wrap(fastCheckbox(), {
  events: {
    onChange: 'change'
  }
});

export const FastCard = wrap(fastCard());

export const FastAccordion = wrap(fastAccordion());

export const FastAccordionItem = wrap(fastAccordionItem());

// Note that registration order matters as the the grid element grabs the tags of the row/cell elements at registration time
//Order: 1. Register fastDataGridCell. 2. Register fastDataGridRow. 3. Register fastDataGrid
export const FastDataGridCell = wrap(fastDataGridCell());
export const FastDataGridRow = wrap(fastDataGridRow());
export const FastDataGrid = wrap(fastDataGrid());

function App() {


  // React.useEffect(()=>{
  //   const checkbox = document.getElementById('fast-checkbox')
  //   checkbox?.addEventListener('change', (event) => {
  //     if (event?.currentTarget.checked) {
  //       alert('checked');
  //     } else {
  //       alert('not checked');
  //     }
  //   })
      

  // }, [])

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


      <div>
        <h1>Button</h1>
        <FastButton onClick={() => alert("button is clicked")}>Button</FastButton>
      </div>
      <div>
        <h1>Checkbox</h1>
        <FastCheckbox onChange={(e)=>alert(e.currentTarget.checked)}>Checkbox</FastCheckbox>
      </div>


      <div>
        <h1>Accordion</h1>
          <FastAccordion>
            <FastAccordionItem>
              <div slot='heading'></div>
              Accordion one content
            </FastAccordionItem>
            <FastAccordionItem>
              <div slot='heading'></div>
              Accordion two content
            </FastAccordionItem>
          </FastAccordion>
      </div>





      <div>
        <h1>Data Grid</h1>
        <h1>FastDataGrid - rowsData</h1>
      <FastDataGrid
        rowsData={[
          {
            item1: 'value 1-1',
            item2: 'value 2-1',
            item3: 'value 4-1',
            item4: 'value 5-1',
          },
          {
            item1: 'value 1-2',
            item2: 'value 2-2',
            item3: 'value 4-2',
            item4: 'value 5-2',
          },
          {
            item1: 'value 1-3',
            item2: 'value 2-3',
            item3: 'value 4-3',
            item4: 'value 5-3',
          },
        ]}
        id="fast-grid"
      ></FastDataGrid>

      <h1>FastDataGrid - Nested Components</h1>
      <FastDataGrid id="fast-grid" grid-template-columns="1fr 1fr 1fr 1fr">
        <FastDataGridRow row-type="header">
          <FastDataGridCell grid-column="1" cell-type="columnheader">
            <FastButton
              appearance="accent"
              onClick={() => alert('Button is Clicked!')}
            >
              Click Me
            </FastButton>
          </FastDataGridCell>
          <FastDataGridCell grid-column="2" cell-type="columnheader">
            Column 2
          </FastDataGridCell>
          <FastDataGridCell grid-column="3" cell-type="columnheader">
            Column 3
          </FastDataGridCell>
          <FastDataGridCell grid-column="4" cell-type="columnheader">
            Column 4
          </FastDataGridCell>
        </FastDataGridRow>
        <FastDataGridRow>
          <FastDataGridCell grid-column="1">1.1</FastDataGridCell>
          <FastDataGridCell grid-column="2">1.2</FastDataGridCell>
          <FastDataGridCell grid-column="3">1.3</FastDataGridCell>
          <FastDataGridCell grid-column="4">1.4</FastDataGridCell>
        </FastDataGridRow>
        <FastDataGridRow>
          <FastDataGridCell grid-column="1">2.1</FastDataGridCell>
          <FastDataGridCell grid-column="2">2.2</FastDataGridCell>
          <FastDataGridCell grid-column="3">2.3</FastDataGridCell>
          <FastDataGridCell grid-column="4">2.4</FastDataGridCell>
        </FastDataGridRow>
      </FastDataGrid>
      </div>


      <div>
        <h1>Data Grid</h1>
      </div>

      <div>
        <h1>Card</h1>
        <FastCard>
          <div style={{ "color": "var(--neutral-foreground-rest)" }}>
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisscelerisque varius ornare. Etiam convallis sollicitudin scelerisque.Maecenas in velit vehicula, aliquet orci et, consequat purus. Donec egetsodales lectus, vel sollicitudin ligula. Suspendisse volutpat auctor diam,vel mattis lorem venenatis in.</p>
            <FastButton onClick={() => alert("button in card is clicked")}>Button</FastButton>
          </div>
        </FastCard>
      </div>

    </div>
  );
}

export default App;
