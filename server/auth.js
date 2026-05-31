const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const router = express.Router();

router.post("/register", async (req, res) => {

  const {
    hoTen,
    email,
    maSinhVien,
    matKhau
  } = req.body;

  const hash = await bcrypt.hash(
    matKhau,
    10
  );

  db.query(
    `
    INSERT INTO TaiKhoan
    (
      HoTen,
      Email,
      MaSinhVien,
      MatKhau
    )
    VALUES (?, ?, ?, ?)
    `,
    [
      hoTen,
      email,
      maSinhVien,
      hash
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Đăng ký thành công"
      });
    }
  );
});

module.exports = router;
router.post("/login", (req,res)=>{

  const {
    email,
    matKhau
  } = req.body;

  db.query(
    `
    SELECT *
    FROM TaiKhoan
    WHERE Email = ?
    `,
    [email],
    async (err,result)=>{

      if(result.length===0){
        return res.status(400)
          .json({
            message:"Sai email"
          });
      }

      const user = result[0];

      const ok =
        await bcrypt.compare(
          matKhau,
          user.MatKhau
        );

      if(!ok){
        return res.status(400)
          .json({
            message:"Sai mật khẩu"
          });
      }

      res.json({
        success:true,
        user
      });

    }
  );

});