import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'

import debug from './helpers/debug'

import Board from '../src'

import CardEditableNote from '../src/components/CardEditableNote';

const data = {lanes:[
  {
      "id": "0",
      "title": "New Properties",
      "label": "3",
      "cards": [
          {
              "id": "CH675090",
              "title": "CH64",
              "description": "CHESHIRE WEST AND CHESTER",
              "label": "CH675090",
              "draggable": true,
              "metadata": {
                  "id": 53453,
                  "title_number": "CH675090",
                  "company_number": "03835451",
                  "postcode": "CH64",
                  "tenure": "Freehold",
                  "district": "CHESHIRE WEST AND CHESTER",
                  "county": "CHESHIRE WEST AND CHESTER",
                  "region": "NORTH WEST",
                  "price_paid": "10,000",
                  "total_floor_area": "0",
                  "property_type": null,
                  "date_added": "2021-01-02",
                  "lease_term": null,
                  "lease_price_paid": null,
                  "land": "-",
                  "plot_size": "0.63",
                  "laneId": 0,
                  "positionId": 0
              },
              "positionId": 0,
              "editable": {
                  "description": true
              },
              "laneId": "0"
          },
          {
              "id": "NGL735738",
              "title": "W1T",
              "description": "GREATER LONDON",
              "label": "NGL735738",
              "draggable": true,
              "metadata": {
                  "id": 1249766,
                  "title_number": "NGL735738",
                  "company_number": "00396137",
                  "postcode": "W1T",
                  "tenure": "Freehold",
                  "district": "CITY OF WESTMINSTER",
                  "county": "GREATER LONDON",
                  "region": "GREATER LONDON",
                  "price_paid": "10,000",
                  "total_floor_area": "0",
                  "property_type": null,
                  "date_added": "2020-05-01",
                  "lease_term": null,
                  "lease_price_paid": null,
                  "land": "-",
                  "plot_size": "0.02",
                  "laneId": 0,
                  "positionId": 1
              },
              "positionId": 1,
              "editable": {
                  "description": true
              },
              "laneId": "0"
          },
          {
              "id": "EX712722",
              "title": "CO1",
              "description": "ESSEX",
              "label": "EX712722",
              "draggable": true,
              "metadata": {
                  "id": 773060,
                  "title_number": "EX712722",
                  "company_number": "01435887",
                  "postcode": "CO1",
                  "tenure": "Freehold",
                  "district": "COLCHESTER",
                  "county": "ESSEX",
                  "region": "SOUTH EAST",
                  "price_paid": "15,000",
                  "total_floor_area": "0",
                  "property_type": null,
                  "date_added": "2020-05-01",
                  "lease_term": null,
                  "lease_price_paid": null,
                  "land": "land",
                  "plot_size": "2.85",
                  "laneId": 0,
                  "positionId": 2
              },
              "positionId": 2,
              "editable": {
                  "description": true
              },
              "laneId": "0"
          }
      ],
      "currentPage": 1
  },
  {
      "id": "1",
      "title": "Opportunities",
      "label": "1",
      "cards": [
          {
              "id": "166731",
              "title": "WC2B",
              "description": "GREATER LONDON",
              "label": "166731",
              "draggable": true,
              "metadata": {
                  "id": 159978,
                  "title_number": "166731",
                  "company_number": "01435887",
                  "postcode": "WC2B",
                  "tenure": "Freehold",
                  "district": "CAMDEN",
                  "county": "GREATER LONDON",
                  "region": "GREATER LONDON",
                  "price_paid": "7,300,000",
                  "total_floor_area": "0",
                  "property_type": "B1 Offices and Workshop businesses|A1/A2 Retail and Financial/Professional services|A1/A2 Retail and Financial/Professional services|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|A1/A2 Retail and Financial/Professional services|A1/A2 Retail and Financial/Professional services|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|A3/A4/A5 Restaurant and Cafes/Drinking Establishments and Hot Food takeaways|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|B1 Offices and Workshop businesses|Social clubs",
                  "date_added": "2020-05-01",
                  "lease_term": null,
                  "lease_price_paid": null,
                  "land": "-",
                  "plot_size": "0.13",
                  "laneId": 1,
                  "positionId": 0
              },
              "positionId": 0,
              "editable": {
                  "description": true
              },
              "laneId": "1"
          }
      ],
      "currentPage": 1
  },
  {
      "id": "2",
      "title": "Contacted",
      "label": "2",
      "cards": [
          {
              "id": "BGL51753",
              "title": "<no postcode>",
              "description": "GREATER LONDON",
              "label": "BGL51753",
              "draggable": true,
              "metadata": {
                  "id": 382232,
                  "title_number": "BGL51753",
                  "company_number": "00040754",
                  "postcode": "",
                  "tenure": "Leasehold",
                  "district": "KENSINGTON AND CHELSEA",
                  "county": "GREATER LONDON",
                  "region": "GREATER LONDON",
                  "price_paid": null,
                  "total_floor_area": "0",
                  "property_type": "Clinic",
                  "date_added": "2020-08-01",
                  "lease_term": "30 years from 18 December 2000",
                  "lease_price_paid": "",
                  "land": "-",
                  "plot_size": "-",
                  "laneId": 2,
                  "positionId": 0
              },
              "positionId": 0,
              "editable": {
                  "description": true
              },
              "laneId": "2"
          },
          {
              "id": "AGL124865",
              "title": "N22",
              "description": "GREATER LONDON",
              "label": "AGL124865",
              "draggable": true,
              "metadata": {
                  "id": 1879226,
                  "title_number": "AGL124865",
                  "company_number": "06438807",
                  "postcode": "N22",
                  "tenure": "Leasehold",
                  "district": "HARINGEY",
                  "county": "GREATER LONDON",
                  "region": "GREATER LONDON",
                  "price_paid": null,
                  "total_floor_area": "0",
                  "property_type": "Retail",
                  "date_added": "2020-05-01",
                  "lease_term": "From 24 June 1978 to 23 June 2023",
                  "lease_price_paid": "",
                  "land": "-",
                  "plot_size": "0.04",
                  "laneId": 2,
                  "positionId": 1
              },
              "positionId": 1,
              "editable": {
                  "description": true
              },
              "laneId": "2"
          }
      ],
      "currentPage": 1
  },
  {
      "id": "3",
      "title": "Deleted",
      "label": "1",
      "cards": [
          {
              "id": "CB334998",
              "title": "CB6",
              "description": "CAMBRIDGESHIRE",
              "label": "CB334998",
              "draggable": true,
              "metadata": {
                  "id": 44738,
                  "title_number": "CB334998",
                  "company_number": "04127947",
                  "postcode": "CB6",
                  "tenure": "Freehold",
                  "district": "EAST CAMBRIDGESHIRE",
                  "county": "CAMBRIDGESHIRE",
                  "region": "EAST ANGLIA",
                  "price_paid": null,
                  "total_floor_area": "0",
                  "property_type": null,
                  "date_added": "2021-03-01",
                  "lease_term": null,
                  "lease_price_paid": null,
                  "land": "land",
                  "plot_size": "0.01",
                  "laneId": 3,
                  "positionId": 0
              },
              "positionId": 0,
              "editable": {
                  "description": true
              },
              "laneId": "3"
          }
      ],
      "currentPage": 1
  },
  {
      "id": "4",
      "title": "Shaun Col",
      "label": "1",
      "cards": [
          {
              "id": "AGL181606",
              "title": "EN2",
              "description": "GREATER LONDON",
              "label": "AGL181606",
              "draggable": true,
              "metadata": {
                  "id": 952540,
                  "title_number": "AGL181606",
                  "company_number": "08087453",
                  "postcode": "EN2",
                  "tenure": "Leasehold",
                  "district": "ENFIELD",
                  "county": "GREATER LONDON",
                  "region": "GREATER LONDON",
                  "price_paid": null,
                  "total_floor_area": "0",
                  "property_type": null,
                  "date_added": "2020-05-01",
                  "lease_term": "10 Years from 28 January 2008",
                  "lease_price_paid": "",
                  "land": "-",
                  "plot_size": "0.07",
                  "laneId": 4,
                  "positionId": 0
              },
              "positionId": 0,
              "editable": {
                  "description": true
              },
              "laneId": "4"
          }
      ],
      "currentPage": 1
  }
]};

class BoardWithCustomCard extends Component {
  state = {boardData: data}

  render() {
    const shouldReceiveNewData = nextData => {
      debug('Board has changed')
      debug(nextData)
    }

    return (
      <Board
        className={"hide-placeholder-unless-hovered"}
        tagStyle={{fontSize: '80%'}}
        data={this.state.boardData}
        draggable
        onCardClick={(cardId, metadata) => alert(`Card with id:${cardId} clicked. Has metadata.id: ${metadata.id}`)}
        onDataChange={shouldReceiveNewData}
        components={{Card: CardEditableNote}}
      />
    )
  }
}

storiesOf('Editable Board', module).add(
  'Editable Note Field',
  () => {
    return <BoardWithCustomCard />
  },
  {info: 'Card with editable note field'}
)
