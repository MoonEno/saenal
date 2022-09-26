import React, { useState, Fragment } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import emailjs from '@emailjs/browser';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

    const [inputs, setInputs] = useState({
        category: '',
        who: '',
        email: '',
        phone: '',
        contents: '',
    });

    const { category, who, email, phone, contents } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onDataReset = () => {
        setInputs({
            category: '',
            who: '',
            email: '',
            phone: '',
            contents: '',
        });
    }

    const submit = () => {

        let msg = '';
        console.log("haa");
        
        for (let [k, v] of Object.entries(inputs)) {
            if (!v) {
                console.log("Aa");
                switch (k) {
                    case 'category' : msg ='카테고리를 선택해 주세요.' ; break;
                    case 'who' : msg = '이름/업체명을 작성해 주세요.'; break;
                    case 'email': msg = '이메일을 적어주세요.'; break;
                    case 'phone': msg = '연락처를 적어주세요.'; break;
                    case 'contents' : msg = '문의내용을 적어주세요.'; break;
                }


                console.log("error", msg);
                toast.error(msg , {
                    position : toast.POSITION.TOP_CENTER,
                    hideProgressBar : true
                });
                return ;
            }
            console.log("????");
        }

        emailjs.send('service_iy9egq9', 'template_g7p7e5q', inputs, 'CRWPb5VMd1e7bE7GL').then((res) => {
            if (res.status === 200) {
                toast.success("정상적으로 접수되었습니다. 감사합니다.", {
                    position : toast.POSITION.TOP_CENTER,
                    hideProgressBar : true,
                });
                onDataReset();
            }
        });
    }

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            ["category"] : event.target.value
        });
    }

    return (
        <Fragment>
            <div className="heading">
                <h1><b style={{color:'#0CB8A5'}}>C</b>ontact <b style={{color:'#0CB8A5'}}>U</b>s</h1>
            </div>
            <div className='contactInfo'>
                <div className='box'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="standard" sx={{ minWidth: 220 }} style={{width:'50%' }}>
                            <InputLabel id="demo-simple-select-standard-label">문의내용</InputLabel>
                            <Select
                                    fullWidth
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name="category"
                                    value={category}
                                    label="문의내용"
                                    style={{height: 80, fontSize: '15px'}}
                                    onChange = {handleChange}
                            >
                                    <MenuItem value=""><em>문의내용</em></MenuItem>
                                    <MenuItem value={"상담"}>상담</MenuItem>
                                    <MenuItem value={"작업의뢰"}>작업의뢰</MenuItem>
                                    <MenuItem value={"방문문의"}>방문문의</MenuItem>
                                    <MenuItem value={"디자인문의"}>디자인문의</MenuItem>
                                    
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="who"
                        name="who"
                        label="이름/업체명"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        value={who}
                        InputProps={{
                                style: {height: '70px', fontSize: '20px'}
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="이메일"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        value={email}
                        InputProps={{
                            style: {height: '70px', fontSize: '20px'}
                    }}
                    />
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="연락처"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        value={phone}
                        InputProps={{
                            style: {height: '70px', fontSize: '20px'}
                    }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                                id="contents"
                                name="contents"
                                label="내용"
                                multiline
                                rows={8}
                                fullWidth
                                placeholder='내용을 입력하세요'
                                onChange={onChange}
                                value={contents}
                                InputProps={{
                                    style: {fontSize: '15px'}
                            }}
                    />
                    </Grid>
                    {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        size="large"
                        label={ <Box component="div" fontSize={15}>
                                    개인정보활용에 동의합니다.
                                </Box>}
                    />
                    </Grid> */}
                    <Grid item xs={12}>
                    <Button variant="contained" color="success" size='large' onClick={() => submit()} style={{width:'50%', height:'60px',  backgroundColor: "#0CB8A5"}}>
                        <p style={{fontSize:'17px'}}>문의하기</p>
                    </Button>
                    </Grid>
                    
                </Grid>
                </div>
            </div>
            <ToastContainer style={{marginTop: '7%', fontSize: '1.5rem', fontWeight: '700' }} autoClose="1500" />

        </Fragment>
    )
}

export default ContactUs;