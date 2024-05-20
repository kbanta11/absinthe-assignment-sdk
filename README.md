# Absinthe SDK

The Absinthe SDK allows projects to easily interact with the Absinthe API to manage and distribute points for their users. This SDK supports various operations such as distributing points, retrieving points for an address, and filtering points by event name.

## Features

- **Distribute Points**: Assign points to a user based on an event.
- **Get Points**: Retrieve the total points for a specific address.
- **Get Points by Event**: Retrieve points for a specific address filtered by event name.

## Installation

Install the SDK using npm:

```bash
npm install absinthe-sdk
```

Usage
Initialization
To use the SDK, you need to initialize it with your API key, campaign ID, and the base URL of your Absinthe API.

typescript
Copy code
import AbsintheSDK from 'absinthe-sdk';

const sdk = new AbsintheSDK('your-api-key', 'your-campaign-id', 'https://your-nextjs-app.vercel.app');
Distribute Points
To distribute points to an address based on an event:

typescript
Copy code
sdk.distribute('event_name', { points: 100, address: '0x123...' })
  .then(response => {
    console.log('Points distributed:', response);
  })
  .catch(error => {
    console.error('Error distributing points:', error);
  });
Get Points
To retrieve the total points for a specific address:

typescript
Copy code
sdk.getPoints('0x123...')
  .then(points => {
    console.log('Points:', points);
  })
  .catch(error => {
    console.error('Error fetching points:', error);
  });
Get Points by Event
To retrieve points for a specific address filtered by event name:

typescript
Copy code
sdk.getPointsByEvent('0x123...', 'event_name')
  .then(points => {
    console.log('Points by event:', points);
  })
  .catch(error => {
    console.error('Error fetching points by event:', error);
  });