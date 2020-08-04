import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

//URL of the Identity Provider
issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

// URL of the SPA to redirect the user to after login
redirectUri: window.location.origin + '/index.html',

// The SPA's ID. The SPA is registered with this id at the auth-server
clientId: 'spa-demo',

// Set the scope for the permissions the cliet should request
// The first three are defined by OIDC. The 4th is a usecase-specific one
scope: 'openid profile email voucher',
}