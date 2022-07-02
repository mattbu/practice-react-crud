import { useNavigate } from "react-router-dom"
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import styles from '../../scss/Boards.module.scss'
import moment from "moment"
import { Trash2 } from 'react-feather';


function BoardCard({ post, getList, deletePost }) {
    let navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('userData'))
    return (
        <Container className={styles.card}>
            <Row>
                <Col>
                    <h4 onClick={() => navigate(`/detail/${post.id}`, {state:{post:post}})}>{post.title}</h4>
                </Col>
                { currentUser.id === post.user_id ? <Col xs={3} className="text-right">
                    <Button className={styles.deleteBtn} onClick={(e) => deletePost(e, post.id)}><Trash2 color="tomato" size={24} /></Button>
                </Col> : null 
                }
            </Row>
            <Row>
                <Col className={styles.avatarColumn}>
                    {
                        post.user.avatar_img ? <div className={styles.avatarPreview}><img src={post.user.avatar_img}/></div>
                        : <div className={`${styles.avatarDefault}`} />
                    }
                    <span className={styles.userInfo}>
                        <span>{post.user.name}</span>
                        <span className={styles.postDate}> | </span>
                        <span className={styles.userEmail}>{post.user.email}</span>
                        <p className={styles.postDate}>{moment(post.created_at).format('YYYY-MM-DD hh:mm')} 작성</p>
                    </span>
                </Col>
                <Col xs={12}>
                    <p className={styles.description}>{post.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default BoardCard