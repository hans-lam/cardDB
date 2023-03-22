const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardTypeEnum = {
    Monster: 'Monster',
    Spell: 'Spell',
    Trap: 'Trap'
};
const monsterTypeEnum = ['Token', 'Normal', 'Effect', 'Union', 'Spirit', 'Flip',
    'Gemini', 'Ritual', 'Tuner', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link'];
const spellTypeEnum = ['Normal', 'Continuous', 'Equip', 'Quick-Play', 'Field', 'Ritual'];
const trapTypeEnum = ['Normal', 'Continuous', 'Counter'];
const cardSubTypeEnum = {
    Monster: monsterTypeEnum,
    Spell: spellTypeEnum,
    Trap: trapTypeEnum
};

const yugiohSchema = new Schema({
    cardName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    cardType: {
        type: String,
        enum: Object.values(cardTypeEnum),
        required: true,
        trim: true
    },
    cardSubType: {
        type: [String],
        required: true,
        trim: true,
        set: function(value) {
            const options = cardSubTypeEnum[this.cardType];
            for (let val in value) {
                if (!(options.includes(value[val]))) {
                    throw new Error(`Invalid cardSubType value: ${value}`);
                }
            }
            return value;
        }
    },
    cardOrigin: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    numberOwned: {
        type: Number,
        min: 1,
        required: true
    },
    tcgPlayerLink: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
});

const yugioh = mongoose.model('yugioh', yugiohSchema);
module.exports = yugioh;