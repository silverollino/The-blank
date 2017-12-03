import Component from '@ember/component';

export default Component.extend({
    actions: {
        chkRoom() {
            this.set('isValid',true);
        }
    }
});
