const RekamMedis = require("./rekam_medis");
module.exports = (sequelize, DataTypes) => {
	const AnggotaBpjs = sequelize.define(
		"anggota_bpjs",
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
	AnggotaBpjs.belongsTo(RekamMedis, {
		foreignKey: "id_anggota",
		targetKey: "id_anggota",
	});
	return AnggotaBpjs;
};
