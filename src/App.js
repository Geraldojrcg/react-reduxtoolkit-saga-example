import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/ducks/posts/slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { isLoading, data, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (error) alert("Error while get posts");
  }, [error]);

  return (
    <div>
      <h1>Fetching posts from jsonplaceholder</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
