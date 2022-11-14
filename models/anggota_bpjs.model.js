const RekamMedis = require("./rekam_medis.model");
module.exports = (sequelize, DataTypes) => {
	const AnggotaBpjs = sequelize.define(
		"AnggotaBpjs",
		{
			id_anggota: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nama: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			jenis_kelamin: {
				type: DataTypes.ENUM("Laki-laki", "Perempuan"),
				allowNull: false,
			},
			tanggal_lahir: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);

	return AnggotaBpjs;
};
