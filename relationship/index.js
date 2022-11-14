const db = require("../models");

module.exports = () => {
	const AnggotaBpjs = db.AnggotaBpjs;
	const RekamMedis = db.RekamMedis;

	AnggotaBpjs.hasOne(RekamMedis, {
		foreignKey: "id_anggota",
	});
	RekamMedis.belongsTo(AnggotaBpjs, {
		foreignKey: "id_anggota",
	});
};
