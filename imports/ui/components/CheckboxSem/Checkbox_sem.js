import './Checkbox_sem.html'

AutoForm.addInputType('sem-checkbox', {
    template: 'Checkbox_sem',
    valueIn: this.value,
    valueOut: function () {
        console.log(!!this.is(":checked"));
        return !!this.is(":checked");
    },
    contextAdjust: function (context) {
        if (context.value === true) {
            context.atts.checked = "";
        }
        //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
        delete context.atts.required;
        return context;
    }
});
