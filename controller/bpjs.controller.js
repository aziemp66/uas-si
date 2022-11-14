const db = require("../models");

const renderAllMember = async (req, res) => {
	const member = await db.AnggotaBpjs.findAll();

	const member_dateFormatted = member.map((item) => {
		const date = new Date(item.tanggal_lahir);
		const dateFormatted = date.toLocaleDateString("id-ID");
		return {
			...item.dataValues,
			tanggal_lahir: dateFormatted,
		};
	});

	res.render("all-member", {
		member: member_dateFormatted,
	});
};

module.exports = {
	renderAllMember,
};
