import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import ENV from 'frontend/config/environment';

let GoogleAuthenticator = ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
  ajax: Ember.inject.service(),

  authenticate(...args) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      return this._super(...args).then(data => {
        return this.get('ajax').post(`${ENV.apiHost}/authorizations`, {
          data: {
            grant_type: 'google_auth_code',
            authorization_code: data.authorizationCode
          }
        }).then(response => {
          return resolve({
            provider: data.provider,
            access_token: response.token,
            email: response.email
          });
        },
        reject);
      },
      reject);
    }
    );
  }
});

export default GoogleAuthenticator;