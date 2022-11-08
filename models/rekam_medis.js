const AnggotaBpjs = require("./anggota_bpjs");

module.exports = (sequelize, DataTypes) => {
	const RekamMedis = sequelize.define(
		"rekam_medis",
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
	RekamMedis.hasOne(AnggotaBpjs, {
		foreignKey: "id_anggota",
		sourceKey: "id_anggota",
	});
	return RekamMedis;
};