import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    //all are required=true columns. For now not add the check
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
