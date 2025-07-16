import coverImage from '../assets/medicinal-herbs.jpg'

export default function Main() {
  return(
    <section className="wrapper-cover-image">
      <h1 className="title">The Calm Of Nature in Every Morning Cup</h1>
      <img className="cover-image" src={coverImage}/>
    </section>
  )
}