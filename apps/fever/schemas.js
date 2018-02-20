/*
 * Gateway Schema:
 * Defines the schema of a Gateway
 */
SponsorSchema = new SimpleSchema({
  sponsorLevel: {
    type: String,
    label: 'Sponsorship Level',
    allowedValues: ['Premier','Gold','Silver','Bronze']
  },
  name: {
    type: String,
    label: 'Name'
  },
  email: {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  url: {
    type: String,
    label: 'URL',
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  img: {
    type: String,
    label: 'Logo',
    optional: true
  }
});

DonationSchema = new SimpleSchema({
  type: {
    type: String,
    label: 'Donation type',
    allowedValues: ['Auction','Cash','Sponsorship'],
    defaultValue: 'Auction'
  },
  level: {
    type: String,
    label: 'Donation level',
    allowedValues: ['Premier','Gold','Silver','Bronze','Standard'],
    defaultValue: 'Standard'
  },
  description: {
    type: String,
    label: 'Description of donation'
  },
  value: {
    type: Number,
    label: 'Dollar value',
    optional: true
  },
  img: {
    type: String,
    label: 'Picture of item',
    optional: true
  },
  donorId: {
    type: String,
    label: 'userId of donor',
    optional: true
  },
  donorName: {
    type: String,
    label: 'Name of donor'
  },
  url: {
    type: String,
    label: 'URL to donors website',
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  email: {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  date: {
    type: Date,
    label: 'Date donated',
    defaultValue: new Date()
  }
});




