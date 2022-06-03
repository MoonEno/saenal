import React, { useState, Fragment } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
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
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                            <InputLabel id="demo-simple-select-standard-label">문의내용</InputLabel>
                            <Select
                                    fullWidth
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name="category"
                                    label="문의내용"
                            >
                                    <MenuItem value=""><em>문의내용</em></MenuItem>
                                    <MenuItem value="상담">상담</MenuItem>
                                    <MenuItem value="가격문의">가격문의</MenuItem>
                                    <MenuItem value="위치문의">위치문의</MenuItem>
                                    <MenuItem value="디자인시안">디자인시안</MenuItem>
                                    <MenuItem value="점심메뉴">점심메뉴</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="userName"
                        name="userName"
                        label="이름"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
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
                    />
                    </Grid>
                    <Grid item xs={12} spacing={5}>
                    <TextField
                        required
                        id="userPhone"
                        name="userPhone"
                        label="전화번호"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
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
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="개인정보 활용에 동의합니다."
                    />
                    <Button variant="contained" color="success" size='large' onClick={() => submit()}>
                        문의하기
                    </Button>
                    </Grid>
                </Grid>
                </div>
            </div>

        </Fragment>
    )
}

export default ContactUs;