const db = require("../models");

module.exports = (sequelize, DataTypes) => {
	const RekamMedis = sequelize.define(
		"RekamMedis",
		{
			id_rekam_medis: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_anggota: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			tanggal_rekam: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			gejala: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			tindakan: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			resep_obat: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);

	return RekamMedis;
};
