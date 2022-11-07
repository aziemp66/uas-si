module.exports = (sequelize, DataTypes) => {
	const Pesan = sequelize.define(
		"Pesan",
		{
			id_pesan: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			isi_pesan: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			email_pengirim: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			tanggal: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
	return Pesan;
};
