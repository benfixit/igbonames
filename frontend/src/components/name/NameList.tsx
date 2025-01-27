import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";
import "./NameList.css";
import { Name } from "../../typings";
import { useTheme } from "../../store/ThemeContext";
import { Link } from "react-router-dom";

const NameList = () => {
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_APP_BASE_URL}/names`);

      const { theme } = useTheme();
  
      console.log("Theme value ::: ", theme, "name list");

  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    return <Error />
  }

  return (
      <section className="names_wrapper">
        <ul>
          {/** @ts-ignore */}
            {data.names.map((name: Name) => (
              <li key={name._id}>
                <Link to={`/names/${name.slug}`}>{name.title}</Link>
              </li>
            ))}
        </ul>
        <div className="pagination" style={{border: 'thin solid red'}}>
            1, 2, 3
        </div>
      </section>
  )
}

export default NameList
