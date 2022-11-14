const db = require("../models");

const renderAllMember = async (req, res) => {
	// get all bpjs member with their medical record data with join on id_anggota
	let members;
	try {
		members = await db.AnggotaBpjs.findAll({
			include: db.RekamMedis,
		});
	} catch (error) {
		console.log(error);
	}
	if (!members || members.length === 0) {
		return res.status(404).json({
			message: "No member found",
		});
	}

	// format the date
	const members_dateFormatted = members.map((member) => {
		const member_dateFormatted = {
			...member.dataValues,
			tanggal_lahir: member.dataValues.tanggal_lahir
				.toISOString()
				.split("T")[0],
			tanggal_rekam:
				member.dataValues.RekamMedi &&
				member.dataValues.RekamMedi.tanggal_rekam.toISOString().split("T")[0],
		};
		return member_dateFormatted;
	});
	console.log(members_dateFormatted[0].RekamMedi);

	res.render("all-member", {
		member: members_dateFormatted,
	});
};

const renderMedicalRecord = async (req, res) => {
	const { id } = req.params;

	let medicRecord;
	try {
		medicRecord = await db.RekamMedis.findOne({
			where: {
				id_rekam_medis: id,
			},
		});
	} catch (error) {
		res.render("error404");
	}

	let member;
	try {
		member = await db.AnggotaBpjs.findOne({
			where: {
				id_anggota: medicRecord.id_anggota,
			},
		});
	} catch (error) {
		res.render("error404");
	}

	const medicRecord_dateFormatted = {
		...medicRecord.dataValues,
		tanggal_rekam: new Date(medicRecord.tanggal_rekam).toLocaleDateString(
			"id-ID"
		),
	};

	res.render("medical", {
		medic: medicRecord_dateFormatted,
		nama: member.nama,
	});
};

const renderMemberData = async (req, res) => {
	const { id } = req.params;

	let member;
	try {
		member = await db.AnggotaBpjs.findOne({
			where: {
				id_anggota: id,
			},
		});
	} catch (error) {
		res.render("error404");
	}

	const member_dateFormatted = {
		...member.dataValues,
		tanggal_lahir: new Date(member.tanggal_lahir).toLocaleDateString("id-ID"),
	};

	res.render("member", {
		member: member_dateFormatted,
	});
};

module.exports = {
	renderAllMember,
	renderMedicalRecord,
	renderMemberData,
};
