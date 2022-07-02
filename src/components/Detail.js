import styles from '../scss/Detail.module.scss'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Button, Container, Row, Col } from 'react-bootstrap'
import Comments from './Comments';
import LoadingSpinner from './ui/LoadingSpinner';

function Detail() {
    const API_URL = process.env.REACT_APP_API_URL
    let params = useParams();
    let navigate = useNavigate();

    const token = localStorage.getItem('token')
    const currentUser = JSON.parse(localStorage.getItem('userData'))

    const [isLoading, setIsLoading] = useState(false)
    const [detail, setDetail] = useState({})
    const getDetail = async () => {
        setIsLoading(true)
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/boards/${params.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setDetail(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getDetail()
    }, [])
    return (
        <>
            { !isLoading ?
            <div>
                <Container className={styles.detailContainer}>
                    <Row>
                        <Col>
                            <h1>{detail.title}</h1>
                        </Col>
                        { currentUser.id === detail.user?.id ? 
                            <Col xs={3} className="text-right">
                                <Button className={styles.editBtn} onClick={() => navigate(`/detail/${params.id}/edit`, { state: {task: detail}})}>수정</Button>
                            </Col> : null 
                        }
                    </Row>
                    <Row>
                        <Col className={styles.userInfoColumn}>
                            { detail.user?.avatar_img ? <div className={styles.avatarPreview}><img src={detail.user?.avatar_img}/></div> 
                            : <div className={styles.avatarDefault} />
                            }
                            <span className={styles.userInfo}>
                                <span className={styles.userName}>{detail.user?.name}</span>
                                <span className={styles.postDate}> | </span>
                                <span className={styles.userEmail}>{detail.user?.email}</span>
                                <p className={styles.postDate}>{moment(detail.created_at).format('YYYY-MM-DD hh:mm')}</p>
                            </span>
                        </Col>
                        <Col xs={12}>
                            <hr />
                            <p className={styles.description}>{detail.description}</p>
                        </Col>
                    </Row>
                </Container>
                <Comments />
            </div> : 
            <LoadingSpinner spinnerPadding={styles.detailContainer} />
            }
        </>
    )
}

export default Detail