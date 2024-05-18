const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    additionalRemarkType: {
      type: String,
      required: false,
    },
    additionalRemark: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model('Question', questionSchema);
