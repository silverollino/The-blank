import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        chkRoom() {
            this.set('isValid',true);
        }
    }
});
