// NPM
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENTS
import Carousel from '../../../shared_components/Carousel';
import LocationCart from '../../../shared_components/Carts/Location';

// ACTIONS/CONFIG

// STYLES
import {
  PageWrapper,
  SectionWrap,
  SectionHeader,
  SectionContent,
  More,
} from '../../../shared_components/layout/Page';

import { BadgeDecentralized } from './../../../shared_components/Badge';

export default function HomeSectionLocations({ locations }) {
  return (
    <PageWrapper>
      <SectionWrap>
        <SectionHeader>
          <h3>Exciting Activities</h3>
          <More>
            <Link to="/results?service_types=activity">All experiences</Link>
          </More>
        </SectionHeader>
        <SectionContent>
          <Carousel sm_slides_nb={1} md_slides_nb={2} lg_slides_nb={4} xl_slides_nb={4}>
            {locations.map(item => (
              <Link to={'/services/' + item.objectId} key={item.objectId}>
                {item.contractAddress && <BadgeDecentralized>Decentralized</BadgeDecentralized>}
                <LocationCart item={item} withShadow key={item.objectId} />
              </Link>
            ))}
          </Carousel>
        </SectionContent>
      </SectionWrap>
    </PageWrapper>
  );
}

// Props Validation
HomeSectionLocations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};
