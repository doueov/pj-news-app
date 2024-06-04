import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
// 뉴스 데이터 가져오기
import data from '../news.json'

const NewsApp = function (props) {
    const [articles, setArticles] = useState([])
    // 로딩 상태 조정
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        // 원래는 fetch 함수 써서 API에 요청 보내야 하지만 여기서는 적당히 흉내만 내기
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data.articles)
                setArticles(data.articles)
                setLoading(false)
            }, 3000)
        })
    }, [])

    if (loading) return <h1>뉴스 기사를 불러오는 중입니다.</h1>

    return (
        <div id="news-app">
            {
                articles.length === 0
                    ? <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul>
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