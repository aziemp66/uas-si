const db = require("../models");

const PostPesan = async (req, res) => {
	const { nama, email, pesan } = req.body;

	try {
		const pesanBaru = await db.Pesan.create({
			nama_pengirim: nama,
			email_pengirim: email,
			isi_pesan: pesan,
		});

		res.send({
			message: "Pesan berhasil dikirim",
			data: pesanBaru,
		});
	} catch (error) {
		res.send({
			message: "Pesan gagal dikirim",
			data: error,
		});
	}
};

module.exports = {};
