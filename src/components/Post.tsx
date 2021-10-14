import Skeleton from "@srmagura/react-loading-skeleton";
import React from "react";
import "@srmagura/react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export interface PostProps {
  loading: boolean;
}

export const Post = ({ loading }: PostProps): React.ReactElement => (
  <div className="post">
    <div>
      {loading ? (
        <div>
          <div>
            <Skeleton height={62} width={62} circle={true} />
            <Skeleton height={25} width={500} />
          </div>
          <div>
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <FontAwesomeIcon icon={faSmile} size="4x" />
            <p>John Doe</p>
          </div>
          <div>
            <h3>Use React Loading Skeleton!</h3>
            <p style={{ width: "500px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
              Suspendisse faucibus aliquam ante, sit amet iaculis dolor posuere
              et. In ut placerat leo.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);