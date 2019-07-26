import React, { useState, useEffect } from 'react';
import { IoIosAddCircleOutline as UploadIcon } from 'react-icons/io';
import swal from 'sweetalert';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import FileImage from '../../assets/images/pictures.png';

import * as api from '../../lib/api';

import './SendArea.scss';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    padding: 12,
    width: '50%',
    marginBottom: 100
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10
  },
  cover: {
    width: 32,
    height: 32
  },
  filename: {
    fontSize: 15,
    margin: 0,
    fontWeight: 'bold'
  },
  filesize: {
   fontSize: 14,
   fontWeigh: 300 
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  button: {
    backgroundColor: '#5f3dc4',
    color: '#fff',
    '&:hover': {
      background: '#4e32a0'
    }
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));



const defaultFileData = {
  fileName: 'Default',
  fileSize: '0 KB',
};

const bytesToSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes === 0) return '0 Byte';

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

const UploadBox = () => {
  return (
    <>
      <label className="upload-icon-box" htmlFor="file_input">
        <UploadIcon className="upload-icon" />
      </label>
      <h3>파일을 선택해 주세요.</h3>
      <p>JPG, PNG, JPEG 같은 이미지 포맷형식의 파일만 업로드 할 수 있습니다.</p>
    </>
  );
};

const FileBox = ({ name, size }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={FileImage}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.filename}>{ name }</Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.filesize}>{ size }</Typography>
      </div>
      
    </Card>
  );
};


const SendArea = ({ changeStage, returnResult }) => {
  const [Selected, setSelected] = useState(false);
  const [fileData, setFileData] = useState(defaultFileData);
  const [formData, setFormData] = useState(defaultFileData);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const _handleChange = async (e) => {
    const files = Array.from(e.target.files);

		// 파일 선택 취소하면 return false
		if (!files || !files.length) return false;

		const formData = new FormData();

		files.forEach((file) => {
			formData.append('before', file);
		});

		if (files.length) {
			await setFileData({
        fileName: files[0].name,
        fileSize: bytesToSize(files[0].size)
      });

      await setFormData(formData);

      await setSelected(true);
		}
  }

  const _handleUpload = async (type) => {
    try {
      let result;
      setLoading(true);

      if (type === 'test') {
        result = {
          before: '1',
          ing: '2',
          color_list: '[[0,0,0], [0,64,0], [128,0,0], [0,0,128]]'
        };
      } else {
        result = await api.sendImage(formData);
      }

      swal('업로드 성공', '이미지 업로드에 성공했습니다.', 'success');

      await returnResult(result);

      setLoading(false);
      changeStage(2);
    } catch (err) {
      swal('업로드 실패', '이미지 업로드에 실패했습니다.', 'error');
      
      setLoading(false);
    }
  }

  return (
    <div className="send_area">
      <div className={ `send_box ${!Selected && 'dashed'}`}>
        {!Selected 
          ? <><UploadBox /> <label className="btn" htmlFor="file_input">업로드할 파일을 선택하세요</label></>
          : <>
              <FileBox name={fileData.fileName} size={fileData.fileSize} />
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={ `btn ${classes.button}`}
                  disabled={loading}
                  onClick={() => _handleUpload()}
                >
                  업로드 시작
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </div>
            </>
        }
        <input type="file" id="file_input" accept="image/png, image/jpeg, image/jpg" onChange={_handleChange} />
      </div>
    </div>
  );
};

export default SendArea;