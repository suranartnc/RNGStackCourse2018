import React from 'react'
import axios from 'axios'
import { Carousel, Card, Col } from 'antd'
import styled from 'styled-components'
import { Link } from '@router'
import { connect } from 'react-redux'

const { Meta } = Card

const StyledEntryList = styled(EntryList)`
  .ant-card {
    float: left;
    width: 100%;
    margin-top: 40px;
  }
`

function EntryList({ entries, className }) {
  return (
    <div className={className}>
      {entries.map(function(entry) {
        return (
          <Col key={entry.id} span={6}>
            <Link route="entry" params={{ id: entry.id }}>
              <Card
                hoverable
                cover={
                  <img alt="example" src="http://via.placeholder.com/240x300" />
                }
              >
                <Meta title={entry.title} description={entry.author.name} />
              </Card>
            </Link>
          </Col>
        )
      })}
    </div>
  )
}

const StyledHighlight = styled(Highlight)`
  .slick-slide h3 {
    position: absolute;
    padding: 20px 40px;
    width: 100%;
    bottom: 0;
    color: white;
    background: black;
    opacity: 0.8;
  }
  .slick-dots {
    height: 20px;
    bottom: -20px;
    li {
      &.slick-active button {
        width: 20px;
        background: black;
      }
      button {
        background: gray;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
`

function Highlight({ className, entries }) {
  return (
    <Carousel className={className}>
      {entries.map(function(entry) {
        return (
          <div key={entry.id}>
            <Link route="entry" params={{ id: entry.id }}>
              <img src="http://via.placeholder.com/1024x480" />
            </Link>
            <Link route="entry" params={{ id: entry.id }}>
              <h3>{entry.title}</h3>
            </Link>
          </div>
        )
      })}
    </Carousel>
  )
}

const api = 'http://localhost:4000'

class HomePage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch({
      type: 'HIGHTLIGHT_FETCH',
      payload: axios.get(api + '/posts?_limit=5')
    })

    return {}
  }
  render() {
    return (
      <div>
        <StyledHighlight entries={this.props.highlights} />
        {/* <StyledEntryList entries={this.props.cards} /> */}
      </div>
    )
  }
}

export default connect(({ entryList }) => ({ highlights: entryList }))(HomePage)
