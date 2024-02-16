CREATE TABLE [User] (
  [_id] String PRIMARY KEY,
  [email] String,
  [name] String,
  [password] String,
  [city] String,
  [state] String,
  [country] String,
  [occupation] String,
  [phoneNumber] String,
  [role] String,
  [transactions] Array
)
GO

CREATE TABLE [Transaction] (
  [_id] String PRIMARY KEY,
  [affiliateId] String,
  [cost] String,
  [products] Array
)
GO

CREATE TABLE [AffiliateStats] (
  [_id] String PRIMARY KEY,
  [userId] String,
  [affiliateSales] Array
)
GO

CREATE TABLE [Product] (
  [_id] String PRIMARY KEY,
  [name] String,
  [price] String,
  [description] String,
  [category] String,
  [rating] Number,
  [supply] Number
)
GO

CREATE TABLE [ProductStat] (
  [_id] String PRIMARY KEY,
  [productId] String,
  [yearlySalesTotal] Currency,
  [yearlyTotalSoldUnits] Number,
  [year] Number,
  [monthlyData] Array,
  [dailyData] Array
)
GO

CREATE TABLE [OverallStats] (
  [_id] String PRIMARY KEY,
  [yearlySalesTotal] Currency,
  [yearlyTotalSoldUnits] Number,
  [year] Number,
  [monthlyData] Array,
  [dailyData] Array,
  [totalCustomers] Number,
  [salesByCategory] Map
)
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([_id]) REFERENCES [User] ([transactions])
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([cost]) REFERENCES [User] ([_id])
GO

ALTER TABLE [AffiliateStats] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([_id])
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([_id]) REFERENCES [AffiliateStats] ([affiliateSales])
GO

ALTER TABLE [Product] ADD FOREIGN KEY ([_id]) REFERENCES [Transaction] ([products])
GO

ALTER TABLE [Product] ADD FOREIGN KEY ([_id]) REFERENCES [ProductStat] ([productId])
GO
