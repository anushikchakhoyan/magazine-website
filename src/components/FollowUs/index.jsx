import {Link} from "react-router-dom";

const FollowUs = () => {
  return (
      <div className="my-8 bg-gray-50 p-8 w-auto mx-auto flex-center">
          <p>
              Discover Magazine writers you already follow on.
              Learn more
              <Link to="/about" className="underline px-1">about us</Link>
              or
              <Link to="/join" className="underline px-1">join us</Link>
          </p>
      </div>
  )
}

export default FollowUs;