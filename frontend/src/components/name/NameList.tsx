import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";
import Layout from "../Layout";
import "./NameList.css";

const NameList = () => {
  const { data, loading, error } = useFetch(`${process.env.BASE_URL}/names`);

  if (loading) {
    return <Loading />
  }

  console.log('da ::: ', data)

  if (error || !data) {
    return <Error />
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
