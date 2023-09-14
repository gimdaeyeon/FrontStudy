import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('회원 조회 완료');
});
router.post('/',(req,res)=>{
    res.send('회원 가입 완료');
});
router.put('/',(req,res)=>{
    res.send('회원정보 수정 완료');
});
router.delete('/',(req,res)=>{
    res.send('회원 탈퇴 완료');
});


export default router;