import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { shopIdAutoValue } from "./helpers";
import { Address } from "./address";
import { Metafield } from "./metafield";

/**
 * Accounts Schemas
 */
/*export const Closet = new SimpleSchema({
  first_name: {
    type: String,
    optional: true
  },
  last_name: {
    type: String,
    optional: true
  },
  about: {
    type: String,
    optional: true
  },
});*/

const TaxSettings = new SimpleSchema({
  exemptionNo: {
    type: String,
    optional: true
  },
  customerUsageType: {
    type: String,
    optional: true
  }
});

export const Profile = new SimpleSchema({
  addressBook: {
    type: [Address],
    optional: true
  },
  name: {
    type: String,
    optional: true
  },
  picture: {
    type: String,
    optional: true
  },
  closet: {
    type: Object,
    optional: true
  },
  "closet.first_name": {
    type: String,
    optional: true
  },
  "closet.last_name": {
    type: String,
    optional: true
  },
  "closet.about": {
    type: String,
    optional: true
  },
  "closet.profile_pic": {
    type: String,
    optional: true
  }
});

export const Email = new SimpleSchema({
  provides: {
    type: String,
    defaultValue: "default",
    optional: true
  },
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  verified: {
    type: Boolean,
    defaultValue: false,
    optional: true
  }
});

/**
 * Reaction Schemas Accounts
 */

export const Accounts = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    index: 1,
    label: "Accounts ShopId"
  },
  sessions: {
    type: [String],
    optional: true,
    index: 1
  },
  shopId: {
    type: String,
    autoValue: shopIdAutoValue,
    regEx: SimpleSchema.RegEx.Id,
    index: 1
  },
  emails: {
    type: [Email],
    optional: true
  },
  acceptsMarketing: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  state: {
    type: String,
    defaultValue: "new",
    optional: true
  },
  taxSettings: {
    type: TaxSettings,
    optional: true
  },
  note: {
    type: String,
    optional: true
  },
  profile: {
    type: Profile,
    optional: true
  },
  metafields: {
    type: [Metafield],
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (this.isUpdate) {
        return {
          $set: new Date
        };
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      }
    },
    optional: true
  }
});
