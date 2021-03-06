import SimpleSchema from "simpl-schema";

SimpleSchema.extendOptions(['autoform']);


const Member = new SimpleSchema({
    ID: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    username: {
        type: String,
        min: 3
    },
});

const Wants = new SimpleSchema({
    role: {
        type: String,
        allowedValues: ['TL', 'PR', 'CL', 'RD', 'QC']
    },
    amount: {
        type: String,
        min: 0,
    },
});


const Group = new SimpleSchema({

    name: {
        type: String,
        min: 3,
        max: 60
    },
    members: {
        type: Array,
        optional: true
    },
    "members.$": {
        type: Member
    },
    series: {
        type: Array,
        optional: true

    },
    "series.$": {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    discord: {
        type: String,
        regEx: /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/,
        optional: true
    },
    mangadex:{
        type: String,
        regEx: /(https?:\/\/)?(mangadex\.(org)\/group)\/\d+.*/,
        optional: true
    },
    website:{
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    relabelAssign: {
        type: Boolean,
        label: "Re-labels \"Assign\" to \"Taken\"",
        defaultValue: false,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },
    allowSelfAssign: {
        type: Boolean,
        label: "Allows members to assign themselves tasks",
        defaultValue: false,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },
    allowAutoAssign: {
        type: Boolean,
        label: "BETA, DOES NOTHING: members assigned tasks automatically",
        optional: true,
        defaultValue: false,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },
    combineClWithRd: {
        type: Boolean,
        label: "Combine cleaning and redrawing as one role",
        defaultValue: false,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },
    QC: {
        type: Boolean,
        label: "Use a Quality Control roll",
        defaultValue: true,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },
    publicStats: {
        type: Boolean,
        label: "Have a public page for viewers to vew group stats and progress",
        defaultValue: true,
        // autoform: {
        //     afFieldInput: {
        //         type: "sem-checkbox",
        //     }
        // }
    },

    wantedRoles: {
        type: Array,
        optional: true,
        maxCount: 5
    },
    "wantedRoles.$": {
        type: Wants
    },

},{tracker: Tracker});

export {Group as group,};