import { Link } from 'react-router-dom'
import Card from "../components/shared/card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to Leave Feedback for a Product or Service</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
