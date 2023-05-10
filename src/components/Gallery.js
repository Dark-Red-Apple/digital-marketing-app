import axios from "axios"
import { async } from "q"
import { useEffect, useState } from "react"
import { Col, Row, Container } from "react-bootstrap"

function Gallery() {
  const [images, setImages] = useState()

  useEffect(() => {
    // console.log("useeffect")

    async function fetchData() {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=10`)

        const data = response.data
        // console.log(response)
        console.log(data)
        setImages(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <Container>
        <Row>
          {images?.map((item) => {
            return (
              <Col lg={3} md={4} xs={12} className="py-2" style={{ height: "200px" }}>
                <img className="w-100 img-fluid object-fit-cover h-100" src={item.download_url} alt={item.author}></img>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
