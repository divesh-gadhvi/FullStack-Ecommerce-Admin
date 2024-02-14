import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    //all are required=true columns. For now not add the check
    userId: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
    },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
