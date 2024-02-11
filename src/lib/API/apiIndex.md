### `toggleAutoposting`

**Description:** Toggle autoposting for one or more channels.

**Endpoint:**
- `/autoposting/${channelID}/on`: Enable autoposting for the specified channel.
- `/autoposting/${channelID}/off`: Disable autoposting for the specified channel.

**Method:** POST

**Parameters:**
- `channelIDs`: Single channel ID or an array of channel IDs.
- `toggle`: Autoposting action, either `'on'` or `'off'`.
- `settings`: Autoposting settings object containing an optional `interval` property with values `'60'`, `'30'`, or `null`.

**Example:**
```typescript
const response = await toggleAutoposting(123, 'on', { interval: '30' });
```

### `handPosting`

**Description:** Manually send a post to a channel.

**Endpoint:**
- `/autoposting/${channelID}/sendMessage`

**Method:** POST

**Parameters:**
- `channelID`: ID of the target channel.
- `settings`: Handposting settings object containing `contacts` (array of strings), `text` (string), and optional `img` (string).

**Example:**
```typescript
const response = await handPosting(123, { contacts: ['user1', 'user2'], text: 'Hello, world!', img: 'base64-encoded-image' });
```

### `addChannel`

**Description:** Add a new channel.

**Endpoint:**
- `/channels/add`

**Method:** POST

**Parameters:**
- `settings`: Object containing channel details.

**Example:**
```typescript
const response = await addChannel({ name: 'Channel 1', type: 'public' });
```

### `addLocation`

**Description:** Add a new location.

**Endpoint:**
- `/locations/add`

**Method:** POST

**Parameters:**
- `settings`: Object containing location details.

**Example:**
```typescript
const response = await addLocation({ name: 'Location 1', latitude: 123.456, longitude: 789.012 });
```

### `addBot`

**Description:** Add a new bot.

**Endpoint:**
- `/bot/add`

**Method:** POST

**Parameters:**
- `settings`: Object containing bot details.

**Example:**
```typescript
const response = await addBot({ name: 'Bot 1', token: 'your-bot-token' });
```

### `getChannels`

**Description:** Get a list of all channels.

**Endpoint:**
- `/channels/all`

**Method:** POST

**Parameters:**
- `settings`: Object containing any additional parameters.
- `cookies`: Optional cookies object.
- `baseUrl`: Optional base URL for the request.

**Example:**
```typescript
const response = await getChannels({}, { session: 'your-session-cookie' }, 'https://your-api-base-url');
```

### `getLocations`

**Description:** Get a list of all locations.

**Endpoint:**
- `/locations/all`

**Method:** GET

**Example:**
```typescript
const response = await getLocations();
```

### `getBots`

**Description:** Get a list of all bots.

**Endpoint:**
- `/bots/all`

**Method:** GET

**Example:**
```typescript
const response = await getBots();
```

### `initializeTelegramUser`

**Description:** Initialize a Telegram user.

**Endpoint:**
- `/account/check-user`

**Method:** POST

**Parameters:**
- `webApp`: Object containing web app initialization data.

**Example:**
```typescript
const response = await initializeTelegramUser({ initData: 'your-initialization-data' });
```