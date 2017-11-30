import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),

    actions:{
        signOut(){
            this.get("session").close().then(() => {
                return this.transitionToRoute("main-page");
                //cierre  de sesion
            })
        }
    }
});
