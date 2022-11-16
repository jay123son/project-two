const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID =  'fbad1000cf3c4ef7a41840723f924601';
const redirectUri = 'https://localhost:3000';
const scopes =['user-library-read', 'playlist-read-private', ];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
