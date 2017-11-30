import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    beforemodel(){
        location.refresh();
        return this.get("session").fetch.catch(()=>{
            if(this.get("session.isAuthenticated")){
                this.transitionTo("lista-eventos");
            }
        })
    }
    
});
