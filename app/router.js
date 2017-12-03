import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main-page', {path: "/"});
  this.route('new-room');
  this.route('game-room');
  this.route('registrar');
  this.route('unirse-room');
});

export default Router;
