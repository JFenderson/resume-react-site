const user = process.env.USER;
const refreshToken = process.env.REFRESH_TOKEN;
const accessToken = process.env.ACCESS_TOKEN;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

export default{
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
}