import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../utils/api';
import SideBar from '../components/SideBar';
import VideoCard from '../components/VideoCard';

const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  //1) urlden aratılan terimi al
  const query = searchParams.get('search_query');

  //2) api'dan aratılan terime uygun verileri al
  useEffect(() => {
    const params = {
      query: query,
      // eğerki sayfa değeri 1 den büyüksa yeni yapılcak istekte önceki isteğin tokenini
      // ekleyerek bir sonraki sayfanın verilerini alabiliyoruz
      token: page > 1 ? token : undefined,
    };

    api.get(`/search`, { params }).then((res) => {
      // veirlerin devamını almamıı sağlaycak token state'i
      setToken(res.data.continuation);
      // gelen videolar
      setData((prev) => prev.concat(res.data.data));
    });
  }, [query, page]);

  return (
    <div className="flex gap-3">
      <SideBar />

      <div className="mx-auto h-[90vh] overflow-auto p-4">
        <h2 className="text-xl mb-5">
          <span className="font-bold">{query}</span> için sonuçlar
        </h2>

        <div className="flex flex-col gap-5 justify-center">
          {data?.map(
            (item) =>
              item.type === 'video' && (
                <VideoCard key={item.id} video={item} isRow={true} />
              )
          )}

          <button
            onClick={() => setPage(page + 1)}
            className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition"
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;