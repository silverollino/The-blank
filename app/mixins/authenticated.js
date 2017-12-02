import Mixin from '@ember/object/mixin';

export default Mixin.create({
    beforeModel() {
        return this.get("session").fetch().catch(() => {
            //Forza la obtencion de la sesion con FETCH que es una promesa y el catch verifica si se cumple
            //o no la promesa de fetch
            if (this.get("session.isAuthenticated")) {
            } else {
                //Si no esta autenticado lo regresamos a la pantalla donde haria el login
                return this.transitionTo("main-page");
            }
        });
    }
});
