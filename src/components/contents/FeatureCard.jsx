
const FeatureCard = ({imageLink, title, content}) => {
  return (
    <div>
      <div>
        <img src={imageLink} alt="icon"/>
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default FeatureCard