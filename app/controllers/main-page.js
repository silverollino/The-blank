import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),
    actions: {
        signIn(provider){
            switch(provider){
                case "google":
                this.get("session").open("firebase",{provider: "google"}).then(()=>{
                    if(this.get("session.isAuthenticated")){
                        return this.transitionToRoute("main-page");
                    }
                }).catch(()=>{
                    if(this.get("session.isAuthenticated")){
                        return this.transitionToRoute("main-page")
                    }
                })
                break;

                case "github":
                this.get("session").open("firebase",{provider: "github"}).then(()=>{
                    if(this.get("session.isAuthenticated")){
                        return this.transitionToRoute("main-page");
                    }
                }).catch(()=>{
                    if(this.get("session.isAuthenticated")){
                        return this.transitionToRoute("main-page")
                    }
                })
                break;

                case "email":
                this.get("session").open("firebase",{
                    provider: 'password',
                    email: this.get('email'),
                    password: this.get('password')
                }).then(()=>{
                    return this.transitionToRoute("main-page");
                })
                break;
            }
        }
    }
});
