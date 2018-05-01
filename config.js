import source from './source.json';

const user = USER;
const refreshToken = REFRESH_TOKEN;
const accessToken = ACCESS_TOKEN;

export default {
    user,
    clientId: source.web.client_id,
    clientSecret: source.web.client_secret,
    refreshToken,
    accessToken
}