import useFetch from "../../hooks/useFetch";
import Layout from "../Layout";
import "./NameList.css";

const NameList = () => {
  const { data, loading, error } = useFetch("http://127.0.0.1:8000/names");

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }
  
  return (
    <Layout>
      <section className="names_wrapper">
        <ul>
            {data.names.map(name => (
              <li>
                <h4>{name.title}</h4>
                <p>{name.meaning}</p>
              </li>
            ))}
        </ul>
        <div className="pagination" style={{border: 'thin solid red'}}>
            1, 2, 3
        </div>
      </section>
    </Layout>
  )
}

export default NameList
