import { Component } from 'react'
import NewsItem from './NewsItem'
// 스타일 추가
import '../styles/style.css'
import newsAppStyle from '../styles/NewsApp.module.css'

const NewsApp = function(props) {

    // ...

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