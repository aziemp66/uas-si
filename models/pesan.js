module.exports = (sequelize, DataTypes) => {
	const Todo = sequelize.define("Todo", {
		id_pesan: {
			type: DataTypes.STRING,
			primaryKey: true,
			autoIncrement: true,
		},
		isi_pesan: {
			type: DataTypes.STRING,
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
	});
	return Todo;
};
