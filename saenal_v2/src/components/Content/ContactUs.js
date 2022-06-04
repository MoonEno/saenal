import React, { useState, Fragment } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

function ContactUs() {

    const [inputs, setInputs] = useState({
        category: '',
        userName: '',
        userEmail: '',
        userPhone: '',
        content: '',
    });

    const { userName, userEmail, userPhone, content } = inputs;

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
            userName: '',
            userEmail: '',
            userPhone: '',
            content: '',
        });
    }

    const submit = () => {
        
    }




    return (
        <Fragment>
            <div className="heading">
                <h1><b style={{color:'#0CB8A5'}}>C</b>ontact <b style={{color:'#0CB8A5'}}>U</b>s</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio minus optio?</p>
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
                                    label="문의내용"
                                    style={{height: 80, fontSize: '15px'}}
                            >
                                    <MenuItem value=""><em>문의내용</em></MenuItem>
                                    <MenuItem value="상담">상담</MenuItem>
                                    <MenuItem value="작업의뢰">작업의뢰</MenuItem>
                                    <MenuItem value="방문문의">방문문의</MenuItem>
                                    <MenuItem value="디자인문의">디자인문의</MenuItem>
                                    
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="userName"
                        name="userName"
                        label="이름/업체명"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        InputProps={{
                                style: {height: '70px', fontSize: '20px'}
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="userEmail"
                        name="userEmail"
                        label="이메일"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        InputProps={{
                            style: {height: '70px', fontSize: '20px'}
                    }}
                    />
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="userPhone"
                        name="userPhone"
                        label="연락처"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        InputProps={{
                            style: {height: '70px', fontSize: '20px'}
                    }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                                id="content"
                                name="content"
                                label="내용"
                                multiline
                                rows={8}
                                fullWidth
                                placeholder='내용을 입력하세요'
                                onChange={onChange}
                                InputProps={{
                                    style: {fontSize: '15px'}
                            }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        size="large"
                        label={ <Box component="div" fontSize={15}>
                                    개인정보활용에 동의합니다.
                                </Box>}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" color="success" size='large' onClick={() => submit()} style={{width:'50%', height:'60px',  backgroundColor: "#0CB8A5"}}>
                        <p style={{fontSize:'17px'}}>문의하기</p>
                    </Button>
                    </Grid>
                    
                </Grid>
                </div>
            </div>

        </Fragment>
    )
}

export default ContactUs;