import Router from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Node.js boilerplate by Hendrik Cromboom');
});
router.get('/about', (req, res) =>{
    res.send('Insert project about here')
})
router.get('/contact', (req, res) =>{
    res.send('You can reach me: hendrikcrmb@gmail.com')
})

export default router;