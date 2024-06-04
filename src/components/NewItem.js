import newsItemStyle from '../styles/NewsItem.module.css'
import styled from 'styled-components'

const CircledImage = styled.img`
    border: 2px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const NewsItem = function(props) {
    const { title, description, url, urlToImage } = props.article
    
    // 스타일 적용 및 styled component 적용
    return (
        <div>
            <h1 className={newsItemStyle.title}><a className={newsItemStyle.titleLink} href={url} target='_blank'>{title}</a></h1>
            <CircledImage src={urlToImage} />
            <p>{description}</p>
        </div>
    )
}

export default NewsItem