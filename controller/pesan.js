const db = require("../models");

const PostPesan = async (req, res) => {
	const { email, pesan } = req.body;

	try {
		const pesanBaru = await db.Pesan.create({
			email_pengirim: email,
			isi_pesan: pesan,
		});

		res.redirect("/pesan");
	} catch (error) {
		res.json({
			message: "Pesan gagal dikirim",
			data: error,
		});
	}
};

const DeletePesan = async (req, res) => {
	const { id } = req.params;

	try {
		const pesanDihapus = await db.Pesan.destroy({
			where: {
				id_pesan: id,
			},
		});

		res.redirect("/pesan");
	} catch (error) {
		res.json({
			message: "Pesan gagal dihapus",
			data: error,
		});
	}
};

const UpdatePesan = async (req, res) => {
	const { id } = req.params;
	const { email, pesan } = req.body;

	try {
		const pesanDiupdate = await db.Pesan.update(
			{
				email_pengirim: email,
				isi_pesan: pesan,
			},
			{
				where: {
					id_pesan: id,
				},
			}
		);

		res.redirect("/pesan");
	} catch (error) {
		res.json({
			message: "Pesan gagal diupdate",
			data: error,
		});
	}
};

const GetPesan = async (req, res) => {
	let allPesan;
	try {
		allPesan = await db.Pesan.findAll();
	} catch (error) {
		res.json({
			message: "Pesan gagal didapatkan",
			data: error,
		});
	}

	const allPesan_dateFormatted = allPesan.map((pesan) => {
		const tanggalFormatted = pesan.tanggal.toISOString().split("T");

		return {
			...pesan.dataValues,
			tanggal: tanggalFormatted[0] + " " + tanggalFormatted[1].split(".")[0],
		};
	});

	res.render("pesan", {
		title: "Pesan",
		pesan: allPesan_dateFormatted,
	});
};

module.exports = {
	PostPesan,
	DeletePesan,
	UpdatePesan,
	GetPesan,
};
