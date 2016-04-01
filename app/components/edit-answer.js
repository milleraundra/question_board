import Ember from 'ember';

export default Ember.Component.extend({
  isEditFormShowing: false,
  actions: {
    showEditForm() {
      this.set('isEditFormShowing', true);
    },
    updateAnswer() {
      var params = {
        body: this.get('answer.body') ? this.get('answer.body') : ""
      };
      this.sendAction('editAnswer', params);
    }
  }
});
