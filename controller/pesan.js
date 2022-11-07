const db = require("../models");

const PostPesan = async (req, res) => {
	const { nama, email, pesan } = req.body;

	try {
		const pesanBaru = await db.Pesan.create({
			nama_pengirim: nama,
			email_pengirim: email,
			isi_pesan: pesan,
		});

		res.json({
			message: "Pesan berhasil dikirim",
			data: pesanBaru,
		});
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

		res.json({
			message: "Pesan berhasil dihapus",
			data: pesanDihapus,
		});
	} catch (error) {
		res.json({
			message: "Pesan gagal dihapus",
			data: error,
		});
	}
};

const UpdatePesan = async (req, res) => {
	const { id } = req.params;
	const { nama, email, pesan } = req.body;

	try {
		const pesanDiupdate = await db.Pesan.update(
			{
				nama_pengirim: nama,
				email_pengirim: email,
				isi_pesan: pesan,
			},
			{
				where: {
					id_pesan: id,
				},
			}
		);

		res.json({
			message: "Pesan berhasil diupdate",
			data: pesanDiupdate,
		});
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

	res.render("pesan", {
		title: "Pesan",
		pesan: allPesan,
	});
};

module.exports = {
	PostPesan,
	DeletePesan,
	UpdatePesan,
	GetPesan,
};
