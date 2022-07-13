import { useDeferredValue } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { handlerPage, removeNews } from '../../store/slices/news-listSlices';
import { useAppDispatch } from "../../hook/redux-hooks";


const NewsItem = ({ articles, handlerAddToRead, handlerPage, filter }: {
  articles: TNewsItem[] | [],
  handlerAddToRead: any,
  handlerPage: any,
  filter: any
}) => {
  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
  console.log(articles);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {
        articles.map((article: TNewsItem, index: number) => (
          // index >= filter.minIndex &&
          // index < filter.maxIndex &&
          <div key ={index} className="site-card-wrapper" style={{ backgroundImage: `url(${article.urlToImage})`, cursor: 'pointer' }} onClick={(e: any) => {
            navigate(`/${article.title}`)
          }}>
            <a >
              <Row gutter={1} style={{ display: 'block' }}>
                <Col >
                  <Card className='card-news' title={article.title} bordered={false} >
                    {article.description}
                  </Card>
                </Col>
              </Row>
              <Button className='btn-more' type="primary" shape="round" >
                add to reading list
              </Button>
            </a>
            <Popover content='Hide'>
              <Button type="primary" shape="round" className='btn-del' onClick={() => dispatch(removeNews(art))}>
                <DeleteOutlined />
              </Button>
            </Popover>
          </div>
        ))
      }
      {/* <Pagination
        current={filter.current}
        onChange={handlerPage}
        total={articles?.length}
      /> */}
    </>

  )
}

export default NewsItem