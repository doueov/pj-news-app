import { Component } from 'react'
import NewsItem from './NewsItem'
import '../styles/style.css'
import newsAppStyle from '../styles/NewsApp.module.css'

const NewsApp = function (props) {
    useEffect(() => {
        // 주소 수정
        fetch("/api/users")
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
    }, [])

    // API로 요청 보내는 코드 추가
    useEffect(() => {
        fetch("http://localhost:4000/api/users")
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
    }, [])

    if (loading) return <h1>뉴스 기사를 불러오는 중입니다.</h1>

    return (
        <div className={`${newsAppStyle.news_app}`}>
            {
                articles.length === 0
                    ? <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul className={`${newsAppStyle.news_app_list}`}>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default NewsApp