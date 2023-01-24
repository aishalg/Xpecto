const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    club: {
        type: String,
        required: true,
        default:""
    },
    info: {
        type: String,
        required: true,
        default:""
    },
    name: {
        type: String,
        required: true,
        unique: true,
        default:""
    },

    shortsummary: {
        type: String,
        required: true,
        default:""
    },

    longsummary: {
        type: String,
        required:true,
        default:""
    },

    event_image: {
        type: String,
        required: true,
        default:""
    },
    rulebook_link: {
        type: String,
        required: true,
        default:""

    },

    description: {
        type: String,
        required: true,
        default:""
    },

    problemset_link: {
        type: String,
        required: true,
        default:""

    },
    submission_link: {
        type: String,
        default:""
    },

    createdAt: {
        type: String,
       },

    start_time: {
        day: {
            type: String,
        },
        time: {
            type: String,
        },
    },

    end_time: {
        day: {
            type: String,
        },
        time: {
            type: String,
        },
    },

    prices: {
        first: {
            type: String,
            required: true,
            default:""
        },
        second: {
            type: String,
            required: true,
            default:""
        },
        third: {
            type: String,
            required: true,
            default:""
        },
    },

    coordinators:[ {
            name: {
                type: String,
                default:""
            },
            contact: {
                type: String,
                default:""
            },
        
    }
    ],

    // registeredUsers: [
    //     {
    //         user_id: {
    //             type: String,
    // unique:true
    //         },
    //     },
    // ],
    teamMaxSize: {
        type: String,
        required: true,
        default:""
    },
    teamMinSize: {
        type: String,
        required: true,
        default:""
    },
});
;

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
